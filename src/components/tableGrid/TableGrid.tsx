import axios from 'axios';
import React from 'react'
import "./style.css"

const getData = async (pageNumber: number, pageSize = 50) => {
    const body = {
        "pageNumber": 1,
        "pageSize": 5
    }
    const data = await axios.get(`http://161.97.72.45:5056/api/Country`, {
        data: body,
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6ImFkbWluIiwiVXNlckVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiVXNlcklkIjoiNmVmODhhOWMtOGU2ZC00ODc5LWI0NWQtYmYxNGQ5ZjYyYjMyIiwiVXNlclJvbGUiOiJSb2xlIiwiZXhwIjoxNjU4NTA1Mzk3LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM3OSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0Mzc5In0.JWT5X67_TKZJ9QxeN9smb6ho5GnzCcFf0O9T9rrUc_Y"
        }
    })
    return data;
}

function TableGrid() {
    const [pageNumber, setPageNumber] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(1);
    const [data, setData] = React.useState<any>([]);
    React.useEffect(() => {
        getData(pageNumber).then((newData: any) => {
            setData([...newData.data])
        });
    }, [pageNumber]);

    return (
        <div className='table-grid-root'>
            <table>
                <tr>
                    {
                        data?.length > 0 ? Object.entries(data[0]).map(([key]: any) => {
                            if (key === "id") return
                            return (
                                <th style={{ textTransform: "capitalize" }}>{key.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}</th>
                            )
                        })
                            : <span>loading...</span>
                    }
                </tr>
                {
                    data?.map((item: any, itemIdx: number) => {
                        return (
                            <tr key={`${item.id}-${itemIdx}`}>
                                {
                                    Object.entries(item).map(([key, value]: any, colIdx: number) => {
                                        if (key === "id") return
                                        return (
                                            <td key={`${item.id}-${colIdx}`}>{value ? value : "-"}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TableGrid