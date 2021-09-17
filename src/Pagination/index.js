import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const PaginationPage = ({ currentPage, setCurrentPage, membersCount }) => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBPagination className="mb-5">
          {
            currentPage > 1
            && (
              <MDBPageItem>
                <MDBPageNav onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</MDBPageNav>
              </MDBPageItem>
            )
          }
          <MDBPageItem>
            <MDBPageNav>{currentPage}</MDBPageNav>
          </MDBPageItem>
          {
            (currentPage) * 10 < membersCount
            && (<MDBPageItem>
              <MDBPageNav onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</MDBPageNav>
            </MDBPageItem>)
          }
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  )
}

export default PaginationPage;