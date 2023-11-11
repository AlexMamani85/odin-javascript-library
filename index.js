const myLibrary = [];
const colors={0:"red", 1:"green", 2:"blue", 3:"yellow", 4:"orange", 5:"purple", 6:"pink", 7:"brown", 8:"black", 9:"white"};
const colorsFont={0:"white", 1:"black", 2:"white", 3:"black", 4:"black", 5:"white", 6:"black", 7:"white", 8:"white", 9:"black"};

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(title, author, pages, read=false) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function addSeveralBooksToLibrary() {
    // do stuff here
    const book = new Book("Harry Potter y la piedra filosofal", "J. K. Rowling", 223, true);
    myLibrary.push(book);

    const book2 = new Book("Harry Potter y la cámara secreta", "J. K. Rowling", 251, true);
    myLibrary.push(book2);

    const book3 = new Book("Harry Potter y el prisionero de Azkaban", "J. K. Rowling", 317);
    myLibrary.push(book3);

    const book4 = new Book("Harry Potter y el cáliz de fuego", "J. K. Rowling", 636);   
    myLibrary.push(book4);

    const book5 = new Book("Harry Potter y la orden del Fénix", "J. K. Rowling", 766);
    myLibrary.push(book5);

    const book6 = new Book("Harry Potter y el misterio del príncipe", "J. K. Rowling", 607, true);
    myLibrary.push(book6);

    const book7 = new Book("Harry Potter y las reliquias de la muerte", "J. K. Rowling", 759, true);
    myLibrary.push(book7);

}



const newBookBTN = document.getElementById("newBookBTN");
const newBookDialog = document.getElementById("newBookDialog");
const outputBox = document.querySelector("output");
const array = document.querySelector("#array");


const selectEl = newBookDialog.querySelector("select");

titleInput=document.querySelector('#title');
authorInput=document.querySelector('#author');
pagesInput=document.querySelector('#pages');
readInput=document.querySelector('#read');


const confirmBtn = newBookDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
newBookBTN.addEventListener("click", () => {
    newBookDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
newBookDialog.addEventListener("close", (e) => {
  array.value = `Dialog result: ${displayMyLibraryTXT()}`;
  outputBox.value    =
  newBookDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${newBookDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form

  addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value)
  newBookDialog.close(selectEl.value); // Have to send the select box value here.
});








function displayMyLibraryTXT(){
    let output = "";

    myLibrary.map((book)=> {
        output += book.title + book.author + book.pages + book.read + "\n";
    }
    )
    return output;

}


function displayMyLibraryHTML(){

    let containerDiv=document.createElement("div");


    myLibrary.map((book)=> {


        let cardContainerDiv=document.createElement("div");
        let containerDataDiv=document.createElement("div");
        let containerCheckBoxDiv=document.createElement("div");
        let buttonContainerDiv=document.createElement("div");
        
        
        
        let titleDiv=document.createElement("div");
        let authorDiv=document.createElement("div");
        let pagesDiv=document.createElement("div");
        let readInput=document.createElement("input");
        let readInputLabel=document.createElement("label");
    
        let editBtn=document.createElement("button");
        let deleteBtn=document.createElement("button");
        editBtn.textContent="Edit";
        deleteBtn.textContent="Delete";
        containerDiv.style="padding: 30px;width=50px; border: 5px solid red; display:flex; flex-direction:column; justify-content:space-evenly;"
        containerDiv.style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px;"
        containerCheckBoxDiv.style="display:flex; flex-direction:row; justify-content:end;"
        let numeroRandom =Math.floor(Math.random()*10);
        cardContainerDiv.style=`padding: 20px;background-color:${colors[numeroRandom]}; color:${colorsFont[numeroRandom]};border: 5px solid green; display:flex; flex-direction:column; justify-content:space-evenly;`

        containerDataDiv.style="display:flex; flex-direction:column; justify-content:space-evenly;"
        buttonContainerDiv.style="display:flex; flex-direction:row; justify-content:space-evenly;"
        
        let id=Math.random().toString(36).substr(2, 9);

        readInput.type="checkbox";
        readInputLabel.textContent="Read";
        readInputLabel.for= id;
        readInputLabel.style="display:inline-block;padding: 10px 0px;"
        readInput.style="display:inline-block;"
        readInput.id=id;
        readInput.name="read";

        
        containerDataDiv.appendChild(titleDiv);
        containerDataDiv.appendChild(authorDiv);
        containerDataDiv.appendChild(pagesDiv);

        containerCheckBoxDiv.appendChild(readInput);
        containerCheckBoxDiv.appendChild(readInputLabel);
        

        buttonContainerDiv.appendChild(editBtn);
        buttonContainerDiv.appendChild(deleteBtn);

        cardContainerDiv.appendChild(containerDataDiv);
        cardContainerDiv.appendChild(containerCheckBoxDiv);
        cardContainerDiv.appendChild(buttonContainerDiv);

        titleLabel = document.createElement("label");
        authorLabel = document.createElement("label");
        pagesLabel = document.createElement("label");

        titleLabel.textContent="Title: ";
        authorLabel.textContent="Author: ";
        pagesLabel.textContent="Pages: ";

        titleLabel.style="font-weight: bold;"
        authorLabel.style="font-weight: bold;"
        pagesLabel.style="font-weight: bold;"


        titleDiv.appendChild(titleLabel);
        titleDivSpan=document.createElement("span")
        titleDivSpan.textContent=`${book.title}`;
        titleDiv.appendChild(titleDivSpan);


        authorDiv.appendChild(authorLabel);
        authorDivSpan=document.createElement("span")
        authorDivSpan.textContent=`${book.author}`;
        authorDiv.appendChild(authorDivSpan);

        pagesDiv.appendChild(pagesLabel);
        pagesDivSpan=document.createElement("span")
        pagesDivSpan.textContent=`${book.pages}`;
        pagesDiv.appendChild(pagesDivSpan);

        readInput.checked=book.read;

        titleDiv.style="padding: 5px 0px;"
        authorDiv.style="padding: 5px 0px;"

        containerDiv.appendChild(cardContainerDiv);
    }
    )

    array.appendChild(containerDiv);

}


addSeveralBooksToLibrary()

displayMyLibraryHTML();