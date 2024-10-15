const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-two",
        start: "0% 95%",
        end: "40% 50%",
        scrub: "true",
    }
})

tl.to("#fanta", {
    top: "110%",
    left: "3%",
    rotate: "360deg",
}, "orange")

tl.to("#orange-slice", {
    top: "155%",
    left: "22%"
}, "orange")

tl.to("#orange-group", {
    width: "15%",
    top: "165%",
    right: "4%"
}, "orange")



tl.to("#leaf", {
    rotate: "60deg",
    top: "110%",
    left: "80%"
}, "orange")

tl.to("#leaf-two", {
    roatate: "45deg",
    top: "165%",
    right: "80%"
}, "orange")


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: "true",
    }
})

tl2.from(".lemon1", {
    rotate: "-90deg",
    left: "-100%",
}, "cans")


tl2.from("#sprite", {
    rotate: "-90deg",
    left: "-100%",
}, "cans")


tl2.from(".lemon2", {
    rotate: "90deg",
    left: "150%",
}, "cans")

tl2.from("#cocacola", {
    rotate: "90deg",
    left: "100%",
}, "cans")



tl2.to("#fanta", {
    left: "38%",
    width: "24%",
    top: "212%"
})

tl2.to("#orange-slice", {
    left: "40%",
    top: "206%",
    width: "20%"
})