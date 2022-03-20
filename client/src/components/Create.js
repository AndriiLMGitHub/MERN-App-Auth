import React, {useState, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import {useHistory} from 'react-router-dom'


export const Create = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')


    const pressHandler = async event => {
        if (event.key === 'Enter') {
        try {
            const data = await request(
                    '/api/link/generate',
                    'POST',
                    {from: link},
                    {Authorization: `Bearer ${auth.token}`}
                )
            history.push(`/detail/${data.link._id}`)
            console.log(data)
        } catch (e) {}
        }
    }
    

    return (
        <div className="row">
            <div className="col-8 mx-auto">
                <div className="mt-5">
                    <label htmlFor="linkUrl" className="form-label">Enter your link here:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter link" 
                        id="linkUrl"
                        // value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                </div>
            </div>
        </div>
    );
}