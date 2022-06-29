import axios from 'axios';
import React from 'react'
import "./style.css"

const getData = async (pageNumber: number, pageSize = 50) => {
    const data = await axios.get(`https://randomuser.me/api/?page=${pageNumber}&results=${pageSize}`)
    return data;
}

function TableGrid() {
    const [pageNumber, setPageNumber] = React.useState(1);
    const [data, setData] = React.useState<any>(null);
    React.useEffect(() => {
        getData(pageNumber).then((newData: any) => {
            setData([data, ...newData.data.results])
        });
    }, [pageNumber]);

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight) {
            setPageNumber((prev) => prev + 1)
        }
        // else {
        //     alert("else")
        // }
    }

    return (
        <div className='table-grid-root'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                </tr>
                {
                    data?.map((item: any, itemIdx: number) => {
                        console.log(item)
                        return (
                            <tr>
                                <td>{item?.name?.first}</td>
                                <td>{item?.phone}</td>
                                <td>{item?.email}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TableGrid