import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalColors} from '../constants/Colors';
import {images} from '../assets';
import {useState} from 'react';
import CustomButton from '../components/ui/CustomButton';
import {ScrollView} from 'react-native-gesture-handler';

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
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
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
            <Text style={styles.contentText}>1 PhotoLog Template</Text>
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
            <Text style={styles.contentText}>
              Unlimited projects and images
            </Text>
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
              $2.99<Text style={{fontFamily: 'OpenSans-Regular'}}>/month</Text>
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
              $23.88<Text style={{fontFamily: 'OpenSans-Regular'}}>/year</Text>
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
            <Text style={styles.contentText}>
              Company-wide access for teams.
            </Text>
          </View>
          <View style={styles.row}>
            <Image
              source={images.tickIcon}
              style={styles.tickIcon}
              resizeMode="contain"
            />
            <Text style={styles.contentText}>
              Volume pricing for 10+ users.
            </Text>
          </View>
          <TouchableOpacity style={styles.moreInfo}>
            <Image
              source={images.moreInfo}
              style={styles.moreInfoIcon}
              resizeMode="contain"
            />
            <Text style={styles.moreInfoText}>More info</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomButton
        buttonTitle={'Upgrade to Pro'}
        pressableContainerStyle={styles.button}
        InnerTextStyle={{
          color: 'rgba(0, 109, 119, 1)',
          flexGrow: 1,
          textAlign: 'center',
          marginLeft: 10,
        }}
        Icon={images.backGreenIcon}
        IconStyle={styles.buttonIcon}
      />
      <Text
        style={{
          fontFamily: 'OpenSans-Semibold',
          fontSize: 16,
          lineHeight: 21.79,
          color: 'rgba(255, 255, 255, 1)',
          textAlign: 'center',
        }}>
        Restore
      </Text>
      <View style={styles.termsBox}>
        <Text style={styles.terms}>Terms & Conditions</Text>
        <Image
          source={images.dotIcon}
          resizeMode="contain"
          style={{width: 5}}
        />
        <Text style={styles.terms}>Privacy Policy</Text>
      </View>
    </View>
  );
};

export default UnLockAllFeatures;

const styles = StyleSheet.create({
  termsBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 13,
    marginTop: 15,
  },
  terms: {
    fontSize: 12,
    lineHeight: 16.34,
    fontFamily: 'OpenSans-Regular',
    color: 'white',
  },
  buttonIcon: {
    marginRight: 10,
    transform: [{rotate: '180deg'}],
  },
  button: {
    backgroundColor: '#fff',
    flexDirection: 'row-reverse',
    paddingVertical: 18,
    marginHorizontal: 5,
    marginTop: 14,
    marginBottom: 18,
  },
  moreInfoIcon: {
    width: 14,
  },
  moreInfoText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 19.07,
  },
  container: {
    flex: 1,
    backgroundColor: GlobalColors.primaryBase,
    paddingHorizontal: 12,
    paddingVertical: 16,
    paddingBottom: Platform.select({ios: 40, android: 30}),
  },
  card: {
    backgroundColor: 'rgba(241, 244, 254, 0.9)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: 'rgba(241, 244, 254, 0.25)',
  },
  cardHeader: {
    borderColor: 'rgba(206, 228, 228, 1)',
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
    fontSize: 16,
  },
  moreInfo: {
    flexDirection: 'row',
    backgroundColor: 'rgba(1, 109, 119, 0.12)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 25,
    columnGap: 10,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 5,
  },
});
