import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function CardHeader(product) {
    return (
        <View style={styles.container}>
            <Card.Title style={styles.titre} title={product.product.price + '€'} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    titre: {
    }
});