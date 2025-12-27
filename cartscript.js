
let sub_total = document.querySelector("#sub-total");
let total = document.querySelector("#total");
let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");
let price3 = document.querySelector(".price3");
let price4 = document.querySelector(".price4");
let price5 = document.querySelector(".price5");
let price6 = document.querySelector(".price6");



let shop_laptop_minus_btn = document.querySelector("#shop-laptop-minus-btn");
let shop_laptop_Count_btn = document.querySelector("#shop-laptop-Count-btn");
let shop_laptop_plus_btn = document.querySelector("#shop-laptop-plus-btn");

let count = "";

shop_laptop_minus_btn.addEventListener("click", () => {
    count = parseInt(shop_laptop_Count_btn.innerHTML);
    if(count>0) {
    count--;
    shop_laptop_Count_btn.innerHTML = count;
    let p_p = parseInt(price1.innerHTML);  
    let newSubTotal = p_p * count;
    sub_total.innerHTML = newSubTotal;  
    let additionalCharge = 50;
    let newTotal = newSubTotal + additionalCharge;
    // total.innerHTML = newTotal + sub_total.innerHTML;
    total.innerHTML = newTotal.toFixed(2); 

    }
})

shop_laptop_plus_btn.addEventListener("click", () => {
    
    let count = parseInt(shop_laptop_Count_btn.innerHTML);
    
    if (count < 4) {
        count++;
        shop_laptop_Count_btn.innerHTML = count;   
        let p_p = parseInt(price1.innerHTML);  
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        // total.innerHTML = newTotal + sub_total.innerHTML;
        total.innerHTML = newTotal.toFixed(2); 
        
    }
});


let Done_laptop = document.querySelector(".Done-laptop");
let Remove_laptop = document.querySelector(".Remove-laptop");

let shoping_laptop = document.querySelector("#shoping_laptop");
let ID_card1 = document.querySelector(".ID-card1");

Remove_laptop.addEventListener("click", () => {
    shoping_laptop.classList.add("forDisplay");
    total.innerHTML = "";
    sub_total.innerHTML = "";
    
})

Done_laptop.addEventListener("click",() => {
    count = parseInt(shop_laptop_Count_btn.innerHTML);
    if(count>0) {
    let Ele = document.createElement("div");
    const Idx = Math.floor(Math.random()*100);
    Ele.innerHTML = ` On reload your product ID will remove , Your Product ID is ${Idx} You need to remember it `;
    ID_card1.append(Ele);
    shoping_laptop.classList.add("forDisplay");

    }

})



let shop_mobile_minus_btn = document.querySelector("#shop-mobile-minus-btn");
let shop_mobile_Count_btn = document.querySelector("#shop-mobile-Count-btn");
let shop_mobile_plus_btn = document.querySelector("#shop-mobile-plus-btn");


shop_mobile_minus_btn.addEventListener( "click",() => {
    count = parseInt(shop_mobile_Count_btn.innerHTML);
    if(count>0) {
        count--;
        shop_mobile_Count_btn.innerHTML = count; 
        let p_p = parseInt(price2.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2);
    }

})

shop_mobile_plus_btn.addEventListener("click", () => {
    count = parseInt(shop_mobile_Count_btn.innerHTML);
    if(count<9) {
        count++;
        shop_mobile_Count_btn.innerHTML = count;
        let p_p = parseInt(price2.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2); 
        // console.log(sub_total.innerHTML);
        // total.innerHTML = newTotal+sub_total.innerHTML; 
    }
})


let Done_mobile = document.querySelector(".Done-mobile");
let Remove_mobile = document.querySelector(".Remove-mobile");

let shoping_mobile = document.querySelector("#shoping-mobile");
let ID_card2 = document.querySelector(".ID-card2");


Remove_mobile.addEventListener("click", () => {
    shoping_mobile.classList.add("forDisplay");
    total.innerHTML = "";
    sub_total.innerHTML = "";
})

