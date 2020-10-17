import React from 'react';

function Modal({onClose, ...props }) {
 //current photo is props
    console.log(onClose)
 const {name, category, description, index} = props.currentPhoto;
    
    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img
          src={require(`../../assets/large/${category}/${index}.jpg`)} 
          alt="current category"
           />
          <p>
            {description}
          </p>
          <button type="button" onClick={onClose}>
            Close this modal
          </button>
        </div>
      </div>
    );
  }
  
  export default Modal;


 //funciton Modal({currentPhoto, onClose}) works because you can destructure from parent when names are identical. line 6 would be changed to read const {...} = currentPhoto.  Otherwise we have to grab onClose as a function and use the spread operator to get the other stuff into an object called props. This would only work w/ two things. For multiple use the above method.