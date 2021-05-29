// https://github.com/gregnb/mui-datatables

import MUIDataTable from "mui-datatables";


const columns = [
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
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "loginId",
     label: "LoginId",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "password",
     label: "Password",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];

const data = [
    { id: 1, platform: "github", loginId: "ethannjw@hotmail.com", password: "password" },
    { id: 2, platform: "github", loginId: "ethannjw@hotmail.com", password: "password" },
    { id: 3, platform: "github", loginId: "ethannjw@hotmail.com", password: "password" },
    { id: 4, platform: "github", loginId: "ethannjw@hotmail.com", password: "password" },
    { id: 5, platform: "github", loginId: "ethannjw@hotmail.com", password: "password" },
    { id: 6, platform: "github", loginId: "ethannjw@hotmail.com", password: "password" },
    { id: 7, platform: "github", loginId: "ethannjw@hotmail.com", password: "password" },
    { id: 8, platform: "google", loginId: "ethannjw@hotmail.com", password: "password" },
]

const options = {
  filterType: 'checkbox',
  print: false,
  download: true,
};

export default function MuiDataTable(props) {
    const {title} = props
    return <MUIDataTable 
        title={title} 
        data={data} 
        columns={columns} 
        options={options} 
    />

}

