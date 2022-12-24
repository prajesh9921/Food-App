import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HotelInfo from "./src/screens/HotelInfo";
import SearchScreen from "./src/screens/SearchScreen";


const navigator = createStackNavigator({
  Search: SearchScreen,
  Info: HotelInfo,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search Food'
  }
})

export default createAppContainer(navigator);

