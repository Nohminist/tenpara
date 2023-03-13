import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid , GridToolbar} from '@mui/x-data-grid';

import ModalCommon from "./ModalCommon";



export default function DataGridDmg(props) {
  let data = props.data
  let C = props.C

  

  const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'name',
      width: 150,
      renderCell: (params) => (
        <ModalCommon
          cNameF ={params.row.name}
          C = {props.C}
          data = {props.data}
  
  
  
        />
      )
  
    },
    {
      field: 'H',
      headerName: 'HP',
    type: 'number',
    width: 55,
    },
    {
      field: 'T',
      headerName: 'TP',
      type: 'number',
  
      width: 55,
    },
    {
      field: 'A',
      headerName: '攻撃力',
      type: 'number',
  
      width: 55,
    },
    {
      field: 'D',
      headerName: '防御力',
      type: 'number',
  
      width: 55,
    },
    {
      field: 'S',
      headerName: '速力',
      type: 'number',
  
      width: 55,
    },
    {
      field: 'I',
      headerName: '精神力',
      type: 'number',
  
      width: 55,
    },
    {
      field: 'M',
      headerName: '移動力',
      type: 'number',
  
      width: 55,
    },
    // {
    //   field: 'Skl1',
    //   headerName: 'スキル1',
    //   width: 100,
    // },
    // {
    //   field: 'Skl2',
    //   headerName: 'スキル2',
    //   width: 100,
    // },
    // {
    //   field: 'Skl3',
    //   headerName: 'スキル3',
    //   width: 100,
    // },
    {
      field: 'Dmg1',
      headerName: 'スキル1',
      type: 'number',

      width: 100,
    },
    {
      field: 'Dmg2',
      headerName: 'スキル2',
      type: 'number',

      width: 100,
    },
    {
      field: 'Dmg3',
      headerName: 'スキル3',
      type: 'number',

      width: 100,
    },
  
  
  
  ];
  



  const rows = []



  Object.keys(C).forEach((cNameF, index) => {
    rows.push({
      id: cNameF,
      name: cNameF,
      H:C[cNameF].Ally.St.Btl.HP,
      T:C[cNameF].Ally.St.Btl.TP,
      A:C[cNameF].Ally.St.Btl.攻撃力,
      D:C[cNameF].Ally.St.Btl.防御力,
      S:C[cNameF].Ally.St.Btl.速力,
      I:C[cNameF].Ally.St.Btl.精神力,
      M:C[cNameF].Ally.St.Btl.移動力,
      Skl1:data.Chr[cNameF.split('_')[0]][cNameF.split('_')[1]].Skl[0],
      Skl2:data.Chr[cNameF.split('_')[0]][cNameF.split('_')[1]].Skl[1],
      Skl3:data.Chr[cNameF.split('_')[0]][cNameF.split('_')[1]].Skl[2],
      Dmg1:C[cNameF].Ally.Skl2[0].Dmg,
      Dmg2:C[cNameF].Ally.Skl2[1].Dmg,
      Dmg3:C[cNameF].Ally.Skl2[2].Dmg,



    })
  })









  return (
    // <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        density='compact'//行の幅
        autoHeight//行に合わせた高さ
        components={{
          Toolbar: GridToolbar,// ツールバーを指定する
        }}
        hideFooter//フッター非表示
        hideFooterSelectedRowCount//フッターに表示されている選択中の行数を非表示
        hideFooterPagination//フッターに表示されているページ当たりの行数、ページングを非表示にする。(無料版のみ）


      // initialState={{
      //   pagination: {
      //     paginationModel: {
      //       pageSize: 5,
      //     },
      //   },
      // }}
      // pageSizeOptions={[5]}
      // checkboxSelection
      // disableRowSelectionOnClick

      />
    // </Box>
  );
}