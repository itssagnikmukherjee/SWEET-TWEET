// VARS

let bg_color_btn = document.querySelector(".bg-gr-switch-btn");
let bg_color_list = document.querySelector(".br-gr-list");
let bg_gr_btns = document.querySelectorAll(".color-btns");
let tweetBg = document.querySelector(".mainSec");
let tweetThemebtn = document.querySelector(".tweet_theme_btn");
let reactions = document.querySelector(".reactions");
let reactionBtn = document.querySelector(".reaction_btn");
let fontBtn = document.querySelector(".font_btn");
let tweet = document.querySelector(".tweet");
let patBtn = document.querySelector(".pattern_btn");
let ratBtn = document.querySelector(".ratio_btn");
let main = document.querySelector(".main");
let downloadBtn = document.querySelector(".download-btn");

// Background Gradient Menu Toggle

bg_color_btn.onclick = () =>{
    bg_color_list.classList.toggle('active');
};



bg_gr_btns.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.style.backgroundImage;
        document.querySelector(':root').style.setProperty('--bg-color', dataColor);
    });
});

// Tweet theme toggle

const toggleTweetTheme = () =>{
    tweetBg.classList.toggle('theme-toggle');
    tweetThemebtn.classList.toggle('theme-toggle-btn');
}

// Reaction Toggle

const toggleReaction = () =>{
reactions.classList.toggle('reaction-toggle');
reactionBtn.classList.toggle('reaction-toggle-btn');
}

// Font Toggle 

const toggleFont = () =>{
    fontBtn.classList.toggle('font-toggle');
    tweet.classList.toggle('tweet-font-toggle');
}

// Pattern

const changePattern = () => {

    const image_array = [
        './patterns/2.svg',
        './patterns/3.svg',
        './patterns/4.svg',
        './patterns/5.svg',
        './patterns/6.svg',
        './patterns/7.svg',
        './patterns/8.svg',
        './patterns/9.svg',
        './patterns/10.svg',
        './patterns/11.svg',
        './patterns/12.svg',
        './patterns/13.svg',
        './patterns/14.svg',
        './patterns/15.svg',
        './patterns/16.svg',
        './patterns/17.svg',
        './patterns/18.svg',
        './patterns/19.svg',
        './patterns/20.svg',
        './patterns/21.svg',
        './patterns/22.svg',
        './patterns/23.svg',
        './patterns/24.svg',
        './patterns/25.svg',
    ];
    const num = Math.floor(Math.random() * image_array.length);
    document.querySelector(".mainPat").style.backgroundImage = 'url("' + image_array[num] + '")';
}

let rotation = 0;
const angle = 30;

const rotatePatBtn = () => {
    
    rotation = (rotation + angle) % 360;
    patBtn.style.transform = `rotate(${rotation}deg)`;
}

// Change Ratio

const toggleRatio = () => {
    main.classList.toggle('ratio-toggle');
    if(ratBtn.innerHTML === "1:1"){
        ratBtn.innerHTML = "4:3";
    }else{
        ratBtn.innerHTML = '1:1';
    }
}

// Download 

