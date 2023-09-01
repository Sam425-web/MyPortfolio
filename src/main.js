$(document).ready(function() {
  $('#pagepiling').pagepiling({
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [
      '#f2f2f2',
      '#f2f2f2',
      'whitesmoke',
      'whitesmoke',
      'whitesmoke'],
    anchors: ['home', 'about', 'experiences', 'projects', 'contact'],
    menu: '#myMenu',
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: true,
    loopTop: false,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['home', 'about', 'experiences', 'projects', 'contact'],
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,

    //events
    onLeave: function(index, nextIndex, direction) { },
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {},
  });
});

function sideOpen() {
  document.querySelector('#pp-nav').style.zIndex = '-1';
}

function sideClose() {
  document.querySelector('#pp-nav').style.zIndex = '100';
}

function addRemoveCustomClass() {
  const customDiv = document.querySelector('#aboutMe');
  if (window.innerWidth <= 768) {
    customDiv.classList.add('pp-scrollable');
  } else {
    customDiv.classList.remove('pp-scrollable');
  }

    // After the content is loaded, add the "loaded" class to the body
  $(document).ready(function() {
    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    const nav = document.querySelector('#pp-nav');

    // Display the preloader initially
    preloader.style.display = "flex";
    content.style.display = "none";
    nav.style.display = "none";

    // Hide the preloader and show the content after a delay
    setTimeout(function () {
        preloader.style.display = "none";
        content.style.display = "block";
        nav.style.display = "block";
    }, 3000); // 3000 milliseconds (3 seconds)
  });
}

addRemoveCustomClass();
window.addEventListener('resize', addRemoveCustomClass);
