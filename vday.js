function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  
  function sendLove() {
    const name = getQueryParam("name") || "Someone Special";
    const message = document.getElementById("message");
    message.innerHTML = `Hey Yaka! ❤️
    <br> On this Valentines day I want you to know that your a special sister given by God🤗 
    <br> I'm blessed to have you has my Sister😁
    <br> A Sister no one would get😍
    <br> A Sister who prays for me🙏
    <br> A Sister who gets me anything I want✝️
    <br> A Sister who sends me a lot of Kavithai😜
    <br> A Sister who fights for my time😁
    <br> Be the same! Your blessings are on the way ka 🤩
   
    <br> Hope in the next Valentines day you wont be single😜
    <br> I pray that jeje makes it happen this year✝️
    <br> Ancy lovz u more ka🤍  `;
    message.style.opacity = 1;
  
    // Create confetti effect
    for (let i = 0; i < 200; i++) {
      setTimeout(createHeart, i * 100);
    }
  }
  
  // Trigger the confetti and message on page load
  window.onload = sendLove;
  