document.addEventListener("DOMContentLoaded", function() {
    const dropdownHeader = document.querySelector(".dropdown-header");
    const dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownHeader.addEventListener("click", function() {
      dropdownContent.classList.toggle("active");
      const icon = dropdownHeader.querySelector(".dropdown-icon");
      icon.textContent = dropdownContent.classList.contains("active") ? "-" : "+";
    });
  });

// sideber_menu js
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


// sideber_menu js end


$(document).ready(function(){

    jQuery('.mobile_men').meanmenu({
        meanMenuContainer:'.mobile_menu',
        meanScreenWidth: "767"
    });

  

    // product-active

  $('.product-active').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        },
        1199:{
            items:4
        }
    }
})


// brand-active

$('.brand_active').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        992:{
            items:5
        },
        1199:{
            items:6
        }
    }
})

// select
$('select').niceSelect();


const categories = ["demo", "demo", "demo"];
const select = document.getElementById("product-categories");
categories.forEach((category) => {
  const option = document.createElement("option");
  option.text = category;
  select.add(option);
});





})(jQuery);
// shop page js
