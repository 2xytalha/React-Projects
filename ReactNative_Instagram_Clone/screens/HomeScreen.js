
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ana Sayfa</Text>
      <Button title="Yorumları Görüntüle" onPress={() => navigation.navigate('Comments')} />
      <Button title="Beğenileri Görüntüle" onPress={() => navigation.navigate('Likes')} />
      <Button title="Resim Paylaş" onPress={() => navigation.navigate('ImageSharing')} />
      <Button title="Profil Fotoğrafı Güncelle" onPress={() => navigation.navigate('UpdateProfile')} />
      <Button title="Arkadaşları Görüntüle" onPress={() => navigation.navigate('Friends')} />
      <Button title="Hesabı Sil" onPress={() => navigation.navigate('DeleteAccount')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
    