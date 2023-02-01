import { Alert, Box, Button, FormControl, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import api, { headersConfig } from "../../../services/api";

const ExpenseCategorySetting = () => {
  const [description, setDescription] = useState("");
  const [warningType, setWarningType] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    api
      .post("/api/v1/expense-category", { description }, headersConfig)
      .then((response) => {
        console.log(response.data);
        setWarningType("success");
        setWarningMessage("Categoria de despesa registrada com sucesso");
        setTimeout(() => {
          setWarningMessage("");
        }, 3000);
      })
      .catch((erro) => {
        console.log(erro);
        setWarningType("error");
        setWarningMessage(
          "Houve um erro no registro, tente novamente mais tarde"
        );
        setTimeout(() => {
          setWarningMessage("");
        }, 3000);
      });
  };
  return (
    <Grid2 rowSpacing={2} md={9.9} textAlign="center">
      <Grid2 container justifyContent="center">
        <Grid2 md={12}>
          <h2>Categorias de despesas</h2>
        </Grid2>
        <Grid2 md={10}>
          <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
            <h3>Nova categoria</h3>
            <Grid2 item marginBottom={1} textAlign="center">
              {warningMessage && (
                <Alert severity={warningType}>{warningMessage}</Alert>
              )}
            </Grid2>
            <FormControl fullWidth>
              <Grid2 container rowSpacing={2} justifyContent="space-between">
                <Grid2 md={12}>
                  <TextField
                    id="outlined-basic"
                    label="Descrição"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid2>
                <Grid2 md={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                    fullWidth
                  >
                    Adicionar
                  </Button>
                </Grid2>
              </Grid2>
            </FormControl>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ExpenseCategorySetting;
