import { 
    SWAPI_ROOT, SWAPI_CHARACTERS
 } from "../constans/api"
 
 const getId = (url, SWAPI_CHARACTERS) => {
     const id = (SWAPI_ROOT+SWAPI_CHARACTERS, '')
    
     return id;
 }
 export const getCharactertId = url => getId(url, SWAPI_CHARACTERS)