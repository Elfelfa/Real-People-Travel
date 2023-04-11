
//add onclick="storeName()" to htmlbutton for storename
function storeName(){
    var inputName = document.getElementById("your-name").value;
    localStorage.setItem("your-name", stringify(inputName));
};



