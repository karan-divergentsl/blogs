import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Signup({}) {
    const navigate = useNavigate();

    const handleSubmit = (e) => 
        {
            e.preventDefault();
          navigate('/posts'); 
        }


  return (
    <div className="login-page">
      <div className="loginForm signupForm">
        <div className="pb-12 text-center">
          <h1 className="font-nacelle text-3xl font-semibold md:text-4xl">
            Create an account
          </h1>
        </div>
        <form
          className="mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex items-center justify-between gap-3">
            <label
              className="text-indigo-200/65 mb-1 block text-sm font-medium"
              htmlFor="email"
            >
              Name
            </label>
          </div>
          <input
            id="name"
            type="text"
            className="form-input w-full"
            placeholder="Your full name"
            // onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}
          />

          <div className="mb-1 flex items-center justify-between gap-3">
            <label
              className="text-indigo-200/65 mb-1 block text-sm font-medium"
              htmlFor="email"
            >
              Number
            </label>
          </div>
          <input
            id="number"
            type="text"
            className="form-input w-full"
            placeholder="Your number"
            // onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}
          />

          <div className="mb-1 flex items-center justify-between gap-3">
            <label
              className="text-indigo-200/65 mb-1 block text-sm font-medium"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <input
            id="username"
            type="text"
            className="form-input w-full"
            placeholder="Your email"
            // onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}
          />
          {/* {formik.touched.username && formik.errors.username ? <div className="inputErrors">{formik.errors.username}</div> : null} */}
          <div>
            <div className="mb-1 flex items-center justify-between gap-3">
              <label
                className="text-indigo-200/65 block text-sm font-medium"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              className="form-input w-full"
              type="password"
              placeholder="Your password"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.password}
            />
            {/* {formik.touched.password && formik.errors.password ? <div className="inputErrors">{formik.errors.password}</div> : null} */}
          </div>
          <div className="mt-6 space-y-5">
            <button
              type="submit"
              className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
            >
              Sign up
            </button>
            <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-gray-400/25">
              or
            </div>
          </div>
        </form>
        <div className="mt-6 text-center text-sm text-indigo-200/65">
          Already have an account?{" "}
          <Link to={"/"} className="font-medium text-indigo-500 cursor-pointer">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
