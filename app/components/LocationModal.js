import React from 'react';
import PropTypes from 'prop-types';
import {Header, Left, Button, Text, View} from 'native-base';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles/LocationModalStyles';

const LocationModal = ({hideModal}) => {
  return (
    <View>
      <Header>
        <Left>
          <Button transparent onPress={hideModal}>
            <Text>Back</Text>
          </Button>
        </Left>
      </Header>
      <GooglePlacesAutocomplete
        predefinedPlacesAlwaysVisible
        fetchDetails
        autoFocus={false}
        placeholder={'Enter Location'}
        minLength={3} // minimum length of text to search
        renderDescription={row => row.description}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyCZ27Q6mgkp_YBZgG0MXUxVKUWDPMHhAvE',
          language: 'en', // language of the results
          // types: '(cities)' // default: 'geocode'
        }}
        styles={styles.googlePlaces}
        onPress={(data, details) => console.log('DATA:: ', data)}
      />
    </View>
  );
};

LocationModal.propTypes = {
  style: PropTypes.object,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default LocationModal;
