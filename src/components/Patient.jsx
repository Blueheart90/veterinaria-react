function Patient() {
  return (
    <div className=" m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className=" font-normal normal-case">Hook</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className=" font-normal normal-case">Jesús david</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className=" font-normal normal-case">jesus@gmail.com</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha: {''}
        <span className=" font-normal normal-case">10 Diciembre 2022</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className=" font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quos
          voluptatum doloremque dolorum impedit, quam consequuntur nemo
          expedita? Harum alias reiciendis aspernatur voluptatibus, omnis
          suscipit vitae corrupti unde? Illum, blanditiis!
        </span>
      </p>
    </div>
  );
}

export default Patient;
