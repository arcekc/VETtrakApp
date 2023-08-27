import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

const emails = [
  {
    id: 1,
    sender: 'KOI Student Services',
    subject: 'Class Cancelled',
    "message": "Dear students, I hope this email finds you well.\n\nDue to unforeseen circumstances, the class scheduled for today has been cancelled.\n\nWe apologize for any inconvenience this may cause. Please stay tuned for further updates regarding rescheduling or alternative arrangements.\n\nThank you for your understanding.\n\nBest regards,\nKOI Student Services",
    read: false,
    date: '01/08/2023',
    time: '5:01 PM',
    attachment: false,
  },
  {
    id: 2,
    sender: 'KOI Academics Team',
    subject: 'Meeting Reminder',
    "message": "Hello team, Just a friendly reminder about our upcoming meeting:\n\nMeeting Title: [Meeting Title]\nDate: [Meeting Date]\nTime: [Meeting Time]\nLocation: [Meeting Location]\n\nAgenda: We will be discussing [Agenda Items].\n\nPlease make sure to come prepared and on time. Your participation is important for the success of the meeting.\n\nIf you have any questions or need to make any adjustments, please let me know.\n\nLooking forward to our productive discussion.\n\nBest regards,\nKOI Academics Team",
    read: false,
    date: '27/07/2023',
    time: '10:09 AM',
    attachment: true,
  },
  {
    id: 3,
    sender: 'KOI IT Support',
    subject: 'Digital ID Setup',
    "message": "Hello KC, We are pleased to provide you with instructions for setting up your digital ID:\n\nStep 1: Visit our Digital ID Setup Portal \nStep 2: Log in using your credentials.\nStep 3: Follow the on-screen prompts to verify your identity and create a secure PIN.\nStep 4: Once your digital ID setup is complete, you will receive a confirmation email.\n\nYour digital ID will provide you with secure access to various systems and resources.\n\nIf you encounter any issues during the setup process, please contact our IT support team.\n\nThank you for helping us enhance our security measures.\n\nBest regards,\nIT Support",
    read: true,
    date: '01/07/2023',
    time: '3:51 PM',
    attachment: true,
  },
  {
    id: 4,
    sender: 'KOI Student Services',
    subject: 'VISA Requirements',
    "message": "Hello KC, We hope this email finds you well. As you prepare for your journey to study abroad, we want to ensure you have all the information you need regarding student visa requirements:\n\n1. Visa Application Form: Complete the official student visa application form available on the [Embassy/Consulate] website.\n2. Offer Letter: Attach a copy of your official offer letter from [University/College Name].\n3. Financial Proof: Provide evidence of sufficient funds to cover tuition fees, living expenses, and return travel.\n4. Health Insurance: Obtain comprehensive health insurance coverage for the duration of your stay.\n5. Passport: Ensure your passport is valid for the entire duration of your study.\n\nPlease visit the [Embassy/Consulate] website for specific instructions and application deadlines.\n\nIf you have any questions or need further assistance, feel free to reach out to our International Student Services team at [Contact Information].\n\nWe look forward to welcoming you to our campus!\n\nBest regards,\nInternational Student Services",
    read: false,
    date: '27/06/2023',
    time: '5:41 PM',
    attachment: false,
  },
  {
    "id": 5,
    "sender": "KOI Student Services",
    "subject": "Welcome to KOI",
    "message": "Hi KC Marie, Welcome to King's Own Institute!\n\nWe are delighted to welcome you to our academic family. Your decision to join us marks the beginning of an exciting and transformative learning experience.\n\nOur dedicated faculty and staff are committed to providing you with the best possible education and support throughout your time with us. We believe in nurturing your talents, fostering critical thinking, and encouraging personal growth.\n\nBest regards,\nKOI Student Services",
    "read": true,
    "date": "01/05/2023",
    "time": "9:01 AM",
    "attachment": false
  }
  ,
];

const CommunicationScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('General');

  const filteredEmails = emails.filter((email) => {
    if (activeTab === 'General') {
      return true; // Show all emails
    } else if (activeTab === 'Warning Letters') {
      return email.subject.toLowerCase().includes('warning letters'); // Filter for warning letters
    }
    return false;
  });

  const renderEmail = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('EmailDetail', { email: item })}
    >
    <ListItem bottomDivider>
      <Icon
        name={item.read ? 'circle-outline' : 'circle'}
        type='material-community'
        color={item.read ? '#CC222F' : '#CC222F'}
        size={15}
        marginBottom={50}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: 'bold', marginBottom: 10 }}>{item.sender}</ListItem.Title>
        <ListItem.Subtitle>{item.subject}</ListItem.Subtitle>
        <ListItem.Subtitle style={styles.message}>{item.message.length > 25 ? item.message.slice(0, 25) + '...' : item.message}</ListItem.Subtitle>
      </ListItem.Content>
      <View style={styles.rightContent}>
        <Text style={styles.dateText}>{item.date}</Text>
        <View style={styles.iconsContainer}>
          {item.attachment && <Icon name='attachment' type='entypo' size={15} color='gray' />}
          <Icon name='chevron-right' type='material-community' color='gray' />
        </View>
      </View>
    </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton, styles.sharedTabStyle,
            activeTab === 'General' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setActiveTab('General')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'General' && styles.activeTabText,
            ]}
          >
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton, styles.sharedTabStyle,
            activeTab === 'Warning Letters' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setActiveTab('Warning Letters')}
        >
          <Text
            style={[
              styles.tabButtonText, 
              activeTab === 'Warning Letters' && styles.activeTabText,
            ]}
          >
            Warning Letters
          </Text>
        </TouchableOpacity>
      </View>

      {filteredEmails.length > 0 ? (
        <FlatList
          data={filteredEmails}
          renderItem={renderEmail}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.noEmailsText}>No warning letters available</Text>
      )}
    </View>
  );
};

const sharedBackgroundColor = '#F6F6F6';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 20, // Add border radius to the wrapper
    overflow: 'hidden', // Clip the content to the rounded rectangle
    backgroundColor: sharedBackgroundColor,
    padding: 3
  },
  sharedTabStyle: {
    backgroundColor: sharedBackgroundColor,
    borderColor: sharedBackgroundColor,
  },
  activeTab: {
    backgroundColor: sharedBackgroundColor,
    borderColor: sharedBackgroundColor,
  },
  tabButton: {
    width: '50%',
    paddingVertical: 8,
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  activeTab: {
    backgroundColor: '#24628F',
    borderColor: '#24628F',
  },
  inactiveTab: {
    backgroundColor: sharedBackgroundColor,
    borderColor: sharedBackgroundColor,
  },
  tabButtonText: {
    fontWeight: 'bold',
    color: '#006FCF',
    marginRight: 5,
  },
  activeTabText: {
    color: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dateText: {
    marginBottom: 30,
    color: '#676262',
  },
  rightContent: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  iconsContainer: {
    flexDirection: 'row', // Align icons in a row
    alignItems: 'center', // Center them vertically
  },
  message: {
    color: '#676262',
    paddingTop: 5
  },
  noEmailsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default CommunicationScreen;
