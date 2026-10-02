// app.js - Logika Interaktif Portal Batik Nusantara

// --- STATE MANAGEMENT ---
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'newest';
let bookmarks = JSON.parse(localStorage.getItem('wastra_batik_bookmarks') || '[]');
let currentReadingArticle = null;
let currentFontSizeLevel = 0; // -1: small, 0: normal, 1: large, 2: extra large
let quizAnswers = {};
let commentsStore = JSON.parse(localStorage.getItem('wastra_batik_comments') || '{}');

// Pre-fill some authentic Indonesian reader comments
if (Object.keys(commentsStore).length === 0) {
  commentsStore = {
    "sejarah-batik-unesco": [
      {
        name: "Budi Santoso",
        date: "3 Oktober 2026",
        text: "Ulasan yang sangat mencerahkan! Sebagai generasi muda, baru tahu kalau motif batik itu punya siklus hidup dari lahir sampai wafat. Bangga sekali dengan warisan leluhur kita."
      },
      {
        name: "Endang Wulandari",
        date: "2 Oktober 2026",
        text: "Bangga memakai batik setiap hari Jumat ke kantor. Selamat Hari Batik Nasional untuk seluruh rakyat Indonesia!"
      }
    ],
    "filosofi-mega-mendung": [
      {
        name: "Dimas Arya",
        date: "29 September 2026",
        text: "Kisah cinta Sunan Gunung Jati dan Putri Ong Tien Nio selalu membuat saya kagum akan betapa terbukanya kebudayaan pesisir Cirebon terhadap akulturasi."
      }
    ],
    "perbedaan-batik-tulis-cap-printing": [
      {
        name: "Laras Pratiwi",
        date: "26 September 2026",
        text: "Terima kasih tipsnya! Selama ini sering keliru membedakan batik cap dan printing. Sekarang tahu harus melihat bagian belakang kain."
      }
    ]
  };
  localStorage.setItem('wastra_batik_comments', JSON.stringify(commentsStore));
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderHeroFeatured();
  renderArticles();
  renderMotifGallery();
  renderQuiz();
  updateBookmarkBadge();
  setupScrollListener();
  checkUrlHash();

  window.addEventListener('hashchange', checkUrlHash);
});

