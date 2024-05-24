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
