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
    const hovered = document.querySelectorAll('.white-box');
    hovered.forEach((box)=>{
        box.style.backgroundColor = '#fff';
    });
}

function generateGrid(size){
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const content = document.createElement('div');
            content.classList.add('white-box');
            row.appendChild(content);
        }
    }

    const black = document.getElementById('black');
    black.addEventListener('click', toggleBlack);

    const random = document.getElementById('random');
    random.addEventListener('click', toggleRandom);

    const hovered = document.querySelectorAll('.white-box');


    hovered.forEach((box)=>{
    box.addEventListener('mouseover', stateChange);
    reset.addEventListener('click', gridReset);
});

}

function removeGrid(){
    con.innerHTML = '';
    generateGrid(slider.value);
}

const container = document.querySelector('#container');
const con = document.querySelector('#container');
const reset = document.getElementById('reset');


const slider = document.getElementById('grid-size');
const sliderValue = document.getElementById('value');
sliderValue.innerHTML = `${slider.value} x ${slider.value}`;
generateGrid(slider.value);

slider.addEventListener('input', () => {
    sliderValue.innerHTML = `${slider.value} x ${slider.value}`;
    removeGrid();
    generateGrid(slider.value);
});



