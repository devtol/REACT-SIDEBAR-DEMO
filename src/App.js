import React from 'react';
import * as s from './App.styles';
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView';
import { Home, Info, Public, Create, HomeRepairService, ContactPage } from '@mui/icons-material';

const App = () => {

  const icons = {
    home: <Home />,
    about: <Info />,
    destinations: <Public />,
    blog: <Create />,
    services: <HomeRepairService />,
    contacts: <ContactPage />
  }

  const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'Yo Yo Travel',
    shortName: 'Yo'
  };
  const menuItems = [
    { name: 'Home', to: '/', icon: icons.home, subMenuItems: [] },
    { name: 'About', to: '/about', icon: icons.about, subMenuItems: [] },
    { name: 'Destinations', to: '/destinations', icon: icons.destinations, 
      subMenuItems: [
        { name: 'Canada', to: '/canada'},
        { name: 'Brazil', to: '/brazil'},
        { name: 'India', to: '/india'},
        { name: 'Australia', to: '/australia'},
        { name: 'Kenya', to: '/kenya'},
        { name: 'Moldova', to: '/moldova'}
      ] 
    },
    { name: 'Blog', to: '/blog', icon: icons.blog, subMenuItems: [] },
    { name: 'Services', to: '/services', icon: icons.services, subMenuItems: [] },
    { name: 'Contacts', to: '/contacts', icon: icons.contacts, subMenuItems: [] }
  ];

  const fonts = {
    header: 'ZCool KuaiLe',
    menu: 'Poppins',

  }

  return (
    <s.App>
      <Sidebar 
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
      />
      <MainView />
    </s.App>
  )  
}

export default App;