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

setInterval(()=>{
  console.log(randumimage()+'.jpg')
  slider.style.backgroundImage = "url(../imgs/"+randumimage()+".jpg)";
},10000)
console.log(randumimage())

// /////////////////////////// End Slider ///////////////////////////