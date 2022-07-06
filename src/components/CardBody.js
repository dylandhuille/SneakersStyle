import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function CardBody(product) {
    return (
        <View >
            <Card.Cover source={product.product.photo} />
            <Title style={styles.title}>{product.product.title}</Title>
            <Paragraph>{product.product.desc.substr(0, 20)}</Paragraph>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        flex: 1,
        fontSize: 15,
    },

});