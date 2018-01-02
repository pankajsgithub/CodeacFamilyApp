import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class List_View extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <List>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://yt3.ggpht.com/-GXo77UPO_9c/AAAAAAAAAAI/AAAAAAAAAAA/UNNPVDd4GtU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/847150153324777473/uswrEbyv_400x400.jpg' }} />
                                <Body>
                                    <Text>Mahesh</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/864731635127771136/A4Hrdyi6.jpg' }} />
                                <Body>
                                    <Text>Raju</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/media/BK5RtNdCIAIsH78.png' }} />
                                <Body>
                                    <Text>Sidhesh</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://yt3.ggpht.com/-GXo77UPO_9c/AAAAAAAAAAI/AAAAAAAAAAA/UNNPVDd4GtU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/847150153324777473/uswrEbyv_400x400.jpg' }} />
                                <Body>
                                    <Text>Mahesh</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem><ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://yt3.ggpht.com/-GXo77UPO_9c/AAAAAAAAAAI/AAAAAAAAAAA/UNNPVDd4GtU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/847150153324777473/uswrEbyv_400x400.jpg' }} />
                                <Body>
                                    <Text>Mahesh</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem><ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://yt3.ggpht.com/-GXo77UPO_9c/AAAAAAAAAAI/AAAAAAAAAAA/UNNPVDd4GtU/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' }} />
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={{ uri: 'https://pbs.twimg.com/profile_images/847150153324777473/uswrEbyv_400x400.jpg' }} />
                                <Body>
                                    <Text>Mahesh</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}