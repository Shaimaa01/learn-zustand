const createPostslice = (set, get) => ({
  posts: [],

  postFromFriends: [],

  fetchPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    set({ posts: await res.json() });
  },

  filterPostsByFriends: () => {
    const postFromFriends = get().posts.filter((post) =>
      get().friends.find((friend) => friend.id === post.userId)
    );

    set({ postFromFriends });
  },
});

export default createPostslice;
