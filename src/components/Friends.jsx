import * as React from "react";
import useStore from "../store/UseStore";

const Friends = () => {
  const friends = useStore((state) => state.friends);
  const removeUserFromFriends = useStore(
    (state) => state.removeUserFromFriends
  );

  return (
    <div>
      <h2>Friends ({friends.length})</h2>
      <div>
        {friends.map((friend) => (
          <li key={friend.id}>
            {friend.name}
            <button
              onClick={() => {
                removeUserFromFriends(friend.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Friends;
