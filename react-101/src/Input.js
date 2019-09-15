import React from 'react'

const Input = () => {
  const [val, setVal] = React.useState('')
  // console.log(val)
  const handleInputChange = (e) => {
    setVal(e.target.value)
  }
  return (
    <input
      type="text"
      value={val}
      onChange={handleInputChange}
    />
  )
}

export default Input

