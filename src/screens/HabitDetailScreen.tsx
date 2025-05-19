import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft, Dumbbell, Bell, Check, X, ChevronDown, Moon, Droplets, Heart } from 'lucide-react-native';
import tw from 'twrnc';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface HabitDetailScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

const HabitDetailScreen: React.FC<HabitDetailScreenProps> = ({ navigation }) => {
  const habit = {
    id: 1,
    name: 'Workout',
    icon: 'Dumbbell',
    color: 'bg-red-500',
    target: '45 mins',
    streak: 8,
    description: 'Strength training or cardio workout for at least 45 minutes',
    schedule: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
    reminder: '6:30 AM',
    history: [
      { date: '2025-05-19', completed: true, note: 'Full body workout' },
      { date: '2025-05-18', completed: true, note: 'Cardio only' },
      { date: '2025-05-17', completed: true, note: 'Leg day' },
      { date: '2025-05-16', completed: true, note: 'Upper body' },
      { date: '2025-05-15', completed: true, note: 'HIIT session' },
      { date: '2025-05-14', completed: false, note: 'Skipped - too tired' },
      { date: '2025-05-13', completed: true, note: 'Morning run' },
      { date: '2025-05-12', completed: true, note: 'Gym session' },
      { date: '2025-05-11', completed: true, note: 'Home workout' },
      { date: '2025-05-10', completed: false, note: 'Rest day' },
    ]
  };
  const monthlyData = [
    { month: 'Jan', completion: 65 },
    { month: 'Feb', completion: 70 },
    { month: 'Mar', completion: 85 },
    { month: 'Apr', completion: 75 },
    { month: 'May', completion: 92 }
  ];
  return (
    <ScrollView style={tw`flex-1`}>
      {/* Header */}
      <View style={tw`bg-red-500 p-5`}>
        <View style={tw`flex-row items-center mb-6`}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-4`}>
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold text-white`}>Habit Details</Text>
        </View>
        <View style={tw`flex-row items-center mb-4`}>
          <View style={tw`bg-white bg-opacity-20 w-12 h-12 rounded-lg items-center justify-center`}>
            <Dumbbell size={24} color="#fff" />
          </View>
          <View style={tw`ml-4`}>
            <Text style={tw`text-2xl font-bold text-white`}>{habit.name}</Text>
            <Text style={tw`text-white`}>{habit.target}</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between`}>
          <View>
            <Text style={tw`text-sm text-white opacity-80`}>Current Streak</Text>
            <Text style={tw`text-2xl font-bold text-white`}>{habit.streak} days 🔥</Text>
          </View>
          <View>
            <Text style={tw`text-sm text-white opacity-80`}>This Month</Text>
            <Text style={tw`text-2xl font-bold text-white`}>92% 📈</Text>
          </View>
        </View>
      </View>
      {/* Content */}
      <View style={tw`p-5`}> 
        {/* Description */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-800 font-bold mb-2`}>Description</Text>
          <Text style={tw`text-gray-600`}>{habit.description}</Text>
        </View>
        {/* Schedule */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-800 font-bold mb-2`}>Schedule</Text>
          <View style={tw`flex-row`}> 
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <View
                key={index}
                style={tw`w-8 h-8 rounded-full items-center justify-center mr-2 ${habit.schedule.length > index ? 'bg-red-500' : 'bg-gray-100'}`}
              >
                <Text style={tw`${habit.schedule.length > index ? 'text-white' : 'text-gray-400'} text-sm`}>{day}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* Reminder */}
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-800 font-bold mb-2`}>Reminder</Text>
          <View style={tw`flex-row items-center bg-gray-100 p-3 rounded-lg`}>
            <Bell size={18} color="#6B7280" style={tw`mr-3`} />
            <Text style={tw`text-gray-700`}>{habit.reminder}</Text>
          </View>
        </View>
        {/* Monthly Progress */}
        <View style={tw`mb-6`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <Text style={tw`text-gray-800 font-bold`}>Monthly Progress</Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-sm text-gray-500`}>2025</Text>
              <ChevronDown size={16} color="#6B7280" style={tw`ml-1`} />
            </View>
          </View>
          <View style={tw`bg-white p-4 rounded-xl shadow-sm`}>
            <View style={tw`flex-row justify-between items-end h-32`}>
              {monthlyData.map((item, index) => (
                <View key={index} style={tw`items-center`}>
                  <View style={tw`relative w-8 h-24`}>
                    <View style={[tw`absolute bottom-0 w-full bg-red-500 rounded-t-sm`, { height: `${item.completion}%` }]} />
                  </View>
                  <Text style={tw`text-xs mt-2 text-gray-500`}>{item.month}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* History */}
        <View>
          <Text style={tw`text-gray-800 font-bold mb-2`}>History</Text>
          <View>
            {habit.history.map((entry, index) => {
              const date = new Date(entry.date);
              const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              return (
                <View key={index} style={tw`bg-white p-3 rounded-lg shadow-sm flex-row items-center mb-2`}>
                  <View style={tw`w-8 h-8 rounded-full items-center justify-center mr-3 ${entry.completed ? 'bg-green-500' : 'bg-gray-100'}`}>
                    {entry.completed ? <Check size={16} color="#fff" /> : <X size={16} color="#9CA3AF" />}
                  </View>
                  <View style={tw`flex-1`}>
                    <Text style={tw`text-gray-800 font-medium`}>{formattedDate}</Text>
                    <Text style={tw`text-gray-500 text-sm`}>{entry.note}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HabitDetailScreen; 