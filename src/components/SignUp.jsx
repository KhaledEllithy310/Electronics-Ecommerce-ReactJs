import { useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import "./SignUp.css";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import toastrMin from "toastr/build/toastr.min";

const schema = Joi.object({
  userName: Joi.string().min(3).max(200).required().label("User Name"),
  email: Joi.string().min(3).max(200).required().label("Email"),
  password: Joi.string()
    .min(8)
    .required()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .label("Password")
    .messages({
      "string.pattern.base": `"Password" should have at least 1 uppercase letter, 1 digit, 1 special character, and a minimum length of 8`,
    }),
  gender: Joi.string().valid("male", "Female").required().label("Gender"),
  terms: Joi.boolean().valid(true).required().label("Terms"),
}).required();

const SignUp = () => {
  const url = "http://localhost:3006/users";
  const [, , users] = useFetch(url);
  console.log(users);
  const {
    register,
    handleSubmit: formHandleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const [user, setUser] = useState({
    // username: "",
    // email: "",
    // password: "",
    // gender: "",
    // terms: false,
  });

  // const handleSubmit = (data) => {
  //   let form = document.getElementById("form");
  //   if (errors) {
  //     //store the user in state
  //     setUser(data);
  //     //add the user to the server
  //     // eslint-disable-next-line no-debugger
  //     // debugger;
  //     users.forEach(async (user) => {
  //       if (user.userName === data.username) {
  //         console.log(data.username);
  //         toastrMin.error("this user already exists");
  //       } else if (user.email === data.email) {
  //         console.log(user.email);
  //         toastrMin.error("this email already exists");
  //       } else {
  //         try {
  //           let res = await axios.post(`${url}`, data);
  //           console.log(res);
  //           form.reset();
  //           setUser({});
  //           toastrMin.success("Successfully Registered");
  //         } catch (error) {
  //           toastrMin.error("failed Registered");
  //         }
  //       }
  //     });

  //     // await axios.post(`${url}`, data);
  //     //reset the form after sign up
  //     //clear current user
  //   }
  // };

  const handleSubmit = async (data) => {
    const { userName, email } = data;
    let form = document.getElementById("form");

    // Check if username or email already exist
    const userWithSameUsername = users.find(
      (user) => user.userName === userName
    );
    const userWithSameEmail = users.find((user) => user.email === email);

    if (userWithSameUsername) {
      toastrMin.error("This username already exists");
      return;
    }

    if (userWithSameEmail) {
      toastrMin.error("This email already exists");
      return;
    }

    try {
      // Send the request to add the user
      if (errors) {
        await axios.post(url, data);
        form.reset();
        setUser({});
        toastrMin.success("Successfully Registered");
      } else {
        toastrMin.error("you must fill all inputs");
        console.log(errors);
      }
    } catch (error) {
      toastrMin.error("Failed to register");
    }
  };

  return (
    <div className="form__container">
      <div className="form__content">
        <h2 className="form__content__title">create account</h2>
        <form
          className="form__content__inner"
          onSubmit={formHandleSubmit(handleSubmit)}
          id="form"
        >
          <div className="input__container">
            <label className="input__label" htmlFor="userName">
              UserName :
            </label>
            <input
              {...register("userName")}
              type="text"
              // onChange={changeHandler}
              // value={user.userName || ""}
              name="userName"
              id="userName"
            />
          </div>
          {errors.userName && (
            <p className="text-danger error__message">
              {" "}
              {errors.userName.message}{" "}
            </p>
          )}
          <div className="input__container">
            <label className="input__label" htmlFor="email">
              Email Address :
            </label>
            <input
              {...register("email")}
              type="email"
              // value={user.email || ""}
              name="email"
              // onChange={changeHandler}
              id="email"
            />
          </div>
          {errors.email && (
            <p className="text-danger error__message">
              {" "}
              {errors.email.message}{" "}
            </p>
          )}
          <div className="input__container">
            <label className="input__label" htmlFor="password">
              Password :
            </label>
            <input
              {...register("password")}
              type="password"
              // value={user.password || ""}
              name="password"
              // onChange={changeHandler}
              id="password"
            />
          </div>
          {errors.password && (
            <p className="text-danger error__message">
              {" "}
              {errors.password.message}{" "}
            </p>
          )}
          <div className="input__container">
            <label className="input__label">Gender :</label>
            <div className="gender__container">
              <div className="gender__container__inner">
                <input
                  {...register("gender")}
                  type="radio"
                  value="male"
                  name="gender"
                  // onChange={checkHandler}
                  id="male"
                />
                <label htmlFor="male">male</label>
              </div>
              <div className="gender__container__inner">
                <input
                  {...register("gender")}
                  type="radio"
                  value="Female"
                  name="gender"
                  // onChange={checkHandler}
                  id="Female"
                />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
          {errors.gender && (
            <p className="text-danger error__message">
              {" "}
              {errors.gender.message}{" "}
            </p>
          )}
          <div className="input__container__check">
            <input
              {...register("terms")}
              type="checkbox"
              name="terms"
              // checked={user.terms}
              // onChange={checkHandler}
              id="terms"
            />

            <label htmlFor="terms">
              I agree to the terms and conditions and the privacy policy
            </label>
          </div>
          {errors.terms && (
            <p className="text-danger error__message">
              {" "}
              {errors.terms.message}{" "}
            </p>
          )}
          <button type="submit" className="btn__form">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
