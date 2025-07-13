import React from 'react'

const CustomTextInput = ({id = "custom-input", value , onChange , className , ...props}) => {

    
  return (
    <div>
     <input 
      id = {id}
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      className= {`${className} w-full border p-1 rounded-md`}
      {...props}
     /> 
    </div>
  )
}

export default CustomTextInput