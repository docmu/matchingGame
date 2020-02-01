var temp;
var clickedCard;
var otherClickedCard;
var offElements = [];

init();

function init(){
    $(".square").addClass("no-show");
    $('img').hide();
    reset();
}

function reset(){
    clickedCard = undefined;
    otherClickedCard = undefined;
}


$(".square").on("click", function(){
    var idName = "#" + $(this).attr("id");
    $(idName + ' img').show();
    $(idName).removeClass("no-show");
    setState(idName);
});

function setState(card){
    if(clickedCard === undefined){
        clickedCard = card;
    } else if(otherClickedCard === undefined){
        otherClickedCard = card;
    } 
    if(clickedCard !== undefined && otherClickedCard !== undefined){
        isMatch(clickedCard, otherClickedCard);
    }
}

function isMatch(card1, card2){
    var str;
    if (card1.length > card2.length) {
        str = card1.substring(0,4);
        if(str === card2){
            $(card1).off("click");
            $(card2).off("click");
            offElements.push(card1);
            offElements.push(card2);
        }
        else{
            $(card1 + ' img').hide();
            $(card2 + ' img').hide();
            $(card1).addClass("no-show");
            $(card2).addClass("no-show");
        }

    } else if(card2.length > card1.length){
        str = card2.substring(0,4);
        if(str === card1){
            $(card1).off("click");
            $(card2).off("click");
            offElements.push(card1);
            offElements.push(card2);
        } else{
            $(card1 + ' img').hide();
            $(card2 + ' img').hide();
            $(card1).addClass("no-show");
            $(card2).addClass("no-show");
        }
    } else{
        $(card1 + ' img').hide();
        $(card2 + ' img').hide();
        $(card1).addClass("no-show");
        $(card2).addClass("no-show");
    }
    reset();
}
