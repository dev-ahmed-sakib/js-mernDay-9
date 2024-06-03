//make some tags and acess they're previous and next tag using sibling element
const taken = document.getElementsByTagName('p').nextElementSibling;
console.log(taken)



//create a div  they has 2 children div and access they're firstElementChild & lastElementChild
// const taken = document.getElementById('mainBox');
// let getValue = taken.lastElementChild;
// console.log(getValue)

//access div classes  like css way
// const taken = document.getElementById([id="mainBox"]);
// console.log(taken.style.padding = '100px')

//create a multiple div class and access these inside value children and color the div && parents div/class access
// const taken = document.getElementsByTagName('td');
// // const taken2 = document.getElementById('mainBox')
// let getValue = taken.parentNode;
// console.log(getValue)

// const taken = document.querySelector('#mainBox');
// let getValue = taken.children[0].children[0].children;
// console.log(getValue)


// //classList.contains
// const taken2 = document.getElementById('mainBox').classList.add('myClass1')
// const taken = document.getElementById('mainBox').classList.contains('myClass1');
// console.log(taken)



// //classList.remove
// const taken2 = document.getElementById('mainBox').classList.remove('myClass1','myClass2','myClass3','myClass')
// console.log(taken2)

// //classList.add
// const taken = document.getElementById('mainBox').classList.add('myClass1','myClass2','myClass3')
// console.log(taken)


// // removeAttribute
// const taken = document.getElementById('mainBox').removeAttribute('class');
// console.log(taken)


// //hasAttribute
// const taken = document.getElementById('mainBox').hasAttribute('class');
// console.log(taken)

//getAttribute
// const taken = document.querySelector('.box').getAttribute('style');
// console.log(taken)


// // setAttribute (set some attibute list)
// const elements = document.getElementsByTagName('td');
// const storeData = [];
// let currentIndex = 0;

// // Define a function to add and remove classes
// function toggleClass() {
//     // Remove class from previous element
//     if (currentIndex > 0) {
//         elements[currentIndex - 1].classList.remove('myNumber');
//     } else if (currentIndex === 0 && elements.length > 0) {
//         // Remove class from the last element when currentIndex resets to 0
//         elements[elements.length - 1].classList.remove('myNumber');
//     }

//     // Add class to the current element
//     elements[currentIndex].classList.add('myNumber');

//     // Move to the next element or reset to the beginning
//     currentIndex = (currentIndex + 1) % elements.length; 
// }

// // Call the toggleClass function at regular intervals (every 1000ms or 1 second in this example)
// setInterval(toggleClass, 1000);






// take a class using querySelector and change these color and bacground color add css active class in nth-child using javascript DOM className
// const taken = document.querySelector('ul li:nth-child(3)').classList.add('active');





// change innerText with specific html tag add
// const taken = document.getElementsByTagName('li');
// console.log(taken)

// for(data of taken){
//     console.log(data.innerText = 'hello world')
// }



//take "1 class" and change these value using innerText
// const taken = document.getElementsByClassName('box');
// for(i = 0; i <= taken.length; i++){
//     taken[i].innerText = 'hello world'
// }





//take "1 id" and change these value using innerText
// const taken = document.getElementById('mainBox').innerText = 'hello world';




// javaScript dom All selector test
// const taken = document.getElementById('mainBox');
// const taken = document.getElementsByClassName('box');
// const taken = document.getElementsByTagName('li');
// const taken = document.querySelector('li');
// const taken = document.querySelectorAll('li');

// console.log(taken)












// access ul li child 3 and set attribute for class
// const taken = document.querySelector('ul li:nth-child(3)').setAttribute('class', 'active');

// console.log(taken)






// edit ul and li using for loop
// const taken = document.getElementsByTagName('ul');

// for(i = 0; i <= taken.length; i++){
//     returnValue = `
//     ${taken[i].style.backgroundColor = "orange"}
//     ${taken[i].style.color = "#ffffff"}
//     ${taken[i].style.listStyleType = "none"}
//     ${taken[i].style.padding = "20px"}
//     ${taken[i].style.textAlign = "center"}
//     ${taken[i].style.fontSize = "30px"}
//     `
// }


