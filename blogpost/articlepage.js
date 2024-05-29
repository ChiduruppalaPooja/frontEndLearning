




const slider = document.querySelector('.slider');
let storedData = sessionStorage.getItem('postData');


if (storedData && storedData !== "undefined") {
    storedData = JSON.parse(storedData);
  
} else {
    
    storedData = sessionStorage.getItem('newdata');
    
   
    if (storedData && storedData !== "undefined") {
        storedData = JSON.parse(storedData);
    }
}
console.log(storedData);
const blogPosts = JSON.parse(sessionStorage.getItem('blogPosts'));

slider.addEventListener('input', function () {
    const newSize = this.value;
    console.log(newSize);
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (element.classList.contains('change')) {
            element.style.fontSize = `${newSize}px`;
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {

    var goBackDiv = document.querySelector('.go-back');

    goBackDiv.addEventListener('click', function () {
        window.location.href = 'home.html';
    });
});

function togglePopup() {
    var popup = document.getElementById('sharePopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

window.onclick = function (event) {
    var popup = document.getElementById('sharePopup');
    if (!event.target.matches('.share-icon')) {
        if (popup.style.display === 'block') {
            popup.style.display = 'none';
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {

    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function () {
        loadingScreen.style.display = 'flex';
    }, 10);

    if (storedData) {

        const title = storedData.title;
        document.getElementById('main-title').textContent = title;
        const id = storedData.id;
        console.log(id);
        console.log('Extracted ID:', id); 
        const currentUrl = window.location.href; 
        const newUrl = currentUrl.split('?')[0] + `?id=${id}`; 
        console.log('New URL:', newUrl);
        window.history.replaceState({}, '', newUrl); 
        const imageSrc = storedData.image;
        document.getElementById('main-img').src = imageSrc;

        const authorImage = storedData.authorImage;
        document.getElementById('authorImage').src = authorImage;

        const category = storedData.category;
        document.getElementById('category').textContent = category;

        const about = storedData.text;
        document.getElementById('about').textContent = about;

        const author = storedData.author;
        document.getElementById('author').textContent = author;

        const jobTitle = storedData.jobTitle;
        document.getElementById('jobTitle').textContent = jobTitle;

        const date = storedData.date;
        document.getElementById('date').textContent = date;

        const readTime = storedData.readTime;
        document.getElementById('readTime').textContent = readTime;

        const subheading = storedData.subheading;
        document.getElementById('subheading').textContent = subheading;

        const content = storedData.content;
        document.getElementById('content').textContent = content;
        setTimeout(function () {
            loadingScreen.style.display = 'none';
        }, 10);

    } else {
        console.log('No data found in sessionStorage.');
        setTimeout(function () {
            loadingScreen.style.display = 'none';
        }, 10);
    }
});



$(document).ready(function () {
    $('.category-link').on('click', function () {
        var category = $(this).data('category'); 

        var targetPost = $('.blogpost[data-category="' + category + '"]').first();

      
        if (targetPost.length) {
            
            $('html, body').animate({
                scrollTop: targetPost.offset().top
            }, 1000); 
        } else {
            window.location.href = 'home.html';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var searchIcon = document.getElementById('searchIcon');
    var searchPopup = document.getElementById('searchPopup');

    searchIcon.addEventListener('click', function () {
        searchPopup.style.display = searchPopup.style.display === 'block' ? 'block' : 'none';
        console.log(searchPopup.style.display);
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
    document.getElementById('searchButton').addEventListener('click', function () {
        console.log('searchInput');
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        console.log(searchInput);
        const matchingPosts = [];
        const blogPosts = JSON.parse(sessionStorage.getItem('blogPosts'));
        blogPosts.forEach(post => {
            if (post.title.toLowerCase().includes(searchInput) || post.content.toLowerCase().includes(searchInput)) {
                matchingPosts.push(post);
            }
        });

        showSearchResultsPopup(matchingPosts.slice(0, 5));
    });

    function showSearchResultsPopup(posts) {
        const popupContainer = document.createElement('div');
        popupContainer.className = 'search-results-popup';

        const resultList = document.createElement('ul');

        posts.forEach(post => {
            const listItem = document.createElement('li');
            const title = document.createElement('strong');
            title.textContent = post.title.trim(); // Use trim() to remove whitespace

           
            const content = document.createTextNode(": " + post.content.split(' ').slice(0, 5).join(' '));
            listItem.appendChild(title);
            listItem.appendChild(content);
            resultList.appendChild(listItem);


            listItem.addEventListener('click', function () {
                const postId = post.id;
                console.log(postId);
                const url = `https://chiduruppalapooja.github.io/frontEndLearning/blogpost/articlepage.html?id=${postId}`;

                window.location.href = url;
            });

        });


        popupContainer.appendChild(resultList);
        searchPopup.style.display = searchPopup.style.display === 'block' ? 'block' : 'none';

        const searchInput = document.getElementById('searchInput');
        searchInput.parentNode.appendChild(popupContainer);
    }
});

const category_to_show = storedData.category;

function filterAndLimitBlogPosts(blogPosts, category_to_show, limit) {
    return blogPosts.filter(post => post.category === category_to_show).slice(0, limit);
}

const relatedPosts = filterAndLimitBlogPosts(blogPosts, category_to_show, 2);
console.log('-----------');
console.log(relatedPosts);

function generateRelatedPostHTML(post) {
    return `
        <div class="blogpost">
            <div class="related-posts-frame">
            <img src="${post.image}" alt="" class="related-posts-img">
                <div class="info">
                    <div class="group-1">
                        <div class="group-1-rectangle">
                        <div class="group-1-technology" data-category="${post.category}">${post.category}</div>
                        </div>
                    </div>
                    <div class="related-frame">
                        <div class="details">
                            <div class="personal-detail">
                                <p class="name">${post.author}</p>
                                <div class="divider"></div>
                                <p class="name">${post.date}</p>
                                <div class="divider"></div>
                                <p class="name">${post.readTime} read</p>
                            </div>
                        </div>
                    </div>
                    <div class="frame-322">
                        <h3 class="related-posts-title">${post.title}</h3>
                        <p class="related-post-text">${post.content}</p>
                    </div>
                </div>
            </div>
        </div>`;
}

function appendRelatedPosts(relatedPosts, containerId) {
    const container = document.getElementById(containerId);
    relatedPosts.forEach(post => {
        const postHTML = generateRelatedPostHTML(post);
        container.innerHTML += postHTML;
    });
}

appendRelatedPosts(relatedPosts, 'posts-related');





// document.getElementsById('allLink').addEventListener('click', function() {
//     document.getElementById('trending-topics').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

var contentElements = document.getElementsByClassName('content');
for (var i = 0; i < contentElements.length; i++) {
    contentElements[i].addEventListener('click', function () {
        document.getElementById('posts-related').scrollIntoView({
            behavior: 'smooth'
        });
    });
}
