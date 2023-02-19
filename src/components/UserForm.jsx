import { useForm } from '../hooks/useform'

export const UserForm = ({newUserSearch}) => {

    const { username, onInputChange, onResetForm} = useForm({
        username: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if ( username.length <= 3 ) return;
        
        newUserSearch(username)
        onResetForm();
            
    }

  return (
    <form className='flex flex-col space-y-2' onSubmit={ onFormSubmit }>
        <input 
          type="text"
          className='bg-green-50 border border-green-900 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 text-center'
          placeholder='Please enter a username'
          name="username"
          value={ username }
          onChange={ onInputChange }
        />
        <button 
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >Enter</button>
    </form>
  )
}
