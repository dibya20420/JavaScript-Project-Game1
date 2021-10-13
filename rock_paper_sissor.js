function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    let result = decideWinner(humanChoice,botChoice);
    console.log(result);
    let message= finalMessage(result);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
}
function randToRpsInt(){
    return Math.floor(Math.random() *3 );
}
function numberToChoice(number){
    return ['rock','paper','sissor'][number];
}
function decideWinner(yourChoice,botChoice){
    var rpsDatabase={
        'rock':{'sissor':1,'rock':0.5, 'paper':0},
        'sissor' : {'sissor':0.5, 'rock':0 , 'paper':1},
        'paper' : {'sissor':0, 'rock':1 , 'paper':0.5},
    }
    // this is just like a json file
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return {'message':'you lost!', 'color':'red'};
    }else if(yourScore===0.5){
        return {'message':'Draw', 'color':'yellow'};
    }else{
        return {'message':'you win!', 'color':'Green'};
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice,finalMessage){
    let imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper' :document.getElementById('paper').src,
        'sissor':document.getElementById('sissor').src
    }
    //let remove all the images when click is done
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('sissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" +imageDatabase[humanImageChoice] +"'width=30% style='margin-left:5% ;box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"

    messageDiv.innerHTML = "<h1 style='color:" +finalMessage['color'] +";font-size:3.75rem;padding:30px;'> " +finalMessage['message'] +"</h1"

    botDiv.innerHTML = "<img src='" +imageDatabase[botImageChoice] +"'width=30% style='margin-left:5% ;box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    document.getElementById('imagesOfAll').appendChild(humanDiv);
    document.getElementById('imagesOfAll').appendChild(messageDiv);
    document.getElementById('imagesOfAll').appendChild(botDiv);

}   