

const slider = document.querySelector('.slider');
let storedData = sessionStorage.getItem('postData');

//data extracting
if (storedData && storedData !== "undefined") {
    storedData = JSON.parse(storedData);

} else {
    storedData = sessionStorage.getItem('newdata');
    if (storedData && storedData !== "undefined") {
        storedData = JSON.parse(storedData);
    }
}


console.log(storedData);
var blogPosts = JSON.parse(sessionStorage.getItem('blogPosts'));

//fontsize
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


//go-back block
document.addEventListener("DOMContentLoaded", function () {

    var goBackDiv = document.querySelector('.go-back');

    goBackDiv.addEventListener('click', function () {
        window.location.href = 'home.html';
    });
});

//sharepopup
function togglePopup() {
    var popup = document.getElementById('sharePopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}


// window.onclick = function (event) {
//     var popup = document.getElementById('sharePopup');
//     if (!event.target.matches('.share-icon')) {
//         if (popup.style.display === 'block') {
//             popup.style.display = 'none';
//         }
//     }
// }


document.addEventListener('DOMContentLoaded', function () {
    //screen loading
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function () {
        loadingScreen.style.display = 'flex';
    }, 10);

    //the main articlebody
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




//related mosts filtering
const category_to_show = storedData.category;
const excludeId = storedData.id;
console.log(excludeId);
function filterAndLimitBlogPosts(blogPosts, category_to_show, excludeId, limit) {
    let filteredPosts = blogPosts.filter(post => post.category === category_to_show);
    filteredPosts = filteredPosts.filter(post => post.id !== excludeId);

    return filteredPosts.slice(0, limit);
}
const relatedPosts = filterAndLimitBlogPosts(blogPosts, category_to_show, excludeId, 2);
console.log('-----------');
console.log(relatedPosts);


//attaching related posts
function generateRelatedPostHTML(post) {
    return `
        <div class="blogpost trends" data-id="${post.id}">
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
    attachPostClickListenersToRelatedPosts();

}

function attachPostClickListenersToRelatedPosts() {
    const relatedPostElements = document.querySelectorAll(' .trends');
    console.log('attached')
    relatedPostElements.forEach(post => {
        console.log(post);
        post.addEventListener('click', function (event) {
            console.log('clicked');
            const postId = event.currentTarget.getAttribute('data-id');
            console.log(postId);
            const postData = blogPosts.find(post => post.id === parseInt(postId));
            sessionStorage.setItem('newdata', JSON.stringify(postData));


        });
    });
}
function attachPostClickListeners() {
    const postElements = document.querySelectorAll('.blogpost');
    postElements.forEach(post => {
        console.log('attached')
        post.addEventListener('click', handlePostClick);
    });
}
function handlePostClick(event) {
    const postId = event.currentTarget.id;
    const post = blogPosts.find(post => post.id === parseInt(postId));
    console.log(post);
    sessionStorage.setItem('postData', JSON.stringify(post));
    const url = `https://chiduruppalapooja.github.io/frontEndLearning/blogpost/articlepage.html?id=${postId}`;
    window.location.href = url;
}

appendRelatedPosts(relatedPosts, 'posts-related');
attachPostClickListeners();



//search-icon
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


    //search-button
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


    //searchResultDisplay
    function showSearchResultsPopup(posts) {
        const popupContainer = document.createElement('div');
        popupContainer.className = 'search-results-popup';

        const resultList = document.createElement('ul');
        if (posts.length === 0) {
            const noResultMessage = document.createElement('li');
            noResultMessage.textContent = 'No posts available';
            resultList.appendChild(noResultMessage);
        } else {
            posts.forEach(post => {
                const listItem = document.createElement('li');
                const title = document.createElement('strong');
                title.textContent = post.title.trim();

                const content = document.createTextNode(": " + post.content.split(' ').slice(0, 5).join(' '));
                listItem.appendChild(title);
                listItem.appendChild(content);
                resultList.appendChild(listItem);

                const postId = post.id;
                console.log(postId);
                listItem.addEventListener('click', function () {
                    const postId = post.id;
                    console.log('I am postId');
                    console.log(postId);
                    console.log(post);
                    handleSearcResultdh(post);
                });

            });
        }


        popupContainer.appendChild(resultList);
        searchPopup.style.display = searchPopup.style.display === 'block' ? 'block' : 'none';

        const searchInput = document.getElementById('searchInput');
        searchInput.parentNode.appendChild(popupContainer);

    }
    function handleSearcResultdh(post) {
        const postId = post.id;
        console.log('I am postId from function');
        console.log(postId);
        sessionStorage.setItem('postData', JSON.stringify(post));
        const url = `https://chiduruppalapooja.github.io/frontEndLearning/blogpost/articlepage.html?id=${postId}`;
        window.location.href = url;
    }


});


//top-bar scroll

$(document).ready(function () {
    $('.category-link').on('click', function () {
        var category = $(this).data('category');

        if (storedData.category === category) {
            var targetPost = $('.posts').first();
            if (targetPost.length) {
                $('html, body').animate({
                    scrollTop: targetPost.offset().top - 20
                }, 1000);
            } else {
                console.error("Target post element not found.");
            }
        } else {
            window.location.href = 'home.html';
            var targetPostAtHome = $('.blogpost[data-category="' + category + '"]').first();
            if (targetPostAtHome.length) {

                $('html, body').animate({
                    scrollTop: targetPostAtHome.offset().top - 20
                }, 1000);
            } else {
                window.location.href = 'home.html';
            }
        }
    });
});

//all
$(document).ready(function () {
    $('.all').on('click', function () {
        window.location.href = 'home.html';
    }
    
)});

//title
$(document).ready(function () {
    $('.title').on('click', function () {
        window.location.href = 'home.html';
    }
    
)});