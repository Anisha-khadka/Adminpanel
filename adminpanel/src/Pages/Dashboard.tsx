import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
  VStack,
  Button,
  Tooltip,
  Card,
  CardHeader,
  Center,
  CardFooter,
} from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { useMemo } from "react";
// import mData from "../MOCK_DATA (1).json";
import { useMemo, useState } from "react";
// import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/ProductStore";
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const posts = useProductStore((state) => state.posts);
  console.log(posts);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [selectCategory, setSelectCategory] = useState("");
  const data = useMemo(() => posts, [posts]);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ cell }) => <Image src={cell.getValue()} boxSize="50px" />,
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
      cell: ({ cell, row }) => {
        return <div>Rs {row.original.sales}</div>;
      },
    },
  ];

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

  //sales of women men and children
  const totalWomenSale = useMemo(() => {
    return data
      .filter((row) => row.category === "Womens")
      .reduce((sum, row) => sum + row.sales, 0);
  }, [data]);
  const totalMenSale = useMemo(() => {
    return data
      .filter((row) => row.category === "Mens")
      .reduce((sum, row) => sum + row.sales, 0);
  }, [data]);
  const totalChildrenSale = useMemo(() => {
    return data
      .filter((row) => row.category === "Children")
      .reduce((sum, row) => sum + row.sales, 0);
  }, [data]);

  //category filter
  const handleClick = (category) => {
    setSelectCategory(category);
  };
  const filteredProducts = useMemo(() => {
    return selectCategory
      ? data.filter((row) => row.category === selectCategory)
      : data;
  }, [data, selectCategory]);

  const table = useReactTable({
    columns,
    data: filteredProducts,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });
const pieData=[
  {name:"Mens", value:{totalMenSale}},
  {name:"Womens", value:{totalWomenSale}},
  {name:"Children", value:{totalChildrenSale}},
]

  // const filteredData=selectCategory?data.filter((row)=>row.category===selectCategory):data;

  return (
    
    <div>
      <Box
        display="flex"
        flexDirection="column"
        pt="20px"
        h="200rem"
        bg="lightgray"
      >
        <Box bg="white" w="100%" h="6vh" p="6px" mb="20px" textAlign="center">
          Ecommerce
        </Box>
        <Box display="flex" justifyContent="space-around">
        <Card h="300px" width="400px" display="flex" alignItems="center" m="5px">
          <ResponsiveContainer height={"80%"} width={"60%"}>
            <BarChart data={posts}>
            
              <Bar dataKey="stock" fill="teal"   />
            </BarChart>
          </ResponsiveContainer>
          <CardFooter >Stock of Products</CardFooter> 
        </Card>
        <Card h="300px" width="400px" display="flex" alignItems="center" m="5px">
          <ResponsiveContainer height={"80%"} width={"60%"}>
            <LineChart data={posts}>
              
              <Line dataKey="order" fill="teal" />
            </LineChart>
          </ResponsiveContainer>
          <CardFooter >Orders of Products</CardFooter> 
        </Card>
        <Card h="300px" width="400px" display="flex" alignItems="center" m="5px">
          <ResponsiveContainer height={"80%"} width={"60%"}>
            <PieChart >
              
              <Pie dataKey="sales" data={pieData} fill="teal"  />
            </PieChart>
          </ResponsiveContainer>
          <CardFooter >Sales of Products</CardFooter> 
        </Card>
        </Box>



       

        <SimpleGrid column={2} spacing={10} textAlign="center" color="white" mt="20px"  >
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
        <Box display="flex" justifyContent="space-between">
          <VStack spacing={4}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                mb="130px"
              >
                CATEGORY BY
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleClick("All")}>All</MenuItem>
                <MenuItem onClick={() => handleClick("Mens")}>MENS</MenuItem>
                <MenuItem onClick={() => handleClick("Womens")}>
                  WOMENS
                </MenuItem>
                <MenuItem onClick={() => handleClick("Children")}>
                  KIDS
                </MenuItem>
              </MenuList>
            </Menu>
          </VStack>
        </Box>
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

          <Box display="flex" justifyContent="space-around">
            <Button
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </Button>

            <Button
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </Button>
          </Box>
        </TableContainer>
      </Box>
    </div>
  );
}
