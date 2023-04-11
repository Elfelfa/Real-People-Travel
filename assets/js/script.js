////////////////////////////////////////////////////
//
//                    TO DO
//
//
//              Edit fade functions to for loops
//              Create function that adds clicked card to progress bar and itinerary array
//              
////////////////////////////////////////////////////

//Global variables
var currentPage = 0;
var itinerary = [];

//script.js will not execute any code until the page's DOM nodes are ready.
//
$(document).ready(
    function() 
    {
        document.getElementById("#test").addEventListener("click", function(){
            fadeOut()
        });
    }
);

//Switch case function that will determine what scene the page will
//transition to.
//1: Page is transitioning from splash -> name input
//2: Page is transitioning from name input -> location select
//3: Page is transitioning from location select -> accomodation select
//4: Page is transitioning from accomodation select -> activity select
//5: Page is transitioning from activity select -> roadmap
//6: Page is transitioning from roadmap -> you're finished
//
function sceneTransition()
{
    currentPage++;

    switch(currentPage){
        case 1:
            //fade out elements for splash
            //change elements to input page
            //fade back in the page
            break;
        case 2:
            //fade out elements for input
            //change elements to location entry
            //fade back in the page
            break;
        case 3:
            //fade out the input, fade out the cards
            //change elments to accomodation selection
            //fade back in the page
            break;
        case 4:
            //fade out the accomodation cards
            //change elements to entertainment cards
            //Implement way to select up to 4 cards without transition
            //Make sure I'm finished button is added after first card selection
            //fade back in the page
            break;
        case 5:
            //fade out the entertainment cards
            //Change elements to show complete roadmap through google matrix API
            //fade in the elements
            break;
        case 6:
            //Fade out the entertainment cards
            //Save itinerary to sidebar
            //Change elements to You're done! Start a new itinerary? screen
            //Fade in
            break;
    }
}

// Fade in and fade out functions that will grab an element that is
// sent to it and will either fade them out or fade them in. These
// functions can have their values changed to speed up or slow down
// as well as increase or decrease smoothness of the transition.
//
function fadeOut (e)
{
    if (!e.style.opacity) {
        e.style.opacity = 0;
    }

    var fadeEffect = setInterval(function ()
    {
        if (e.style.opacity > 1)
        {
            clearInterval(fadeEffect);
        }
        else
        {
            e.style.opacity -= 0.1;
        }
    }, 50);
}

function fadeIn (e)
{
    if (!e.style.opacity) {
        e.style.opacity = 0;
    }

    var fadeEffect = setInterval(function ()
    {
        if (e.style.opacity > 1)
        {
            clearInterval(fadeEffect);
        }
        else
        {
            e.style.opacity -= 0.1;
        }
    }, 50);
}

//  Create function populateCards()
//
//  Take input from the search bar
//  Use that information and fetch from google API
//  Only grab necessary fetched data from each result
//  Place said data into objects and store them in an array
//  Create HTML elements using data within the object of our array
//  Each HTML element will have a data-number attribute
//

//  Create function saveCard()
//
//  
//
//