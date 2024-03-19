import { useSelector } from 'react-redux';
import FavoriteList from '../../components/FavoriteList/FavoriteList'
import { useEffect, useState } from 'react';
import styles from './FavoritePage.module.scss'

function FavoritePage (personFavorite) {
    const [characters, setCharacters] = useState([]);
    const storeDate = useSelector(state => state.favoriteReduser);
    
    useEffect(()=>{
        const arr = Object.entries(storeDate);
        if(arr.length){
            const res = arr.map(item => {
                return{
                    id: item[0],
                    ...item[1]
                }
            })
            setCharacters(res)
        }
    }, [])

    return(
        <>
        <h1>Любимые персонажи</h1>
        {characters.length 
        ?
        <ul className={styles.listContainer}>
                {characters.map((item)=>
                    <li key={item.id}>
                        <FavoriteList characters={characters}  name={item.name} image={item.img}  personFavorite={personFavorite} />
                        </li>
        )}
        </ul>:
        <h2 className={styles.comment}>No date</h2>
        }
        </>
    )
}
export default FavoritePage;