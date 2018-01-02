import React,{Component} from 'react';
import {View} from 'react-native'
import { List, ListItem, Left,Right, Header, Container, Content, Text, Card, CardItem, Switch, Body, Title, Footer } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class SideBar extends Component {
    render() {
        return (
            <Container>
            <Content style={{backgroundColor:'#FBFCFC',elevation:50}}>
                <List>
                    <ListItem icon button onPress={()=>{alert('hehe')}}>
                        <Left>
                            <Icon name="home" />
                        </Left>
                        <Body>
                            <Text>Home</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button onPress={()=>{alert('hehe')}}>
                        <Left>
                            <Icon name="build" />
                        </Left>
                        <Body>
                            <Text>Profile</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button onPress={()=>{alert('hehe')}}>
                        <Left>
                            <Icon name="home" />
                        </Left>
                        <Body>
                            <Text>Job</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button onPress={()=>{alert('hehe')}}>
                        <Left>
                            <Icon name="group" />
                        </Left>
                        <Body>
                            <Text>About Us</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button onPress={()=>{alert('hoho')}}>
                        <Left>
                            <Icon name="location-on" />
                        </Left>
                        <Body>
                        <Text>Contact Us</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon button onPress={()=>{alert('heehee')}}>
                        <Left>
                            <Icon name="feedback" />
                        </Left>
                        <Body>
                            <Text>Feedback</Text>
                        </Body>
                    </ListItem>
                    
                </List>
            </Content>
            </Container>
        );
    }
}