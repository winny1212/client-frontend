import { useRef } from 'react';
// import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import PhotoSizeSelectActualTwoToneIcon from '@mui/icons-material/PhotoSizeSelectActualTwoTone';
// import ImgPreview from './ImgPreview';
// import HelperText from './HelperText';

const ImgUpload = ({
  id,
  name,
  imgLabel,
  value,
  handleImageDetailsChange,
  ...inputProps
}) => {
  const copyid = id || 'img-upload';
  // const imgRef = useRef();

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
          onChange={(e) =>
            handleImageDetailsChange(name, e.currentTarget.files[0])
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
    </>
  );
};

export default ImgUpload;
