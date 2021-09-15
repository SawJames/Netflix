import React from 'react';
import {Header, Profile} from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function SelectedProfileContainer({user, setProfile}){
    return(
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                </Header.Frame>
            </Header>

            <Profile>
                <Profile.Title>Who's watching</Profile.Title>
                <Profile.List>
                    <Profile.User
                        onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
                    >
                        <Profile.Picture src={user.photoURL} />
                        <Profile.Name>{user.displayName}</Profile.Name>
                    </Profile.User>
                </Profile.List>
            </Profile>
        </>
    )
}

