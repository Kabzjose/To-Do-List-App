const { json } = require("express");

let ul=document.getElementById("list")
let button=document.getElementById("button")
let input=document.getElementById("text")
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // load saved tasks
 //Add tasks
      function addTask(){
      if(input.value.trim()==="")return;
      //create li element
    let li=document.createElement("li")
     li.innerText=input.value
     //create delete button
      let dltbtn=document.createElement("button")
      dltbtn.innerText="Delete"
      li.appendChild(dltbtn)
      //Add to list
     ul.appendChild(li)

     //save to array + local storage
     tasks.push(input.value);
     localStorage.setItem("tasks",json.stringify(tasks));
     // clear input
     
     input.value=""
     //Delete logic
     dltbtn.addEventListener("click",()=>{
        li.remove();
        // remove from array
        tasks=tasks.filter(task=>task !== li.innerText.replace("Delete","").trim());
        localStorage.setItem("tasks",JSON.stringify(tasks));
     });
 }
 //load task on page load
 function loadTasks(){
  tasks.forEach(task => {
    let li=document.createElement("li")
    li.innerText=task;

    let dltbtn=document.createElement("button")
    dltbtn.innerText="Delete";
    li.appendChild(dltbtn)
    ul.appendChild(li);

    dltbtn.addEventListener("click",()=>{
      li.remove();
      tasks.tasks.filter("tasks",JSON.stringify(tasks));
    });
  });
 }
 //run load when page starts
 loadTasks()
  
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