import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { ArrowLeft, Dumbbell, Heart, Droplets, Moon, Plus, Bell } from 'lucide-react-native';
import tw from 'twrnc';

const AddHabitScreen = ({ navigation }: any) => {
  const habitIcons = [
    { id: 'dumbbell', icon: <Dumbbell size={24} color="#fff" /> },
    { id: 'heart', icon: <Heart size={24} color="#fff" /> },
    { id: 'droplets', icon: <Droplets size={24} color="#fff" /> },
    { id: 'moon', icon: <Moon size={24} color="#fff" /> },
  ];
  const colorOptions = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-yellow-500',
    'bg-indigo-500',
  ];
  const [selectedIcon, setSelectedIcon] = useState('dumbbell');
  const [selectedColor, setSelectedColor] = useState('bg-red-500');
  const [habitName, setHabitName] = useState('');
  const [goal, setGoal] = useState('');
  const [goalType, setGoalType] = useState('minutes');
  const [description, setDescription] = useState('');
  return (
    <ScrollView style={tw`flex-1`}>
      {/* Header */}
      <View style={tw`p-5 border-b border-gray-200`}>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-4`}>
            <ArrowLeft size={24} color="#1F2937" />
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold text-gray-800`}>Add New Habit</Text>
        </View>
      </View>
      {/* Form */}
      <View style={tw`p-5`}>
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 font-medium mb-2`}>Habit Name</Text>
          <TextInput
            style={tw`w-full p-3 border border-gray-300 rounded-lg mb-2`}
            placeholder="e.g., Morning Workout"
            value={habitName}
            onChangeText={setHabitName}
          />
        </View>
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 font-medium mb-2`}>Icon</Text>
          <View style={tw`flex-row`}> 
            {habitIcons.map(item => (
              <TouchableOpacity
                key={item.id}
                style={tw`w-12 h-12 rounded-lg items-center justify-center mr-3 ${selectedIcon === item.id ? selectedColor + ' text-white' : 'bg-gray-100'}`}
                onPress={() => setSelectedIcon(item.id)}
              >
                {item.icon}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 font-medium mb-2`}>Color</Text>
          <View style={tw`flex-row`}> 
            {colorOptions.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={tw`w-8 h-8 rounded-full mr-3 ${color} ${selectedColor === color ? 'border-2 border-gray-400' : ''}`}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </View>
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 font-medium mb-2`}>Goal</Text>
          <View style={tw`flex-row`}>
            <TextInput
              style={tw`flex-1 p-3 border border-gray-300 rounded-l-lg`}
              placeholder="e.g., 45"
              value={goal}
              onChangeText={setGoal}
              keyboardType="numeric"
            />
            <View style={tw`border border-gray-300 border-l-0 rounded-r-lg bg-gray-50 px-3 justify-center`}>
              <Text>{goalType}</Text>
            </View>
          </View>
        </View>
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 font-medium mb-2`}>Schedule</Text>
          <View style={tw`flex-row justify-between mb-2`}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <TouchableOpacity
                key={index}
                style={tw`w-10 h-10 rounded-full bg-gray-100 items-center justify-center`}
              >
                <Text style={tw`text-gray-700`}>{day}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`mr-1 text-gray-500 text-sm`}>Repeat</Text>
            <View style={tw`border-none bg-transparent`}>
              <Text style={tw`text-gray-700 text-sm`}>every day</Text>
            </View>
          </View>
        </View>
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 font-medium mb-2`}>Reminder</Text>
          <View style={tw`flex-row items-center bg-gray-100 p-3 rounded-lg`}>
            <Bell size={18} color="#6B7280" style={tw`mr-3`} />
            <Text style={tw`text-gray-700`}>6:30 AM</Text>
          </View>
        </View>
        <View style={tw`mb-6`}>
          <Text style={tw`text-gray-700 font-medium mb-2`}>Description (Optional)</Text>
          <TextInput
            style={tw`w-full p-3 border border-gray-300 rounded-lg h-24`}
            placeholder="Add notes or description..."
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>
        <TouchableOpacity
          style={tw`w-full bg-indigo-500 py-3 rounded-lg items-center`}
          onPress={() => navigation.goBack()}
        >
          <Text style={tw`text-white font-medium`}>Create Habit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddHabitScreen; 