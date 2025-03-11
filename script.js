// Function to create a balloon and animate it upwards
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.innerHTML = '🎈'; // Balloon emoji

    // Set a random horizontal position for the balloon
    const startPositionX = Math.random() * window.innerWidth;
    balloon.style.left = `${startPositionX}px`;

    // Set a random animation delay for each balloon
    const delay = Math.random() * 2;
    balloon.style.animationDelay = `${delay}s`;

    // Add the balloon to the balloons container
    document.getElementById('balloons').appendChild(balloon);

    // Remove the balloon after animation ends
    setTimeout(() => {
        balloon.remove();
    }, 4000); // Match this with the duration of the floatUp animation
}

// Function to create a heart and animate it upwards
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // Heart emoji

    // Set a random horizontal position for the heart
    const startPositionX = Math.random() * window.innerWidth;
    heart.style.left = `${startPositionX}px`;

    // Set a random animation delay for each heart
    const delay = Math.random() * 2;
    heart.style.animationDelay = `${delay}s`;

    // Add the heart to the hearts container
    document.getElementById('hearts').appendChild(heart);

    // Remove the heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 4000); // Match this with the duration of the heartFloat animation
}

// Create a new balloon every 0.5 seconds
setInterval(createBalloon, 500);

// Create a new heart every 0.5 seconds
setInterval(createHeart, 500);
