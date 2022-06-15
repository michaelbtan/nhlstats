import React from 'react';
import { useNavigate} from "react-router-dom";

export const BackBtn = () => {

  let navigate = useNavigate();

  return (
    <div>
     <button onClick={() => navigate(-1)}>Back</button> 
    </div>
  )
}
