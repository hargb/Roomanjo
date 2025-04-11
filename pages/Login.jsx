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

  const handleToggle = () => setLogin(!login);

  return (
    <>
      <Head>
        <title>Roomanjo - Login</title>
      </Head>

      <div className="flex flex-col min-h-screen justify-center items-center bg-login-background bg-cover bg-no-repeat relative px-4">
        {/* Overlay Heading */}
        <div className="absolute top-5 w-full px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-4xl font-bold text-white">Roomanjo</h2>
          <p className="text-white font-semibold text-center sm:text-left mt-2 sm:mt-0">
            Hotels and homes across more than 10 cities
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row w-full max-w-6xl items-center justify-center mt-20 gap-10">
          {/* Left Info Section */}
          <div className="text-white text-center lg:text-left max-w-xl">
            <p className="text-3xl sm:text-4xl font-bold mb-4">
              There is a smarter way to Roomanjo around
            </p>
            <p className="text-lg text-gray-300">
              Sign up and get exclusive access to discounts and savings on
              Roomanjo stays with our many travel partners.
            </p>
          </div>

          {/* Login Form */}
          <div className="w-full sm:w-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
            <p className="h-10 flex items-center px-4 bg-gradient-to-r from-green-300 to-yellow-400 text-base font-bold text-blue-950">
              Sign up & get ₹500 Roomanjo Money
            </p>

            <div className="px-6 py-6">
              <h3 className="text-2xl font-bold mb-4">Login / Signup</h3>
              <p className="font-semibold text-sm mb-4">
                Please enter your email and password to continue
              </p>

              {!login && (
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-400 px-3 py-2 rounded mb-4 outline-none"
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-400 px-3 py-2 rounded mb-4 outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-400 px-3 py-2 rounded mb-5 outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={login ? handleLogin : handlesignUp}
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition mb-4"
              >
                {login ? "Login" : "Sign Up"}
              </button>

              <p className="text-sm text-center">
                {login ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="text-red-600 underline ml-1"
                >
                  {login ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
