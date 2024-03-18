import { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';

export const withErrorApi = View => {

    return props => {
        const [errorApi, setErrorApi] = useState(false);
        return (
            <>
                {errorApi
                    ? <ErrorMessage />
                    : (
                        <View 
                        setErrorApi={setErrorApi}
                        {...props}
                     />
                    )
                }
           </>
        )
    }
}