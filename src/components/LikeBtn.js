import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function LikeBtn(likes) {
    return (
        <View>
            <Button icon="heart">
                {likes.product}
            </Button>
        </View>
    );
}