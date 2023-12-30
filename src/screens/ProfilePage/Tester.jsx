import { useRef, useState } from "react";


const Tester = () => {
  const [photos, setPhotos] = useState([]);
  const [files, setFiles] = useState([])

  const inpRef = useRef();
  const formData = new FormData();

  const handleChange = () => {
    const selectedPhoto = inpRef.current.files[0];
    if (selectedPhoto) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotos([...photos, e.target.result]);
      };
      reader.readAsDataURL(selectedPhoto);
        setFiles([...files, inpRef.current.files[0]])
        formData.append(`files`, files);
    }
    console.log(files)
    // console.log(formData.get("files"))
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        {photos.map((item) => (
          <img style={{ width: "100px", height: "100px" }} src={item} alt="Error" />
        ))}
      </div>
      <button
      onClick={()=>{
        inpRef.current.click()
      }}
      >
txt
      </button>
      <input onChange={handleChange} ref={inpRef} type="file" style={{display: 'none'}} />
    </div>
  );
};
export default Tester;