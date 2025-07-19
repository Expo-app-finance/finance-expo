// File: app/onboarding/index.tsx
import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

// Custom Next button
const NextButton = ({...props}: any) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);

// Custom Done button
const DoneButton = ({...props}: any) => (
  <TouchableOpacity style={[styles.button, styles.doneButton]} {...props}>
    <Text style={[styles.buttonText, styles.doneText]}>Get Started</Text>
  </TouchableOpacity>
);

// Custom Dot indicator
const Dot = ({selected}: {selected: boolean}) => (
  <View style={[styles.dot, selected && styles.dotSelected]} />
);

export default function OnboardingScreen() {
  const router = useRouter();

  // const finish = async () => {
  //   await AsyncStorage.setItem('seenOnboarding', 'true');
  //   router.replace('/auth/login');
  // };

  return (
    <Onboarding
      NextButtonComponent={NextButton}
      DoneButtonComponent={DoneButton}
      DotComponent={Dot}
      // onSkip={finish}
      // onDone={finish}
      pages={[
        {
          backgroundColor: '#10B981',
          image: <View style={styles.iconContainer}><Text style={styles.iconText}>💰</Text></View>,
          title: 'Track Every Penny',
          subtitle: 'Log your income & expenses in seconds with our intuitive interface.',
        },
        {
          backgroundColor: '#6366F1',
          image: <View style={styles.iconContainer}><Text style={styles.iconText}>📊</Text></View>,
          title: 'Visualize Your Spending',
          subtitle: 'See where your money goes with beautiful charts and insights.',
        },
        {
          backgroundColor: '#FBBF24',
          image: <View style={styles.iconContainer}><Text style={styles.iconText}>🎯</Text></View>,
          title: 'Achieve Your Goals',
          subtitle: 'Set financial goals and watch your savings grow automatically.',
        },
      ]}
      bottomBarHighlight={true}
      controlStatusBar={false}
    />
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  iconText: {
    fontSize: 80,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  doneButton: {
    backgroundColor: '#fff',
  },
  doneText: {
    color: '#333',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  dotSelected: {
    backgroundColor: '#fff',
    width: 16,
  },
});