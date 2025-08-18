let ul=document.getElementById("list")
let button=document.getElementById("button")
let text=document.getElementById("text")

 button.addEventListener("click",()=>{

    let li=document.createElement("li")
     li.innerText=text.value
      let dltbtn=document.createElement("button")
      dltbtn.innerText="Delete"
      li.appendChild(dltbtn)
     ul.appendChild(li)

     text.value=""
     dltbtn.addEventListener("click",()=>{
        li.remove()
     })
 })
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    // If we clicked a <button>, remove its parent <li>
    e.target.parentElement.remove();
  }
});