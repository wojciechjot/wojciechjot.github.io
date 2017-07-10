$(document).ready(function(){
               
  const root = $('html, body');

  $('a').click((e) => {
    e.preventDefault();

    const href = $.attr(e.currentTarget, 'href');

    root.animate(
    {
      scrollTop: $(href).offset().top + 2
    }, 500, () => 
    {
      location.hash = href;
    });
    return false;
  });

});
