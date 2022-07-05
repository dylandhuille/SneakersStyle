import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import LikeBtn from './LikeBtn';

export default function CardBody(product) {
    return (
        <View>
            <Paragraph>{'Taille: ' + product.product.size}</Paragraph>
            {/* <LikeBtn product={product} /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
    }
});