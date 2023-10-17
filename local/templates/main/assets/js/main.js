document.addEventListener("DOMContentLoaded", ()=> {
    let header = document.querySelector('.header');
    window.addEventListener('scroll', ()=> {
        if(window.pageYOffset > 50) {
            header.classList.add('header-active')
        }
        else {
            header.classList.remove('header-active')
        }
    });
    function toggleClassActive(elem) {
        elem.classList.toggle('active')
    }
    if(document.querySelector('.menu-burger-btn')) {
        let btnBurger = document.querySelector('.menu-burger-btn');
        let menuList = document.querySelector('.menu-list');
        let phone  = document.querySelector('.menu__phone') 

        btnBurger.addEventListener('click',()=> {
            toggleClassActive(btnBurger);
            toggleClassActive(menuList);
            toggleClassActive(phone)
        });

    }
    if(document.querySelector('.about-us-slider')) {
        let swiper1 = new Swiper('.about-us-slider', {
            slidesPerView:4,
            spaceBetween: 20,
            watchSlidesProgress: true,
            speed: 1000,
            loop: false,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            breakpoints: {
                1441: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                1281: {
                    slidesPerView:3.5,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView:3,
                    spaceBetween: 20,
                },
                1001: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1000: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                769: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                569:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                568: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                481: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                400: {
                    slidesPerView: 1.25,
                    spaceBetween: 10,
                },
                375: {
                    slidesPerView: 1.3,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            },
        });
        let swiper4 = new Swiper('.about-us-dialog__slider', {
            slidesPerView:1,
            spaceBetween: 0,
            effect: 'fade',
            fadeEffect: {
              crossFade: true
            },
            thumbs: {
                swiper: swiper1,
            },
            navigation: {
                nextEl: '.swiper-button-next-two',
                prevEl: '.swiper-button-prev-two',
            },
        });
    };
    if(document.querySelector('.projects-slider')) {
        let dialog = document.querySelector('.projects-dialog')
        let slide = document.querySelectorAll('.projects-slide');
        let buttonCLose = document.querySelector('.projects-dialog__btn-close')
        slide.forEach((e) => {
            e.addEventListener('click', ()=> {
                dialog.classList.add('open');
            });
        })
        buttonCLose.addEventListener('click', ()=> {
            dialog.classList.remove('open')
        });
        const swiper2 = new Swiper('.projects-slider', {
            slidesPerView:3,
            spaceBetween: 20,
            speed: 1000,
            loop: false,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            breakpoints: {
                1201: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1101: {
                    slidesPerView:2.5,
                    spaceBetween: 20,
                },
                1100: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                568: {
                    slidesPerView:1.5,
                    spaceBetween: 20,
                },
                481: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                400: {
                    slidesPerView: 1.25,
                    spaceBetween: 13,
                },
                375: {
                    slidesPerView: 1.3,
                    spaceBetween: 13,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 13,
                }
            }
        });
        let swiper5 = new Swiper('.projects-dialog__slider', {
            slidesPerView:1,
            spaceBetween: 0,
            effect: 'fade',
            fadeEffect: {
              crossFade: true
            },
            thumbs: {
                swiper: swiper2,
            },
            navigation: {
                nextEl: '.swiper-button-next-three',
                prevEl: '.swiper-button-prev-three',
            },
        });
    };
    if(document.querySelector('.news-slider')) {
        const swipe3 = new Swiper('.news-slider', {
            slidesPerView:3,
            spaceBetween: 20,
            speed: 1000,
            loop: false,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            breakpoints: {
                1201: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1101: {
                    slidesPerView:2.5,
                    spaceBetween: 20,
                },
                1100: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                568: {
                    slidesPerView:1.5,
                    spaceBetween: 20,
                },
                481: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                400: {
                    slidesPerView: 1.25,
                    spaceBetween: 11,
                },
                375: {
                    slidesPerView: 1.3,
                    spaceBetween: 11,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 11,
                }
            }
        });
    };
    if(document.querySelector('.about-us__slide')) {
        let slide = document.querySelectorAll('.about-us__slide');
        let dialog = document.querySelector('.about-us-dialog');
        let dialogCLose = document.querySelector('.about-us-dialog__btn-close')
        slide.forEach((e) => {
            e.addEventListener('click', ()=> {
                dialog.classList.add('open')
            });
        });
        dialogCLose.addEventListener('click', ()=> {
            dialog.classList.remove('open')
        });
    }
    if(document.querySelector('.about-us__slide') && document.querySelector('.projects-slider')) {
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape") {
                document.querySelector('.about-us-dialog').classList.remove('open');   
                document.querySelector('.projects-dialog').classList.remove('open');   
            }
        });
    }
    if(document.querySelector('.requisites__list')) {
      let text = document.querySelectorAll('.requisites__list li p');
        text.forEach((e) => {
            var copyTextarea = document.createElement("textarea");
            copyTextarea.style.position = "fixed";
            copyTextarea.style.opacity = "0";
            copyTextarea.style.width = "100%";
            copyTextarea.style.cursor = 'pointer'
            copyTextarea.textContent = e.textContent;
            e.append(copyTextarea)
            e.addEventListener('click', (event)=> {
                copyTextarea.select();
                document.execCommand("copy");
                e.classList.add('visability');
            })
        });
    }

    if(document.querySelector('.modal')) {
        console.log(321)
        let btnOpen = document.querySelector('.modal__open');
        let modal = document.querySelector('.modal');
        let btnClose = document.querySelector('.modal__close')

        btnOpen.addEventListener('click', ()=> {
            modal.classList.add('open')
        });

        btnClose.addEventListener('click', ()=> {
            modal.classList.remove('open')
        });
    }
});