import { Post } from "../../Components/Posts/Post"
import { Stories } from "../../Components/Stories/Stories"
import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Post/>
    </div>
  )
}
