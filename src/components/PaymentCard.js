import {StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../utils';

const {width} = Dimensions.get('window');

const PaymentCard = (item, data) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
      <Image
        style={{height: '100%', width: '100%', borderRadius: 20}}
        // source={data.image}
        // source={{uri: data.image}}
        source={{uri: item.image}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: width * 0.55,
    backgroundColor: COLORS.white,
    marginLeft: 20,
    shadowColor: COLORS.grey,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {height: 10},
    elevation: 10,
    resizeMode: 'contain',
    borderRadius: 20,
    borderWidth: 7,
    borderColor: COLORS.white,
  },

  details: {
    height: 70,
    width: '100%',
    position: 'absolute',
    backgroundColor: COLORS.white,
    bottom: 0,
    borderBottomEndRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardBtn: {
    width: 70,
    height: 30,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btn: {
    height: 50,
    width: 70,
    backgroundColor: COLORS.black,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default PaymentCard;
