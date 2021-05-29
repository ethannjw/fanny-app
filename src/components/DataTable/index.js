import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID'},
  { field: 'platform', headerName: 'platform', width: 120 },
  { field: 'loginId', headerName: 'loginId' , width: 120},
  { field: 'password', headerName: 'password', width: 120 },
];

const rows =  [
    { id: 1, platform: "github", loginId: "ethannjw@hotmail.com", password: "beta" },
    { id: 2, platform: "github", loginId: "ethannjw@hotmail.com", password: "beta" },
    { id: 3, platform: "github", loginId: "ethannjw@hotmail.com", password: "beta" },
    { id: 4, platform: "github", loginId: "ethannjw@hotmail.com", password: "beta" },
    { id: 5, platform: "github", loginId: "ethannjw@hotmail.com", password: "beta" },
    { id: 6, platform: "github", loginId: "ethannjw@hotmail.com", password: "beta" },
    { id: 7, platform: "github", loginId: "ethannjw@hotmail.com", password: "beta" },
    { id: 8, platform: "github", loginId: "ethannjw@hotmail.com", password: "beta" },
]
  

export default function DataTable() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={15} />
    </div>
  );
}
