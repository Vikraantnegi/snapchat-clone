import React, {useRef} from 'react'
import Webcam from 'react-webcam'

const Constraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}

function WebCamCapture() {
    const webCamRef = useRef(null);
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
        </div>
    )
}

export default WebCamCapture
