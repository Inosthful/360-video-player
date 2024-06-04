import "./style.css";
import Clappr from "clappr";
import Video360 from "clappr-video360";

var Video360Url = "elephant.mp4";

// Configure your Clappr player.
var PlayerInstance = new Clappr.Player({
  source: Video360Url,
  plugins: {
    container: [Video360],
  },
  parentId: "#player",
});

// Important to disable the click to pause native plugin of clappr
// otherwise you won't be able to use correctly the player
PlayerInstance.getPlugin("click_to_pause").disable();
