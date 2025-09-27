// Popup sistemi
function showPopup(title, message, type = 'info') {
    // Mevcut popup'ı temizle
    const existingPopup = document.getElementById('customPopup');
    if (existingPopup) {
        // Eğer zaten mevcutsa, onu kapatma animasyonuna sokup kaldır
        const currentClose = existingPopup.querySelector('.popup-close-handler');
        if (currentClose) {
            currentClose.click(); 
        }
        setTimeout(() => existingPopup.remove(), 350); 
    }

    // Yeni popup oluştur
    const popup = document.createElement('div');
    popup.id = 'customPopup';
    popup.className = `popup ${type}`;
    
    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <h3>${title}</h3>
                <button class="popup-close popup-close-handler">&times;</button>
            </div>
            <div class="popup-body">
                <p>${message}</p>
            </div>
            <div class="popup-footer">
                <button class="popup-ok popup-close-handler">Tamam</button>
            </div>
        </div>
    `;

    document.body.appendChild(popup);

    // Kapatma işlevleri
    const closeHandlers = popup.querySelectorAll('.popup-close-handler');
    
    const closePopup = () => {
        if (!popup.style.opacity || popup.style.opacity === '1') {
             popup.style.animation = 'popupOut 0.3s ease-in';
             setTimeout(() => popup.remove(), 300);
        }
    };
    
    closeHandlers.forEach(btn => {
        btn.addEventListener('click', closePopup);
    });
    
    // 5 saniye sonra otomatik kapanma
    setTimeout(closePopup, 5000);
}

// Tüm butonlar ve modal işlemleri
document.addEventListener('DOMContentLoaded', function() {
    // Modal elementleri
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const mapModal = document.getElementById('mapModal');
    const photoModal = document.getElementById('photoModal'); 
    
    // Buton elementleri (null kontrolü yapılmalı, HTML'de olduğundan emin olunmalı)
    const startGameBtn = document.getElementById('startGame');
    const howToPlayBtn = document.getElementById('howToPlay');
    const viewMapBtn = document.getElementById('viewMap');
    const collectPointsBtn = document.getElementById('collectPoints');
    const viewLeaderboardBtn = document.getElementById('viewLeaderboard');
    const learnMoreProblemBtn = document.getElementById('learnMoreProblem');
    const meetTeamBtn = document.getElementById('meetTeam');
    const addPhotoBtn = document.getElementById('addPhoto');
    const understandPhotoBtn = document.getElementById('understandPhoto');
    const selectLocationBtn = document.getElementById('selectLocation');
    
    // Link elementleri
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    
    // Footer linkleri
    const footerAbout = document.getElementById('footerAbout');
    const footerContact = document.getElementById('footerContact');
    const footerHelp = document.getElementById('footerHelp');
    const footerPrivacy = document.getElementById('footerPrivacy');

    // Helper fonksiyon: Event Listener ekle (null kontrolü ile)
    const addClickListener = (element, callback) => {
        if (element) {
            element.addEventListener('click', callback);
        }
    };

    // Giriş/Kayıt Modal İşlemleri
    addClickListener(loginBtn, () => { if(loginModal) loginModal.style.display = 'block'; });
    addClickListener(showRegister, (e) => {
        e.preventDefault();
        if(loginModal) loginModal.style.display = 'none';
        if(registerModal) registerModal.style.display = 'block';
    });
    addClickListener(showLogin, (e) => {
        e.preventDefault();
        if(registerModal) registerModal.style.display = 'none';
        if(loginModal) loginModal.style.display = 'block';
    });

    // Ana Buton İşlemleri
    addClickListener(startGameBtn, () => {
        showPopup('🚀 Oyun Başlatılıyor', 'Kayseri haritasına yönlendiriliyorsunuz... Toplama noktalarını keşfetmeye hazır olun!', 'success');
        setTimeout(() => {
            if (mapModal) mapModal.style.display = 'block';
        }, 1000);
    });
    addClickListener(howToPlayBtn, () => {
        showPopup('🎯 Texiome Nasıl Çalışır?', 
            `1. 📝 Kayıt ol ve giriş yap\n2. 🎯 Görevlerini seç\n3. 📦 Atıkları topla\n4. ⭐ Puan kazan ve ödülleri al\n5. 🏆 Liderlikte yüksel!\n\nHemen başlamak için "Hemen Başla" butonuna tıkla!`, 
            'info');
    });
    addClickListener(viewMapBtn, () => {
        if (mapModal) mapModal.style.display = 'block';
    });
    addClickListener(collectPointsBtn, () => {
        showPopup('💰 Puan Kazandınız!', '+100 puan kazandınız! 🎉\nToplam puanınız: 2.550\nLiderlik tablosunda yükseliyorsunuz!', 'success');
    });
    addClickListener(viewLeaderboardBtn, () => {
        showPopup('🏆 Liderlik Tablosu', 
            `1. 👑 Ahmet Y. - 3.200 puan\n2. 🥈 Ayşe K. - 2.950 puan\n3. 🥉 Mehmet D. - 2.780 puan\n4. ⭐ Siz - 2.550 puan\n5. 🔥 Elif S. - 2.340 puan\n\nTebrikler! Top 5 içindesiniz! 🎉`, 
            'info');
    });
    addClickListener(learnMoreProblemBtn, () => {
        showPopup('🌍 Tekstil Atık Gerçekleri',
            `• Her saniye 1 kamyon dolusu tekstil atığı çöplüğe atılıyor\n• 1 tişört üretimi 2.700 litre su tüketiyor\n• Sentetik kumaşlar okyanuslarda mikroplastik kirliliğe neden oluyor\n• Atıkların sadece %15'i geri dönüştürülüyor\n\nTexiome ile bu soruna çözüm olun! ♻️`,
            'warning');
    });
    addClickListener(meetTeamBtn, () => {
        showPopup('👥 Texiome Ekibi',
            `🧠 Ahmet - Kurucu & CEO\n💻 Mehmet - Teknoloji Lideri\n🎨 Ayşe - Tasarım Sorumlusu\n🌱 Elif - Çevre Uzmanı\n📊 Can - Veri Analisti\n\nEkibimiz hakkında daha fazla bilgi için: info@texiome.com`,
            'info');
    });
    addClickListener(addPhotoBtn, () => {
        if (photoModal) photoModal.style.display = 'block';
    });
    addClickListener(understandPhotoBtn, () => {
        if (photoModal) photoModal.style.display = 'none';
        showPopup('📸 Harika!', 'Fotoğraf ekleme talimatlarını anladınız. 🎉\nŞimdi fotoğrafınızı yükleyip puanları toplayabilirsiniz!', 'success');
    });
    addClickListener(selectLocationBtn, () => {
        showPopup('🗺️ Konum Seçimi', 'Lütfen haritadan bir toplama noktası seçin veya listeden lokasyon seçin!', 'info');
    });

    // Dinamik Buton İşlemleri (info, solution, step)
    document.querySelectorAll('.info-btn').forEach(btn => {
        addClickListener(btn, function() {
            const info = this.getAttribute('data-info');
            showPopup('ℹ️ Bilgi', info, 'info');
        });
    });
    document.querySelectorAll('.solution-btn').forEach(btn => {
        addClickListener(btn, function() {
            const solution = this.getAttribute('data-solution');
            const messages = {
                'görev': '🎯 Görev sistemimizde 3 seviye var: Günlük, Haftalık ve Özel görevler! Her görev tamamlandığında puan ve rozet kazanırsınız.',
                'takip': '📊 Anlık istatistiklerle atığınızın çevresel etkisini görün! Su tasarrufu, karbon ayak izi azalımı ve enerji tasarrufu istatistikleri.',
                'ödül': '🎁 Rozetler, indirim kuponları ve özel ödüller sizi bekliyor! Her seviye atlamada yeni sürprizler keşfedin.'
            };
            showPopup('💡 Çözüm Detayı', messages[solution], 'info');
        });
    });
    document.querySelectorAll('.step-action').forEach(btn => {
        addClickListener(btn, function() {
            const step = this.getAttribute('data-step');
            const messages = {
                'kayıt': '📝 Kayıt sayfasına yönlendiriliyorsunuz... 30 saniyede üye olabilirsiniz!',
                'görev': '🎯 Mevcut görevleri görüntülüyorsunuz... Günlük görevler her sabah yenilenir!',
                'toplama': '🗺️ En yakın toplama noktaları yükleniyor... Size en uygun lokasyonu seçin!',
                'ödül': '🎁 Kazanabileceğiniz ödülleri görüyorsunuz... Rozet koleksiyonunuzu tamamlayın!'
            };
            showPopup('🚀 İşlem Başlatılıyor', messages[step], 'success');
        });
    });

    // Harita Noktaları (Modal ve Oyun Arayüzü)
    document.querySelectorAll('.map-point').forEach(point => {
        addClickListener(point, function() {
            const location = this.getAttribute('data-location') || 'Bölge ' + this.textContent;
            showPopup('📍 Konum Seçildi', `${location} bölgesini seçtiniz!\n\nToplama detayları yükleniyor...`, 'success');
        });
    });
    document.querySelectorAll('.location-list li').forEach(item => {
        addClickListener(item, function() {
            const location = this.textContent;
            showPopup('🗺️ Lokasyon Seçildi', `${location} bölgesi seçildi!\n\nToplama detayları ve istatistikler yükleniyor...`, 'info');
        });
    });

    // Footer Linkleri
    addClickListener(footerAbout, (e) => {
        e.preventDefault();
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        showPopup('👥 Hakkımızda', 'Texiome ekibi hakkında bilgi sayfasına yönlendiriliyorsunuz...', 'info');
    });
    addClickListener(footerContact, (e) => {
        e.preventDefault();
        showPopup('📞 İletişim', 
            '📧 E-posta: info@texiome.com\n📞 Telefon: 0850 123 45 67\n📍 Adres: Kayseri Teknopark\n🕒 Çalışma Saatleri: 09:00-18:00', 
            'info');
    });
    addClickListener(footerHelp, (e) => {
        e.preventDefault();
        showPopup('❓ Yardım Merkezi',
            '🌐 Web: help.texiome.com\n📚 SSS: sss.texiome.com\n💬 Canlı Destek: 0850 123 45 67\n📧 E-posta: support@texiome.com',
            'info');
    });
    addClickListener(footerPrivacy, (e) => {
        e.preventDefault();
        showPopup('🔒 Gizlilik Politikası',
            'Gizlilik politikamızı web sitemizden inceleyebilirsiniz:\n\n🌐 texiome.com/gizlilik\n\nVeri güvenliği bizim için önceliklidir.',
            'warning');
    });
    
    // --- MODAL KAPATMA İYİLEŞTİRMELERİ ---
    document.querySelectorAll('.close').forEach(button => {
        addClickListener(button, () => {
            const modalElement = button.closest('.modal');
            if (modalElement) {
                modalElement.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Form submit işlemleri
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showPopup('🎉 Giriş Başarılı!', 'Texiome dünyasına hoş geldiniz! 🚀\nOyun istatistikleriniz ve görevleriniz yükleniyor...', 'success');
        setTimeout(() => {
            if (loginModal) loginModal.style.display = 'none';
        }, 2000);
    });

    if (registerForm) registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showPopup('🎊 Kayıt Başarılı!', 'Hesabınız oluşturuldu! 🎉\nOyun dünyasına hoş geldiniz!\nBaşlangıç bonusu olarak 100 puan kazandınız!', 'success');
        setTimeout(() => {
            if (registerModal) registerModal.style.display = 'none';
        }, 2000);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        addClickListener(anchor, function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Sayfa yüklendiğinde hoş geldin mesajı
    setTimeout(() => {
        showPopup('🎮 Texiome\'a Hoş Geldiniz!', 
            'Tekstil atıklarını oyunlaştırarak dünyayı değiştirmeye hazır mısınız? 🚀\n\nHemen başlamak için "Hemen Başla" butonuna tıklayın!', 
            'success');
    }, 1000);
});