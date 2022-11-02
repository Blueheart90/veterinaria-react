// import { useEffect } from 'react';
import Patient from './Patient';

function PatientsList({ patients, setPatient, deletePatient }) {
  // useEffect(() => {
  //   if (patients.length > 0) {
  //     console.log('Nuevo paciente');
  //   }
  // }, [patients]);
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className=" font-black text-3xl text-center">
            Listado Pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {''}
            <span className=" text-indigo-600 font-bold ">
              Pacientes y Citas
            </span>
          </p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes {''}
            <span className=" text-indigo-600 font-bold ">
              Y aparecerán en éste lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default PatientsList;
