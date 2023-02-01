import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import SelectMonth from "../../components/SelectMonth";
import AttachMoney from "@mui/icons-material/AttachMoney";
import MoneyOff from "@mui/icons-material/MoneyOff";
import Chart from "react-apexcharts";

import api, { headersConfig } from "../../services/api";
import "./style.css";
import Header from "../../components/Header";
import { Paid } from "@mui/icons-material";

export default function Home() {
  const [incomeWarningMessage, setIncomeWarningMessage] = useState("");
  const [incomeWarningType, setIncomeWarningType] = useState("");
  const [expenseWarningMessage, setExpenseWarningMessage] = useState("");
  const [expenseWarningType, setExpenseWarningType] = useState("");
  const [income, setIncome] = useState({
    category: "",
    description: "",
    amount: 0,
  });

  const [expense, setExpense] = useState({
    description: "",
    amount: 0,
    category: "",
  });
  const [financialRegisterList, setFinancialRegisterList] = useState([]);
  const [expenseAnalysis, setExpenseAnalysis] = useState({
    labels: [],
    series: [],
  });

  const [goal, setGoal] = useState("");
  const [user, setUser] = useState({});
  console.log(localStorage.getItem(process.env.REACT_APP_HEADER_STRING));

  useEffect(() => {
    api
      .get("/api/v1/user", headersConfig)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));

    api
      .get("api/v1/financial-register", headersConfig)
      .then((response) => {
        console.log(response);
        setFinancialRegisterList(response.data);
      })
      .catch((err) => console.log(err));

    api
      .get("api/v1/financial-register/analysis", headersConfig)
      .then((response) => {
        console.log(response);
        setExpenseAnalysis({
          labels: Object.keys(response.data),
          series: Object.values(response.data),
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddIncome = (event) => {
    event.preventDefault();

    api
      .post("/api/v1/income", income, headersConfig)
      .then((response) => {
        setFinancialRegisterList([...financialRegisterList, response.data]);
        setIncomeWarningType("success");
        setIncomeWarningMessage("Receita registrada com sucesso");
        setTimeout(() => {
          setIncomeWarningMessage("");
        }, 3000);
      })
      .catch((erro) => {
        console.log(erro);
        setIncomeWarningType("error");
        setIncomeWarningMessage("Houve um erro no registro da receita");
        setTimeout(() => {
          setIncomeWarningMessage("");
        }, 3000);
      });
  };

  const handleAddExpense = (event) => {
    event.preventDefault();

    api
      .post("/api/v1/expense", expense, headersConfig)
      .then((response) => {
        setFinancialRegisterList([...financialRegisterList, response.data]);
        console.log(response.data);
        console.log(expenseAnalysis.labels);
        const categoryIndex = expenseAnalysis.labels.indexOf(
          response.data.category
        );

        console.log("indexOf: ", categoryIndex);
        if (categoryIndex >= 0) {
          const newSeries = [...expenseAnalysis.series];
          newSeries[categoryIndex] = expenseAnalysis.series[categoryIndex] + response.data.amount;
          setExpenseAnalysis({labels: expenseAnalysis.labels, series: newSeries});
        } else {
          setExpenseAnalysis({
            labels: [...expenseAnalysis.labels, response.data.category],
            series: [...expenseAnalysis.series, response.data.amount],
          });
        }
        setExpenseWarningType("success");
        setExpenseWarningMessage("Despesa registrada com sucesso");
        setTimeout(() => {
          setExpenseWarningMessage("");
        }, 3000);
      })
      .catch((erro) => {
        console.log(erro);
        setExpenseWarningType("error");
        setExpenseWarningMessage("Houve um erro no registro da despesa");
        setTimeout(() => {
          setExpenseWarningMessage("");
        }, 3000);
      });
  };

  return (
    <>
      <Header user={user} />
      <main id="home">
        <Grid2 container>
          <Grid2 md={4}>
            <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
              <h3>Receita</h3>
              <Grid2 item marginBottom={1} textAlign="center">
                {incomeWarningMessage && (
                  <Alert severity={incomeWarningType}>
                    {incomeWarningMessage}
                  </Alert>
                )}
              </Grid2>
              <Grid2 container rowSpacing={2} justifyContent="space-between">
                <Grid2 xs={5.8}>
                  <TextField
                    id="outlined-basic"
                    label="Descrição"
                    value={income.description}
                    onChange={(e) =>
                      setIncome({ ...income, description: e.target.value })
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid2>
                <Grid2 xs={5.8}>
                  <TextField
                    id="outlined-basic"
                    label="Valor"
                    value={income.amount}
                    onChange={(e) =>
                      setIncome({ ...income, amount: e.target.value })
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid2>
              </Grid2>

              <Grid2 container rowSpacing={2} justifyContent="space-between">
                <Grid2 xs={5.8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Categoria
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={income.category}
                      label="Categoria"
                      onChange={(e) =>
                        setIncome({ ...income, category: e.target.value })
                      }
                    >
                      {user.incomeCategories &&
                        Object.keys(user.incomeCategories).map((key) => (
                          <MenuItem value={key} key={`income-category-${key}`}>
                            {user.incomeCategories[`${key}`]}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2 xs={5.8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Meta</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={goal}
                      label="Meta"
                      onChange={setGoal}
                    >
                      <MenuItem value={""}>Viagem</MenuItem>
                      <MenuItem value={""}>Ar condicionado</MenuItem>
                      <MenuItem value={""}>Carro</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
              </Grid2>
              <Button variant="contained" fullWidth onClick={handleAddIncome}>
                Adicionar
              </Button>
            </Box>

            <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
              <h3>Despesa</h3>
              <Grid2 item marginBottom={1} textAlign="center">
                {expenseWarningMessage && (
                  <Alert severity={expenseWarningType}>
                    {expenseWarningMessage}
                  </Alert>
                )}
              </Grid2>
              <Grid2 container rowSpacing={2} justifyContent="space-between">
                <Grid2 xs={5.8}>
                  <TextField
                    id="outlined-basic"
                    label="Descrição"
                    value={expense.description}
                    onChange={(e) =>
                      setExpense({ ...expense, description: e.target.value })
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid2>
                <Grid2 xs={5.8}>
                  <TextField
                    id="outlined-basic"
                    label="Valor"
                    variant="outlined"
                    value={expense.amount}
                    onChange={(e) =>
                      setExpense({ ...expense, amount: e.target.value })
                    }
                    fullWidth
                  />
                </Grid2>
              </Grid2>
              <FormControl fullWidth>
                <InputLabel id="expense-category-label">Categoria</InputLabel>
                <Select
                  labelId="expense-category-label"
                  id="expense-category"
                  value={expense.category}
                  label="Categoria"
                  onChange={(e) =>
                    setExpense({ ...expense, category: e.target.value })
                  }
                >
                  {user.expenseCategories &&
                    user.expenseCategories.map((category) => {
                      return (
                        <MenuItem
                          value={category}
                          key={`expense-category-${category.id}`}
                        >
                          {category.description}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleAddExpense}
              >
                Adicionar
              </Button>
            </Box>
          </Grid2>
          {/* TODO: refactor list component */}
          <Grid2 md={4} marginX={2}>
            <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
              <h3>Registros do mês</h3>
              <SelectMonth />
              <List component="nav" aria-label="main mailbox folders">
                {financialRegisterList.length > 0 &&
                  financialRegisterList.map((financialRegister, index) => {
                    return (
                      <ListItemButton
                        key={`financial-register-${index}`}
                        component="a"
                      >
                        <ListItemIcon>
                          {financialRegister.type === "INCOME" ? (
                            <AttachMoney color="success" />
                          ) : (
                            <MoneyOff color="error" />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={`R$ ${financialRegister.amount}`}
                        />
                        <ListItemText primary={financialRegister.description} />
                        <ListItemText primary={financialRegister.category} />
                      </ListItemButton>
                    );
                  })}
              </List>
            </Box>
          </Grid2>
          <Grid2 md={3.5}>
            <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
              <h3>Análise despesa/mês</h3>
              <div id="donut-chart">
                <Chart
                  options={expenseAnalysis}
                  series={expenseAnalysis.series}
                  labels={expenseAnalysis.labels}
                  type="donut"
                  width="380"
                />
              </div>
            </Box>
          </Grid2>
        </Grid2>
      </main>
    </>
  );
}
