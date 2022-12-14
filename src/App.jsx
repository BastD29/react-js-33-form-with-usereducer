import { useReducer, useState } from 'react'
import formReducer from './reducers/reducer';

const initialFormState = {
  username: "",
  email: "",
  password: "",
  hasConsented: false,
};

export default function App() {
  
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleTextChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value,
    })
  }

  return (
    <form 
      style={{ 
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formState.username}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={formState.email}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formState.password}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label>
        Consent to terms and conditions:
        <input
          type='checkbox'
          checked={formState.hasConsented}
          onChange={() => dispatch({ type: 'TOGGLE CONSENT' })}
        />
      </label>
    </form>
  )
}
