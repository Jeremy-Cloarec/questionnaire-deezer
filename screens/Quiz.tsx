import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LogoDeezer from '../components/LogoDeezer';


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
            </View>
        </View>
    );
}