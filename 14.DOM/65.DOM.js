// DOM => Document Object Model => represents the structure and content of the HTML document
// It provides a way to interact with the HTML elements and manipulate their properties and content
// DOM is a tree-like structure, where each node represents an element or a piece of content in the document


// Dom techniques
// 1. Selecting elements
// 2. Traversing the elements
// 3. Manipulating elements
// <!-- Docment - pointing HTML -->
// <!-- Object - pointng objects -->
// <!-- Model Structure -->


// selecting techniques
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector()
// 5. querySelectorAll()


// let heading = document.getElementsByTagName("h1")
// console.log(heading)

// let contents = document.getElementsByClassName("content")
// console.log(contents)

// let id = document.getElementById("unique")
// console.log(id);

// let nameAttribute = document.getElementsByName("input-1")
// console.log(nameAttribute);

// let queryselect = document.querySelector("h1")
// console.log(queryselect.innerHTML);

// let queryselectall = document.querySelectorAll(".content")
// console.log(queryselectall);

// let newElement = document.createElement("h3");
// newElement.innerText = "Sub Heading";
// document.body.append(newElement);


// traversing technique
// 1. parentNode
// 2. childNodes
// 3. children
// 4. firstChild
// 5. lastChild
// 6. nextSibling
// 7. previousSibling

function traversingParent() {
    let getParent = document.querySelector(".child1")

    console.log(getParent.parentElement);
    console.log(getParent.parentNode);


    let getParent1 = document.querySelector("html")
    console.log(getParent1.parentElement);
    console.log(getParent1.parentNode);
}

traversingParent()


// types of Nodes - 1. Element 2. Attribute 3. Text 4. Comment  5. root 6. doctype


// child

function selectChild() {
    let getElement = document.querySelector(".parent")
    console.log(getElement.childElementCount);
    console.log(getElement.childNodes);
    console.log(getElement.children);
    console.log(getElement.firstElementChild);
    console.log(getElement.firstChild);
    console.log(getElement.lastElementChild);
    console.log(getElement.lastChild);
}

selectChild()
console.log("-----------------");

function selectsibilings() {
    let child1 = document.querySelector(".child2")
    console.log(child1.nextSibling);
    console.log(child1.previousSibling);
    console.log(child1.nextElementSibling);
    console.log(child1.previousElementSibling);
    
    

}

selectsibilings()


