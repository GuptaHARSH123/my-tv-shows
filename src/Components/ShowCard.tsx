import { Link } from "react-router-dom";
import { Show } from "../modules/show";
import { FC } from "react";
type ShowCardProps = {
  show:Show
}
const placeholder = "https://images.pexels.com/photos/3934623/pexels-photo-3934623.jpeg?auto=compress&cs=tinysrgb&w=600";
const ShowCard:FC<ShowCardProps>=({show})=> {
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={show.image?.medium || placeholder}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p
          dangerouslySetInnerHTML={{__html:show.summary || ""}}
          ></p>     
        </div>
        <Link
          to={"/show/"+show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
