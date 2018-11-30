function init(){

    window.onscroll = function(){scrollFunction()};

    function scrollFunction(){
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
            document.querySelector('.top-navigation').classList.add('fixed-top-nav');
        } else {
            document.querySelector('.top-navigation').classList.remove('fixed-top-nav');
        }
    }

    
}


// nav open
function openNav() {
    document.querySelector('.collapse-nav').style.visibility = 'visible';
    document.querySelector('.collapse-nav').style['z-index'] = '5';
    document.querySelector('.collapse-nav').classList.remove('fadeOutRightBig');
    document.querySelector('.collapse-nav').classList.add('fadeInRightBig');
    // document.querySelector('html').classList.add('full-height');            
    // document.querySelector('body').classList.add('full-height');           
    document.querySelector('body').style['overflow-y'] = 'hidden';  
    // document.querySelector('body').style.position = 'fixed';            

}

function closeNav(){
    document.querySelector('.collapse-nav').style.visibility = 'visible';
    document.querySelector('.collapse-nav').style['z-index'] = '-5';
    document.querySelector('.collapse-nav').classList.remove('fadeInRightBig');
    document.querySelector('.collapse-nav').classList.add('fadeOutRightBig');
    // document.querySelector('html').classList.remove('full-height');            
    // document.querySelector('body').classList.remove('full-height');            
    document.querySelector('body').style['overflow-y'] = 'scroll';  
    // document.querySelector('body').style.position = 'static';            

}