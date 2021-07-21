document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewTask(event.target[0].value)

  });
})
let tasks=[]
function addNewTask(name){
  console.log(name)
  list=document.querySelector("#tasks")
  item=document.createElement("li")
  item.innerHTML=name
  tasks.push(item)
  list.append(item)
}
