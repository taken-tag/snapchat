import React, {useRef, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import Webcam from 'react-webcam';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import {setCameraImage} from "./features/cameraSlice";
import { useHistory } from 'react-router';
import "./webcamCapture.css";

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
}


function WebcamCapture(){
const webcamRef = useRef(null);
const dispatch = useDispatch();
const history = useHistory();

const capture = useCallback(()=> {
       const imageSrc = webcamRef.current.getScreenshot()
       dispatch(setCameraImage(imageSrc));
       history.push("./preview")

}, [webcamRef])

return(
    <div className="webcamCapture">
             <Webcam
                 audio={false}
                 height={videoConstraints.height}
                 ref={webcamRef}
                 screenshotFormat= "image/jpeg"
                 width= {videoConstraints.width}
                 videoConstraints={videoConstraints}
             />
             <RadioButtonUncheckedOutlinedIcon
                 className="webcamCapture_button"
                 onClick={capture}
                 fontSize="large"
             />
    </div>
)
};


export default WebcamCapture;
