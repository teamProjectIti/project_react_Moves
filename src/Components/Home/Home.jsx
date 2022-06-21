import React from "react";
// import { useHistory } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {axioxInstance ,axioxInstance2}from "../../axioxConfic/axioxConfic";

const Home = (props) => {
  const [move, setMove] = useState([]);
  //call Api
  useEffect(() => {
    axioxInstance
      .get("")
      .then((res) => {
        console.log(res.data.results);
        setMove(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [data, setData] = useState({
    next:1,
    back:0
  });

  const increase = (e) => {
    if (e.target.name === "next") {
      setData({
        ...data,
        next: data.next+1,
    }); 
      var NextPage=`popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${data.next}`;

      axioxInstance2
      .get(NextPage)
      .then((res) => {
        console.log(res.data.results);
        setMove(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  const disCrease = (e) => {
    if (e.target.name === "back") {
      setData({
        ...data,
        next: data.next-1,
      }); 
      var BackPage=`popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${data.next}`;

      axioxInstance2
      .get(BackPage)
      .then((res) => {
        console.log(res.data.results);
        setMove(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  console.log("this is move");
  console.log(move);
  //post data
  // axios.post("https://fakestoreapi.com/products",{id:1,name:"one", age:20},{header_Token}).then().catch();
  return (
    <>
    <br/> <br/>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* {LoaderState && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border " role="status"></div>
          </div>
        )} */}
        <div className="container text-center">
            <a name="next" className="btn btn-outline-primary"  onClick={(e)=>{increase(e)}} >Next</a>
            <a name="back" className="btn btn-outline-primary"  onClick={(e)=>{disCrease(e)}} >Back</a>
        </div>
    <br/> <br/>

        {move.map((product) => {
          var img="https://image.tmdb.org/t/p/w500/"+product.backdrop_path;
          return (
            <div className="col-2" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                  <Link to={`/details/${product.id}`}>{product.title}</Link>                 
                  </h5>
                  <img src={img} className="img-fluid rounded-top" alt={product.backdrop_path}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
