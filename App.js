import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { drivers } from "./data/drivers.js";
import { useState } from 'react';

export default function App() {
  const [driverIndex, setDriverIndex] = useState(0);
  const driver = drivers[driverIndex];

  const MIN = 0;
  const MAX = drivers.length - 1;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerSub}>SUPER TRUNFO</Text>
          <Text style={styles.headerTitle}>F1 2024</Text>
          <View style={styles.headerLine} />
        </View>

        {/* Card */}
        <View style={styles.card}>
          <View style={styles.cardAccent} />

          <Image source={{ uri: driver.image }} style={styles.image} />

          <View style={styles.cardBody}>
            <Text style={styles.driverNumber}>#{driverIndex + 1}</Text>
            <Text style={styles.name}>{driver.name}</Text>
            <Text style={styles.description}>{driver.description}</Text>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>EQUIPE</Text>
                <Text style={styles.infoValue}>{driver.team}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>PAÍS</Text>
                <Text style={styles.infoValue}>{driver.country}</Text>
              </View>
            </View>

            <View style={styles.starsContainer}>
              <Text style={styles.infoLabel}>RATING</Text>
              <Text style={styles.stars}>{"⭐".repeat(driver.stars)}</Text>
            </View>
          </View>
        </View>

        {/* Navegação */}
        <View style={styles.nav}>
          <TouchableOpacity
            style={[styles.navBtn, driverIndex <= MIN && styles.navBtnDisabled]}
            onPress={() => setDriverIndex(prev => Math.max(prev - 1, MIN))}
            disabled={driverIndex <= MIN}
          >
            <Text style={styles.navBtnText}>‹ ANTERIOR</Text>
          </TouchableOpacity>

          <Text style={styles.navCount}>{driverIndex + 1} / {drivers.length}</Text>

          <TouchableOpacity
            style={[styles.navBtn, driverIndex >= MAX && styles.navBtnDisabled]}
            onPress={() => setDriverIndex(prev => Math.min(prev + 1, MAX))}
            disabled={driverIndex >= MAX}
          >
            <Text style={styles.navBtnText}>PRÓXIMO ›</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  // Header
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerSub: {
    color: '#e10600',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 6,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 4,
    marginTop: 2,
  },
  headerLine: {
    width: 48,
    height: 3,
    backgroundColor: '#e10600',
    marginTop: 8,
  },

  // Card
  card: {
    width: 200,
    height: 300,
    backgroundColor: '#161616',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    shadowColor: '#e10600',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
  cardAccent: {
    height: 4,
    backgroundColor: '#e10600',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    backgroundColor: '#1a1a1a',
    
  },
  cardBody: {
    padding: 20,
  },
  driverNumber: {
    color: '#e10600',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 4,
  },
  name: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 8,
  },
  description: {
    color: '#888',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#2a2a2a',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 16,
  },
  infoItem: {},
  infoLabel: {
    color: '#555',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 4,
  },
  infoValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  starsContainer: {
    gap: 4,
  },
  stars: {
    fontSize: 18,
  },

  // Navegação
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
  },
  navBtn: {
    backgroundColor: '#e10600',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  navBtnDisabled: {
    backgroundColor: '#2a2a2a',
  },
  navBtnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 1,
  },
  navCount: {
    color: '#555',
    fontSize: 13,
    fontWeight: '600',
  },
});