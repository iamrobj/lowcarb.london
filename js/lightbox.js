document.addEventListener("DOMContentLoaded", function() {
    function f(a) {
        g()
    }

    function g() {
        if (c.classList) c.classList.toggle(d);
        else {
            var a = c.className.split(" "),
                b = a.indexOf(d);
            b >= 0 ? a.splice(b, 1) : a.push(d), c.className = a.join(" ")
        }
    }

    function h(a) {
        a.preventDefault(), c.classList ? c.classList.remove(d) : c.className = c.className.replace(new RegExp("(^|\\b)" + d.split(" ").join("|") + "(\\b|$)", "gi"), " "), window.location.hash = "", history.pushState("", document.title, window.location.pathname)
    }
    var a = document.querySelectorAll(".lightbox_btn"),
        b = document.querySelector(".lightbox-close"),
        c = document.querySelector(".lightbox"),
        d = "show";
    b.addEventListener("click", h);
    for (var e = 0; e < a.length; e++) a[e].addEventListener("click", f)
});

