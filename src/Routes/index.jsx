import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../screens/welcome'
import Login from '../screens/login'
import Cadastro from '../screens/cadastro'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name= "Welcome"
            component={Welcome}
            options={{headerShown:false}}
            />
        
            <Stack.Screen 
            name= "Login"
            component={Login}
            options={{headerShown:false}}
            />

            <Stack.Screen 
            name= "Cadastro"
            component={Cadastro}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}