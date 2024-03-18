import { useEffect, useState } from "react";
import { getApiResours } from "../utils/network";
import { API_PLANET } from "../constans/api";
import CatList from './CatList'
import styles from '../pages/Planet.module.scss' 

function PlanetPage() {
    const [ planet, setPlanet] = useState(null)
    const getResours = async(url) => {
        const res = await getApiResours(url);
        console.log(res)
         const planetList = res.results.map((item, id, name, image)=>{
            if(item.id === id){
                item.name = name;
                item.img = image;
                return item;
            }
            return item;
         })
         setPlanet(planetList)
         console.log(planetList)
    }
    useEffect(()=>{
        getResours(API_PLANET)
    }, [])
    const deleteItem=(id)=>{
        const updateList = planet.filter((item)=> item.id !== id)
        setPlanet(updateList)
        
    }
    

        return (
        <>
        <h1>Nav</h1>
        {planet &&
            <ul className={styles.listContainer}>
                {planet.map((item)=>
                    <li className={styles.listItem} key={item.id}>
                        <CatList {...item} deleteItem={deleteItem}></CatList>
                        </li>
        )}
            </ul>}

        </>
    );
}

export default PlanetPage;
