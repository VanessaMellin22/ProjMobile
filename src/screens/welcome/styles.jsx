import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        image: {
          flex: 1,
          alignItems:'center',
          justifyContent:'center',
          opacity:0.5,
          
         
        },
        viewtext:{
            
            alignItems: 'center',
            justifyContent:'center',
           
        },
        text: {
          color: '#D325A5',
          fontSize: 42,
          fontWeight: 'bold',
          position:'absolute',
          
          
        },
        containerview:{
            flex:0.4,
            bordertopLeftRadius:-25,
            bordertopRightRadius:-25,
        },
        button:{
            position:'absolute',
            backgroundColor:'#D325A5',
            borderRadius:50,
            paddingVertical:8,
            width: '60%',
            alignSelf:'center',
            bottom: '15%',
            alignItems: 'center',
            justifyContent:'center'
        }
      });
      
