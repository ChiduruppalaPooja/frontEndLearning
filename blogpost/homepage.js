var blogPosts = [
    {
        id: 1,
        authorImage: 'https://images.unsplash.com/photo-1554151228-14d9def656e4',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
        category: "Technology",
        author: "Alice Smith",
        jobTitle: "Senior Developer",
        readTime: "5 min read",
        date: "May 10, 2024",
        title: "The Future of AI in Everyday Life",
        text: "Exploring the impact of AI on daily activities.",
        subheading: "How AI is changing our world",
        content: "Artificial Intelligence is no longer just a concept in sci-fi movies. Today, it is an integral part of our daily lives, from smart assistants to advanced healthcare solutions. In this article, we delve into how AI is transforming our everyday experiences."
    }
    ,
    {
        id: 2,
        authorImage: './image/img4.jpeg',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        category: "Technology",
        author: "John Doe",
        jobTitle: "Tech Enthusiast",
        readTime: "6 min read",
        date: "June 15, 2024",
        title: "Blockchain Beyond Cryptocurrency",
        text: "Understanding the broader applications of blockchain technology.",
        subheading: "More than just Bitcoin",
        content: "While blockchain is the backbone of cryptocurrencies, its applications extend far beyond. This article explores the diverse uses of blockchain, from secure voting systems to transparent supply chains."
    }
    ,
    {
        id: 3,
        authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2',
        category: "Ideas",
        author: "Isabella Thompson",
        jobTitle: "Entrepreneur",
        readTime: "6 min read",
        date: "May 15, 2025",
        title: "The Power of Networking",
        text: "How to build a strong professional network.",
        subheading: "Connecting with others",
        content: "Networking is a crucial skill for career success. This article provides tips on how to build and maintain a strong professional network, including attending industry events, leveraging social media, and offering value to your connections."
    }
    ,
    {
        id: 4,
        authorImage: './image/img5.jpeg',
        image: 'https://images.unsplash.com/photo-1503264116251-35a269479413',
        category: "Ideas",
        author: "Liam Jackson",
        jobTitle: "Marketing Strategist",
        readTime: "5 min read",
        date: "June 20, 2025",
        title: "Creative Marketing Strategies",
        text: "How to stand out in a crowded market.",
        subheading: "Thinking outside the box",
        content: "In today's competitive market, creative marketing strategies are essential for success. This article explores innovative marketing techniques, including guerrilla marketing, influencer partnerships, and experiential marketing."
    }
    ,
    {
        id: 5,
        authorImage: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8',
        image: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1',
        category: "Culture",
        author: "Michael Brown",
        jobTitle: "Data Scientist",
        readTime: "7 min read",
        date: "September 15, 2024",
        title: "Data Privacy in the Digital Age",
        text: "Protecting your personal information online.",
        subheading: "Keeping your data safe",
        content: "With increasing digitalization, data privacy has become a critical issue. This article provides tips on how to protect your personal information and discusses the role of regulations like GDPR in safeguarding user data."
    }
    ,
    {
        id: 6,
        authorImage: './image/img1.jpeg',
        image: './image/blg3.jpeg',
        category: "Culture",
        author: "Sarah Davis",
        jobTitle: "Product Manager",
        readTime: "6 min read",
        date: "October 10, 2024",
        title: "The Internet of Things: Connecting Our World",
        text: "How IoT is creating a smarter, more interconnected world.",
        subheading: "The future of connectivity",
        content: "The Internet of Things (IoT) refers to the interconnected network of devices that communicate with each other to perform various tasks. This article explores the current state of IoT, its applications, and the potential it holds for the future."
    }
    ,
    {
        id: 7,
        authorImage: './image/img2.jpeg',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
        category: "Technology",
        author: "David Wilson",
        jobTitle: "Network Engineer",
        readTime: "5 min read",
        date: "November 20, 2024",
        title: "Cybersecurity: Protecting Against Threats",
        text: "The importance of cybersecurity in today's digital landscape.",
        subheading: "Staying safe online",
        content: "As technology advances, so do the methods used by cybercriminals. This article discusses common cybersecurity threats, such as phishing and ransomware, and offers advice on how to protect your personal and professional data."
    }
    ,
    {
        id: 8,
        authorImage: './image/img5.jpeg',
        image: './image/blg4.jpeg',
        category: "Technology",
        author: "Laura Miller",
        jobTitle: "AI Researcher",
        readTime: "6 min read",
        date: "December 1, 2024",
        title: "The Ethics of Artificial Intelligence",
        text: "Addressing the ethical implications of AI development.",
        subheading: "AI and ethics",
        content: "As AI technologies become more advanced, ethical considerations surrounding their development and deployment are becoming increasingly important. This article examines key ethical issues, such as bias in AI algorithms and the impact of AI on employment."
    },
    {
        id: 9,
        authorImage: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde',
        image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479',
        category: "Technology",
        author: "Emma Martinez",
        jobTitle: "Robotics Engineer",
        readTime: "5 min read",
        date: "January 5, 2025",
        title: "The Advancements in Robotics",
        text: "How modern robotics are reshaping industries.",
        subheading: "The rise of robots",
        content: "Robotics technology is advancing rapidly, with applications ranging from manufacturing to healthcare. In this article, we explore the latest developments in robotics and their potential to revolutionize various industries."
    }
    ,
    {
        id: 10,
        authorImage: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
        category: "Technology",
        author: "James Taylor",
        jobTitle: "Tech Blogger",
        readTime: "5 min read",
        date: "February 14, 2025",
        title: "The Role of Big Data in Business",
        text: "Harnessing big data for business success.",
        subheading: "Data-driven decision making",
        content: "Big data is transforming the way businesses operate, providing valuable insights that drive decision making. This article discusses the benefits of big data, including improved customer insights, enhanced operational efficiency, and data-driven marketing strategies."
    }
    ,
    {

        id: 11,
        authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
        category: "Technology",
        author: "Jane Smith",
        jobTitle: "Software Engineer",
        readTime: "4 min read",
        date: "July 20, 2024",
        title: "The Rise of Quantum Computing",
        text: "How quantum computers are set to revolutionize technology.",
        subheading: "A new era of computing",
        content: "Quantum computing promises to solve problems that are currently intractable for classical computers. Learn about the principles of quantum computing and its potential impact on industries such as cryptography and material science."


    },
    {
        id: 12,
        authorImage: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263',
        image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2',
        category: "Technology",
        author: "Emily Johnson",
        jobTitle: "Tech Writer",
        readTime: "5 min read",
        date: "August 5, 2024",
        title: "5G: What You Need to Know",
        text: "The benefits and challenges of the new 5G network.",
        subheading: "The next generation of connectivity",
        content: "5G technology promises faster speeds and more reliable internet connections. In this article, we discuss the key benefits of 5G, the technology behind it, and the potential challenges in its widespread adoption."
    }
    , {
        id: 13,
        authorImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
        image: './image/blg2.jpeg',
        category: "Ideas",
        author: "Ethan Johnson",
        jobTitle: "Product Manager",
        readTime: "6 min read",
        date: "July 25, 2025",
        title: "Design Thinking for Product Development",
        text: "Using design thinking to create innovative products.",
        subheading: "A human-centered approach",
        content: "Design thinking is a powerful methodology for product development. This article explains the principles of design thinking, including empathy, ideation, and prototyping, and how it can be used to create products that meet customer needs."
    },
    {
        id: 14,
        authorImage: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
        image: 'https://images.unsplash.com/photo-1496346651079-6ca5cb67f42f',
        category: "Ideas",
        author: "Mia Davis",
        jobTitle: "Innovation Coach",
        readTime: "5 min read",
        date: "August 5, 2025",
        title: "The Role of Creativity in Problem Solving",
        text: "How to use creative thinking to solve complex problems.",
        subheading: "Thinking outside the box",
        content: "Creative thinking is essential for solving complex problems. This article discusses techniques for fostering creativity, including brainstorming, mind mapping, and lateral thinking, and provides examples of how these techniques have been used to solve real-world problems."
    },
    {
        id: 15,
        authorImage: 'https://images.unsplash.com/photo-1505692957-f69f0bfc5f8f',
        image: './image/blg1.jpeg',
        category: "Ideas",
        author: "Ava Martinez",
        jobTitle: "Strategic Planner",
        readTime: "4 min read",
        date: "September 10, 2025",
        title: "The Benefits of Remote Work",
        text: "How remote work is changing the workplace.",
        subheading: "A new way of working",
        content: "Remote work has become increasingly popular, offering benefits such as flexibility, reduced commute times, and improved work-life balance. This article explores the advantages of remote work and provides tips for staying productive while working from home."
    },
    {
        id: 16,
        authorImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
        image: './image/blg4.jpeg',
        category: "Ideas",
        author: "William Lee",
        jobTitle: "Innovation Consultant",
        readTime: "6 min read",
        date: "October 15, 2025",
        title: "Disruptive Innovation: What It Means for Your Business",
        text: "Understanding the impact of disruptive innovation.",
        subheading: "Embracing change",
        content: "Disruptive innovation refers to innovations that significantly alter the market landscape, often displacing established companies. This article discusses the characteristics of disruptive innovation and how businesses can adapt to stay competitive."
    },
    {
        id: 17,
        authorImage: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        category: "Ideas",
        author: "Charlotte Brown",
        jobTitle: "Business Analyst",
        readTime: "5 min read",
        date: "November 1, 2025",
        title: "Agile Methodology in Project Management",
        text: "How agile practices can improve project outcomes.",
        subheading: "A flexible approach",
        content: "Agile methodology is a flexible approach to project management that emphasizes collaboration, customer feedback, and iterative development. This article explains the principles of agile methodology and how it can be used to deliver successful projects."
    },
    {
        id: 18,
        authorImage: './image/img1.jpeg',
        image:  './image/blg1.jpeg',
        category: "Ideas",
        author: "David Lee",
        jobTitle: "Innovation Consultant",
        readTime: "7 min read",
        date: "November 5, 2024",
        title: "The Art of Creative Problem-Solving: Unlocking Solutions Through Innovation",
        text: "Exploring how creativity and innovation can be leveraged to solve complex problems effectively.",
        subheading: "Harnessing Creativity for Problem-Solving",
        content: "Creativity is a powerful tool for tackling challenges and finding innovative solutions. This article dives deep into the art of creative problem-solving, discussing methodologies such as design thinking, lateral thinking, and reframing problems. Learn how embracing creativity can unlock new perspectives and lead to breakthrough solutions in various domains."
    },
    {
        id: 19,
        authorImage: './image/img2.jpeg',
        image: './image/blg2.jpeg',
        category: "Ideas",
        author: "Jane Smith",
        jobTitle: "Creative Consultant",
        readTime: "5 min read",
        date: "September 10, 2024",
        title: "Innovative Thinking: Nurturing a Culture of Idea Generation",
        text: "Exploring strategies to foster innovative thinking and encourage the generation of new ideas.",
        subheading: "The Power of Idea Generation",
        content: "Innovation thrives in environments that encourage creative thinking. This article dives into various techniques and approaches to cultivate a culture of idea generation within organizations. From brainstorming sessions to interdisciplinary collaboration, discover how nurturing innovative thinking can drive progress and success."
    },
    {
        id: 20,
         authorImage: './image/img3.jpeg',
        image: './image/blg3.jpeg',
        category: "Culture",
        author: "Sophia Clark",
        jobTitle: "Cultural Analyst",
        readTime: "7 min read",
        date: "March 20, 2025",
        title: "Traditional Clothing: Symbols of Cultural Identity",
        text: "Understanding the significance of traditional attire in various cultures.",
        subheading: "Threads of Tradition",
        content: "Traditional clothing is more than just fabric; it is a symbol of cultural identity and heritage. This article explores the significance of traditional attire in different cultures, the meanings behind various garments, and their role in preserving cultural history."
    },
    {
        id: 21,
        authorImage: './image/img4.jpeg',
        image: './image/blg4.jpeg',
        category: "Culture",
        author: "Emily Green",
        jobTitle: "Cultural Curator",
        readTime: "6 min read",
        date: "February 14, 2025",
        title: "The Culinary Heritage of Different Cultures",
        text: "A culinary journey through traditional dishes and their cultural significance.",
        subheading: "Flavors of Heritage",
        content: "Food is a fundamental aspect of cultural heritage, reflecting history, geography, and traditions. This article takes readers on a culinary journey, exploring traditional dishes from various cultures and the stories they tell about their origins and cultural importance."
    },
    {
        id: 22,
        authorImage: './image/img5.jpeg',
        image: './image/blg3.jpeg',
        category: "Culture",
        author: "David Wilson",
        jobTitle: "Cultural Studies Professor",
        readTime: "8 min read",
        date: "January 10, 2025",
        title: "Language Preservation: Protecting Our Linguistic Heritage",
        text: "The efforts to save endangered languages around the world.",
        subheading: "Words of Wisdom",
        content: "Languages are a crucial part of cultural identity, yet many are at risk of extinction. This article examines the initiatives being undertaken to preserve endangered languages, the challenges faced, and the importance of linguistic diversity for cultural richness."
    },


];