// --- RENDER HERO FEATURED ARTICLE ---
function renderHeroFeatured() {
  const featured = BATIK_ARTICLES.find(a => a.featured) || BATIK_ARTICLES[0];
  const heroCard = document.getElementById('hero-featured-card');
  if (!heroCard) return;

  heroCard.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <!-- Left Column: Article Teaser -->
      <div class="lg:col-span-7 space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 bg-amber-500 text-soga-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-md">
            ⭐ Artikel Utama Pilihan Redaksi
          </span>
          <span class="text-xs text-amber-200/90 font-medium">
            ${featured.category} • ${featured.readingTime}
          </span>
        </div>

        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-culture text-amber-100 leading-tight">
          ${featured.title}
        </h1>

        <p class="text-stone-300 text-sm sm:text-base leading-relaxed line-clamp-3">
          ${featured.excerpt}
        </p>

        <!-- Author & Date -->
        <div class="flex items-center gap-3 pt-2">
          <img src="${featured.author.avatar}" alt="${featured.author.name}" class="w-10 h-10 rounded-full border-2 border-amber-400 object-cover">
          <div>
            <div class="text-sm font-bold text-amber-200">${featured.author.name}</div>
            <div class="text-xs text-amber-300/70">${featured.author.role} • ${featured.publishedDate}</div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="pt-4 flex flex-wrap items-center gap-3">
          <button onclick="openArticleModal('${featured.id}')" class="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-soga-950 font-bold text-sm rounded-xl shadow-lg shadow-amber-900/40 transition-all flex items-center gap-2 group">
            <span>Baca Ulasan Lengkap</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button onclick="toggleBookmark('${featured.id}')" class="px-4 py-3 bg-soga-900/80 hover:bg-soga-800 text-amber-200 border border-amber-500/40 rounded-xl text-sm font-medium transition-all flex items-center gap-2">
            <svg class="w-4 h-4 ${isBookmarked(featured.id) ? 'text-amber-400 fill-current' : 'text-amber-200'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span id="hero-bookmark-text">${isBookmarked(featured.id) ? 'Tersimpan' : 'Simpan Nanti'}</span>
          </button>
        </div>
      </div>

      <!-- Right Column: Visual Image with Caption -->
      <div class="lg:col-span-5">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/40 group cursor-pointer" onclick="openArticleModal('${featured.id}')">
          <img src="${featured.coverImage}" alt="${featured.title}" class="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700">
          <div class="absolute inset-0 bg-gradient-to-t from-soga-950/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-3 left-3 right-3 text-[11px] text-amber-200/90 bg-soga-900/90 backdrop-blur-sm p-2.5 rounded-lg border border-amber-600/30">
            📷 ${featured.coverCaption}
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- RENDER ARTICLES LIST WITH FILTERING & SEARCH ---
function renderArticles() {
  const container = document.getElementById('articles-container');
  const emptyState = document.getElementById('empty-state');
  const resultsCount = document.getElementById('results-count-text');

  if (!container) return;

  // Filter
  let filtered = BATIK_ARTICLES.filter(article => {
    // Category match
    const categoryMatch = currentCategory === 'all' || article.categorySlug === currentCategory;
    
    // Search match
    const query = searchQuery.toLowerCase().trim();
    const searchMatch = !query || 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.author.name.toLowerCase().includes(query) ||
      article.tags.some(t => t.toLowerCase().includes(query)) ||
      article.category.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  // Sort
  if (currentSort === 'newest') {
    // Keep standard curated order
  } else if (currentSort === 'popular') {
    filtered.sort((a, b) => b.likes - a.likes);
  } else if (currentSort === 'reading-time') {
    filtered.sort((a, b) => parseInt(a.readingTime) - parseInt(b.readingTime));
  }

  // Update counter
  if (resultsCount) {
    resultsCount.textContent = `Menampilkan ${filtered.length} dari ${BATIK_ARTICLES.length} artikel`;
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  container.innerHTML = filtered.map(article => {
    const bookmarked = isBookmarked(article.id);
    return `
      <article class="article-card bg-white rounded-2xl overflow-hidden border border-stone-200/80 batik-card-shadow flex flex-col transition-all duration-300 group">
        
        <!-- Image & Category Badge -->
        <div class="relative article-card-img-wrap h-48 overflow-hidden bg-stone-100 cursor-pointer" onclick="openArticleModal('${article.id}')">
          <img src="${article.coverImage}" alt="${article.title}" class="w-full h-full object-cover">
          <div class="absolute top-3 left-3">
            <span class="px-2.5 py-1 bg-soga-900/85 backdrop-blur-sm text-amber-200 text-xs font-semibold rounded-md border border-amber-700/50">
              ${article.category}
            </span>
          </div>
          <button 
            onclick="event.stopPropagation(); toggleBookmark('${article.id}')" 
            class="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white text-stone-700 transition-colors"
            title="${bookmarked ? 'Hapus Simpanan' : 'Simpan Artikel'}"
          >
            <svg class="w-4 h-4 ${bookmarked ? 'text-amber-600 fill-current' : 'text-stone-600'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-5 flex-grow flex flex-col justify-between">
          <div>
            <!-- Meta reading time and date -->
            <div class="flex items-center gap-2 text-xs text-stone-500 mb-2">
              <span>⏱️ ${article.readingTime}</span>
              <span>•</span>
              <span>👁️ ${article.views} pembaca</span>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold font-serif-culture text-stone-900 group-hover:text-soga-700 transition-colors line-clamp-2 cursor-pointer leading-snug" onclick="openArticleModal('${article.id}')">
              ${article.title}
            </h3>

            <!-- Excerpt -->
            <p class="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed">
              ${article.excerpt}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mt-3">
              ${article.tags.slice(0, 3).map(tag => `
                <span class="text-[10px] bg-amber-50 text-amber-800 border border-amber-200/60 px-2 py-0.5 rounded">
                  #${tag}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Bottom: Author info and Read Button -->
          <div class="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <img src="${article.author.avatar}" alt="${article.author.name}" class="w-7 h-7 rounded-full object-cover border border-amber-300">
              <span class="text-xs font-semibold text-stone-700">${article.author.name}</span>
            </div>

            <button onclick="openArticleModal('${article.id}')" class="text-xs font-bold text-soga-700 hover:text-soga-900 flex items-center gap-1 group/btn">
              <span>Baca</span>
              <span class="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>

        </div>

      </article>
    `;
  }).join('');
}

// --- RENDER MOTIF GALLERY (Interactive Kamus) ---
function renderMotifGallery() {
  const grid = document.getElementById('motif-cards-grid');
  if (!grid) return;

  grid.innerHTML = MOTIF_GALLERY.map((motif, index) => `
    <div class="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between cursor-pointer group" onclick="openMotifModal(${index})">
      <div>
        <div class="relative h-44 rounded-xl overflow-hidden mb-4 bg-stone-100">
          <img src="${motif.image}" alt="${motif.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-soga-900/80 backdrop-blur-sm text-amber-200 text-[11px] font-semibold rounded-md">
            ${motif.category}
          </span>
        </div>
        <div class="flex items-baseline justify-between">
          <h3 class="text-xl font-bold font-serif-culture text-soga-900 group-hover:text-amber-600 transition-colors">
            Motif ${motif.name}
          </h3>
          <span class="text-xs text-stone-500 font-medium">${motif.origin}</span>
        </div>
        <p class="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
          ${motif.meaning}
        </p>
      </div>

      <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
        <span class="text-amber-700 font-medium">Klik untuk filosofi lengkap</span>
        <span class="text-amber-700 font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
      </div>
    </div>
  `).join('');
}

// --- RENDER QUIZ SECTION ---
function renderQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  container.innerHTML = BATIK_QUIZ.map((q, qIndex) => `
    <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200" id="quiz-card-${qIndex}">
      <div class="flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-soga-700 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
          ${qIndex + 1}
        </span>
        <div class="flex-grow">
          <h4 class="text-base font-bold text-stone-900 mb-3">${q.question}</h4>
          <div class="space-y-2">
            ${q.options.map((opt, optIndex) => `
              <button 
                onclick="handleQuizSelect(${qIndex}, ${optIndex})" 
                class="quiz-option-btn w-full text-left px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-amber-50 hover:border-amber-400 text-xs sm:text-sm font-medium transition-colors flex items-center justify-between"
                data-q="${qIndex}" 
                data-opt="${optIndex}"
              >
                <span>${opt}</span>
                <span class="quiz-check-icon opacity-0">✓</span>
              </button>
            `).join('')}
          </div>
          <div id="quiz-explanation-${qIndex}" class="hidden mt-3 p-3 rounded-lg text-xs leading-relaxed"></div>
        </div>
      </div>
    </div>
  `).join('');
}

function handleQuizSelect(qIndex, optIndex) {
  if (quizAnswers[qIndex] !== undefined) return; // Prevent changing after selected
  quizAnswers[qIndex] = optIndex;

  const currentQ = BATIK_QUIZ[qIndex];
  const isCorrect = optIndex === currentQ.correct;

  // Visual highlight for options
  const buttons = document.querySelectorAll(`button[data-q="${qIndex}"]`);
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.correct) {
      btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-900', 'font-bold');
      btn.querySelector('.quiz-check-icon').classList.remove('opacity-0');
      btn.querySelector('.quiz-check-icon').textContent = '✓';
    } else if (idx === optIndex && !isCorrect) {
      btn.classList.add('bg-rose-100', 'border-rose-400', 'text-rose-900');
      btn.querySelector('.quiz-check-icon').classList.remove('opacity-0');
      btn.querySelector('.quiz-check-icon').textContent = '✗';
    }
  });

  // Show explanation
  const expBox = document.getElementById(`quiz-explanation-${qIndex}`);
  if (expBox) {
    expBox.classList.remove('hidden');
    if (isCorrect) {
      expBox.className = 'mt-3 p-3 rounded-lg text-xs leading-relaxed bg-emerald-50 text-emerald-800 border border-emerald-200';
      expBox.innerHTML = `<strong>Tepat sekali!</strong> ${currentQ.explanation}`;
    } else {
      expBox.className = 'mt-3 p-3 rounded-lg text-xs leading-relaxed bg-rose-50 text-rose-800 border border-rose-200';
      expBox.innerHTML = `<strong>Kurang tepat.</strong> ${currentQ.explanation}`;
    }
  }

  // Check if all questions completed
  if (Object.keys(quizAnswers).length === BATIK_QUIZ.length) {
    showQuizResults();
  }
}

function showQuizResults() {
  const resultsDiv = document.getElementById('quiz-results');
  const title = document.getElementById('quiz-score-title');
  const desc = document.getElementById('quiz-score-desc');
  const emoji = document.getElementById('quiz-score-emoji');

  let score = 0;
  BATIK_QUIZ.forEach((q, idx) => {
    if (quizAnswers[idx] === q.correct) score++;
  });

  title.textContent = `Skor Anda: ${score} dari ${BATIK_QUIZ.length}`;

  if (score === 3) {
    emoji.textContent = '👑';
    desc.textContent = 'Luar Biasa! Anda adalah Ahli Wastra Sejati dengan pemahaman mendalam tentang filosofi dan sejarah batik Indonesia.';
  } else if (score === 2) {
    emoji.textContent = '✨';
    desc.textContent = 'Bagus sekali! Wawasan budaya batik Anda sudah cukup tinggi. Terus gali artikel-artikel lainnya di portal ini!';
  } else {
    emoji.textContent = '🌱';
    desc.textContent = 'Awal yang baik! Luangkan waktu sejenak membaca artikel-artikel kami untuk lebih mengenal mahakarya bangsa ini.';
  }

  resultsDiv.classList.remove('hidden');
  resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
  quizAnswers = {};
  document.getElementById('quiz-results').classList.add('hidden');
  renderQuiz();
}

// --- ARTICLE READER MODAL LOGIC ---
function openArticleModal(articleId) {
  const article = BATIK_ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  currentReadingArticle = article;
  window.location.hash = `artikel-${article.id}`;

  const modal = document.getElementById('article-reader-modal');
  const container = document.getElementById('modal-article-container');
  const catBadge = document.getElementById('modal-category-badge');
  const readingTime = document.getElementById('modal-reading-time');
  const bookmarkIcon = document.getElementById('modal-bookmark-icon');

  catBadge.textContent = article.category;
  readingTime.textContent = article.readingTime;

  updateModalBookmarkState();

  // Get comments for this article
  const comments = commentsStore[article.id] || [];

  container.innerHTML = `
    <!-- Article Header -->
    <header class="mb-8">
      <div class="flex flex-wrap items-center gap-2 mb-3">
        <span class="text-xs font-semibold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
          ${article.category}
        </span>
        <span class="text-xs text-stone-500">Dipublikasikan: ${article.publishedDate}</span>
      </div>

      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-culture text-stone-900 leading-tight">
        ${article.title}
      </h1>

      <!-- Author info -->
      <div class="flex items-center gap-3.5 mt-5 pt-4 border-t border-stone-200">
        <img src="${article.author.avatar}" alt="${article.author.name}" class="w-12 h-12 rounded-full object-cover border-2 border-amber-400">
        <div>
          <div class="text-sm font-bold text-stone-900">${article.author.name}</div>
          <div class="text-xs text-stone-500">${article.author.role}</div>
        </div>
      </div>
    </header>

    <!-- Cover Image -->
    <figure class="mb-8 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
      <img src="${article.coverImage}" alt="${article.title}" class="w-full max-h-96 object-cover">
      <figcaption class="p-3 bg-stone-100 text-xs text-stone-600 text-center italic">
        ${article.coverCaption}
      </figcaption>
    </figure>

    <!-- Article Content -->
    <div id="article-content-body" class="article-body font-normal">
      ${article.content}
    </div>

    <!-- Tags -->
    <div class="mt-8 pt-6 border-t border-stone-200">
      <div class="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Tag Terkait:</div>
      <div class="flex flex-wrap gap-2">
        ${article.tags.map(t => `<span class="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-lg">#${t}</span>`).join('')}
      </div>
    </div>

    <!-- Interactive Reader Interaction (Like & Share) -->
    <div class="mt-8 p-4 bg-amber-50/80 rounded-2xl border border-amber-200 flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <button onclick="handleLikeArticle('${article.id}')" class="px-4 py-2 bg-white hover:bg-rose-50 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold flex items-center gap-2 transition-all">
          <span>❤️ Suka Artikel Ini</span>
          <span id="article-likes-count">${article.likes}</span>
        </button>
        <span class="text-xs text-stone-500">Membantu menyebarkan wawasan wastra Nusantara</span>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="shareToWhatsApp('${article.title}')" class="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors">
          <span>Bagikan ke WA</span>
        </button>
      </div>
    </div>

    <!-- Comments Section -->
    <section class="mt-10 pt-8 border-t border-stone-200">
      <h3 class="text-xl font-bold font-serif-culture text-stone-900 mb-4">
        Diskusi Pembaca (<span id="comments-count">${comments.length}</span>)
      </h3>

      <!-- Post Comment Form -->
      <form onsubmit="handlePostComment(event, '${article.id}')" class="mb-6 p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">Nama Lengkap</label>
          <input type="text" id="comment-author" required placeholder="Contoh: Siti Rahayu" class="w-full text-xs sm:text-sm p-2.5 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500">
        </div>
        <div>
          <label class="block text-xs font-bold text-stone-700 mb-1">Pendapat / Komentar Anda</label>
          <textarea id="comment-text" required rows="3" placeholder="Tuliskan apresiasi, pertanyaan, atau refleksi Anda tentang batik ini..." class="w-full text-xs sm:text-sm p-2.5 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
        </div>
        <button type="submit" class="px-4 py-2 bg-soga-700 hover:bg-soga-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm">
          Kirim Komentar
        </button>
      </form>

      <!-- Comments Stream -->
      <div id="comments-stream" class="space-y-3">
        ${renderCommentsHtml(comments)}
      </div>
    </section>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  applyFontSize();
}

function closeArticleModal() {
  const modal = document.getElementById('article-reader-modal');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  currentReadingArticle = null;
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

function renderCommentsHtml(comments) {
  if (!comments || comments.length === 0) {
    return `<p class="text-xs text-stone-500 italic">Belum ada komentar. Jadilah yang pertama memberikan apresiasi!</p>`;
  }
  return comments.map(c => `
    <div class="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-bold text-stone-900">${c.name}</span>
        <span class="text-[10px] text-stone-500">${c.date}</span>
      </div>
      <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">${c.text}</p>
    </div>
  `).join('');
}

function handlePostComment(event, articleId) {
  event.preventDefault();
  const nameInput = document.getElementById('comment-author');
  const textInput = document.getElementById('comment-text');

  if (!nameInput.value.trim() || !textInput.value.trim()) return;

  const newComment = {
    name: nameInput.value.trim(),
    date: "Baru saja",
    text: textInput.value.trim()
  };

  if (!commentsStore[articleId]) {
    commentsStore[articleId] = [];
  }
  commentsStore[articleId].unshift(newComment);
  localStorage.setItem('wastra_batik_comments', JSON.stringify(commentsStore));

  // Re-render comments stream
  const stream = document.getElementById('comments-stream');
  const count = document.getElementById('comments-count');
  if (stream) stream.innerHTML = renderCommentsHtml(commentsStore[articleId]);
  if (count) count.textContent = commentsStore[articleId].length;

  nameInput.value = '';
  textInput.value = '';
  showToast("Komentar Anda berhasil dipublikasikan!", "💬");
}

function handleLikeArticle(articleId) {
  const article = BATIK_ARTICLES.find(a => a.id === articleId);
  if (!article) return;
  article.likes += 1;
  const countSpan = document.getElementById('article-likes-count');
  if (countSpan) countSpan.textContent = article.likes;
  showToast("Terima kasih atas apresiasi Anda!", "❤️");
}

function shareToWhatsApp(title) {
  const url = window.location.href;
  const text = encodeURIComponent(`Baca ulasan menarik seputar Batik Indonesia: "${title}" di WastraBatik:\n${url}`);
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}

function shareArticleModal() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast("Tautan artikel berhasil disalin ke clipboard!", "📋");
    });
  } else {
    showToast("Tautan artikel siap dibagikan!", "🔗");
  }
}

// --- FONT SIZE ADJUSTMENT IN MODAL ---
function adjustArticleFontSize(delta) {
  currentFontSizeLevel = Math.max(-1, Math.min(2, currentFontSizeLevel + delta));
  applyFontSize();
}

function applyFontSize() {
  const bodyEl = document.getElementById('article-content-body');
  if (!bodyEl) return;

  const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
  bodyEl.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl');

  const selectedSize = sizes[currentFontSizeLevel + 1];
  bodyEl.classList.add(selectedSize);
}

// --- MOTIF DETAIL MODAL ---
function openMotifModal(index) {
  const motif = MOTIF_GALLERY[index];
  if (!motif) return;

  const modal = document.getElementById('motif-detail-modal');
  const content = document.getElementById('motif-modal-content');

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="h-64 rounded-xl overflow-hidden shadow-md border border-stone-200">
        <img src="${motif.image}" alt="${motif.name}" class="w-full h-full object-cover">
      </div>
      <div>
        <span class="text-xs font-bold uppercase tracking-wider text-soga-600 bg-amber-100 px-2.5 py-0.5 rounded">
          ${motif.category}
        </span>
        <h3 class="text-2xl font-bold font-serif-culture text-soga-900 mt-2">Motif ${motif.name}</h3>
        <p class="text-xs font-semibold text-stone-500 mb-3">Asal Daerah: ${motif.origin}</p>
        
        <div class="space-y-3 text-xs sm:text-sm text-stone-700">
          <div>
            <strong class="text-soga-800">Filosofi & Makna Batin:</strong>
            <p class="mt-0.5 leading-relaxed text-stone-600">${motif.meaning}</p>
          </div>
          <div>
            <strong class="text-soga-800">Peruntukan Tradisi:</strong>
            <p class="mt-0.5 leading-relaxed text-stone-600">${motif.usage}</p>
          </div>
        </div>

        <button onclick="closeMotifModal()" class="mt-5 px-4 py-2 bg-soga-700 hover:bg-soga-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm">
          Tutup
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeMotifModal() {
  document.getElementById('motif-detail-modal').classList.add('hidden');
}

// --- BOOKMARKS MANAGEMENT ---
function isBookmarked(articleId) {
  return bookmarks.includes(articleId);
}

function toggleBookmark(articleId) {
  const index = bookmarks.indexOf(articleId);
  if (index > -1) {
    bookmarks.splice(index, 1);
    showToast("Artikel dihapus dari simpanan", "🗑️");
  } else {
    bookmarks.push(articleId);
    showToast("Artikel berhasil disimpan ke daftar baca!", "🔖");
  }
  localStorage.setItem('wastra_batik_bookmarks', JSON.stringify(bookmarks));
  updateBookmarkBadge();
  renderArticles();
  renderHeroFeatured();
  updateModalBookmarkState();
}

function toggleBookmarkCurrentArticle() {
  if (currentReadingArticle) {
    toggleBookmark(currentReadingArticle.id);
  }
}

function updateModalBookmarkState() {
  const icon = document.getElementById('modal-bookmark-icon');
  if (!icon || !currentReadingArticle) return;

  if (isBookmarked(currentReadingArticle.id)) {
    icon.classList.remove('text-stone-500');
    icon.classList.add('text-amber-600', 'fill-current');
  } else {
    icon.classList.remove('text-amber-600', 'fill-current');
    icon.classList.add('text-stone-500');
  }
}

function updateBookmarkBadge() {
  const badge = document.getElementById('bookmark-count-badge');
  if (badge) {
    badge.textContent = bookmarks.length;
  }
}

function openBookmarksModal() {
  const modal = document.getElementById('bookmarks-modal');
  const container = document.getElementById('bookmarks-list-container');
  const footerText = document.getElementById('bookmarks-count-footer');

  footerText.textContent = `${bookmarks.length} artikel disimpan`;

  if (bookmarks.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-stone-500 text-sm">
        <span class="text-3xl block mb-2">🔖</span>
        Belum ada artikel yang Anda simpan.<br>Tekan ikon simpan pada kartu artikel untuk membaca nanti.
      </div>
    `;
  } else {
    const savedArticles = BATIK_ARTICLES.filter(a => bookmarks.includes(a.id));
    container.innerHTML = savedArticles.map(article => `
      <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors">
        <div class="flex items-center gap-3 overflow-hidden cursor-pointer flex-grow" onclick="closeBookmarksModal(); openArticleModal('${article.id}')">
          <img src="${article.coverImage}" alt="${article.title}" class="w-12 h-12 rounded-lg object-cover shrink-0">
          <div class="overflow-hidden">
            <h4 class="text-xs font-bold text-stone-900 truncate">${article.title}</h4>
            <span class="text-[11px] text-stone-500">${article.category} • ${article.readingTime}</span>
          </div>
        </div>
        <button onclick="toggleBookmark('${article.id}'); openBookmarksModal();" class="text-stone-400 hover:text-rose-600 p-1.5" title="Hapus">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    `).join('');
  }

  modal.classList.remove('hidden');
}

function closeBookmarksModal() {
  document.getElementById('bookmarks-modal').classList.add('hidden');
}

function clearAllBookmarks() {
  if (confirm("Apakah Anda yakin ingin menghapus semua artikel tersimpan?")) {
    bookmarks = [];
    localStorage.removeItem('wastra_batik_bookmarks');
    updateBookmarkBadge();
    renderArticles();
    renderHeroFeatured();
    openBookmarksModal();
    showToast("Semua artikel tersimpan telah dibersihkan.", "🗑️");
  }
}

// --- FILTER & SEARCH HANDLERS ---
function handleSearch(val) {
  searchQuery = val;
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) {
    if (val) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }
  renderArticles();
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  searchQuery = '';
  document.getElementById('clear-search-btn').classList.add('hidden');
  renderArticles();
}

function filterByCategory(cat) {
  currentCategory = cat;

  // Update pills UI
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(pill => {
    if (pill.getAttribute('data-category') === cat) {
      pill.classList.add('pill-active');
    } else {
      pill.classList.remove('pill-active');
    }
  });

  renderArticles();

  // Smooth scroll to articles section
  const section = document.getElementById('daftar-artikel');
  if (section && window.scrollY < section.offsetTop - 100) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleSort(val) {
  currentSort = val;
  renderArticles();
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  currentSort = 'newest';

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'newest';

  filterByCategory('all');
}

function resetToHome() {
  resetFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- READING PROGRESS & SCROLL LISTENER ---
function setupScrollListener() {
  const progressBar = document.getElementById('reading-progress-bar');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';
  });
}

// --- HASH ROUTING ---
function checkUrlHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#artikel-')) {
    const id = hash.replace('#artikel-', '');
    openArticleModal(id);
  }
}

// --- NEWSLETTER FORM ---
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletter-email');
  if (emailInput && emailInput.value) {
    showToast(`Terima kasih! Warta mingguan akan dikirimkan ke ${emailInput.value}`, "✉️");
    emailInput.value = '';
  }
}

// --- MOBILE MENU TOGGLE ---
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// --- TOAST NOTIFICATION HELPER ---
let toastTimeout = null;
function showToast(message, icon = "✨") {
  const toast = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  const iconEl = document.getElementById('toast-icon');

  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
