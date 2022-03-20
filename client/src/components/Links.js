import React, {useCallback, useState, useEffect, useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { Loader } from './layout/Loader';
import {LinksList} from './layout/LinksList'


export const Links = () => {
    const [links, setLinks] = useState([]);

    const {request, loading} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request(
                '/api/link',
                'GET',
                null,
                {
                    Authorization : `Bearer ${token}`
                }
            )
            setLinks(fetched)
        } catch (e) {}
    }, [token, request])


    useEffect(() => {
        fetchLinks()
    }, [fetchLinks]);

    if (loading) {
        return <Loader/>
    }

    return (
        <>  
           { !loading && <LinksList links={links}/> } 
        </>
    );
}