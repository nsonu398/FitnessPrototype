import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { User, Bell, LogOut, Settings, BarChart, Heart, Dumbbell, Droplets, Moon } from 'lucide-react-native';
import tw from 'twrnc';

const ProfileScreen = ({ navigation }: any) => {
  const user = {
    name: 'Alex Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    email: 'alex.johnson@email.com',
    streak: 12,
    totalHabits: 6,
    completed: 120,
    joined: 'Jan 2024',
  };
  const stats = [
    { label: 'Habits', value: user.totalHabits },
    { label: 'Streak', value: user.streak },
    { label: 'Completed', value: user.completed },
  ];
  return (
    <ScrollView style={tw`flex-1 bg-gray-50`} contentContainerStyle={tw`p-5`}>
      {/* Header */}
      <View style={tw`items-center mb-6`}>
        <Image
          source={{ uri: user.avatar }}
          style={tw`w-24 h-24 rounded-full mb-3 bg-gray-200`}
        />
        <Text style={tw`text-2xl font-bold text-gray-800`}>{user.name}</Text>
        <Text style={tw`text-gray-500 mb-2`}>{user.email}</Text>
        <View style={tw`flex-row justify-center mb-2`}>
          {stats.map((stat, idx) => (
            <View key={stat.label} style={tw`items-center mx-4`}>
              <Text style={tw`text-xl font-bold text-indigo-500`}>{stat.value}</Text>
              <Text style={tw`text-gray-500 text-xs`}>{stat.label}</Text>
            </View>
          ))}
        </View>
        <Text style={tw`text-gray-400 text-xs`}>Joined {user.joined}</Text>
      </View>
      {/* Quick Actions */}
      <View style={tw`bg-white rounded-xl shadow-sm p-4 mb-6`}>
        <Text style={tw`text-gray-800 font-bold mb-3`}>Quick Actions</Text>
        <View style={tw`flex-row justify-between`}>
          <TouchableOpacity style={tw`items-center`}>
            <BarChart size={28} color="#6366f1" />
            <Text style={tw`text-xs mt-1 text-gray-700`}>Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center`}>
            <Settings size={28} color="#6366f1" />
            <Text style={tw`text-xs mt-1 text-gray-700`}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`items-center`}>
            <Bell size={28} color="#6366f1" />
            <Text style={tw`text-xs mt-1 text-gray-700`}>Reminders</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* My Habits */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-gray-800 font-bold mb-3`}>My Habits</Text>
        <View style={tw`flex-row flex-wrap`}> 
          <View style={tw`bg-red-500 rounded-lg p-3 m-1 flex-row items-center`}> <Dumbbell size={20} color="#fff" /> <Text style={tw`ml-2 text-white font-medium`}>Workout</Text> </View>
          <View style={tw`bg-blue-500 rounded-lg p-3 m-1 flex-row items-center`}> <Droplets size={20} color="#fff" /> <Text style={tw`ml-2 text-white font-medium`}>Drink Water</Text> </View>
          <View style={tw`bg-purple-500 rounded-lg p-3 m-1 flex-row items-center`}> <Moon size={20} color="#fff" /> <Text style={tw`ml-2 text-white font-medium`}>Meditation</Text> </View>
          <View style={tw`bg-green-500 rounded-lg p-3 m-1 flex-row items-center`}> <Heart size={20} color="#fff" /> <Text style={tw`ml-2 text-white font-medium`}>Run</Text> </View>
        </View>
      </View>
      {/* Settings/Logout */}
      <View style={tw`bg-white rounded-xl shadow-sm p-4`}> 
        <TouchableOpacity style={tw`flex-row items-center py-3 border-b border-gray-100`}>
          <Settings size={20} color="#6366f1" />
          <Text style={tw`ml-3 text-gray-800`}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center py-3 border-b border-gray-100`}>
          <Bell size={20} color="#6366f1" />
          <Text style={tw`ml-3 text-gray-800`}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-row items-center py-3`}>
          <LogOut size={20} color="#ef4444" />
          <Text style={tw`ml-3 text-red-500`}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen; 