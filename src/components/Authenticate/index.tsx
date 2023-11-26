import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  RootStackParamList,
  RootTabParamList,
  StackScreenNavigationProp,
} from '../../Navigation/type';
import { selectUser } from '../../redux/selectors/user';

type Props = {
  children: any;
  authScreen: keyof (RootTabParamList & RootStackParamList);
};

const Authenticate = ({ children, authScreen }: Props) => {
  const navigation = useNavigation<StackScreenNavigationProp<'Login'>>();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user?.email || !user.uid) {
      navigation.navigate('Login', { authScreen });
    }
  }, [authScreen, navigation, user]);

  return children;
};

export default Authenticate;
