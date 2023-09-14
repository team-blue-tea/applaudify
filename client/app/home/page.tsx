'use client'

import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Appreciation } from "../types";
import { AppretiationCard } from "@/components/AppretiationCard";

function Home() {

  const [data, setData] = useState([]);

  const getAppreciation = async () => {
    const response = await fetch('http://localhost:8081/appreciations');
    const jsonData = await response.json();
    setData(jsonData);
    console.log(jsonData);
  }

  useEffect(() => {
    getAppreciation();
  }, [])

  return (
    <>
    <div>
        <h1>WELCOME TO APPLAUDIFY!!!!!</h1>
        <ul>
          {data.map((element: Appreciation, index)=>(
            <li key={index}>
              <AppretiationCard senderName={element.senderName} receiverName={element.receiverName} comment={element.comment} />
            </li>
          ))}
        </ul>
    </div>
  
    </>
  )
}

export default Home