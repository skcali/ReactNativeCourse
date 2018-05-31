import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const Router = createStackNavigator(
    {
        Login: { screen: LoginForm },
        EmployeeList: { screen: EmployeeList },
        EmployeeCreate: { screen: EmployeeCreate },
        EmployeeEdit: { screen: EmployeeEdit }
    },
    {
        initialRouteName: 'Login'
    }
);

export default Router;
