let todolist=[
    {item:'buy milk',
        duedate:'4/10/2023'
    },
    {item:'go to college',
        duedate:'4/10/2023'
    }];
displayItems();

function addtodo(){
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoitem = inputElement.value;
    let tododate = dateElement.value;
    todolist.push({item:todoitem,duedate:tododate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}
function displayItems(){
let containerElement = document.querySelector(".todo-container");

let newHTML='';

for(i=0;i<todolist.length;i++){
    
    let {item,duedate}=todolist[i];
    newHTML+=`<span>${item}</span>
              <span>${duedate}</span>
    <button class="btn-delete" onclick="todolist.splice(${i},1);
    displayItems();
    ">delete</button>`;
   
}
  containerElement.innerHTML = newHTML;
}