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
}

addRemoveCustomClass();
window.addEventListener('resize', addRemoveCustomClass);
