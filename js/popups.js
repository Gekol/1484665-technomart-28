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

document.querySelectorAll(".modal-close").forEach(element => {
    element.addEventListener("click", function (event) {
        event.target.parentNode.parentNode.classList.toggle("visually-hidden");
    });
})

let leaveFeedbackButton = document.querySelector(".leave-feedback-show");

if (leaveFeedbackButton) {
    leaveFeedbackButton.addEventListener("click", function (event) {
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
    element.addEventListener("click", function (event) {
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
    element.addEventListener("click", function (event) {
        bookmarks += 1;
        if (isStorageSupport) {
            localStorage.setItem("bookmarks", bookmarks);
        }
        document.querySelector(".bookmark span").innerHTML = "Закладки: " + bookmarks;
        document.querySelector(".bookmark").classList.add("bought");
    })
});

let leftArrow = document.querySelector(".leftArrow");

function leftArrowClick(event) {
    let currentElem = document.querySelector(".opened");
    let slide = document.querySelector(".slides .perforators:not(.visually-hidden)");
    if (currentElem != currentElem.parentNode.firstElementChild) {
        let prev = document.querySelector(".opened").previousElementSibling;
        currentElem.classList.toggle("opened");
        prev.classList.toggle("opened");
        slide.previousElementSibling.classList.toggle("visually-hidden");
        slide.classList.toggle("visually-hidden");
    }
}

if (leftArrow) {
    leftArrow.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            leftArrowClick(event)
        }
    })
    leftArrow.addEventListener("click", leftArrowClick);
}

function rightArrowClick(event) {
    let currentElem = document.querySelector(".opened");
    let slide = document.querySelector(".slides .perforators:not(.visually-hidden)");
    if (currentElem != currentElem.parentNode.lastElementChild) {
        let next = document.querySelector(".opened").nextElementSibling;
        currentElem.classList.toggle("opened");
        next.classList.toggle("opened");
        slide.nextElementSibling.classList.toggle("visually-hidden");
        slide.classList.toggle("visually-hidden");
    }
}

let rightArrow = document.querySelector(".rightArrow");
if (rightArrow) {
    rightArrow.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            rightArrowClick(event);
        }
    });
    rightArrow.addEventListener("click", rightArrowClick);
}

function changeSlide(event, index) {
    let slides = document.querySelectorAll(".perforators");
    slides.forEach((currentSlide, currentIndex) => {
        if (currentIndex == index) {
            currentSlide.classList.remove("visually-hidden");
        } else {
            currentSlide.classList.add("visually-hidden");
        }
    });

    sliderButtons.forEach(currentButton => {
        currentButton.classList.remove("opened");
    });
    event.target.classList.add("opened");
}

let sliderButtons = document.querySelectorAll(".slider-page");
if (sliderButtons) {
    sliderButtons.forEach((element, index) => {
        element.addEventListener("keypress", function (event) {
            if (event.keyCode == 13) {
                changeSlide(event, index);
            }
        })
        element.addEventListener("click", function(event) {
            changeSlide(event, index);
        });
    });
}

document.querySelectorAll(".service-button").forEach((element, index) => {
    element.addEventListener("click", function (event) {
        document.querySelectorAll(".service-button").forEach(currentButton => {
            currentButton.disabled = false;
        })
        element.disabled = true;
        let currentElem = document.querySelector(".service-detail:not(.visually-hidden)");
        currentElem.classList.toggle("visually-hidden");
        document.querySelectorAll(".service-detail")[index].classList.toggle("visually-hidden");
    })
});

document.querySelector(".search input").addEventListener("focus", function (event) {
    document.querySelector(".search-block").style.backgroundColor = "#FFFFFF";
    event.target.parentNode.children[0].classList.toggle("visually-hidden");
    event.target.parentNode.children[1].classList.toggle("visually-hidden");
});

document.querySelector(".search input").addEventListener("blur", element => {
    document.querySelector(".search-block").style.backgroundColor = "#293449";
    event.target.parentNode.children[0].classList.toggle("visually-hidden");
    event.target.parentNode.children[1].classList.toggle("visually-hidden");
});

let miniMap = document.querySelector(".mini-map");

function showMap(event) {
    if (event.keyCode == 13 || event.button == 0) {
        document.querySelector(".interactive-map-block").classList.toggle("visually-hidden");
    }
}

if (miniMap) {
    miniMap.addEventListener("click", showMap);
    miniMap.addEventListener("keypress", showMap)
}

let feedbackForm = document.querySelector(".write-us");
if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.querySelector(".user_name").value;
        let strings = name.split(" ");
        let alphabet = /(а|б|в|г|д|е|ж|з|и|ё|й|ц|у|к|г|н|ш|щ|з|х|ъ|ф|ы|п|р|о|л|э|я|ч|с|м|и|т|ь|б|ю)+/
        if (!(strings.length == 2 && strings[0].length > 0 && strings[1].toLowerCase().length > 0 && strings[0].match(alphabet) && strings[1].toLowerCase().match(alphabet))) {
            alert("Incorrect name");
        }
    })
}

document.querySelectorAll(".manufacturer-filter label").forEach(element => {
    element.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            event.target.previousElementSibling.checked = !event.target.previousElementSibling.checked;
        }
    })
})

document.querySelectorAll(".accumulator-filter label").forEach(element => {
    element.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            event.target.previousElementSibling.checked = true;
        }
    })
})