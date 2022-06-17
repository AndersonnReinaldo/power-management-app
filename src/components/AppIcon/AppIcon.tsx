import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';

export const Icons = {
    MaterialCommunityIcons: 'MaterialCommunityIcons',
    MaterialIcons: 'MaterialIcons',
    Ionicons: 'Ionicons',
    Feather: 'Feather',
    FontAwesome5: 'FontAwesome5',
    FontAwesome: 'FontAwesome',
    AntDesign: 'AntDesign',
    Entypo: 'Entypo',
    SimpleLineIcons: 'SimpleLineIcons',
    Octicons: 'Octicons',
    Foundation: 'Foundation',
}

export type TIcons = 
 'MaterialCommunityIcons' |
 'MaterialIcons' |
 'Ionicons' |
 'Feather' |
 'FontAwesome5' |
 'FontAwesome' |
 'AntDesign' |
 'Entypo' |
 'SimpleLineIcons' |
 'Octicons' |
 'Foundation'

interface IProps {
    type:TIcons;
    name:string;
    size?:number | string;
    color:string;
    style?:any;
}


const AppIcon:React.FC<IProps> = (props):JSX.Element => {
    const {color,name,type,size,style} = props

    const fontSize = 24;

    switch(type) {
        case Icons.MaterialCommunityIcons:
            return <MaterialCommunityIcons name={name} size={size || fontSize} color={color} style={style} /> 
        case Icons.Ionicons:
            return <Ionicons name={name} size={size || fontSize} color={color} style={style} /> 
        case Icons.FontAwesome5:
            return <FontAwesome5 name={name} size={size || fontSize} color={color} style={style} /> 
        case Icons.FontAwesome:
            return <FontAwesome name={name} size={size || fontSize} color={color} style={style} /> 
        case Icons.AntDesign:
            return <AntDesign name={name} size={size || fontSize} color={color} style={style} /> 
        case Icons.Entypo:
            return <Entypo name={name} size={size || fontSize} color={color} style={style} /> 
        case Icons.MaterialIcons:
            return <MaterialIcons name={name} size={size || fontSize} color={color} style={style} /> 
        case Icons.SimpleLineIcons:
            return <SimpleLineIcons name={name} size={size || fontSize} color={color} style={style} />
        case Icons.Octicons:
            return <Octicons name={name} size={size || fontSize} color={color} style={style} /> 
        case Icons.Foundation:
            return <Foundation name={name} size={size || fontSize} color={color} style={style} />     
        default:
            return <MaterialCommunityIcons name='home' size={fontSize} color='#FFFFF'/> 
    }
    }

export default AppIcon