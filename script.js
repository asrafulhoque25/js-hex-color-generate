window.onload = () =>{
    main()
}

function main(){
    const mainBody = document.getElementById('root')
    const clickBtn = document.getElementById('clickbtn')
    const showHex = document.getElementById('input')


    clickBtn.addEventListener('click', function(){
        const color = rgbColor();
        mainBody.style.backgroundColor = color
        showHex.value = color
    })

}

 function rgbColor(){
     const red = Math.floor(Math.random() * 255)
     const green = Math.floor(Math.random() * 255)
     const blue = Math.floor(Math.random() * 255)
     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
 }


