import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12, 
        height: 100
    },
    logo: {
        width: "90%",
        objectFit: "contain",
    },
})
export default function LogoDeezer() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/deezer.png')}
            />
        </View>
    )
}