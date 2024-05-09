import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";

const image = {uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3abb8a7-d501-4dce-b6fa-8aefe82f01c6/dg0ovq6-bd213adf-3a66-4453-be5f-36326eb5f6d4.png/v1/fill/w_800,h_1200,q_80,strp/cyberpunk_jolyne_ii_by_midnightdaydreaming_dg0ovq6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2UzYWJiOGE3LWQ1MDEtNGRjZS1iNmZhLThhZWZlODJmMDFjNlwvZGcwb3ZxNi1iZDIxM2FkZi0zYTY2LTQ0NTMtYmU1Zi0zNjMyNmViNWY2ZDQucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7-0aNE9uHqwgEkIerQG3NapM3RpE3QXpgEZYNN50T6c'};

export default function Welcome(){
 
    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         
        </ImageBackground>

        <View style={styles.viewtext}>
        <Text style={styles.text}>Welcome to Tanoshi</Text>
        </View>

         <View style={styles.containerview }>

                <Text>tkn fjviwrn jveq nrjq </Text>

                <TouchableOpacity style={styles.button}>
                <Text>Acessar ➝</Text>
                </TouchableOpacity>
               

            </View>
            </View>
    )
    
    
}
