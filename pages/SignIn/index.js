/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native'

const SignIn = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        if (email === 'danang@gmail.com' && password === '123' || email === 'Danang@gmail.com' && password === '123') {
            setEmail("");
            setPassword("")
            navigation.navigate('ListEmail', {
                paramKey: email
            })
        } else {
            Alert.alert('Gagal', "Password Salah!!!", [{text: 'Tutup'}])
        }
    }

    return (
        <>
            <View style={styles.containerHeader}>
                <Text style={styles.titleHeader}>Login Pertemuan 3</Text>
                <Text style={styles.subtitleHeader}>Danang Prasetyo, 181011450501</Text>
                <Image style={styles.logo} source={require('../../image/iconmail.png')} />
            </View>
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.gap}></View>
                <View style={styles.gap}></View>
                <View style={styles.gap2}></View>
                <Text style={styles.labelInput}>Email</Text>
                <View style={styles.gap2}></View>
                <TextInput style={styles.input} onChangeText={(text)=>setEmail(text)} placeholder="Masukkan Email Anda" value={email}/>
                <View style={styles.gap}></View>
                <Text style={styles.labelInput}>Password</Text>
                <View style={styles.gap2}></View>
                <TextInput style={styles.input} onChangeText={(text)=>setPassword(text)}  placeholder="Masukkan Password Anda" secureTextEntry value={password}/>
                <View style={styles.gap3}></View>
                <TouchableOpacity style={styles.button} onPress={()=>login()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                {/* <ToucheableOpacity></ToucheableOpacity> */}
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },
    labelInput: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    input: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 15,
        padding: 10
    },
    button: {
        backgroundColor:"#f4511e",
        padding: 12,
        borderRadius: 10
    },
    buttonText : {
        fontSize: 14,
        color: 'white',
        textAlign: "center"
    },
    gap: {
        marginTop: 20
    },
    gap2: {
        marginTop: 10
    },
    gap3: {
        marginTop: 30
    },
    titleHeader: {
        fontFamily: 'Poppins-Medium',
        color: '#020202',
        fontSize: 22
    },
    subtitleHeader: {
        fontFamily: 'Poppins-Medium',
        color: '#020202',
        fontSize: 15
    },
    containerHeader: {
        backgroundColor: "white",
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24
    },
    logo: {
        width: 50,
        height: 50,
        marginLeft: 'auto',
        marginTop: -51,
        borderRadius: 30
    }
    
})

export default SignIn;