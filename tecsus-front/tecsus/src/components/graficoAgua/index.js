import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import "./style.css";

function GraficoAgua({ listaRelatorioAguas }) {
  const [variavelY, setVariavelY] = useState();
  const [legenda, setLegenda] = useState();
  const [checked, setChecked] = useState("Valor Total R$");

  const handleChange = (event) => {
    setChecked(event.target.value);
  };

  const dataConsumo = listaRelatorioAguas.map((x) => {
    const arrayData = x.data_emissao.split("-");
    const ano = `${arrayData[0]}`;
    const mes = `${arrayData[1]}`;
    return {
      name: `${mes}/${ano}`,
      uv: x.consumo_m3,
    };
  });

  const daTaValorTotal = listaRelatorioAguas.map((x) => {
    const arrayData = x.data_emissao.split("-");
    const ano = `${arrayData[0]}`;
    const mes = `${arrayData[1]}`;
    return {
      name: `${mes}/${ano}`,
      uv: x.valor_total,
    };
  });

  return (
    <div className="main-dados">
      <div className="Agua">
        <AreaChart
          width={900}
          height={450}
          data={variavelY ? variavelY : daTaValorTotal}
          margin={{ top: 30, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="2">
              <stop offset="5%" stopColor="#5664D2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5664D2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            name={legenda ? legenda : "Valor Total (R$)"}
            dataKey="uv"
            stroke="#5664D2"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
      <div className="buttons">
        <FormControl component="fieldset">
          <RadioGroup row value={checked} onChange={handleChange}>
            <FormControlLabel
              value="Valor Total R$"
              control={<Radio />}
              label="Valor Total R$"
              onClick={() => {
                setVariavelY(daTaValorTotal);
                setLegenda("Valor Total (R$)");
              }}
            />
            <FormControlLabel
              value="Consumo Mês (M³)"
              control={<Radio />}
              label="Consumo Mês (M³)"
              onClick={() => {
                setVariavelY(dataConsumo);
                setLegenda("Consumo Mês (M³)");
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default GraficoAgua;
