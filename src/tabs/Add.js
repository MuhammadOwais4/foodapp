import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';

const Add = () => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Item</Text>
        </View>
        {imageData || (
          <Image
            source={{uri: imageData.assets[0].uri}}
            style={styles.imageStyle}
          />
        ) }
        <TextInput
          placeholder="Enter Item Name"
          style={styles.inputStyle}    
        />
        <TextInput
          placeholder="Enter Item Price"
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Enter Item Discount Price"
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Enter Item Description"
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Enter Item Image URL"
          style={styles.inputStyle}
        />
        <Text style={{alignSelf: 'center', marginTop: 20}}>OR</Text>
        <TouchableOpacity
          style={styles.pickBtn}
          onPress={() => {
            requestCameraPermission();
          }}>
          <Text>Pick Image From Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadBtn}
          onPress={() => {
            uplaodImage();
          }}>
          <Text style={{color: '#Fff'}}>Upload Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Add;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  inputStyle: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    alignSelf: 'center',
  },
  pickBtn: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  uploadBtn: {
    backgroundColor: '#5246f2',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  imageStyle: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
});
