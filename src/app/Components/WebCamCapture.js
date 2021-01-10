import React, {useRef, useCallback} from 'react'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {useDispatch} from 'react-redux';
import {updateImage} from '../../features/cameraSlice';

const Constraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}

function WebCamCapture() {
    const webCamRef = useRef(null);
    const dispatch = useDispatch();
    const captureImage = useCallback(
        () => {
            const imageSource = webCamRef.current.getScreenshot();
            dispatch(updateImage(imageSource));
        },
        [webCamRef],
    )
    return (
        <div className="webCamCapture">
            <Webcam 
                audio={false}
                height={Constraints.height}
                ref={webCamRef}
                screenshotFormat="image/jpeg"
                width={Constraints.width}
                videoConstraints={Constraints}
            />
            <RadioButtonUncheckedIcon
                className="camera-button"
                onClick={captureImage}
            />
        </div>
    )
}

export default WebCamCapture
