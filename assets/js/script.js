//Global variables
var currentPage = 0;
var tempLocations = [];
var itinerary = [];

const apiKey = '&key=AIzaSyDORJkJF8s_jJJqrMWshFrJTLxMXDFhTzg';
const corsLink = 'https://cors-anywhere.herokuapp.com/';
const placeLink = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';
const placeFields = '&inputtype=textquery&fields=formatted_address%2Cname%2Cphoto%2Crating%2Copening_hours%2Cgeometry%2Cprice_level';
const photoLink = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=';

const nearbyLink = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

const pageOne = document.getElementById('pageOne');
const pageTwo = document.getElementById('pageTwo');
const pageThree = document.getElementById('pageThree');
const pageFour = document.getElementById('pageFour');
const pageFive = document.getElementById('pageFive');

const nameInput = document.getElementById('yourName');
const pgTwoNext = document.getElementById('pageTwoNext');

const pgThreeSearchContainer = document.getElementById('citySearchContainer');
const pgThreeSearchBtn = document.getElementById('pgThreeSearchBtn');
const pgThreeSearch = document.getElementById('pgThreeSearch');

const cardsContainer = document.querySelector('#cardsContainer');

//script.js will not execute any code until the page's DOM nodes are ready.
//
document.addEventListener("DOMContentLoaded", () => {

    var startBtn = document.getElementById("letsPlan");

    startBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        sceneTransition();
    });

    pgTwoNext.addEventListener("click", function (event) {
        event.stopPropagation();
        var inputName = nameInput.value.trim();

        if (inputName !== '')
        {
            storeName(inputName);
            sceneTransition();
        };
    });

    pgThreeSearchBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        var isValid;

        if (pgThreeSearch.value.trim() !== '')
        {
            getStarterLocation(pgThreeSearch.value.trim());
        };
    });
});

// corsLink + placeLink = https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?
// chosenLocation is the location the user places into the input box.
// placeFields = &inputtype=textquery&fields=formatted_address%2Cname%2Cphoto%2Crating%2Copening_hours%2Cgeometry%2Cprice_level
//
// placeFields query will grab the:
//      Formatted address
//      Location name
//      Photo reference
//      Lattitude and longitude
//      Location rating if applicable
//      Opening hours if applicable 
//      Price level if applicable
//
function getStarterLocation(chosenLocation) {
    //chosenLocation = document.getElementById('placeSearch').value.trim();

    var locData = {
        address: '',
        name: '',
        image: '',
        lat: '',
        lon: ''
    };

    // corsLink + photoLink = https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=
    // Grabs photo reference to pull an image from the places API.
    //
    fetch(corsLink + placeLink + 'input=' + chosenLocation + placeFields + apiKey)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    locData.address = data.candidates[0].formatted_address;
                    locData.lat = data.candidates[0].geometry.location.lat;
                    locData.lon = data.candidates[0].geometry.location.lng;
                    locData.name = data.candidates[0].name;
                    locData.image = corsLink + photoLink + data.candidates[0].photos[0].photo_reference + apiKey;
                });
            };
        });

    itinerary.push(locData);
    sceneTransition();
}

// corsLink + placeLink = https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?
//  keyword = place category (hotel, monument, restaurant, museum, etc.)
//  location = lat%lon
//  radius in meters
//  
//  This will return an array of 20 results
//
function getNearbyHotels() {
    console.log('Start getNearbyHotels');
    fetch(corsLink + nearbyLink + 'keyword=hotel&location=' + itinerary[0].lat + '%2C' + itinerary[0].lon + '&radius=50000' + apiKey)
        .then(function (response) {
            if (response.ok) {
                console.log(response);

                response.json().then(function (data) {
                    console.log(data);
                    setTimeout('', 5000);

                    data.results.forEach(loc => {
                        var locData = {
                            address: '',
                            name: '',
                            image: '',
                            lat: '',
                            lon: ''
                        }

                        if (loc.address) {
                            locData.address = loc.formatted_address;

                        }
                        else if (loc.vicinity) {
                            locData.address = loc.vicinity;
                        };

                        locData.name = loc.name;

                        if (locData.image) {
                            locData.image = corsLink + photoLink + loc.photos[0].photo_reference + apiKey;
                        }

                        locData.lat = loc.geometry.location.lat;
                        locData.lon = loc.geometry.location.lng;

                        tempLocations.push(locData);
                    });

                    console.log(tempLocations);
                    itinerary.push(tempLocations[0]);
                    console.log('End getNearbyHotels');
                });
            };
        });

    setTimeout(getNearbyAttractions, 5000);
}

