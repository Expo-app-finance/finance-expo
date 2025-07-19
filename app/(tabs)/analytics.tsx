// File: app/(tabs)/dashboard.tsx
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const timeFilters = ['7D', '1M', '3M', '1Y'];
  const [selectedFilter, setSelectedFilter] = React.useState('1M');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header with better contrast */}
      <View style={[styles.header, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>Dashboard</Text>
        <TouchableOpacity style={[styles.exportButton, { backgroundColor: colors.tint }]}>
          <Text style={styles.exportText}>📊</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Time Filter */}
        {/* <View style={styles.filterSection}>
          <View style={[styles.filterContainer, { backgroundColor: colorScheme === 'dark' ? '#374151' : '#F3F4F6' }]}>
            {timeFilters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterButton,
                  selectedFilter === filter && [styles.activeFilter, { backgroundColor: colors.tint }]
                ]}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text style={[
                  styles.filterText,
                  { color: selectedFilter === filter ? '#fff' : colors.text }
                ]}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View> */}

        {/* Total Income & Expense Cards */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCard, { backgroundColor: '#10B981' }]}>
            <Text style={styles.statIcon}>💰</Text>
            <Text style={styles.statLabel}>Total Income</Text>
            <Text style={styles.statValue}>$4,200</Text>
            <Text style={styles.statChange}>+12% ↗</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: '#EF4444' }]}>
            <Text style={styles.statIcon}>💸</Text>
            <Text style={styles.statLabel}>Total Expenses</Text>
            <Text style={styles.statValue}>$2,890</Text>
            <Text style={styles.statChange}>+5% ↗</Text>
          </View>
        </View>

        {/* Spending Trend Chart */}
        <View style={[styles.chartCard, { backgroundColor: colorScheme === 'dark' ? '#374151' : '#fff' }]}>
          <View style={styles.chartHeader}>
            <Text style={[styles.chartTitle, { color: colors.text }]}>Monthly Spending Trend</Text>
            <Text style={[styles.chartSubtitle, { color: colors.icon }]}>Last 6 months</Text>
          </View>
          
          <View style={styles.chart}>
            <View style={styles.chartBars}>
              {[
                { month: 'Jul', value: 60 },
                { month: 'Aug', value: 80 },
                { month: 'Sep', value: 45 },
                { month: 'Oct', value: 90 },
                { month: 'Nov', value: 70 },
                { month: 'Dec', value: 85 },
              ].map((bar, index) => (
                <View key={index} style={styles.barContainer}>
                  <View style={styles.barWrapper}>
                    <View 
                      style={[
                        styles.bar, 
                        { 
                          height: `${bar.value}%`,
                          backgroundColor: index === 5 ? colors.tint : (colorScheme === 'dark' ? '#6B7280' : '#E5E7EB')
                        }
                      ]} 
                    />
                  </View>
                  <Text style={[styles.barLabel, { color: colors.icon }]}>{bar.month}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Spending Categories */}
        <View style={[styles.categoryCard, { backgroundColor: colorScheme === 'dark' ? '#374151' : '#fff' }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Top Spending Categories</Text>
          
          <View style={styles.categoryList}>
            {[
              { name: 'Food & Dining', amount: '$485', percentage: 35, color: '#EF4444', icon: '🍕' },
              { name: 'Transportation', amount: '$320', percentage: 23, color: '#F59E0B', icon: '🚗' },
              { name: 'Entertainment', amount: '$180', percentage: 13, color: '#8B5CF6', icon: '🎬' },
              { name: 'Shopping', amount: '$240', percentage: 17, color: '#06B6D4', icon: '🛍️' },
            ].map((category, index) => (
              <View key={index} style={styles.categoryItem}>
                <View style={styles.categoryLeft}>
                  <View style={[styles.categoryIconContainer, { backgroundColor: `${category.color}20` }]}>
                    <Text style={styles.categoryIcon}>{category.icon}</Text>
                  </View>
                  <View style={styles.categoryInfo}>
                    <Text style={[styles.categoryName, { color: colors.text }]}>{category.name}</Text>
                    <View style={styles.progressBarContainer}>
                      <View style={[styles.progressBarBg, { backgroundColor: colorScheme === 'dark' ? '#6B7280' : '#E5E7EB' }]}>
                        <View 
                          style={[
                            styles.progressBar, 
                            { 
                              width: `${category.percentage}%`,
                              backgroundColor: category.color 
                            }
                          ]} 
                        />
                      </View>
                      <Text style={[styles.categoryPercentage, { color: colors.icon }]}>
                        {category.percentage}%
                      </Text>
                    </View>
                  </View>
                </View>
                <Text style={[styles.categoryAmount, { color: colors.text }]}>{category.amount}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  exportButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  exportText: {
    fontSize: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  
  // Filter Section
  filterSection: {
    marginTop: 20,
    marginBottom: 24,
  },
  filterContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 4,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeFilter: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
  },
  
  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  statIcon: {
    fontSize: 28,
    marginBottom: 12,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  statChange: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13,
    fontWeight: '500',
  },
  
  // Chart Card
  chartCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  chartHeader: {
    marginBottom: 24,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  chartSubtitle: {
    fontSize: 14,
  },
  chart: {
    height: 140,
    justifyContent: 'flex-end',
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 8,
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  barWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    width: 24,
    marginBottom: 12,
  },
  bar: {
    width: '100%',
    borderRadius: 6,
    minHeight: 12,
  },
  barLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  
  // Category Card
  categoryCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  categoryList: {
    gap: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  categoryIcon: {
    fontSize: 20,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  categoryPercentage: {
    fontSize: 13,
    fontWeight: '500',
    minWidth: 35,
    textAlign: 'right',
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
});