import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { GreyButton, PrimaryButton } from "../../components/Button/Button";
import addFotoIcon from '../../assets/img/Frame 851212085.svg'
import { addProduct } from "../../store/slices/products/productSlice";  
import './add_card.scss';

const AddProduct = ({ handleClose }) => {
    const [title, setTitle] = useState('');
    const [price_card, setPrice] = useState('');
    const [short_description, setShortDescription] = useState('');
    const [long_description, setLongDescription] = useState('');
    const [photo, setPhotos] = useState([]);
    const [likes, setLikes] = useState([1]);
    const [files, setFiles] = useState([]);

    const dispatch = useDispatch();

    const inpRef = useRef();
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

    function handleAddProduct() {
      const price = Number(price_card);
      dispatch(addProduct({ title, price, short_description, long_description, likes }))
      setTitle('')
      setPrice('')
      setShortDescription('')
      setLongDescription('')
      setFiles([])
      handleClose()
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
            { photo.map((item, index) => (
                <img src={item} alt="Error :(" key={index} style={{width: '76px', height: '96px', borderRadius: '12px'}} />
            )) }
          </div>
          <input 
            type="text" 
            placeholder="Цена" 
            value={price_card} 
            onChange={(e) => setPrice(e.target.value)} />
          <input 
            type="text" 
            placeholder="Название" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} />
          <input 
            type="text" 
            placeholder="Краткое описание"
            value={short_description} 
            onChange={(e) => setShortDescription(e.target.value)} />
          <input 
            type="text" 
            placeholder="Полное описание" 
            value={long_description} 
            onChange={(e) => setLongDescription(e.target.value)} />
          {
            price_card.length === 0 || 
            title.length === 0 || 
            short_description.length === 0 || 
            long_description.length === 0 ? 
            <GreyButton>Добавить</GreyButton> :
            <PrimaryButton onClick={handleAddProduct}>Добавить</PrimaryButton> 
          }
      </div>
    </>
  )
};

export default AddProduct;
