import { View, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';
import LikeBtn from './LikeBtn';

export default function CardBody(product) {
    const likes = product.product.likes
    return (
        <View style={StyleSheet.container}>
            <Paragraph style={styles.paragraph}>{'Taille: ' + product.product.size}</Paragraph>
            <LikeBtn style={styles.paragraph} likes={likes} />
        </View>
    );
} const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    paragraph: {
        flex: 1,
    }
});