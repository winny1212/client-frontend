import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';

const ImgUpload = (props) => {
  const { e, id, name, imgLabel, value, ...inputProps } = props;

  const copyid = id || 'img-upload';

  return (
    <>
      <label htmlFor={copyid}>
        <input
          style={{ display: 'none' }}
          id={copyid}
          name={name}
          value={value}
          type="file"
          accept="image/*"
          {...inputProps}
        />
        <span className="btn-icon">
          <PhotoCameraTwoToneIcon
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
