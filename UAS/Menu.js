import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AddPeminjaman from "./AddPeminjaman";
import AddPengembalian from "./AddPengembalian";
import Main from "./Main";
import ViewListPeminjaman from "./ViewListPeminjaman";
import ViewDetail from "./ViewDetail";
import Login from "./Login";
import MenuUpdate from "./MenuUpdate";
import UpdatePeminjaman from "./UpdatePeminjaman";
import UpdatePengembalian from "./UpdatePengembalian";


const AppContainer = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Login: {
      screen: Login
    },
    AddPeminjaman: { 
      screen: AddPeminjaman
    },
    AddPengembalian: {
      screen: AddPengembalian 
    },
    ViewListPeminjaman: {
      screen: ViewListPeminjaman
    },
    ViewDetail : {
      screen: ViewDetail 
    },
    MenuUpdate : {
      screen: MenuUpdate
    },
    UpdatePeminjaman : {
      screen: UpdatePeminjaman
    },
    UpdatePengembalian : {
      screen: UpdatePengembalian
    },
  },
  {
    initialRouteName: "Login"
  }
);
const Menu = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
