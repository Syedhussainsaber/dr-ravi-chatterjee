const openMenu = document.querySelector(".open")
const closeMenu = document.querySelector(".close")
const mobileNav = document.querySelector(".mobile-nav")



// const leftArrow = document.querySelector(".desktop-53-child1")
// const rightArrow = document.querySelector(".desktop-53-child2")
// const rectangleGroup0 = document.querySelector(".rectangle-group0")
// const rectangleGroup1 = document.querySelector(".rectangle-group1")
// const rectangleGroup2 = document.querySelector(".rectangle-group2")
// let count=0
// const callback = ()=>{
//         if(count===3){
//             count=0
//         }
    
//         if(count===0){
//     rectangleGroup0.style.transform="translateX(150%)"
//     rectangleGroup0.style.display="none"
//     // rectangleGroup0.style.transition="0.8s ease-out"
//     rectangleGroup1.style.display="inline-block"
//     rectangleGroup1.style.transform="translateX(0px)"
//     rectangleGroup1.style.transition="0.8s ease-in"
//     // rectangleGroup2.style.display="none"
//     rectangleGroup2.style.display='none'
//     rectangleGroup2.style.transform="translateX(-150%)"
        
//         }
//         else if(count===1){
//             rectangleGroup1.style.transform="translateX(150%)"
//     rectangleGroup1.style.display="none"
//     // rectangleGroup0.style.transition="0.8s ease-out"
//     rectangleGroup2.style.display="inline-block"
//     rectangleGroup2.style.transform="translateX(0px)"
//     rectangleGroup2.style.transition="0.8s ease-in"
//     // rectangleGroup2.style.display="none"
//     rectangleGroup0.style.display='none'
//     rectangleGroup0.style.transform="translateX(-150%)"
    
//         }
//         else{
    
//             rectangleGroup2.style.transform="translateX(150%)"
//             rectangleGroup2.style.display="none"
//             // rectangleGroup0.style.transition="0.8s ease-out"
//             rectangleGroup0.style.display="inline-block"
//             rectangleGroup0.style.transform="translateX(0px)"
//             rectangleGroup0.style.transition="0.8s ease-in"
//             // rectangleGroup2.style.display="none"
//             rectangleGroup1.style.display='none'
//             rectangleGroup1.style.transform="translateX(-150%)"
//             // console.log(rectangleGroup2)
//         }
//         count+=1
//         }

// let sliderInterval = setInterval(callback,2500)

// // leftArrow.addEventListener(onclick,()=>{
// // console.log("left Arrow")
// // })


// const handleLoop = ()=>{
// // sliderInterval()
// sliderInterval
// }

// handleLoop()




// const handle1Over = ()=>{
// rectangleGroup1.style.backgroundColor= '#C0C0C0'
// clearInterval(sliderInterval)
// // clearInterval(setInterval(callback,2500))

// }

// const handle0Over=()=>{
//     rectangleGroup0.style.backgroundColor='#C0C0C0'
// clearInterval(sliderInterval)
// // clearInterval(setInterval(callback,2500))
// // console.log(sliderInterval)
// }

// const handle2Over=()=>{
//     rectangleGroup2.style.backgroundColor= '#C0C0C0'
// clearInterval(sliderInterval)
// // clearInterval(setInterval(callback,2500))
// }

// const handle0Leave = ()=>{
// rectangleGroup0.style.backgroundColor='#E5E4E2'
// count=0
// // sliderInterval
// // console.log(sliderInterval)
// // console.log(handleLoop)
// // sliderInterval
// // console.log(sliderInterval)
// sliderInterval = setInterval(callback,2500)
// sliderInterval
// }

// const handle1Leave = ()=>{
// rectangleGroup1.style.backgroundColor='#E5E4E2'
// count=1
// // sliderInterval
// // console.log(handleLoop)
// //  sliderInterval
// sliderInterval = setInterval(callback,2500)
// sliderInterval
// }

// const handle2Leave = ()=>{
// rectangleGroup2.style.backgroundColor='#E5E4E2'
// // sliderInterval()

// count=2
// sliderInterval = setInterval(callback,2500)
// sliderInterval
// }



// const handleLeftArrow = ()=>{
//     console.log("Left Arrow")
// }

// const handleRightArrow = ()=>{
//     console.log("Right Arrow")
// }

// // rightArrow.addEventListener(onclick,()=>{
// //     console.log("right Arrow")
// //     })
// console.log(leftArrow)


const handleOpenMenu = ()=>{
// mobileNav.style.display = "flex"
mobileNav.style.transform = 'translateX(0%)'
mobileNav.style.transition="0.4s ease-in"
openMenu.style.display="none"
openMenu.style.transition='0.6s ease-out'
}

const handleCloseMenu = ()=>{
    mobileNav.style.transform = "translateX(150%)"
    mobileNav.style.transition="0.5s ease-out"
openMenu.style.display="inline-block"
openMenu.style.transition='0.6s ease-in'

}