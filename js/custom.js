$(document).ready(function(e) {

    submit = function () {
        alert("Thank You for Contacting Us")
    };


    var $cases = $('.Cases');

    $cases.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows',
    });


    $('ul.filters > li').on('click', function(e) {
        e.preventDefault();
        var filter = $(this).attr('data-filter');
        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');
        console.log(filter);

        $cases.isotope({filter: filter});
    });

    var $modal = $('#myModal');
    var $modalImg = $('#img01');
    $('.card > img').on('click', function(){
        $modal.css ("display","block");
        $modalImg.attr("src",$(this).attr('src'));
    })

    var close = document.getElementsByClassName("close")[0];

    close.onclick = function() {
        $modal.css ("display","none");
    }
});
