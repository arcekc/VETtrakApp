import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('vtLogin');
        setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Get Started</Text>
            </TouchableOpacity>
        )
        
    }
  return (
    <View style={styles.container}>
      <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            // bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            containerStyles={{paddingHorizontal: 50}}
            pages={[
                {
                    backgroundColor: "#fff",
                    image: (
                        <View style={styles.lottie}>
                            <Image source={require('../assets/images/splash-1.jpg')} style={[styles.image, { width, resizeMode: 'center'}]} />
                        </View>
                    ),
                    title: 'Empowering Your Learning Journey',
                    subtitle: 'Say goodbye to unnecessary inquiries and say hello to a more efficient learning experience.',
                },
                {
                    backgroundColor: "#fff",
                    image: (
                        <View style={styles.lottie}>
                            <Image source={require('../assets/images/splash-2.jpg')} style={[styles.image, { width, resizeMode: 'center'}]} />
                        </View>
                    ),
                    title: 'Access Everything You Need',
                    subtitle: 'All course info in one place. Stay organised, excel in your learning journey.',
                },
                {
                    backgroundColor: "#fff",
                    image: (
                        <View style={styles.lottie}>
                            <Image source={require('../assets/images/splash-3.jpg')} style={[styles.image, { width, resizeMode: 'center'}]} />
                        </View>
                    ),
                    title: 'Stay Connected with Your RTO',
                    subtitle: 'Real-time communication with staff, guidance, and updates – never miss a beat.',
                },
            ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        flex: 1,
        justifyContent: 'center',
        borderRadius: 500,
        marginBottom: 200
    },
    image: {
      
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    }
})