const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();   
})

let btn = document.querySelector("button");
  btn.addEventListener("click", function(event){
   
let prenom = document.querySelector("#first-name").value;
let nom = document.querySelector("#last-name").value;
let message = document.querySelector("#message").value;

 if(prenom == ""|| nom == ""|| message == ""){
    let messageErreur = document.querySelector("#error-message");
    messageErreur.style.display = "block";
 }else{
      let messageErreur = document.querySelector("#error-message");
     messageErreur.style.display = "none";
 
     addElement(prenom,nom,message);
   }   


 function addElement (prenom, nom, message){
     let newDiv1 = document.createElement("div");
     newDiv1.className = "flex space-x-4 text-sm text-gray-500";
    
     let newDiv2 = document.createElement("div");
     newDiv2.className = "flex-1 py-10 border-t border-gray-200";
     newDiv1.appendChild(newDiv2);

     let titre = document.createElement("h3");
     titre.className = "font-medium text-gray-900";
     titre.innerHTML = prenom + " " + nom 
     newDiv2.appendChild(titre);

     let newDiv3 = document.createElement("div");
     newDiv3.className = "prose prose-sm mt-4 max-w-none text-gray-500";
     newDiv2.appendChild(newDiv3);

    let para = document.createElement("p");
     para.className = "prose prose-sm mt-4 max-w-none text-gray-500";
     para.innerHTML = message;
     newDiv3.appendChild(para);

    let commentList = document.getElementById("comment-list");
    commentList.appendChild(newDiv1);

    document.querySelector("#first-name").value="";
    document.querySelector("#last-name").value="";
    document.querySelector("#message").value="";

    event.preventDefault();
  }  
   });