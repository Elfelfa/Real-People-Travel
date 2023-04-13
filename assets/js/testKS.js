///////////////////////////////////////////////////////////////////////
//                  to do 
//    integrate items with kolt 
//    create function to take choices and put them in local storage
//
//////////////////////////////////////////////////////////////////////

var currentPage = 0;
var chosenLocation = 'Paris';
var tempLocations = [];
var itinerary = [];

const apiKey = '&key=AIzaSyDORJkJF8s_jJJqrMWshFrJTLxMXDFhTzg';
const corsLink = 'https://cors-anywhere.herokuapp.com/';
const placeLink = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';
const placeFields = '&inputtype=textquery&fields=formatted_address%2Cname%2Cphoto%2Crating%2Copening_hours%2Cgeometry%2Cprice_level';
const photoLink = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=';

const nearbyLink = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

//add onclick="storeName()" to htmlbutton for storename
function storeName(){
    var inputName = document.getElementById("your-name").value;
    window.localStorage.setItem("your-name", stringify(inputName));
};


//put at end with last page
function getName(){
    var addName = document.createElement('h3'); 

 addName.classList = 'per-name'

        window.onLoad = function (){
            document.getElementsByClassName('per-name').innerText = localStorage.getItem('your-name');
        };
 callIten();
}

function callIten (){
  var itenerary = [];
  itenerary.push(Json.parse(localStorage.getItem('')));
  localStoragesetItem('', JSON.stringify(a));

  window.onLoad = function(){
    document.getElementsByClassName() = localStorage.getItem();
    document.getElementsByClassName() = localStorage.getItem(attractAccom);
  };

}


//fetch('API_URL')
//.then(response => response.json())
//.then(data => console.log(data));

const cardsContainer = document.querySelector('#cards-container');

function createCards() {
      var generatedDex = [];
    for (let index = 0; index < 10; index++) {

      var r;
      var t = false;
          while (true) {
            r = Math.floor(Math.random() * tempLocations.length);
            
              for (let k =0; k < generatedDex.length; k++) {
                if (r === generatedDex[k]) {
                  t=true;
                  break;
                }
            }
                  if (t===false) {
                    generatedDex.push(r);
                    break;
                  }
          }

      const div = document.createElement('div');
      const image = document.createElement('img');
      const name = document.createElement('h4');
      //const explore = document.createElement('button');//made a listener for the whole div

        div.classList.add('card');
        image.classList.add('card-img')//same image for exploreDescription bg img and progess bar 
        /////////////////////////////collab with kolt on how we are going to do this
        //explore.classList.add('explore')// do to other add lists below

        image.src= tempLocations[r].image;
        name.innerText = `${tempLocations[r].name}`
        //explore.textContent = 'Explore'

      div.appendChild(image)
      div.appendChild(name)
      //div.appendChild(explore)
      cardsContainer.appendChild(div)
                      //can put these at top i put these here to show what they refer to
          const refreshBtn = document.createElement('button');
          const imDoneBtn = document.createElement('button');
          const addItenBtn = document.createElement('button');
                      //can put these at top i put these here to show what they refer to
              refreshBtn.classList = 'refresh' 
              addItenBtn.classList = 'add-to-iten'
              imDoneBtn.classList = 'im-done'
              //add text in button

      document.addEventListener('click', '.card', function addButtons() {
        div.appendChild(refreshBtn)
        div.appendChild(addItenBtn)
        //div.appendChild(imDoneBtn)//put within added iten btn
      });
    }
    callButns();
  };



function callButns(){
  //const error = document.createElement('h4');// 

  document.addEventListener('click', '.refresh', createCards);

  document.addEventListener('click', '.add-to-iten', function addedIten(){

      var attractAccom = [];
      var c;

            if (attractAccom[c] >= 1) {
            div.appendChild(imDoneBtn)//middle button
            window.localStorage.setItem(attractAccom)
            }
  });

  document.addEventListener('click', '.im-done', function setStorage(){
          window.localStorage.setItem(attractAccom); //finish
        });
}



      //add event listener for explore button to start explore dscription function
            //document.addEventListener('click', '.card', function(){// if you click on the class explore within the document we will call this function
            //exploreDescription(tempLocations[r])
           // } , false); //use the anonymous function - the function with no name
  
  //john checked and this first one kinda works

  //function exploreDescription(cardData){//put within event lisener above or keep down here?
  /////////////////////////////////////not sure what to put in the green color spaces 
        //cardData.forEach( explore => {
    //const refreshBtn = document.createElement('button');
    //const imDoneBtn = document.createElement('button');
    //const addItenBtn = document.createElement('button');
    

        //refreshBtn.classList = 'refresh' 
        //addItenBtn.classList = 'add-to-iten'
        //imDoneBtn.classList = 'im-done'

        //div.appendChild(refreshBtn)
        //div.appendChild(addItenBtn)//not sure if needed
        //div.appendChild(imDoneBtn)

       // document.addEventListener('click', 
        //store to loacl storage 
    //});
  //};

 //function refreshCards



  //function menuButton(){
    //variable grabbing info from iteneraies in local storage
    //document.getElementById('').classList.toggle('show');//put class of drop down options for local storage in ID
    
  //}

  //window.onclick = function outsideMenuClick(event){
    //if (!event.target.matches())//create id for the actual drop down portion
       // var dropdowncontent = //get infor from local storage as to what they are choosing
  //}

