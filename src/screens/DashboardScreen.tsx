import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, Dumbbell, Droplets, Moon, Heart, Plus, Check } from 'lucide-react-native';
import tw from 'twrnc';

const DashboardScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState('home');
  // Sample user data
  const userData = {
    name: 'Alex',
    streak: 12,
    completedToday: 3,
    totalHabits: 6,
  };
  // Sample habits data
  const habits = [
    { id: 1, name: 'Workout', icon: 'Dumbbell', color: 'bg-red-500', target: '45 mins', completed: true, streak: 8 },
    { id: 2, name: 'Drink Water', icon: 'Droplets', color: 'bg-blue-500', target: '2.5L', completed: true, streak: 12 },
    { id: 3, name: 'Meditation', icon: 'Moon', color: 'bg-purple-500', target: '15 mins', completed: true, streak: 5 },
    { id: 4, name: 'Run', icon: 'Heart', color: 'bg-green-500', target: '5 km', completed: false, streak: 0 },
    { id: 5, name: 'Healthy Meal', icon: 'Heart', color: 'bg-yellow-500', target: '3 meals', completed: false, streak: 3 },
    { id: 6, name: 'Sleep Early', icon: 'Moon', color: 'bg-indigo-500', target: '10:30 PM', completed: false, streak: 2 },
  ];
  // Get current date
  const today = new Date();
  const dateOptions = { weekday: 'long' as const, month: 'long' as const, day: 'numeric' as const };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);
  // Weekly progress data
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const weeklyProgress = [
    { day: 'M', completed: 5, total: 6 },
    { day: 'T', completed: 4, total: 6 },
    { day: 'W', completed: 6, total: 6 },
    { day: 'T', completed: 3, total: 6 },
    { day: 'F', completed: 5, total: 6 },
    { day: 'S', completed: 2, total: 6 },
    { day: 'S', completed: 0, total: 6 },
  ];

  return (
    <ScrollView style={tw`flex-1 bg-gray-50`} contentContainerStyle={tw`p-5`}> 
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-6`}>
        <View>
          <Text style={tw`text-2xl font-bold text-gray-800`}>Hello, {userData.name}</Text>
          <Text style={tw`text-gray-500`}>{formattedDate}</Text>
        </View>
        <Bell size={24} color="#4B5563" />
      </View>
      {/* User Stats */}
      <View style={tw`flex-row mb-6`}> 
        <View style={tw`flex-1 bg-white p-4 rounded-xl mr-2 shadow-sm`}>
          <Text style={tw`text-gray-500 text-sm`}>Current Streak</Text>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-2xl font-bold text-gray-800`}>{userData.streak}</Text>
            <Text style={tw`ml-1 text-gray-500 text-sm`}>days</Text>
          </View>
        </View>
        <View style={tw`flex-1 bg-white p-4 rounded-xl ml-2 shadow-sm`}>
          <Text style={tw`text-gray-500 text-sm`}>Today's Progress</Text>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-2xl font-bold text-gray-800`}>{userData.completedToday}/{userData.totalHabits}</Text>
            <Text style={tw`ml-1 text-gray-500 text-sm`}>completed</Text>
          </View>
        </View>
      </View>
      {/* Weekly Progress */}
      <View style={tw`bg-white p-4 rounded-xl shadow-sm mb-6`}>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-gray-800 font-bold`}>Weekly Progress</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
            <Text style={tw`text-indigo-500 text-sm font-medium`}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-between`}>
          {weeklyProgress.map((day, index) => (
            <View key={index} style={tw`items-center`}>
              <Text style={tw`text-gray-500 text-xs mb-1`}>{day.day}</Text>
              <View style={tw`relative w-8 h-24 bg-gray-100 rounded-full overflow-hidden`}>
                <View style={[tw`absolute bottom-0 w-full bg-indigo-500 rounded-full`, { height: `${(day.completed / day.total) * 96}%` }]} />
              </View>
              <Text style={tw`text-xs mt-1 font-medium`}>{day.completed}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* Today's Habits */}
      <View style={tw`mb-4`}>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-gray-800 font-bold`}>Today's Habits</Text>
          <TouchableOpacity style={tw`flex-row items-center`} onPress={() => navigation.navigate('Add')}>
            <Plus size={16} color="#6366f1" style={tw`mr-1`} />
            <Text style={tw`text-indigo-500 text-sm font-medium`}>Add New</Text>
          </TouchableOpacity>
        </View>
        <View>
          {habits.map(habit => (
            <TouchableOpacity
              key={habit.id}
              style={tw`bg-white p-4 rounded-xl shadow-sm flex-row items-center justify-between mb-3`}
              onPress={() => navigation.navigate('HabitDetail')}
            >
              <View style={tw`flex-row items-center`}>
                <View style={tw`${habit.color} w-10 h-10 rounded-lg items-center justify-center`}>
                  {habit.icon === 'Dumbbell' && <Dumbbell size={20} color="#fff" />}
                  {habit.icon === 'Droplets' && <Droplets size={20} color="#fff" />}
                  {habit.icon === 'Moon' && <Moon size={20} color="#fff" />}
                  {habit.icon === 'Heart' && <Heart size={20} color="#fff" />}
                </View>
                <View style={tw`ml-3`}>
                  <Text style={tw`text-gray-800 font-medium`}>{habit.name}</Text>
                  <Text style={tw`text-gray-500 text-xs`}>{habit.target}</Text>
                </View>
              </View>
              <View style={tw`flex-row items-center`}>
                {habit.streak > 0 && (
                  <View style={tw`flex-row items-center mr-3`}>
                    <Text style={tw`text-gray-500 text-xs mr-1`}>{habit.streak}</Text>
                    <Text style={tw`text-xs`}>🔥</Text>
                  </View>
                )}
                <View
                  style={tw`h-8 w-8 rounded-full items-center justify-center ${habit.completed ? 'bg-green-500' : 'bg-gray-100'}`}
                >
                  {habit.completed ? <Check size={16} color="#fff" /> : null}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen; 