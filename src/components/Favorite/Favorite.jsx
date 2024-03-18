import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from './img/heart.png';
import styles from '../Favorite/Favorite.module.scss'

function Favorite() {
    const [count, setCount] = useState();
    const [pressed, setPressed] = useState(true);
    const storeDate = useSelector(state => state.favoriteReduser)

    useEffect(()=>{
        const length = Object.keys(storeDate).length;
        length.toString().length > 2 ? setCount('...') : setCount(length)
    })
    
    const likeAndList = () => {
        if(pressed){
            setPressed(false)
        }else{
            setPressed(true)
        }
    }
    
    return (
        <>
        <div className={styles.container}>
        <button className={styles.btn} onClick={likeAndList}>
                {pressed
                ?  
                <Link to='/favorites'>
                   <span className={styles.counter}>{count}</span>
               <img className={styles.icon} src={icon} alt="" />
               </Link>
                :<Link to ='/character/?page=1'>
                <img  className={styles.icon} src={icon} alt="" />
                </Link>
            }
        </button>
        </div>
        </>
    );
}

export default Favorite;