// DATA 6 SERTIFIKAT MANUAL TIAP ANGGOTA
const memberCertificates = {
  annisa: [
    { title: "Dasar Manajemen Proyek", image: "img/Sertifikat Annisa/Dasar Manajemen Proyek.png", issuer: "Dicoding Indonesia", date: "08 September 2026" },
    { title: "Data Cleaning", image: "img/Sertifikat Annisa/Data Cleaning.jpeg", issuer: "Kaggle", date: "09 September 2026" },
    { title: "Intro to Programming", image: "img/Sertifikat Annisa/Intro to Programming.jpeg", issuer: "Kaggle", date: "08 September 2026" },
    { title: "Intro to Machine Learning", image: "img/Sertifikat Annisa/Intro to Machine Learning.jpeg", issuer: "Kaggle", date: "09 September 2026" },
    { title: "Memulai Pemrograman dengan Java", image: "img/Sertifikat Annisa/Memulai Pemrograman dengan Java.png", issuer: "Dicoding Indonesia", date: "08 September 2026" },
    { title: "Python", image: "img/Sertifikat Annisa/Python.jpeg", issuer: "freeCodeCamp", date: "07 September 2026" }
  ],
  vika: [
    { title: "Cyber Security", image: "img/Sertifikat Vika/Cyber Security.jpeg", issuer: "Cursa", date: "13 Oktober 2026" },
    { title: "EF SET English Certificate", image: "img/Sertifikat Vika/EF SET English Certification, English for Career.jpeg", issuer: "EF SET", date: "08 September 2026" },
    { title: "Introduction to IoT and Digital Transformation", image: "img/Sertifikat Vika/Introduction to IoT and Digital Transformation, IoT (Internet of Things).png", issuer: "Cisco Networking Academy", date: "13 September 2026" },
    { title: "Introduction to Modern AI", image: "img/Sertifikat Vika/Introduction to Modern AI, Machine Learning.jpeg", issuer: "Cisco Networking Academy", date: "11 September 2026" },
    { title: "MySQL", image: "img/Sertifikat Vika/MySQL, Dasar Database.jpeg", issuer: "Cursa", date: "13 Oktober 2026" },
    { title: "Networking Basics", image: "img/Sertifikat Vika/Networking Basic, Dasar Jaringan Komputer.jpg.jpeg", issuer: "Cisco Networking Academy", date: "10 September 2026" }
  ],
  zahra: [
    { title: "Computer Systems Security", image: "img/Sertifikat Zahra/Computer systems security.jpeg", issuer: "Cursa", date: "11 September 2026" },
    { title: "Introduction to Data Science", image: "img/Sertifikat Zahra/Introduction to Data Science.jpeg", issuer: "Cisco Networking Academy", date: "03 Oktober 2026" },
    { title: "Membangun Personal Branding di Media Sosial", image: "img/Sertifikat Zahra/Membangun Personal Branding di Media Sosial.jpeg", issuer: "Komdigi Digital Talent Scholarship", date: "27 September 2026" },
    { title: "Principle UI/UX", image: "img/Sertifikat Zahra/Principle UIUX.jpeg", issuer: "Cursa", date: "02 Oktober 2026" },
    { title: "Web Development for Beginners", image: "img/Sertifikat Zahra/Web Development for beginners.jpeg", issuer: "Cursa", date: "10 September 2026" },
    { title: "Web Programming", image: "img/Sertifikat Zahra/Web programming.jpeg", issuer: "Cursa", date: "02 Oktober 2026" }
  ],
  anik: [
    { title: "Computer Networking", image: "img/Sertifikat Anik/Computer Networking.jpeg", issuer: "Cursa", date: "10 September 2026" },
    { title: "Cyber Security", image: "img/Sertifikat Anik/Cyber Security.jpeg", issuer: "Cursa", date: "10 September 2026" },
    { title: "Data Analysis for Social Scientists", image: "img/Sertifikat Anik/Data Analysis for Social Scientists.jpeg", issuer: "Cursa", date: "10 September 2026" },
    { title: "Membangun Personal Branding di Media Sosial", image: "img/Sertifikat Anik/Membangun Personal Branding di Media sosial.jpeg", issuer: "Komdigi Digital Talent Scholarship", date: "25 September 2026" },
    { title: "Memulai Pemrograman dengan C", image: "img/Sertifikat Anik/Memulai Pemrograman dengan C.jpeg", issuer: "Dicoding Indonesia", date: "08 September 2026" },
    { title: "Pemrograman Python", image: "img/Sertifikat Anik/Pemrograman Python.jpeg", issuer: "Cisco Networking Academy & Python Institute", date: "09 September 2026" }
  ],
  syauqi: [
    { title: "Belajar Dasar Pemrograman Web", image: "img/Sertifikat Syauqi/Belajar Dasar Pemrograman Web.jpeg", issuer: "Dicoding Indonesia", date: "08 September 2026" },
    { title: "Cybersecurity Defense Analyst Pathway Exam", image: "img/Sertifikat Syauqi/Cybersecurity Defense Analyst Pathway Exam.jpeg", issuer: "Cisco Networking Academy", date: "25 Oktober 2026" },
    { title: "EF SET English Certificate", image: "img/Sertifikat Syauqi/EF SET English Certification, English for Career.jpeg", issuer: "EF SET", date: "10 September 2026" },
    { title: "Introduction to IoT and Digital Transformation", image: "img/Sertifikat Syauqi/Introduction to IoT and Digital Transformation.jpeg", issuer: "Cisco Networking Academy", date: "27 Oktober 2026" },
    { title: "Machine Learning for complete beginners", image: "img/Sertifikat Syauqi/Machine Learning for complete beginners.jpeg", issuer: "Cursa", date: "25 Oktober 2026" },
    { title: "Python", image: "img/Sertifikat Syauqi/Python.jpeg", issuer: "freeCodeCamp", date: "20 Oktober 2026" }
  ],
  syahan: [
    { title: "Deep Learning With PyTorch", image: "img/Sertifikat Syahan/Deep Learning With PyTorch.jpeg", issuer: "Cursa", date: "26 Oktober 2026" },
    { title: "HTML", image: "img/Sertifikat Syahan/HTML.jpeg", issuer: "Cursa", date: "26 Oktober 2026" },
    { title: "Progressive Web Application PWA for Beginners", image: "img/Sertifikat Syahan/Progressive Web Application PWA for Beginners.jpeg", issuer: "Cursa", date: "26 Oktober 2026" },
    { title: "Public Speaking", image: "img/Sertifikat Syahan/Public Speaking.jpeg", issuer: "Cursa", date: "26 Oktober 2026" },
    { title: "SQL Database Programming", image: "img/Sertifikat Syahan/SQL Database Programming.jpeg", issuer: "Cursa", date: "26 Oktober 2026" },
    { title: "Personal Branding for Professionals", image: "img/Sertifikat Syahan/Personal Branding for Professionals.jpeg", issuer: "Cursa", date: "26 Oktober 2026" }
  ],
  radhia: [
    { title: "Basic Programming Concepts", image: "img/Sertifikat Radhia/Basic Programming Concepts.jpeg", issuer: "Cursa", date: "22 September 2026" },
    { title: "Cyber Security", image: "img/Sertifikat Radhia/Cyber security.jpeg", issuer: "Cursa", date: "18 September 2026" },
    { title: "Data Analysis for Social Scientists", image: "img/Sertifikat Radhia/Data Analysis for Social Scientist.jpeg", issuer: "Cursa", date: "19 September 2026" },
    { title: "Machine Learning", image: "img/Sertifikat Radhia/Machine Learning.jpeg", issuer: "Cursa", date: "18 September 2026" },
    { title: "MySQL Database", image: "img/Sertifikat Radhia/MySQL database.jpeg", issuer: "Cursa", date: "22 September 2026" },
    { title: "Public Speaking", image: "img/Sertifikat Radhia/Public Speaking.jpeg", issuer: "Cursa", date: "27 Oktober 2026" }
  ]
};

