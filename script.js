let container = document.querySelector('.container');
let input = document.querySelector('input');
let count = 16;

function createPage() {
    let docFrag = document.createDocumentFragment();
    for (let i =0; i <= count*count; i++) {
        let div = document.createElement('div');
        docFrag.appendChild(div);
    }
    container.appendChild(docFrag);
}

// function clearPage() {
//     while (container.hasChildNodes) {
//         // console.log(container.firstChild);
//         container.removeChild(container.children[0]);
//     }
//     return container;
// }

function updatePage() {
    // clearPage();
    container.innerHTML = '';
    // console.log(this);
    count = this.valueAsNumber;
    // console.log(count);

    createPage();
    container.style.gridTemplateColumns = `repeat(${count} ,1fr)`;
    container.style.gridTemplateRows = `repeat(${count} ,1fr)`;
    onMouseOver();
}


function changeColor() {
    let randomRed = (Math.random() * 256);
    let randomGreen = (Math.random() * 256);
    let randomBlue = (Math.random() * 256);
    let randomAlpha = (Math.random());
    this.style.backgroundColor = `rgba(${randomRed},${randomGreen},${randomBlue},${randomAlpha})`;
}

function onMouseOver() {
    let divs = document.querySelectorAll('.container div');
    divs.forEach(div => div.addEventListener('mouseenter', changeColor));
}



createPage();
onMouseOver();
input.addEventListener('change', updatePage);