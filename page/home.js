document.addEventListener("DOMContentLoaded",function(){new Splide(".slider1",{type:"slide",perPage:1,perMove:1,gap:"24rem",breakpoints:{991:{arrows:!1}}}).mount()}),$(".home--accordion-trigger").on("click",function(){$(this).hasClass("open")||$(".home--accordion-trigger.open").click();let e=$(this).siblings(".home--accordion--response");if($(this).hasClass("open"))e.animate({height:"0px"},500);else{e.css("height","auto");let t=e.height();e.css("height","0px"),e.animate({height:t},500,()=>{e.css("height","auto"),$("html, body").animate({scrollTop:$(this).offset().top-200},500)})}$(this).toggleClass("open")}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".looping-els");e.forEach((e,t)=>{var s,i;s=e,setTimeout(()=>{let e=s.querySelectorAll(".tag--parent");e[0].classList.add("active");let t=1,i=0;setTimeout(function a(){t>0&&e[t-1].classList.remove("active"),e[t].classList.add("active"),i+=e[t-1].getBoundingClientRect().width,s.style.transform=`translateX(-${i}px)`,++t===e.length?setTimeout(()=>{s.style.transition="none",s.style.transform="translateX(0)",e[e.length-1].classList.remove("active"),e[0].classList.add("active"),t=1,i=0,setTimeout(()=>{s.style.transition="transform 0.5s",a()},20)},3e3):setTimeout(a,3e3)},3e3)},i=200*t)})});


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // Get the Lottie animation container and the play/pause button
    const lottieContainer = document.querySelector('.lottie-animation');
    const playPauseButton = document.querySelector('.play-pause-button');
    const icon = playPauseButton.querySelector('i');

    if (!lottieContainer) {
        console.error("No Lottie container found. Please check your HTML.");
        return;
    }

    console.log("Lottie container found:", lottieContainer);

    if (!playPauseButton) {
        console.error("No play/pause button found. Please check your HTML.");
        return;
    }

    console.log("Play/Pause button found:", playPauseButton);

    // Initialize the Lottie instance
    const animation = lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: lottieContainer.getAttribute('data-src') // Ensure this attribute contains your animation's JSON file URL
    });

    console.log("Lottie animation initialized with path:", lottieContainer.getAttribute('data-src'));

    // Remove additional <svg> if any
    const svgs = lottieContainer.querySelectorAll('svg');
    if (svgs.length > 1) {
        console.warn(`Found ${svgs.length} <svg> elements. Removing duplicates.`);
        for (let i = 1; i < svgs.length; i++) {
            svgs[i].remove(); // Remove extra <svg> elements
            console.log(`Removed duplicate <svg> element:`, svgs[i]);
        }
    }

    // Variable to track play/pause state
    let isPaused = false;

    // Add event listener for the button
    playPauseButton.addEventListener('click', function () {
        console.log("Play/Pause button clicked");
        if (isPaused) {
            animation.play();
            icon.className = "fas fa-pause"; // Change to pause icon
            console.log("Animation resumed");
        } else {
            animation.pause();
            icon.className = "fas fa-play"; // Change to play icon
            console.log("Animation paused");
        }
        isPaused = !isPaused;
        console.log("isPaused state:", isPaused);
    });
});