const formData = new FormData();
  
const handleChange = () => {
  const selectedPhoto = inpRef.current.files[0];
  if (selectedPhoto) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotos([...photo, e.target.result]);
    };
    reader.readAsDataURL(selectedPhoto);
      setFiles([...files, inpRef.current.files[0]])
      formData.append(`files`, files);
  }
};
