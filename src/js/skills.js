let skillLine = document.querySelectorAll('.skills__item-line')
let skillLineFill = document.querySelectorAll('.skills__item-line-fill')

for (let i = 0; i < skillLine.length; i++) {
    skillLineFill[i].style.width = skillLine[i].getAttribute('data-progress')
}