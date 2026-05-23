const API_URL = "https://script.google.com/macros/s/AKfycbw53tk9OLk4e4O2LzDkKHflkwQrVdMVoiaoHSsisi-aeuA7eVBKiQgVuJLg17PNetqo/exec";

function renderLayout() {
    const waHtml = `
        <a id="wa-floating-btn" href="#" target="_blank" class="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 wa-pulse hidden" title="Hubungi Kami via WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
    `;

    const navbarHtml = `
        <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-transparent py-2 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <img id="nav-logo" src="" alt="Logo Sekolah" class="h-10 w-10 object-contain mr-3 hidden">
                        <i id="nav-logo-fallback" class="fa-solid fa-graduation-cap text-2xl mr-3"></i>
                        <a href="index.html" class="font-bold text-lg sm:text-xl truncate max-w-[200px] sm:max-w-none" id="nav-nama-sekolah">Memuat...</a>
                    </div>
                    <div class="hidden md:flex items-center space-x-8" id="desktop-menu">
                        <a href="index.html" class="nav-link hover:text-yellow-400 transition-colors font-semibold tracking-wide" data-page="index">Beranda</a>
                        <a href="profil.html" class="nav-link hover:text-yellow-400 transition-colors font-semibold tracking-wide" data-page="profil">Profil</a>
                        <a href="berita.html" class="nav-link hover:text-yellow-400 transition-colors font-semibold tracking-wide" data-page="berita">Berita</a>
                        <a href="guru.html" class="nav-link hover:text-yellow-400 transition-colors font-semibold tracking-wide" data-page="guru">Guru & Staff</a>
                        <a href="galeri.html" class="nav-link hover:text-yellow-400 transition-colors font-semibold tracking-wide" data-page="galeri">Galeri</a>
                        <a href="portal.html" class="bg-yellow-400 text-madrasah-900 px-5 py-2 rounded-full hover:bg-yellow-300 transition-all font-bold tracking-wide shadow-md flex items-center"><i class="fa-solid fa-link mr-2"></i> Portal</a>
                    </div>
                    <!-- Mobile menu button -->
                    <div class="md:hidden flex items-center">
                        <button id="mobile-menu-btn" class="text-white hover:text-yellow-400 focus:outline-none">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-madrasah-800 shadow-xl absolute w-full left-0 top-full border-t border-madrasah-700">
                <a href="index.html" class="nav-link-mobile block px-4 py-3 hover:bg-madrasah-700 border-b border-madrasah-700 font-medium" data-page="index">Beranda</a>
                <a href="profil.html" class="nav-link-mobile block px-4 py-3 hover:bg-madrasah-700 border-b border-madrasah-700 font-medium" data-page="profil">Profil</a>
                <a href="berita.html" class="nav-link-mobile block px-4 py-3 hover:bg-madrasah-700 border-b border-madrasah-700 font-medium" data-page="berita">Berita</a>
                <a href="guru.html" class="nav-link-mobile block px-4 py-3 hover:bg-madrasah-700 border-b border-madrasah-700 font-medium" data-page="guru">Guru & Staff</a>
                <a href="galeri.html" class="nav-link-mobile block px-4 py-3 hover:bg-madrasah-700 border-b border-madrasah-700 font-medium" data-page="galeri">Galeri</a>
                <a href="portal.html" class="block px-4 py-3 bg-yellow-400 text-madrasah-900 font-bold border-b border-madrasah-700 flex items-center"><i class="fa-solid fa-link mr-3"></i> Portal Layanan</a>
            </div>
        </nav>
    `;

    const footerHtml = `
        <footer class="bg-madrasah-900 text-gray-300 py-12 mt-auto border-t-4 border-yellow-400">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 class="text-2xl font-bold text-white mb-4 flex items-center">
                        <i class="fa-solid fa-graduation-cap mr-3 text-yellow-400"></i>
                        <span id="footer-nama">Nama Madrasah</span>
                    </h3>
                    <p class="text-sm mb-6 leading-relaxed text-gray-400" id="footer-alamat">Alamat belum tersedia.</p>
                    <div class="flex space-x-5">
                        <a href="https://www.facebook.com/" class="text-gray-400 hover:text-yellow-400 transition-colors bg-madrasah-800 p-3 rounded-full w-10 h-10 flex items-center justify-center"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.tiktok.com/" class="text-gray-400 hover:text-yellow-400 transition-colors bg-madrasah-800 p-3 rounded-full w-10 h-10 flex items-center justify-center"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.youtube.com/" class="text-gray-400 hover:text-yellow-400 transition-colors bg-madrasah-800 p-3 rounded-full w-10 h-10 flex items-center justify-center"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-6 border-b border-madrasah-800 pb-2 inline-block">Tautan Cepat</h3>
                    <ul class="space-y-3 text-sm">
                        <li><a href="index.html" class="hover:text-yellow-400 flex items-center"><i class="fa-solid fa-chevron-right text-xs mr-2 text-madrasah-500"></i> Beranda</a></li>
                        <li><a href="profil.html" class="hover:text-yellow-400 flex items-center"><i class="fa-solid fa-chevron-right text-xs mr-2 text-madrasah-500"></i> Profil</a></li>
                        <li><a href="berita.html" class="hover:text-yellow-400 flex items-center"><i class="fa-solid fa-chevron-right text-xs mr-2 text-madrasah-500"></i> Berita</a></li>
                        <li><a href="portal.html" class="hover:text-yellow-400 flex items-center"><i class="fa-solid fa-chevron-right text-xs mr-2 text-madrasah-500"></i> Portal Layanan</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-6 border-b border-madrasah-800 pb-2 inline-block">Hubungi Kami</h3>
                    <ul class="space-y-4 text-sm">
                        <li class="flex items-start">
                            <i class="fa-solid fa-phone mt-1 mr-3 text-yellow-400"></i> 
                            <span id="footer-telp">Memuat...</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa-solid fa-envelope mt-1 mr-3 text-yellow-400"></i> 
                            <span id="footer-email">Memuat...</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-madrasah-800 mt-12 pt-8 text-center text-sm text-gray-500">
                &copy; <span id="current-year"></span> Hak Cipta Dilindungi. Dibangun dengan <i class="fa-solid fa-heart text-red-500 mx-1"></i> dan Teknologi Web Modern.
            </div>
        </footer>
    `;

    const waWrapper = document.getElementById('wa-wrapper');
    const navbarWrapper = document.getElementById('navbar-wrapper');
    const footerWrapper = document.getElementById('footer-wrapper');

    if(waWrapper) waWrapper.innerHTML = waHtml;
    if(navbarWrapper) navbarWrapper.innerHTML = navbarHtml;
    if(footerWrapper) footerWrapper.innerHTML = footerHtml;

    setActiveMenu();
    initMobileMenu();
    initNavbarScroll();
    setCopyrightYear();
}

