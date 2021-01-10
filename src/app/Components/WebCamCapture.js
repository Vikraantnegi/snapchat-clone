import React from 'react'
import Webcam from 'react-webcam'

const Constraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}

function WebCamCapture() {
    return (
        <div className="webCamCapture">
            <Webcam 
                
            />
        </div>
    )
}

export default WebCamCapture
