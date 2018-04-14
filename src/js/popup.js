window.onload = () => {
  const $startButton = document.querySelector('.start')

  $startButton.onclick = () => {
    // get active tab
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      // send message to the script
      chrome.tabs.sendMessage(
        tabs[0].id,
        { injectApp: true },
        response => window.close()
      )
    })
  }
}