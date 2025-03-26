document.getElementById('goToKaido').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://kaido.to/' });
  });
  