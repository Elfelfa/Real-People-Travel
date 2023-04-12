
//add onclick="storeName()" to htmlbutton for storename
function storeName(){
    var inputName = document.getElementById("your-name").value;
    window.localStorage.setItem("your-name", stringify(inputName));
};

    

function getName(){
    var addName = document.createElement('h3'); 

 addName.classList = 'per-name'

        window.onLoad = function (){
            document.getElementsByClassName('per-name').innerText = localStorage.getItem('your-name');
        };

}

//fetch('API_URL')
//.then(response => response.json())
//.then(data => console.log(data));

const cardsContainer = document.querySelector('#cards-container');

function createCards(c) {
    c.forEach(cardData => {
      const div = document.createElement('div');
      const image = document.createElement('img');
      const name = document.createElement('h4');
      const explore = document.createElement('button');

        div.classList.add('card');
        image.classList.add('card-img')//same image for exploreDescription bg img and progess bar 
        /////////////////////////////collab with kolt on how we are going to do this
        explore.classList.add('explore')// do to other add lists below

        image.src= cardData.image
        name.innerText = `City: ${cardData.name}`
        explore.textContent = 'Explore'

      div.appendChild(image)
      div.appendChild(name)
      div.appendChild(explore)
      cardsContainer.appendChild(div)

      //add event listener for explore button to start explore dscription function
        document.addEventListener('click', '.explore', function(){// if you click on the class explore within the document we will call this function
            exploreDescription(cardData)
        } , false); //use the anonymous function - the function with no name
    });
  };
  //

  function exploreDescription(cardData){//put within event lisener above or keep down here?
  /////////////////////////////////////not sure what to put in the green color spaces 
        cardData.forEach( explore => {
    const description = document.createElement('h5');//not h3 bc it needs to be bigger than h3
    const addItenBtn = document.createElement('button');
    const largeDivBackImg = document.createElement('img');

        largeDivBackImg.classList = 'large-bg' 
        addItenBtn.classList = 'add-to-progress'//needed bc it will be bigger than the explore buttons

    description.innerText =`Discription: ${description}`

        div.appendChild(description)
        div.appendChild(addItenBtn)//not sure if needed
        //add event listener to add picture to progress bar? 
        document.getElementsByClassName('add-to-progress').addEventListener('click', progessBarImg)
        //store to loacl storage 
    });
  };

  function progressBarImg (img){ // add into event listener???
    img.forEach(add => {
        //create div input?
        //pull image and put it into image bar
    });
  };



  function menuButton(){
    //variable grabbing info from iteneraies in local storage
    document.getElementById('').classList.toggle('show');//put class of drop down options for local storage in ID
    
  }

  window.onclick = function outsideMenuClick(event){
    if (!event.target.matches())//create id for the actual drop down portion
        var dropdowncontent = //get infor from local storage as to what they are choosing
  }

 // function to store image into progress Bar upon click event (high priority) kolt is working on with but i made a function///////////
 // function to change card creater where description and button go on to top larger card (large card should be hard into html)(high priority) DONE////////////
 // side bar function to open and closed like the high score thing (low priority)
 // getname function (medium priority) /////////////////////DONE
 // kolt is doing hard api stuff 
 // 
////////////////////////////////////ask about functions within functions within event listeners/////////////////
