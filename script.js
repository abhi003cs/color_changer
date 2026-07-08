let container=document.querySelector(".container")
let randomBtn=document.querySelector(".randomBtn")
let colorInput=document.querySelector("#colorInput")
let applybtn=document.querySelector(".applyBtn")
let currentColorValue=document.querySelector(".currentColorValue")

const colorArray = ["red","green","blue","orange","yellow",
    "purple","red","pink","grey","black","white","babypink",
    "cyan","acqa","beige","brown",""]

const genearteRandomColor = () =>{
    const randomNumber=Math.floor(Math.random()*colorArray.length)
    return colorArray[randomNumber]
}
let color=genearteRandomColor()
console.log(color)

const changeColor = (color) =>{
    container.style.backgroundColor=color;
    currentColorValue.innerText=color
}

const handleRandomBtnClick= () =>{
    let color = genearteRandomColor()
    changeColor(color)
}
const handleApplyBtnClick= () =>{
    const color=colorInput.value
    changeColor(color)
}


randomBtn.addEventListener("click",handleRandomBtnClick)
applybtn.addEventListener("click",handleApplyBtnClick)


changeColor("black")