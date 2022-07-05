import { View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function CardBody(product) {
    return (
        <View style={styles.container}>
            <Card.Cover source={product.product.photo} />
            <Title>{product.product.title}</Title>
            <Paragraph>{product.product.desc}</Paragraph>
        </View>
    );
}