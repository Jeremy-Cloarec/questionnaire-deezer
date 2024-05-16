import { Pressable, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    buttonInput: {
        backgroundColor: "#AB47BC",
        borderWidth: 3,
        borderColor: "#AB47BC",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    textButton: {
        color: "white",
    }
})

export default function ButtonInput({ navigate, text }: any) {
    return (
        <Pressable style={styles.buttonInput} onPress={navigate}>
            <Text style={styles.textButton}>{text}</Text>
        </Pressable>
    )
}