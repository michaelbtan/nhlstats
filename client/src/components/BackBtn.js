import React from 'react';
import { useNavigate} from "react-router-dom";


export default function BackBtn() {

  let navigate = useNavigate();

  return (
    <div>
     <button onClick={() => navigate(-1)}>Back</button> 
    </div>
  )
}
