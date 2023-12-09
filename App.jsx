import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Task from './modules/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tempOrders = [
  {
    id: 53,
    name: 'ISSUED',
    order_status_id: 1,
    trip_id: 30,
  },
  {
    id: 54,
    name: 'ISSUED',
    order_status_id: 1,
    trip_id: 30,
  },
  {
    id: 55,
    name: 'ISSUED',
    order_status_id: 1,
    trip_id: 30,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState([]);

  useEffect(() => {
    const getOrders = async () => {
      if (await AsyncStorage.getItem('orders')) {
        await AsyncStorage.setItem('orders', JSON.stringify(tempOrders));
        setOrders(tempOrders);
      }
    };
    getOrders();
  }, []);

  const completeOrder = async (index) => {
    // here
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {orders.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeOrder(index)}>
                  <Task item={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
