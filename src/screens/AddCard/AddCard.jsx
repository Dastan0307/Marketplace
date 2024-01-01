import { useRef, useState } from "react";
import { GreyButton, PrimaryButton } from "../../components/Button/Button";
import addFotoIcon from '../../assets/img/Frame 851212085.svg'
import './add_card.scss';

const AddCard = () => {
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [short_description, setShortDescription] = useState('');
    const [long_description, setLongDescription] = useState('');
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
      console.log('filesf',files)
      console.log('formData', formData.get("files"));
    };
  



  return (
    <>
        <div className="card__add">
            <div className="card__add_img">
            <input
                type="file"
                onChange={handleChange}
                ref={inpRef}
                style={{display: 'none'}}
            />
                <img src={addFotoIcon} alt="Error :("  onClick={()=>{ inpRef.current.click() }} /> 
                { photos.map((item, index) => (
                    <img src={item} alt="Error :(" key={index} style={{width: '76px', height: '96px', borderRadius: '12px'}} />
                )) }
            </div>
                <input type="text" placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Краткое описание" value={short_description} onChange={(e) => setShortDescription(e.target.value)} />
                <input type="text" placeholder="Полное описание" value={long_description} onChange={(e) => setLongDescription(e.target.value)} />
            {
                price.length === 0 || 
                title.length === 0 || 
                short_description.length === 0 || 
                long_description.length === 0 ? 
                <GreyButton>Добавить</GreyButton> :
                <PrimaryButton>Добавить</PrimaryButton> 
            }
        </div>
    </>
  )
};

export default AddCard;
