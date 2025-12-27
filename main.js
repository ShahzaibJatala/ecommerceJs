// import './style.css'

let LaptopMinusBtn = document.querySelector("#shop-laptop-minus-btn");
let LaptopCountBtn = document.querySelector("#shop-laptop-count-btn");
let LaptopPlusBtn = document.querySelector("#shop-laptop-plus-btn");

LaptopPlusBtn.addEventListener("click", () => {
  let Laptop_Plus = parseInt(LaptopCountBtn.innerHTML);

  if (Laptop_Plus < 4) {
    Laptop_Plus++; 
    LaptopCountBtn.innerHTML = Laptop_Plus; 
  }
});

LaptopMinusBtn.addEventListener("click" , () => {
  let laptop_Minus = parseInt(LaptopCountBtn.innerHTML);
  if(laptop_Minus>0) {
    laptop_Minus--;
    LaptopCountBtn.innerHTML = laptop_Minus;
  }

})



let MobileMinusBtn = document.querySelector("#shop-mobile-minus-btn");
let MobileCountBtn = document.querySelector("#shop-mobile-count-btn");
let MobilePlusBtn = document.querySelector("#shop-mobile-plus-btn");

MobilePlusBtn.addEventListener("click", () => {
  let Mobile_Plus = parseInt(MobileCountBtn.innerHTML);

  if (Mobile_Plus < 9) {
    Mobile_Plus++; 
    MobileCountBtn.innerHTML = Mobile_Plus; 
  }
});

MobileMinusBtn.addEventListener("click" , () => {
  let Mobile_Minus = parseInt(MobileCountBtn.innerHTML);
  if(Mobile_Minus>0) {
    Mobile_Minus--;
    MobileCountBtn.innerHTML = Mobile_Minus;
  }

})



let HeadphoneMinusBtn = document.querySelector("#shop-Headphone-minus-btn");
let HeadphoneCountBtn = document.querySelector("#shop-Headphone-count-btn");
let HeadphonePlusBtn = document.querySelector("#shop-Headphone-plus-btn");

HeadphonePlusBtn.addEventListener("click", () => {
  let Headphone_Plus = parseInt(HeadphoneCountBtn.innerHTML);

  if (Headphone_Plus < 30) {
    Headphone_Plus++; 
    HeadphoneCountBtn.innerHTML = Headphone_Plus; 
  }
});

HeadphoneMinusBtn.addEventListener("click" , () => {
  let Headphone_Minus = parseInt(HeadphoneCountBtn.innerHTML);
  if(Headphone_Minus>0) {
    Headphone_Minus--;
    HeadphoneCountBtn.innerHTML = Headphone_Minus;
  }

})




let WatchMinusBtn = document.querySelector("#shop-Watch-minus-btn");
let WatchCountBtn = document.querySelector("#shop-Watch-Count-btn");
let WatchPlusBtn = document.querySelector("#shop-Watch-plus-btn");

WatchPlusBtn.addEventListener("click", () => {
  let Watch_Plus = parseInt(WatchCountBtn.innerHTML);

  if (Watch_Plus < 12) {
    Watch_Plus++; 
    WatchCountBtn.innerHTML = Watch_Plus; 
  }
});

WatchMinusBtn.addEventListener("click" , () => {
  let Watch_Minus = parseInt(WatchCountBtn.innerHTML);
  if(Watch_Minus>0) {
    Watch_Minus--;
    WatchCountBtn.innerHTML = Watch_Minus;
  }

})



let SpeakerMinusBtn = document.querySelector("#shop-Speaker-minus-btn");
let SpeakerCountBtn = document.querySelector("#shop-Speaker-Count-btn");
let SpeakerPlusBtn = document.querySelector("#shop-Speaker-plus-btn");

SpeakerPlusBtn.addEventListener("click", () => {
  let Speaker_Plus = parseInt(SpeakerCountBtn.innerHTML);

  if (Speaker_Plus < 7) {
    Speaker_Plus++; 
    SpeakerCountBtn.innerHTML = Speaker_Plus; 
  }
});

