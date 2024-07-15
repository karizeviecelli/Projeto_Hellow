
$('.gallery-item img').click(function() {
    var imgSrc = $(this).attr('src');
    $('.lightbox-img').attr('src', imgSrc);
    $('.lightbox').fadeIn();
});


$('.lightbox, .lightbox-close').click(function() {
    $('.lightbox').fadeOut();
});