Done_mobile.addEventListener("click", () => {
    count = parseInt(shop_mobile_Count_btn.innerHTML);
    if(count>0) {
    const Idx = Math.floor(Math.random()*100);
    let Ele = document.createElement("div");
    Ele.innerHTML = ` On reload your product ID will remove , Your Product ID is ${Idx} You need to remember it`;
    ID_card2.append(Ele);
    shoping_mobile.classList.add("forDisplay");
    }

})





let shop_headphone_minus_btn = document.querySelector("#shop-headphone-minus-btn");
let shop_headphone_Count_btn = document.querySelector("#shop-headphone-Count-btn");
let shop_headphone_plus_btn = document.querySelector("#shop-headphone-plus-btn");


shop_headphone_minus_btn.addEventListener( "click",() => {
    count = parseInt(shop_headphone_Count_btn.innerHTML);
    if(count>0) {
        count--;
        shop_headphone_Count_btn.innerHTML = count;
        let p_p = parseInt(price5.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2); 
       
    }

})

shop_headphone_plus_btn.addEventListener("click", () => {
    count = parseInt(shop_headphone_Count_btn.innerHTML);
    if(count<30) {
        count++;
        shop_headphone_Count_btn.innerHTML = count;
        let p_p = parseInt(price3.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2);  
        // total.innerHTML = newTotal+sub_total.innerHTML; 
    }
})


let Done_headphone = document.querySelector(".Done-headphone");
let Remove_headphone = document.querySelector(".Remove-headphone");

let shoping_headphone = document.querySelector("#shoping-headphone");
let ID_card3 = document.querySelector(".ID-card3");


Remove_headphone.addEventListener("click", () => {
    shoping_headphone.classList.add("forDisplay");
    total.innerHTML = "";
    sub_total.innerHTML = "";
})

Done_headphone.addEventListener("click", () => {
    count = parseInt(shop_headphone_Count_btn.innerHTML);
    if(count>0) {
    const Idx = Math.floor(Math.random()*100);
    let Ele = document.createElement("div");
    Ele.innerHTML = ` On reload your product ID will remove , Your Product ID is ${Idx} You need to remember it`;
    ID_card3.append(Ele);
    shoping_headphone.classList.add("forDisplay");
    }

})








let shop_watch_minus_btn = document.querySelector("#shop-watch-minus-btn");
let shop_watch_Count_btn = document.querySelector("#shop-watch-Count-btn");
let shop_watch_plus_btn = document.querySelector("#shop-watch-plus-btn");


shop_watch_minus_btn.addEventListener( "click",() => {
    count = parseInt(shop_watch_Count_btn.innerHTML);
    if(count>0) {
        count--;
        shop_watch_Count_btn.innerHTML = count; 
        let p_p = parseInt(price5.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2); 
    }

})

shop_watch_plus_btn.addEventListener("click", () => {
    count = parseInt(shop_watch_Count_btn.innerHTML);
    if(count<12) {
        count++;
        shop_watch_Count_btn.innerHTML = count;
        let p_p = parseInt(price4.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2); 
        // total.innerHTML = newTotal+sub_total.innerHTML;  
    }
})


let Done_watch = document.querySelector(".Done-watch");
let Remove_watch = document.querySelector(".Remove-watch");

let shoping_watch = document.querySelector("#shoping-watch");
let ID_card4 = document.querySelector(".ID-card4");


Remove_watch.addEventListener("click", () => {
    shoping_watch.classList.add("forDisplay");
    total.innerHTML = "";
    sub_total.innerHTML = "";
})

Done_watch.addEventListener("click", () => {
    count = parseInt(shop_watch_Count_btn.innerHTML);
    if(count>0) {
    const Idx = Math.floor(Math.random()*100);
    let Ele = document.createElement("div");
    Ele.innerHTML = ` On reload your product ID will remove , Your Product ID is ${Idx} You need to remember it`;
    ID_card4.append(Ele);
    shoping_watch.classList.add("forDisplay");
    }

})







