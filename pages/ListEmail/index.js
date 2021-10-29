/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Router from '../../router';

const ListEmail = ({route, navigation}) => {

    const logout = () => {
        navigation.navigate('SignIn')
    }

    return (
        <>
            <View style={styles.containerHeader}>
                <Text style={styles.titleHeader}>List Email</Text>
                <Text style={styles.subtitleHeader} >
                Accout : {route.params.paramKey}
                </Text>
                <Image style={styles.logo} source={require('../../image/iconmail.png')} />
                <Text style={styles.logout} onPress={()=>logout()}>Logout</Text>
            </View>
            <View style={styles.gap}></View>
            <ScrollView>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : sekarnitami@gmail.com</Text>
                <Text style={styles.subject}>Subject   : Testing</Text>
                <Text>Nama Saya Sekar Amanah Nitami...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>18/10/2021 21:32</Text>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : anggapramuja0000@gmail.com</Text>
                <Text style={styles.subject}>Subject   : JMTM</Text>
                <Text>Anda Mempunyai Paket Baru...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>17/10/2021 00:32</Text>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : aominedaishi@gmail.com</Text>
                <Text style={styles.subject}>Subject   : Steam</Text>
                <Text>Come to join us...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>16/10/2021 17:55</Text>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : danang1724@gmail.com</Text>
                <Text style={styles.subject}>Subject   : HEY!!!</Text>
                <Text>Give me back my EMAIL!!!...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>15/10/2021 17:07</Text>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : VioletEvergarden@gmail.com</Text>
                <Text style={styles.subject}>Subject   : Form Love</Text>
                <Text>Love u Honey...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>15/10/2021 13:32</Text>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : Gilbert@gmail.com</Text>
                <Text style={styles.subject}>Subject   : HMMMM</Text>
                <Text>Give Me back my Violet!...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>15/10/2021 10:20</Text>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : steam@gmail.com</Text>
                <Text style={styles.subject}>Subject   : Testing</Text>
                <Text>Steam Summer Sale is Coming!...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>14/10/2021 07:30</Text>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : gaben@gmail.com</Text>
                <Text style={styles.subject}>Subject   : Testing</Text>
                <Text>Congratulations! You win $1.000.000 Steam Wallet ...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>14/10/2021 14:12</Text>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.containerList}>
                <Text style={styles.from}>From       : danang1724@gmail.com</Text>
                <Text style={styles.subject}>Subject   : Testing</Text>
                <Text>This is my new email...</Text>
                <Image style={styles.logoopen} source={require('../../image/emailopen.png')} />
                <Text style={styles.date}>14/10/2021 09:09</Text>
            </View>
            </ScrollView>
        </>
    )
}

export default ListEmail;

const styles = StyleSheet.create({
    titleHeader: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: 22
    },
    subtitleHeader: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: 15
    },
    containerHeader: {
        backgroundColor: '#f4511e',
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 15
    },
    containerList: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 20
    },
    logo: {
        width: 30,
        height: 30,
        marginLeft: 'auto',
        marginTop: -30,
        borderRadius: 10
    },
    logoopen: {
        width: 40,
        height: 40,
        marginLeft: 'auto',
        marginTop: -50,
        borderRadius: 10
    },
    gap: {
        marginTop: 10
    },
    from: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: -10
    },
    subject: {
        fontWeight: 'bold'
    },
    date: {
        fontSize: 10,
        marginTop: 15
    },
    logout: {
        color: '#ffff'
    }
})