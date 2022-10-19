import { React } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  function handleClick(){
    navigate("/home")
  }
  const handleChange = (e) => {
    const { email, value } = e.target;
    console.log(value);
    setFormValues({ ...formValues, [e.target.name]: value })
    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "E-mail is required!"}
      else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!"
    }
    return errors;
  }

return (
  <form onSubmit={handleSubmit}>
    <div className="relative">
      <div
        className=" flex h-screen w-full flex-col justify-center absolute"
        style={{
          backgroundImage: `url('backgroundd.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-[#161819] opacity-[0.65] h-screen ">
        <div className="h-full py-3 flex justify-center items-center ">
          <div className="">
            <h4 className="text-white text-lg font-semibold text-center">Student Login</h4>
            <div className="pt-7">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formValues.email}
                onChange={handleChange}
                className=" w-[418px] h-[55px] placeholder-black pl-5 text-xs font-medium rounded-lg border border-[#000000]"
              ></input>
               <p>{formErrors.email}</p>
              <div className="pt-1">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  
                  className=" w-[418px] h-[55px] pl-5 text-xs placeholder-black font-medium rounded-lg border border-[#000000] "
                ></input>
                <p>{formErrors.password}</p>
                <div className="flex  justify-center items-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#006ACB] to-[#031EAC] mt-4 text-white rounded-lg w-[252px] h-[55px] font-semibold text-xs text-align-center border-2 border-[#006ACB]"
                    onClick={handleClick}
                  >
                    LOGIN
                  </button>
                </div>
                <div className="flex justify-center items-center text-align-center top-608 left-584 pt-10 text-white">
                  {" "}
                  <h6>
                    {" "}
                    Dont have an account?{" "}
                    <a href="" className="text-[#006ACB]">
                      {" "}
                      Create new{" "}
                    </a>{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);
      }

export default Login;





