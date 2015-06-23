var docElem = window.document.documentElement, didScroll, scrollPosition,
container = document.getElementById( 'container' );

// trick to prevent scrolling when opening/closing button
function noScrollFn() {
window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
}

function noScroll() {
window.removeEventListener( 'scroll', scrollHandler );
window.addEventListener( 'scroll', noScrollFn );
}

function scrollFn() {
window.addEventListener( 'scroll', scrollHandler );
}

function canScroll() {
window.removeEventListener( 'scroll', noScrollFn );
scrollFn();
}

function scrollHandler() {
if( !didScroll ) {
didScroll = true;
setTimeout( function() { scrollPage(); }, 60 );
}
};

function scrollPage() {
scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
didScroll = false;
};

scrollFn();

var el = document.querySelector( '.morph-button' );

new UIMorphingButton( el, {
closeEl : '.icon-cancel-circled2',
onBeforeOpen : function() {
// don't allow to scroll
noScroll();
// push main container
classie.addClass( container, 'pushed' );
},
onAfterOpen : function() {
// can scroll again
canScroll();
// add scroll class to main el
classie.addClass( el, 'scroll' );
},
onBeforeClose : function() {
// remove scroll class from main el
classie.removeClass( el, 'scroll' );
// don't allow to scroll
noScroll();
// push back main container
classie.removeClass( container, 'pushed' );
},
onAfterClose : function() {
// can scroll again
canScroll();
}
} );
