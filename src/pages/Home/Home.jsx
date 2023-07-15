
import { Posts } from "../../Components/Posts/Posts"
import { Stories } from "../../Components/Stories/Stories"
import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}
