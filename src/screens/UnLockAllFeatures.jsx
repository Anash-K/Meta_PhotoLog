import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalColors} from '../constants/Colors';
import {images} from '../assets';
import {useState} from 'react';

const UnLockAllFeatures = () => {
  const [isSelected, setIsSelected] = useState({
    standardPlan: false,
    professionalPlan: {
      monthly: false,
      yearly: false,
    },
  });

  const toggleStandardPlan = () => {
    setIsSelected(prev => ({
      ...prev,
      standardPlan: !prev.standardPlan,
    }));
  };

  const toggleProfessionalPlan = planType => {
    setIsSelected(prev => ({
      ...prev,
      professionalPlan: {
        ...prev.professionalPlan,
        [planType]: !prev.professionalPlan[planType],
      },
    }));
  };

  return (
    <View style={styles.container}>
      {/* Free Plan Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Free Plan</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={images.tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.contentText}>1 project & 10 images</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={images.tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.contentText}>Basic PhotoLog Templates</Text>
        </View>
      </View>

      {/* Standard Plan Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Standard Plan</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={images.tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.contentText}>5 projects & 50 images</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={images.tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.contentText}>6 PhotoLog Templates</Text>
        </View>
        <TouchableOpacity style={styles.row} onPress={toggleStandardPlan}>
          <Image
            source={
              isSelected.standardPlan ? images.checked : images.greenUncheck
            }
            resizeMode="contain"
            style={styles.uncheck}
          />
          <Text style={[styles.text, {flexGrow: 1}]}>One-time purchase</Text>
          <Text style={[styles.text, {fontFamily: 'OpenSans-Semibold'}]}>
            $4.99
          </Text>
        </TouchableOpacity>
      </View>

      {/* Professional Plan Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Professional Plan</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={images.tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.contentText}>Unlimited projects and images</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={images.tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.contentText}>
            Customizable PhotoLog Templates
          </Text>
        </View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => toggleProfessionalPlan('monthly')}>
          <Image
            source={
              isSelected.professionalPlan.monthly
                ? images.checked
                : images.greenUncheck
            }
            resizeMode="contain"
            style={styles.uncheck}
          />
          <Text style={[styles.text, {flexGrow: 1}]}>Monthly</Text>
          <Text style={[styles.text, {fontFamily: 'OpenSans-Semibold'}]}>
            $4.99<Text style={{fontFamily: 'OpenSans-Regular'}}>/month</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => toggleProfessionalPlan('yearly')}>
          <Image
            source={
              isSelected.professionalPlan.yearly
                ? images.checked
                : images.greenUncheck
            }
            resizeMode="contain"
            style={styles.uncheck}
          />
          <Text style={[styles.text, {flexGrow: 1}]}>Yearly</Text>
          <Text style={[styles.text, {fontFamily: 'OpenSans-Semibold'}]}>
            $49.99<Text style={{fontFamily: 'OpenSans-Regular'}}>/year</Text>
          </Text>
        </TouchableOpacity>
      </View>
      {/* Enterprise Plan Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Enterprise Plan</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={images.tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.contentText}>Company-wide access for teams.</Text>
        </View>
        <View style={styles.row}>
          <Image
            source={images.tickIcon}
            style={styles.tickIcon}
            resizeMode="contain"
          />
          <Text style={styles.contentText}>Volume pricing for 10+ users.</Text>
        </View>
        <TouchableOpacity>
          <Image source={images.moreInfo} />
          <Text>More info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UnLockAllFeatures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.primaryBase,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  card: {
    backgroundColor: 'rgba(241, 244, 254, 0.9)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: GlobalColors.primaryBase,
  },
  cardHeader: {
    borderColor: 'rgba(0, 109, 119, 0.1)',
    borderBottomWidth: 4,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  cardTitle: {
    color: '#006D77',
    fontSize: 18,
    fontFamily: 'OpenSans-Semibold',
    marginBottom: -6,
  },
  contentText: {
    color: 'rgba(41, 45, 50, 1)',
    fontFamily: 'OpenSans-Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  tickIcon: {
    width: 14,
  },
  uncheck: {
    width: 20,
  },
  text: {
    color: GlobalColors.primaryBase,
  },
});
