import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const App = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['10%', '50%', '75%'], []);

  const handleSheetChanges = useCallback(index => {}, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler>
        <View style={styles.container}>
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
            onChange={handleSheetChanges}>
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheet>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    alignItems: 'center',
  },
});

export default App;
