import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Connection: undefined;
    Quiz: undefined;
    Begin: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Begin'>;

export default function Begin({ navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Commencer le quiz</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Button
                    title="Retour"
                    onPress={() => navigation.navigate('Connection')}
                />
                <Button
                    title="Commencer"
                    onPress={() => navigation.navigate('Quiz')}
                />
            </View>
        </View>
    );
}