import React,{Component} from 'react';
import {navigator,View, ScrollView} from 'react-native';
import { Drawer,Container,Title,Body,Header,Content,Left,Button,Icon } from 'native-base';
import SideBar from '../Components1/SideBar';
import List_View from '../Components1/List_View'

export default class Welcome extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
      
      <Header iosBarStyle="light-content"  noShadow={false} style={{backgroundColor:'#5C6BC0',elevation:20}}>
               <Left>
                        <Button transparent onPress={()=>this.openDrawer()}>
                        <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>  
                    </Header>
             <Content>
               <ScrollView>
                    <List_View/>
                    </ScrollView>
            </Content>
           
      </Drawer>
    );
  }
}