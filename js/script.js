
$('.my-table-model').hide();
  
$('.tr-click-model').click(function(){
  $('.my-table-model').toggle();
});

$('.closeDialog').click(function(){
  $('.my-table-model').hide();
});



$('.toggleSidebar').click(function(){
  $('.sidebar').toggleClass('show');
});
$('.btn-filterhead').click(function(){
  $('.filter-uk-navbar').toggleClass('show');
});
$('.close-floating').click(function(){
  $(this).parent().toggleClass('show');
});
