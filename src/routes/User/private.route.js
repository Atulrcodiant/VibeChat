import { Home, Message, UserProfile } from "../../pages";
import userRouteMap from "./userRouteMap";

export default function route() {
  return [
    {
      path: userRouteMap.HOME.path,
      name: "Home",
      element:<Home/>,
    },
    {
      path: userRouteMap.MESSAGE.path,
      name: "Home",
      element:<Message/>,
    },
    {
      path: userRouteMap.USERPROFILE.path,
      name: "User profile",
      element:<UserProfile/>,
    }
  ];
}