sessionStorage.setItem('blogPosts', JSON.stringify(blogPosts));


//clicking on All
var contentElements = document.getElementsByClassName('all');
for (var i = 0; i < contentElements.length; i++) {
    contentElements[i].addEventListener('click', function () {
        var targetElement = document.getElementById('trending-topics');
        if (!targetElement) {
            targetElement = document.getElementById('posts-related');
        }
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error("Neither 'trending-topics' nor 'posts-related' element found.");
        }
    });
}

//other links in top bar

$(document).ready(function () {
    $('.category-link').on('click', function () {
        var category = $(this).data('category');

        var targetPost = $('.blogpost[data-category="' + category + '"]').first();


        if (targetPost.length) {

            $('html, body').animate({
                scrollTop: targetPost.offset().top - 20
            }, 1000);
        } else {
            window.location.href = 'home.html';
        }
    });
});





    //trendingposts

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
                const url = `https://chiduruppalapooja.github.io/frontEndLearning/blogpos/articlepage.html?id=${postId}`;
                window.location.href = url;
            }

            function attachPostClickListeners() {
                const postElements = document.querySelectorAll('.blogpost');
                postElements.forEach(post => {
                    console.log('attached')
                    post.addEventListener('click', handlePostClick);
                });
            }


            //t
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



    //function for related posts
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






//search icon and its functionality
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


    //searchButton
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



    //search results
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

        // posts.forEach(post => {
        //     const listItem = document.createElement('li');
        //     const title = document.createElement('strong');
        //     title.textContent = post.title.trim();


        //     const content = document.createTextNode(": " + post.content.split(' ').slice(0, 5).join(' '));
        //     listItem.appendChild(title);
        //     listItem.appendChild(content);
        //     resultList.appendChild(listItem);


        //     listItem.addEventListener('click', function () {
        //         const postId = post.id;
        //         console.log('I am postId');
        //         console.log(postId);
        //         console.log(post);
        //         handleSearcResultdh(post);

        //     });

        // });


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
        const url = `https://chiduruppalapooja.github.io/frontEndLearning/blogpos/articlepage.html?id=${postId}`;
        window.location.href = url;
    }

});