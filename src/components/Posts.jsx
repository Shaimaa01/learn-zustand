import * as  React  from "react";
import useStore from "../store/useStore";
import useFriendsPostsReactor from "../store/reactors/UseFriendsPostsReactor";

const Posts = ()=>{
    const fetchPosts = useStore(state => state.fetchPosts);
    const  postFromFriends = useFriendsPostsReactor( );

    React.useEffect(() =>{
        fetchPosts()
    },[fetchPosts])

    return (<div>
        <h3>Posts</h3>
        <ul>
            {postFromFriends.map(post=><li key={post.id}>{post.title}</li>)}
        </ul>
    </div>)
}

export default Posts;