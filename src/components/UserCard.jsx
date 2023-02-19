import { useFetch } from '../hooks/useFetch'
import Lottie from 'lottie-react'
import loader from '../helpers/loader.json'
import { ErrorMessage } from './ErrorMessage'


export const UserCard = ({username}) => {

  const { location, login, avatar_url, bio, html_url, isLoading, name } = useFetch(username)

  if( isLoading ) {
    return (< Lottie className='w-60' animationData={loader}/>)
  }
  

  return (
    <>
      {
        login ?
        <div className='flex flex-col space-y-2 items-center mt-3'>
          <img className='w-60 md:max-w-xl rounded-md' src={avatar_url} alt="" />
          <h3>{name}</h3>
          <h5>{login}</h5>
          <p>{location}</p>
          <p>{bio}</p>
          <a 
           href={html_url}
           target="_blank"
           className="inline-block px-10 py-3 my-6 text-center border duration-700  border-green-600 rounded-lg hover:bg-green-700 hover:border-green-700"
          >
          Go to GitHub Profile
          </a>
        </div>
        : 
        <ErrorMessage />
      }

      
    </>
  )
}
