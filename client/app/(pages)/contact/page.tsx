import ContactCard from "@/components/ContactCard";
import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Meet the team:</h1>
      <div className="cards-container">
        <ContactCard
          name="Sudha Madhuri Poojari"
          avatarImage="su.png"
          role="Full Stack Developer"
          gitUrl="https://github.com/sudhamadhuripoojari"
          linkedInUrl="https://www.linkedin.com/in/sudha-madhuri-poojari/"
        />
        <ContactCard
          name="Tim Hansson Meng"
          avatarImage="img1-modified.png"
          role="Full Stack Developer"
          gitUrl="https://github.com/Slipzter"
          linkedInUrl="https://www.linkedin.com/in/tim-hansson-meng-b9087b118/"
        />
        <ContactCard
          name="Ilija Krilovic"
          avatarImage="Ilija.png"
          role="Full Stack Developer"
          gitUrl="https://github.com/ica1130"
          linkedInUrl="https://www.linkedin.com/in/ilijakrilovic/"
        />
      </div>
    </div>
  );
}
