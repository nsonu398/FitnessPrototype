import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft, ChevronDown, Dumbbell, Droplets, Moon, Heart } from 'lucide-react-native';
import tw from 'twrnc';

const StreakViewScreen = ({ navigation }: any) => {
  const monthlyData = [
    { month: 'January', completion: 68 },
    { month: 'February', completion: 75 },
    { month: 'March', completion: 82 },
    { month: 'April', completion: 78 },
    { month: 'May', completion: 92 },
  ];
  const habits = [
    { id: 1, name: 'Workout', icon: 'Dumbbell', color: 'bg-red-500', completion: 85 },
    { id: 2, name: 'Drink Water', icon: 'Droplets', color: 'bg-blue-500', completion: 92 },
    { id: 3, name: 'Meditation', icon: 'Moon', color: 'bg-purple-500', completion: 78 },
    { id: 4, name: 'Run', icon: 'Heart', color: 'bg-green-500', completion: 65 },
  ];
  return (
    <ScrollView style={tw`flex-1`}>
      {/* Header */}
      <View style={tw`p-5 border-b border-gray-200`}>
        <View style={tw`flex-row items-center mb-4`}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-4`}>
            <ArrowLeft size={24} color="#1F2937" />
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold text-gray-800`}>Progress & Stats</Text>
        </View>
      </View>
      {/* Content */}
      <View style={tw`p-5`}> 
        {/* Overall Progress */}
        <View style={tw`mb-6`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <Text style={tw`text-gray-800 font-bold`}>Monthly Progress</Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-sm text-gray-500`}>2025</Text>
              <ChevronDown size={16} color="#6B7280" style={tw`ml-1`} />
            </View>
          </View>
          <View style={tw`bg-white p-4 rounded-xl shadow-sm`}>
            <View style={tw`flex-row justify-between items-end h-40`}>
              {monthlyData.map((item, index) => (
                <View key={index} style={tw`items-center`}>
                  <Text style={tw`text-xs mb-1 text-gray-500`}>{item.completion}%</Text>
                  <View style={tw`relative w-12 h-32`}>
                    <View style={[tw`absolute bottom-0 w-full bg-indigo-500 rounded-t-sm`, { height: `${item.completion}%` }]} />
                  </View>
                  <Text style={tw`text-xs mt-2 text-gray-500`}>{item.month.substring(0, 3)}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* Habits Breakdown */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-800 font-bold mb-3`}>Habits Breakdown</Text>
          <View>
            {habits.map(habit => (
              <View key={habit.id} style={tw`bg-white p-4 rounded-xl shadow-sm mb-4`}>
                <View style={tw`flex-row items-center mb-2`}>
                  <View style={tw`${habit.color} w-8 h-8 rounded-lg items-center justify-center`}>
                    {habit.icon === 'Dumbbell' && <Dumbbell size={16} color="#fff" />}
                    {habit.icon === 'Droplets' && <Droplets size={16} color="#fff" />}
                    {habit.icon === 'Moon' && <Moon size={16} color="#fff" />}
                    {habit.icon === 'Heart' && <Heart size={16} color="#fff" />}
                  </View>
                  <Text style={tw`ml-2 text-gray-800 font-medium`}>{habit.name}</Text>
                  <Text style={tw`ml-auto text-gray-500`}>{habit.completion}%</Text>
                </View>
                <View style={tw`w-full bg-gray-100 rounded-full h-2`}>
                  <View style={[tw`h-2 rounded-full`, { backgroundColor: tw.color(habit.color.replace('bg-', '')), width: `${habit.completion}%` }]} />
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* Calendar View */}
        <View>
          <Text style={tw`text-gray-800 font-bold mb-3`}>Calendar View</Text>
          <View style={tw`bg-white p-4 rounded-xl shadow-sm`}>
            {/* Month Selector */}
            <View style={tw`flex-row justify-between items-center mb-4`}>
              <TouchableOpacity>
                <ArrowLeft size={20} color="#6B7280" />
              </TouchableOpacity>
              <Text style={tw`text-gray-800 font-bold`}>May 2025</Text>
              <TouchableOpacity>
                <ArrowLeft size={20} color="#6B7280" style={{ transform: [{ rotate: '180deg' }] }} />
              </TouchableOpacity>
            </View>
            {/* Days of Week */}
            <View style={tw`flex-row mb-2 justify-between`}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <Text key={index} style={tw`text-center text-gray-500 text-sm w-6`}>{day}</Text>
              ))}
            </View>
            {/* Calendar Grid */}
            <View style={tw`flex-row flex-wrap`}>
              {Array.from({ length: 35 }).map((_, index) => {
                const day = index - 2; // Adjust for month start day
                const isCurrentMonth = day >= 0 && day < 31;
                const completionRate = isCurrentMonth ? Math.floor(Math.random() * 100) : 0;
                let dayStyle = 'bg-white text-gray-800';
                if (isCurrentMonth) {
                  if (completionRate > 80) dayStyle = 'bg-green-500 text-white';
                  else if (completionRate > 50) dayStyle = 'bg-yellow-500 text-white';
                  else if (completionRate > 0) dayStyle = 'bg-gray-100 text-gray-800';
                } else {
                  dayStyle = 'bg-white text-gray-300';
                }
                return (
                  <View
                    key={index}
                    style={tw`w-6 h-6 m-1 rounded-lg items-center justify-center ${dayStyle}`}
                  >
                    <Text style={tw`text-sm`}>{isCurrentMonth ? day + 1 : ''}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default StreakViewScreen; 