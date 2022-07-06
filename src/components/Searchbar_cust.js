import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Searchbar_cust() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <Searchbar
            style={styles.container}
            placeholder="Recherche"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#fff',
    },
});
