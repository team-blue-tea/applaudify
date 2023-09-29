import React from "react";
import Collapsible from "react-collapsible";
import ImageGallery from "react-image-gallery";

function ImagePIcker() {
  return (
    <div>
      {" "}
      <Collapsible
        className="collapsible-button gallery"
        openedClassName="collapsible-button"
        trigger={"Select background image"}
      >
        <ImageGallery
          items={[]}
          showFullscreenButton={false}
          showPlayButton={false}
          additionalClass="image-gallery"
        />
      </Collapsible>{" "}
    </div>
  );
}

export default ImagePIcker;
