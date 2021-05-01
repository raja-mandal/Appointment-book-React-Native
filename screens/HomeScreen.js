import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar, Card, Avatar, IconButton, Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {

    const [sellerData, setSellerData] = useState([])

    // seller data fetch
    // useEffect(() => {
    //     axios.get('http://localhost:5500/users')
    //         .then(res => {
    //             console.log(res);
    //             setSellerData(res.data)
    //         })
    //         .catch(res => {
    //             console.log('Error')
    //         })
    // }, [])

    useEffect(() => {
        fetch('http://localhost:5500/users')
            .then(res => {
                console.log(res);
                setSellerData(res.data)
            })
            .catch(res => {
                console.log('Error')
            })
    }, [])



    return (
        <View>

            <Searchbar
                placeholder="Search"
            />

            <View style={styles.white_space}></View>

            <Text style={styles.txt}>All seller</Text>

            {/* card */}
            <View style={styles.containerStyle}>
                <View>
                    <Card.Title
                        title="Eric tete"
                        subtitle="6:00 AM - 8:00 AM"
                    />
                </View>
                <View>
                    <Button mode="text" onPress={() => console.log('Pressed')}>
                        Request to book
                    </Button>
                </View>
            </View>
            {/* end card */}

            <Text>
                {
                    sellerData.map((item, index) => (
                        <Text>{item.username}</Text>
                    ))
                }
            </Text>


        </View>

    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    white_space: {
        marginTop: 30
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    txt: {
        fontSize: 22,
        marginLeft: 5,
        color: 'gray'
    }
})