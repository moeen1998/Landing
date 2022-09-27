// /////////////////////////// Start setting section ///////////////////////////

// setting event lisner to gear button to toggle the setting section
document.querySelector(".gear").addEventListener('click',(e)=>{
  document.querySelector(".setting").classList.toggle('show')
})

// ===============> the part of colors <===============

//  see if there is default value for color that user select before if there is one will set it as default
let defultColor = localStorage.getItem('color') ?? false;
let defultHoverColor = localStorage.getItem('hover-color') ?? false;
let colors = document.querySelectorAll('.color-section span');
let slideinterval;

// if there is any default color
if(defultColor){

  // set these default color to the root 
  document.documentElement.style.setProperty('--main-color',defultColor)
  document.documentElement.style.setProperty('--main-color-hover',defultHoverColor)

  // remove selected class from all colors and add the selected class to the selected one
  colors.forEach((el)=>{
    if(el.dataset.color === defultColor){
      // add the class
      el.classList.add('selected')
    }
    else{
      //  removing selected from other colors
      el.classList.remove('selected')
    }
  })
}

// get all spans and set event listner for each one for changing color
colors.forEach((el)=>{
  el.addEventListener("click", (e)=>{

    // remove selected class from old one 
    e.target.parentElement.querySelector('.selected').classList.remove('selected');
    
    // set selected class to the new color 
    e.target.classList.add('selected');
    
    // save the color in local storage
    localStorage.setItem('color',e.target.dataset.color)
    localStorage.setItem('hover-color',e.target.dataset.second)
    
    // change root color in the document object
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
    document.documentElement.style.setProperty('--main-color-hover',e.target.dataset.second)
  })
})

// ===============> the part of colors <===============


// ===============> the part of font Sizes <===============

//  see if there is default value for font size that user select before if there is one will set it as default
let defultsize = localStorage.getItem('size') ?? false;
let sizes = document.querySelectorAll('.font-section span');

// if there is any default font size
if(defultsize){

  // set these default font size to the root 
  document.documentElement.style.setProperty('--main-size',defultsize)

  // remove bordered class from all spans and add the bordered class to the current one
  sizes.forEach((el)=>{
    if(el.dataset.size === defultsize){
      // add the class
      el.classList.add('bordered')
    }
    else{
      //  removing bordered from other spans
      el.classList.remove('bordered')
    }
  })
}

// get all spans and set event listner for each one for changing font-size
sizes.forEach((el)=>{
  el.addEventListener("click", (e)=>{

    // remove bordered class from old one 
    e.target.parentElement.querySelector('.bordered').classList.remove('bordered');
    
    // set bordered class to the new selected size
    e.target.classList.add('bordered');
    
    // save font-size in local storage
    localStorage.setItem('size',e.target.dataset.size)
    
    // change root font-size in the document object
    document.documentElement.style.setProperty('--main-size',e.target.dataset.size)
  })
})

// ===============> the part of font Sizes <===============


// ===============> the part of auto change background image <===============

//  see if there is default value for slider 
let autochange = localStorage.getItem('slide') ?? "no";
let options = document.querySelectorAll('.slide-section span');

// if there is any default slider
if(autochange === 'yes'){
  randomize(true);
}

options.forEach((el)=>{
  if(el.dataset.slide === autochange){
    // add the class
    el.classList.add('slide')
  }
  else{
    //  removing bordered from other spans
    el.classList.remove('slide')
  }
})

options.forEach((el)=>{
  el.addEventListener("click", (e)=>{

    // remove bordered class from old one 
    e.target.parentElement.querySelector('.slide').classList.remove('slide');
    
    // set bordered class to the new selected size
    e.target.classList.add('slide');
    
    // save font-size in local storage
    localStorage.setItem('slide',e.target.dataset.slide)
    
    if(e.target.dataset.slide === 'yes'){
      randomize(e.target.dataset.slide);
    }
    else{
      clearInterval(slideinterval);
    }    
  })
})



// ===============> the part of auto change background image <===============


// /////////////////////////// End setting section ///////////////////////////

// /////////////////////////// Start nav bar ///////////////////////////

//get all the links in nav bar
let navlinks = document.querySelectorAll(".nav-item");

navlinks.forEach( (link) => {

  //get the <a> tag from <li> and add eventlisner
  link.children[0].addEventListener('click', (e)=>{

    // remove active class from old active link
    document.querySelector('.active').classList.remove('active');

    //add active class to new active link
    e.target.classList.add('active');

  })
})
// /////////////////////////// End nav bar ///////////////////////////


// /////////////////////////// Start Slider///////////////////////////

//the main container 
let slider = document.querySelector('.slider');

//generating randum image 
function randumimage() { return Math.floor( (Math.random()*7)) + 1 ;};

function randomize(condition){
  if(condition){
    slideinterval = setInterval(()=>{
      slider.style.backgroundImage = "url(imgs/"+randumimage()+".jpg)";
    },5000)
  }
}
// /////////////////////////// End Slider ///////////////////////////

// /////////////////////////// Start shuffle ///////////////////////////

//the main container 
let controles = document.querySelectorAll('.controles ul li');
let childs = document.querySelectorAll('.child');

controles.forEach((el) => {
  el.addEventListener('click',(e) => {
    e.target.parentElement.querySelector('.category').classList.remove('category')
    e.target.classList.add('category')
    childs.forEach((child) => {
      if(e.target.dataset.category === "all"){
        fadeInEffect(child.parentElement)
      }
      else if(child.dataset.type !== e.target.dataset.category ){
        fadeOutEffect(child.parentElement)
      }
      else{
        fadeInEffect(child.parentElement)
      }
    })
  })
})
// /////////////////////////// End shuffle ///////////////////////////

// /////////////////////////// Start efficts ///////////////////////////

function fadeOutEffect(target) {
  let outeffict = setInterval(function () {
    if (!target.style.opacity) {
      target.style.opacity = 1;
  }
    if (target.style.opacity > 0) {
      target.style.opacity -= 0.1;
    } else {
      target.style.display = 'none';
      clearInterval(outeffict);
    }
  }, 20);
}
function fadeInEffect(target) {
  let ineffict = setInterval(function () {
    if (target.style.opacity) {
      target.style.opacity = 1;
    }
    if (target.style.opacity < 1) {
      target.style.opacity += 0.1;
    } else {
      target.style.display = 'block';
      clearInterval(ineffict);
    }
  }, 20);
}
// /////////////////////////// Start efficts ///////////////////////////

// /////////////////////////// Start skills ///////////////////////////
// progress bar section
let skills = document.querySelectorAll('.par');
let section = document.querySelector('.ourskills')
window.onscroll = function(){
  if(this.pageYOffset >= (section.offsetTop - 600)){
    skills.forEach((skill) => {
      skill.childNodes[1].style.width = skill.dataset.progress
    })
  }
};
// /////////////////////////// End skills ///////////////////////////

// /////////////////////////// Start Images ///////////////////////////

let imgs = document.querySelectorAll('.img');
let overlay = document.querySelector('.iamge-overlay')
let imageoverlay = document.querySelector('.iamge-overlay img')

let exit = document.querySelector('.exit')
exit.addEventListener('click',(e) => {overlay.classList.add('d-none')})

imgs.forEach((img)=>{
  img.addEventListener('click',(e) => {
    imageoverlay.src = e.target.src;
    overlay.classList.remove('d-none')
  })
})

// /////////////////////////// End Images ///////////////////////////
