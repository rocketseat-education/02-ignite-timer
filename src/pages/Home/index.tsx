import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})


export function Home () {

  const {register, handleSubmit, watch} = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  const handleCreateNewCycle = (data: any) => {
    console.log(data)
  } 

  const task = watch('task')
  const isSubmitDisabled = !task
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput 
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto" id="task"
        {...register('task')}
        />
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
        type="number" id="minutesAmount"
        {...register('minutesAmount', {valueAsNumber: true})}
        />

        <span>minutos.</span>
        </FormContainer>

      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

      <StartCountdownButton
      disabled={isSubmitDisabled}
      type="submit">
        <Play size={24}/>
        Começar
        </StartCountdownButton >
      </form>
    </HomeContainer>
  )
}