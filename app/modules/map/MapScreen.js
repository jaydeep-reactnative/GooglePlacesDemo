import React, {Component} from 'react';
import {SafeAreaView, StatusBar, Modal} from 'react-native';
import {Button, Input} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import LocationModal from '../../components/LocationModal';
import styles from './styles/MapScreenStyles';
import {connect} from 'react-redux';
import {locationRequest} from '../../redux/actions/Locations';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: 'Search Location...',
      locationModalVisible: false,
    };
  }
  componentDidMount() {
    this.props.getLocations();
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.map}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            minZoomLevel={5}
            maxZoomLevel={7}
            region={{
              latitude: 4.2105,
              longitude: 101.9758,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              title="Kuala Lumpur"
              description="Capital"
              coordinate={{
                latitude: 3.139,
                longitude: 101.6869,
              }}
            />
          </MapView>
          <Input
            style={styles.textInput}
            onChangeText={location => this.setState({locationName: location})}
            placeholder={this.state.locationName}
            placeholderTextColor="grey"
            value={this.state.locationName}
          />
          <Button
            style={styles.buttonLocation}
            onPress={() => this.setState({locationModalVisible: true})}
          />
          {this.state.locationModalVisible && this.renderLocationModalView()}
        </SafeAreaView>
      </>
    );
  }
  renderLocationModalView() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.locationModalVisible}>
        <LocationModal
          hideModal={() => {
            this.setState({
              locationModalVisible: !this.state.locationModalVisible,
            });
          }}
        />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  locations: state.locations,
});
const mapDispatchToProps = dispatch => ({
  getLocations: location => dispatch(locationRequest(location)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapScreen);
