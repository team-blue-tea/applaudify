import { User, UserList } from "@/app/types";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import GifPicker, { TenorImage } from "gif-picker-react";
import Collapsible from "react-collapsible";

const Form = (props: UserList) => {
  const firstIndex: User = {
    name: "Select:",
  };

  const [person, setPerson] = useState("");
  const [userArray, setUserArray] = useState([firstIndex, ...props.list]);
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

  return (
    <div className="form-container">
      <form
        onSubmit={generateAppreciation}
        className="generate-appreciation__form"
      >
        <label className="form-select">
          <h5 className="form-select__title">
            Select the person you want to appreciate:
          </h5>
          <select
            onChange={(e) => setPerson(e.currentTarget.value)}
            value={person}
            id="meme"
            className="form-select__options"
          >
            {userArray
              .filter((user: User) => user.name !== session?.user?.name)
              .map((user, index) => {
                return (
                  <option key={index} value={user.name}>
                    {user.name}
                  </option>
                );
              })}
          </select>
        </label>
        <div className="form-comment">
          <h5 className="form-comment__title">
            What do you appreciate about this person:
          </h5>
          <label className="form-comment__label">
            <textarea
              value={comment}
              placeholder="Write your appreciation here"
              onChange={(e) => setComment(e.currentTarget.value)}
              className="form-comment__textarea"
            />
          </label>
        </div>
        <div className="gif-container">
          <div className="gif-list">
            <Collapsible
              className="collapsible-button"
              openedClassName="collapsible-button"
              trigger={"Add GIF"}
            >
              <div className="gif-picker-container">
                <GifPicker
                  width={200}
                  height={300}
                  tenorApiKey={process.env.NEXT_PUBLIC_TENOR_API as string}
                  onGifClick={(gif) => {
                    setSelectedGif(gif.url);
                    event?.preventDefault();
                  }}
                />
              </div>
            </Collapsible>
          </div>
          <input type="submit" value="Send 👏" className="form-submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
