var move = 1;
var play = true;

$('table tr td').click (function(){
    if($(this).text() == "" && play){
        if((move%2)==1){
            $(this).append("X");
            $(this).css('color','#000000');
        }else{
            $(this).append("O");
            $(this).css('color','#000000');
        }
        move++;

        if(findWinner() != -1 && findWinner() != ""){
            if(findWinner() == "X"){
                $('body').append('<div class="winner"><span>Winner</span>X</div>');
                $('body').append('<button onclick="location.reload()">Play Again</button>');
                $('.winner').css('background-color','#61112f');
                $('button').css('color','#61112f');
            }else {
                $('body').append('<div class="winner"><span>Winner</span>O</div>');
                $('body').append('<button onclick="location.reload()">Play Again</button>');
                $('.winner').css('background-color','#e11a4f');
                $('button').css('color','#e11a4f');
            }
            play = false;
        }
    }
});
 
function findWinner(){
    
    gm1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    gm2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    gm3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    gm4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    gm5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    gm6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    gm7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    gm8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    gm9 = $('table tr:nth-child(3) td:nth-child(3)').text();

    //check rows
    if((gm1 == gm2) && (gm2 == gm3)){
        return gm3;
    }else if((gm4 == gm5) && (gm5 == gm6)){
        return gm6;
    }else if((gm7 == gm8) && (gm8 == gm9)){
        return gm9;
    }
    //check  columns
    else if((gm1 == gm4) && (gm4 == gm7)){
        return gm7;
    }else if((gm2 == gm5) && (gm5 == gm8)){
        return gm8;
    }else if((gm3 == gm6) && (gm6 == gm9)){
        return gm9;
    }

    //check diagonals
    else if((gm1 == gm5) && (gm5 == gm9)){
        return gm9;
    }else if((gm3 == gm5) && (gm5 == gm7)){
        return gm7;
    }

    //no winner
    return -1;
  
}