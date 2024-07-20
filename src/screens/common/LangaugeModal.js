import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  useColorScheme,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const LanguageModal = ({ langModalVisible, setLangModalVisible, onSelectLang }) => {
  const [selectedLang, setSelectedLang] = useState(0);
  const [languages, setLanguages] = useState([
    { name: 'English', selected: true },
    { name: 'தமிழ்', selected: false },
    { name: 'हिन्दी', selected: false },
    { name: 'ਪੰਜਾਬੀ', selected: false },
    { name: 'اردو', selected: false },
  ]);
  
  const colorScheme = useColorScheme(); // Detect current theme (light or dark)

  const onSelect = index => {
    const temp = languages.map((item, ind) => ({
      ...item,
      selected: index === ind ? !item.selected : false
    }));
    setLanguages(temp);
    setSelectedLang(index);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={langModalVisible}
      onRequestClose={() => setLangModalVisible(!langModalVisible)}
    >
      <View style={styles.centeredView(colorScheme)}>
        <View style={styles.modalView(colorScheme)}>
          <Text style={styles.title(colorScheme)}>Select Language</Text>
          <View style={{ width: '100%' }}>
            <FlatList
              data={languages}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    styles.languageItem(colorScheme),
                    { borderColor: item.selected ? 'blue' : colorScheme === 'dark' ? '#ccc' : 'black' },
                  ]}
                  onPress={() => onSelect(index)}
                >
                  <Image
                    source={item.selected ? require('../../images/selected.png') : require('../../images/non_selected.png')}
                    style={[styles.icon, { tintColor: item.selected ? 'blue' : colorScheme === 'dark' ? '#ccc' : 'black' }]}
                  />
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 18,
                      color: item.selected ? 'blue' : colorScheme === 'dark' ? '#ccc' : 'black',
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.btn1(colorScheme)}
              onPress={() => setLangModalVisible(false)}
            >
              <Text style={{ color: colorScheme === 'dark' ? '#ccc' : '#000' }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {
                setLangModalVisible(false);
                onSelectLang(selectedLang);
              }}
            >
              <Text style={{ color: '#fff' }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: (colorScheme) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: colorScheme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)',
  }),
  modalView: (colorScheme) => ({
    margin: 20,
    width: width - 40,
    backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: colorScheme === 'dark' ? '#000' : '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }),
  title: (colorScheme) => ({
    fontSize: 18,
    fontWeight: '600',
    color: colorScheme === 'dark' ? '#fff' : '#000',
  }),
  languageItem: (colorScheme) => ({
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorScheme === 'dark' ? '#444' : '#fff',
  }),
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btn1: (colorScheme) => ({
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colorScheme === 'dark' ? '#666' : '#000',
  }),
  btn2: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#4B68E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LanguageModal;
