import { User } from "@/app/types";
import Link from "next/link";

function SearchUserCard(props: User) {
  return (
    <div className="search-user-card">
      <Link className="search-user-link" href={`/viewProfile/${props.id}`}>
        <img className="logo-img title" src={props.imageURL} alt="" />
        <h4 className="search-user-card__name">{props.name}</h4>
      </Link>
    </div>
  );
}

export default SearchUserCard;
