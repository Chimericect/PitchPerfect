import { HomeScreen } from "../Home/HomeScreen"
import ProfileScreen from "../Screens/Profile"
import SettingsScreen from "../Screens/Settings"

export default [
    {
        name:"Home",
        iconType:'FontAwesome6',
        iconName:'house-chimney',
        component: HomeScreen
    },
    {
        name:'Profile',
        iconType:'AntDesign',
        iconName:'user',
        component: ProfileScreen
    },
    {
        name:'Settings',
        iconType:'Ionicons',
        iconName:'settings',
        component: SettingsScreen
    },
 ]