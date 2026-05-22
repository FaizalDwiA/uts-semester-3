const body = document.querySelector('body');
const judul = document.querySelector('header h1');
const pembuka = document.querySelectorAll('.pembuka>*');
const daftarIsi = document.querySelector('.daftarIsi');
const isiDaftar = document.querySelector('.isiDaftar');
const isiDaftarPilih = document.querySelectorAll('.isiDaftar>*');
const logo = document.querySelectorAll('.opsi>*');
const dipilih = document.querySelector('.dipilih img');
const tampil = document.querySelectorAll('.text>*');
const banner = document.querySelector('.banner');
const bannerImg = document.querySelector('.banner .isi img');
const bannerClose = document.querySelector('.banner .close');

// Online status check on load
window.addEventListener('load', function() {
    let sinyal = navigator.onLine;
    if (!sinyal) {
        alert('Tolong untuk hidupkan koneksi internet anda!');
        body.style.display = 'none';
    }
});

// Scroll parallax/fade out for hero title
window.addEventListener('scroll', function() {
    if (this.scrollY > 100) {
        judul.style.transform = 'translateY(' + (100 - this.scrollY) + 'px)';
        judul.style.opacity = '0';
    } else {
        judul.style.transform = 'translateY(0)';
        judul.style.opacity = '1';
    }
});

// Staggered reveal for opening sections
setTimeout(() => {
    pembuka.forEach(a => {
        a.classList.add('muncul')
    });
}, 300);

// Toggle floating Table of Contents sidebar
daftarIsi.addEventListener('click', () => {
    daftarIsi.classList.toggle('muncul');
    isiDaftar.classList.toggle('muncul');
});

// Close sidebar on option click
isiDaftarPilih.forEach(p => {
    p.addEventListener('click', () => {
        daftarIsi.classList.remove('muncul');
        isiDaftar.classList.remove('muncul');
    });
});

// Initialize first OS dock icon as active
if (logo.length > 0) {
    logo[0].classList.add('active');
}

// OS History dock logic
logo.forEach((l, i) => {
    // Hide all initially, show only first one
    if (i !== 0) {
        tampil[i].style.display = 'none';
    } else {
        tampil[i].style.display = 'block';
    }

    l.addEventListener('click', function() {
        // Fade out and scale down Chosen preview image
        dipilih.style.opacity = '0';
        dipilih.style.transform = 'scale(0.92)';

        // Manage active classes on icons
        logo.forEach(icon => icon.classList.remove('active'));
        this.classList.add('active');

        // Toggle text display cards
        for (let a = 0; a < tampil.length; a++) {
            tampil[a].style.display = 'none';
        }
        tampil[i].style.display = 'block';

        // Wait for fade out to complete, then swap src and fade back in
        setTimeout(() => {
            dipilih.src = this.src;
            dipilih.style.opacity = '1';
            dipilih.style.transform = 'scale(1)';
        }, 150);

        // Smooth scroll to Sejarah section
        const dipilihSec = document.getElementById('dipilih');
        if (dipilihSec) {
            const targetPosition = dipilihSec.getBoundingClientRect().top + window.scrollY - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});