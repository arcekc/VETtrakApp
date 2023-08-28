import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Icon } from "react-native-elements";

const FinancesScreen = () => {
  // const [transactions, setTransactions] = useState([]);
  const [activeTab, setActiveTab] = useState("Statement");
  const [showModal, setShowModal] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const transactionHistory = [
    { fee: "Tuition Fee - Instalment 3", date: "27 July", amount: "$575.00" },
    { fee: "Tuition Fee - Instalment 2", date: "18 July", amount: "$575.00" },
    { fee: "Tuition Fee - Instalment 1", date: "08 July", amount: "$575.00" },
    { fee: "Enrolment Fee", date: "01 July", amount: "$575.00" },
  ];

  const handlePayment = () => {
    setPaymentCompleted(true);
    setShowModal(true);
  };

  const isInstalment1Overdue = () => {
    const today = new Date();
    const dueDate = new Date("2023-07-31"); // Change this to the actual due date of Instalment 1
    return dueDate < today;
  };

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const closeModal = () => {
    setShowModal(false);
    setPaymentCompleted(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.sharedTabStyle,
            activeTab === "Statement" ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => toggleTab("Statement")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "Statement" && styles.activeTabText,
            ]}
          >
            Statement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.sharedTabStyle,
            activeTab === "Payment Receipts"
              ? styles.activeTab
              : styles.inactiveTab,
          ]}
          onPress={() => toggleTab("Payment Receipts")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "Payment Receipts" && styles.activeTabText,
            ]}
          >
            Payment Receipts
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "Statement" && (
        <>
          <Text style={styles.header}>$2,846.00</Text>
          <Text style={styles.balance}>Balance</Text>
          <View style={styles.nextInstalment}>
            <View style={styles.instalmentRow}>
              <Text style={styles.next}>
                Next instalment due <Text style={styles.bold}>31 Jul</Text>
              </Text>
              <Icon type="ant-design" name="calendar" size={30} />
            </View>
            <Text style={styles.dueAmountText}>$575.00</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                <Text style={styles.buttonText}>Pay $575.00</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                <Text style={styles.buttonText}>Pay other amount</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.mainButton} onPress={handlePayment}>
            <Text style={styles.mainButtonText}>Make full payment</Text>
          </TouchableOpacity>

          {/* <View style={styles.seeAll}>
          <TouchableOpacity>
            <Text style={styles.seeText}>See all</Text>
          </TouchableOpacity>
          </View> */}

          {/* Payment Schedule */}
          <View style={styles.paymentSchedule}>
            <Text style={styles.scheduleHeader}>Payment Plan Schedule</Text>
            <View style={styles.scheduleTable}>
              <View style={styles.scheduleRow}>
                <Text style={styles.scheduleLabel}>Item</Text>
                <Text style={styles.scheduleLabelDue}>Due Date</Text>
                <Text style={styles.scheduleLabel}>Amount</Text>
              </View>
              <View style={styles.scheduleRow}>
                <View style={styles.scheduleItemContainer}>
                  <Icon type="evilicon" name="clock" color="red" size={20} style={styles.scheduleItemIcon} />
                  <Text style={[styles.scheduleItem, styles.overdueText]}>Instalment 4</Text>
                </View>
                <Text style={[styles.scheduleDate, isInstalment1Overdue() && styles.overdueText]}>31 Jul</Text>
                <Text style={[styles.scheduleAmount, styles.overdueText]}>$575.00</Text>
              </View>
              <View style={styles.scheduleRow}>
                <View style={styles.scheduleItemContainer}>
                  <Icon type="evilicon" name="clock" size={20} style={styles.scheduleItemIcon} />
                  <Text style={styles.scheduleItem}>Instalment 5</Text>
                </View>
                <Text style={styles.scheduleDate}>15 Aug</Text>
                <Text style={styles.scheduleAmount}>$575.00</Text>
              </View>
              <View style={styles.scheduleRow}>
                <View style={styles.scheduleItemContainer}>
                  <Icon type="evilicon" name="clock" size={20} style={styles.scheduleItemIcon} />
                  <Text style={styles.scheduleItem}>Instalment 6</Text>
                </View>
                <Text style={styles.scheduleDate}>31 Aug</Text>
                <Text style={styles.scheduleAmount}>$575.00</Text>
              </View>
              {/* Add more schedule rows as needed */}
            </View>
          </View>
        </>
      )}

      {activeTab === "Payment Receipts" && (
        <>
          <View style={styles.transactionHistory}>
            <Text style={styles.historyHeader}>JULY 2023</Text>
            <View style={styles.transContainer}>
              {transactionHistory.map((transaction, index) => (
                <View key={index} style={styles.transactionItem}>
                  <View style={styles.iconContainer}>
                    <Icon type="material-icon" name="receipt" size={20} />
                  </View>
                  <View style={styles.transactionInfo}>
                    <Text style={styles.transactionFee}>{transaction.fee}</Text>
                    <Text style={styles.transactionDate}>
                      {transaction.date}
                    </Text>
                  </View>
                  <Text style={styles.transactionAmount}>
                    {transaction.amount}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.transactionHistory}>
            <Text style={styles.historyHeader}>JUNE 2023</Text>
            <View style={styles.transContainer}>
              {transactionHistory.map((transaction, index) => (
                <View key={index} style={styles.transactionItem}>
                  <View style={styles.iconContainer}>
                    <Icon type="material-icon" name="receipt" size={20} />
                  </View>
                  <View style={styles.transactionInfo}>
                    <Text style={styles.transactionFee}>{transaction.fee}</Text>
                    <Text style={styles.transactionDate}>
                      {transaction.date}
                    </Text>
                  </View>
                  <Text style={styles.transactionAmount}>
                    {transaction.amount}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {paymentCompleted ? (
              <View style={styles.modalIconContainer}>
                <Icon
                  type="material-community"
                  name="check-circle"
                  color="#2ECC71"
                  size={80}
                />
                <Text style={styles.modalText}>Payment Completed!</Text>
                <Text style={styles.modalSubtext}>
                  Your transaction was successful.
                </Text>
                <Text style={styles.modalSubtext}>
                  {" "}
                  In the next 24 hours, you'll be able to download a receipt for
                  your records.
                </Text>
              </View>
            ) : (
              <Text style={styles.modalText}>Payment Failed.</Text>
            )}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const sharedBackgroundColor = "#F6F6F6";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 20, // Add border radius to the wrapper
    overflow: "hidden", // Clip the content to the rounded rectangle
    backgroundColor: sharedBackgroundColor,
    padding: 3,
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
    width: "50%",
    paddingVertical: 8,
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  activeTab: {
    backgroundColor: "#24628F",
    borderColor: "#24628F",
  },
  inactiveTab: {
    backgroundColor: sharedBackgroundColor,
    borderColor: sharedBackgroundColor,
  },
  tabButtonText: {
    fontWeight: "bold",
    color: "#006FCF",
    marginRight: 5,
  },
  activeTabText: {
    color: "white",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    // marginBottom: 20,
  },
  balance: {
    fontSize: 17,
    marginBottom: 30,
  },
  mainButton: {
    backgroundColor: "#24628F",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#24628F",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#006FCF",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    padding: 3,
    fontWeight: "600",
  },
  mainButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    padding: 2,
  },
  transactionHistory: {
    marginTop: 30,
  },
  historyHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  noGradesText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
  nextInstalment: {
    backgroundColor: "#EDF7FF",
    marginBottom: 30,
    paddingHorizontal: 15, // Add some horizontal padding
    paddingVertical: 15, // Add some vertical padding
    borderRadius: 7,
  },
  instalmentRow: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 30,
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderColor: "#006FCF",
    borderWidth: 1,
  },
  bold: {
    fontWeight: "600",
  },
  next: {
    fontSize: 16,
  },
  dueAmountText: {
    fontWeight: "700",
    fontSize: 22,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "top",
    marginBottom: 10,
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  iconContainer: {
    justifyContent: "flex-start", // Align icon at the top
    marginRight: 10, // Add margin for separation
  },
  transactionInfo: {
    flex: 3, // Take up 3/6 of the available space
  },
  transactionFee: {
    fontWeight: "500",
    fontSize: 15,
  },
  transactionDate: {
    color: "gray",
    fontSize: 12,
    marginTop: 2,
  },
  transactionAmount: {
    flex: 1, // Take up 1/6 of the available space
    textAlign: "right",
    fontWeight: "500",
    color: "#287631",
    fontSize: 15,
  },
  transContainer: {
    backgroundColor: "#F9F9FB",
    padding: 20,
    borderRadius: 7,
    // marginBottom: 0,
  },
  seeText: {
    color: "#24628F",
    textDecorationLine: "underline",
    marginBottom: 50,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
  },
  closeButton: {
    backgroundColor: "#24628F",
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 40,
    marginTop: 60,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalSubtext: {
    color: "#5D6470",
    textAlign: "center",
    lineHeight: 25,
    // marginBottom: 20
  },
  paymentSchedule: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ECECEC",
    paddingTop: 15,
  },
  scheduleHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 20
  },
  scheduleTable: {
    marginTop: 10,
    backgroundColor: "#F9F9FB",
    padding: 20,
    borderRadius: 7,
    marginBottom: 30
  },
  scheduleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  scheduleDate: {
    flex: 1,
    textAlign: "right",
  },
  scheduleAmount: {
    flex: 1,
    textAlign: "right",
  },
  overdueText: {
    color: "red",
    // marginLeft: 5,
    fontWeight: "600",
  },
  scheduleLabel: {
    fontWeight: '600'
  },
  scheduleLabelDue: {
    fontWeight: '600',
    textAlign: 'right',
    marginLeft: 70
  },
  scheduleItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scheduleItemIcon: {
    marginRight: 5,
  },
  
});

export default FinancesScreen;
