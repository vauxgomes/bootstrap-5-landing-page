document.addEventListener("DOMContentLoaded", function (event) {
	
    // Nav scroll
    window.onscroll = function() {
        var e = document.getElementById('header');

        if (window.pageYOffset > 140) {
            e.classList.add('active');
        } else {
            e.classList.remove('active');
        }
    }
});
