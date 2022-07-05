import { StyleSheet, View } from 'react-native';
import CardBody from '../components/CardBody';
import CardHeader from '../components/CardHeader';
import CardFooter from '../components/CardFooter'
import data from '../data/data';
import { Card } from 'react-native-paper';

export default function CardScreen() {
    return (

        data.map(function (item, index) {
            return (
                <View style={styles.container} key={index}>
                    <Card style={styles.card} >
                        <CardHeader product={item} />
                        <CardBody product={item} />
                        <CardFooter product={item} />
                    </Card>
                </View>
            )
        })
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
    }
});