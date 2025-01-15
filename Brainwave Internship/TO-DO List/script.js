const inputb=document.getElementById("input-box");
const liCon=document.getElementById("listC");


function addT(){

    if(inputb.value===''){
        alert("You have to write some TASK.");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputb.value;
        liCon.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputb.value='';
    saveD();
}


liCon.addEventListener('click', function(a){
    if(a.target.tagName ==="LI"){
        a.target.classList.toggle("checked");
        saveD();
    }
    else if(a.target.tagName === "SPAN"){
        a.target.parentElement.remove();
        saveD();
    }
},false);

function saveD(){
    localStorage.setItem("d", liCon.innerHTML);
}

function showD(){
    liCon.innerHTML =localStorage.getItem("d");
}

showD();
