import React from "react";
import {useParams} from "react-router-dom";

import { useEffect, useState } from "react";
import {axioxInstance ,axioxInstance2}from "../../axioxConfic/axioxConfic";
const MoveDetails = (props) => {
//   const location = useLocation();
  const params = useParams();

  const [move, setMove] = useState([]);
  useEffect(() => {
    console.log(params.id);
    axioxInstance2
      .get(`${params.id}?api_key=25265dff521cf0d1e7929aec1d4649b3`)
      .then((res) => {
        console.log(res.data);
        setMove(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  let img="https://image.tmdb.org/t/p/w500/"+move.poster_path;

  // axiosInstance.post("url",{},{})
  return (
    <>
            <div className="col" key={move.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                  <h2 className="text-warning">{move.original_title}</h2>  
                  <div className="row">
                  
                    <div className="col-6">
                          <img src={img} className="img-fluid rounded-top" alt={move.poster_path}/>
                    </div>
                    <div className="col-6 p-2 border">
                          <h2>{move.overview}</h2>                 
                    </div>
                    </div>               
                  </h5>
                </div>
              </div>
            </div>
    </>
  );
};

export default MoveDetails;
