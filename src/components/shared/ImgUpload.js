import { useState, useRef } from 'react';
// import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
import ImgPreview from './ImgPreview';
import HelperText from './HelperText';

const ImgUpload = ({
  id,
  name,
  imgLabel,
  value,
  handleImageDetailsChange,
  ...inputProps
}) => {
  const copyid = id || 'img-upload';
  const imgRef = useRef();

  return (
    <>
      <label htmlFor={copyid}>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={imgRef}
          id={copyid}
          name={name}
          value={value}
          onChange={(e) =>
            handleImageDetailsChange(name, copyid, e.currentTarget.files[0])
          }
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
      </label>
      {/* <br />
      <HelperText sx={{ ml: 1, mt: 1 }}>{selectedFile?.name || ''}</HelperText> */}
      {/* <ImgPreview src={URL.createObjectURL(selectedFile)} alt="img-file" /> */}
    </>
  );
};

export default ImgUpload;
