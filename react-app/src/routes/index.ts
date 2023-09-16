
// import ReserveTimePage from "../components/reserve-time-slot/ReseveTimePage";

import HistoryPage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const ROUTES = {
  Home: {
    path: "/",
    component: LoginPage,
    exact: true,
    public: true,
  },
  MeetingRooms: {
    path: "/Home",
    component: HomePage,
    exact: true,
    public: false,
  },
  SharedSpace: {
    path: "/history",
    component: HistoryPage,
    exact: true,
    public: false,
  },
};
