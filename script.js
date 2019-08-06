$(function() {
  /* ===========================================================================
                              Slide Menu
  =========================================================================== */


  const $navicon_button     = $('.navicon-button');
  const $primary_navigation = $('.primary-navigation');


  //Hamburger button
  $navicon_button.on('click', function() {
    $(this).toggleClass('navicon-open');
    $primary_navigation.toggleClass('show-navigation');
  });


  const $dropdown_anchor = $('.dropdown > a');
  $dropdown_anchor.click(function(e) {
    e.preventDefault();

    const $dropdown_menu  = $(this).siblings('.dropdown-menu').first();
    const $dropdown_arrow = $(this).find('.dropdown-arrow').first();
    console.log($dropdown_arrow);

    $dropdown_menu.slideToggle(300);
    $dropdown_arrow.toggleClass('open');
  });


  /* ===========================================================================
                             Section Scrolll
  =========================================================================== */


  //This selector is a little too vague, but it works for now.
  $("section [href*='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });


});
