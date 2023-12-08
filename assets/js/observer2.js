const imagenob = document.getElementById('imagenob');

const loadimage = (entri, observer) => {
    entri.forEach(entri => {
        if (entri.isIntersecting){
            entri.target.classList.add('visible');
        } else{
            entri.target.classList.remove('visible');
        }
    });
}


const observer = new IntersectionObserver(loadimage, {
    root: null,
});

observer.observe(imagenob);