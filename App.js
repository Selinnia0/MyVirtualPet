import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

export default function App() {
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);

  // Değerleri 0 ile 100 arasında sınırlandırmak için Math.max ve Math.min kullanıyoruz. En temiz ve kısa yoludur.
  const handleFeed = () => setHunger(prev => Math.max(0, prev - 10));
  const handlePlay = () => setHappiness(prev => Math.min(100, prev + 10));

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <View style={styles.container}>
      <Image source={require('./KendiCizdigimResim.png')} style={styles.image} />
      <Text style={styles.title}>Pamuk (Kedi)</Text>

      <View style={styles.stats}>
        <View style={styles.statRow}>
          <Image source={require('./Balik.png')} style={styles.icon} />
          <Text style={styles.text}>Açlık: %{hunger}</Text>
        </View>
        <View style={styles.statRow}>
          <Image source={require('./Mutlu.png')} style={styles.icon} />
          <Text style={styles.text}>Mutluluk: %{happiness}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Pressable onPress={handleFeed} style={styles.btnContainer}>
          {({ pressed }) => (
            <View style={styles.btnShadow}>
              <View style={[
                styles.btnInner,
                { backgroundColor: '#ff88a0ff' },
                { transform: [{ translateY: pressed ? 0 : -6 }] }
              ]}>
                <Text style={styles.btnText}>Besle</Text>
              </View>
            </View>
          )}
        </Pressable>

        <Pressable onPress={handlePlay} style={styles.btnContainer}>
          {({ pressed }) => (
            <View style={styles.btnShadow}>
              <View style={[
                styles.btnInner,
                { backgroundColor: '#ff85e5ff' },
                { transform: [{ translateY: pressed ? 0 : -6 }] }
              ]}>
                <Text style={styles.btnText}>Oyna</Text>
              </View>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffd7de' },
  image: { width: 250, height: 250, marginBottom: 10, resizeMode: 'contain' },
  title: { fontSize: 20, fontFamily: 'PressStart2P_400Regular', marginBottom: 20, textAlign: 'center' },
  stats: { marginBottom: 30, alignItems: 'flex-start' },
  statRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  icon: { width: 45, height: 45, marginRight: 10, resizeMode: 'contain' },
  text: { fontSize: 12, fontFamily: 'PressStart2P_400Regular' },
  row: { flexDirection: 'row', gap: 20 },
  btnContainer: { marginTop: 6 },
  btnShadow: { backgroundColor: '#000', borderRadius: 8 },
  btnInner: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#000',
  },
  btnText: { color: 'white', fontSize: 12, fontFamily: 'PressStart2P_400Regular', textAlign: 'center' }
});