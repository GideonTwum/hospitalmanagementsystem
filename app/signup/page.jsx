"use client"
import { Image } from "@nextui-org/react"
import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const page = () => {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  // handle sign up
  const signup = async () => {
    if (!name || !email || !password) {
      return toast.error("All fields are required")
    }
    try {
      setIsLoading(true)
      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      const raw = JSON.stringify({
        name: name,
        email: email,
        password: password,
      })

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      await fetch("http://localhost:1000/api/v1/admins/create", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.msg === "Sign up successful") {
            setIsLoading(true)
            toast.success(result.msg)
            console.log(result.msg)
            setIsLoading(false)
            window.location.href = "/"
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

  const toLoginPage = () => {
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen flex items-center justify-center sign">
      <div className="flex items-center gap-[2rem]">
        <div className="image">
          <Image width={300} height={300} src="/fdoc.jpg" alt="female doctor" />
        </div>
        <div className="bg-white h-[70vh] p-10 rounded-[10px] shadow-lg flex flex-col gap-[12px] items-center forms">
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
                onChange={(e) => setName(e.target.value)}
                className="text-[13px] p-[10px] border-dashed outline-none bg-[transparent] w-[16vw] border-[#ccc] border-[2px] rounded-[10px]"
                type="text"
                placeholder="Enter your username"
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label htmlFor="" className="text-[13px]">
                Email
              </label>
              <input
                onChange={(e) => setemail(e.target.value)}
                className="text-[13px] p-[10px] border-dashed outline-none bg-[transparent] w-[16vw] border-[#ccc] border-[2px] rounded-[10px]"
                type="text"
                placeholder="Enter your email"
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
              onClick={() => signup()}
              className="bg-[dodgerblue] hover:bg-[#4482d4] mt-[20px] text-[13px] items-center flex justify-center p-[10px] w-[16vw] text-white rounded-[10px]"
            >
              {isLoading ? (
                <img className="h-[3vh] " src="/loading.gif" alt="loading" />
              ) : (
                "signup"
              )}
            </button>
          </div>

          <div className="flex gap-[5px]">
            <p className="text-[13px]">Already an admin?</p>
            <p
              className="text-[dodgerblue] text-[13px] cursor-pointer"
              onClick={() => toLoginPage()}
            >
              Login
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default page
