import styles from '../pages/Planet.module.scss' 


export default function CatList({name, image, id, deleteItem}) {
  
    
    return ( 
          
                <div >
                    <img className={styles.planetImg} src={image} alt="" />
                    <p >{name}</p>
            
                    <div  >
            
                    <button
                    onClick={()=>{deleteItem(id)}}><span className='material-symbols-outlined'>delete</span>
                    </button>
                    </div>
                </div>
            
     
     
    )
}
