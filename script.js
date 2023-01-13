let isblack = true;

function toggleBlack(){
    isblack = true;
    console.log('black');
}

function toggleRandom(){
    isblack = false;
    console.log('random');
}

function stateChange() {
    console.log(isblack);
    if(isblack){
        this.style.backgroundColor = '#23272B';
    }
    else if(!isblack){
        let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        this.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
}

function gridReset(){
    hovered.forEach((box)=>{
        box.style.backgroundColor = '#fff';
    });
}

const container = document.querySelector('#container');

for (let i = 0; i < 12; i++) {
    const row = document.createElement('div');
    row.classList.add('row')
    container.appendChild(row);
    for (let j = 0; j < 12; j++) {
        const content = document.createElement('div');
        content.classList.add('white-box');
        row.appendChild(content);
    }
}



const reset = document.getElementById('reset');
reset.addEventListener('click', gridReset);

const black = document.getElementById('black');
black.addEventListener('click', toggleBlack);

const random = document.getElementById('random');
random.addEventListener('click', toggleRandom);

const hovered = document.querySelectorAll('.white-box');


hovered.forEach((box)=>{
    box.addEventListener('mouseover', stateChange);
});