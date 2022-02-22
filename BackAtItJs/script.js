


const listDiv = document.querySelector(".todoList");
const list = document.querySelector(".list");
const submit = document.querySelector(".submit");
const input = document.querySelector(".input");

let todos = [];




submit.addEventListener("click", (e)=>{ // we add an event listener to the button in our div


    if(input.value){ // we check for a value in the input field and if there is one itll be truthy 
        //and will be pushed to the array



        todos.push({
            todoValue : input.value,
            isDone : false
         }); // we store in the array an object with the value and wether or not its been completed 


        input.value = ""; //we clear the text field 
    }

    renderList(); //we call our render function 


   
});


list.addEventListener("change" , (e)=>{
   const input = e.target.closest("input");
   if(!input){
       return
   }

   const index = parseInt(input.id.split("-")[1]); 
   todos[index].isDone = input.checked;

})


function renderList(){

    list.innerHTML = ""; //clears the ul from everything
    
    todos.forEach((todo , index)=>{
        const id = `item-${index}`
        list.insertAdjacentHTML("beforeEnd" , `<li><input type="checkbox" id="${id}" ${todo.isDone ? "checked" : ""}><label for="${id}">${todo.todoValue}</label></li>`)
    }) // we add an li for each object in our array 

    // clear old list of html 
    //render new updated list 
    



};