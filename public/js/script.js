

document.onreadystatechange = setTimeout(function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
     document.querySelector("#loader").style.visibility = "visible";
  } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
}, 1000)

 
      

  //     }
  //  }

  //  window.addEventListener('resize', onResize)

   
  // Slider

  const slider = function() { 
    const slides = document.querySelectorAll('.slide')
    const slider = document.querySelector('.slider')
    const menu = document.querySelectorAll('.menu__list_link')
    const maxSlides = slides.length - 1
   

    const goToSlide = function(slide) {

      slides.forEach((s,i) => {
        
        if(s.classList.contains('fadeLeft')) {  s.classList.remove('fadeLeft') }

        //s.classList.add()
       document.querySelector(`.slide[data-slide="${slide}"]`)
       .classList.add('fadeLeft')
       
        s.style.transform = `translateX(${101 * (i - slide)}%)`
  
        
      
      })
       
    }

    goToSlide(0)

    const handleClickSlide = m => {

      
      m.addEventListener('click', function(e) {
        
        e.preventDefault()
        if((e.target.classList.contains('menu__links')) ||( e.target.classList.contains('menu__links_icon'))) {

          
          const link = e.target.closest('[data-slide]')
          const {slide} = link.dataset
          
          document.querySelectorAll('.menu__list_link').forEach((link) => link.classList.remove('menu__link--active'))
          document.querySelector(`.menu__list_link[data-slide="${slide}"]`)
          .classList.add('menu__link--active')
          
          // console.log(link)
          // console.log(slide)
          goToSlide(slide)
         
          // if(slide == maxSlides) {

          //   console.log('You are in the last slide')
          //   s.style.transform = 'translateX(0)'
          // }
        
       }
        

      })
    }
    menu.forEach(handleClickSlide)
    
  }
  slider()
  
  

  // Filtering images



const tabs = document.querySelectorAll('.portfolio__list')
const tabsContainer= document.querySelector('.portfolio__menu')
const tabsContent = document.querySelectorAll('.portfolio__overview')

const displayAll = () => { tabsContent.forEach(t => {

 return t.classList.add('portfolio__overview--active')
  })
}
  displayAll()
tabsContainer.addEventListener('click', function(e) {


  e.preventDefault()
  const clicked = e.target.closest('.portfolio__list')
  if(!clicked) return

 
  if(!clicked.classList.contains(`portfolio__list[data-type=all]`)) {

    tabs.forEach(t => t.classList.remove('portfolio__list--active'))
    tabsContent.forEach(c => c.classList.remove('portfolio__overview--active'))

    clicked.classList.add('portfolio__list--active')
    toShow = document.querySelectorAll(`.portfolio__overview--${clicked.dataset.type}`)
    if(toShow.length === 0) {

      displayAll()
     }
     for(var i = 0; i < toShow.length; i++) {

      toShow[i].classList.add('portfolio__overview--active')
    }
    
  }
  
})

/********** Display Toggle nav *********/

// const toggleNav = document.querySelector('.menu__btn')
// const menuToDisplay = document.getElementById('nav-menu')
// console.log(menuToDisplay)

// if(this.window.outerWidth <= 800) {
  
 
 
// }

// if(window.screenX < 800) {

//   console.log('screen x is equal 800px')
//   console.log(screenX)
// }
// portfolioLink.forEach(link => {

//   link.addEventListener('click', function(e) {

//     e.preventDefault()
//     // console.log(link)
//     // console.log(e.target)
//     filter = e.target.dataset.type
//     const show = document.querySelectorAll(`.portfolio__overview[data-type="${filter}"]`)
//    const hide = document.querySelectorAll(`.portfolio__overview`)
//     for(var i = 0; i < show.length; i++) {

        
//         //show[i].style.display = 'block'
//         if(show[i].classList.contains(`portfolio__overview--${filter}`)) {

//           console.log(show[i])
//          // hide.style.display = 'none'
//           show[i].style.display = 'block'
         
//         }
         
//     }
    
//     // hide[i].style.display = 'block'
//   //  console.log(hide)
   
//   //   console.log(hide)

//   })
// })





  