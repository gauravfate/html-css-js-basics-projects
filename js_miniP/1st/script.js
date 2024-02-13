
let boxx = document.querySelector("#box");

boxx.addEventListener("mousemove", function (details) {
    var rectangleLocation = boxx.getBoundingClientRect();
    let insideRectVal = details.clientX - rectangleLocation.left;

    if (insideRectVal < rectangleLocation.width / 2) {
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectVal);
        gsap.to(boxx, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4
        });
    }
    else {
        let blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insideRectVal);
        gsap.to(boxx, {
            backgroundColor: `rgb(0, 0,${blueColor})`,
            ease: Power4
        });
    }
});

boxx.addEventListener("mouseleave", () => {
    gsap.to(boxx, {
        backgroundColor: "white",
    });
});
