document.querySelectorAll('.burger-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const nav = document.querySelector('.burger-item__nav');
        const img = document.querySelector('.img-burger');
        const imgX = document.querySelector('.img-burger-x');
        
        nav.classList.toggle('active');
        img.classList.toggle('active');
        imgX.classList.toggle('active');
    })
)
