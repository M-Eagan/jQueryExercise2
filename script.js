$(() =>{

  let expandMenu = $(".responsive-menu");

  expandMenu.hide();
  $(".responsive-menu").on('click',() => {
    expandMenu.slideToggle();
  });

	jQuery(function($){
        $('.menu-btn').click(function(){
        $('.responsive-menu').slideDown()
        })
   })

   $("#num").on('click', () => {
        $('#letters').hide();
        $('#numbers').css("display", "block");
  
  });

  $("#alpha").on('click', () => {
    $('#numbers').hide();
    $('#letters').css("display", "block");
});
    
    });

