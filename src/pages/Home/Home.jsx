
import { useEffect } from "react"
import { Posts } from "../../Components/Posts/Posts"
import { Stories } from "../../Components/Stories/Stories"
import "./home.scss"
import ReactGA from 'react-ga'
export const Home = () => {
  //non interaction 
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}
