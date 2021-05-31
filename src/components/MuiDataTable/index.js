// https://github.com/gregnb/mui-datatables

import MUIDataTable from "mui-datatables";

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

    const {title, handleRowClick, data} = props

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

