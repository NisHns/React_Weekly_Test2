import React from "react";
import { Pagination } from "reactstrap";

const MyPagination = () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const handlePageChange = (event) => {
        setCurrentPage(event.target.value);
    };

    return (
        <Pagination>
            <Pagination.FirstPage />
            <Pagination.PrevPage />
            <Pagination.Item active={currentPage === 1}>1</Pagination.Item>
            <Pagination.Item active={currentPage === 2}>2</Pagination.Item>
            <Pagination.Item active={currentPage === 3}>3</Pagination.Item>
            <Pagination.NextPage />
            <Pagination.LastPage />
        </Pagination>
    );
};

export default MyPagination;