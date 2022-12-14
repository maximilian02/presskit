const shareButtons = document.querySelectorAll('.tile-share-button, .share-button');

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute('link');

  try {
    await navigator.clipboard.writeText(link);
    alert('Link copied to clipboard')
  } catch(err) {
    console.log(err);
  }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));