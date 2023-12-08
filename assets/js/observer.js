const imagenob = document.getElementById('imagenob');
const imagenob2 = document.getElementById('imagenob2');
const imagenob3 = document.getElementById('imagenob3');

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
observer.observe(imagenob2);
observer.observe(imagenob3);
