function init(){
    window.onscroll = function () {scrollFunction()}
    
    function scrollFunction(){
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
            document.querySelector('.nav-top').style.display = 'none';
            document.querySelector('header').style.position = 'fixed';
            document.querySelector('.nav-mid').style.padding = '10px 0px';
            
        } else {
            document.querySelector('.nav-top').style.display = 'block';
            document.querySelector('header').style.position = 'static';
            document.querySelector('.nav-mid').style.padding = '35px 0px';
        }
    }
    
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        autoplay: {
            delay: 5000,
        },
        
    })
}

// side nav


function sideNavOpen() {
    document.querySelector('.side-navbar').classList.remove("hidden");
    document.querySelector('.side-navbar').classList.add("visible");
    document.querySelector('.side-navbar').classList.remove("fadeOutRight");
    document.querySelector('.side-navbar').classList.add("fadeInRight");
    document.querySelector('body').style.position = 'fixed'; 
}
function sideNavClose() {
    document.querySelector('.side-navbar').classList.remove("fadeInRight");
    document.querySelector('.side-navbar').classList.add("fadeOutRight");
    document.querySelector('.side-navbar').classList.remove("visible");
    document.querySelector('.side-navbar').classList.add("hidden");
    document.querySelector('body').style.position = 'static'; 
}



// lg screen autocomplete function

$(function() {
    $( "#autocomplete-4" ).autocomplete({
        source: [
            { label: "bicyle", value: "Bicycle" },
            { label: "jumper", value: "Jumper" },
            { label: "gear", value: "Gear" },
            { label: "sport", value: "Sports" },
            { label: "simple", value: "Simple" },
            { label: "fast", value: "Fast" },
            { label: "plane", value: "Plane" }, 
            { label: "rider", value: "Rider" }
        ]
    });
});

// small screen autocomplete function

$(function() {
    $( "#autocomplete-2" ).autocomplete({
        source: [
            { label: "bicyle", value: "Bicycle" },
            { label: "jumper", value: "Jumper" },
            { label: "gear", value: "Gear" },
            { label: "sport", value: "Sports" },
            { label: "simple", value: "Simple" },
            { label: "fast", value: "Fast" },
            { label: "plane", value: "Plane" }, 
            { label: "rider", value: "Rider" }
        ]
    });
});

// drop down functionality

function dropdownOpen() {
    document.querySelector(".dropdown").classList.remove("hidden");
    document.querySelector(".dropdown").classList.add("visible");
    document.querySelector(".drop-open").style.display = "none";
    document.querySelector(".drop-close").style.display = "inline-block";
}

function dropdownClose() {
    document.querySelector(".dropdown").classList.remove("visible");
    document.querySelector(".dropdown").classList.add("hidden");
    document.querySelector(".drop-open").style.display = "inline-block";
    document.querySelector(".drop-close").style.display = "none";
    
}


// lg screen search

$(document).on('keydown','#autocomplete-4',function(){
    var searchBox = $(this);
    var value = searchBox.val();
    var searchIcon = $('.search-icon');
    var crossIcon = $('.cross');
    if(value == "")
    {
        crossIcon.addClass('hidden');
        searchIcon.removeClass('hidden');
    }
    else
    {
        crossIcon.removeClass('hidden');
        searchIcon.addClass('hidden');
    }
    
});

function cross() {
    document.querySelector(".min-bar-inp").value = "";
    document.querySelector(".cross").classList.remove("visible");
    document.querySelector(".cross").classList.add("hidden");
    document.querySelector(".search-icon").classList.remove("hidden");
    document.querySelector(".search-icon").classList.add("visible");
    
}

// small screen search

$(document).on('keydown','#autocomplete-2',function(){
    var searchBox = $(this);
    var value = searchBox.val();
    var searchIcon = $('.search-icon2');
    var crossIcon = $('.cross2');
    if(value == "")
    {
        crossIcon.addClass('hidden');
        searchIcon.removeClass('hidden');
    }
    else
    {
        crossIcon.removeClass('hidden');
        searchIcon.addClass('hidden');
    }
    
});


function crossSmallScreen() {
    document.querySelector(".small_screen-inp").value = "";
    document.querySelector(".cross2").classList.remove("visible");
    document.querySelector(".cross2").classList.add("hidden");
    document.querySelector(".search-icon2").classList.remove("hidden");
}




