let circle = document.querySelector('.work__circle'); //Круг
let circleProgress = document.querySelector('.work__circle-progress') //Линия прогресса
let section = document.querySelector('.work'); // Вся секция
let sectionInner = document.querySelector('.work__inner'); // внутренняя часть где ходит круг
let progress = window.getComputedStyle(circleProgress).strokeDashoffset.slice(0, -2) // Число для заполнения 

let detailes = document.querySelectorAll('.work__details-item');
let workItem = document.querySelectorAll('.work__work-item');

let detailHeight = detailes[0].offsetHeight  //высота одного элемента

let wayHeight = sectionInner.offsetHeight - circle.clientHeight; //Длинна которую проходит круг от верха до низа
let scrolled; // Сколько проскролили 


const moveCircle = () => {
    if (section.getBoundingClientRect().top <= 0 && section.getBoundingClientRect().top > -wayHeight) {
        scrolled = 0 - section.getBoundingClientRect().top; // Сколько проскролили 
        let koff = wayHeight / progress
        circleProgress.style.strokeDashoffset = progress - scrolled / koff; //  Формула заполнения
        circle.style.top = scrolled; // Позиционирование 
    } else if (section.getBoundingClientRect().top <= -wayHeight) {
        circle.style.top = 'auto';
        circle.style.bottom = '0';
        circleProgress.style.strokeDashoffset = 0
    }
}

const removeClass = () => {
    for (let i = 0; i < detailes.length; i++) {
        detailes[i].classList.remove('active')
        workItem[i].classList.remove('active')
    }
}

const addClass = (index) => {
    detailes[index].classList.add('active')
    workItem[index].classList.add('active')
}

const checkStatus = () => {
    let distance = detailHeight / 2
    if (section.getBoundingClientRect().top > -distance) {
        removeClass()
        addClass(0)
    } else {
        let distance = detailHeight / 2
        for (let i = 1; i < detailes.length; i++) {
            distance = distance - detailHeight
            const createFunc = (index) => {
                return () => {
                    if (section.getBoundingClientRect().top < distance) {
                        removeClass()
                        addClass(index)
                    }
                }
            }
            const newFunc = createFunc(i)
            newFunc()
        }
    }

}


window.addEventListener('scroll', () => { moveCircle(), checkStatus() })
