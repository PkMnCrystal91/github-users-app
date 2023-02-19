import { useEffect, useState } from "react";

export const useFetch = ( username ) => {

    const [profile, setProfile] = useState([{
        name:'',
        location:'',
        login:'',
        avatar_url:'',
        bio:'',
        html_url:'',
        isLoading: true,

    }]);
    
    const fetchProfiles = async() => {

        setProfile({
            ...profile,
            isLoading: true
        })        

        const url = `https://api.github.com/users/${username}`;
        const resp = await fetch( url )
        const { location, login, avatar_url, bio, html_url, name } = await resp.json()


        setTimeout(() => {
            setProfile({location, name, login, avatar_url, bio, html_url, isLoading:false})
        }, 1000)
        
    }

    useEffect(() => {

      fetchProfiles();
    }, [])
    
    return {
        location: profile.location,
        login: profile.login,
        avatar_url: profile.avatar_url,
        bio: profile.bio,
        html_url: profile.html_url,
        isLoading: profile.isLoading,
        name: profile.name,
    }

}