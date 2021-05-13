import React,{useEffect} from 'react';
import './Snackbar.css';

const Snackbar=(props)=>
{
    const [visible,setVisible]=React.useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
            props.setSnackbarVisible(false);
         }, 3000);
     
        return () => clearTimeout(timeout);
       },[visible,props]);
     
     

    return(
        visible &&
            <div className="Error-PopUp"> {props.ErrorMessage}
            <span onClick={()=>{props.setSnackbarVisible(false)}}>
                X
            </span>
            </div>
        
    )
}


export default Snackbar;