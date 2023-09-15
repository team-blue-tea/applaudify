"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Appreciation } from "../../types";
import { AppreciationCard } from "@/components/AppreciationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/home");
    },
  });

  const [data, setData] = useState([]);

  const getAppreciation = async () => {
    const response = await fetch("http://localhost:8081/appreciations");
    const jsonData = await response.json();
    setData(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    getAppreciation();
  }, []);

  const userAvatar = session?.user?.image ? (
    <Image src={session.user.image} alt="" width={100} height={100} />
  ) : null;

  return (
    <>
      <div>
        <h1>Welcome {session?.user?.name}!</h1>
        {userAvatar}
        <ul>
          {data.map((element: Appreciation, index) => (
            <li key={index}>
              <AppreciationCard
                senderName={element.senderName}
                receiverName={element.receiverName}
                comment={element.comment}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
