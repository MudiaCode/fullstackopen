import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// !This is the wrong way of doing it!
// Initialises counter
// let counter = 1

// re-renders page by wrapping render code into refresh variable
// Renders too fast to see (needs to be used with setInterval)
// const refresh = () => {
//     ReactDOM.createRoot(document.getElementById('root')).render(
//         <App counter={counter}/>
//     )
// }
//
// setInterval(() => {
//     refresh()
//     counter += 1
// }, 1000)


