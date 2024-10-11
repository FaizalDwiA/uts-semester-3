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

window.addEventListener('load', function() {
    let sinyal = navigator.onLine;
    if (!sinyal) {
        alert('Tolong untuk hidupkan data anda!');
        body.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
    if( this.scrollY > 100 ) {
        judul.style.transform = 'translateY(' + (100 - this.scrollY) + 'px)';
        judul.style.opacity = '0';
    }

    if( this.scrollY < 100 ) {
        judul.style.transform = 'translateY(-' + 0 + 'px)';
        judul.style.opacity = '1';
    }
    console.log(this.scrollY);
});

setTimeout(() => {
    pembuka.forEach(a => {
        a.classList.add('muncul')
    });
}, 500);


daftarIsi.addEventListener('click', () => {
    daftarIsi.classList.toggle('muncul');
    isiDaftar.classList.toggle('muncul');
});


isiDaftarPilih.forEach(p => {
    p.addEventListener('click', () => {
        daftarIsi.classList.toggle('muncul');
        isiDaftar.classList.toggle('muncul');
    });
});

logo.forEach((l, i) => {
    tampil[i].style.display = 'none';
    tampil[0].style.display = 'block';

    l.addEventListener('click', function() {
        dipilih.src = this.src;

        for( let a = 0; a < tampil.length; a++ ){
            tampil[a].style.display = 'none';
        }

        tampil[i].style.display = 'block';

        window.scrollTo(0, 1790);
    });
});


// setTimeout(() => {
//     banner.style.display = 'flex';
// }, 1000);

// bannerClose.addEventListener('click', function(e) {
//     bannerClose.parentElement.parentElement.parentElement.style.display = 'none';
//     e.preventDefault();
// });