import { baseRoutes } from "../../helpers/baseRoutes";

const userRouteMap = {
  HOME: { path: `${baseRoutes.userBaseRoutes}/`},
  MESSAGE: { path: `${baseRoutes.userBaseRoutes}/message`},
  HOMESEC: { path: `${baseRoutes.userBaseRoutes}/about-us`},
  USERPROFILE: { path: `${baseRoutes.userBaseRoutes}/user-profile`}
};
export default userRouteMap;