import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../Assets/consts/color copy';
import myorders from '../../Assets/consts/myorders';

import waiting from '../../Assets/Icon/waiting.png';

const MyOrderScreen = () => {
  const ListOrder = ({myorder}) => {
    return (
      <View style={styles.orderCard}>
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={myorder.icon}
              style={{
                width: 28,
                height: 28,
                top: 12,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '700',
                  lineHeight: 12,
                  height: 12,
                  top: 14,
                  left: 12,
                }}>
                {myorder.title}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '400',
                  lineHeight: 12,
                  top: 14,
                  left: 12,
                }}>
                {myorder.date}
              </Text>
            </View>
            <Text style={styles.backgroundStatus}>{myorder.status}</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.stroke,
              top: 20,
            }}
          />

          <View>
            <View style={{flexDirection: 'row', marginVertical: 12}}>
              <Image
                source={myorder.img}
                style={{
                  width: 68,
                  height: 54.25,
                  top: 20,
                }}
              />
              <View style={{paddingLeft: 17}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    marginTop: 24,
                    lineHeight: 14,
                  }}>
                  {myorder.name}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '400',
                  }}>
                  {myorder.qty}
                </Text>
              </View>
            </View>

            <View style={{
              flexDirection: 'column', marginVertical: 15, alignItems: 'flex-start'
            }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '400',
                  lineHeight: 12,
                  position: 'absolute',
                  top: 10,
                }}>
                Total Bayar
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '700',
                  lineHeight: 12,
                  color: colors.primary,
                  position: 'absolute',
                  top: 30,
                  backgroundColor: colors.backgroundIcon,
                  borderRadius: 4,
                  height: 18,
                  paddingHorizontal: 9,
                  paddingVertical: 3,
                }}>
                {myorder.totalPrice}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.Wrapper}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              color: colors.blackText,
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 24,
              lineHeight: 29,
              marginTop: 22,
            }}>
            My Order
          </Text>
        </View>

        <View style={styles.headerIconWrapper}>
          {/* Shopping Bag */}
          <View style={styles.bagWrapper}>
            <Feather
              name="shopping-bag"
              style={{
                fontSize: 22,
                color: colors.primary,
              }}
            />
            <Text style={styles.notif}>1</Text>
          </View>

          {/* Notification */}
          <View style={styles.bagWrapper}>
            <Feather
              name="bell"
              style={{fontSize: 22, color: colors.primary}}
            />
            <Text style={styles.notif}>3</Text>
          </View>
        </View>
      </View>

      {/* Waiting for Payment */}
      <View style={{marginTop: 36}}>
        <View style={styles.waitingWrapper}>
          <Image
            source={waiting}
            style={{
              position: 'absolute',
              width: 29,
              height: 32,
              left: 16,
              top: 12,
            }}
          />
          <Text
            style={{
              fontSize: 12,
              color: colors.blackText,
              fontWeight: '700',
              position: 'absolute',
              left: 57,
              top: 21,
            }}>
            Menunggu Pembayaran
          </Text>
          <Feather
            name="chevron-right"
            style={{
              fontSize: 22,
              fontWeight: 1.5,
              color: colors.body,
              top: 18,
              left: 308,
            }}
          />
        </View>
      </View>

      {/* List Order */}
      <FlatList
        data={myorders}
        renderItem={({item}) => {
          return <ListOrder myorder={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({
  Wrapper: {
    paddingHorizontal: 18,
    marginTop: 30,
    backgroundColor: 'white',
  },

  headerIconWrapper: {
    flexDirection: 'row',
  },

  bagWrapper: {
    backgroundColor: colors.backgroundIcon,
    // opacity: 0.5,
    borderRadius: 20,
    width: 42,
    height: 42,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
    marginLeft: 8,
  },

  notif: {
    fontSize: 10,
    width: 14,
    height: 14,
    fontWeight: '500',
    backgroundColor: '#FF6666',
    borderRadius: 25,
    position: 'absolute',
    paddingLeft: 4,
    paddingVertical: 0.5,
    color: 'white',
    top: 0,
    right: 0,
  },

  waitingWrapper: {
    height: 57,
    borderWidth: 1,
    borderColor: colors.stroke,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  orderCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 186,
    marginVertical: 8,
    paddingHorizontal: 16,

    shadowColor: colors.blackText,
    shadowOffset: {width: -10, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },

  backgroundStatus: {
    fontSize: 10,
    fontWeight: '900',
    color: colors.primary,
    backgroundColor: colors.backgroundIcon,
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 3,
    position: 'absolute',
    right: 0,
    top: 14,
  },


});
