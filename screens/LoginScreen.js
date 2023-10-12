import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex:1, alignItems: "center",}}>
        <View style={{marginTop: 50}}>
            <Image source={{uri : "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png"}}
            style={{ width: 150, height: 100, resizeMode: "contain"}}/>
        </View>

        <KeyboardAvoidingView>
            <View>
                <Text style={styles.text}>Login to you account</Text>
            </View>
        </KeyboardAvoidingView>

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        marginTop: 20,
        fontSize: 17
    }
})


export default LoginScreen