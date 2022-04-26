import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DefaultTextField from 'components/Fields/DefaultTextField'
import DefaultButton from 'components/Buttons/DefaultButton'
import { useDispatch } from 'react-redux'
import { addUser } from './userSlice'
import { v4 as uuidv4 } from 'uuid'

const AddUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: '',
    email: ''
  })

  const handleNameChange = (e) => {
    setValues({ ...values, name: e.target.value })
  }

  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }

  const handleAddUser = () => {
    setValues({ name: '', email: '' })
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }))
    navigate('/')
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <DefaultTextField
        label="Name"
        value={values.name}
        inputProps={{ type: 'text', placeholder: 'John' }}
        onChange={handleNameChange}
      />
      <br />
      <DefaultTextField
        label="Email"
        value={values.email}
        inputProps={{ type: 'email', placeholder: 'john@mail.com' }}
        onChange={handleEmailChange}
      />
      <DefaultButton onClick={handleAddUser}>Submit</DefaultButton>
    </div>
  )
}

export default AddUser