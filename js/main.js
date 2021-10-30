$(window).scroll(function() {
    let headerButton = document.querySelector('.header__login')
    let header = document.querySelector('.header')
    let headerLogo = document.querySelector('.header__h2')
    let headerNavItems = document.querySelectorAll('.header__navitem a')
	if(window.pageYOffset > 250) {
        header.classList.add('header-fixed')
        headerButton.classList.remove('button__filled-transparent')
        headerButton.classList.add('button__filled-green')
        headerButton.onmouseover = function() 
        {
            this.style.border = "2px solid #a4c936";
        }
        headerLogo.style.color = '#a4c639'
        headerNavItems.forEach(function (element) {
            if (element.parentElement.classList.contains('header__navitem-active')) {
                element.style.color = '#a4c639'
            }
            else {
                element.style.color = 'black'
            }
        })
    }
	else {
        headerNavItems.forEach(function (element) {
            if (element.parentElement.classList.contains('header__navitem-active')) {
                element.style.color = '#a4c639'
            }
            else {
                element.style.color = 'white'
            }
        })
		header.classList.remove('header-fixed')
        headerLogo.style.color = 'white'
        headerButton.classList.add('button__filled-transparent')
        headerButton.classList.remove('button__filled-green')
        headerButton.style.border = "2px solid white";
        headerButton.onmouseover = function() 
        {
            this.style.border = "2px solid white";
        }

    }
})


$(document).ready(function() {
    let mainContainer = document.querySelectorAll('.main__container');
    let aboutContainer = document.querySelectorAll('.about__slideritem')

    let width = $(window).width();

    for (let i = 0; i < mainContainer.length; i++) {
        mainContainer[i].style.width = 0.73*width + 'px'; 

    }
    for (let i = 0; i < aboutContainer.length; i++) {
        aboutContainer[i].style.width = 0.73*width + 'px'; 

    }    
    
    ;
});

$(window).resize(function() {
    let mainContainer = document.querySelectorAll('.main__container');
    let aboutContainer = document.querySelectorAll('.about__slideritem');

    let width = $(window).width();

    for (let i = 0; i < mainContainer.length; i++) {
        mainContainer[i].style.width = 0.73*width + 'px'; 
    }

    for (let i = 0; i < aboutContainer.length; i++) {
        aboutContainer[i].style.width = 0.73*width + 'px'; 

    }    
  });

