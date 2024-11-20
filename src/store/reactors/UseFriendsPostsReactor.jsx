import useStore from "../useStore";
import * as React from "react";

const useFriendsPostsReactor = () => {
  const friends = useStore((state) => state.friends);
  const posts = useStore((state) => state.posts);
  const postFromFriends = useStore((state) => state.postFromFriends);
  const filterPostsByFriends = useStore((state) => state.filterPostsByFriends);

  React.useEffect(() => {
    filterPostsByFriends();
  }, [filterPostsByFriends, friends, posts]);

  return postFromFriends;
};

export default useFriendsPostsReactor;
