
// maniupulation techniques
// 1. createElement()
// 2. innerText
// 3. innerHTML
// 4. textContent
// 5. appendChild()
// 6. removeChild()
// 7. replaceChild()
// 8. cloneNode()
// 9. insertAdjacentElement()
// 10. insertAdjacentHTML()


function manipulateElement() {
    let newlistElement = document.createElement("li")

    newlistElement.innerText = "item 4"
    newlistElement.innerHTML = "<a>link</a> item 5"
    newlistElement.textContent = "<a>link</a> item 5"

    let input = document.querySelector("input")
    // console.log(input.value);


    newlistElement.innerText = input.value

    // console.log(newlistElement);

    let orderList = document.querySelector("ol")

    // orderList.append("Hello")
    orderList.appendChild(newlistElement); // no text node
    // orderList.insertBefore(newlistElement, orderList.children[0])
    // orderList.replaceChild(newlistElement, orderList.children[2])
    // orderList.removeChild(orderList.children[0])
    // orderList.remove()
    newlistElement.style.color = "blue"
    newlistElement.style.backgroundColor = "yellow"
    newlistElement.style.boxShadow = "2px 2px 3px black"
    orderList.prepend(newlistElement)


}