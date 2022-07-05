import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function CardBody(product) {
    return (
        <View>
            <Card.Cover style={styles.imh} source={product.product.photo} />
            <Title>{product.product.title}</Title>
            <Paragraph>{product.product.desc}</Paragraph>
        </View>
    );
}
const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
    }
});