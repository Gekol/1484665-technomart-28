let isStorageSupport = true;
let goods = "";
let bookmarks = "";

try {
    goods = localStorage.getItem("goods");
    if (goods == null) {
        goods = 0;
        localStorage.setItem("goods", goods);
    } else {
        goods = parseInt(goods);
    }

    bookmarks = localStorage.getItem("bookmarks");
    if (bookmarks == null) {
        bookmarks = 0;
        localStorage.setItem("bookmarks", bookmarks);
    } else {
        bookmarks = parseInt(bookmarks);
    }
} catch (err) {
    isStorageSupport = false;
}

document.querySelector(".modal-close").addEventListener("click", function(event) {
    event.target.parentNode.parentNode.classList.toggle("visually-hidden");
});

let leaveFeedbackButton = document.querySelector(".leave-feedback-show");

if (leaveFeedbackButton) {
    leaveFeedbackButton.addEventListener("click", function(event) {
        document.querySelector(".leave-feedback.visually-hidden").classList.toggle("visually-hidden");
    });
}

let buyButtons = document.querySelectorAll(".buy-button");
let bookmarkButtons = document.querySelectorAll(".add-bookmark");

document.querySelector(".bookmark span").innerHTML = "Закладки: " + bookmarks;
document.querySelector(".cart span").innerHTML = "Корзина: " + goods;

if (bookmarks > 0) {
    document.querySelector(".bookmark").classList.add("bought");
}
if (goods > 0) {
    document.querySelector(".cart").classList.add("bought");
}

buyButtons.forEach(element => {
    element.addEventListener("click", function(event) {
        let boughtBlock = document.querySelector(".item-added-block");
        if (boughtBlock) {
            boughtBlock.classList.toggle("visually-hidden");
        }
        goods += 1;
        if (isStorageSupport) {
            localStorage.setItem("goods", goods);
        }
        document.querySelector(".cart span").innerHTML = "Корзина: " + goods;
        document.querySelector(".cart").classList.add("bought");
    })
});

bookmarkButtons.forEach(element => {
    element.addEventListener("click", function(event) {
        bookmarks += 1;
        if (isStorageSupport) {
            localStorage.setItem("bookmarks", bookmarks);
        }
        document.querySelector(".bookmark span").innerHTML = "Закладки: " + bookmarks;
        document.querySelector(".bookmark").classList.add("bought");
    })
});

let leftArrow = document.querySelector(".leftArrow");

if (leftArrow) {
    leftArrow.addEventListener("click", function(event) {
        let currentElem = document.querySelector(".opened");
        let slide = document.querySelector(".slides .perforators:not(.visually-hidden)");
        if (currentElem != currentElem.parentNode.firstElementChild) {
            let prev = document.querySelector(".opened").previousElementSibling;
            currentElem.classList.toggle("opened");
            prev.classList.toggle("opened");
            slide.previousElementSibling.classList.toggle("visually-hidden");
            slide.classList.toggle("visually-hidden");
        }
    });
}

let rightArrow = document.querySelector(".rightArrow");
if (rightArrow) {
    rightArrow.addEventListener("click", function(event) {
        let currentElem = document.querySelector(".opened");
        let slide = document.querySelector(".slides .perforators:not(.visually-hidden)");
        if (currentElem != currentElem.parentNode.lastElementChild) {
            let next = document.querySelector(".opened").nextElementSibling;
            currentElem.classList.toggle("opened");
            next.classList.toggle("opened");
            slide.nextElementSibling.classList.toggle("visually-hidden");
            slide.classList.toggle("visually-hidden");
        }
    });    
}

let sliderButtons = document.querySelectorAll(".slider-page");
if (sliderButtons) {
    sliderButtons.forEach((element, index) => {
        element.addEventListener("click", function(event) {
            let slides = document.querySelectorAll(".perforators");
            slides.forEach((currentSlide, currentIndex) => {
                if (currentIndex == index) {
                    currentSlide.classList.remove("visually-hidden");
                } else {
                    currentSlide.classList.add("visually-hidden");
                }
            });
            
            sliderButtons.forEach(currentButton => {
                console.log(currentButton);
                currentButton.classList.remove("opened");
            });
            element.classList.add("opened");
        })
    });
}

document.querySelectorAll(".service-button").forEach((element, index) => {
    element.addEventListener("click", function(event) {
        document.querySelectorAll(".service-button").forEach(currentButton => {
            currentButton.disabled = false;
        })
        element.disabled = true;
        let currentElem = document.querySelector(".service-detail:not(.visually-hidden)");
        currentElem.classList.toggle("visually-hidden");
        document.querySelectorAll(".service-detail")[index].classList.toggle("visually-hidden");
    })
});

document.querySelector(".search input").addEventListener("focus", function(event) {
    document.querySelector(".search-block").style.backgroundColor = "#FFFFFF";
    event.target.parentNode.children[0].classList.toggle("visually-hidden");
    event.target.parentNode.children[1].classList.toggle("visually-hidden");
});

document.querySelector(".search input").addEventListener("blur", element => {
    document.querySelector(".search-block").style.backgroundColor = "#293449";
    event.target.parentNode.children[0].classList.toggle("visually-hidden");
    event.target.parentNode.children[1].classList.toggle("visually-hidden");
});

document.querySelector(".mini-map").addEventListener("click", function(event) {
    document.querySelector(".interactive-map-block").classList.toggle("visually-hidden");
});