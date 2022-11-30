import "./Users.scss"
import UserCards from '../UserCards/UserCards'
import data from "../../utils/data"
import { useState } from 'react'
import Pagination from "../Pagination/Pagination"

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(5)

    //Get current user
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser)

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="users">
            <h3>Employee List</h3>
            <h6 className="text-end">Showing {indexOfFirstUser <= 1 ? 1 : indexOfFirstUser} to {indexOfLastUser} Employees</h6>
            {currentUsers.map((currentUsers, id) => <UserCards key={id} data={currentUsers} />)}
            <Pagination usersPerPage={usersPerPage} totalUsers={data.length} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Users