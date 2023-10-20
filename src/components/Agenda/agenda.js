import { useConfirm } from "@/context/BtnContext";
import { Button} from "@mui/material";
import { useState } from "react";
import { ModalConfirm } from "../Modal";

export const Agenda = () => {
    const [open, setOpen] = useState(false)
    const BtnContext = useConfirm();
    const handleOpen = () => {
        setOpen(!open)
    }


    return (
        <div style={{
            display: 'flex',
            width: 'auto',
            height: '300px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px',
            padding: '30px',
            gap: '40px'
        }}>
            {BtnContext.confirm.map((item, index) => (
                <div key={index} style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <ul style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px',
                        gap: '30px',
                        flexDirection: 'column'
                    }}>
                        <li>{item.title}</li>
                        <Button onClick={handleOpen} variant={`${item.confirmed ? 'contained' : 'outlined'}`}>
                            {item.confirmed ? 'CONFIRMADO' : 'VER DETALHES'}
                        </Button>
                    </ul>
                    <ModalConfirm img={item.img} index={index} text={item.text} title={item.title}/>
                </div>

            ))}
            

        </div>
    );
};
