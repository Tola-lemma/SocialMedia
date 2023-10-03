import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import ReactGA from 'react-ga4'
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
      localStorage.setItem(
        `post_${post.id}_likesCount`,
        String(likesCount - 1)
      );
    } else {
      setLiked(true);
      setLikesCount((prevCount) => prevCount + 1);
      localStorage.setItem(`post_${post.id}_liked`, "true");
      localStorage.setItem(
        `post_${post.id}_likesCount`,
        String(likesCount + 1)
      );
    }
    //interaction event 
    ReactGA.event({
      category: 'Post Interaction',
      action: liked ? 'Unlike' : 'Like',
      label: `Post ID: ${post.id}`,
    });
  };
  const toggleComments = () => {
    setCommentOpen(!commentOpen);

    // Track the comments interaction
    ReactGA.event({
      category: 'Comment Interaction',
      action: commentOpen ? 'Close Comments' : 'Open Comments',
      label: `Comment ID: ${post.id},   Posted By: ${post.name}`,
    });
  };
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={post.profilePic} alt="" />{" "}
            </Link>
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
          <Link
            to={`/profile/${post.userId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={post.img} alt="" />
          </Link>
        </div>
        <div className="info">
          <div className="item" onClick={handleLike}>
            {liked ? (
              <FavoriteOutlinedIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            {likesCount} Likes
          </div>
          <div className="item" onClick={toggleComments}>
            <TextsmsOutlinedIcon />
            2 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
