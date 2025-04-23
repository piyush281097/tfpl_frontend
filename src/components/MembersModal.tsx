/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemButton } from '@mui/material';
import mockUsers from '../data/mockUsers';

interface Props {
  open: boolean;
  onClose: () => void;
  onSelectUser: (user: any) => void;
}

const MembersModal: React.FC<Props> = ({ open, onClose, onSelectUser }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select a Member</DialogTitle>
      <List>
        {mockUsers.map((user:any, index:number) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => onSelectUser(user)}>{user.name}</ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default MembersModal;