SpeakerMinusBtn.addEventListener("click" , () => {
  let Speaker_Minus = parseInt(SpeakerCountBtn.innerHTML);
  if(Speaker_Minus>0) {
    Speaker_Minus--;
    SpeakerCountBtn.innerHTML = Speaker_Minus;
  }

}) 



let TelevisionMinusBtn = document.querySelector("#shop-Television-minus-btn");
let TelevisionCountBtn = document.querySelector("#shop-Television-Count-btn");
let TelevisionPlusBtn = document.querySelector("#shop-Television-plus-btn");

TelevisionPlusBtn.addEventListener("click", () => {
  let Television_Plus = parseInt(TelevisionCountBtn.innerHTML);

  if (Television_Plus < 2) {
    Television_Plus++; 
    TelevisionCountBtn.innerHTML = Television_Plus; 
  }
});

TelevisionMinusBtn.addEventListener("click" , () => {
  let Television_Minus = parseInt(TelevisionCountBtn.innerHTML);
  if(Television_Minus>0) {
    Television_Minus--;
    TelevisionCountBtn.innerHTML = Television_Minus;
  }

})




let cart_counter = document.querySelector(".cart-counter");
let laptop_btn = document.querySelector("#laptop-btn");

let msg = document.querySelector(".msg");

let cartMsg_no = document.querySelector(".cartMsg-no");


laptop_btn.addEventListener("click", () => {
  let count = parseInt(cart_counter.innerHTML) || 0;
  count +=1;
  cart_counter.innerHTML = count; 
  cartMsg_no.innerHTML = 1;
  msg.classList.remove("alert");  
  setTimeout(() => {
    msg.classList.add("alert");

  },5000); 
  
})

let mobile_btn = document.querySelector("#mobile-btn");

mobile_btn.addEventListener( "click" ,() => {
  let count = parseInt(cart_counter.innerHTML);
  count += 1;
  cart_counter.innerHTML = count;
  cartMsg_no.innerHTML = 2;
  msg.classList.remove("alert");  
  setTimeout(() => {
    msg.classList.add("alert");

  },5000);

})

let headphone_btn = document.querySelector("#headphone-btn");

headphone_btn.addEventListener( "click" ,() => {
  let count = parseInt(cart_counter.innerHTML);
  count += 1;
  cart_counter.innerHTML = count;
  cartMsg_no.innerHTML = 3;
  msg.classList.remove("alert");  
  setTimeout(() => {
    msg.classList.add("alert");

  },5000);

})

let watch_btn = document.querySelector("#watch-btn");

watch_btn.addEventListener( "click" ,() => {
  let count = parseInt(cart_counter.innerHTML);
  count += 1;
  cart_counter.innerHTML = count;
  cartMsg_no.innerHTML = 4;
  msg.classList.remove("alert");  
  setTimeout(() => {
    msg.classList.add("alert");

  },5000);

})

let speaker_btn = document.querySelector("#speaker-btn");

speaker_btn.addEventListener( "click" ,() => {
  let count = parseInt(cart_counter.innerHTML);
  count += 1;
  cart_counter.innerHTML = count;
  cartMsg_no.innerHTML = 5;
  msg.classList.remove("alert");  
  setTimeout(() => {
    msg.classList.add("alert");

  },5000);

})

let television_btn = document.querySelector("#television-btn");

television_btn.addEventListener( "click" ,() => {
  let count = parseInt(cart_counter.innerHTML);
  count += 1;
  cart_counter.innerHTML = count;
  cartMsg_no.innerHTML = 6;
  msg.classList.remove("alert");  
  setTimeout(() => {
    msg.classList.add("alert");

  },5000);

})

let barOuter = document.querySelector("#nav-Links-outer");

let cancel_btn = document.querySelector(".fa-solid");

// let bar_animation_open = document.querySelector(".bar-animation-open");

// let bar_animation_close = document.querySelector(".bar-animation-close");

cancel_btn.addEventListener("click", () => {
 barOuter.style.width = "0%";
})

let bar = document.querySelector(".fa-bars");

bar.addEventListener("click", () => {
  barOuter.style.width = "50%";  
})




