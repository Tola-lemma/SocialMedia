import { AuthContext } from "../../Context/authContext";
import { useContext } from "react";
import "./comments.scss";
const Comments = () => {
      const {currentUser} = useContext(AuthContext)
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Wow! This photo is absolutely breathtaking! The colors, composition, and subject are all perfectly captured. It's like a work of art. Truly amazing! 😍📸",
      name: "Tola Lemma",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "I'm speechless! This photo is pure magic. The level of detail and the way you've captured the moment is simply outstanding. It evokes such a sense of wonder and beauty. I'm in awe of your talent! 🌟📷",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;