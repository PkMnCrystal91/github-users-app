import { useState } from 'react'
import { UserForm, UserCard } from './components'

export const GithubApp = () => {

    const [ users, setUsers ] = useState(['pkmncrystal91']);
    
    const searchUser = ( newUser ) => {
        setUsers([newUser]);
    }

  return (

    /* Global Container */
    <div className='flex flex-col justify-center items-center min-h-screen p-2.5 bg-stone-800'>

        {/* Inner Container */}
        <div className='flex flex-col my-2 items-center bg-stone-600 rounded-xl text-white'>

            {/* Upper Container */}
            <div className='p-8 mx-3 my-3 rounded-xl bg-stone-800'>
                <h2 className='mt-7 mb-2 text-2xl text-center'>GitHub User App</h2>

                <UserForm newUserSearch={ event => searchUser(event) } />

                {
                    users.map( (user) => (
                        <UserCard 
                            key={user}
                            username={user}
                        />
                    ))
                }          
            </div>
            
        </div>          

    </div>
  )
}
