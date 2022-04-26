import { Link } from "react-router-dom"
import DefaultButton from "components/Buttons/DefaultButton"
import { useSelector, useDispatch } from "react-redux"
import { deleteUser } from "./userSlice"
import { PencilIcon, TrashIcon } from '@heroicons/react/outline'

const UserList = () => {
  const users = useSelector(store => store.users)
  const dispatch = useDispatch()

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }))
  }

  const renderCard = () => users.map(user => (
    <div key={user.id} className="bg-gray-300 p-5 flex items-center justify-between">
      <div>
        <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
        <span className="font-normal text-gray-600">{user.email}</span>
      </div>
      <div className="flex items-center gap-4">
        <Link to={`edit-user/${user.id}`}>
          <button>
            <PencilIcon className="h-6 w-6" />
          </button>
        </Link>
        <button onClick={() => handleRemoveUser(user.id)}>
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  ))

  return (
    <div>
      <Link to="/add-user">
        <DefaultButton>Add User</DefaultButton>
      </Link>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? renderCard() : 
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        }
      </div>
    </div>
  )
}

export default UserList
