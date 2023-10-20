import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useConfirm } from "@/context/BtnContext";

export const ModalConfirm = ({ img, title, text, index, open, onClose }) => {
  const confirm = useConfirm();

  const handleConfirmar = () => {
    confirm.handleConfirm(index);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#004ABB",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "200px",
            objectFit: "cover",
            height: "200px",
            margin: "0 auto",
            borderRadius: "20px",
            border: "2px solid #212121",
          }}
        />
        <h2 id="simple-modal-title">{title}</h2>
        <p id="simple-modal-description">{text}</p>
        <Button onClick={handleConfirmar}>CONFIRMAR PRESENÇA</Button>
      </Box>
    </Modal>
  );
};
