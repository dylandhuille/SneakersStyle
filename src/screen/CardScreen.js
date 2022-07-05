import { StyleSheet, Text, View } from 'react-native';
import CardBody from '../components/CardBody';
import CardHeader from '../components/CardHeader';
import CardFooter from '../components/CardFooter'
import data from '../data/data';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function CardScreen() {
    return (
        data.map(function (item, index) {
            return (
                <Card key={index}>
                    <CardHeader product={item} />
                    <CardBody product={item} />
                    <CardFooter product={item} />
                </Card>
            )
        })
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
