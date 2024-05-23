"use client"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import React, { useState } from "react"
import { Toaster, toast } from "react-hot-toast"

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const toMainPage = () => {
    window.location.href = "/main"
  }

  const handleLogin = async () => {
    if (!email || !password) {
      return toast.error("All fields are required")
    }
    try {
      setIsLoading(true)
      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      const raw = JSON.stringify({
        email: email,
        password: password,
      })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      await fetch("http://localhost:1000/api/v1/admins/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.msg === "login successful") {
            toast.success(result.msg)
            console.log(result.msg)
            setIsLoading(false)
            window.location.href = "./main"
          } else {
            toast.error(result.msg)
            setIsLoading(false)
          }
        })
        .catch((error) => console.error(error))
    } catch (err) {
      console.log(err)
    }
  }

  const signup = () => {
    window.location.href = "/signup"
  }

  return (
    <div className="flex items-center justify-center gap-[30px]  min-h-[100vh]">
      <div>
        <Image
          height={300}
          width={300}
          src="/doc.jpg"
          alt="a young doctor smiling"
          className="rounded-[10px] doc"
        />
      </div>
      <div className="bg-white p-10 rounded-[10px] shadow-lg flex flex-col gap-[12px] items-center form">
        <div className="flex flex-col items-center">
          <h1 className="text-[20px]  font-bold ">G_TEN HOSPITAL</h1>
          <h1 className="text-[15px] text-[dodgerblue] font-bold ">
            ADMIN PORTAL
          </h1>
        </div>

        <form action="" className="flex flex-col  gap-[12px]">
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="" className="text-[13px]">
              Username
            </label>
            <input
              onChange={(e) => setemail(e.target.value)}
              className="text-[13px] p-[10px] border-dashed outline-none bg-[transparent] w-[16vw] border-[#ccc] border-[2px] rounded-[10px]"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="" className="text-[13px]">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="text-[13px] p-[10px] border-dashed outline-none bg-[transparent] w-[16vw] border-[#ccc] border-[2px] rounded-[10px]"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </form>
        <div>
          <button
            onClick={() => handleLogin()}
            className="bg-[dodgerblue] hover:bg-[#4482d4] mt-[20px] text-[13px] items-center flex justify-center p-[10px] w-[16vw] text-white rounded-[10px]"
          >
            {isLoading ? (
              <img className="h-[3vh] " src="/loading.gif" alt="loading" />
            ) : (
              "Login"
            )}
          </button>
        </div>

        <div className="flex gap-[5px]">
          <p className="text-[13px]">Are you a new Admin?</p>
          <p
            className="text-[dodgerblue] text-[13px] cursor-pointer"
            onClick={() => signup()}
          >
            Sign up
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Login
