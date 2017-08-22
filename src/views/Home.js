import React, { Component } from 'react'
import { StyleSheet, View, Image, Button } from 'react-native'
import { NavigationActions } from '../utils'
import {Icon} from 'native-base';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) =>
            <Icon
                name="ios-home"
            />,
    }

    gotoDetail = () => {
        this.props.navigation.navigate("Detail");
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Goto Detail" onPress={this.gotoDetail} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 32,
        height: 32,
    },
})
export const LayoutComponent = Home;
export function mapStateToProps(state) {
    return {
        user:state.user
    }
}
