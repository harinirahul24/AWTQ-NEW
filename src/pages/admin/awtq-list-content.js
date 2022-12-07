/** @jsx jsx */
import {
    Box,
    Button,
    Styled,
    jsx
} from "theme-ui";
import React, { useState, useEffect } from 'react';
import SectionWrapper from '../../components/SectionWrapper'
import { Link, navigate } from 'gatsby'
import AdminHeader from '../../components/AdminHeader'
import axios from 'axios';
import PrivateRoute from '../../components/PrivateRoute'
import AdminFooter from "../../components/AdminFooter";
import Seo from '../../components/seo'
import ReactPaginate from 'react-paginate';
import "./styles.css";
const config = require("../../../data/SiteConfig");

function ListContent() {

    const headings = ["ID", "Title", "Published Date", "Language", "Action"];
    const paraStyles = {
        margin: 0
    }
    const rowStyles = {
        padding: "10px 0px"
    }

    const rowsPerPage = 10;

    const [paginatedContent, setPaginatedContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [content, setContent] = useState([]);


    useEffect(() => {
        axios.get(`${config.serviceUrl}/content-subscription/archived-content?language=English&subscriptionTypeId=01`)
            .then(res => {
                const { data } = res;
                if (!data.error) {

                    if (data && data.data) {
                        let rows = [];

                        Object.entries(data.data).forEach(([key, value]) => {
                            rows = rows.concat(value)
                        });

                        rows.sort(function (a, b) {
                            return b.scheduledContentId - a.scheduledContentId;
                        });

                        setContent(rows);
                        setPaginatedContent(rows.slice(0, rowsPerPage));
                        setPageCount(Math.ceil(rows.length / rowsPerPage));
                    }

                }
            })
            .catch(err => console.log(err))
    }, [])

    const handlePageClick = ({ selected }) => {
        if (selected || selected === 0) {
            let previousCount = selected * rowsPerPage;
            setPaginatedContent(content.slice(previousCount, previousCount + rowsPerPage));
        }
    }


    return <PrivateRoute>
        <Seo
            title="Manage Content"
        />
        <AdminHeader pageName={"Manage Content"} />
        <SectionWrapper sectionStyles={{ padding: "10px 0px 0px 0px" }}>
            <Box sx={{ textAlign: "right" }}>
                <Link style={{
                    display: "inline-block",
                    textDecoration: "none",
                    fontFamily: 'Roboto',
                    padding: "10px 20px",
                    backgroundColor: "#d4edda",
                    color: "#155724",
                    borderRadius: "4px"
                }}
                    to="/admin/awtq-new-content">
                    Add New
                    </Link>
            </Box>
        </SectionWrapper>
        <SectionWrapper sectionStyles={{ padding: "20px 0px" }}>
            <br />
            <Box sx={{
                overflowX: "auto"
            }}>
                <table sx={{
                    minWidth: "900px",
                    margin: "auto",
                    borderCollapse: "collapse",
                }}>
                    <tbody>
                        <tr>
                            {
                                headings.map((heading, index) => <th key={`${index}-th`} style={{ ...rowStyles }}><Styled.h4>{heading}</Styled.h4></th>)
                            }
                        </tr>
                        {paginatedContent &&
                            paginatedContent.map(content => <tr key={content.scheduledContentId} style={{ textAlign: "center" }}>
                                <td style={{ ...rowStyles }}><Styled.p sx={{ ...paraStyles }}>{content.scheduledContentId}</Styled.p></td>
                                <td style={{ ...rowStyles }}><Styled.p sx={{ ...paraStyles }}>{content.title}</Styled.p></td>
                                <td style={{ ...rowStyles }}><Styled.p sx={{ ...paraStyles }}>{content.contentUploadedDate}</Styled.p></td>
                                <td style={{ ...rowStyles }}><Styled.p sx={{ ...paraStyles }}>{content.contentLanguage}</Styled.p></td>
                                <td style={{ ...rowStyles }}>
                                    <Button sx={{
                                        cursor: content.activeContent === true ? 'pointer' : 'no-drop',
                                        bg: content.activeContent === true ? '#b08439' : 'darkgray',
                                        marginRight: '10px'
                                    }}
                                        disabled={content.activeContent === true ? false : true}
                                        onClick={() => {
                                            navigate("/admin/awtq-new-content", {
                                                state: content
                                            })
                                        }}
                                    >
                                        Edit
                                        </Button>
                                    <Button sx={{
                                        cursor: content.activeContent === true ? 'pointer' : 'no-drop',
                                        bg: content.activeContent === true ? '#b08439' : 'darkgray'
                                    }}
                                        disabled={content.activeContent === true ? false : true}
                                        onClick={() => {
                                            navigate("/admin/awtq-preview-content", {
                                                state: content
                                            })
                                        }}>
                                        Preview
                                    </Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <ReactPaginate
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </Box>
        </SectionWrapper>
        <AdminFooter />
    </PrivateRoute>

}

export default ListContent;
