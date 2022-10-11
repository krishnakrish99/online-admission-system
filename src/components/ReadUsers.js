import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router';


export default function ReadUsers(){

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:9092/createMember")
            .then((getData) => {
                setApiData(getData.data);
                console.log(apiData);
            })
    }, [])
    return(
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>User ID</Table.HeaderCell>
                        <Table.HeaderCell>User Name</Table.HeaderCell>
                        <Table.HeaderCell>Contact Number</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        {/* <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.adminId}</Table.Cell>
                                <Table.Cell>{data.adminName}</Table.Cell>
                                <Table.Cell>{data.adminContact}</Table.Cell>
                                <Table.Cell>{data.password}</Table.Cell>
                                {/* <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.collegeId, data.collegeName, data.collegeUrl)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.collegeId)}>Delete</Button>
                                </Table.Cell> */}
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>

        </div>
    );
}