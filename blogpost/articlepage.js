const slider = document.querySelector('.slider');

slider.addEventListener('input', function () {
    const newSize = this.value;
    console.log(newSize);
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (element.classList.contains('change')  ) {
            element.style.fontSize = `${newSize}px`;
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {

    var goBackDiv = document.querySelector('.go-back');

    goBackDiv.addEventListener('click', function () {
        window.location.href = 'homepage.html';
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
    setTimeout(function() {
        loadingScreen.style.display = 'flex'; 
    }, 10);
    const storedData = JSON.parse(sessionStorage.getItem('postData'));
    if (storedData) {
       
        const title = storedData.title;
        document.getElementById('main-title').textContent = title;

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
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 10);

    } else {
        console.log('No data found in sessionStorage.');
        setTimeout(function() {
            loadingScreen.style.display = 'none'; 
        }, 10);
    }
});






