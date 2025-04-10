"use client";
import Head from "next/head";
import axios from "axios";
import cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const router = useRouter();

  const handlesignUp = async () => {
    try {
      const res = await axios.post(`/api/user/register`, {
        name,
        email,
        password,
      });
      if (res?.data) {
        cookies.set("user", res.data.token, { expires: 7 });
        alert(res.data.msg);
        router.back();
      }
    } catch (error) {
      console.error("SignUp Error:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`/api/user/login`, {
        email,
        password,
      });
      if (res?.data) {
        cookies.set("user", res.data.token, { expires: 7 });
        alert(res.data.msg);
        router.back();
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Failed to log in. Please check your credentials.");
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  return (
    <div>
      <Head>
        <title>Roomanjo-login</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
        <div className="absolute w-full top-10 px-20 flex items-center">
          <h2 className="text-5xl font-bold mr-5 text-white">Roomanjo</h2>
          <p className="font-bold text-2xl -my-7 text-white">
            Hotels and homes across more than 10 cities
          </p>
        </div>
        <div className="flex justify-center w-9/12 items-center">
          <div>
            <p className="font-bold text-5xl text-justify text-white">
              There is a Smarter way to Roomanjo around
            </p>
            <p className="text-2xl mt-5 text-justify text-gray-400">
              Sign up with your phone number and get exclusive access to
              discounts and savings on Roomanjo stays with our many travel
              partners.
            </p>
          </div>
          <div className=" ml-20 pb-40 w-10/12 border bg-slate-50">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-green-300 to bg-yellow-500 text-lg font-bold text-blue-950">
              Sign up & get ₹500 Roomanjo Money
            </p>
            <div className="px-10">
              <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your email and password to continue
              </p>
              {login ? (
                ""
              ) : (
                <input
                  type="text"
                  placeholder="Enter your name....."
                  className="outline-none border border-black px-3 py-1 my-3 w-96 h-10"
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <input
                type="email"
                placeholder="Enter your Email....."
                className="outline-none border border-black px-3 py-1 my-3 w-96 h-10"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter your password....."
                className="outline-none border border-black px-3 py-1 my-3 w-96 h-10"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-96 h-14 text-lg font-bold bg-red-400 hover:cursor-pointer hover:bg-red600 text-white my-5 rounded-lg"
                onClick={login ? handleLogin : handlesignUp}
              >
                {login ? "Login" : " Sign Up"}
              </button>
              <p className="my-1 text-xl">
                <span>
                  {login
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  onClick={handleToggle}
                >
                  {login ? "Sign Up" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
