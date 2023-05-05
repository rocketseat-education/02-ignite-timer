import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em</label>
      <TaskInput
        list='task-suggestions'
        placeholder='Dê um nome para o seu projeto'
        id='task'
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id='task-suggestions'>
        <option value='Projeto 1'></option>
        <option value='Projeto 2'></option>
        <option value='Projeto 3'></option>
      </datalist>

      <label htmlFor='minutesAmount'>Durante</label>
      <MinutesAmountInput
        step={5}
        min={5}
        max={60}
        placeholder='00'
        type='number'
        id='minutesAmount'
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
