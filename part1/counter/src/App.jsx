import {useState} from "react";

const App = () => {
    // App component re-renders when state changes e.g. button clicks
    const [counter, SetCounter] = useState(0)
    console.log('rendering with counter value', counter)

    const increment = () => {
        console.log('increasing, value before', counter)
        SetCounter(counter + 1)
    }

    const decrement = () => {
        console.log('increasing, value before', counter)
        SetCounter(counter - 1)
    }

    const reset = () => {
        console.log('resetting to zero, value before', counter)
        SetCounter(0)
    }


    // const handleClick = () => {
    // console.log('clicked')
    // }
    // Increments and adds time delay of 1 second to each incrementation displayed
    // setTimeout(
    //     () => setCounter(counter + 1),
    //     1000
    // )
    {/*Event handlers are functions. They cannot be used as function calls like the code below*/
    }
    {/*<button onClick={setCounter(counter + 1)}>*/
    }
    return (
        <div>
            <Display counter={counter}/>
            <Counter button={increment} text={"+"}/>
            <Counter button={reset} text={"Reset"}/>
            <Counter button={decrement} text={"-"}/>
        </div>
    )
}

const Display = ({counter}) => {
    return (
        <div>
            {counter}
        </div>
    )
}

const Counter = ({button, text}) => {
    return (
        <button onClick={button}>
            {text}
        </button>
    )
}
export default App

