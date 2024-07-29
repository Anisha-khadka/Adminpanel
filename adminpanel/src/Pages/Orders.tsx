import { Box, Button, Table, TableContainer, Tbody, Td, Text, Th, Tr } from "@chakra-ui/react";
import pData from "../ORDER_DATA.json";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";



export default function Orders() {

const[text,setText]=useState("");
 const data= useMemo(()=>pData,[])

 const columns=[
  {
    header:"ID",
    accessorKey:"id",
  },
  { header:"Product",
    accessorKey:"product",},
  { header:"Traking No",
    accessorKey:"Tracking No",},
  { header:"Price",
    accessorKey:"Price",},
  { header:"Date",
    accessorKey:"Date",},
    { header:"Action",
      accessorKey:"action",
      cell:({row})=>(
          <Button bg="teal"  color="white" p="2px"onClick={()=>handleClick(row.original)
          
          }>
         View
          </Button>
      )
    },
 ]
 const handleClick=(row)=>{
  console.log(row)
}

  const table=useReactTable({
    columns,
    data,
    getCoreRowModel:getCoreRowModel()
  })
  return (
    <div>
       <Box display="flex"  pt="10px" h="100vh"bg="lightgray" justifyContent="center">
        <Box width="700px"  h="240px" boxShadow="2px 2px 2px gray" borderRadius="15px">
          <Text p="5px" bg="teal" color="white"   >Order History</Text>
          <Box><TableContainer>
          <Table colorScheme="teal" display="flex" flexDirection="column"  alignItems="center" >
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id} px="7px" >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Th>
                ))}
              </Tr>
            ))}

            <Tbody>
              {table.getRowModel().rows.map((row) => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id} px="4px">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
          </TableContainer>
          </Box>
        </Box>

       </Box>
    </div>
  )
}
