import React, { useState } from "react";
import { Text } from "react-native";
import { IconButton } from "react-native-paper";

export default function LikeBtn(likes) {
    const [liked, setLiked] = useState(false);
    return (
        <>
            <IconButton onPress={() => setLiked((isLiked) => !isLiked)
            } icon={liked ? "heart" : "heart-outline"}
                size={32}
                animated={true}
                color={liked ? "red" : "black"} />
            <Text>{liked ? parseInt(likes.likes) + 1 : likes.likes}</Text>
        </>
    );
}