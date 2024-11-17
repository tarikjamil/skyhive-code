document.addEventListener("DOMContentLoaded",function(){new Splide(".slider1",{type:"slide",perPage:1,perMove:1,gap:"24rem",breakpoints:{991:{arrows:!1}}}).mount()}),$(".home--accordion-trigger").on("click",function(){$(this).hasClass("open")||$(".home--accordion-trigger.open").click();let e=$(this).siblings(".home--accordion--response");if($(this).hasClass("open"))e.animate({height:"0px"},500);else{e.css("height","auto");let t=e.height();e.css("height","0px"),e.animate({height:t},500,()=>{e.css("height","auto"),$("html, body").animate({scrollTop:$(this).offset().top-200},500)})}$(this).toggleClass("open")}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".looping-els");e.forEach((e,t)=>{var s,i;s=e,setTimeout(()=>{let e=s.querySelectorAll(".tag--parent");e[0].classList.add("active");let t=1,i=0;setTimeout(function a(){t>0&&e[t-1].classList.remove("active"),e[t].classList.add("active"),i+=e[t-1].getBoundingClientRect().width,s.style.transform=`translateX(-${i}px)`,++t===e.length?setTimeout(()=>{s.style.transition="none",s.style.transform="translateX(0)",e[e.length-1].classList.remove("active"),e[0].classList.add("active"),t=1,i=0,setTimeout(()=>{s.style.transition="transform 0.5s",a()},20)},3e3):setTimeout(a,3e3)},3e3)},i=200*t)})});


  document.addEventListener("DOMContentLoaded", function () {
    // Select the Lottie animation and button
    const lottieAnimation = document.querySelector('[data-lottie-id="myLottie"]');
    const playPauseButton = document.querySelector('.pause-play-btn');

    // Variable to track the animation state
    let isPaused = false;

    // Pause/Play functionality
    playPauseButton.addEventListener('click', function () {
      if (isPaused) {
        // Play the animation
        lottieAnimation.dispatchEvent(new CustomEvent('play'));
        playPauseButton.innerText = "Pause";
      } else {
        // Pause the animation
        lottieAnimation.dispatchEvent(new CustomEvent('pause'));
        playPauseButton.innerText = "Play";
      }
      isPaused = !isPaused;
    });

    // Initialize Lottie instance
    const lottieInstance = lottie.loadAnimation({
      container: lottieAnimation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: lottieAnimation.getAttribute('data-src') // Lottie JSON path
    });

    // Set custom events for play and pause
    lottieAnimation.addEventListener('play', function () {
      lottieInstance.play();
    });
    lottieAnimation.addEventListener('pause', function () {
      lottieInstance.pause();
    });
  });