import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { storage } from '../../services/firebase';

import {
  ref,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';

// import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import ImgPreview from './ImgPreview';

import { Typography } from '@mui/material';
// import HelperText from './HelperText';

const ImgUpload = ({
  id,
  name,
  imgLabel,
  value,
  handleImageDetailsChange,
  ...inputProps
}) => {
  const [progress, setProgress] = useState(0);
  const [imgUploaded, setImgUploaded] = useState();
  const copyid = id || 'img-upload';
  // const imgRef = useRef();

  const handleChange = (e) => {
    const file = e.currentTarget.files[0];
    const folderPath = 'profile_images';
    const fileName = `img_${nanoid(10)}_${file.name}`;
    const storageRef = ref(storage, `/${folderPath}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const currentProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(currentProgress);
      },
      (error) => console.log(error),
      () => {
        // when image is uploaded and URL is obtained, update details
        getDownloadURL(uploadTask.snapshot.ref).then((imgURL) => {
          setImgUploaded(imgURL);
          handleImageDetailsChange(name, imgURL);
        });
      },
    );

    handleImageDetailsChange(name, e.currentTarget.files[0]);
  };

  return (
    <>
      <label htmlFor={id}>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          // ref={imgRef}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          {...inputProps}
        />
        <span className="btn-icon">
          <PhotoSizeSelectActualTwoToneIcon
            sx={{ mr: 1 }}
            color="secondary"
            fontSize="small"
          />
          {imgLabel}
        </span>
        {progress > 1 && progress < 99 && (
          <Typography variant="h7">Processing: {progress} %</Typography>
        )}
        {imgUploaded && <ImgPreview src={imgUploaded} alt="img-preview" />}
      </label>
    </>
  );
};

export default ImgUpload;
