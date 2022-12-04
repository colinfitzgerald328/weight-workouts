import {Table} from '@nextui-org/react';

export default function WorkoutCards(props) {
    const columns = [
        {
            key: "exercise_type",
            label: "Exercise Type",
        },
        {
            key: "reps",
            label: "Reps",
        },
        {
            key: "weight",
            label: "Weight",
        },
    ];
    return (
        <Table
            aria-label="Example table with dynamic content"
            css={{
                height: "auto",
                minWidth: "100%",
                background: "white",
            }}
                            selectionMode="single"
        >
            <Table.Header columns={columns}>
                {(column) => (
                    <Table.Column key={column.key}>{column.label}</Table.Column>
                )}
            </Table.Header>
            <Table.Body items={props.data}>
                {(item) => (
                    <Table.Row key={item.TIMESTAMP}>
                        {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}