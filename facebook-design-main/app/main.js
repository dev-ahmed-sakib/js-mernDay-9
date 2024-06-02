const getData = document.getElementsByTagName('h2');
// getData.children[1].style.color = "#ffffff"
// getData.children[1].style.backgroundColor = "orange"
// getData.children[1].style.padding = "10px"
// getData.children[1].style.borderRadius = "10px"
//--//

const getN = Array.from(getData);

getN.forEach((item, index)=>{
    console.log(item.textContent)
});


