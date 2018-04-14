import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Your app injected to the DOM correctly!</h1>
      </div>
    )
  }
}

// message listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  // if message is injectApp
  if (request.injectApp) {
    // inject the app to the DOM and send response
    injectApp()
    response({
      startedExtension: true
    })
  }
})

function injectApp() {
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', 'chromeExtensionReactApp')
  document.body.appendChild(newDiv)
  ReactDOM.render(<App />, newDiv)
}