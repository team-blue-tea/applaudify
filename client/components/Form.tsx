import { User, UserList } from "@/app/types";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import GifPicker, { TenorImage } from "gif-picker-react";
import TenorGif from "./TenorGif";
import Collapsible from "react-collapsible";

const Form = (props: UserList) => {
  const [person, setPerson] = useState("");
  const [userArray, setUserArray] = useState(props.list);
  const { data: session, status } = useSession();
  const [comment, setComment] = useState("");
  const [selectedGif, setSelectedGif] = useState("");

  const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const generateAppreciation = async (e: any) => {
    e.preventDefault();
    const appreciation = {
      senderName: session?.user?.name,
      receiverName: person,
      comment: comment,
      imageId: null,
      tenorUrl: selectedGif,
    };
    const res = await fetch(backendUrl + "/appreciations/add", {
      method: "POST",
      body: JSON.stringify(appreciation),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    userArray.unshift({ name: "Select:" });
  }, []);

  return (
    <div className="form-container">
      <form
        onSubmit={generateAppreciation}
        className="generate-appreciation__form"
      >
        <label>
          <h5>Select the person you want to appreciate:</h5>
          <select
            onChange={(e) => setPerson(e.currentTarget.value)}
            value={person}
            id="meme"
            className="form-control"
          >
            {userArray
              .filter((user) => user.name !== session?.user?.name)
              .map((user, index) => {
                return (
                  <option key={index} value={user.name}>
                    {user.name}
                  </option>
                );
              })}
          </select>
        </label>
        <label>
          <h5>What do you appreciate about this person:</h5>
          <textarea
            value={comment}
            placeholder="Write your appreciation here"
            onChange={(e) => setComment(e.currentTarget.value)}
            className="input-text"
          />
        </label>
        <input type="submit" value="Send 👏" className="form-submit" />
      </form>
      <Collapsible trigger={"Add GIF"}>
        <GifPicker tenorApiKey={process.env.NEXT_PUBLIC_TENOR_API as string} onGifClick={(gif) => {
          setSelectedGif(gif.url)
        }} />
      </Collapsible>
    </div>
  );
};

export default Form;
