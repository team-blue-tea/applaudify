import { ImageUrl } from "@/app/types";
import Image from "next/image";

function UserAvatar(props: ImageUrl) {
  const userAvatar = props.url ? (
    <Image
      className="user-avatar"
      src={props.url}
      alt=""
      width={40}
      height={40}
    />
  ) : null;

  return <>{userAvatar}</>;
}

export default UserAvatar;
