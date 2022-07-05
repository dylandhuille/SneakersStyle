import { View } from 'react-native';
import { Paragraph } from 'react-native-paper';
import LikeBtn from './LikeBtn';

export default function CardBody(product) {
    const { likes } = product.product
    return (
        <View>
            <Paragraph>{'Taille: ' + product.product.size}</Paragraph>
            <LikeBtn product={likes} />
        </View>
    );
}