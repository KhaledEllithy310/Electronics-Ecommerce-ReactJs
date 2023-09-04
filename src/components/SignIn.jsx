import { useForm } from "react-hook-form";
import { useFetch } from "../hooks/useFetch";
import toastrMin from "toastr/build/toastr.min";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/isLoggedInSlice";

const SignIn = () => {
  const url = "http://localhost:3006/users";
  //fetch all users
  const [, , users] = useFetch(url);
  //control with inputs form and validation
  const { register, handleSubmit: formHandleSubmit } = useForm();
  //handle navigate
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    const { email, password } = data;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user) {
      toastrMin.success("Successfully Login");
      localStorage.setItem("user", JSON.stringify(user));
      let form = document.getElementById("form");
      form.reset();
      navigate("/");
      dispatch(logIn());
    } else {
      toastrMin.error("Invalid password or email");
    }
  };

  return (
    <div className="form__container">
      <div className="form__content">
        <h2 className="form__content__title">Sign In </h2>
        <form
          className="form__content__inner"
          onSubmit={formHandleSubmit(handleSubmit)}
          id="form"
        >
          <div className="input__container">
            <label className="input__label" htmlFor="email">
              Email Address :
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="input__container">
            <label className="input__label" htmlFor="password">
              Password :
            </label>
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button type="submit" className="btn__form">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
