import { useState } from "react";

export default function AddUsre() {
  const [user, setUser] = useState({
    userName: "beshoy",
    Email: "beshoyAmen@gmail.com",
    pass:"",
    confirm:""
  });

  //check
  const [errors, setError] = useState({
    userNameError: null,
    EmailError: null,
    PassError: null,
    confirmError:null
  });

  //validation
  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUser({
        ...user,
        userName: e.target.value,
      }); 

      setError({
        ...errors,
        userNameError:
          e.target.value.length === 0 || e.target.value.length === ""
            ? "this flied is required.."
            : e.target.value.length > 10
            ? "Character must be less than 10"
            : null,
      });
    }

      if (e.target.name === "pass") {
        setUser({
          ...user,
          pass: e.target.value,
        });

      }
      if (e.target.name === "confirm") {
        setUser({
          ...user,
          confirm: e.target.value,
        });
      }
     
      

     if (e.target.name === "Email") {
        setUser({
          ...user,
          Email: e.target.value,
        });
  
        setError({
          ...errors,
          EmailError:
            e.target.value.length === 0 || e.target.value.length === ""
              ? "this flied is required.."
              : e.target.value.length > 10
              ? "Character must be less than 10"
              : null,
        });
      }
      else if (e.target.name === "Pass") {
       
        setError({
          ...errors,
          PassError:
            e.target.value.length === 0 || e.target.value.length === ""
              ? "this flied is required.."
              : e.target.value.length > 10
              ? "Character must be less than 10"
              : null,
        });
      } 
      else if (e.target.name === "confirm") {
       console.log(user.pass);
       console.log(user.confirm);
        setError({
          ...errors,
          confirmError:
            e.target.value.length === 0 
              ? "this flied is required.."
              : e.target.value.length > 10
              ? "Character must be less than 10"
              : e.target.value != user.pass
              ?"Not Match password with confirm"
              :null,
        });
      }
  };

  return (
    <>
      <form>
        <div classNameName="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className={`form-control ${(errors.userNameError)?'border-danger':'border-success'}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.userName}
            name="userName"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <small className="text-danger">{errors.userNameError}</small>

        <div classNameName="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className={`form-control ${(errors.EmailError)?'border-danger':'border-success'}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.Email}
            name="Email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        <small className="text-danger">{errors.EmailError}</small>

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${(errors.PassError)?'border-danger':'border-success'}`}
            id="exampleInputPassword1"
            name="pass"
            onChange={(e) => {
                handleChange(e);
              }}
          />
        </div>
        <small className="text-danger">{errors.PassError}</small>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${(errors.confirmError)?'border-danger':'border-success'}`}
            id="exampleInputPassword1"
            name="confirm"
            onChange={(e) => {
                handleChange(e);
              }}
  
          />
        </div>
        <small className="text-danger">{errors.confirmError}</small>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </>
  );
}
