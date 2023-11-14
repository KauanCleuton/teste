"use client"
import { BtnProvider } from '@/context/BtnContext'
import { Agenda } from '@/components/Agenda/agenda'
export default function Home() {
  return (
    <BtnProvider>
      <Agenda />
      <p>Desenvolvido por Kauan Cleuton</p>
    </BtnProvider>
  )
}
