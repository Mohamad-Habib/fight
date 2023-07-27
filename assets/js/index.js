const accounts = [["admin01","123"],["admin02","234"],["admin03","345"]]
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
document.title = "LogIn Page"

loginBtn.addEventListener("click", function(){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value
    for (let i=0; i<=accounts.length; i++){
        if(accessUser == accounts[i][0]&& accessPass == accounts[i][1] ){
            console.log(`welcome ${accessUser}`)
        }
    }

})