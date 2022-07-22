var wrapperArtists = document.querySelector('.artists__scroll'),
    marqueeArtists = document.querySelector('.artists__stroke'),
    wrapperWidthArtists = wrapperArtists.offsetWidth,
    marqueeWidthArtists = marqueeArtists.scrollWidth,

    wrapperTeam = document.querySelector('.team-meet__scroll'),
    marqueeTeam = document.querySelector('.team-meet__stroke'),
    wrapperWidthTeam = wrapperTeam.offsetWidth,
    marqueeWidthTeam = marqueeTeam.scrollWidth;


function move1() {
    var currentTX = getComputedStyle(marqueeArtists).transform.split(',');
    if (currentTX[4] === undefined) {
        currentTX = -1;
    } else {
        currentTX = parseFloat(currentTX[4]) - 1;
    }

    if (-currentTX >= marqueeWidthArtists) {
        marqueeArtists.style.transform = 'translateX(' + wrapperWidthArtists + 'px)';

    } else {
        marqueeArtists.style.transform = 'translateX(' + currentTX + 'px)';
    }
}

var interval1 = setInterval(move1, 40);

function move2() {
    var currentTX = getComputedStyle(marqueeTeam).transform.split(',');
    if (currentTX[4] === undefined) {
        currentTX = -1;
    } else {
        currentTX = parseFloat(currentTX[4]) - 1;
    }

    if (-currentTX >= marqueeWidthTeam) {
        marqueeTeam.style.transform = 'translateX(' + wrapperWidthTeam + 'px)';

    } else {
        marqueeTeam.style.transform = 'translateX(' + currentTX + 'px)';
    }
}

var interval = setInterval(move2, 40);



document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);


function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if (dropDown.classList.contains('click-dropdown') === true) {
        dropDown.addEventListener('click', function(e) {
            e.preventDefault();

            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {

                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');

            } else {

                closeDropdown();


                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }

    if (dropDown.classList.contains('hover-dropdown') === true) {

        dropDown.onmouseover = dropDown.onmouseout = dropdownHover;

        function dropdownHover(e) {
            if (e.type == 'mouseover') {

                closeDropdown();


                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');

            }


        }
    }

};



window.addEventListener('click', function(e) {
    if (e.target.closest('.dropdown-container') === null) {
        closeDropdown();
    }

});


function closeDropdown() {
    console.log('run');


    document.querySelectorAll('.dropdown-container').forEach(function(container) {
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.classList.remove('dropdown-active');
    });
}

$(function() {

    $('.menu__btn-media').on('click', function() {
        $('.menu__flex').toggleClass('active');
    });
});



$('.autoplay').slick({

    responsive: [{
        breakpoint: 1441,
        settings: {
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToScroll: 1,
            arrows: false,

        }
    }]
});



$('.team-meet__slider').slick({
    responsive: [{
        breakpoint: 851,
        settings: {
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            arrows: false,
            cssEase: 'linear'
        }
    }]


});

new WOW().init();