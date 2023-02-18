import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home () {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput 
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto" id="task"/>
        <datalist id="task-suggestions">
          <option value="Projeto 1"></option>
          <option value="Projeto 2"></option>
          <option value="Projeto 3"></option>
        </datalist>

        <label htmlFor="minutesAmount">Durante</label>
        <MinutesAmountInput 
        step={5}
        min={5}
        max={60}
        placeholder="00"
        type="number" id="minutesAmount"/>

        <span>minutos.</span>
        </FormContainer>

      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

      <StartCountdownButton disabled type="submit">
        <Play size={24}/>
        Começar
        </StartCountdownButton >
      </form>
    </HomeContainer>
  )
}