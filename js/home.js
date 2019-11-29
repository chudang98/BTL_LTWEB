document.addEventListener('DOMContentLoaded', function(){

    let element_ads = document.querySelector('#container--banner_content_1');
    // offsetWidth 

    // TODO : aniation ads slide 
    const next_button = document.querySelector('.container--banner_button_next button'),
        prev_button = document.querySelector('.container--banner_button_prev button'),
        banner = document.querySelector('.container--banner_ads'),

        container_feedback = document.querySelector('.container--banner_feedback'),
        container_feedback_ele = document.querySelector('.container--banner_feedback_ele')
        ;
    
    var container_ads_display = 1,
        feedback_start = 1;
    
    function StartedRender(){
        /* navbar ads*/
        let height = element_ads.offsetHeight;
        let top = height + 21;
        banner.style.height = top + "px";

        /* feedback*/
        height = container_feedback_ele.offsetHeight;
        container_feedback.style.height = height + "px";

    }
    StartedRender();

    window.addEventListener("resize", function(){
        StartedRender();
    });
   

    function hidden_ads(current){
        current.classList.remove('animation_apper');
        current.classList.add('animation_remov');
    }

    function show_ads(next){
        setTimeout(function(){
            next.classList.remove('animation_remov');
            next.classList.remove('hidden');
            next.classList.add('animation_apper');
        }, 199);
    }

    function autoSlideAds(){
        setInterval(() => {
            nextSlide(); }, 3500);
    }
    // autoSlideAds();

    function nextSlide(){
        let current = document.querySelector('#container--banner_content_' + container_ads_display);
        if(container_ads_display >= 4)
            container_ads_display = 0;
        container_ads_display++;
        let next = document.querySelector('#container--banner_content_' + container_ads_display);
        hidden_ads(current);
        show_ads(next);
    }
    function prevSlide(){
        let current = document.querySelector('#container--banner_content_' + container_ads_display);
        if(container_ads_display <= 1)
            container_ads_display = 5;
        container_ads_display--;

        let next = document.querySelector('#container--banner_content_' + container_ads_display);
        hidden_ads(current);
        show_ads(next);
    }

    next_button.addEventListener('click', function(){
        next_button.disabled = true;
        nextSlide();
        setTimeout(function(){
            next_button.disabled = false;
        }, 200);

    }, false);

    prev_button.addEventListener('click', function(){
        prev_button.disabled = true;
        prevSlide();
        setTimeout(function(){
            prev_button.disabled = false;
        }, 200);
    }, false);

    // TODO : animation feedback


});






