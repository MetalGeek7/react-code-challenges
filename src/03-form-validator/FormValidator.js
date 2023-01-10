import { useState } from 'react'

export default function FormValidator() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [isValidForm, setValidForm] = useState('')

  const submit = (e) => {
    e.preventDefault()
    
    let regexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const errors = []
    setValidForm('')
    if (!email || !password || !passwordConfirm) {
      errors.push('All fields must be filled in')
    }
    if (!email.match(regexp)) {
      errors.push("Invalid email entered 😢")
    }
    if (password.length < 8) {
      errors.push('Password length must be greater than or equal to 8 chars')
    }
    if (password !== passwordConfirm) {
      errors.push('Password and confirm password field must match')
    }

    if (errors.length > 0) {
      console.log(`Errors found while Form validation = ${errors}`)
      setValidForm(errors.join(', '))
    } else {
      console.log('No error found while form validation.')
      setValidForm('Howdy User! Your account has been created successfully 😎')
    }
    setEmail("");
    setPassword("")
    setPasswordConfirm("")
    document.getElementById("sign_up").reset();
  };

  return (
    <form id="sign_up" onSubmit={submit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <input type='submit' value='Submit' />
      {isValidForm}
    </form>
  )
}
