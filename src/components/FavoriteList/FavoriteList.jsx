import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getApiResource } from '../../utils/network';
import { API_PERSON } from '../../constans/api';
import styles from './FavoriteList.module.scss'

function FavoriteList({ id, name, image}) {
    const [personFavorite, setPersonFavorite] = useState(false);
    const [personId, setPersonID] = useState(null);
    const storeDate = useSelector(state => state.favoriteReduser)
    
    useEffect(()=>{
        (async ()=>{
            const res = await getApiResource(`${API_PERSON}`);
            storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false)
          setPersonID(id)
        })();
    }, []);

    
    return (
    <ul className={styles.listContainer}>
        <li className={styles.listItem} key={id}>
            <img className={styles.characterImg} src={image} alt={name} />
            <p className={styles.par}>{name}</p>
        </li>
    </ul>
    );
}

export default FavoriteList;