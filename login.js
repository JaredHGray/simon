function login(){
    const getName = document.querySelector("#name");
    localStorage.setItem("userName", getName.value);
    window.location.href = "play.html";
}