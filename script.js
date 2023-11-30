const body = document.querySelector('.body');

const panel = (rows, columns) => {
    for (let i = 0; i < rows; i++) {
        const contenedor = document.createElement('div');
        contenedor.classList.add('container');
        body.append(contenedor);
        for (let i = 0; i < columns; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            contenedor.appendChild(card);
        }
    }
    const cuadros = document.querySelectorAll('.card');
    cuadros.forEach((cuadro)=> {
        cuadro.addEventListener('mouseenter', ()=> {
            cuadro.style.backgroundColor = "black";
        });
    });
};

const btnSize = document.querySelectorAll('.btnSize');

btnSize.forEach((btnS) => {
    btnS.addEventListener('click', () => {
        body.innerHTML = '';
        const size = btnS.textContent;
        if (size === 'Small') {
            panel(17,35);
            resize(25);
        } else if (size === 'Medium') {
            panel(24,40);
            resize(18);
        } else if (size === 'Large') {
            panel(44,70);
            resize(10);
        };
    });
});
const resize = (size) => {
    const cuadros = document.querySelectorAll('.card');
            cuadros.forEach((cuadro) => {
                cuadro.style.width = `${size}px`;
                cuadro.style.height = `${size}px`;
            });
};


panel(44,70);
    

