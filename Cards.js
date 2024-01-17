const btn = document.querySelector(".btn")

btn.onclick = function(){
    this.innerHTML = "<div class='loader'></div>"
    setTimeout(() => {
        this.innerHTML = "O PRODUTO JA ESTA NO CARINHO"
    }, 2000);
}
