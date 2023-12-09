import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ item }) => {
  const { id, name, order_status_id, trip_id } = item;
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text>
          <Text>
            Trip: {trip_id} | Order: {id}
          </Text>
          <Text>{'\n'}</Text>
          <Text>
            Status: {name} | Order Num: {order_status_id}
          </Text>
        </Text>
      </View>
      <View
        style={order_status_id === 2 ? styles.doneCircular : styles.circular}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 12,
    height: 12,
    opacity: 0.5,
    marginRight: 15,
    borderRadius: 24,
    backgroundColor: '#000',
  },
  circular: {
    width: 22,
    height: 22,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 2.5,
    borderColor: '#55BCF6',
  },
  doneCircular: {
    width: 22,
    height: 22,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 2.5,
    borderColor: '#55BCF6',
    backgroundColor: '#55BCF6',
  },
});

export default Task;
