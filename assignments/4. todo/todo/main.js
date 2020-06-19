const inputText = document.querySelector('input[type="text"]') // type as attribute and text as value of attribute
let ul= document.querySelector("ul");
const itemLeft= document.querySelector(".itemLeft")
const all= document.querySelector(".all")
const completed= document.querySelector(".completed")
const active= document.querySelector(".active")
const clear= document.querySelector(".clear")
const downArrow = document.querySelector(".down-arrow");
const isChecked = true;
let isAllDone = true;
// let para= document.querySelector(".para");
let sst= [];


function addTodo(event) {
    let text= event.target.value;
        if(event.keyCode == 13){
        let todo = {
            text: text,
            isDone:false
        };
        //update sst
        sst.push(todo);   
        //create ui
        createUI(); 
    }
}
// we have array and need to create ui following steps have to be followed

function createUI(data = sst, root= ul) {
    // <li>
    //     <input type="checkbox" name="" id="">
     //     <p>Learn Dom</p>
    //     <span>x</span>
    // </li>
    root.innerHTML= '';
    data.forEach((todo,index) => {
        let li= document.createElement("li");
        // li.addEventListener("dblclick",editTodo)
        let input= document.createElement("input")
        input.type= "checkbox";
        input.checked= todo.isDone;
        input.className=  "checkbox-input";
        input.setAttribute('data-id',index);
        input.addEventListener('click', toggleTodo);
        let p= document.createElement("p");
        p.innerText= todo.text;
        p.addEventListener('dblclick', editTodo);
        let span= document.createElement("span");
        span.setAttribute('data-id',index);
        span.addEventListener('click',deleteTodo);
        p.innerText= todo.text;
        span.innerText= "x";  

        
        li.append(input,p,span);
        
        ul.append(li);
        inputText.value = "";
                
      
    });
    itemLeft.innerText= `${data.filter(t => !t.isDone).length} item left`; 
}

function toggleTodo(event) {
    // update sst
    let id = event.target.dataset.id
    
    sst[id].isDone= !sst[id].isDone;
    // create ui
    createUI();

}
function deleteTodo(event) {
 
    let id = event.target.dataset.id
    console.log(id)
    //update sst
    sst.splice(id,1)

    //crate ui
    createUI();
}

function handleAll(event) {
    createUI();
}

function handleCompleted() {
    let completedTask = sst.filter(t => t.isDone)
    createUI(completedTask);
}
function handleActive() {
    let activeTask = sst.filter(t => !t.isDone)
    createUI(activeTask)
}
function handleClear() {
    let clearTask =  sst.filter(t => !t.isDone)
    sst = clearTask
    createUI();
}  
function selectAll(){
    if(isAllDone){
    sst = sst.map(t => {
        t.isDone = true
        return t
    })}
    if (!isAllDone) {
        sst = sst.map(t => {
            t.isDone = false 
            return t})}
    console.log(sst)
    console.log(isAllDone)
    isAllDone = !isAllDone
    console.log(isAllDone)
    createUI();
}
function editTodo(event) {

        let input = document.createElement("input");
        let para = event.target;
        let paraContent  = event.target.textContent;
        input.value = paraContent;
        let li = event.target.parentElement;
        li.replaceChild(input,para);
        
        // let newPara = input.value;
        //sst= sst.map(t => t.text = event.target.value);
        // createUI();
    
    }


inputText.addEventListener('keyup', addTodo);
all.addEventListener('click',handleAll);
completed.addEventListener('click',handleCompleted);
active.addEventListener('click',handleActive);
clear.addEventListener('click',handleClear);
downArrow.addEventListener('click',selectAll);