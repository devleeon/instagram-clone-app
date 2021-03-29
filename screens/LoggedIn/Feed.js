import React, { useState } from "react";
import styled from "styled-components/native";
import { Container } from "./SharedStyles";
import { gql, useQuery } from "@apollo/client";
import { ActivityIndicator, FlatList } from "react-native";
import Post from "../../components/Post";

const FEED_QUERY = gql`
  query getFeed($limit: Int!, $cursor: String) {
    getFeed(limit: $limit, cursor: $cursor) {
      feed {
        id
        caption
        isLiked
        createdAt
        location
        isSaved
        hasMoreComments
        numberOfComments
        comments {
          text
          user {
            username
          }
          createdAt
          id
        }
        likes {
          id
          user {
            username
          }
        }
        photos {
          id
          tagged {
            user {
              username
            }
          }
          url
        }
        numberOfLikes
        user {
          avatar
          amIFollowing
          username
        }
      }
      cursor
      hasMore
    }
  }
`;

const PostList = styled.FlatList`
  width: 100%;
`;

const Text = styled.Text`
  color: white;
`;
const PostView = styled.View`
  margin-bottom: 5px;
`;
const ToProfile = styled.TouchableOpacity``;
const Feed = ({ navigation }) => {
  const { data, loading, refetch, fetchMore } = useQuery(FEED_QUERY, {
    variables: { limit: 5 },
  });
  const [refreshing, setRefreshing] = useState(false);
  const refresh = async () => {
    setRefreshing(true);
    await refetch({});
    setRefreshing(false);
  };
  const fetchMoreFeed = async () => {
    if (data?.getFeed.hasMore) {
      await fetchMore({
        variables: { limit: 5, cursor: data?.getFeed.cursor },
      });
    }
    console.log(data?.getFeed.feed.length);
  };
  const renderItem = ({ item: feed }) => {
    return (
      <Post
        id={feed.id}
        caption={feed.caption}
        isLiked={feed.isLiked}
        createdAt={feed.createdAt}
        location={feed.location}
        comments={feed.comments}
        likes={feed.likes}
        numberOfLikes={feed.numberOfLikes}
        numberOfComments={feed.numberOfComments}
        photos={feed.photos}
        user={feed.user}
      />
    );
  };
  return (
    <Container>
      {/* <Text>Feed</Text>
      <ToProfile onPress={() => navigation.navigate("Profile")}>
        <Text>to Profile</Text>
      </ToProfile> */}
      {loading ? (
        <ActivityIndicator style={{ color: "white" }} />
      ) : (
        <PostList
          refreshing={refreshing}
          onRefresh={refresh}
          showsVerticalScrollIndicator={false}
          data={data?.getFeed?.feed}
          renderItem={renderItem}
          onEndReached={fetchMoreFeed}
          onEndReachedThreshold={1}
        />
      )}
    </Container>
  );
};

export default Feed;