let shop_speaker_minus_btn = document.querySelector("#shop-speaker-minus-btn");
let shop_speaker_Count_btn = document.querySelector("#shop-speaker-Count-btn");
let shop_speaker_plus_btn = document.querySelector("#shop-speaker-plus-btn");


shop_speaker_minus_btn.addEventListener( "click",() => {
    count = parseInt(shop_speaker_Count_btn.innerHTML);
    if(count>0) {
        count--;
        shop_speaker_Count_btn.innerHTML = count; 
        let p_p = parseInt(price5.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2); 
    }

})

shop_speaker_plus_btn.addEventListener("click", () => {
    count = parseInt(shop_speaker_Count_btn.innerHTML);
    if(count<7) {
        count++;
        shop_speaker_Count_btn.innerHTML = count;
        let p_p = parseInt(price5.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2); 
        // total.innerHTML = newTotal+sub_total.innerHTML;  
    }
})


let Done_speaker = document.querySelector(".Done-speaker");
let Remove_speaker = document.querySelector(".Remove-speaker");

let shoping_speaker = document.querySelector("#shoping-speaker");
let ID_card5 = document.querySelector(".ID-card5");


Remove_speaker.addEventListener("click", () => {
    shoping_speaker.classList.add("forDisplay");
    total.innerHTML = "";
    sub_total.innerHTML = "";
})

Done_speaker.addEventListener("click", () => {
    count = parseInt(shop_speaker_Count_btn.innerHTML);
    if(count>0) {
    const Idx = Math.floor(Math.random()*100);
    let Ele = document.createElement("div");
    Ele.innerHTML = ` On reload your product ID will remove , Your Product ID is ${Idx} You need to remember it`;
    ID_card5.append(Ele);
    shoping_speaker.classList.add("forDisplay");
    }

})






let shop_Television_minus_btn = document.querySelector("#shop-Television-minus-btn");
let shop_Television_Count_btn = document.querySelector("#shop-Television-Count-btn");
let shop_Television_plus_btn = document.querySelector("#shop-Television-plus-btn");


shop_Television_minus_btn.addEventListener( "click",() => {
    count = parseInt(shop_Television_Count_btn.innerHTML);
    if(count>0) {
        count--;
        shop_Television_Count_btn.innerHTML = count; 
        let p_p = parseInt(price5.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2); 
    }

})

shop_Television_plus_btn.addEventListener("click", () => {
    count = parseInt(shop_Television_Count_btn.innerHTML);
    if(count<7) {
        count++;
        shop_Television_Count_btn.innerHTML = count;
        let p_p = parseInt(price6.innerHTML);   
        let newSubTotal = p_p * count;
        sub_total.innerHTML = newSubTotal;  
        let additionalCharge = 50;
        let newTotal = newSubTotal + additionalCharge;
        total.innerHTML = newTotal.toFixed(2);  
        // total.innerHTML = newTotal+sub_total.innerHTML; 
    }
})


let Done_Television = document.querySelector(".Done-Television");
let Remove_Television = document.querySelector(".Remove-Television");

let shoping_Television = document.querySelector("#shoping-Television");
let ID_card6 = document.querySelector(".ID-card6");


Remove_Television.addEventListener("click", () => {
    shoping_Television.classList.add("forDisplay");
    total.innerHTML = "";
    sub_total.innerHTML = "";
})

Done_Television.addEventListener("click", () => {
    count = parseInt(shop_Television_Count_btn.innerHTML);
    if(count>0) {
    const Idx = Math.floor(Math.random()*100);
    let Ele = document.createElement("div");
    Ele.innerHTML = ` On reload your product ID will remove , Your Product ID is ${Idx} You need to remember it`;
    ID_card5.append(Ele);
    shoping_Television.classList.add("forDisplay");
    }

})


let barOuter = document.querySelector("#nav-Links-outer");

let cancel_btn = document.querySelector(".fa-solid");

cancel_btn.addEventListener("click", () => {
 barOuter.style.width = "0%";
})

let bar = document.querySelector(".fa-bars");

bar.addEventListener("click", () => {
  barOuter.style.width = "50%";  
})
