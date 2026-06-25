import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const handleCreateInvoice = () => {
    navigation.navigate('CreateInvoice');
  };

  const handleViewInvoices = () => {
    navigation.navigate('InvoicesList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invoice Manager</Text>
      <Button title="Create Invoice" onPress={handleCreateInvoice} />
      <Button title="View Invoices" onPress={handleViewInvoices} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomePage;
