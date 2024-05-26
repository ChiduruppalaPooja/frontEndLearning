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
