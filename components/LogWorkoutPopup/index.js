import {Popover, Menu, Position, Button} from "evergreen-ui";
import Link from "next/link";

export default function CustomMenuBar(props) {
    return (
        <Popover
            position={Position.BOTTOM_LEFT}
            content={
                <Menu>
                    <Menu.Group marginRight={20}>
                        <Link href={{
                            pathname: '/',
                        }}>
                            <Menu.Item>Main</Menu.Item>
                        </Link>
                        <Link href={{
                            pathname: '/profile',
                        }}>
                            <Menu.Item>Profile</Menu.Item>
                        </Link>
                    </Menu.Group>
                </Menu>
            }
        >
            <Button marginRight={20}>Menu</Button>
        </Popover>
    );
}