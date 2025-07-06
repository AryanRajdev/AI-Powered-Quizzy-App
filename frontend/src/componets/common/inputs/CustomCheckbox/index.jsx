import React from 'react'

const CustomCheckbox = ({ id, value, onChange }) => {
  return (
    <div>
    <input
      id={id}
      type="checkbox"
      checked={value}
      onChange={() => onChange(!value)}
    />
    </div>
  )
}

export default CustomCheckbox