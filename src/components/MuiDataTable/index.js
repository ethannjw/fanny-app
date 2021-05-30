// https://github.com/gregnb/mui-datatables
import {useState} from 'react'
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import {getClues} from "../../services"


const columns = [
    {
        name: "category",
        label: "Category",
        options: {
         filter: true,
         sort: true,
         display: true
        }
    },
    {
        name: "id",
        label: "id",
        options: {
         filter: true,
         sort: true,
         display: false
        }
    },
    {
        name: "platform",
        label: "Platform",
        options: {
        filter: true,
        sort: true,
        }
    },
    {
        name: "loginId",
        label: "Login Id",
        options: {
        filter: true,
        sort: false,
        }
    },
    {
        name: "clue",
        label: "Clue",
        options: {
        filter: true,
        sort: false,
        }
    },
   ];


export default function MuiDataTable(props) {

    const {title, handleRowClick} = props
    const [data, setData] = useState([]);

    useEffect(() => {
        const callGetClues = async () => {
            getClues()
            .then((res) => {
                console.log(res)
                if (res.statusText === "OK") {
                    setData(res.data.results)
                } 
            })
            .catch((res) => {
                console.log(res)
            })
        }
        callGetClues() 
    }, [])

    const options = {
        filterType: 'checkbox',
        print: false,
        download: true,
        onRowClick: handleRowClick,
      };

    return <MUIDataTable 
        title={title} 
        data={data} 
        columns={columns} 
        options={options} 
    />

}

