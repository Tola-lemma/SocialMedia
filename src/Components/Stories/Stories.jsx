import { useContext } from 'react';
import './stories.scss'
import { AuthContext } from '../../Context/authContext';

export const Stories = () => {
  const {currentUser} = useContext(AuthContext)
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Tola Lemma",
      img: "https://images.pexels.com/photos/6147408/pexels-photo-6147408.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Selamawit Abayneh",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Yeabisera Tesfaye",
      img: "https://images.pexels.com/photos/4665537/pexels-photo-4665537.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Tadesse Tsega",
      img: "https://images.pexels.com/photos/6954042/pexels-photo-6954042.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
  ];

  return (
    <div className='stories'> 
    <div className="story">
    <img src={currentUser.profilePic} alt="" />
    <span>{currentUser.name}</span>
    <button>+</button>
  </div>
{stories.map(story=>(
  <div className="story" key={story.id}>
    <img src={story.img} alt="" />
    <span>{story.name}</span>
  </div>
))}
</div>
  )
}
