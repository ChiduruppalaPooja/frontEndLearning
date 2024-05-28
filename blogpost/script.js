

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}

function shareOnWhatsApp() {
    var urlToShare = encodeURIComponent(window.location.href);
    var whatsappShareLink = 'https://web.whatsapp.com/send?text=' + urlToShare;
    window.open(whatsappShareLink, '_blank');
}
function shareOnFacebook() {
    var urlToShare = encodeURIComponent(window.location.href);
    var facebookShareLink = 'https://www.facebook.com/sharer/sharer.php?u=' + urlToShare;
    window.open(facebookShareLink, '_blank');
}
function shareOnTwitter() {
    var urlToShare = encodeURIComponent(window.location.href);
    var twitterShareLink = 'https://twitter.com/intent/tweet?url=' + urlToShare;
    window.open(twitterShareLink, '_blank');
}




  document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.getElementById('searchIcon');
    var searchPopup = document.getElementById('searchPopup');
    
    searchIcon.addEventListener('click', function() {
        searchPopup.style.display = searchPopup.style.display === 'block' ? 'none' : 'block';
        
        if (window.innerWidth <= 1170) {
        var iconRect = searchIcon.getBoundingClientRect();
        var popupWidth = searchPopup.offsetWidth;
        var viewportWidth = window.innerWidth;
        var popupLeft = iconRect.left + (iconRect.width - popupWidth) / 2;


        if (popupLeft < 0) {
            popupLeft = 0;
        } else if (popupLeft + popupWidth > viewportWidth) {
            popupLeft = viewportWidth - popupWidth;
        }

        searchPopup.style.left = popupLeft + 'px';
        searchPopup.style.top = iconRect.bottom + 10 + 'px';
    }
    });
});

// document.getElementsByClassName('content').addEventListener('click', function() {
//     document.getElementById('trending-topics').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

var contentElements = document.getElementsByClassName('content');
for (var i = 0; i < contentElements.length; i++) {
    contentElements[i].addEventListener('click', function() {
        document.getElementById('trending-topics').scrollIntoView({
            behavior: 'smooth'
        });
    });
}











