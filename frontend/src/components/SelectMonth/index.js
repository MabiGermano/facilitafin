import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const meses = [
    { name: "Janeiro", value: 1 },
    { name: "Fevereiro", value: 2 },
    { name: "Março", value: 3 },
    { name: "Abril", value: 4 },
    { name: "Maio", value: 5 },
    { name: "Junho", value: 6 },
    { name: "Julho", value: 7 },
    { name: "Agosto", value: 8 },
    { name: "Setembro", value: 9 },
    { name: "Outubro", value: 10 },
    { name: "Novembro", value: 11 },
    { name: "Dezembro", value: 12 },
  ];
export default function SelectMonth()  {
    const [currentMonth, setCurrentMonth] = useState({name: "", value: 0});
    return (
      <FormControl fullWidth>
        <InputLabel id="select-month-label">Mês</InputLabel>
        <Select
          labelId="select-month-label"
          id="select-month"
          value={currentMonth}
          label="Mês"
          onChange={setCurrentMonth}
        >
        {meses.map(item => <MenuItem key={`select-month-${item.name}`} value={item.value}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>
    );
  };