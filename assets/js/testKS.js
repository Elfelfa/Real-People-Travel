
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
      //const description = document.createElement('h3');
      const explore = document.createElement('button');
      div.classList = 'card'
      image.classList = 'card-img'
      explore.classList = 'explore'
      image.src = card.image
      name.innerText = `City: ${name}`
      //description.innerText =`Discription: ${description}`
      explore.textContent = 'Explore'
      div.appendChild(image)
      div.appendChild(name)
      //div.appendChild(description)
      div.appendChild(explore)
      cardsContainer.appendChild(div)
    });
  };

 // function to store image into progress Bar upon click event (high priority)
 // function to change card creater where description and button go on to top larger card (large card should be hard into html)(high priority)
 // side bar function to open and closed like the high score thing (low priority)
 // getname function (medium priority)
 // kolt is doing hard api stuff 
 // 

