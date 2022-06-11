let headingTwo ="Жми на кнопку и получай послание!";
let i = 0;
let speed = 130;

function type(){
    if (i < headingTwo.length){
        document.querySelector('#heading').textContent += headingTwo.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const answer = [
    "Мир за тебя!",
    "Возьмись за дело!",
    "Просто верь!",
    "Солнце светит всем одинаково!",
    "Наслаждайся жизнью!",
    "Ты - центр своей Вселенной!",
    "Какая у тебя цель?",
    "Люби!",
    "Будь собой!",
    "Мечтай!",
    "Еще немного и всё получится!",
    "Будь мудрее!",
    "Так не стоит, выбери лучший вариант!",
    "Кто-то любит тебя всем сердцем!",
    "Как только решится, всё случится!",
    "Ты этого достоин(а)!",
    "Да, действуй!"
]

button.addEventListener('click', () => {
    document.querySelector('#myAudio').play()
    let randomAnswer = answer[Math.floor(Math.random() * answer.length)];
    par.style.display = "block";
    par.textContent = randomAnswer; 
})