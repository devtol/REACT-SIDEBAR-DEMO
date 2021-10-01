import React from 'react';
import * as s from './App.styles';

import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView';
export default function App() {
  return (
    <s.App>
      <Sidebar />
      <MainView />
    </s.App>
  )
}