import React, { useState } from 'react';
import {
    StyleSheet,
    FlatList,
    Button,
    TextInput,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
    },
    appbar: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'cyan',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    content: {
        margin: 10,
        backgroundColor: 'white',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    itemText: {
        fontSize: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
    },
});

const Item = props => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>
                {props.name}
                (${props.price})
            </Text>
        </View>
    )
}

const App = props => {
    const [ items, setItem ] = useState([
        { id: '1', name: 'Apple', price: 0.99 },
        { id: '2', name: 'Orange', price: 0.89 },
    ]);

    const [name, setName] = useState('Name');
    const [price, setPrice] = useState('Price');

    const add = () => {
        setItem([
            ...items,
            { id: items.length + 1, name, price }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.appbar}>
                <Text style={styles.title}>React Native</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <Item name={item.name} price={item.price} />
                    )}
                    keyExtractor={i => i.id}
                />
            </View>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                    />
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={text => setPrice(text)}
                    value={price}
                    />
                <Button title="ADD" onPress={add} />
            </View>
        </View>
    )
}

export default App;
