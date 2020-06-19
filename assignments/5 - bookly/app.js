// let sst= ["The magoic of thinking big","Zero to One"]

inputAddBook= document.querySelector(".inputAddBook");
let addBookForm = document.querySelector("#add-book");
let hideAll= document.querySelector("#hide")
const searchElement= document.querySelector("#search-books");
const searchInput= searchElement.querySelector("input");
let ul= document.querySelector("ul")

let library = JSON.parse(localStorage.getItem('books')) || [];


function createUI(data=library,root=ul) {
    root.innerHTML='';
    data.forEach(book => {
        
        let li= document.createElement("li");
        let p= document.createElement("p");
        p.classList.add("name");
        p.innerText= book.name;
        let span= document.createElement("Span");
        span.setAttribute("data-id", book.id);
        span.innerText= "delete";
        // span.addEventListener("click",deleteBook);
        span.classList.add("delete");
        li.append(p,span);
        root.append(li);
    });
    
}

function deleteBook(event) {
    if(event.target.classList.contains("delete")){
        let del= event.target.dataset.id;
        library= library.filter(x=> x.id != del)
        localStorage.setItem('books', JSON.stringify(library));
        createUI();
    
    }
    
}
    
function addBook(event) { 
    event.preventDefault();
    // console.log(inputAddBook.value);
    // update sst
    var book= {
        name: inputAddBook.value,
        id: Date.now()
    };
    library.push(book)
    // sst= sst.concat(inputAddBook.value);
    console.log(library)
    inputAddBook.value='';
    localStorage.setItem('books', JSON.stringify(library))
    
    // create ui
    createUI();
}

function searchBook(event) {
    event.preventDefault();
    let filteredSST= library.filter(book => book.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    createUI(filteredSST);
}

function hideElement(event) {
    if(event.target.checked) {
       for(key of ul.children){
           key.style.display="none";
    }
}else {
    key.style.display="none"; 
        for(key of ul.children){
            key.style.display="block";
        }
   }
}

addBookForm.addEventListener('submit', addBook);
searchElement.addEventListener('submit', searchBook);
searchInput.addEventListener('keyup',searchBook);
hideAll.addEventListener('click',hideElement);
ul.addEventListener('click',deleteBook);                                   