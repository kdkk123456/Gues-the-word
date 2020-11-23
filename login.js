function login() {
    p1name=document.getElementById("player1_name").value;
    p2name=document.getElementById("player2_name").value;
    localStorage.setItem("p1name",p1name);
    localStorage.setItem("p2name",p2name);
    window.location="gamepage.html";
}