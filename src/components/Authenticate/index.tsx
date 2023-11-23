import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StackScreenNavigationProp } from '../../Navigation/type';
import { selectUser } from '../../redux/selectors/user';

type Props = any;

const Authenticate = ({ children }: Props) => {
  const navigation = useNavigation<StackScreenNavigationProp<'Login'>>();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user?.email || !user.uid) {
      navigation.navigate('Login');
    }
  }, []);

  return children;
};

export default Authenticate;
