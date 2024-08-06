


function Math(){
    var first = document.getElementById('Ab11');
    var second = document.getElementById('Ab22');
    var third = document.getElementById('Ab33');
    var fourth = document.getElementById('answer');

    var result1 = parseInt(first.value) * parseInt(second.value) * parseInt(third.value);

    var result2 = result1 / 100;

    fourth.innerText = result2;

    



}

state = 0;
function togglemode(){
    if(state === 0){
        let main2 = document.getElementById('main2');
        main2.style.transform = 'translate(101px)';

        let main1 = document.getElementById('main');
        main.style.backgroundColor = 'rgb(10,10,10)';

        var body = document.body;
        body.style.backgroundColor = "rgb(255,255,255)";

        var interest1 = document.getElementById('interest1');
        interest1.style.color = 'rgb(10,10,10)';

        var Ab44 = document.getElementById('Ab44');
        Ab44.style.backgroundColor = 'rgb(10,10,10)';

        var Ab44 = document.getElementById('Ab44');
        Ab44.style.color = 'rgb(255,255,255)';

        var interest2 = document.getElementById('interest2');
        interest2.style.color = 'rgb(10,10,10)';

        var wprd = document.getElementById('word');
        word.style.color = 'rgb(10,10,10)';

        var answer = document.getElementById('answer');
        answer.style.color ='rgb(10,10,10)';

        state = 1;


    }else{
        let main2 = document.getElementById('main2');
        main2.style.transform = 'translate(0px)';

        let main1 = document.getElementById('main');
        main.style.backgroundColor = 'rgb(255,255,255)';

        var body = document.body;
        body.style.backgroundColor = "rgb(10,10,10)";
        

        var interest1 = document.getElementById('interest1');
        interest1.style.color = 'rgb(255,255,255)';

        var Ab44 = document.getElementById('Ab44');
        Ab44.style.backgroundColor = 'rgb(255,255,255)';

        var Ab44 = document.getElementById('Ab44');
        Ab44.style.color= 'rgb(10,10,10)';

        var interest2 = document.getElementById('interest2');
        interest2.style.color = 'rgb(255,255,255)';

        var wprd = document.getElementById('word');
        word.style.color = 'rgb(255,255,255)';

        var answer = document.getElementById('answer');
        answer.style.color ='rgb(255,255,255)';


        state = 0; 
    }
    
}
