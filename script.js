
gsap.registerPlugin(ScrollTrigger);







gsap.registerPlugin(ScrollTrigger);

function loader(){
    var tl=gsap.timeline()
    tl.from(".page1-upper", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page1-upper", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })

}
function header(){
var header=document.querySelector(".header")
var tl=gsap.timeline()
header.addEventListener("mouseenter",function(){
    tl.to("nav",{
        height:"37vh"
    })
  
    tl.to(".nav-list h5 ",{
        opacity:1,
        stagger:{
            amount:0.2
        }
    })
   
})
header.addEventListener("mouseleave",function(){
    tl.to(".nav-list h5  ",{
        opacity:0
    })
    tl.to("nav",{
        height:"15vh"
    })
})
}
function page1(){
    var tl=gsap.timeline()
    var h1=document.querySelector(".page1 .page1-container h1")
    var text=h1.textContent.split(" ")
    var clutter=" "
   text.forEach(function(dets,index){
    clutter+=`<span>${dets}</span>`
    if (index < dets.length - 1) {
        clutter += " "; // Add a space between words
    }
 
})
h1.innerHTML=clutter
   tl.from(".page1-container h3",{
    y:40,
    opacity:0,duration:1
   })
tl.from(".page1 .page1-container h1 span",{
     transform:"translateY(40px)",
    opacity:0,
    delay:1,
    stagger:{
        amount:2
    }
})

tl.from(".page1-container  h3 span",{
    y:40,
    opacity:0
})

}
function video(){
    var play=document.querySelector(".circle i")
    var play_box=document.querySelector(".play")
    var image=document.querySelector(".page1-video-image img")
    var back=document.querySelector(".page1-video-image ")
    
    var video=document.querySelector(".page1-video-image video")
    play.addEventListener("click",function(){
        video.play()
          play_box.style.display="none"
           image.style.display="none"
           video.style.opacity=1
          
    })
    video.addEventListener("click",function(){
        video.pause()
    
        play_box.style.display="flex"
         image.style.display="block"
        image.style.opacity=1
        video.style.opacity=0
       
 })

}
function page4(){
    var h2 = document.querySelector(".page4-left h2");
    var text = h2.textContent.split("");
    var clutter = "";
    text.forEach(function(dets ,index){
        clutter += `<span> ${dets} </span>`;
        if (index < dets.length - 1) {
            clutter += " "; // Add a space between words
        }
    });
    h2.innerHTML = clutter.trim()
    var tl2=gsap.timeline()
    tl2.from(".page4-left h2 span",{
         y:40,
        opacity:0,
        stagger:0.1,
       
        scrollTrigger:{
            scroller:"body",
            trigger:".page4",
            start: "top 50%",
            end: "top 10%",
            scrub: 2
        }
    })
}
function page5(){
    var page5=document.querySelectorAll(".page5-scnd-right")

    var circle=document.querySelectorAll(".mouse")
    page5.forEach(function(div){
     div.addEventListener("mouseenter",function(){
        gsap.to(this.querySelectorAll(".mouse"),{
            scale:1
        })
     })

        div.addEventListener("mousemove",function(dets){
            gsap.to(this.querySelectorAll(".mouse"),{
                x:dets.x- div.getBoundingClientRect().x,
                y:dets.y- div.getBoundingClientRect().y
            })
        })
     
        
     div.addEventListener("mouseleave",function(){
        gsap.to(this.querySelectorAll(".mouse"),{
            scale:0
        })
     })
    
    })
}
function page5_video(){
    var video=document.querySelectorAll(".m-v-i video")
    var div=document.querySelectorAll(".m-v-i")
     div.forEach(function(dets){
        dets.addEventListener("mouseenter",function(){
            gsap.to(this.querySelectorAll(".m-v-i video"),{
                opacity:1
            })
            
        })
        dets.addEventListener("mouseleave",function(){
            gsap.to(this.querySelectorAll(".m-v-i video"),{
                opacity:0
            })
           
        })
     })

}
function page8(){
    var page8=document.querySelector(".r-28")
    var h1=document.querySelector(".r-18 h1")
    var text=h1.textContent.split("")
    var clutter=""
    text.forEach(function(dets){
        clutter+=`<span>${dets}</span>`
    })
    h1.innerHTML=clutter
    gsap.from(".r-18 h1 span",{
        y:40,
       stagger:0.1,
       opacity:0,
        scrollTrigger:{
            scroller:"body",
            trigger:".r-18",
            start: "top 40%",
            end: "top 0%",
            scrub: 2
        }
    })
    gsap.from(".r-28 p",{
       x:0,
        stagger:{
            amount:0.2
        },
        duration:3,
        scrollTrigger:{
            scroller:"body",
            trigger:".r-28",
            start: "top 80%",
            end: "top 0%",
            scrub: 2
        }
    })
}
function page9(){
    var page9=document.querySelector(".page9")
    page9.addEventListener("mouseenter",function(){
        gsap.to(".page-9-circle",{
            scale:1,
           
        })
        gsap.to(".pg9-right .ri-arrow-right-up-line",{
            scale:0,
    
        })
        gsap.to(".pg9-right .ri-pencil-fill",{
            scale:1,

           
        })
        
    })
    page9.addEventListener("mousemove",function(dets){
        gsap.to(".page-9-circle",{
          
            x:dets.x,
            y:dets.y
        })
        
    })
    page9.addEventListener("mouseleave",function(){
        gsap.to(".page-9-circle",{
            scale:0,
           
        })
        gsap.to(".pg9-right .ri-arrow-right-up-line",{
            scale:1,
         
        })
        gsap.to(".pg9-right .ri-pencil-fill",{
            scale:0,
           
        })
        
    })
}
function footer(){
    var tl=gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:".footer",
            start:"top 30%",
            end:"top 0%",
            scrub:2
        }
    })
    tl.to(".footer-1",{
        borderTop:"2px solid white",
        duration:3
    })
    tl.to(".footer-2",{
        borderTop:"2px solid white",
        duration:3
    })
    tl.to(".footer-3",{
        borderTop:"2px solid white",
        duration:3
    })
}
loader()
page9()
page8()
page5_video()
page4()
page1()
page5()
video()
footer()
header()