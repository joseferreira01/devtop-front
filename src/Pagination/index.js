import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const PaginationPage = ({ currentPage, setCurrentPage, membersCount, handle}) => {

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
          <MDBPageItem style={{marginLeft: '40px !important'}}>
            <MDBPageNav>{currentPage}</MDBPageNav>
          </MDBPageItem>
          {
            (currentPage) * 30 < membersCount
            && (<MDBPageItem>
              <MDBPageNav onClick={() => setCurrentPage(currentPage + 1, handle())} > {currentPage + 1}
                </MDBPageNav>
            </MDBPageItem>)
          }
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  )
}

export default PaginationPage;