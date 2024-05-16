import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';


type RootStackParamList = {
    Quiz: undefined;
    Begin: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

export default function Quiz({ navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Répondre à la première question</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Button
                    title="Retour"
                    onPress={() => navigation.navigate('Begin')}
                />
                <Button
                    title="Question 1"
                    onPress={() => navigation.navigate('Quiz')}
                />
            </View>
        </View>
    );
}