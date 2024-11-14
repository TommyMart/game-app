import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
    onClick();
  };

  if (like) {
    return <GoHeart onClick={toggle} />;
  } else {
    return <GoHeartFill onClick={toggle} />;
  }
};

export default Like;
