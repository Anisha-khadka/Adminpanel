import {
  Box,
  Image,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { useMemo } from "react";
import mData from "../MOCK_DATA (1).json";
import { useMemo } from "react";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

export default function Dashboard() {
  const data = useMemo(() => mData, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ cell }) => (
        <Image src={cell.getValue()}boxSize="50px" />
      ),
      
    },
    {
      header: "Product",
      accessorKey: "product",
    },

    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Stock",
      accessorKey: "stock",
    },
    {
      header: "Order",
      accessorKey: "order",
    },
    {
      header: "Sales",
      accessorKey: "sales",
      cell:({cell,row})=>{
        return <div>Rs {row.original.sales}</div>
      }
    },
  ];
  const table = useReactTable({
    columns,
    data,

    getCoreRowModel: getCoreRowModel(),
  });

  //calculate total orders
  const totalOrders = useMemo(() => {
    return data.reduce((sum, row) => sum + row.order, 0);
  }, [data]);
  // total products
  const totalProducts = useMemo(() => {
    return data.reduce((count, row) => count + (row.product ? 1 : 0), 0);
  }, [data]);
  //totalusers
  const totalUsers = useMemo(() => {
    return data.reduce((count, row) => count + (row.id ? 1 : 0), 0);
  }, [data]);

  //total sales
  const totalSales = useMemo(() => {
    return data.reduce((sum, row) => sum + row.sales, 0);
  }, [data]);
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        pt="20px"
        h="230vh"
        bg="lightgray"
      >
        <Box bg="white" w="100%" h="6vh" p="6px" mb="20px" textAlign="center">
          Ecommerce
        </Box>

        <SimpleGrid column={2} spacing={10}>
          <Box bg="teal" height="80px">
            Total Users
            <Text>{totalUsers}</Text>
          </Box>
          <Box bg="teal" height="80px">
            Total Orders
            <Text>{totalOrders}</Text>
          </Box>
          <Box bg="teal" height="80px">
            Total Products
            <Text>{totalProducts}</Text>
          </Box>
          <Box bg="teal" height="80px">
            Total Sales
            <Text>Rs {totalSales}</Text>
          </Box>
        </SimpleGrid>
        <TableContainer>
          <Table colorScheme="teal" cellPadding="3px">
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id} px="20px">
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
                    <Td key={cell.id} px="20px">
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

<LineChart
  xAxis={[{ data: [1,2,3,4,5,6,7,8,9,10,11,12] }]}
  
  series={[
    {
      data: data.map(row=>row.stock),
    },
  ]}
  width={500}
  height={300}
/>
Press Enter to start editing
U
      </Box>
    </div>
  );
}
