import { User } from "@/app/types";
import Link from "next/link";

function SearchUserCard(props: User) {
  return (
    <div>
      <Link className="title-profile-url" href={`/viewProfile/${props.id}`}>
        <img className="logo-img title" src={props.imageURL} alt="" />
        {props.name}
      </Link>
    </div>
  );
}

export default SearchUserCard;
