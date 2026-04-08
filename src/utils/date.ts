import { differenceInDays } from "date-fns";

export function calcularDias(fecha1: Date, fecha2: Date): number {
  return differenceInDays(fecha1, fecha2);
}