//  Searches for nearby attractions in a 50,000m radius around the selected hotel
//  keyword = place category (hotel, monument, restaurant, museum, etc.)
//  location = lat%lon
//  radius in meters
//  
//  This will return an array of up to 80 results
//
function getNearbyAttractions() {

    console.log('Start getNearbyAttractions');

    tempLocations.length = 0;

    var i = 0;

    var myBuffer = setInterval(function () {
        if (i < 4) {
            switch (i) {
                case 0:
                    var currentAttr = 'tourist_attraction';
                    break;
                case 1:
                    var currentAttr = 'cafe';
                    break;
                case 2:
                    var currentAttr = 'art_gallery';
                    break;
                case 3:
                    var currentAttr = 'museum';
                    break;
            }

            console.log('buffering');
            console.log('i = ' + i);

            fetch(corsLink + nearbyLink + 'keyword=' + currentAttr + '&location=' + itinerary[1].lat + '%2C' + itinerary[1].lon + '&radius=50000' + apiKey)
                .then(function (response) {
                    if (response.ok) {
                        response.json().then(function (data) {
                            console.log(data);
                            setTimeout('', 5000);

                            data.results.forEach(loc => {

                                var locData = {
                                    address: '',
                                    name: '',
                                    image: '',
                                    lat: '',
                                    lon: ''
                                }

                                if (loc.business_status !== 'CLOSED_PERMANENTLY') {
                                    if (loc.address) {
                                        locData.address = loc.formatted_address;

                                    }
                                    else if (loc.vicinity) {
                                        locData.address = loc.vicinity;
                                    };

                                    locData.name = loc.name;

                                    if (loc.photos) {
                                        locData.image = corsLink + photoLink + loc.photos[0].photo_reference + apiKey;
                                    };

                                    locData.lat = loc.geometry.location.lat;
                                    locData.lon = loc.geometry.location.lng;

                                    tempLocations.push(locData);
                                }
                            });
                        });
                    };
                });
            i++;
        }
        else {
            clearInterval(myBuffer);
            console.log(tempLocations);
            console.log('End getNearbyAttractions');
        }
    }, 5000);
}

//Switch case function that will determine what scene the page will
//transition to.
//1: Page is transitioning from splash -> name input
//2: Page is transitioning from name input -> location select
//3: Page is transitioning from location select -> accomodation select
//4: Page is transitioning from accomodation select -> activity select
//5: Page is transitioning from activity select -> roadmap
//6: Page is transitioning from roadmap -> you're finished
//
function sceneTransition() {
    currentPage++;

    switch (currentPage) {
        case 1:
            fadeOut(pageOne);
            pageTwo.classList.remove('hidden');
            break;
        case 2:
            fadeOut(pageTwo);
            pageTwo.classList.add('hidden');
            pageThree.classList.remove('hidden');
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
};

// Fade in and fade out functions that will grab an element that is
// sent to it and will either fade them out or fade them in. These
// functions can have their values changed to speed up or slow down
// as well as increase or decrease smoothness of the transition.
//
function fadeOut(e) {
    if (!e.style.opacity) {
        e.style.opacity = 1;
    }

    var fadeOutEffect = setInterval(function () {
        if (e.style.opacity <= 0) {
            clearInterval(fadeOutEffect);
            e.classList.add('hidden');
        }
        else {
            e.style.opacity -= 0.1;
        }
    }, 50);
};

function fadeIn(i) {

    if (!i.style.opacity) {
        i.style.opacity = 0;
    }

    var fadeInEffect = setInterval(function () {
        if (i.style.opacity >= 1) {
            console.log('fadeDone');
            clearInterval(fadeInEffect);
        }
        else {
            i.style.opacity += 0.1;
        }
    }, 50);
};

//add onclick="storeName()" to htmlbutton for storename
function storeName(inputName) {
    window.localStorage.setItem("yourName", JSON.stringify(inputName));
};

function getName() {
    var addName = document.createElement('h3');

    document.getElementById('perName').innerText = localStorage.getItem('yourName');
};

function createCards() {
    var generatedDex = [];
    for (let index = 0; index < 10; index++) {

        var r;
        var t = false;

        while (true) {
            r = Math.floor(Math.random() * tempLocations.length);

            for (let k = 0; k < generatedDex.length; k++) {
                if (r === generatedDex[k]) {
                    t = true;
                    break;
                }
            }

            if (t === false) {
                generatedDex.push(r);
                break;
            }
        }

        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h4');
        const refreshBtn = document.createElement('button');
        const imDoneBtn = document.createElement('button');
        const addItinBtn = document.createElement('button');
        
        div.classList.add('dCard flex-initial w-60 h-60 m-5');

        image.src = tempLocations[r].image;
        name.innerText = tempLocations[r].name;
        
        refreshBtn.classList.add('refresh');
        addItinBtn.classList.add('addToItin');
        imDoneBtn.classList.add('imDone');

        refreshBtn.innerText = "Refresh";
        addItinBtn.innerText = "Add To Itinerary";
        imDoneBtn.innerText = "I'm Done";

        div.appendChild(image);
        div.appendChild(name);
        cardsContainer.appendChild(div);
    }

    document.addEventListener('click', '.card', function addButtons() {
        div.appendChild(addItinBtn);
    });

    div.appendChild(refreshBtn);
    callBtns(imDoneBtn);
};

function clearCards() {

}

function callBtns(b) {
    //const error = document.createElement('h4');// 

    document.addEventListener('click', '.refresh', function() {
        clearCards();
        createCards();
    });

    document.addEventListener('click', '.addToItin', function() {

        if (attractAccom[c] >= 1) {
            div.appendChild(b)//middle button
            window.localStorage.setItem(attractAccom)
        }
    });

    document.addEventListener('click', '.imDone', function() {
        window.localStorage.setItem(attractAccom); //finish
    });
};

function toggleSlideover() {
    document.getElementById('slideoverContainer').classList.toggle('invisible');
    document.getElementById('slideoverBg').classList.toggle('opacity-0');
    document.getElementById('slideoverBg').classList.toggle('opacity-50');
    document.getElementById('slideover').classList.toggle('translate-x-full');
};
