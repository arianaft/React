# Arquitectura Final — Módulo 3

## Introducción

En este proyecto se ha desarrollado una aplicación utilizando React con TypeScript, aplicando tipado estricto para reducir errores en tiempo de ejecución y mejorar la mantenibilidad del código.

---

## Uso de genéricos

Se ha implementado un componente reutilizable `DataTable<T>`, que permite renderizar cualquier tipo de datos de forma dinámica. Gracias a los genéricos, el componente es flexible y escalable.

---

## Tipos de utilidad (Utility Types)

Se ha utilizado `Partial<T>` para gestionar el estado de edición de los datos. Esto permite trabajar con objetos incompletos sin perder el tipado.

Ejemplo:

```ts
const [editingUser, setEditingUser] = useState<Partial<Usuario>>({});