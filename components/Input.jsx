import React from 'react'
import { TextInput } from 'flowbite-react'

export const Input = () => {
  return (
    <div>
        <div>
            <TextInput type="email" required={true} placeholder="Enter your email...." />
        </div>
    </div>
  )
}

module.exports = Input