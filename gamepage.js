p1name=localStorage.getItem("p1name")
p2name=localStorage.getItem("p2name")
p1score=0
p2score=0
document.getElementById("p1name").innerHTML=p1name+" : ";
document.getElementById("p2name").innerHTML=p2name+" : ";
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("qturn").innerHTML="Question turn- "+p1name;
document.getElementById("aturn").innerHTML="Answer turn- "+p2name;
function send() {
    getword=document.getElementById("word").value;
    qword=getword.toLowerCase()
    console.log(qword)

    letter1=qword.charAt(1)
    console.log(letter1)
    replace1=qword.replace(letter1," _ ");
    console.log(replace1)

    letter2=qword.charAt(qword.length-1)
    console.log(letter2)
    replace2=replace1.replace(letter2," _ ");
    console.log(replace2)

    var x=Math.floor(qword.length/2)
    letter3=qword.charAt(x)
    console.log(letter3)
    replace3=replace2.replace(letter3," _ ")
    console.log(replace3)
    

    qtag=`<h4 id="word_display">Q. ${replace3}</h4>`;
    atag="<br> Answer : <input type='text' id='input_check_box'>";
    btag="<br> <button onclick='check()'>Check</button>";
    queston=qtag+atag+btag

    document.getElementById("output").innerHTML=queston;

    document.getElementById("word").value="";
}
aturn="p2"
qturn="p1"
function check() {
    getans=document.getElementById("input_check_box").value;
    answer=getans.toLowerCase()
    console.log(answer)
    if(answer==qword) {
        if (aturn=="p2") {
            p2score=p2score+1
            document.getElementById("p2score").innerHTML=p2score;
        }
        else {
            p1score=p1score+1
            document.getElementById("p1score").innerHTML=p1score;
        }
    }
    if (qturn=="p1") {
        qturn="p2"
        document.getElementById("qturn").innerHTML="Question turn- "+p2name;
    }
    else {
        qturn="p1"
        document.getElementById("qturn").innerHTML="Question turn- "+p1name;
    }
    if(aturn=="p1") {
        aturn="p2"
        document.getElementById("aturn").innerHTML="Answer turn- "+p2name;
    }
    else{
        aturn="p1"
        document.getElementById("aturn").innerHTML="Answer turn- "+p1name;
    }
    document.getElementById("output").innerHTML="";
}