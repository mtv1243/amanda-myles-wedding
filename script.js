/*===============
    nav bar
===============*/

// nav bar slide toggle
$(".menu-text").click(() => {
  $(".nav-wrapper-mobile").slideToggle();
})

$(".item").click((event) => {
  $(".nav-wrapper-mobile").slideUp();
})

// scrolling to elements on click
$(".item01").click(()=>{
  $("html").animate(
    {
      scrollTop: $('.date-wrapper').offset().top-250
    },
    "slow"
  );
});

$(".item02").click(()=>{
  $("html").animate(
    {
      scrollTop: $('.reception-wrapper').offset().top-200
    },
    "slow"
  );
});

$(".item03").click(()=>{
  $("html").animate(
    {
      scrollTop: $('.hotel').offset().top-200
    },
    "slow"
  );
});

$(".item04").click(()=>{
  $("html").animate(
    {
      scrollTop: $('#mc_embed_signup').offset().top-200
    },
    "slow"
  );
});

$(".scroll-top").click(()=>{
  $("html").animate(
    {
      scrollTop: $('header').offset().top
    },
    "slow"
  );
});
