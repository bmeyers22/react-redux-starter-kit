import workoutForm from './forms/workout'
import { combineForms } from 'react-redux-form'

export default function () {
  return combineForms({
    workout: workoutForm
  })
}
