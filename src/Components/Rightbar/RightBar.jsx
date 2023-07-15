import React from 'react'
import './rightBar.scss'
export const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <span>Tola Lemma</span>
            </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/4665537/pexels-photo-4665537.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <span>Yeabsira Tesfaye</span>
            </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activity</span>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <p>
            <span>Gezu Bira </span>
            changed their cover picture
          </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/2314983/pexels-photo-2314983.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <p>
            <span>Adugna Geresu </span>
            changed their cover picture
          </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <p>
            <span>Tola Lemma </span>
            changed their cover picture
          </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/4474038/pexels-photo-4474038.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <p>
            <span>Shiferaw Solomon </span>
            changed their cover picture
          </p>
            </div>
            <span>5 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <div className='online'/>
          <span>Tola Lemma</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <div className='online'/>
          <span>Yerosan Getahun</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/6146935/pexels-photo-6146935.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <div className='online'/>
          <span>Tsehay Kuru</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/6437845/pexels-photo-6437845.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <div className='online'/>
          <span>Eden Tamiru</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/7036543/pexels-photo-7036543.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
          <div className='online'/>
          <span>Selamawit Abayneh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/4665537/pexels-photo-4665537.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
           <div className='online'/>
          <span>Yeabsira Tesfaye</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/6286226/pexels-photo-6286226.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
           <div className='online'/>
          <span>Getu Haile</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img
            src={"https://images.pexels.com/photos/7241551/pexels-photo-7241551.jpeg?auto=compress&cs=tinysrgb&w=600"}
            alt=""
          />
           <div className='online'/>
          <span>Tadesse Tsega</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
