import React from "react";
import { ArrowFatUp, ArrowFatDown } from "phosphor-react";

import "../styles/homestyles.css";
const Home = () => {
  return (
    <div>
      <div className="main-container">
        <div className="navs">
          <ul>
            <li>Home</li>
            <li>Feed</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </div>
        <h1>Rank Them Up!</h1>
        <div className="comment-container">
          <div>
            <img
              className="prof-pic"
              src="https://th.bing.com/th/id/R.db7a38888dd1f2c009687c4defc4b12a?rik=%2b8kV9p%2bol3IjkA&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f13400000%2fCat-cats-13494223-2304-1728.jpg&ehk=My5FUv%2biV5V3abRIZCceFEPs1mgvt4U58NoIuiwklTw%3d&risl=&pid=ImgRaw&r=0"
            />
            <p className="nametag">@cat22</p>
          </div>
          <div>
            <p className="comment">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              voluptate nostrum at quibusdam optio qui ratione voluptas labore
              iste, sunt error dignissimos excepturi. Impedit commodi delectus
              odit architecto suscipit enim!Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className="voting-systems">
              <p className="upvotes">1000 upvotes</p>
              <button className="vote-up">
                <ArrowFatUp size={23} color={"#202020"} />
              </button>
              <button className="vote-down">
                <ArrowFatDown size={23} color={"#202020"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
