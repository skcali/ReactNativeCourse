import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const Router = createStackNavigator(
    {
        Login: { screen: LoginForm },
        EmployeeList: { screen: EmployeeList },
        EmployeeCreate: { screen: EmployeeCreate }
    },
    {
        initialRouteName: 'Login'
    }
);

export default Router;
