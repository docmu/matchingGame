var temp;
var clickedCard;
var otherClickedCard;

init();

// initial condition of game
function init(){
    $(".square").addClass("no-show");
    $('img').hide();
    reset();
}

//reset clicked cards
function reset(){
    clickedCard = undefined;
    otherClickedCard = undefined;
}

//handling square click
$(".square").on("click", function(){
    var idName = "#" + $(this).attr("id");
    
    $(idName + ' img').show();
    $(idName).removeClass("no-show");
    
    setState(idName);
});

//save the clicked card to a variable
function setState(card){
    if(clickedCard === undefined){
        clickedCard = card;
    } else if(otherClickedCard === undefined){
        otherClickedCard = card;
    } 
    if(clickedCard !== undefined && otherClickedCard !== undefined){
        checkMatch(clickedCard, otherClickedCard);
    }
}

//check for match
function checkMatch(card1, card2){
    var str;
    if (card1.length > card2.length) {
        str = card1.substring(0,4);
        if(str === card2){
            isMatch(card1, card2);
        }
        else{
            notMatch(card1, card2);
        }

    } else if(card2.length > card1.length){
        str = card2.substring(0,4);
        if(str === card1){
            isMatch(card1, card2);
        } else{
            notMatch(card1, card2);
        }
    } else{
        notMatch(card1, card2);
    }
    reset();
}

//handle events for cards that match
function isMatch(card1, card2){
    $(card1).off("click");
    $(card2).off("click");
}

//handle events for cards that do not match
function notMatch(card1, card2){
    setTimeout(function(){
        $(card1 + ' img').hide();
        $(card2 + ' img').hide();
        $(card1).addClass("no-show");
        $(card2).addClass("no-show");
    }, 500);
}

