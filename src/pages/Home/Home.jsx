
import { useEffect } from "react"
import { Posts } from "../../Components/Posts/Posts"
import { Stories } from "../../Components/Stories/Stories"
import "./home.scss"
import ReactGA from 'react-ga4'
export const Home = () => {
  //non interaction 
  useEffect(()=>{
    ReactGA.send(window.location.pathname);
  },[])
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}
