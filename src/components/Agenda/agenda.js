import { useConfirm } from "@/context/BtnContext";
import { Button } from "@mui/material";
import { useState } from "react";
import { ModalConfirm } from "../Modal";

export const Agenda = () => {
  const [open, setOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const BtnContext = useConfirm();

  const handleOpen = (index) => {
    setSelectedItemIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "auto",
        height: "300px",
        color: "white",
        fontWeight: "bold",
        fontSize: "20px",
        padding: "30px",
        gap: "40px",
      }}
    >
      {BtnContext.confirm.map((item, index) => (
        <div key={index} style={{ display: "flex", flexDirection: "column" }}>
          <ul
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              padding: "10px",
              gap: "30px",
              flexDirection: "column",
            }}
          >
            <li>{item.title}</li>
            <Button
              onClick={() => handleOpen(index)}
              variant={`${item.confirmed ? "contained" : "outlined"}`}
            >
              {item.confirmed ? "CONFIRMADO" : "VER DETALHES"}
            </Button>
          </ul>
        </div>
      ))}
      {selectedItemIndex !== null && (
        <ModalConfirm
          img={BtnContext.confirm[selectedItemIndex].img}
          index={selectedItemIndex}
          text={BtnContext.confirm[selectedItemIndex].text}
          title={BtnContext.confirm[selectedItemIndex].title}
          open={open}
          onClose={handleClose}
        />
      )}
    </div>
  );
};
