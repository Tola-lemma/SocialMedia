import Post from "../Post/Post";
import "./posts.scss";

export const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Tola Wake ",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/5965925/pexels-photo-5965925.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: `Excited to share my latest travel adventure! ✈️ Stay tuned for more photos and stories. <span style='color: blue;'><a href="https://twitter.com/TolaLemma" style='color: blue;text-decoration:none' target="_blank">#tolalemma #travelgram</a> </span> `,
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Merry Ketsela",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: `Sharing a snapshot of a special moment captured through my lens! 📸 This photo holds a lot of meaning to me, and I'm excited to share it with all of you.<span style='color: blue;'><a href="https://www.linkedin.com/in/tolalemma/" style='color: blue;text-decoration:none' target="_blank">#photography  #memories #personalmoment  </a></span>  `,
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
