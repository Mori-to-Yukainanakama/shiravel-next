import * as React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, createTheme } from '@mui/material';
import { ThemeProvider } from "@mui/system";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const columns = [
    { id: 'name', label: '姓名', minWidth: 50 },
    { id: 'email', label: 'メールアドレス', minWidth: 50 },
    {
        id: 'questionNum',
        label: '質問数',
        minWidth: 20,
    },
    {
        id: 'answerNum',
        label: '回答数',
        minWidth: 20,
    },
    {
        id: 'resolutionNum',
        label: '解決数',
        minWidth: 20,
    },
    {
        id: 'deleteButton',
        minWidth: 20,
    },
];

function createData(name, email, questionNum, answerNum, resolutionNum, deleteButton) {
    return { name, email, questionNum, answerNum, resolutionNum, deleteButton };
}

const rows = [
    createData('荒井明日香', '123@fox-hound.tech', 10, 3, 2),
    createData('あらいあすか', '123@fox-hound.tech', 9, 2, 1),
    createData('アライアスカ', '123@fox-hound.tech', 8, 1, 0),
    createData('Arai Asuka', '123@fox-hound.tech', 7, 3, 2),
    createData('あすかあらい', '123@fox-hound.tech', 6, 2, 1),
    createData('明日香荒井', '123@fox-hound.tech', 5, 1, 0),
    createData('アスカアライ', '123@fox-hound.tech', 4, 3, 0),
    createData('アスカアライ', '123@fox-hound.tech', 3, 2, 0),
    createData('アスカアライ', '123@fox-hound.tech', 2, 1, 0),
    createData('アスカアライ', '123@fox-hound.tech', 1, 3, 0),
    createData('アスカアライ', '123@fox-hound.tech', 10, 2, 0),
    createData('アスカアライ', '123@fox-hound.tech', 9, 1, 0),
    createData('アスカアライ', '123@fox-hound.tech', 8, 3, 0),
    createData('アスカアライ', '123@fox-hound.tech', 7, 2, 0),
    createData('アスカアライ', '123@fox-hound.tech', 6, 1, 0),
];

const theme = createTheme({
    palette: {
        primary: {
            main: '#203246',
            light: '#222734',
            text: '#ffffff',
        },
        background: {
            paper : '#203246',
        },
    },
});

export default function Users() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <ThemeProvider theme={theme}>
            <div style={{backgroundColor: '#203246'}}>
                <Box
                    sx={{
                    width: '90%',
                    height: 100,
                    mx: 'auto',
                    bgcolor: 'text.disabled',
                    color: 'primary.text',
                    }}
                >
                    <p>Header</p>
                </Box>
                <Paper
                    sx={{
                    width: '90%',
                    mx: 'auto',
                    pt: 2,
                    }}>
                    <TableContainer sx={{ height: 500 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        sx={{
                                        bgcolor: '#ED741D',
                                        color: 'primary.text'
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            const removeIcon = <PersonRemoveIcon style={{
                                                cursor: 'pointer',
                                            }}></PersonRemoveIcon>
                                            return (
                                            <TableCell key={column.id} align={column.align}
                                                sx={{
                                                color: 'primary.text',
                                                bgcolor: 'primary.light'
                                                }}>
                                                {column.id === 'deleteButton'
                                                ? removeIcon : value}
                                            </TableCell>
                                            );
                                        })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{
                        color: 'primary.text',
                        bgcolor: 'primary.main'
                    }}
                    />
                </Paper>
            </div>
        </ThemeProvider>
    );
}
