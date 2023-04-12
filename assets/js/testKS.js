
//add onclick="storeName()" to htmlbutton for storename
function storeName(){
    var inputName = document.getElementById("your-name").value;
    localStorage.setItem("your-name", stringify(inputName));
};
function getName(){
 var add
}

fetch('API_URL')
.then(response => response.json())
.then(data => console.log(data));

const cardsContainer = document.querySelector('#cards-container');

function createCards(c) {
    c.forEach(cardData => {
      const div = document.createElement('div');
      const image = document.createElement('img');
      const name = document.createElement('h3');
      const explore = document.createElement('button');

        div.classList = 'card'
        image.classList = 'card-img'//same image for exploreDescription bg img and progess bar 
        /////////////////////////////collab with kolt on how we are going to do this
        explore.classList = 'explore'
        
        image.src = card.image
        name.innerText = `City: ${name}`
        explore.textContent = 'Explore'

      div.appendChild(image)
      div.appendChild(name)
      div.appendChild(explore)
      cardsContainer.appendChild(div)

      //add event listener for explore button to start explore dscription function
        document.getElementsByClassName('explore').addEventListener('click', exploreDescription)
    });
  };

  function exploreDescription(cardData//put within event lisener above or keep down here?
  /////////////////////////////////////not sure what to put in the green color spaces 
                                        ){
        cardData.forEach( explore => {
    const description = document.createElement('h4');//not h3 bc it needs to be bigger than h3
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


 // function to store image into progress Bar upon click event (high priority)
 // function to change card creater where description and button go on to top larger card (large card should be hard into html)(high priority)
 // side bar function to open and closed like the high score thing (low priority)
 // getname function (medium priority)
 // kolt is doing hard api stuff 
 // 
////////////////////////////////////ask about functions within functions within event listeners/////////////////
