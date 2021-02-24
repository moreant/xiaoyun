import 'vant/lib/index.css';
// import '@vant/touch-emulator'
import { Button, List, Cell, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, NavBar, Icon, Sticky, Card, Sidebar, SidebarItem } from "vant";

const plugins = [Button, List, Cell, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, NavBar, Icon, Sticky, Card, Sidebar, SidebarItem];



export const vantjs = {
  install: function (app) {
    plugins.forEach(item => {
      app.component(item.name, item);
    });
  }
};