import { Pressable, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    buttonInput: {
        // backgroundColor: "#AB47BC",
        borderWidth: 3,
        // borderColor: "#AB47BC",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        width: "100%"
    },
    textButton: {
        fontWeight: "bold",
    }
})

export default function ButtonInput({ navigate, text, textColor, backgroundColor }: any) {
    return (
        <Pressable style={[styles.buttonInput, { backgroundColor: backgroundColor}]} onPress={navigate}>
            <Text style={[styles.textButton, { color: textColor }]}>{text}</Text>
        </Pressable>
    );
}