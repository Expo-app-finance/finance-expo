// File: app/_layout.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkInitialRoute();
  }, []);

  const checkInitialRoute = async () => {
    try {
      const seenOnboarding = await AsyncStorage.getItem('seenOnboarding');
      const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');

      if (!seenOnboarding) {
        // First time user - show onboarding
        router.replace('/onboarding');
      } else if (!userLoggedIn) {
        // Seen onboarding but not logged in - show auth
        router.replace('/auth/login');
      } else {
        // Logged in - show main app
        router.replace('/(tabs)');
      }
    } catch (error) {
      console.error('Error checking initial route:', error);
      router.replace('/onboarding');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}