document.addEventListener("DOMContentLoaded", function () {
    const postsPerPage = 6;
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    let currentPage = 1;

    function renderPosts(page) {
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = Math.min(startIndex + postsPerPage, blogPosts.length);
        const postsFrame = document.querySelector('.posts-frame-trending');

        postsFrame.innerHTML = '';

        for (let i = startIndex; i < endIndex; i++) {
            const post = blogPosts[i];
            const blogPostFrame = document.createElement('div');
            blogPostFrame.setAttribute('data-category', post.category);
            blogPostFrame.className = 'blogpost';
            blogPostFrame.id = post.id;
            const relatedPostsFrame = document.createElement('div');
            relatedPostsFrame.className = 'related-posts-frame';
            const img = document.createElement('img');
            img.className = 'related-posts-img';
            img.src = post.image;
            img.alt = 'Blog Post Image';
            const info = document.createElement('div');
            info.className = 'info';
            const rectangle = document.createElement('div');
            rectangle.className = 'group-1-rectangle';
            const category = document.createElement('div');
            category.className = 'group-1-technology';
            category.textContent = post.category;
            const profile = document.createElement('div');
            profile.className = 'profile-frame';
            const details = document.createElement('div');
            details.className = 'details';
            const personalDetail1 = document.createElement('div');
            personalDetail1.className = 'personal-detail';
            personalDetail1.innerHTML = `<p class="name">${post.author}</p><div class="divider"></div><p class="name">${post.jobTitle}</p><div class="divider"></div><p class="name">${post.readTime}</p>`;
            const personalDetail2 = document.createElement('div');
            personalDetail2.className = 'personal-detail';
            personalDetail2.innerHTML = `<p class="name">${post.date}</p><div class="divider"></div>`;
            const title = document.createElement('h3');
            title.className = 'related-posts-title';
            title.textContent = post.title;
            const text = document.createElement('p');
            text.className = 'related-post-text';
            text.textContent = post.text;

            details.appendChild(personalDetail1);
            details.appendChild(personalDetail2);
            profile.appendChild(details);
            rectangle.appendChild(category);
            info.appendChild(rectangle);
            info.appendChild(profile);
            info.appendChild(title);
            info.appendChild(text);
            relatedPostsFrame.appendChild(img);
            relatedPostsFrame.appendChild(info);
            blogPostFrame.appendChild(relatedPostsFrame);
            postsFrame.appendChild(blogPostFrame);
        }
    }

    function renderPagination() {
        const pagination = document.querySelector('.pagination');
        const prevButton = pagination.querySelector('.prev');
        const nextButton = pagination.querySelector('.next');
        const ellipsis = pagination.querySelector('.ellipsis');
        const pageLinks = Array.from(pagination.querySelectorAll('.page'));
        const visiblePages = 5;
        let currentPageSet = 0;

        function updatePageLinks(startPage) {
            const endPage = startPage + visiblePages - 1;
            pageLinks.forEach((pageLink, index) => {
                if (index < visiblePages && startPage + index <= totalPages) {
                    pageLink.textContent = startPage + index;
                    pageLink.style.display = 'inline-block';
                } else {
                    pageLink.style.display = 'none';
                }
            });
            ellipsis.style.display = endPage < totalPages - 1 ? 'inline-block' : 'none';
            pageLinks[pageLinks.length - 1].style.display = endPage < totalPages - 1 ? 'inline-block' : 'none';
            pageLinks[pageLinks.length - 1].textContent = totalPages;
            pageLinks.forEach(pageLink => pageLink.classList.remove('active'));
            if (currentPage >= startPage && currentPage <= endPage) {
                pageLinks[currentPage - startPage].classList.add('active');
            } else if (currentPage === totalPages) {
                pageLinks[pageLinks.length - 1].classList.add('active');
            }
        }

        pageLinks.forEach(pageLink => {
            pageLink.addEventListener('click', function (event) {
                event.preventDefault();
                currentPage = parseInt(this.textContent);
                updatePageLinks(currentPageSet + 1);
                renderPosts(currentPage);
                attachPostClickListeners();
            });
        });

        ellipsis.addEventListener('click', function (event) {
            event.preventDefault();
            currentPageSet += visiblePages;
            if (currentPageSet + visiblePages >= totalPages) {
                currentPageSet = totalPages - visiblePages;
            }
            updatePageLinks(currentPageSet + 1);
            attachPostClickListeners();
        });

        prevButton.addEventListener('click', function (event) {
            event.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                if (currentPage < currentPageSet + 1) {
                    currentPageSet -= visiblePages;
                    if (currentPageSet < 0) currentPageSet = 0;
                }
                updatePageLinks(currentPageSet + 1);
                renderPosts(currentPage);
                attachPostClickListeners();
            }
        });

        nextButton.addEventListener('click', function (event) {
            event.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                if (currentPage > currentPageSet + visiblePages) {
                    currentPageSet += visiblePages;
                }
                updatePageLinks(currentPageSet + 1);
                renderPosts(currentPage);
                attachPostClickListeners();
            }
        });

        function handlePostClick(event) {
            const postId = event.currentTarget.id;
            const post = blogPosts.find(post => post.id === parseInt(postId));
            console.log(post);
            sessionStorage.setItem('postData', JSON.stringify(post));
            const url = `http://127.0.0.1:5500/articlepage.html?id=${postId}`;
            window.location.href = url;
        }

        function attachPostClickListeners() {
            const postElements = document.querySelectorAll('.blogpost');
            postElements.forEach(post => {
                console.log('attached')
                post.addEventListener('click', handlePostClick);
            });
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

        

        const trendingPosts = [blogPosts[5], blogPosts[6]];

        appendRelatedPosts(trendingPosts, 'posts-related');
        updatePageLinks(1);
        attachPostClickListeners();
    }

    renderPosts(1);
    renderPagination();
    attachPostClickListeners();
});

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

sessionStorage.setItem('blogPosts', JSON.stringify(blogPosts));
