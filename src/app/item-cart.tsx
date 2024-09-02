"use client";

import { IconButton, Stack, Typography, Grid, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
  itemname,
  itemPrice,
  imageUrl,
  handleIncremental,
  handleDecremental,
}: {
  itemname: string;
  itemPrice: number;
  imageUrl: string;
  handleIncremental: () => void;
  handleDecremental: () => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleIncremental();
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setTotalPrice(newCount * itemPrice);
      handleDecremental();
    }
  };

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          component="img"
          src={imageUrl}
          alt={itemname}
          sx={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px', mb: 2 }}
        />
        <Typography variant="h6" gutterBottom>{itemname}</Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={handleRemoveItemClick}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">{totalPrice.toLocaleString()} บาท</Typography>
        </Stack>
      </Box>
    </Grid>
  );
}