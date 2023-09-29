
let codeEl = document.getElementById("code");
  console.log(codeEl)
codeArr = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"]

function codeEvent(){
  let codeConstant = "A"
  
  for(i=1; i<=7; i++){
    codeConstant += codeArr[Math.floor(Math.random()*codeArr.length)]
  }
  
  codeEl.innerHTML = codeConstant
}
