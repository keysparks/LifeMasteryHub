(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.owl-banner').owlCarousel({
		items:1,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			  },
			  1600:{
				  items:1
			  }
		  }
	})

    $('.owl-services').owlCarousel({
        items:4,
        loop:true,
        dots: true,
        nav: false,
        autoplay: true,
        margin:5,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              },
              1600:{
                  items:4
              }
          }
    })

    $('.owl-portfolio').owlCarousel({
        items:4,
        loop:true,
        dots: true,
        nav: true,
        autoplay: true,
        margin:30,
          responsive:{
              0:{
                  items:1
              },
              700:{
                  items:2
              },
              1000:{
                  items:3
              },
              1600:{
                  items:4
              }
          }
    })

    

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


//quiz

const quizForm = document.querySelector('#quiz-form');
  const resultContainer = document.querySelector('#result');
  const questions = document.querySelectorAll('.question');
  const previousButton = document.querySelector('.previous-button');
  const nextButton = document.querySelector('.next-button');
  const submitButton = document.querySelector('.submit-button');
  const resetButton = document.querySelector('.reset-button');
  let currentQuestionIndex = 0;

function startQuiz() {
        // Code to display the first question and answer options
        document.getElementById("quiz-form").style.display = "block";
        //document.getElementById("button-area").style.display = "block";
        document.getElementById("start-btn").style.display = "none";
      }
  function showQuestion(questionIndex) {
    questions.forEach((question) => {
      question.style.display = 'none';
    });
    questions[questionIndex].style.display = 'block';
  }

  function updateButtons() {
    if (currentQuestionIndex === 0) {
      previousButton.disabled = true;
      submitButton.style.display = 'none';
      nextButton.disabled = false;
      nextButton.style.display='block';
      resetButton.style.display='none';
      submitButton.style.display='none';
    } 
    else {
      previousButton.disabled = false;
      previousButton.style.display = 'block';
      nextButton.style.display='block';
      nextButton.disabled = false;
    }

    if (currentQuestionIndex === questions.length - 1) {
      nextButton.disabled = true;
      nextButton.style.display='none';
      submitButton.style.display = 'block';
     
    } else {
      nextButton.disabled = false;
      nextButton.style.display='block'
      submitButton.style.display = 'none';
      resetButton.style.display='none';
    }
  }

  showQuestion(currentQuestionIndex);
  updateButtons();

  previousButton.addEventListener('click', () => {
    currentQuestionIndex -= 1;
    showQuestion(currentQuestionIndex);
    updateButtons();
  });

  nextButton.addEventListener('click', () => {
    currentQuestionIndex += 1;
    showQuestion(currentQuestionIndex);
    updateButtons();
  });

  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;

   questions.forEach((question) => {
  const selectedOption = question.querySelector(`input[name=q${question.id.split('-')[1]}]:checked`);
  const correctOption = question.querySelector(`input[name=q${question.id.split('-')[1]}][data-correct]`);
  if (selectedOption && selectedOption === correctOption) {
    score += 1;
  }
});

    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
    resetButton.style.display='block';
    submitButton.style.display = 'none';
    previousButton.style.display='none';
  });

  resetButton.addEventListener('click', () => {
    quizForm.reset();
    showQuestion(0);
    updateButtons();
    resetButton.style.display='none';
    submitButton.style.display = 'none';
    nextButton.style.display='block';
   previousButton.disabled = true;
   nextButton.disabled=false;
   resultContainer.innerHTML = '';
   currentQuestionIndex = 0;
  });
	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);
// Get the modal
  
var modalparent = document.getElementsByClassName("modal_multi");
  
// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");

// When the user clicks the button, open the modal
function setDataIndex() {

    for (i = 0; i < modal_btn_multi.length; i++)
    {
        modal_btn_multi[i].setAttribute('data-index', i);
        modalparent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}



for (i = 0; i < modal_btn_multi.length; i++)
{
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span_close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "none";
    };

}

window.onload = function() {

    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
    }

    // OLD CODE
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//XXXXXXXXXXXXXXXXXXXXXXX    Modified old code    XXXXXXXXXXXXXXXXXXXXXXXXXX

// Get the modal

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = modal.getElementsByClassName("close")[0]; // Modified by dsones uk

// When the user clicks on the button, open the modal

btn.onclick = function() {

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
