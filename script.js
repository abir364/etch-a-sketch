function stateChange() {
    this.classList.add('hovered');
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

const hovered = document.querySelectorAll('.white-box');
hovered.forEach((box)=>{
    box.addEventListener('mouseover', stateChange);
});
