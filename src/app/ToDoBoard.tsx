'use client';

import React, { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const MIN_LENGTH = 5;

type Task = {
  content: string;
  completed: boolean;
  id: string;
};

const ToDoBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const [newTask, setNewTask] = useState<Task>({ content: '', completed: false, id: Date.now().toString() });
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem(process.env.NEXT_PUBLIC_TASK_STORAGE_KEY || '');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(process.env.NEXT_PUBLIC_TASK_STORAGE_KEY || '', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Box
      component="section"
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: { xxs: 'flex-start', xs: 'center' },
          px: 1,
          gap: 1,
        }}
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          if (newTask.content.length < MIN_LENGTH) {
            setError(true);
            return;
          }
          setError(false);
          setTasks([...tasks, newTask]);
          setNewTask({ content: '', completed: false, id: Date.now().toString() });
        }}
      >
        <TextField
          id="add-task"
          label="Add a new task"
          variant="filled"
          error={error}
          helperText={error ? `Task must be at least ${MIN_LENGTH} characters long` : ''}
          value={newTask.content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { target } = e;
            const { value } = target;
            setNewTask({
              content: value,
              completed: false,
              id: Date.now().toString(),
            });
          }}
          sx={{
            flexBasis: '90%',
          }}
        />
        <Button type="submit">
          <AddIcon />
          <Typography component="span" sx={{ display: { xxs: 'none', xs: 'inline-block' } }}>Add</Typography>
        </Button>
      </Box>
      <Box>
        {tasks.map(({ content, id, completed }: Task) => (
          <Box>
            <List dense>
              <ListItem
                secondaryAction={(
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      const newTaskList = [...tasks].filter((task) => task.id !== id);
                      setTasks(newTaskList);
                      localStorage.setItem(process.env.NEXT_PUBLIC_TASK_STORAGE_KEY || '', JSON.stringify(newTaskList));
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              >
                <Button
                  type="button"
                  onClick={() => {
                    const newTaskList = [...tasks]
                      .map((task): Task => {
                        if (task.id === id) {
                          return { ...task, completed: !task.completed };
                        }
                        return task;
                      });
                    setTasks(newTaskList);
                  }}
                >
                  {completed ? (
                    <CheckBoxIcon />
                  ) : <CheckBoxOutlineBlankIcon />}
                </Button>
                <ListItemText
                  primary={content}
                  sx={{
                    ...(completed ? {
                      textDecoration: 'line-through',
                      color: 'text.disabled',
                    } : {}),
                  }}
                />
              </ListItem>
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ToDoBoard;
