$('.tabContent > div').hide();
$('.tab .tabNavi a').hover(function () {
    $('.tabContent > div').hide().filter(this.hash).stop().fadeIn();
    $('.tab .tabNavi a').removeClass('active');
    $(this).addClass('active');
}).filter(':eq(0)').mouseover();

// tab click
// $('.tabContent > div').hide();
// $('.tab .tabNavi a').click(function(){
//     $('.tabContent > div').hide().filter(this.hash).fadeIn();
//     $('.tab .tabNavi a').removeClass('active');
//     $(this).addClass('active');
// }).filter(':eq(0)').click();