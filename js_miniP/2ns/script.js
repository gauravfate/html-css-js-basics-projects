window.addEventListener("mousemove", (detials)=>{
    let rect = document.querySelector("#rect");

    let xval = gsap.utils.mapRange(0, window.innerWidth, 100, window.innerWidth-100, detials.clientX);
    
    gsap.to("#rect", {
        left : xval + "px",
        ease: Power3
    });
})