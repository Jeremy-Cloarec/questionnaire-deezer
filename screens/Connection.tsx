import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Connection: undefined;
    Begin: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Connection'>;

export default function Connection({ navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>S'inscrire au quiz</Text>
            <Button
                title="S'incrire"
                onPress={() => navigation.navigate('Begin')}
            />
        </View>
    );
}