import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage,navigate,navigation,
} from 'react-native';
import { Avatar } from 'react-native-elements'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base'
import PasswordInputText from 'react-native-hide-show-password-input';
import { StackNavigator } from 'react-navigation'
import Welcome from './Welcome';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//         'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });



export default class Login extends Component {
    // state = {
    //     password: '',
    //     // username:'',
    // };
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
        }
    }

    // componentDidMount() {
    //     this._loadInitialState().done();
    // }

    // _loadInitialState = async () => {
    //     var value = await AsyncStorage.getItem('user');
    //     if (value !== null) {
    //         this.props.navigation.navigate('Profile');
    //     }
    // }

    render() {
        return (
            
            <Container style={{ backgroundColor: '#ecf0f1' }}>
                <Header />

                <Content style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Content style={{ alignSelf: 'center' }}>
                        <Avatar
                            xlarge
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </Content>

                    <Form >
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(username) => this.setState({ username })} 
                            underlineColorAndroid='transparent'
                            />
                        </Item>
                        {/* <TextInput style={{fontSize:8}}
            value={this.state.username}
                    onChangeText={ (username) => this.setState({ username }) }
            /> */}
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} 
                            underlineColorAndroid='transparent'
                            />
                        </Item>
                        {/* <PasswordInputText
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                /> */}
                    </Form>
                    <Button block style={{ marginTop: 25, marginHorizontal: 15 }} onPress={this.login}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>

                    </Button>
                </Content>
            </Container>
            
        );
    }

    login=()=>{

        if(this.state.username=='Pankaj' && this.state.password=='pankaj'){
            //alert('Hey');
            this.props.navigation.navigate('Welcome');
        }
        else {
            alert('test');
        }
    }
}




const styles = StyleSheet.create({


});
