import {Popover, Menu, Position, Button} from "evergreen-ui";
import Link from "next/link";

export default function MainMenuPopup(props) {
    return (
        <Popover
            position={Position.BOTTOM_LEFT}
            content={
                <Menu>
                    <Menu.Group marginRight={20}>
                        <Link href={{
                            pathname: '/logWorkout',
                        }}>
                            <Menu.Item>Log Workout</Menu.Item>
                        </Link>
                        <Link href={{
                            pathname: '/profile',
                        }}>
                            <Menu.Item>Profile</Menu.Item>
                        </Link>
                        <Menu.Item onSelect={() => props.onLogOut()} secondaryText="⌘R">
                            Log Out
                        </Menu.Item>
                    </Menu.Group>
                </Menu>
            }
        >
            <Button marginRight={20}>Menu</Button>
        </Popover>
    );
}




