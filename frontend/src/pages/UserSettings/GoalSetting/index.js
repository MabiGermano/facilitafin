import { Alert, Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { useState } from "react";
import api, { headersConfig } from "../../../services/api";

const GoalSetting = () => {
  const [goal, setGoal] = useState({description: "", northStar: 0});
  const [newGoalWarningType, setNewGoalWarningType] = useState("");
  const [newGoalWarningMessage, setNewGoalWarningMessage] = useState("");

  const handleAddGoal = (event) => {
    event.preventDefault();
   
    api
      .post("/api/v1/goal", goal, headersConfig())
      .then((response) => {
        console.log(response.data);
        setNewGoalWarningType("success");
        setNewGoalWarningMessage("Meta de despesa registrada com sucesso");
        setTimeout(() => {
          setNewGoalWarningMessage("");
        }, 3000);
      })
      .catch((erro) => {
        console.log(erro);
        setNewGoalWarningType("error");
        setNewGoalWarningMessage(
          "Houve um erro no registro, tente novamente mais tarde"
        );
        setTimeout(() => {
          setNewGoalWarningMessage("");
        }, 3000);
      });
  };
  return (
    <Grid2 rowSpacing={2} md={9.9} textAlign="center">
      <Grid2 container justifyContent="center">
        <Grid2 md={12}>
          <h2>Metas</h2>
        </Grid2>
        <Grid2 md={10}>
          <Box sx={{ boxShadow: 3, padding: 2 }} textAlign="center">
            <h3>Nova meta</h3>
            <Grid2 item marginBottom={1} textAlign="center">
              {newGoalWarningMessage && (
                <Alert severity={newGoalWarningType}>
                  {newGoalWarningMessage}
                </Alert>
              )}
            </Grid2>

            <Grid2 container rowSpacing={2} justifyContent="space-between">
              <Grid2 md={12}>
                <TextField
                  id="outlined-basic"
                  label="Descrição"
                  value={goal.description}
                  onChange={(e) =>
                    setGoal({ ...goal, description: e.target.value })
                  }
                  variant="outlined"
                  fullWidth
                />
              </Grid2>
              <Grid2 md={12}>
              <TextField
                    id="outlined-basic"
                    label="Objetivo ($)"
                    value={goal.northStar}
                    onChange={(e) =>
                      setGoal({ ...goal, northStar: e.target.value })
                    }
                    variant="outlined"
                    fullWidth
                  />
              </Grid2>
            </Grid2>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleAddGoal}
            >
              Adicionar
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default GoalSetting;
