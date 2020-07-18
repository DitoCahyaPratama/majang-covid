import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
const Notifikasi = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerTitle}>Notifikasi</Text>
                        <Text style={styles.headerSubTitle}>Tetap ikuti Protokol Kesehatan</Text>
                    </View>
                </View>
                <View style={styles.headerNotifikasi}>
                    <Text style={styles.headerTextNotifikasi}>Cari Notifikasi</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.card}>
                    <Image source={require("../assets/user1.png")} />
                    <Text>10 Meter Terjagkit COVID19</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text>Detail</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Image source={require("../assets/user1.png")} />
                    <Text>10 Meter Terjagkit COVID19</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text>Detail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        height: 180,
        backgroundColor: '#8FFF00',
        borderBottomRightRadius: 28,
        borderBottomLeftRadius: 28,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    headerSubTitle: {
        marginTop: 7,
        textAlign: 'right',
        fontSize: 14
    },
    headerNotifikasi: {
        marginTop: 20,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 50
    },
    button: {
        backgroundColor: '#8FFF00',
        height: 25,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 16
    },
    card: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        elevation: 0.9,
        padding: 10
    }
})

export default Notifikasi
