import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setPersonTofavorite, removePersonTofavorite} from '../../store/action'
import iconFavorite from './assets/img/heart_red.png'
import iconNotFavorite from './assets/img/heart_black.png'
import deleteCard from './assets/img/delete.png'
import { getApiResource } from '../../utils/network';
import { API_PERSON } from '../../constans/api';
import styles from './CharactersList.module.scss'

function CharactersList({ deleteItem, id, name, image}) {
    const [personFavorite, setPersonFavorite] = useState(false);
    const [personId, setPersonID] = useState(null);
    const storeDate = useSelector(state => state.favoriteReduser)
    const dispatch = useDispatch();

    useEffect(()=>{
        (async ()=>{
            const res = await getApiResource(`${API_PERSON}`);
            storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false)
          setPersonID(id)
        })();
    }, []);

    const removeSet = () =>{
        if(personFavorite){
            dispatch(removePersonTofavorite(id))
            setPersonFavorite(false)
        } else{
            dispatch(setPersonTofavorite({
                [personId]: {
                    img: image,
                    name: name
                },
            }));
            setPersonFavorite(true)
        }
    }

    return (
    <ul className={styles.listContainer}>
        <li className={styles.listItem} key={id}>
        <img className={styles.characterImg} src={image} alt="" />
                    <p className={styles.par}>{name}</p>
                <div  className={styles.btn}>
                    <img src={deleteCard}
                    className={styles.favorite}
                    onClick={()=>{deleteItem(id)}}/>
                    <img 
        onClick={()=>{removeSet(id)}}
        className={styles.favorite}
        src={personFavorite
            ? iconFavorite
            : iconNotFavorite
            } 
        alt="like" />
                </div>
        </li>
    </ul>
      
    );
}

export default CharactersList;