import {FC} from "react";

import {PermissionProvider} from "../../context/permission/permissionProvider";
import {fetchPermissions, Restricted} from "../../components/Restricted/restricted";
import {Features, Permissions} from "../../enums";
import {useUser} from "../../hooks/useUser";

const Home: FC = () => {
    const {user} = useUser();

    return (
        <PermissionProvider fetchPermission={fetchPermissions(user.privileges)}>
            <div className="App">
                <Restricted feature={Features.FEATURE_A} permission={Permissions.read}>
                    <p>
                        This text is visible if you have at least read privilege.
                    </p>
                </Restricted>
                <Restricted feature={Features.FEATURE_A} permission={Permissions.write}>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        This link is visible only if you have write or publish privileges.
                    </a>
                </Restricted>
                <Restricted feature={Features.FEATURE_A} permission={Permissions.publish}>
                    <button>This button is visible only if you have publish privileges</button>
                </Restricted>
            </div>
        </PermissionProvider>
    )
}

export default Home;