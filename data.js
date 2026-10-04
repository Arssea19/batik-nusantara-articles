// data/articles.js - Database Lengkap Artikel Batik Nusantara

const BATIK_ARTICLES = [
  {
    id: "sejarah-batik-unesco",
    slug: "sejarah-batik-unesco-warisan-kemanusiaan",
    title: "Menyingkap Tabir Sejarah Batik: Dari Ritual Keraton Menuju Mahakarya Warisan Dunia UNESCO",
    excerpt: "Bagaimana sehelai kain mori dengan goresan malam panas berevolusi dari busana sakral bangsawan keraton menjadi identitas pemersatu bangsa yang diakui dunia internasional.",
    category: "Sejarah & Warisan",
    categorySlug: "sejarah",
    author: {
      name: "Dr. Raden Ayu Kartika",
      role: "Kurator Seni & Peneliti Wastra Tradisional",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    publishedDate: "2 Oktober 2026",
    readingTime: "7 menit baca",
    featured: true,
    views: "14.2k",
    likes: 842,
    coverImage: "img/batik1.jpg",
    coverCaption: "Proses membatik tulis tradisional menggunakan canting tembaga dan malam panas.",
    tags: ["UNESCO", "Hari Batik Nasional", "Keraton Jawa", "Sejarah", "Wastra"],
    content: `
      <p class="lead-text">Setiap tanggal 2 Oktober, Indonesia merayakan <strong>Hari Batik Nasional</strong>. Momen ini bukan sekadar seremoni mengenakan busana bercorak, melainkan penghormatan atas pengakuan resmi UNESCO pada 2 Oktober 2009 di Abu Dhabi yang menobatkan Batik Indonesia ke dalam <em>Representative List of the Intangible Cultural Heritage of Humanity</em> (Warisan Budaya Takbenda untuk Kemanusiaan).</p>
      
      <h2>Akar Kata dan Filosofi Kemunculannya</h2>
      <p>Secara etimologi, kata <strong>"Batik"</strong> berasal dari perpaduan dua kata dalam bahasa Jawa: <em>"amba"</em> yang berarti menulis atau membentangkan, dan <em>"titik"</em> yang bermakna membuat titik-titik. Makna filosofis ini menegaskan bahwa batik sejatinya bukanlah nama motif kain, melainkan <strong>teknik perintangan warna</strong> dengan menggunakan lilin malam (wax-resist dyeing) yang diaplikasikan di atas bentangan kain menggunakan alat canting atau cap tembaga.</p>

      <blockquote class="article-quote">
        "Batik dudu mung rerengganing busana, nanging pandoming urip tumraping manungsa." — Batik bukan sekadar hiasan busana, melainkan kompas kehidupan bagi manusia.
      </blockquote>

      <h2>Dari Dinding Candi Hingga Ruang Sakral Keraton</h2>
      <p>Jejak teknik perintangan warna di Nusantara telah tercatat sejak masa lampau. Relief arca pada Candi Prajnaparamita dari abad ke-13 di Jawa Timur telah memperlihatkan busana dengan ukiran ornamen bunga teratai yang sangat menyerupai motif batik kuno. Pada masa kejayaan Kerajaan Majapahit, batik berkembang sebagai busana para raja dan petinggi kerajaan.</p>
      <p>Evolusi paling berpengaruh terjadi pada era <strong>Kesultanan Mataram Islam</strong>, yang kemudian terpecah menjadi Kasunanan Surakarta dan Kasultanan Ngayogyakarta Hadiningrat melalui Perjanjian Giyanti (1755). Di dalam dinding benteng keraton inilah, proses membatik diangkat ke derajat spiritual tertinggi: sebuah laku tirakat atau meditasi batin di mana para putri keraton memohon petunjuk Hyang Widhi melalui ketelitian torehan canting.</p>

      <div class="info-card">
        <h4>Mengapa UNESCO Mengakui Batik Indonesia?</h4>
        <p>UNESCO mengakui Batik Indonesia bukan sekadar karena keindahan visualnya, tetapi karena batik memenuhi kriteria kebudayaan holistik:</p>
        <ul>
          <li><strong>Siklus Hidup Manusia:</strong> Kain batik menemani orang Indonesia sejak lahir (motif <em>Gendongan</em>), pernikahan (motif <em>Sido Mukti</em>, <em>Truntum</em>), hingga kematian (kain kafan motif <em>Slobok</em>).</li>
          <li><strong>Nilai Filosofis:</strong> Setiap lengkungan garis menyimpan doa, berkah, moral, dan tata krama kosmis.</li>
          <li><strong>Kearifan Lokal:</strong> Penggunaan pewarna alam dari akar mengkudu, kayu tingi, dan indigofera mencerminkan harmoni dengan alam.</li>
        </ul>
      </div>

      <h2>Transformasi Menembus Abad Modern</h2>
      <p>Kini batik telah melintasi sekat status sosial dan batas geografis. Dari busana diplomasi kenegaraan Nelson Mandela hingga busana santai harian generasi muda, batik membuktikan daya adaptasinya yang luar biasa tanpa kehilangan akar identitas luhurnya.</p>
    `
  },
  {
    id: "filosofi-mega-mendung",
    slug: "filosofi-makna-motif-mega-mendung-cirebon",
    title: "Filosofi di Balik Motif Mega Mendung: Kedalaman Jiwa, Kesabaran, dan Akulturasi Cirebon",
    excerpt: "Garis awan bergradasi tujuh lapis khas pesisir Cirebon mengajarkan manusia untuk tetap berkepala dingin di saat amarah membakar dan selalu membawa keteduhan laksana hujan rintik.",
    category: "Filosofi Motif",
    categorySlug: "filosofi",
    author: {
      name: "Ki Bagus Rangga",
      role: "Budayawan & Pemerhati Seni Rupa Pesisir",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    publishedDate: "28 September 2026",
    readingTime: "5 menit baca",
    featured: false,
    views: "11.8k",
    likes: 673,
    coverImage: "img/batik2.jpg",
    coverCaption: "Corak awan bergradasi dinamis khas Cirebon yang sarat makna ketenangan.",
    tags: ["Cirebon", "Mega Mendung", "Akulturasi Tionghoa", "Filosofi", "Pesisiran"],
    content: `
      <p class="lead-text">Siapa yang tidak mengenal lekukan awan bertingkat dengan warna biru nan memikat khas Cirebon? <strong>Mega Mendung</strong> adalah mahakarya seni rupa tekstil yang bukan hanya ikonik secara visual, tetapi juga sarat akan pesan kebijaksanaan spiritual hidup.</p>

      <h2>Jejak Cinta Sunan Gunung Jati dan Putri Ong Tien Nio</h2>
      <p>Kelahiran motif Mega Mendung tidak dapat dilepaskan dari sejarah pelabuhan Muara Jati Cirebon pada abad ke-16. Saat itu, salah satu Wali Songo penyebar Islam di Jawa Barat, <strong>Syarif Hidayatullah (Sunan Gunung Jati)</strong>, memperistri seorang putri bangsawan dari Tiongkok bernama <strong>Ong Tien Nio</strong>.</p>
      <p>Pernikahan ini membawa gelombang pertukaran budaya yang masif. Barang-barang keramik porselen Tiongkok bermotif awan bergaya Taoisme masuk ke keraton Cirebon. Para seniman batik keraton Kasepuhan dan Kanoman kemudian meramu ornamen awan tersebut dengan jiwa tarekat sufi Jawa, menghasilkan gubahan bentuk awan yang lancip dan bersap-sap.</p>

      <h2>Gradasi 7 Lapis: Menundukkan Hawa Nafsu</h2>
      <p>Secara pakem klasik, motif Mega Mendung asli memiliki <strong>tujuh lapis gradasi warna</strong>, mulai dari warna biru tua pekat hingga biru muda keputihan:</p>
      <ol class="styled-list">
        <li><strong>Simbol 7 Lapisan Langit:</strong> Menandakan tingkatan mikrokosmos dan makrokosmos menuju kesempurnaan batin manusia.</li>
        <li><strong>Sifat Mendung yang Menyejukkan:</strong> Langit mendung adalah penanda turunnya air hujan yang menyuburkan bumi, perlambang rahmat Ilahi yang menghidupkan jiwa yang gersang.</li>
        <li><strong>Pengendalian Diri:</strong> Pemimpin yang berwibawa harus seperti awan pembawa kesejukan—ia tidak boleh lekas panas hati, emosional, atau congkak saat memegang kekuasaan.</li>
      </ol>

      <blockquote class="article-quote">
        "Mega Mendung ngelingake menungsa kudu jembar dhadhane, bisa ngemut amarah kaya awan kang nampung grimis." — Mega Mendung mengingatkan manusia untuk berlapang dada, menahan amarah laksana awan yang memayungi bumi.
      </blockquote>
    `
  },
  {
    id: "perbedaan-batik-tulis-cap-printing",
    slug: "perbedaan-hakiki-batik-tulis-cap-tekstil-printing",
    title: "Mengenal Perbedaan Hakiki Batik Tulis, Batik Cap, dan Kain Tekstil Bermotif Batik",
    excerpt: "Jangan tertipu saat berbelanja! Pelajari ciri fisik, proses pembuatan, aroma malam, hingga bagian belakang kain agar Anda dapat membedakan karya seni asli dan produk pabrik massal.",
    category: "Teknik & Proses",
    categorySlug: "teknik",
    author: {
      name: "Siti Rahmawati, M.Ds.",
      role: "Desainer Tekstil & Konsultan Wastra",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    publishedDate: "25 September 2026",
    readingTime: "6 menit baca",
    featured: false,
    views: "18.5k",
    likes: 1240,
    coverImage: "img/batik3.jpg",
    coverCaption: "Canting tembaga yang digunakan untuk menorehkan cairan lilin malam pada batik tulis.",
    tags: ["Batik Tulis", "Batik Cap", "Tekstil Printing", "Panduan Belanja", "Kerajinan"],
    content: `
      <p class="lead-text">Di pasaran sering kali kita mendengar pedagang menyebut semua kain bermotif etnik sebagai "batik". Padahal berdasarkan Standar Nasional Indonesia (SNI 0239:2014), istilah <strong>Batik</strong> secara sah hanya disematkan pada kain yang diproses menggunakan <em>perintang lilin malam</em>.</p>

      <h2>Tiga Kategori yang Wajib Anda Pahami</h2>
      <div class="comparison-grid">
        <div class="comp-box">
          <div class="comp-badge gold">Tingkat Tertinggi</div>
          <h3>1. Batik Tulis</h3>
          <p>Dikerjakan 100% secara manual tangan menggunakan alat canting cucuk satu per satu. Membutuhkan waktu pengerjaan 1 hingga 6 bulan tergantung kerumitan ornamen.</p>
        </div>
        <div class="comp-box">
          <div class="comp-badge blue">Efisiensi Tradisional</div>
          <h3>2. Batik Cap</h3>
          <p>Menggunakan stempel plat tembaga (canting cap) yang dicelupkan ke wajan malam mendidih lalu dicapkan berulang di atas mori. Waktu pengerjaan sekitar 3-7 hari.</p>
        </div>
        <div class="comp-box">
          <div class="comp-badge gray">Bukan Batik Asli</div>
          <h3>3. Tekstil Tiruan (Printing)</h3>
          <p>Kain putih yang disablon atau dicetak mesin rotary printing tekstil menggunakan tinta kimia warna sintetis tanpa setitik pun lilin malam.</p>
        </div>
      </div>

      <h2>Tips Jitu Membedakan di Toko Kain</h2>
      <ul class="checklist">
        <li><strong>Balikkan Kain:</strong> Pada batik tulis dan cap yang tembus malam, warna dan motif di sisi depan dan sisi belakang hampir sama terangnya (tembus pandang). Pada tekstil printing, sisi belakang tampak pucat keputihan.</li>
        <li><strong>Perhatikan Kesempurnaan Garis:</strong> Garis pada batik tulis tidak pernah 100% presisi matematis; ada ketebalan garis yang dinamis dan rembesan halus (cecekan) yang justru menjadi jiwa keindahan seni tangan.</li>
        <li><strong>Aroma Khas:</strong> Batik asli selalu menyimpan wangi manis khas lilin lebah, gondorukem, atau getah damar, bukan bau tinta sablon pabrik.</li>
        <li><strong>Harga:</strong> Kain printing dijual puluhan ribu rupiah per meter, sedangkan batik tulis asli umumnya berkisar mulai dari ratusan ribu hingga jutaan rupiah.</li>
      </ul>
    `
  },
  {
    id: "filosofi-motif-kawung",
    slug: "filosofi-makna-motif-kawung-kesucian-para-pemimpin",
    title: "Motif Kawung: Simbol Kesucian Hati, Pengendalian Hawa Nafsu, dan Asal-Usul Manusia",
    excerpt: "Bentuk empat bulatan oval simetris menyerupai buah kolang-kaling ini mengandung konsep kosmik mandala Jawa kuno 'sedulur papat lima pancer' yang sarat kepemimpinan adil.",
    category: "Filosofi Motif",
    categorySlug: "filosofi",
    author: {
      name: "Dr. Raden Ayu Kartika",
      role: "Kurator Seni & Peneliti Wastra Tradisional",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    publishedDate: "20 September 2026",
    readingTime: "5 menit baca",
    featured: false,
    views: "9.4k",
    likes: 512,
    coverImage: "img/kawung.jpg",
    coverCaption: "Keagungan pola geometris simetris motif Kawung melambangkan kesucian batin.",
    tags: ["Kawung", "Filosofi Jawa", "Motif Larangan", "Keraton Surakarta", "Yogyakarta"],
    content: `
      <p class="lead-text">Di antara ratusan motif batik klasik nusantara, <strong>Kawung</strong> adalah salah satu pola tertua yang telah dikenal sejak abad ke-13 pada masa kerajaan Singasari dan Kediri. Polanya yang geometris rapi menyimpan kedalaman spiritual yang luar biasa.</p>

      <h2>Bentuk Buah Kolang-Kaling yang Bermanfaat</h2>
      <p>Secara visual, motif Kawung digambarkan sebagai empat lingkaran lonjong yang memusat, menyerupai irisan buah pohon aren atau kawung (kolang-kaling). Pohon aren dikenal sebagai pohon serbaguna—dari akar, batang, daun (ijuk), hingga buah dan air niranya semua memberi manfaat bagi kehidupan manusia.</p>
      <p>Filosofi ini mengajarkan bahwa seorang ksatria atau pemimpin sejati harus berguna bagi seluruh rakyat dan lingkungannya tanpa pamrih.</p>

      <h2>Konsep Sedulur Papat Limo Pancer</h2>
      <p>Pola empat sisi yang bertemu pada satu titik pusat melambangkan konsep pandangan hidup Jawa: <strong>Sedulur Papat Lima Pancer</strong>. Empat arah mata angin (timur, barat, utara, selatan) mencerminkan empat nafsu dalam diri manusia (Ammanah, Luwamah, Sufiah, dan Mutmainnah), sementara titik tengah adalah nur ilahi atau pancer akal budi yang mengendalikannya.</p>
    `
  },
  {
    id: "akulturasi-batik-pesisir",
    slug: "akulturasi-batik-pesisiran-pekalongan-lasem-madura",
    title: "Jejak Akulturasi Batik Pesisiran: Kisah Eksotis Warna-Warni Pekalongan, Lasem, dan Madura",
    excerpt: "Berbeda dengan corak keraton yang teduh dengan warna tanah soga, batik pesisir meledak dengan warna cerah ceria hasil persilangan darah Tiongkok, Arab, Belanda, dan Melayu.",
    category: "Daerah & Corak",
    categorySlug: "daerah",
    author: {
      name: "Bambang Sudarmanto",
      role: "Antropolog Budaya Maritim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
    },
    publishedDate: "15 September 2026",
    readingTime: "6 menit baca",
    featured: false,
    views: "8.7k",
    likes: 489,
    coverImage: "img/batikpkl.jpg",
    coverCaption: "Warna-warni cerah batik pesisir Pekalongan dan Lasem yang kaya nuansa flora dan fauna.",
    tags: ["Pekalongan", "Lasem", "Batik Tiga Negeri", "Akulturasi", "Batik Madura"],
    content: `
      <p class="lead-text">Jika Anda bepergian menyusuri jalur pantai utara Pulau Jawa (Pantura), Anda akan menyaksikan pemandangan batik yang sama sekali berbeda dengan nuansa cokelat soga khas Keraton Solo dan Yogyakarta. Di sinilah terhampar pesona <strong>Batik Pesisiran</strong> yang terbuka, merdeka, dan penuh warna.</p>

      <h2>Lasem: Kota Tiongkok Kecil dan Merahnya Darah Ayam</h2>
      <p>Lasem di Rembang, Jawa Tengah, melahirkan fenomena akulturasi paling intim antara etnis Jawa dan Tionghoa. Warna merah khas Lasem (<em>abang getih pitik</em>) sangat legendaris karena menggunakan ramuan mineral air tanah setempat yang tidak bisa ditiru di daerah lain.</p>
      <p>Ornamen khas Tionghoa seperti burung hong (phoenix), naga (liong), kupu-kupu, dan bunga seruni berpadu anggun dengan motif parang atau sekar jagad khas Jawa.</p>

      <h2>Mahakarya Batik Tiga Negeri</h2>
      <p>Kisah paling menakjubkan dari sejarah batik pesisir adalah <strong>Batik Tiga Negeri</strong>. Sehelai kain pada zaman dahulu harus diproses di tiga kota berbeda:</p>
      <ul>
        <li><strong>Dicelup warna merah di Lasem</strong> oleh perajin Tionghoa.</li>
        <li><strong>Dicelup warna biru nila di Pekalongan</strong> atau Kudus oleh pembatik lokal.</li>
        <li><strong>Dicelup warna cokelat soga di Solo atau Yogyakarta</strong> oleh empu keraton.</li>
      </ul>
      <p>Kain ini menjadi simbol harmonisasi lintas etnis, suku, dan geografi yang menempuh perjalanan ratusan kilometer demi mencapai sehelai kain legendaris bernilai tak terhingga.</p>
    `
  },
  {
    id: "panduan-merawat-batik-lerak",
    slug: "rahasia-merawat-mencuci-batik-tulis-buah-lerak",
    title: "Merawat Wastra Warisan: Rahasia Mencuci dan Menyimpan Batik Tulis Agar Tetap Awet Puluhan Tahun",
    excerpt: "Mengapa sabun detergen konvensional adalah musuh bebuyutan batik alami? Pelajari teknik penggunaan buah lerak alami, pengeringan teduh angin, hingga pencegahan ngengat dengan lada bubuk.",
    category: "Gaya Hidup & Perawatan",
    categorySlug: "gaya-hidup",
    author: {
      name: "Siti Rahmawati, M.Ds.",
      role: "Desainer Tekstil & Konsultan Wastra",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    publishedDate: "10 September 2026",
    readingTime: "4 menit baca",
    featured: false,
    views: "12.3k",
    likes: 810,
    coverImage: "img/merawat.jpeg",
    coverCaption: "Kain batik tradisional membutuhkan perawatan khusus dengan pembersih alami seperti lerak.",
    tags: ["Tips Perawatan", "Buah Lerak", "Batik Tulis", "Lifestyle", "Edukasi"],
    content: `
      <p class="lead-text">Memiliki sehelai batik tulis buatan tangan ibarat mengoleksi sebuah lukisan berharga. Namun seringkali kesalahan mencuci membuat warna alami pudar dan serat sutra atau morinya menjadi getas. Berikut panduan praktis konservasi batik di rumah.</p>

      <h2>1. Jangan Pernah Menggunakan Detergen Kimiawi</h2>
      <p>Detergen modern mengandung pemutih optik (optical brightener) dan senyawa alkali kuat yang merusak ikatan molekul pewarna alami (seperti soga jambal, mahoni, atau daun tarum). Sebagai gantinya, gunakan <strong>cairan sari buah lerak (Sapindus rarak)</strong> atau sampo rambut berformula lembut netral.</p>

      <h2>2. Jangan Diperas Kasar</h2>
      <p>Cukup celupkan dan angkat kain beberapa kali dalam wadah air lerak tanpa perlu disikat keras. Setelah dibilas dengan air bersih, jangan diperas dengan cara dipelintir keras, cukup tekan perlahan dengan telapak tangan atau bungkus dengan handuk bersih kering untuk menyerap sisa air.</p>

      <h2>3. Angin-anginkan di Bawah Naungan</h2>
      <p>Sinar matahari langsung mengandung ultraviolet tinggi yang dapat melunturkan zat warna nabati. Jemurlah di tempat yang teduh, cukup dengan diangin-anginkan di teras atau ruang berventilasi baik.</p>

      <h2>4. Setrika dengan Pelapis Kain Tipis</h2>
      <p>Hindari kontak langsung antara pelat besi setrika panas dengan permukaan kain batik. Letakkan kain mori putih atau katun tipis di atasnya sebagai alas pelindung sebelum menyetrika dengan suhu sedang.</p>

      <h2>5. Simpan Bersama Lada atau Biji Cengkeh</h2>
      <p>Jangan meletakkan kapur barus (kamper) langsung di atas kain karena gas kimianya bisa merusak lilin sisa dan serat. Cara kuno yang terbukti ampuh adalah membungkus lada putih kering atau cengkeh dalam kain kasa kecil dan meletakkannya di sudut lemari untuk menghalau kutu buku dan ngengat.</p>
    `
  },
  {
    id: "filosofi-parang-rusak",
    slug: "batik-parang-rusak-larangan-sakral-pantang-menyerah",
    title: "Batik Parang Rusak: Dari Laku Meditasi Sultan Agung Hingga Makna Semangat Pantang Padam",
    excerpt: "Pernah menjadi batik 'awisan dalem' yang haram dipakai rakyat jelata, motif parang menggambarkan gelombang ombak karang Samudra Hindia yang melatih jiwa ksatria untuk tak goyah oleh rintangan.",
    category: "Filosofi Motif",
    categorySlug: "filosofi",
    author: {
      name: "Ki Bagus Rangga",
      role: "Budayawan & Pemerhati Seni Rupa Pesisir",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    publishedDate: "5 September 2026",
    readingTime: "6 menit baca",
    featured: false,
    views: "15.1k",
    likes: 935,
    coverImage: "img/parangrusak.jpg",
    coverCaption: "Garis diagonal tegas motif Parang yang melambangkan ombak laut dan tekad baja ksatria.",
    tags: ["Parang Rusak", "Keraton Mataram", "Sultan Agung", "Motif Larangan", "Filosofi"],
    content: `
      <p class="lead-text">Bentuk garis miring berulang menyerupai huruf 'S' bersilangan tajam laksana mata parang adalah salah satu corak paling berwibawa di tanah Jawa. <strong>Batik Parang Rusak</strong> bukan sekadar pola dekoratif, melainkan representasi visual daya juang batin manusia.</p>

      <h2>Lahir dari Meditasi di Pantai Selatan</h2>
      <p>Kisah penciptaan motif ini bermula dari perenungan spiritual <strong>Sultan Agung Hanyokrokusumo</strong> dari Kerajaan Mataram Islam saat bersemedi di tebing curam Pantai Parangkusumo, pesisir Samudra Hindia. Sang Sultan takjub memperhatikan deburan ombak raksasa yang tiada henti menghantam tebing karang karang terjal.</p>
      <p>Meski karang itu keras, kegigihan air laut yang konsisten lambat laun membentuk celah dan lengkungan indah. Dari sanalah lahir ilham filosofi: kesabaran dan keuletan yang terus-menerus akan sanggup menembus rintangan sekeras karang sekalipun.</p>

      <h2>Mengapa Sempat Menjadi Batik Larangan?</h2>
      <p>Di lingkungan Keraton Yogyakarta dan Surakarta tempo dulu, Parang Rusak Barong (dengan ukuran parang di atas 8 cm) dikategorikan sebagai <em>awisan dalem</em> atau motif larangan yang hanya boleh dikenakan oleh Raja/Sultan dan Putra Mahkota saat upacara penobatan sakral.</p>
      <p>Kewibawaan motif ini dipercaya memancarkan aura kepemimpinan, keberanian, dan tanggung jawab moral yang sangat berat, sehingga orang biasa yang batinnya belum matang dianggap belum siap menyandang beban filosofisnya.</p>
    `
  },
  {
    id: "revolusi-batik-kontemporer",
    slug: "revolusi-batik-kontemporer-runway-dunia-tren-gen-z",
    title: "Revolusi Batik Kontemporer: Transformasi Menembus Runway Dunia dan Gaya Hidup Urban",
    excerpt: "Tak lagi dicap busana orang tua atau seragam formal kondangan, generasi muda desainer Indonesia membongkar siluet konvensional menjadi outerwear trendi, streetstyle, dan busana berkelanjutan.",
    category: "Gaya Hidup & Tren",
    categorySlug: "gaya-hidup",
    author: {
      name: "Dinda Larasati",
      role: "Jurnalis Fashion & Kurator Gaya Hidup",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    publishedDate: "1 September 2026",
    readingTime: "5 menit baca",
    featured: false,
    views: "10.6k",
    likes: 720,
    coverImage: "img/transformasi.jpg",
    coverCaption: "Sentuhan modern batik dalam gaya busana kasual chic generasi urban.",
    tags: ["Gen-Z", "Fashion Kontemporer", "Sustainable Fashion", "Streetstyle", "Kreatif"],
    content: `
      <p class="lead-text">Ada masa ketika memakai baju batik di tempat umum membuat pemakainya ditanya: <em>"Mau pergi ke pesta pernikahan siapa?"</em> Stigma bahwa batik adalah pakaian formal yang kaku kini telah runtuh di tangan gelombang kreator muda Nusantara.</p>

      <h2>Dekonstruksi Siluet: Dari Kimono hingga Sneaker Etnik</h2>
      <p>Para perancang muda berani mendobrak pakem kemeja potongan lurus. Motif parang dan kawung kini diaplikasikan pada jaket bomber santai, trench coat asimetris, cropped cardigan, celana kulot kasual, bahkan kolaborasi sepatu sneaker bermaterial kanvas batik tulis.</p>
      <p>Gerakan seperti <em>#BerkainBersama</em> di media sosial yang digagas generasi Z membuktikan bahwa memadukan kain batik dengan kaos oblong putih dan sneakers kulit menghasilkan ekspresi gaya personal yang segar dan bangga berbudaya.</p>

      <h2>Slow Fashion dan Kesadaran Lingkungan</h2>
      <p>Di era krisis iklim dan gempuran <em>fast fashion</em> murah yang mencemari bumi, batik tulis tradisional dengan pewarna alami justru menjadi duta <strong>Sustainable Fashion (Mode Berkelanjutan)</strong>. Proses pembuatannya yang manual tanpa listrik mesin pabrik, menggunakan bahan baku serat alami (katun mori, sutra alam), dan pewarna daun indigofera menginspirasi pecinta fashion global.</p>
    `
  }
];

// Data Eksplorasi Motif Interaktif
const MOTIF_GALLERY = [
  {
    name: "Parang Rusak",
    origin: "Keraton Yogyakarta & Surakarta",
    meaning: "Pantang menyerah, ketabahan mental, dan kewibawaan ksatria layaknya deburan ombak karang.",
    category: "Klasik Geometris",
    image: "img/parangrusak.jpg",
    usage: "Upacara penobatan dan busana bangsawan keraton."
  },
  {
    name: "Mega Mendung",
    origin: "Cirebon, Jawa Barat",
    meaning: "Ketenangan hati, kesabaran mendinginkan amarah, dan pembawa rahmat hidup bagi sesama.",
    category: "Pesisiran Puitis",
    image: "img/batik2.jpg",
    usage: "Busana keraton Kasepuhan/Kanoman dan busana pesta elegan."
  },
  {
    name: "Kawung",
    origin: "Jawa Tengah & Yogyakarta",
    meaning: "Kesucian batin, pengendalian diri dari hawa nafsu, dan kemanfaatan hidup tanpa pamrih.",
    category: "Klasik Geometris",
    image: "img/kawung.jpg",
    usage: "Busana harian, sarung sembahyang, busana wisuda & formal."
  },
  {
    name: "Truntum",
    origin: "Surakarta (Kanjeng Ratu Kencana)",
    meaning: "Cinta kasih yang bersemi kembali (tumaruntum), ketulusan kasih orang tua kepada anak.",
    category: "Bunga & Flora",
    image: "img/truntum.jpg",
    usage: "Busana orang tua pengantin pada prosesi pernikahan adat Jawa."
  },
  {
    name: "Sekar Jagad",
    origin: "Yogyakarta & Solo",
    meaning: "Keindahan keberagaman bunga-bunga di jagat raya yang bersatu dalam kedamaian dan harmoni.",
    category: "Campuran / Jagad",
    image: "img/sekarjagad.jpg",
    usage: "Busana kehormatan, upacara adat, dan pakaian formal kenegaraan."
  },
  {
    name: "Sido Mukti",
    origin: "Surakarta, Jawa Tengah",
    meaning: "Harapan agar pemakainya mencapai kemuliaan, kemakmuran, dan kebahagiaan lahir batin.",
    category: "Upacara Sakral",
    image: "img/sidomukti.jpg",
    usage: "Busana sepasang mempelai pada akad dan pesta pernikahan."
  }
];

// Data Kuis Pengetahuan Batik
const BATIK_QUIZ = [
  {
    question: "Kapan tanggal peringatan Hari Batik Nasional yang diresmikan setelah pengakuan UNESCO?",
    options: [
      "17 Agustus",
      "2 Oktober",
      "28 Oktober",
      "10 November"
    ],
    correct: 1,
    explanation: "Pada tanggal 2 Oktober 2009, UNESCO menetapkan batik sebagai Warisan Budaya Takbenda di Abu Dhabi."
  },
  {
    question: "Alat tradisional dari tembaga bergagang bambu untuk menorehkan cairan lilin malam disebut apa?",
    options: [
      "Canting",
      "Wajan",
      "Gawangan",
      "Bandul"
    ],
    correct: 0,
    explanation: "Canting adalah pena tradisional khas Indonesia berisi tabung tembaga kecil untuk melukis cairan malam panas."
  },
  {
    question: "Motif batik khas Cirebon yang terinspirasi dari akulturasi seni lukis awan Tiongkok adalah...",
    options: [
      "Parang Rusak",
      "Sekar Jagad",
      "Mega Mendung",
      "Sido Luhur"
    ],
    correct: 2,
    explanation: "Mega Mendung lahir dari persilangan budaya Tiongkok dan Cirebon saat pernikahan Sunan Gunung Jati dengan Putri Ong Tien Nio."
  }
];
