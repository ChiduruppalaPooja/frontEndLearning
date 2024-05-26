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

    var goBackDiv = document.querySelector('.go-back');
    
    goBackDiv.addEventListener('click', function() {
      window.location.href = 'homepage.html';
    });
  });

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


  document.addEventListener("DOMContentLoaded", function() {
    var pagination = document.querySelector('.pagination');
    var prevButton = pagination.querySelector('.prev');
    var nextButton = pagination.querySelector('.next');
    var ellipsis = pagination.querySelector('.ellipsis');
    var pageLinks = Array.from(pagination.querySelectorAll('.page'));
    var totalPages = 10; 
    var visiblePages = 5; 
    var currentPageSet = 0;
    var currentPage = 1;

   
    function renderPages(startPage) {
        var endPage = startPage + visiblePages - 1;

        pageLinks.forEach((pageLink, index) => {
            if (index < visiblePages && startPage + index <= totalPages) {
                pageLink.textContent = startPage + index;
                pageLink.style.display = 'inline-block';
            } else {
                pageLink.style.display = 'none';
            }
        });

        
        if (endPage < totalPages - 1) {
            ellipsis.style.display = 'inline-block';
        } else {
            ellipsis.style.display = 'none';
        }

        
        if (endPage < totalPages - 1) {
            pageLinks[pageLinks.length - 1].style.display = 'inline-block';
            pageLinks[pageLinks.length - 1].textContent = totalPages;
        } else {
            pageLinks[pageLinks.length - 1].style.display = 'none';
        }

        pageLinks.forEach(pageLink => pageLink.classList.remove('active'));
        if (currentPage >= startPage && currentPage <= endPage) {
            pageLinks[currentPage - startPage].classList.add('active');
        } else if (currentPage === totalPages) {
            pageLinks[pageLinks.length - 1].classList.add('active');
        }
    }

    renderPages(1);


    pageLinks.forEach(function(pageLink) {
        pageLink.addEventListener('click', function(event) {
            event.preventDefault();
            currentPage = parseInt(this.textContent);
            renderPages(currentPageSet + 1);
        });
    });


    ellipsis.addEventListener('click', function(event) {
        event.preventDefault();
        currentPageSet += visiblePages;
        if (currentPageSet + visiblePages >= totalPages) {
            currentPageSet = totalPages - visiblePages;
        }
        renderPages(currentPageSet + 1);
    });


    prevButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            if (currentPage < currentPageSet + 1) {
                currentPageSet -= visiblePages;
                if (currentPageSet < 0) currentPageSet = 0;
            }
            renderPages(currentPageSet + 1);
        }
    });

    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            if (currentPage > currentPageSet + visiblePages) {
                currentPageSet += visiblePages;
            }
            renderPages(currentPageSet + 1);
        }
    });
});



const slider = document.querySelector('.slider');

slider.addEventListener('input', function() {
    const newSize = this.value;
    console.log(newSize);
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (!element.classList.contains('group-1-technology') && !element.classList.contains('submit-text') && !element.classList.contains('email')) {
            element.style.fontSize = `${newSize}px`;
        }
    });
});
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

