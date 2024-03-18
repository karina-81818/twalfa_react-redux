import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import { setCardList, removeCard } from '../../store/action';
import {API_RICKMORTY} from '../../constans/api';
import CharactersList from '../../components/CharacterList/CharactersList';

import styles from './CharacterPage.module.scss';

function CharacterPage({setErrorApi}) {
    const [character, setСharacter] = useState(null);
    const [personId, setPersonID] = useState(null);
    const storeDate = useSelector(state => state.characterReduser);
    const [personFavorite, setPersonFavorite] = useState(false);
    
    const dispatch = useDispatch();
    
    const getResource = async (url) => {
        const res = await getApiResource(url)

        if(res){
            const charactersList = res.results.map(( item, id, name, img)=>{
              if(item.id === id){
                item.id = id;
                 item.name = name;
                 item.img = img;
                 return item;
               }
               return item;
          })
        setСharacter(charactersList)
        dispatch(setCardList(charactersList))
        setErrorApi(false)
        }else{
        setErrorApi(true)
        }
    }
    const deleteItem=(id)=>{
        const updateList = character.filter((item)=> item.id !== id)
        console.log(updateList)
        setСharacter(updateList)
        dispatch(removeCard(updateList))
    }

    useEffect(()=>{
        getResource(API_RICKMORTY)
    }, []);

    return (
        <>   
       {character &&
            <ul className={styles.listContainer}>
                {character.map((item)=>
                    <li className={styles.listItem} key={item.id}>
                        <CharactersList {...item} 
                        deleteItem={deleteItem} 
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}>
                        </CharactersList>
                        </li>
        )}
            </ul>}
        </>
    )
}
export default withErrorApi(CharacterPage);