function setActiveMenu() {
    let currentPath = window.location.pathname.split('/').pop();
    if(currentPath === '' || currentPath === 'index.html') currentPath = 'index';
    else currentPath = currentPath.replace('.html', '');
    if(currentPath.includes('detail-berita')) currentPath = 'berita';

    const desktopLinks = document.querySelectorAll('.nav-link');
    desktopLinks.forEach(link => {
        if(link.getAttribute('data-page') === currentPath) {
            link.classList.remove('hover:text-yellow-400', 'font-semibold');
            link.classList.add('text-yellow-400', 'border-b-2', 'border-yellow-400', 'font-bold');
        }
    });

    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        if(link.getAttribute('data-page') === currentPath) {
            link.classList.remove('hover:bg-madrasah-700');
            link.classList.add('bg-madrasah-900', 'text-yellow-400');
        }
    });
}

function setCopyrightYear() {
    const el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
}

function initNavbarScroll() {
    const nav = document.getElementById('navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                if(window.location.pathname.includes('detail-berita')) {
                    nav.classList.add('bg-madrasah-900', 'shadow-lg');
                } else {
                    nav.classList.add('bg-madrasah-900', 'shadow-lg');
                    nav.classList.remove('bg-transparent', 'py-2');
                }
            } else {
                if(!window.location.pathname.includes('detail-berita')) {
                    nav.classList.add('bg-transparent', 'py-2');
                    nav.classList.remove('bg-madrasah-900', 'shadow-lg');
                }
            }
        });
        
        if(window.location.pathname.includes('detail-berita')) {
            nav.classList.remove('bg-transparent', 'py-2');
            nav.classList.add('bg-madrasah-900', 'shadow-lg');
        }
    }
}

async function fetchData(action) {
    try {
        const response = await fetch(`${API_URL}?action=${action}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        if(result.status === "success") return result.data;
        else throw new Error(result.message);
    } catch (error) {
        console.error(`Error fetching data for ${action}:`, error);
        return null;
    }
}

async function loadCommonProfilData() {
    const data = await fetchData('getProfil');
    if (data && Object.keys(data).length > 0) {
        
        const logoEl = document.getElementById('nav-logo');
        const logoFallbackEl = document.getElementById('nav-logo-fallback');
        if(logoEl && data.logo_sekolah) {
            logoEl.src = data.logo_sekolah;
            logoEl.classList.remove('hidden');
            if(logoFallbackEl) logoFallbackEl.classList.add('hidden');
        }

        const navNamaElements = document.querySelectorAll('#nav-nama-sekolah, #footer-nama, #hero-title, #portal-nama, #footer-nama-madrasah');
        if(data.nama_sekolah) navNamaElements.forEach(el => { if(el) el.textContent = data.nama_sekolah; });

        const heroBg = document.getElementById('hero-bg');
        if(heroBg && data.bg_hero_section) heroBg.style.backgroundImage = `url('${data.bg_hero_section}')`;

        const footerAlamat = document.getElementById('footer-alamat');
        if(footerAlamat && data.alamat_sekolah) footerAlamat.textContent = data.alamat_sekolah;

        const footerEmail = document.getElementById('footer-email');
        if(footerEmail && data.email_sekolah) footerEmail.textContent = data.email_sekolah;
        
        const nomorWA = data.telepon_madrasah;
        if(nomorWA) {
            const footerTelp = document.getElementById('footer-telp');
            if(footerTelp) footerTelp.textContent = nomorWA;

            const waBtn = document.getElementById('wa-floating-btn');
            if(waBtn) {
                let cleanNumber = nomorWA.replace(/[^0-9]/g, '');
                if(cleanNumber.startsWith('0')) cleanNumber = '62' + cleanNumber.substring(1);
                waBtn.href = `https://wa.me/${cleanNumber}?text=Assalamu%27alaikum%2C%20saya%20ingin%20bertanya%20mengenai%20informasi%20Madrasah.`;
                waBtn.classList.remove('hidden');
            }
        }

        const heroVisi = document.getElementById('hero-visi');
        if(heroVisi && data.visi_sekolah) heroVisi.textContent = `"${data.visi_sekolah}"`;
        
        const portalDesc = document.getElementById('portal-desc');
        if(portalDesc && data.visi_sekolah) {
             let desc = data.visi_sekolah;
             if(desc.length > 90) desc = desc.substring(0, 90) + '...';
             portalDesc.textContent = desc;
        }
        
        return data;
    }
    return null;
}