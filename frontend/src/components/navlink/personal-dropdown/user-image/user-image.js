import React from 'react';
import './user-image.css';
import Image from "react-bootstrap/Image";


const UserImage = () => {
  return (
      <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGrQcKnwf6dUdQVeA7jxCRzMHRNhIN_zn1JxXCymQMkaFATrP"
          className="user-logo"
          alt="React Bootstrap logo"
          roundedCircle
      />
      );
};

export default UserImage;
