import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/10206539?v=4"></Image>
                <Dropdown pointing="top right" text="Engin">
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/jobAdvertisementAdd" text="Add job advertisement" icon="add"/>
                        <Dropdown.Item text="Informations" icon="info" />
                        <Dropdown.Item onClick={signOut}  text="Sign out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
