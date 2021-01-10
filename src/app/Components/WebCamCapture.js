import React, {useRef, useCallback, useState} from 'react'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const Constraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}

function WebCamCapture() {
    const webCamRef = useRef(null);
    const [image, setimage] = useState('');
    const captureImage = useCallback(
        () => {
            const imageSource = webCamRef.current.screenshot();
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
                onClick={() => captureImage}
            />
        </div>
    )
}

export default WebCamCapture
