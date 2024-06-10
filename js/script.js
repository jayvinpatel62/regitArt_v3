
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

const ctx = document.getElementById('myChart');
const data = {
  labels: ['Aktiv', 'Uilanad', 'Lager', 'Restaureras', 'Makulerad'],
  datasets: [{
    label: 'My First Dataset',
    data: [200, 100, 300, 300, 400],
    backgroundColor: [
      '#5B5B5D',
      '#CE754C',
      '#F3C96B',
      '#D4CF7F',
      '#9FB699'
    ],
    hoverOffset: 4
  }]
};

new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
        legend: {
            position: 'right',
            display:false,
            labels: {
                usePointStyle: true,
                pointStyle: 'rounded',
                fontSize: 18,
                padding: 20
            },
            layout: {
                padding: 50
            }
            
        },
        title: {
            display: false,
            text: 'Chart.js Pie Chart'
        }
    }
        
    }
  });



