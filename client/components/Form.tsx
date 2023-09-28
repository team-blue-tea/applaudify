import { User, UserList } from "@/app/types";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import GifPicker, { TenorImage } from "gif-picker-react";
import Collapsible from "react-collapsible";
import ImageGallery from "react-image-gallery";
import UserAvatar from "./UserAvatar";

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

  const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const generateAppreciation = async (e: any, receiverUrl: string) => {
    e.preventDefault();
    const appreciation = {
      senderName: session?.user?.name,
      receiverName: person,
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

  const images = [
    {
      original: "card-background-2.png",
      thumbnail: "card-background-2.png",
    },
    {
      original: "card-background-3.png",
      thumbnail: "card-background-3.png",
    },
    {
      original: "card-background-4.png",
      thumbnail: "card-background-4.png",
    },
    {
      original: "card-background-5.png",
      thumbnail: "card-background-5.png",
    },
  ];

  const handleImageClick = (e: any) => {
    const imageURL = e.target.src;
    setImageId(imageURL);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const receiver: User = userArray.find(
      (user) => user.name === person
    ) as User;
    if (comment !== "" && person !== "Select:") {
      generateAppreciation(e, receiver.imageURL!);
    } else {
      alertUser();
    }
  };

  const handleReset = () => {
    setComment("");
    setSelectedGif("");
    setPerson("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} onReset={handleReset} className="generate-appreciation__form">
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
        {/*         <Collapsible
          className="collapsible-button gallery"
          openedClassName="collapsible-button"
          trigger={"Select background image"}
        >
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            onClick={handleImageClick}
            additionalClass="image-gallery"
          />
        </Collapsible> */}
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
              maxLength={120}
              style={{
                background: `url(${imageId})`,
                maxHeight: 300,
              }}
            />
          </label>
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
                  }}
                />
              </div>
            </Collapsible>
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
