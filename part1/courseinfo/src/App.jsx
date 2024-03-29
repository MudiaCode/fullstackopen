const App = () => {
//     function call for counter and setCounter
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    // calls elements within the array of objects
    return (
        <div>
                <Header course = {course.name}/>
                <Content parts = {course.parts}/>
                <Total parts = {course.parts}/>
        </div>
)
}

const Header = (props) => {
    console.log(props)
    const course = props.course
    return (
        <h1>
            {course}
        </h1>
    )
}

// calls the index of name and exercise elements within the array of objects
const Content = ({parts}) => {
    return (
        <div>
            <p>
                {parts[0].name} - {parts[0].exercises}
            </p>
            <p>
                {parts[1].name} - {parts[1].exercises}
            </p>
            <p>
                {parts[2].name} - {parts[2].exercises}
            </p>
        </div>
    )
}

// adds all the exercises together by index
const Total = ({parts}) => {
    return (
        <div>
            <p>
            Total Number of Exercises = {parts[0].exercises + parts[1].exercises + parts[2].exercises}
            </p>
        </div>
    )
}

export default App