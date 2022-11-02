import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('patients')) ?? [];
  const [patients, setPatients] = useState(initialState);
  const [patient, setPatient] = useState({});

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);
  return (
    <div className=" container mx-auto mt-20">
      <Header />
      <div className=" md:flex mt-12">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
