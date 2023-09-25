import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Your transaction</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 2 }} colSpan={1}>
                Name
              </TableCell>
              <TableCell sx={{ px: 1 }} colSpan={3}>
                Account number
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Revenue
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Stock Status
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                  <Paragraph sx={{ m: 0, ml: 0 }}>{product.name}</Paragraph>
                    {/* <Avatar src={product.imgUrl} /> */}
                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.id}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  ${product.price > 999 ? (product.price / 1000).toFixed(1) + 'k' : product.price}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.available ? (
                    // product.available < 20 ? (
                    //   <Small bgcolor={bgSecondary}>{product.available} Credit</Small>
                    // ) : 
                    (
                      <Small bgcolor={bgPrimary}>Debit</Small>
                    )
                  ) : (
                    <Small bgcolor={bgError}>Credit</Small>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton href='/charts/echarts'>
                    <Icon color="info">more_horiz</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
    name: 'Ahmed',
    id: '11223f2321',
    price: 100,
    available: 15,
  },
  {
    name:'Walid',
    id:'7611g61515',
    price: 1500,
    available: 30,
  },
  {
    
    name: 'wissal',
    id:'675541F56',
    price: 1900,
    available: 35,
  },
  {
    
    name: 'Tah',
    id:'173501F56',
    price: -100,
    available: 0,
  },
  {
    
    name: 'Gogo',
    id:'352501H06',
    price: 1190,
    available: 5,
  },
];

export default TopSellingTable;
