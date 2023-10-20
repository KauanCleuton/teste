import React, { createContext, useState, useContext } from 'react';

const btnContext = createContext(null);

export const BtnProvider = ({ children }) => {
  const [confirm, setConfirm] = useState([
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqKPQNbW6W790m0stsZvDCPeguSppoUTnmA&usqp=CAU',
      title: 'Uma eclipse solar vista da Terra',
      text: 'Uma imagem que mostra o sol sendo coberto pela lua, criando um efeito de escuridão no céu. A coroa solar é visível ao redor da silhueta da lua, formando um círculo brilhante.',
      confirmed: false,
    },
    {
      id: 2,
      img: 'https://s2.glbimg.com/ag3N5j0FJSfdfzubuPZysnIOHyE=/563x0:2278x1840/1715x1840/middle/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/L/h/uOPwgQQYmg0GVjEwY6ZA/jongsun-lee-f-pszo-jee8-unsplash.jpg',
      title: 'Uma eclipse lunar vista do espaço',
      text: 'Uma imagem que mostra a lua sendo iluminada por uma luz avermelhada, causada pela refração dos raios solares na atmosfera da Terra. A sombra da Terra é projetada sobre a superfície da lua, criando um contraste entre as partes clara e escura.',
      confirmed: false,
    },
    {
      id: 3,
      img: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/17/161300907-eclipse-desta-semana-e-considerado-raro.jpg',
      title: 'Uma eclipse parcial do sol com um avião no céu',
      text: 'Uma imagem que mostra um pequeno pedaço do sol sendo ocultado pela lua, formando uma meia-lua no céu. Um avião está voando próximo à borda do disco solar, criando uma sensação de movimento e perspectiva.',
      confirmed: false,
    },
    {
      id: 4,
      img: 'https://pbs.twimg.com/media/F8bmCpVXgAAnMTe.jpg:large',
      title: 'Uma eclipse anular do sol com um anel de fogo',
      text: 'Uma imagem que mostra o sol sendo quase totalmente coberto pela lua, mas deixando uma borda luminosa ao redor. Esse fenômeno é chamado de eclipse anular, pois a lua está mais distante da Terra e parece menor do que o sol. O anel de fogo é um espetáculo raro e impressionante.',
      confirmed: false,
    },
    {
      id: 5,
      img: 'https://s2-oglobo.glbimg.com/Lrwsn8L3qz1TdaT3gZijX35Il8o=/0x45:401x356/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/l/8/V0Li7HRGOvTknIytKLYA/b3f73536-4824-479e-8e6a-47daef8da8aa.jpg',
      title: 'Uma eclipse híbrida do sol com uma sombra na superfície da Terra',
      text: 'Uma imagem que mostra o sol sendo parcialmente coberto pela lua, mas variando de acordo com a posição do observador na Terra. Em alguns lugares, o sol parece totalmente eclipsado, enquanto em outros, apenas uma parte é ocultada. A sombra da lua é vista na superfície da Terra, criando um padrão irregular.',
      confirmed: false,
    },
  ]);

  const handleConfirm = (index) => {
    const newArray = [...confirm];
    newArray[index].confirmed = true;
    setConfirm(newArray);
    alert(index);
  };

  return (
    <btnContext.Provider value={{ confirm, handleConfirm }}>
      {children}
    </btnContext.Provider>
  );
}

export const useConfirm = () => useContext(btnContext);
