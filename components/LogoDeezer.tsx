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
        height: "90%",
        resizeMode: "contain",
    },
})
export default function LogoDeezer({url}: any) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={(url)}
            />
        </View>
    )
}