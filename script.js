// Відкрити попап
function openPopup(imgElement) {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  popupImg.src = imgElement.src;
  popup.style.display = 'flex';
}

// Закрити попап
function closePopup(event) {
  if (
    event.target.id === 'popup' ||
    event.target.classList.contains('close')
  ) {
    document.getElementById('popup').style.display = 'none';
  }
}
