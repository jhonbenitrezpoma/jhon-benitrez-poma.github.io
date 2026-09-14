package NotasAlumno;

import java.util.Scanner;

public class NotasAlumno {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int cantidad = 0;

        // Validación para requerir al menos 2 prácticas
        while (cantidad < 2) {
            System.out.print("Ingrese la cantidad de practicas (minimo 2): ");
            if (teclado.hasNextInt()) {
                cantidad = teclado.nextInt();
                if (cantidad < 2) {
                    System.out.println("Error: Se necesitan al menos 2 practicas para eliminar la menor.");
                }
            } else {
                System.out.println("Error: Ingrese un numero entero valido.");
                teclado.next();
            }
        }

        double[] notas = new double[cantidad];

        // Lectura de notas con validación entre 0 y 20
        for (int i = 0; i < cantidad; i++) {
            double nota = -1;
            while (nota < 0 || nota > 20) {
                System.out.print("Ingrese la nota de la practica " + (i + 1) + " (0 - 20): ");
                if (teclado.hasNextDouble()) {
                    nota = teclado.nextDouble();
                    if (nota < 0 || nota > 20) {
                        System.out.println("Error: La nota debe estar en el rango de 0 a 20.");
                    }
                } else {
                    System.out.println("Error: Ingrese una nota valida.");
                    teclado.next();
                }
            }
            notas[i] = nota;
        }

        // Búsqueda de la nota menor y cálculo de la suma
        double notaMenor = notas[0];
        double sumaTotal = 0;

        for (double n : notas) {
            sumaTotal += n;
            if (n < notaMenor) {
                notaMenor = n;
            }
        }

        // Cálculo descartando la nota más baja
        double sumaFinal = sumaTotal - notaMenor;
        double promedioExacto = sumaFinal / (cantidad - 1);
        long promedioRedondeado = Math.round(promedioExacto);

        System.out.println(" RESULTADOS ");
        System.out.println("Nota mas baja eliminada: " + notaMenor);
        System.out.println("Promedio exacto (sin nota mas baja): " + promedioExacto);
        System.out.println("Promedio final redondeado: " + promedioRedondeado);
        System.out.println("");
    }
}