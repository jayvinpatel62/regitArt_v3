
$('.my-table-model').hide();
  
$('.tr-click-model').click(function(){
  $('.my-table-model').toggle();
});
$('.closeDialog').click(function(){
  $('.my-table-model').hide();
});


$('.btn-filterhead').click(function(){
  $('body').toggleClass('open-Filter-sidebar');
});
$('.closeFilter').click(function(){
  $('body').toggleClass('open-Filter-sidebar');
});

$('.toggleSidebar').click(function(){
  $('body').toggleClass('open-main-sidebar');
});
$('.closeSidebar').click(function(){
  $('body').toggleClass('open-main-sidebar');
});


  document.addEventListener('keydown', function(event) {
    // Disable PrintScreen key
    if (event.key === 'PrintScreen') {
        // alert('Screenshots are disabled.');
        event.preventDefault();
    }
    // Disable Ctrl+PrintScreen, Alt+PrintScreen, Shift+PrintScreen
    if ((event.ctrlKey || event.altKey || event.shiftKey) && event.key === 'PrintScreen') {
        // alert('Screenshots are disabled.');
        event.preventDefault();
    }
    // Disable Ctrl+P
    if (event.ctrlKey && event.key === 'p') {
        // alert('Screenshots are disabled.');
        event.preventDefault();
    }
});

document.addEventListener('keyup', function(event) {
    // Clear clipboard when PrintScreen is released
    if (event.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are navigator.');
    }
});

document.addEventListener('contextmenu', function(event) {
    // alert('Right-click is disabled.');
    event.preventDefault();
});

document.addEventListener('mousedown', function(event) {
    // Disable Windows Snipping Tool
    if (event.button === 2) {
        // alert('Right-click is disabled.');
        event.preventDefault();
    }
});

document.addEventListener('dragstart', function(event) {
    alert('Drag is disabled.');
    event.preventDefault();
});

window.addEventListener('blur', function() {
    // This is a basic method to detect when the user tries to use screen recording tools
    // alert('Screen capture tools are disabled.');
    window.focus();
});