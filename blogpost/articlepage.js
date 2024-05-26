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
document.addEventListener("DOMContentLoaded", function() {

    var goBackDiv = document.querySelector('.go-back');
    
    goBackDiv.addEventListener('click', function() {
      window.location.href = 'homepage.html';
    });
  });