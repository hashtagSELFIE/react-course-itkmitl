import React from 'react'

const Counter = (props) => {
  const [timer, setTimer] = React.useState(0)
  // const [state2, setState2] = React.useState('')
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer])
  const handleClick = () => {
    setTimer(timer + 1)
  }
  return (
    <div>
            Timer: {timer}
      <button type="button" onClick={handleClick}>Add</button>
    </div>
  )
}

// class Counter extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             timer: 0,
//         }
//     }
//     componentDidMount() {
//         this.interval = setInterval(() => {
//             this.setState(state => ({ timer: state.timer + 1}))
//         })
//     }
// }
export default Counter