let currentActiveMemberKey = '';

function openMemberModal(memberKey, name, role, imgSrc, desc) {
  currentActiveMemberKey = memberKey;

  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalRole').textContent = role;
  document.getElementById('modalMemberImg').src = imgSrc;
  document.getElementById('modalDesc').textContent = desc;
  
  renderCertificates();
  
  document.getElementById('certModal').style.display = 'block';
}

// RENDER 6 SERTIFIKAT DALAM BENTUK GRID GALERI
function renderCertificates() {
  const certListContainer = document.getElementById('memberCertList');
  const certs = memberCertificates[currentActiveMemberKey] || [];
  
  if (certs.length === 0) {
    certListContainer.innerHTML = `<p class="no-cert-text">Belum ada sertifikat yang ditampilkan untuk anggota ini.</p>`;
    return;
  }
  
  let html = '<div class="cert-grid-gallery">';
  certs.forEach((cert) => {
    // Mengecek apakah data issuer dan date ada, jika tidak, tampilkan teks default yang aman
    const metaInfo = (cert.issuer && cert.date) 
      ? `<p><i class="fas fa-building"></i> ${cert.issuer} &bull; <i class="far fa-calendar-alt"></i> ${cert.date}</p>` 
      : `<p><i class="fas fa-award"></i> Sertifikat Kompetensi</p>`;

    html += `
      <div class="cert-card-item" onclick="viewCertificate('${cert.image}', '${cert.title}')">
        <div class="cert-thumb-wrapper">
          <img src="${cert.image}" alt="${cert.title}" onerror="this.src='https://ui-avatars.com/api/?name=Certificate&background=306998&color=fff&size=300'">
          <div class="cert-overlay-zoom">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
        <div class="cert-card-details">
          <h4>${cert.title}</h4>
          ${metaInfo}
        </div>
      </div>
    `;
  });
  html += '</div>';
  
  certListContainer.innerHTML = html;
}

// FITUR PREVIEW GAMBAR FULLSCREEN (LIGHTBOX)
function viewCertificate(imgSrc, title) {
  const lightbox = document.createElement('div');
  lightbox.className = 'cert-lightbox-overlay';
  lightbox.innerHTML = `
    <div class="cert-lightbox-container">
      <span class="cert-lightbox-close">&times;</span>
      <h3>${title}</h3>
      <img src="${imgSrc}" alt="${title}" onerror="this.src='https://ui-avatars.com/api/?name=Certificate&background=306998&color=fff'">
    </div>
  `;
  
  document.body.appendChild(lightbox);
  
  lightbox.querySelector('.cert-lightbox-close').addEventListener('click', () => {
    lightbox.remove();
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.remove();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('certModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});