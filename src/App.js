import "./App.css";
import React, { useEffect, useState } from "react";
import { getVideo, getAuthUrl, getToken } from "./api";
import Vimeo from "@u-wave/react-vimeo";
import PublisherName from "./Components/PublisherName";
import Product from "./Components/Product";
import Reactions from "./Components/Reactions";
import VideoSelection from "./Components/VideoSelection";
import Chat from "./Components/Chat";
import ViewChat from "./Components/ViewChat";
import LoadingComponent from "./Components/Loading";
import NextStream from "./Components/NextStream";
import FeaturedProducts from "./Components/FeaturedProducts";
import Settings from "./Components/Settings";

const App = () => {
  const [videoSelect, setVideoSelect] = useState(null);
  const [user, setUser] = useState({});
  const [video, setVideo] = useState({});
  const [newReaction, setNewReaction] = useState(false);
  const [token, setToken] = useState(null);
  const [views, setViews] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentUrl = new URL(window.location);
  const currentParams = currentUrl.search;
  const currentCode = currentParams
    .slice(currentParams.indexOf("code"))
    .slice(5);

  const authReady = currentCode !== "";

  useEffect(() => {
    const vidID = localStorage.getItem("video");
    if (vidID) setVideoSelect(vidID);
  });

  const tokenGetter = () => {
    if (localStorage.getItem("token")) setToken(localStorage.getItem("token"));
    else
      getToken(currentCode).then(({ data }) => {
        localStorage.setItem("token", data.response.access_token);
        setToken(data.response.access_token);
      });
  };

  const authGetter = () =>
    getAuthUrl().then(({ data }) => window.open(`${data.response}`, "_self"));

  useEffect(() => {
    getVideo(videoSelect).then(({ data }) => {
      setUser({
        ...user,
        name: data.user.name,
        pic: data.user.pictures.sizes[2].link,
      });
      if (authReady) tokenGetter();
      else authGetter();
    });
  }, [videoSelect]);

  const heightPx = `${window.screen.height}px`;
  const widthPx = `${window.screen.width}px`;
  const productsTop = `${window.screen.height - (window.screen.height * 70) / 100}px`;
  const ractionsTop = `${window.screen.height - (window.screen.height * 85) / 100}px`;
  const chatTop = `${window.screen.height - (window.screen.height * 10) / 100}px`;
  const chatWidth = `${window.screen.width - (window.screen.width * 40) / 100}px`;
  const viewChatTop = `${window.screen.height - (window.screen.height * 37) / 100}px`;
  const featuredProductTop = `${window.screen.height - (window.screen.height * 80) / 100}px`;
  const viewChatWidth = `${window.screen.width - (window.screen.width * 60) / 100}px`;
  const featuredProductWidth = `${window.screen.width - (window.screen.width * 90) / 100}px`;
  const publisherNameTop = `${window.screen.height - (window.screen.height * 85) / 100}px`;
  const settingsTop = `${window.screen.height - (window.screen.height * 10) / 100}px`;

 
  return videoSelect ? (
    <>
      <div style={{ height: heightPx, width: "100%", overflow: "hidden" }}>
        <PublisherName
          subscribers={views.length}
          author={user.name}
          pic={user.pic}
          idVideo={video.id}
          top={publisherNameTop}
        />
        {false && <Reactions top={ractionsTop} newReaction={newReaction} />}
    {/*   <Product
          name="Sandalia Cameron"
          description="Texana combinada en cuero metalizado y cuero liso de color a tono del bordado sobre glitter bajo fondo. Ribete plano en caña y escote, Presilla con SRKNY bordado. Base texana simil folia. Altura de caña 29 cm. Altura de taco 5 cm. Altura de suelin 7 mm."
          price="12.920"
          pic="https://m.media-amazon.com/images/I/81Pxds+TS7L._AC_SL1500_.jpg"
          discount="No mojar. No lavar. Evitar fuertes roces ya que se puede desgastar material y color original o dañar los apliques."
          width={widthPx}
          top={productsTop}
        /> 
  */}
        <FeaturedProducts
          top={featuredProductTop}
          width={featuredProductWidth}
        /> 

        <Chat width={chatWidth} top={chatTop} author={user.name} />

        <Settings top={settingsTop} />

        <ViewChat
          width={viewChatWidth}
          top={viewChatTop}
          author={user.name}
          pic={user.pic}
        />

        <Vimeo
          id="player"
          video={localStorage.getItem("video")}
          autoplay
          showTitle={false}
          controls={false}
          height={heightPx}
        />
      </div>
    </>
  ) : (
    <VideoSelection views={views} setViews={setViews} author={user.name} />
  );
};

export default App;
