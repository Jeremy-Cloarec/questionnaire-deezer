import * as React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    containerInput:{
        position: "relative",
        width: "100%"
    },
    input: {
        width: "100%",
        height: 50,
        padding: 10,
        backgroundColor: "black",
        color: "white",
        borderWidth: 3,
        borderColor: "#9C27B0",
        borderRadius: 10,
    },
    inputLabel: {
        color: "#9c27b0",
        position: "absolute",
        top: -13,
        left: 20,
        zIndex:2,
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "black",
        paddingHorizontal:5,
    },
});

type Props = {
    placeholder: string;
    label: string;
    onChangeText: (value: string) => void;
}
export default function Input({ label, placeholder, onChangeText}: Props) {
    return (
        <View style={styles.containerInput}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={"#696969"}
            />
        </View>

    );
}