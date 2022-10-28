import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';

function App() {
  return (
    <div className=" container mx-auto mt-20">
      <Header />
      <div className=" md:flex mt-12">
        <Form />
        <PatientsList />
      </div>
    </div>
  );
}

export default App;
