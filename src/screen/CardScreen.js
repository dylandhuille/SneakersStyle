import { StyleSheet, View, FlatList } from 'react-native';
import CardBody from '../components/CardBody';
import CardHeader from '../components/CardHeader';
import CardFooter from '../components/CardFooter'
import data from '../data/data';
import { Card } from 'react-native-paper';



export default function CardScreen() {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Card style={styles.card} >
                    <CardHeader product={item} />
                    <CardBody product={item} />
                    <CardFooter product={item} />
                </Card>
            </View>
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
});