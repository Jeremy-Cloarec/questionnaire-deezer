import * as React from 'react';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

type Props = {
    text: string;
    onChangeText: (text: string) => void;
}
export default function Input({ text, onChangeText }: Props) {   
    return (
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
    />
    );
}