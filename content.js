function getCurrentEpisodeId() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('ep'));
  }
  
  function findEpisodeLinks() {
    const currentEpisodeId = getCurrentEpisodeId();
    const episodes = Array.from(document.querySelectorAll('.ep-item'));
    
    const currentEpisode = episodes.find(ep => parseInt(ep.getAttribute('data-id')) === currentEpisodeId);
    if (!currentEpisode) return {};
  
    const currentIndex = episodes.indexOf(currentEpisode);
    const prevEpisode = currentIndex > 0 ? episodes[currentIndex - 1] : null;
    const nextEpisode = currentIndex < episodes.length - 1 ? episodes[currentIndex + 1] : null;
  
    return {
      prevLink: prevEpisode ? prevEpisode.getAttribute('href') : null,
      nextLink: nextEpisode ? nextEpisode.getAttribute('href') : null
    };
  }
  
  document.addEventListener('keydown', (e) => {
    if (!e.shiftKey || (e.key !== 'P' && e.key !== 'N')) return;
  
    const { prevLink, nextLink } = findEpisodeLinks();
    
    if (e.key === 'P' && prevLink) {
      window.location.href = prevLink;
    } else if (e.key === 'N' && nextLink) {
      window.location.href = nextLink;
    }
  });
  