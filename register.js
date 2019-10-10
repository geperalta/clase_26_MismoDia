const registerButton = document.getElementById("register");

registerButton.addEventListener("click", printValues);

//INICIO window lo hicimos al final de clase para saber de FETCH
/*
window.addEventListener("load",gerUsers);
function getUsers(){
    const headers = new Headers({"Content-Type: "application/json"})
    return fetch ("http://localhost:3000/users", {
    method: "GET",
    headers: headers 
    }).then(response => {
        return response.json();
    }).then(res => console.log(res));
}
*/
//FIN 

function printValues (event){
    event.preventDefault();
    //event.prevenDefault hace que no se ejecute la acción si hay un error
    const data = {
        name: document.getElementById("name").value,
        username: document.getElementById("userName").value,
        password: document.getElementById("password").value,
    };
    console.log(data);
}