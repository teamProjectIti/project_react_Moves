import React from "react";
// import { useHistory } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axioxInstance from "../../axioxConfic/axioxConfic";

const Home = (props) => {


  const [move, setMove] = useState([]);
  //call Api
  useEffect(() => {
    axioxInstance
      .get("")
      .then((res) => {
        console.log(res.data);
        setMove(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //post data
  // axios.post("https://fakestoreapi.com/products",{id:1,name:"one", age:20},{header_Token}).then().catch();
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* {LoaderState && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border " role="status"></div>
          </div>
        )} */}
        

        {
        
        // console.log(move.results);
    //     move.results.map((item)=>{
    //         return (
    //         <div className="col" key={item.id}>
    //                 {item.id}
    //         </div>
    //         )
    // });
        move.map((product.results) => {
          return (
            <div className="col" key={product.id}>
              <div className="card">
               
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                </div>
              </div>
            </div>
          );
        })
    }
      </div>
      
    </>
  );
};

export default Home;
