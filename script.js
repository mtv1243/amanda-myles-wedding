/*===============
    nav bar
===============*/

$(".item01").click(()=>{
  $("html").animate(
    {
      scrollTop: $('.date-wrapper').offset().top
    },
    "slow"
  );
});

$(".item02").click(()=>{
  $("html").animate(
    {
      scrollTop: $('#mc_embed_signup').offset().top
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
