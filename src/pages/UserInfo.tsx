import React, {FC, useEffect, useState} from 'react'
import {IUser} from "../types/types"
import axios from "axios"
import {useParams, useHistory} from 'react-router-dom'

interface UserInfoParams {
    id: string;
}

const UserInfo: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserInfoParams>()
    const history = useHistory()

    useEffect(() => {
        fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>User Info {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserInfo