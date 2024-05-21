import { Picker } from 'react-native';

//Pitches
    const [selectedPitchType, setSelectedPitchType] = useState('');
    const [selectedSpot, setSelectedSpot] = useState('');
    const [didHitSpot, setDidHitSpot] = useState('');

//Rendering the pickers
    export const PitchTypeDropdown = ({ selectedValue, onValueChange, pitchTypes }) => {
        return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
        >
            {pitchTypes.map((pitchType, index) => (
            <Picker.Item key={index} label={pitchType} value={pitchType} />
            ))}
        </Picker>
        );
    };

    export const SelectedSpotDropdown = ({ selectedValue, onValueChange, locationNums }) => {
        return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
        >
            {locationNums.map((spotNum, index) => (
            <Picker.Item key={index} label={spotNum} value={spotNum} />
            ))}
        </Picker>
        );
    };

    export const DidHitSpotDropdown = ({ selectedValue, onValueChange, hitSpots }) => {
        return (
        <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, didHitSpots) => onValueChange(itemValue)}
        >
            {hitSpots.map((didHitSpots, index) => (
            <Picker.Item key={index} label={didHitSpots} value={didHitSpots} />
            ))}
        </Picker>
        );
    };



