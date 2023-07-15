import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
// import Comments from "../comments/Comments";
import { useEffect, useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(12);

  // Check localStorage for the liked status and likes count
  useEffect(() => {
    const likedStatus = localStorage.getItem(`post_${post.id}_liked`);
    const likesCount = localStorage.getItem(`post_${post.id}_likesCount`);
    if (likedStatus) {
      setLiked(JSON.parse(likedStatus));
    }
    if (likesCount) {
      setLikesCount(Number(likesCount));
    }
  }, [post.id]);
  
  // Function to handle the like action
  const handleLike = () => {
            if (liked) {
              setLiked(false);
              setLikesCount((prevCount) => prevCount - 1);
              localStorage.setItem(`post_${post.id}_liked`, "false");
              localStorage.setItem(`post_${post.id}_likesCount`, String(likesCount - 1));
            } else {
              setLiked(true);
              setLikesCount((prevCount) => prevCount + 1);
              localStorage.setItem(`post_${post.id}_liked`, "true");
              localStorage.setItem(`post_${post.id}_likesCount`, String(likesCount + 1));
            }
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={handleLike}>
            {liked ? <FavoriteOutlinedIcon style={{color:"red"}}/> : <FavoriteBorderOutlinedIcon />}
            {likesCount} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {/* {commentOpen && <Comments />} */}
      </div>
    </div>
  );
};

export default Post;