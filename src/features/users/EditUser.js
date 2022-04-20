import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TextField from 'components/Fields/TextField'
import Button from 'components/Buttons/Button'
import { useSelector, useDispatch } from "react-redux"
import { editUser } from './userSlice'

const EditUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const params = useParams()
  const users = useSelector(store => store.users)
  console.log(users);
  console.log(params);
  const existingUser = users.filter(user => user.id === params.id)
  const { name, email } = existingUser[0]

  const [values, setValues] = useState({
    name,
    email
  })

  const handleNameChange = (e) => {
    setValues({ ...values, name: e.target.value })
  }

  const handleEmailChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }

  const handleEditUser = () => {
    setValues({ name: '', email: '' })
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }))
    navigate('/')
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        inputProps={{ type: 'text', placeholder: 'John' }}
        onChange={handleNameChange}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        inputProps={{ type: 'email', placeholder: 'john@mail.com' }}
        onChange={handleEmailChange}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser