function togglePopup() {
    var popup = document.getElementById('sharePopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

window.onclick = function(event) {
    var popup = document.getElementById('sharePopup');
    if (!event.target.matches('.share-icon')) {
        if (popup.style.display === 'block') {
            popup.style.display = 'none';
        }
    }
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}



  document.addEventListener("DOMContentLoaded", function() {
    var searchIcon = document.getElementById('searchIcon');
    var searchPopup = document.getElementById('searchPopup');

    searchIcon.addEventListener('click', function() {
        searchPopup.style.display = searchPopup.style.display === 'block' ? 'none' : 'block';

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
    });
});


  







