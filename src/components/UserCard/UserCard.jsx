import { useState, useEffect } from 'react';

import { localStorageGetItem, localStorageSetItem } from '../../utils/localeStorage';

import background from 'images/Background.png';
import logo from 'images/Logo.png';
import avatar from 'images/Avatar.png';

import { CardItem, Logo, Background, Wrapper, AvatarWrapper, Avatar, UserList, UserItem, UserText, Button } from './UserCard.styled';

export const UserCard = ({ id, tweets, followers }) => {
    
    const [user, setUser] = useState(
        localStorageGetItem(`user ${id}`) || {
            isFollow: false,
            count: followers,
        }
    );

    useEffect(() => {
        localStorageSetItem(`user ${id}`, JSON.stringify({
            isFollow: user.isFollow,
            count: user.count,
        }));
    }, [user, id]);

    const onClick = () => {
        setUser((prevState) => ({
                ...prevState,
                isFollow: !prevState.isFollow,
            }
        ));
        if(!user.isFollow) {
            setUser((prevState) => ({
                ...prevState,
                count: prevState.count + 1,
            }));
        }
        else {
            setUser((prevState) => ({
                ...prevState,
                count: prevState.count - 1,
            }));
        }
    };

    return (
        <CardItem>
            <Logo src={logo} alt="logo" />
            <Background src={background} alt="background" />
            <Wrapper>
                <AvatarWrapper>
                    <Avatar src={avatar} alt="avatar" />
                </AvatarWrapper>
            </Wrapper>
            <UserList>
                <UserItem>
                <UserText>{tweets.toLocaleString()} TWEETS</UserText>
                </UserItem>
                <UserItem>
                <UserText>{user.count.toLocaleString()} Followers</UserText>
                </UserItem>
            </UserList>
            <Button type='button' isFollow={user.isFollow} onClick={onClick}>{user.isFollow ? "FOLLOWING" : "FOLLOW"}</Button>
        </CardItem>
    );
  };
  