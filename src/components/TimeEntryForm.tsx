'use client';

import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';

import { CreateTimeEntry } from '@/types/timeEntry';
import { PROJECTS } from '@/constanta/projects';

export default function TimeEntryForm( ) {
  const [formData, setFormData] = useState<CreateTimeEntry>({
    date: new Date().toISOString().split('T')[0],
    project: PROJECTS[0],
    hours: 0,
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
   
  };


  return (
    <Box sx={{ width: '100%', maxWidth: 672 }}>
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Time Entry Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Date"
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              fullWidth
            />

            <TextField
              label="Project"
              select
              required
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              fullWidth
            >
              {PROJECTS.map((project) => (
                <MenuItem key={project} value={project}>
                  {project}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Hours"
              type="number"
              required
              value={formData.hours || ''}
              onChange={(e) =>
                setFormData({ ...formData, hours: parseFloat(e.target.value) || 0 })
              }
              fullWidth
            />

            <TextField
              label="Work Description"
              multiline
              rows={4}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              fullWidth
            />

            {error && (
              <Alert severity="error" onClose={() => setError(null)}>
                {error}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              fullWidth
              sx={{ mt: 1 }}
            >
              {isSubmitting ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={20} />
                  Saving...
                </Box>
              ) : (
                'Save'
              )}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}