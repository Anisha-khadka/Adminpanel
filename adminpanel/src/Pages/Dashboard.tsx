import { Box, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Th, Tr, } from "@chakra-ui/react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
// import { useMemo } from "react";


export default function Dashboard() {
//  const data=useMemo();
  const columns=[
    {
      header:"ID",
      accessorKey:"id",
    },
    {
      header:"Title",
      accessorKey:"title",
    },
    {
      header:"Price",
      accessorKey:"price",
    },

  ];
  const table = useReactTable({
    columns,
    data,
   
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <Box display="flex" flexDirection="column" pt="10px" h="50vh" justifyContent="center" bg="lightgray">
       <Box bg="white" w="100%" h="3vh" p="6px" m="4px" textAlign="center">Ecommerce</Box>
       
       <SimpleGrid column={2} spacing={10}>
       <Box bg='teal' height='80px'>Total Users</Box>
       <Box bg='teal' height='80px'>Total Orders</Box>
       <Box bg='teal' height='80px'>Total Products</Box>
       <Box bg='teal' height='80px'>Total Reviews</Box>
       </SimpleGrid>
       <TableContainer>
        <Table colorScheme="teal">
          <TableCaption>Product Added Sucessfully</TableCaption>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
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
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

       
      </Box>
    </div>
  )
}
