import { getTimeEntries } from '@/api/timeEntryApi';
import { GroupedTimeEntriesResponse } from '@/types/timeEntry';
import { formatDate } from '@/lib/dateUtils';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';


export default async function TimeEntryHistory() {
  let response: GroupedTimeEntriesResponse | null = null;
  let error: string | null = null;

  try {
    response = await getTimeEntries();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load time entries';
  }

  if (error) {
    return (
      <Paper sx={containerStyles}>
        <Typography sx={{ color: '#f87171' }}>{error}</Typography>
      </Paper>
    );
  }

  if (!response || !response.grouped || response.grouped.length === 0) {
    return (
      <Paper sx={containerStyles}>
        <Typography variant="h4" component="h2" sx={titleStyles}>
          Entry History
        </Typography>
        <Typography sx={emptyStateStyles}>
          No time entries yet. Create your first entry above.
        </Typography>
      </Paper>
    );
  }

  const sortedGroups = [...response.grouped].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Paper sx={containerStyles}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
        <Typography variant="h4" component="h2" sx={titleStyles}>
          Entry History
        </Typography>
        
        <Typography sx={{ ...grandTotalTextStyles, textAlign: 'right' }}>
          Total:{' '}
          <span>{response.grandTotal.toFixed(2)} hours</span>
        </Typography>
      </Box>
      
        

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {sortedGroups.map((group) => (
          <Paper key={group.date} sx={groupContainerStyles}>
            <Box sx={groupHeaderStyles}>
              <Typography variant="h6" component="h3" sx={groupTitleStyles}>
                {formatDate(group.date)}
              </Typography>
              <Typography variant="body2" sx={totalHoursStyles}>
                Total: <span>{group.totalHours.toFixed(2)} hours</span>
              </Typography>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={tableHeaderRowStyles}>
                    <TableCell sx={tableHeaderCellStyles}>Project</TableCell>
                    <TableCell sx={tableHeaderCellStyles}>Hours</TableCell>
                    <TableCell sx={{ ...tableHeaderCellStyles, pr: 0 }}>
                      Description
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody> 
                  {group.entries.map((entry) => (
                    <TableRow key={entry.id} sx={tableBodyRowStyles}>
                      <TableCell sx={tableBodyCellFirstStyles}>
                        {entry.project}
                      </TableCell>
                      <TableCell sx={tableBodyCellStyles}>
                        {entry.hours.toFixed(2)}
                      </TableCell>
                      <TableCell sx={{ ...tableBodyCellStyles, pr: 0 }}>
                        {entry.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ))}

      </Box>
    </Paper>
  );
}

const containerStyles = {
  width: '100%',
  maxWidth: '56rem',
  borderRadius: 3,
  border: '1px solid',
  borderColor: '#3f3f46',
  bgcolor: '#18181b',
  p: 3,
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
};

const titleStyles = {
  mb: 3,
  fontWeight: 700,
  color: '#ffffff',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const emptyStateStyles = {
  textAlign: 'center',
  color: '#a1a1aa',
};

const groupContainerStyles = {
  borderRadius: 2,
  border: '1px solid',
  borderColor: '#3f3f46',
  bgcolor: '#27272a',
  p: 2,
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: '#52525b',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
};

const groupHeaderStyles = {
  mb: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid',
  borderColor: '#3f3f46',
  pb: 1.5,
};

const groupTitleStyles = {
  fontWeight: 600,
  color: '#f4f4f5',
  fontSize: '1.1rem',
};

const totalHoursStyles = {
  fontWeight: 500,
  color: '#a1a1aa',
  '& > span': {
    fontWeight: 700,
    color: '#8b5cf6',
  },
};

const tableHeaderRowStyles = {
  borderBottom: '2px solid',
  borderColor: '#3f3f46',
  bgcolor: '#27272a',
};

const tableHeaderCellStyles = {
  pb: 1.5,
  pr: 2,
  fontWeight: 600,
  fontSize: '0.875rem',
  color: '#d4d4d8',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const tableBodyRowStyles = {
  borderBottom: '1px solid',
  borderColor: '#3f3f46',
  bgcolor: '#27272a',
  transition: 'background-color 0.15s ease',
  '&:hover': {
    bgcolor: '#3f3f46',
  },
  '&:last-child': {
    borderBottom: 'none',
  },
};

const tableBodyCellStyles = {
  py: 1.5,
  pr: 2,
  fontSize: '0.875rem',
  color: '#e4e4e7',
};

const tableBodyCellFirstStyles = {
  ...tableBodyCellStyles,
  fontWeight: 500,
  color: '#f4f4f5',
};

const grandTotalContainerStyles = {
  borderRadius: 2,
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  p: 2.5,
  textAlign: 'center',
  boxShadow: '0 4px 14px rgba(102, 126, 234, 0.4)',
};

const grandTotalTextStyles = {
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#ffffff',
  '& > span': {
    fontSize: '1.75rem',
    color: '#ffffff',
    fontWeight: 700,
  },
};