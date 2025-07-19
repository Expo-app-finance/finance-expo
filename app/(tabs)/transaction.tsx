// File: app/(tabs)/transactions.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function TransactionsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🚧</Text>
        <Text style={[styles.title, { color: colors.text }]}>Under Construction</Text>
        <Text style={[styles.subtitle, { color: colors.icon }]}>
          Transactions feature is coming soon!
        </Text>
      </View>
    </SafeAreaView>
  );
}

// File: app/(tabs)/budget.tsx - Same pattern
export function BudgetScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎯</Text>
        <Text style={[styles.title, { color: colors.text }]}>Under Construction</Text>
        <Text style={[styles.subtitle, { color: colors.icon }]}>
          Budget management is coming soon!
        </Text>
      </View>
    </SafeAreaView>
  );
}

// File: app/(tabs)/profile.tsx - Same pattern
export function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={styles.emoji}>👤</Text>
        <Text style={[styles.title, { color: colors.text }]}>Under Construction</Text>
        <Text style={[styles.subtitle, { color: colors.icon }]}>
          Profile settings are coming soon!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});