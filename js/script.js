//navbar animation
window.onscroll = function () {
    style = document.getElementById("navbar").style;
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        style.width = "80%";
        style.borderRadius = "0px 0px 20px 20px";
        style.boxShadow = "0px 1px 15px 12px rgba(0, 0, 0, 0.09)";
    }
    else {
        style.width = "100%";
        style.borderRadius = "0px 0px 0px 0px";
        style.boxShadow = "none";
    }
};

//new page
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log("entry")
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        }
        else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('show');
        }
    })
})

//dropdown
const dd = document.querySelector('.nav-dropdown');
const ddd = document.querySelectorAll('.dropdown-lists');
const cb = document.getElementById('checkbox_toggle');
const sec = document.querySelectorAll('.section');

cb.addEventListener("click", (event) => {
    if(!event.currentTarget.checked) {
        dd.style.display = "none";
    };
});

cb.addEventListener("click", (event) => {
    if (event.currentTarget.checked) {
        dd.style.display = "block";
    }
});

// theme
const btntheme = document.querySelector('.change');
const imglogo = document.querySelector('.logoimg');
let handledClick = true;

btntheme.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    if (handledClick) {
        imglogo.style.filter = "brightness(0) invert(1)";
    } 
    else {
        imglogo.style.filter = "brightness(0)";
    }
    handledClick = !handledClick;
})
//loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});
//scroll up
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}