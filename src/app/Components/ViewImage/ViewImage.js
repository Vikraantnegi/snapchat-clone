import React, {useEffect} from 'react';
import './ViewImage.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetImage, selectImage } from '../../../features/cameraSlice';
import { useHistory } from 'react-router-dom';
import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@material-ui/icons';
import {v4 as uuid} from 'uuid';
import {db, storage} from '../../firebase';
import firebase from 'firebase';

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

    const SendSnap = () => {
        const id = uuid();
        const uploadSnap = storage.ref(`posts/${id}`).putString(Image, 'data_url');
        uploadSnap.on('state_changed', null, (err) => {
            console.log(err);
        }, () => {
            storage.ref('posts').child(id).getDownloadURL()
            .then(url => {
                db.collection('posts').add({
                    imgUrl : url,
                    username: 'Waeed',
                    read: false,
                    // profilePic,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
                history.replace('/chats');
            })
        })
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
            <div onClick={() => SendSnap()} className="snap-footer">
                <h2>Send Now</h2>
                <Send fontSize="small" className="send-icon" />
            </div>
        </div>
    )
}

export default ViewImage;
