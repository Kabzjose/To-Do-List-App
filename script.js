let ul=document.getElementById("list")
let button=document.getElementById("button")
let input=document.getElementById("text")

      function addTask(){
      if(input.value.trim()==="")return;
    let li=document.createElement("li")
     li.innerText=input.value
      let dltbtn=document.createElement("button")
      dltbtn.innerText="Delete"
      li.appendChild(dltbtn)
     ul.appendChild(li)

     input.value=""
     dltbtn.addEventListener("click",()=>{
        li.remove()
     })
 }
  
  input.addEventListener("keydown" ,(e) => {
  if (e.key === "Enter") {
    addTask();
  }})
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {

    e.target.parentElement.remove();
  }
});
button.addEventListener("click",addTask);