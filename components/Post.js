import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import KeyboardDissmiss from "../screens/KeyboardDissmiss";
import TextButton from "./TextButton";

const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;
const Header = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
`;
const UserAvater = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin-right: 10px;
`;
const Username = styled.Text`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  padding-right: 10px;
`;
const Photo = styled.Image`
  width: 100px;
  height: 100px;
`;
const Body = styled.View`
  padding: 5px 15px;
`;
const Icons = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.TouchableOpacity`
  margin-right: 8px;
`;
const Likes = styled.Text`
  color: ${(props) => props.theme.text};
`;
const Caption = styled.View``;
const CaptionText = styled.Text`
  color: ${(props) => props.theme.text};
`;
const SeeMore = styled.TouchableOpacity`
  background-color: blue;
`;
const SeeMoreText = styled.Text`
  color: ${(props) => props.theme.text};
  opacity: 0.5;
  font-size: 13px;
`;
const CommentText = styled.Text`
  color: ${(props) => props.theme.text};
`;
const AddComment = styled.View``;
const TextInput = styled.TextInput`
  width: 95%;
  height: 45px;
  background-color: ${(props) => props.theme.input};
  text-align: left;
  padding-left: 30px;
  margin-bottom: 4px;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;
const Post = ({
  id,
  caption,
  isLiked,
  createdAt,
  location,
  comments,
  likes,
  numberOfLikes,
  numberOfComments,
  photos,
  user,
}) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [seeMore, setSeeMore] = useState(false);
  const onPressSeeMore = () => {
    setSeeMore(true);
  };
  return (
    <KeyboardDissmiss>
      <Container>
        <Header
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Profile")}
        >
          {user.avatar === "" ? (
            <UserAvater source={require("../assets/avatar.jpg")} />
          ) : (
            <UserAvater source={{ uri: user.avatar }} />
          )}
          <Username>{user.username}</Username>
        </Header>
        <Photo
          resizeMode="contain"
          source={{ uri: photos[0].url }}
          style={{ width, height: width }}
        />
        <Body>
          <Icons>
            <Icon>
              <Ionicons
                name={isLiked ? "heart-sharp" : "heart-outline"}
                style={{ color: isLiked ? "tomato" : "white" }}
                size={33}
              />
            </Icon>
            <Icon>
              <Ionicons
                name="chatbubble-outline"
                style={{ color: "white" }}
                size={30}
              />
            </Icon>
            <Icon>
              <Ionicons
                name="bookmark-outline"
                style={{ color: "white" }}
                size={30}
              />
            </Icon>
          </Icons>
          {numberOfLikes > 0 && (
            <TextButton
              bold={true}
              onPress={() => {
                navigation.navigate("Likes");
              }}
            >
              {numberOfLikes === 1 ? "1 like" : `${numberOfLikes} likes`}
            </TextButton>
          )}
          {caption.length > 90 ? (
            <TextButton onPress={onPressSeeMore}>
              <Username onPress={() => navigation.navigate("Profile")}>
                {user.username}
              </Username>
              {seeMore ? "  " + caption : "  " + caption.slice(0, 90) + "...  "}
              {!seeMore && (
                <SeeMoreText onPress={onPressSeeMore}>See More</SeeMoreText>
              )}
            </TextButton>
          ) : (
            <CaptionText>
              <Username onPress={() => navigation.navigate("Profile")}>
                {user.username}
              </Username>
              {"  " + caption}
            </CaptionText>
          )}
          {/* there is no comment at all then shows nothing */}
          {numberOfComments === 0 ? null : numberOfComments === 1 ? (
            // there is only one comment
            // then shows what that is
            <CommentText>
              <Username onPress={() => navigation.navigate("Profile")}>
                {comments[0].user.username}
              </Username>
              {"  " + comments[0].text}
            </CommentText>
          ) : (
            // there are more than 1 comment
            // then just create a button
            // navigate to Comments
            <TextButton
              onPress={() => navigation.navigate("Comments")}
              blur={true}
            >{`View all ${numberOfComments} comments`}</TextButton>
          )}
          <AddComment>
            <TextInput></TextInput>
          </AddComment>
        </Body>
      </Container>
    </KeyboardDissmiss>
  );
};

export default Post;
