let all_button = document.getElementsByTagName('button');

let copyAllButton=[];
for(let i=0;i<all_button.length;i++){
    copyAllButton.push(all_button[i].classList[1]);
}

function buttonColorChange(button){
    if(button.value === 'red'){
        buttonRed();
    }
    if(button.value === 'green'){
        buttonGreen();
    }
    if(button.value === 'reset'){
        buttonReset();
    }
    if(button.value === 'random'){
        buttonRandom();
    }
}

function buttonRed(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButton[i]);
    }
}

function buttonRandom(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButton[Math.floor(Math.random()*7)]);
    }
}