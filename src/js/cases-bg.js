const gridChessBg = document.querySelectorAll('.grid-chess__item-img');
const url = '../img/cases/case-';



window.addEventListener('load', () => {
    for (let i = 0; i < gridChessBg.length; i++) {
        gridChessBg[i].style.backgroundImage = `url(${url}${i}.jpg)`
    }
})