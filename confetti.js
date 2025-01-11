function showBirthdayMessage() {
    document.querySelector('button').style.display = 'none';
    document.querySelector('.card').style.display = 'block';
    document.querySelector('.wishes').style.display = 'block';
}

document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
    confetti({
        particleCount: 300,
        spread: 360,
        origin: { x: 0.5, y: 0.5 },
    });
});