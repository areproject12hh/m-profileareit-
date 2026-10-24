// گۆڕینی دۆخی ڕەنگەکان (Dark / Light Mode) بۆ کارتەکە
function toggleDarkMode() {
    let card = document.querySelector(".profile-card");
    
    if (card.style.backgroundColor === "rgb(30, 39, 46)") {
        card.style.backgroundColor = "white";
        card.style.color = "#2d3436";
    } else {
        card.style.backgroundColor = "#1e272e";
        card.style.color = "white";
    }
}

// وەرگرتنی ناو و پیشاندانی پەیام بە کلیک کردن
let greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", function() {
    let name = document.getElementById("visitorName").value;
    let messageBox = document.getElementById("welcomeMessage");
    
    if (name !== "") {
        messageBox.innerText = "⭐ بەخێر هاتیت، " + name + "!";
        messageBox.style.color = "#00b894";
    } else {
        messageBox.innerText = "تکایە ناوی خۆت بنووسە!";
        messageBox.style.color = "red";
    }
});