const homePage = document.getElementById("homePage");
const wishPage = document.getElementById("wishPage");
const userName = document.getElementById("userName");
const nameInput = document.getElementById("nameInput");
const music = document.getElementById("holiMusic");
const musicBtn = document.querySelector(".music-toggle");

// Show Wish
function showWish() {
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Apna naam likhiye 😊");
        return;
    }

    userName.innerHTML = "🎉 Happy Holi " + name + " 🎉";

    homePage.classList.add("hidden");
    wishPage.classList.remove("hidden");

    // 🎵 Music Play (Allowed because button click)
    music.play().then(() => {
        musicBtn.innerHTML = "🔊";
    }).catch(error => {
        console.log("Autoplay blocked:", error);
    });

    // 🎉 Confetti Blast
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });
}

// Back Home
function goHome() {
    wishPage.classList.add("hidden");
    homePage.classList.remove("hidden");
    nameInput.value = "";
}

// Music Toggle
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔊";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵";
    }
}