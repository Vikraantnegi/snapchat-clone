import React, {useEffect} from 'react';
import './ViewImage.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetImage, selectImage } from '../../../features/cameraSlice';
import { useHistory } from 'react-router-dom';
import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@material-ui/icons';

function ViewImage() {
    const Image = useSelector(selectImage); 
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!Image){
            history.replace('/');
        }
    }, [Image, history]);

    const closeView = () => {
        dispatch(resetImage());
    }

    return (
        <div className="view-image">
            <Close onClick={() => closeView()} className="close-icon" />
            <div className="toolBar">
                <TextFields />
                <Create />
                <Note />
                <MusicNote />
                <AttachFile />
                <Crop />
                <Timer />
            </div>
            <img src={Image} alt="cameraimage" />
            <div className="snap-footer">
                <h2>Send Now</h2>
                <Send fontSize="small" className="send-icon" />
            </div>
        </div>
    )
}

export default ViewImage;
