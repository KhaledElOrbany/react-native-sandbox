import React from 'react';
import { StatusBar } from 'react-native';
import ActionMenu from './components/ActionMenu';
// import BottomSheetRoot from './modules/BottomSheet';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      {/* <BottomSheetRoot /> */}
      <ActionMenu />
    </>
  );
}
