import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, Row, Rows } from 'react-native-table-component';

const Beranda = () => {
    const [statistika, setStatistika] = React.useState({
        tableHead: ['', 'Sembuh', 'Kritis', 'Meninggal'],
        tableData: [
            ['Lumajang', '203', '1', '4'],
            ['Senduro', '21', '0', '1']
        ]
    })

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerTitle}>Majang Covid</Text>
                            <Text style={styles.headerSubTitle}>Selamat datang di Kota Pisang</Text>
                        </View>
                        <MaterialIcons name="notifications" size={24} color="black" />
                        <Image source={require("../assets/user1.png")} />
                    </View>
                    <View>
                        <View style={styles.headerNotif}>
                            <MaterialIcons name="location-on" size={24} color="black" />
                            <Text style={styles.headerLocation}>Lumajang</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>Update Terkini</Text>
                    <View style={styles.bodyCardContainer}>
                        <View style={styles.bodyCard}></View>
                        <View style={styles.bodyCard}></View>
                        <View style={styles.bodyCard}></View>
                    </View>
                    <View style={styles.bodyAds}></View>
                    <View style={styles.tableContent}>
                        <Text style={styles.statistikaText}>Statistika Kecamatan</Text>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={statistika.tableHead} style={styles.head} textStyle={styles.tableTitle} />
                            <Rows data={statistika.tableData} textStyle={styles.tableDesc} />
                        </Table>
                    </View>
                </View>
                <View style={styles.footer}></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        height: 250,
        backgroundColor: '#8FFF00',
        borderBottomRightRadius: 28,
        borderBottomLeftRadius: 28,
        paddingHorizontal: 20,
        paddingTop: 60
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerSubTitle: {
        marginTop: 5
    },
    headerNotif: {
        flexDirection: 'row',
        marginTop: 40,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10
    },
    headerLocation: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    },
    bodyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginTop: 20
    },
    bodyCard: {
        height: 90,
        width: 100,
        backgroundColor: 'grey',
        borderRadius: 10,
        margin: 5,
        marginTop: 20
    },
    bodyCardContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyAds: {
        height: 150,
        backgroundColor: 'grey',
        marginTop: 30
    },
    tableContent: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    tableTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tableDesc: {
        margin: 6,
        textAlign: 'center'
    },
    statistikaText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    }
})

export default Beranda
