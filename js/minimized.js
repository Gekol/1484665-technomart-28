let isStorageSupport=!0,goods="",bookmarks="";try{null==(goods=localStorage.getItem("goods"))?(goods=0,localStorage.setItem("goods",goods)):goods=parseInt(goods),null==(bookmarks=localStorage.getItem("bookmarks"))?(bookmarks=0,localStorage.setItem("bookmarks",bookmarks)):bookmarks=parseInt(bookmarks)}catch(e){isStorageSupport=!1}document.querySelectorAll(".modal-close").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),e.target.parentNode.parentNode.classList.toggle("visually-hidden"),e.target.parentNode.parentNode.classList.remove("modal-error")})});let leaveFeedbackButton=document.querySelector(".leave-feedback-show");leaveFeedbackButton&&leaveFeedbackButton.addEventListener("click",function(e){e.preventDefault(),document.querySelector(".leave-feedback.visually-hidden").classList.toggle("visually-hidden")});let buyButtons=document.querySelectorAll(".buy-button"),bookmarkButtons=document.querySelectorAll(".add-bookmark");document.querySelector(".bookmark a").innerHTML="Закладки: "+bookmarks,document.querySelector(".cart a").innerHTML="Корзина: "+goods,bookmarks>0&&document.querySelector(".bookmark").classList.add("bought"),goods>0&&document.querySelector(".cart").classList.add("bought"),buyButtons.forEach(e=>{e.addEventListener("click",function(e){let t=document.querySelector(".item-added-block");t&&t.classList.toggle("visually-hidden"),goods+=1,isStorageSupport&&localStorage.setItem("goods",goods),document.querySelector(".cart a").innerHTML="Корзина: "+goods,document.querySelector(".cart").classList.add("bought")})}),bookmarkButtons.forEach(e=>{e.addEventListener("click",function(e){bookmarks+=1,isStorageSupport&&localStorage.setItem("bookmarks",bookmarks),document.querySelector(".bookmark span").innerHTML="Закладки: "+bookmarks,document.querySelector(".bookmark").classList.add("bought")})});let leftArrow=document.querySelector(".leftArrow");function leftArrowClick(e){e.preventDefault();let t=document.querySelector(".opened"),o=document.querySelector(".slides .perforators:not(.visually-hidden)");if(t!=t.parentNode.firstElementChild){let e=document.querySelector(".opened").previousElementSibling;t.classList.toggle("opened"),e.classList.toggle("opened"),o.previousElementSibling.classList.toggle("visually-hidden"),o.classList.toggle("visually-hidden")}}function rightArrowClick(e){e.preventDefault();let t=document.querySelector(".opened"),o=document.querySelector(".slides .perforators:not(.visually-hidden)");if(t!=t.parentNode.lastElementChild){let e=document.querySelector(".opened").nextElementSibling;t.classList.toggle("opened"),e.classList.toggle("opened"),o.nextElementSibling.classList.toggle("visually-hidden"),o.classList.toggle("visually-hidden")}}leftArrow&&(leftArrow.addEventListener("keypress",function(e){13==e.keyCode&&leftArrowClick(e)}),leftArrow.addEventListener("click",leftArrowClick));let rightArrow=document.querySelector(".rightArrow");function changeSlide(e,t){let o=document.querySelectorAll(".perforators"),r=document.querySelectorAll(".slide-title");o.forEach((e,o)=>{let l=r[o];o==t?(e.classList.remove("visually-hidden"),l.classList.remove("visually-hidden")):(e.classList.add("visually-hidden"),l.classList.add("visually-hidden"))}),sliderButtons.forEach(e=>{e.classList.remove("opened")}),e.target.classList.add("opened")}rightArrow&&(rightArrow.addEventListener("keypress",function(e){13==e.keyCode&&rightArrowClick(e)}),rightArrow.addEventListener("click",rightArrowClick));let sliderButtons=document.querySelectorAll(".slider-page");sliderButtons&&sliderButtons.forEach((e,t)=>{e.addEventListener("keypress",function(e){13==e.keyCode&&changeSlide(e,t)}),e.addEventListener("click",function(e){changeSlide(e,t)})}),document.querySelectorAll(".service-button").forEach((e,t)=>{e.addEventListener("click",function(o){document.querySelectorAll(".service-button").forEach(e=>{e.disabled=!1}),e.disabled=!0;let r=document.querySelectorAll(".service-detail");r.forEach(e=>{e.parentElement.classList.add("visually-hidden")}),r[t].parentNode.classList.remove("visually-hidden")})}),document.querySelector(".search input").addEventListener("focus",function(e){document.querySelector(".search-block").style.backgroundColor="#FFFFFF"}),document.querySelector(".search input").addEventListener("blur",e=>{document.querySelector(".search-block").style.backgroundColor="#293449"});let miniMap=document.querySelector(".mini-map-block");function showMap(e){console.log(e.target),console.log(e.keyCode),console.log(e.button),13!=e.keyCode&&0!=e.button||(e.preventDefault(),document.querySelector(".interactive-map-block").classList.toggle("visually-hidden"))}miniMap&&(miniMap.addEventListener("click",showMap),miniMap.addEventListener("keypress",showMap));let feedbackForm=document.querySelector(".write-us");feedbackForm&&feedbackForm.addEventListener("submit",function(e){e.preventDefault();let t=document.querySelector(".user_name").value.split(" "),o=/(а|б|в|г|д|е|ж|з|и|ё|й|ц|у|к|г|н|ш|щ|з|х|ъ|ф|ы|п|р|о|л|э|я|ч|с|м|и|т|ь|б|ю)+/;2==t.length&&t[0].length>0&&t[1].toLowerCase().length>0&&t[0].match(o)&&t[1].toLowerCase().match(o)?feedbackForm.classList.remove("modal-error"):(feedbackForm.parentElement.classList.remove("modal-error"),feedbackForm.parentElement.offsetWidth=feedbackForm.parentElement.offsetWidth,feedbackForm.parentElement.classList.add("modal-error"),alert("Incorrect name"))}),document.querySelectorAll(".manufacturer-filter label").forEach(e=>{e.addEventListener("keypress",function(e){13==e.keyCode&&(e.target.previousElementSibling.checked=!e.target.previousElementSibling.checked)})}),document.querySelectorAll(".accumulator-filter label").forEach(e=>{e.addEventListener("keypress",function(e){13==e.keyCode&&(e.target.previousElementSibling.checked=!0)})});