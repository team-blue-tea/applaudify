import { Contact } from "@/app/types";
import Link from "next/link";

function ContactCard(props: Contact) {
  return (
    <div className="card-team">
      <img src={props.avatarImage} alt="Avatar" className="avatar" />
      <div className="container-team">
        <h5 className="contact-name">{props.name}</h5>
        <p className="contact-role">{props.role}</p>
        <Link href={props.gitUrl} target="_blank">
          <img className="git-icon" src="github.png" />
        </Link>
        <Link href={props.linkedInUrl} target="_blank">
          <img className="linkedin-icon" src="linkedin.png" />
        </Link>
      </div>
    </div>
  );
}

export default ContactCard;
