import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temporaryComponent: {
        marginTop: 20,
        padding: 20,
        backgroundColor: 'lightgray',
        borderRadius: 10,
    },
});

type LoadingProps = {
    showComponent: boolean;
};

export default function Loading({ showComponent }: LoadingProps){
    return (
        <View style={styles.container}>
            {showComponent && (
                <View style={styles.temporaryComponent}>
                    <Text>Component displayed for 3 seconds</Text>
                </View>
            )}
        </View>
    );
}