import { Appreciation, User, UserList } from "@/app/types";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import GifPicker, { TenorImage } from "gif-picker-react";
import Collapsible from "react-collapsible";
import InputEmoji from "react-input-emoji";

const Form = (props: UserList) => {
  const firstIndex: User = {
    name: "Select:",
  };

  const [person, setPerson] = useState("Select:");
  const [userArray, setUserArray] = useState([firstIndex, ...props.list]);
  const { data: session, status } = useSession();
  const [comment, setComment] = useState("");
  const [selectedGif, setSelectedGif] = useState("");
  const [appreciationSent, setAppreciationSent] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageId, setImageId] = useState("white.png");
  const [text, setText] = useState("");
  const [gifSent, setGifSent] = useState('');

  const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const generateAppreciation = async (
    e: any,
    receiverUrl: string,
    senderId: string,
    receiverId: string
  ) => {
    e.preventDefault();
    const appreciation = {
      senderName: session?.user?.name,
      senderId: senderId,
      receiverName: person,
      receiverId: receiverId,
      senderImageURL: session?.user?.image,
      receiverImageURL: receiverUrl,
      comment: comment,
      imageId: imageId,
      tenorUrl: selectedGif,
    };
    const res = await fetch(backendUrl + "/appreciations/add", {
      method: "POST",
      body: JSON.stringify(appreciation),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.ok ? setAppreciationSent(true) : setAppreciationSent(false);
  };

  const alertUser = () => {
    alert("You need to select a person and write an appreciation first!");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const sender: User = userArray.find(
      (user) => user.name === session?.user?.name
    ) as User;
    const receiver: User = userArray.find(
      (user) => user.name === person
    ) as User;
    if (comment !== "" && person !== "Select:") {
      generateAppreciation(
        e,
        receiver.imageURL as string,
        sender.id as string,
        receiver.id as string
      );
      handleReset();
      setTimeout(() => {
        setAppreciationSent(false);
      }, 3000);
    } else {
      alertUser();
    }
  };

  const handleReset = () => {
    setComment("");
    setSelectedGif("");
    setPerson("");
  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="generate-appreciation__form"
      >
        <label className="form-select">
          <h5 className="form-select__title">
            Select the person you want to appreciate:
          </h5>
          <select
            onChange={(e) => {
              setPerson(e.currentTarget.value as string);
            }}
            value={person}
            className="form-select__options"
          >
            {userArray
              .filter((user: User) => user.name !== session?.user?.name)
              .map((user, index) => {
                return (
                  <option className="option" key={index} value={user.name}>
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
          <div className="emoji-container">
            <InputEmoji
              value={comment}
              placeholder="Write your appreciation here"
              onChange={setComment}
              maxLength={120}
              borderRadius={4}
            />
          </div>
        </div>
        <div className="gif-container">
          <div className="gif-list">
            <Collapsible
              className="collapsible-button"
              openedClassName="collapsible-button"
              trigger={"Add GIF"}
              open={open}
              onOpening={() => setOpen(true)}
            >
              <div className="gif-picker-container">
                <GifPicker
                  width={200}
                  height={300}
                  tenorApiKey={process.env.NEXT_PUBLIC_TENOR_API as string}
                  onGifClick={(gif) => {
                    setSelectedGif(gif.url);
                    event?.preventDefault();
                    setOpen(false);
                    setGifSent('GIF added!')
                    setTimeout(() => {
                      setGifSent('');
                    }, 2000);
                  }}
                />
              </div>
            </Collapsible>
            {gifSent && (
              <p className="gif-confirmation-text">{gifSent}</p>
            )}
          </div>
          <div className="form-buttons">
            <input type="reset" value="Clear ❌" className="form-submit" />
            <input type="submit" value="Send 👏" className="form-submit" />
          </div>
        </div>
      </form>
      {appreciationSent === true ? (
        <h3 className="submit-confirmation">Appreciation Sent 🎈</h3>
      ) : null}
    </div>
  );
};

export default Form;
