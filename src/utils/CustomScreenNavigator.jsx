import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const CustomScreenNavigator = ({PageName}) => {
  const navigator = useNavigation();

  useEffect(() => {
    handleNav();
  }, [PageName]);

  const handleNav = () => {
    navigator.navigate(PageName);
  };
};

export default CustomScreenNavigator;
