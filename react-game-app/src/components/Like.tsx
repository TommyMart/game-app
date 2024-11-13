import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const Like = () => {
  const [like, setLike] = useState(false);

  if (like) {
    return <GoHeart onClick={() => setLike(false)} />;
  } else {
    return <GoHeartFill onClick={() => setLike(true)} />;
  }
};

export default Like;
