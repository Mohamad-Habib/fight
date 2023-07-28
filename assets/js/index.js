const accounts = [["admin01","123"],["admin02","234"],["admin03","345"]]
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
document.title = "LogIn Page"
let counter = 1

loginBtn.addEventListener("click", function(){
if (counter < 4){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value
    let found = false
    for (let i in accounts){
        if(accessUser == accounts[i][0] && accessPass == accounts[i][1] ){
            alert(`welcome ${accessUser}`)
            found = true
            counter = 1
            document.write(`<h1 style="text-align:center; color:blue; margin:50px">hello<span style="font-weight:bold; color:red"> ${accessUser.toUpperCase(
            )}</span></h1>`)
            setTimeout(secondePage,2000);
            
        } 
    }
    if (found == false){
        counter++
        alert(`incorrect username or password \n you still have ${4-counter} attempt`)
        
    }
}else{
    alert('max attempts exceeded')
}
})
function secondePage(){
    window.location.replace("login.html")
}