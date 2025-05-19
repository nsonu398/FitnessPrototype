import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Mail, Lock, Eye, EyeOff, LogIn, UserPlus, Apple, Github, Globe } from 'lucide-react-native';
import tw from 'twrnc';
import { enableScreens } from 'react-native-screens';

enableScreens();

const AuthScreen = ({ navigation, onAuthSuccess }: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={tw`flex-1 bg-indigo-50 justify-center px-6`}>
      {/* Logo/Illustration */}
      <View style={tw`items-center mb-8`}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/833/833472.png' }}
          style={tw`w-20 h-20 mb-3`}
        />
        <Text style={tw`text-3xl font-bold text-indigo-700 mb-1`}>Welcome {isLogin ? 'Back' : ''}!</Text>
        <Text style={tw`text-gray-500 text-base`}>{isLogin ? 'Log in to continue your fitness journey.' : 'Create an account to get started.'}</Text>
      </View>
      {/* Card */}
      <View style={tw`bg-white rounded-2xl shadow-lg p-6 mb-6`}> 
        {/* Email */}
        <View style={tw`mb-4`}> 
          <Text style={tw`text-gray-700 font-medium mb-2`}>Email</Text>
          <View style={tw`flex-row items-center bg-gray-100 rounded-lg px-3`}> 
            <Mail size={20} color="#6366f1" />
            <TextInput
              style={tw`flex-1 py-3 pl-3 text-gray-800`}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>
        {/* Password */}
        <View style={tw`mb-2`}> 
          <Text style={tw`text-gray-700 font-medium mb-2`}>Password</Text>
          <View style={tw`flex-row items-center bg-gray-100 rounded-lg px-3`}> 
            <Lock size={20} color="#6366f1" />
            <TextInput
              style={tw`flex-1 py-3 pl-3 text-gray-800`}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={20} color="#6366f1" /> : <Eye size={20} color="#6366f1" />}
            </TouchableOpacity>
          </View>
        </View>
        {/* Forgot password */}
        {isLogin && (
          <TouchableOpacity style={tw`mt-1 mb-3 self-end`}>
            <Text style={tw`text-xs text-indigo-500 font-medium`}>Forgot password?</Text>
          </TouchableOpacity>
        )}
        {/* Primary Button */}
        <TouchableOpacity
          style={tw`bg-indigo-500 py-3 rounded-lg items-center mt-2 mb-2`}
          onPress={onAuthSuccess}
        >
          <Text style={tw`text-white font-bold text-base`}>{isLogin ? 'Log In' : 'Sign Up'}</Text>
        </TouchableOpacity>
        {/* Or divider */}
        <View style={tw`flex-row items-center my-3`}> 
          <View style={tw`flex-1 h-px bg-gray-200`} />
          <Text style={tw`mx-2 text-gray-400 text-xs`}>or continue with</Text>
          <View style={tw`flex-1 h-px bg-gray-200`} />
        </View>
        {/* Social Buttons */}
        <View style={tw`flex-row justify-center mb-2`}> 
          <TouchableOpacity style={tw`bg-gray-100 p-3 rounded-full mx-2`}>
            <Globe size={20} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-gray-100 p-3 rounded-full mx-2`}>
            <Apple size={20} color="#111" />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-gray-100 p-3 rounded-full mx-2`}>
            <Github size={20} color="#333" />
          </TouchableOpacity>
        </View>
        {/* Switch link */}
        <View style={tw`flex-row justify-center mt-2`}>
          <Text style={tw`text-gray-500`}>{isLogin ? "Don't have an account?" : 'Already have an account?'}</Text>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={tw`text-indigo-500 font-medium ml-1`}>{isLogin ? 'Sign Up' : 'Log In'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen; 