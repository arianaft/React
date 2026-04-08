import { useState } from "react";
import { DataTable } from "./components/DataTable";

type Usuario = {
  id: number;
  nombre: string;
  edad: number;
};

function App() {
  const usuarios: Usuario[] = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
  ];

const columnas: { key: keyof Usuario; label: string }[] = [
  { key: "id", label: "ID" },
  { key: "nombre", label: "Nombre" },
  { key: "edad", label: "Edad" },
];

  // 🔥 AQUÍ ESTÁ EL PARTIAL<T>
  const [editingUser, setEditingUser] = useState<Partial<Usuario>>({});

  return (
    <div>
      <h1>Tabla de usuarios</h1>

      <DataTable<Usuario>
        data={usuarios}
        columns={columnas}
      />
    </div>
  );
}

export default App;