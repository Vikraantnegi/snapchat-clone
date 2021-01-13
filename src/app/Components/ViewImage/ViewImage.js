import React, {useEffect} from 'react';
import './ViewImage.css';
import { useSelector } from 'react-redux';
import { selectImage } from '../../../features/cameraSlice';
import { useHistory } from 'react-router-dom';
import { Close } from '@material-ui/icons';

function ViewImage() {
    const Image = useSelector(selectImage); 
    const history = useHistory();
    useEffect(() => {
        if(!Image){
            history.replace('/');
        }
    }, [Image, history])
    return (
        <div className="view-image">
            <Close className="close-icon" />
            <img src={Image} alt="cameraimage" />
        </div>
    )
}

export default ViewImage;
