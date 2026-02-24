const homePage = document.getElementById("homePage");
const wishPage = document.getElementById("wishPage");
const userName = document.getElementById("userName");
const nameInput = document.getElementById("nameInput");
const music = document.getElementById("holiMusic");

function showWish() {
    const name = nameInput.value.trim();

    if(name === ""){
        alert("Apna naam likhiye 😊");
        return;
    }

    userName.innerHTML = "🎉 Happy Holi " + name + " 🎉";

    homePage.classList.add("hidden");
    wishPage.classList.remove("hidden");

    // Confetti Blast
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}

function goHome(){
    wishPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    nameInput.value = "";
}

function toggleMusic(){
    if(music.paused){
        music.play();
    } else {
        music.pause();
    }
}