const filterbtns =
Array.from(document.querySelectorAll('.buttons_filter button'));

const AllCards = 
Array.from(document.querySelectorAll('.cards_wrapper .card'))


const allServicesbtn = Array.from(document.querySelectorAll('.button_wrapper button'))

const button_wrapper =
document.querySelectorAll('.button_wrapper button');

const form = document.querySelector('form')

const increment = document.querySelector('.nav_btn  .increment')


const decrement = document.querySelector('.nav_btn  .decrement')

const serviceh2 = document.querySelector('.services h2')


const worksh2 = document.querySelector('.works h2')



const testimonials = [
  {
    client_img : '/images/026b21bf-91d2-46ac-a4b9-277f1a0ec8d2-compressed.jpg', 
    client_feedback : 'I loved what Mr. Davelus worked out for me, it\'s was incredible, natural and unique i really recommended you to work with him', 
    client_service : 'Graphic Design', 
    client_name : 'John Doe', 
  }
  , 
    {
  client_img : '/images/026b21bf-91d2-46ac-a4b9-277f1a0ec8d2-compressed.jpg',  
    client_feedback : 'I loved what Bertrand Leiveille worked out for me,he saved my wedding event, and my daughter\'s party, good photographer.', 
    client_service : 'photographer', 
    client_name : 'John Doe', 
  }
 , 
   {
  client_img : '/images/026b21bf-91d2-46ac-a4b9-277f1a0ec8d2-compressed.jpg', 
    client_feedback : 'I loved what Houndini worked out for me, it\'s was incredible, natural and unique, i was looking for a good web designer, and developer for my shopping website, now im good', 
    client_service : 'website', 
    client_name : 'John Doe', 
  }
 , 
 {
  client_img : '/images/026b21bf-91d2-46ac-a4b9-277f1a0ec8d2-compressed.jpg', 
    client_feedback : 'I loved what Houndini worked out for me, it\'s was incredible, natural and unique, i was looking for a good web designer, and developer for my shopping website, now im good', 
    client_service : 'website', 
    client_name : 'John Doe',
    }
   , {
  client_img : '/images/026b21bf-91d2-46ac-a4b9-277f1a0ec8d2-compressed.jpg', 
       client_feedback: 'I loved what Houndini worked out for me, it\'s was incredible, natural and unique, i was looking for a good web designer, and developer for my shopping website, now im good',
       client_service: 'website',
       client_name: 'John Doe',
   }, 
   {
   client_img : '/images/026b21bf-91d2-46ac-a4b9-277f1a0ec8d2-compressed.jpg', 
       client_feedback: 'I loved what Houndini worked out for me, it\'s was incredible, natural and unique, i was looking for a good web designer, and developer for my shopping website, now im good',
       client_service: 'website',
       client_name: 'John Doe',
   }
  ]


let testimonialCount = 3

increment.addEventListener('click',()=>{
  if ( testimonialCount == testimonials.length) {
  } else {
    testimonialCount += 3
     incrementTes()
     
  }
})

decrement.addEventListener('click',()=>{
   if (testimonialCount == 3) {
   } else {
     testimonialCount -= 3
     incrementTes()
     
   }
})


function incrementTes()
{   
  let html = ''
  for (var i = 0; i < testimonialCount ; i++) {
    
    let newCard = `
        <div class="testimonial">
        <div class="client_photo">
      <img src="${testimonials[i].client_img}" alt="">
         <h4>${testimonials[i].client_name}</h4>
         </div>
        <div class="feedback_wrapper">
          <p>
           ${testimonials[i].client_feedback}
          </p>
        </div>
     <span>Service : ${testimonials[i].client_service}</span>
      </div>
    `
    html += newCard
  }
  
  document.querySelector('.testimonial_wrapper').innerHTML = html
}

incrementTes()
















function highlightbtns()
{
  let random = 
  Math.floor(Math.random() * allServicesbtn.length)
  
  allServicesbtn.forEach(btn => {
    btn.classList.remove('active')
  })
  
  allServicesbtn[random].classList.add('active')
  
}
setInterval(()=>{
  highlightbtns()
},2000)

const para1 = {
  
  rootMargin : '-30% 0px',
  threshold : 0
}
const para2 = {
  
  rootMargin : '-30% 0px',
  threshold : 0
}


const para3 = {
  rootMargin: '-30% 0px',
  threshold : 0
}


const observeBtns = new IntersectionObserver(myBtns, para3)

const observer = new IntersectionObserver(handleIntersection,para1)

const observerForm = new IntersectionObserver(myForm,para2)


button_wrapper.forEach(btn => {
  observeBtns.observe(btn)
})


AllCards.forEach(card => {
  observer.observe(card)
})

observerForm.observe(form)

function myForm(entries)
{
  entries.forEach(entry =>{
    if (entry.isIntersecting) {
     entry.target.classList.add('activeForm')
    }
  })
    
}


function handleIntersection(entries)
{
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('intersected')
      worksh2.classList.add('slide')
    }
    
  }) 
  
}

function myBtns(entries)
{
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('intersected')
      serviceh2.classList.add('slide');
    }
  })
}


let index = 0
let dataIndex = ''
filterbtns.map(filterbtn => {
  
  filterbtn.addEventListener('click',function(){
    
    dataIndex = 
    this.getAttribute('data-filter')
    
    filterbtns[index].classList.remove('active')
    
    index = filterbtns.indexOf(this);
   filterbtns[index].classList.add('active')
   
   
   for (var data in AllCards) {
    if (dataIndex == AllCards[data].dataset.filter) {
     AllCards[data].classList.add('appear')
    }else {
   AllCards[data].classList.remove('appear')
   AllCards[data].classList.add('disapear')
    }if (dataIndex == 'all')
    AllCards[data].classList.add('appear')
   }
  })
})


document.querySelectorAll('.scroll-to').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.querySelector('.team_container button').addEventListener('click',()=>{
  document.querySelector('.speech_wrapper').classList.toggle('active')
})


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
}); 
