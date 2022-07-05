import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function LikeBtn(product) {
    return (
        <View>
            <Button icon="heart">
                {product}
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
    }
});