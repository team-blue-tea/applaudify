'use client'

import Navbar from "@/componenets/Navbar"
import Link from "next/link"
import { useEffect } from "react";

async function Home() {

  const getAppreciation = async () => {
    const response = await fetch('http://localhost:8081/appreciations');
    const jsonData = await response.json();
    console.log(jsonData);
    // try {
    //   const response = await fetch('http://localhost:8081/appreciations');
    //   if (!response.ok) {
    //     throw new Error(`HTTP Error! Status: ${response.status}`);
    //   }
    //   const jsonData = await response.json();
    //   console.log(jsonData);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  }

  useEffect(() => {
    getAppreciation();
  }, [])

  return (
    <>
    <div>
        <h1>WELCOME TO APPLAUDIFY!!!!!</h1>
        <img src="https://images.pexels.com/photos/4083599/pexels-photo-4083599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga perspiciatis dolorum et eveniet illum dignissimos iste recusandae minus libero?</p>
     
    </div>
  
    </>
  )
}

export default Home