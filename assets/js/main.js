/***************************************************
==================== JS INDEX ======================
****************************************************
01. Preloader
02. Go top Top
03. magnific Popup
04. nice Select
05. Counter Activation
06. Text Slider
07. Testimonial Slider
08. work flow slider
09. Testimonial Slider inner
10. home two project slider
11. Home two Testimonial Slider used
12. Blog Slider used
13. post-gallery-slider
14. Desktop OffCanvas
15. Mobile Menu
16. pricing Tab Option
17. scroll Revel
18. Register Plugins
19. Characters Animatoin
20. Words Animatoin
21. Fade Animation
22. text-animation

****************************************************/

(function ($) {
  "use strict";

  
  // 01. Preloader
  var preloader = document.querySelector(".preloader-wrap");
  var get_body = document.querySelector("body");
  
  window.onload = function () {
    preloader.classList.add("hidden");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // match the CSS transition duration
  };
  
  // 02. Go top Top
  let scroll_top = document.getElementById("scroll_top");

  if (scroll_top) {
    window.onscroll = function () { scrollTopFunc() };

    function scrollTopFunc() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
        scroll_top.classList.add('showed');
      } else {
        scroll_top.classList.remove('showed');
      }
    }

    scroll_top.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  $(document).ready(function(){

    window.addEventListener('scroll', function () {
      const header = document.getElementById('header');
      if (window.scrollY > 250) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });

      // 03. magnific Popup
      $('.video-popup').magnificPopup({
        type: 'iframe'
      });
    
      // 03. magnific Popup
      $('.popup-gallery').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        }
      });
      
    // Magnific Popup Configuration
    $('.playBtn').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: function (url) {
              // Support both ?v=ID and /embed/ID
              const watchMatch = url.match(/[?&]v=([^&]+)/);
              if (watchMatch && watchMatch[1]) return watchMatch[1];

              const embedMatch = url.match(/embed\/([^\?&]+)/);
              if (embedMatch && embedMatch[1]) return embedMatch[1];

              return null;
            },
            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          }
        }
      },
      callbacks: {
        close: function () {
          document.activeElement && document.activeElement.blur();

          setTimeout(() => {
            $('#main-content, .slick-current .playBtn').first().focus();
          }, 100);
        }
      }
    });

      // 04. nice select
       $('select').niceSelect();
    
      // 05. Counter Activation *************
      const counter_1 = window.counterUp.default
      const counter_cb = entries => {

        entries.forEach(entry => {
          const el = entry.target
          if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counter_1(el, {
              duration: 2500,
              delay: 16,
            })
            el.classList.add('is-visible')
          }
        })
      }

      const counter_1_io = new IntersectionObserver(counter_cb, {
        threshold: 1
      })

      const counter_1_els = document.querySelectorAll('.counter-active');
      counter_1_els.forEach((el) => {
        counter_1_io.observe(el)
      });
      
      // 06. listing-slider  // #########
      const listingSlider = new Swiper('.listing-slider', {
        loop: true,
        speed: 7000,
        spaceBetween: 80,
        slidesPerView: 3,
        autoplay: true,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          350: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2.5,
            centeredSlides: true,
          },
          1400: {
            slidesPerView: 3,
          }
         
        },

      })
      
      // 07. Testimonial Slider // ###########
      const testimonial_slider = new Swiper('.testimonial-slider', {
        loop: true,
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 24,
        autoplay: true,
        navigation: {
          prevEl: '.tsm-btn-prev',
          nextEl: '.tsm-btn-next',
        },
        pagination: {
          el: ".fraction",
          type: "fraction",
          clickable: true,
          
        },

        breakpoints: {
          350: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          }
         
        },
        
      })
      
      // 08. work flow slider // ******
      const testimonial_slider_2 = new Swiper('.work-flow-slider', {
        loop: true,
        spaceBetween: 24,
        centeredSlides: true,
        slidesPerView: 2,
       
        breakpoints: {
          350: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1.25,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true,
          },
          992: {
            slidesPerView: 2,
            centeredSlides: true,
          },
         
        },
      })
    
      // 09. Testimonial Slider inner // ***********
      const tsm_slider_3 = new Swiper('.inner-testimonial-slider', {
        loop: true,
        speed: 2500,
        slidesPerView: 1,
        spaceBetween: 50,
        autoplay: true,        
      })
      
      // 10. home two project slider *************
      const h2ProjectSlider = new Swiper('.h2-project-slider', {
        loop: true,
        speed: 1500,
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: true,
        breakpoints: {
          350: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
          },
          992: {
            slidesPerView: 2.5,
            centeredSlides: true,
          },
          1200:{
            slidesPerView: 3.25,
            centeredSlides: true,
          },
          1400:{
            slidesPerView: 3.5,
            centeredSlides: true,
          }
         
        },
      })
      // 11. Home two Testimonial Slider used ********
      const h2TestimonailSlider = new Swiper('.h2-testimonial-slider', {
        loop: true,
        speed: 3000,
        slidesPerView: 1,
        spaceBetween: 60,
        navigation: {
          prevEl: '.btn-left',
          nextEl: '.btn-right',
        },
      })
      
      
     // 12. Blog Slider used // ***********
      const blogTesSlider = new Swiper('.blog-tes-slider', {
        loop: true,
        speed: 2500,
        slidesPerView: 1,
        spaceBetween: 50,
        autoplay: true,        
      })

      // 13. post-gallery-slider ***********
      const postGallerySlider = new Swiper('.post-gallery-slider', {
        loop: true, 
        autoplay: true,
        spaceBetween: 24,
        slidesPerView: 1, 
       
        navigation: {
          nextEl: ".next-img",
          prevEl: ".prev-img",
        },
       
      });




      // 14. Desktop OffCanvas
        $('.menu-btn').on('click', function(){
          $('.desktop-offCanvas').removeClass('open');
          $('.desktop-offCanvas').toggleClass('open');
        });

        $('.btn-Close, .desktop-offCanvas').on('click', function(){
          $('.desktop-offCanvas').removeClass('open');
        });
      
      // 15. Mobile Menu
      $('.main-menu').meanmenu({
        meanScreenWidth: "1199",
        meanMenuContainer: '.mobile_menu',
        meanMenuCloseSize: '24px',
      });

      // 16. pricing Tab Option

        // pricing monthly / anually active class
        $('.packages-btn button').on('click', function (){
          $(this).siblings().removeClass('active');
          $(this).addClass('active')
        });

        // show / hide tab home one
        $('#monthly').on('click', function(){
          $('#tab-pan-monthly').addClass('active');
          $('#tab-pan-annually').removeClass('active');
        });
        $('#annually').on('click', function(){
          $('#tab-pan-annually').addClass('active');
          $('#tab-pan-monthly').removeClass('active');
        });

        // for home two
        $('#h2-monthly').on('click', function(){
          $('#h2-tab-monthly').addClass('active');
          $('#h2-tab-annually').removeClass('active');
        });
        $('#h2-annualy').on('click', function(){
          $('#h2-tab-annually').addClass('active');
          $('#h2-tab-monthly').removeClass('active');
        });
    function gridLayout() {
      $(".layout_btn").click(function () {
        $(".grid_view").addClass("d-none");
        $(".layout_view").removeClass("d-none");
        $(".layout_btn").addClass("active_style");
        $(".grid_btn").removeClass("active_style");
      });

      $(".grid_btn").click(function () {
        $(".layout_view").addClass("d-none");
        $(".grid_view").removeClass("d-none");
        $(".layout_btn").removeClass("active_style");
        $(".grid_btn").addClass("active_style");
      });
    }
    gridLayout()
    function weWork() {
      $(".tab-btn-wrapper .style_1").click(function () {
        $(".work_contains_2").addClass("d-none");
        $(".work_contains_1").removeClass("d-none");
        $(".tab-btn-wrapper .style_1").addClass("active");
        $(".tab-btn-wrapper .style_2").removeClass("active");
      });
      $(".tab-btn-wrapper .style_2").click(function () {
        $(".work_contains_1").addClass("d-none");
        $(".work_contains_2").removeClass("d-none");
        $(".tab-btn-wrapper .style_2").addClass("active");
        $(".tab-btn-wrapper .style_1").removeClass("active");
      });
    }
    weWork()

      // 17. scroll Revel
        const sr = ScrollReveal({
          origin: 'bottom',
          duration : 1500,
          distance: '80px',
          delay: 0,
          opacity: 0              
        })
        sr.reveal('.h1-abt-card, .service-item, .team-item, .pricing-item, .blog-item, .process-item, .team-item-2, .accordion-item, .h2-blog-item, .footer-clario, .packages-btn, .award-item, .contact-item, .inner-service-item, .contact-item2, .details-item ',{
          interval: 200,
          delay: 0,
        })
    
      // 18. Register Plugins
      gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

      ScrollSmoother.create({
         wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.3,
        effects: true,
        smoothTouch: 0.1,
      });
        
      // 19. Characters Animatoin
      const charsAnimation = gsap.utils.toArray(".chars-anime");

      if (charsAnimation.length) {
        charsAnimation.forEach(splitChars => {
          if (!splitChars) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitChars,
              start: 'top 90%',
              end: 'bottom 60%',
              scrub: false,
              toggleActions: 'play none none none'
            }
          });

          try {
            const textSplitChars = new SplitText(splitChars, { type: "chars" });
            gsap.set(splitChars, { perspective: 400 });
            textSplitChars.split({ type: "chars" });

            tl.from(textSplitChars.chars, {
              duration: 2,
              opacity: 0,
              scale: 0,
              y: 80,
              rotationX: 100,
              transformOrigin: "0% 50% -50",
              ease: "back",
              stagger: 0.1
            });
          } catch (e) {
          //  console.log("SplitText failed to initialize:", e);
          }
        });
      } 
    
      // 20. Words Animatoin
      let wordsAnimation = gsap.utils.toArray(".word-anime");
      wordsAnimation.forEach(splitWords => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitWords,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            toggleActions: 'play none none none'
          }
        });

        const textSplitWords = new SplitText(splitWords, { type: "words" });
        gsap.set(splitWords, { perspective: 400 });
        textSplitWords.split({ type: "words" })
        tl.from(textSplitWords.words, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: 10,
          x: 50,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      });
    
      // 21. Fade Animation
      let fade_animation = gsap.utils.toArray(".fade-anime");
      fade_animation.forEach((fade) => {
        const ease_value = fade.getAttribute('data-ease');
        const delay_value = fade.getAttribute('data-delay', 0.5);
        const duration_value = fade.getAttribute('data-duration', 1.5);

        gsap.from(fade, {
          scrollTrigger: {
            trigger: fade,
            start: 'top 90%',
          },
          delay: delay_value,
          opacity: 0,
          y: 50,
          ease: ease_value,
          duration: duration_value,
        });
      });

        // 22. text-animation
        function textAnimate(sliderElement) {
          const textsToAnimate = sliderElement.querySelectorAll(".text-anime");
        
          textsToAnimate.forEach(textToAnimate => {
            const animate = new SplitType(textToAnimate, { types: 'words, chars' });
        
            gsap.from(animate.chars, {
              opacity: 0,
              x: 100,
              duration: 1.5,
              stagger: { amount: 0.9 },
              scrollTrigger: {
                trigger: textToAnimate,
                start: "top 95%",
                toggleActions: "play none none none"
              }
            });
          });
        }  
        textAnimate(document);   
  });
  // FAQ 
  function faQ() {
    const $faqs = $(".faq");
    if ($faqs.length > 0) {
      $faqs.eq(0).addClass("active");
      $faqs.eq(0).find(".answer").css("max-height", $faqs.eq(0).find(".answer")[0].scrollHeight + "px");
      $faqs.eq(0).find(".icon").text("−");
    }

    $faqs.on("click", function () {
      const $this = $(this);
      const $answer = $this.find(".answer");
      const $icon = $this.find(".icon");

      if (!$this.hasClass("active")) {
        $faqs.removeClass("active").find(".answer").css("max-height", "0");
        $faqs.find(".icon").text("+");

        $this.addClass("active");
        $answer.css("max-height", $answer[0].scrollHeight + "px");
        $icon.text("−");
      } else {
        $this.removeClass("active");
        $answer.css("max-height", "0");
        $icon.text("+");
      }
    });
  }
  faQ();
  $(document).ready(function () {
    $("#bookingBtn").click(function (e) {
      e.stopPropagation();
      $("#bookingMenu").slideToggle(200);
    });


    $(document).click(function () {
      $("#bookingMenu").slideUp(200);
    });
  });
  function Calendar(){
    let currentYear = 2025;
    let currentMonth = 1;

    const monthNames = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    function renderCalendar(year, month) {
      const $calendarGrid = $('.calendar-grid');
      $calendarGrid.empty();

      dayNames.forEach(name => {

        $('<div></div>')
          .addClass('day-of-week')
          .text(name)
          .appendTo($calendarGrid);
      });

      const firstDayOfMonth = new Date(year, month, 1);
      const startingDay = firstDayOfMonth.getDay();

      const lastDayOfMonth = new Date(year, month + 1, 0);
      const numDaysInMonth = lastDayOfMonth.getDate();

      for (let i = 0; i < startingDay; i++) {
        $('<div></div>')
          .addClass('date empty')
          .appendTo($calendarGrid);
      }

      for (let day = 1; day <= numDaysInMonth; day++) {
        $('<div></div>')
          .addClass('date')
          .text(day)
          .appendTo($calendarGrid);
      }

      $('.month-name').text(monthNames[month]);
      $('.year').text(year);
    }

    renderCalendar(currentYear, currentMonth);

    $('.left-arrow').on('click', function () {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentYear, currentMonth);
    });

    $('.right-arrow').on('click', function () {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentYear, currentMonth);
    });

    $('#monthViewBtn').on('click', function () {
      $('.view-options button').removeClass('active');
      $(this).addClass('active');
      $('.calendar-grid').show();
    });

    $('#weekViewBtn').on('click', function () {
      $('.view-options button').removeClass('active');
      $(this).addClass('active');
      $('.calendar-grid').hide();
      alert('Week view not implemented in this example.');
    });

    $('#listViewBtn').on('click', function () {
      $('.view-options button').removeClass('active');
      $(this).addClass('active');
      $('.calendar-grid').hide();
      alert('List view not implemented in this example.');
    });

  }
  Calendar()
  function changeContent(){
    $(document).ready(function () {
     
      function resetSidebarActiveStates() {
        $('.sidebar .btn_area button').removeClass('active');
        $('.sidebar .dropdown-menu a').removeClass('active');
        $('.sidebar .booking-wrapper').removeClass('open active');
        $('.sidebar .dropdown-menu').slideUp(200); 
      }

      $('.sidebar .btn_area > button').not('.dropdown-toggle').on('click', function (e) {
        e.preventDefault();

        resetSidebarActiveStates(); 
        $(this).addClass('active');

        var targetContentId = $(this).data('target');

        $('.content-section').removeClass('active');

        $('#' + targetContentId).addClass('active');
      });

      $('.sidebar .booking-wrapper .dropdown-toggle').on('click', function (e) {
        e.preventDefault();

        var $parentWrapper = $(this).closest('.booking-wrapper');

        if ($parentWrapper.hasClass('open')) {
          $parentWrapper.removeClass('open active');
          $parentWrapper.find('>.dropdown-menu').slideUp(200);
        } else {
          resetSidebarActiveStates();

          $parentWrapper.addClass('open active'); 
          $parentWrapper.find('>.dropdown-menu').slideDown(200);

          var targetContentId = $(this).data('target');
          if (targetContentId) {
            $('.content-section').removeClass('active');
            $('#' + targetContentId).addClass('active');
          }
        }
      });
      $('.sidebar .dropdown-menu a').on('click', function (e) {
        e.preventDefault();

        resetSidebarActiveStates(); 

        $(this).addClass('active');

        var $parentWrapper = $(this).closest('.booking-wrapper');
        $parentWrapper.addClass('open active');

        var targetContentId = $(this).data('target');
        $('.content-section').removeClass('active');

        $('#' + targetContentId).addClass('active');
      });

      $('.sidebar .btn_area button[data-target="dashboard-content"]').trigger('click');

    });
  }
  changeContent()
  function uploadFile(){
    $(document).ready(function () {
      $('#customUploadButton').on('click', function () {
        $('#logoUpload').trigger('click');
      });

      $('#logoUpload').on('change', function () {
        const fileName = $(this).val().split('\\').pop(); 
        const fileNameDisplay = $('#fileNameDisplay');

        if (fileName) {
          fileNameDisplay.text(fileName); 
          fileNameDisplay.css('color', '#333'); 
        } else {
          fileNameDisplay.text('Maximum File Size: 2 Mb'); 
          fileNameDisplay.css('color', '#666'); 
        }
      });
    });
  }
  uploadFile()
  function dragDrop(){
      const $uploadArea = $('#uploadArea');
      const $fileInput = $('#fileInput');
      const $imagePreviews = $('#imagePreviews');
      let uploadedFiles = []; 

      $uploadArea.on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass('drag-over');
      });

      $uploadArea.on('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass('drag-over');
      });

      $uploadArea.on('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass('drag-over');

        const files = e.originalEvent.dataTransfer.files;
        handleFiles(files);
      });

      $fileInput.on('change', function () {
        const files = this.files;
        handleFiles(files);
      });

      function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          if (!file.type.startsWith('image/')) {
            alert('Only image files are allowed!');
            continue;
          }

          const isDuplicate = uploadedFiles.some(
            (existingFile) => existingFile.name === file.name && existingFile.size === file.size
          );
          if (isDuplicate) {
            console.warn(`Duplicate file skipped: ${file.name}`);
            continue;
          }

          uploadedFiles.push(file);
          renderImagePreview(file);
        }
      }

      function renderImagePreview(file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const imageUrl = e.target.result;
          const $imageItem = $(`
                  <div class="image-item" data-filename="${file.name}">
                      <img src="${imageUrl}" alt="${file.name}">
                      <div class="overlay">
                          <i class="fas fa-star action-icon set-featured" title="Set Featured"></i>
                          <i class="fas fa-trash-alt action-icon remove-image" title="Remove Image"></i>
                      </div>
                  </div>
              `);

          if (uploadedFiles.length === 1) {
            $imageItem.addClass('featured');
            $imageItem.append('<span class="featured-badge">Featured</span>');
          }

          $imagePreviews.append($imageItem);

          $imageItem.attr('draggable', 'true');
        };

        reader.readAsDataURL(file);
      }

      $imagePreviews.on('click', '.set-featured', function () {
        const $currentItem = $(this).closest('.image-item');

        $imagePreviews.find('.image-item').removeClass('featured');
        $imagePreviews.find('.featured-badge').remove();

        $currentItem.addClass('featured');
        $currentItem.append('<span class="featured-badge">Featured</span>');
      });

      $imagePreviews.on('click', '.remove-image', function () {
        const $currentItem = $(this).closest('.image-item');
        const fileNameToRemove = $currentItem.data('filename');

        uploadedFiles = uploadedFiles.filter(file => file.name !== fileNameToRemove);
        $currentItem.remove();

        if ($currentItem.hasClass('featured') && uploadedFiles.length > 0) {
          $imagePreviews.find('.image-item:first').addClass('featured').append('<span class="featured-badge">Featured</span>');
        } else if (uploadedFiles.length === 0) {
          $imagePreviews.find('.image-item').removeClass('featured').find('.featured-badge').remove();
        }
      });

      let dragSrcEl = null;

      $imagePreviews.on('dragstart', '.image-item', function (e) {
        $(this).css('opacity', '0.4');
        dragSrcEl = this;
        e.originalEvent.dataTransfer.effectAllowed = 'move';
        e.originalEvent.dataTransfer.setData('text/html', this.innerHTML);
      });

      $imagePreviews.on('dragenter', '.image-item', function (e) {
        e.preventDefault();
        $(this).addClass('over');
      });

      $imagePreviews.on('dragleave', '.image-item', function () {
        $(this).removeClass('over');
      });

      $imagePreviews.on('dragover', '.image-item', function (e) {
        e.preventDefault();
        e.originalEvent.dataTransfer.dropEffect = 'move';
        return false;
      });

      $imagePreviews.on('drop', '.image-item', function (e) {
        e.stopPropagation();
        $(this).removeClass('over');

        if (dragSrcEl !== this) {
          const dragSrcHtml = dragSrcEl.innerHTML;
          const dropTargetHtml = this.innerHTML;

          const $dragSrc = $(dragSrcEl);
          const $dropTarget = $(this);

          $dragSrc.html(dropTargetHtml).removeClass('featured').find('.featured-badge').remove();
          $dropTarget.html(dragSrcHtml).removeClass('featured').find('.featured-badge').remove();

          if ($(dragSrcEl).hasClass('featured-original')) { 
            $dropTarget.addClass('featured').append('<span class="featured-badge">Featured</span>');
          } else if ($(this).hasClass('featured-original')) { 
            $dragSrc.addClass('featured').append('<span class="featured-badge">Featured</span>');
          }
          $imagePreviews.find('.image-item').removeClass('featured-original');

          reorderUploadedFiles();
        }
        return false;
      });

      $imagePreviews.on('dragend', '.image-item', function () {
        $(this).css('opacity', '1');
        $imagePreviews.find('.image-item').removeClass('over');
      });

      function reorderUploadedFiles() {
        const reorderedFiles = [];
        $imagePreviews.find('.image-item').each(function () {
          const fileName = $(this).data('filename');
          const file = uploadedFiles.find(f => f.name === fileName);
          if (file) {
            reorderedFiles.push(file);
          }
        });
        uploadedFiles = reorderedFiles;
        console.log("Files reordered:", uploadedFiles.map(f => f.name));
      }
      

  }
  dragDrop()
  function describTion(){
      $('.toolbar-button').on('click', function () {
        var command = $(this).data('command');
        executeCommand(command);
      });

      $('.formats-dropdown-content a').on('click', function (e) {
        e.preventDefault(); 
        var command = $(this).data('command');
        var value = $(this).data('value');
        executeCommand(command, value);
      });

      function executeCommand(command, value) {
        if (command === 'createLink') {
          var url = prompt('Enter the URL:');
          if (url) {
            document.execCommand(command, false, url);
          }
        } else {
          document.execCommand(command, false, value);
        }
        $('.editor-content').focus();
      }
    
  }
  describTion()
  function manageAds(){
    $(document).ready(function () {
      $('.create-new-campaign-btn').on('click', function () {
        alert('Create New Campaign button clicked!');
      });
      $('.submit-ad-btn').on('click', function () {
        alert('Submit Your Ad button clicked!');
        const searchListing = $('input[placeholder="Search For A Listing"]').val();
        const payPerView = $('input[placeholder="Pay per View"]').val();
        const date = $('input[placeholder="YYYY-MM-DD"]').val();
        const budget = $('input[placeholder="Budget"]').val();
        const category = $('input[placeholder="Choose Category"]').val();
        const region = $('input[placeholder="Choose Region"]').val();
        const location = $('.location-dropdown').val();
        const enableLoggedInUsers = $('.enable-logged-in-users input[type="checkbox"]').prop('checked');

        console.log({
          searchListing,
          payPerView,
          date,
          budget,
          category,
          region,
          location,
          enableLoggedInUsers
        });
      });
      $('input[placeholder="YYYY-MM-DD"]').on('change', function () {
        const dateValue = $(this).val();
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        if (dateValue && !datePattern.test(dateValue)) {
        }
      });
    });
  }
  manageAds()
  // Slick Carousel - Logo Section
  $('.logo-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 2,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]
  });
  $('.inner_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    initialSlide: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
  $('.inner_slider2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    initialSlide: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
  $('.inner_slider3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    initialSlide: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
  $('.post-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    speed: 2000,
    easing: 'ease-in-out',
  });


})(jQuery);



