package GestionArreglo;

import java.util.Scanner;

public class GestionArreglo {

    static int[] numerito;
    static int tope = 0;
    static Scanner teclado = new Scanner(System.in);

    public void creaArreglo(int valor) {
        numerito = new int[valor];
        tope = 0;
        System.out.println("Arreglo creado con capacidad de " + valor + " elementos.");
    }

    public void lectura() {
        if (numerito == null) {
            System.out.println("Primero debe crear el arreglo.");
            return;
        }
        if (tope < numerito.length) {
            System.out.print("Ingrese un Numero: ");
            numerito[tope] = teclado.nextInt();
            tope++;
        } else {
            System.out.println("El arreglo ya esta lleno.");
        }
    }

    public void escritura() {
        System.out.println("Listado de Elementos");
        System.out.println("");
        if (tope > 0) {
            for (int i = 0; i < tope; i++) {
                System.out.print(numerito[i] + "\t");
            }
            System.out.println();
        } else {
            System.out.println("No existen elementos registrados.");
        }
    }

    // 1. Eliminar un elemento "x"
    public void eliminarElemento(int x) {
        int pos = -1;
        for (int i = 0; i < tope; i++) {
            if (numerito[i] == x) {
                pos = i;
                break;
            }
        }
        if (pos != -1) {
            for (int i = pos; i < tope - 1; i++) {
                numerito[i] = numerito[i + 1];
            }
            tope--;
            System.out.println("Elemento " + x + " eliminado exitosamente.");
        } else {
            System.out.println("Elemento " + x + " no encontrado.");
        }
    }

    // 2. Modificar un elemento "x" por un nuevo valor
    public void modificarElemento(int x, int nuevoValor) {
        boolean encontrado = false;
        for (int i = 0; i < tope; i++) {
            if (numerito[i] == x) {
                numerito[i] = nuevoValor;
                encontrado = true;
                System.out.println("Elemento " + x + " modificado por " + nuevoValor);
                break;
            }
        }
        if (!encontrado) {
            System.out.println("Elemento " + x + " no encontrado.");
        }
    }

    // 3. Insertar un elemento "x" en una posición "y"
    public void insertarEnPosicion(int x, int y) {
        if (numerito == null || tope >= numerito.length) {
            System.out.println("No hay espacio suficiente en el arreglo.");
            return;
        }
        if (y < 0 || y > tope) {
            System.out.println("Posicion invalida.");
            return;
        }
        for (int i = tope; i > y; i--) {
            numerito[i] = numerito[i - 1];
        }
        numerito[y] = x;
        tope++;
        System.out.println("Elemento " + x + " insertado en la posicioin " + y);
    }

    // 4. Sumar los elementos del arreglo
    public void sumarElementos() {
        int suma = 0;
        for (int i = 0; i < tope; i++) {
            suma += numerito[i];
        }
        System.out.println("Suma total de los elementos: " + suma);
    }

    // 5. Hallar el número menor, número mayor y el promedio
    public void menorMayorPromedio() {
        if (tope == 0) {
            System.out.println("Arreglo vacio.");
            return;
        }
        int menor = numerito[0];
        int mayor = numerito[0];
        int suma = 0;

        for (int i = 0; i < tope; i++) {
            if (numerito[i] < menor) menor = numerito[i];
            if (numerito[i] > mayor) mayor = numerito[i];
            suma += numerito[i];
        }

        double promedio = (double) suma / tope;

        System.out.println("Numero Menor: " + menor);
        System.out.println("Numero Mayor: " + mayor);
        System.out.println("Promedio: " + promedio);
    }

    // 6. Suma de elementos impares
    public void sumaImpares() {
        int suma = 0;
        for (int i = 0; i < tope; i++) {
            if (numerito[i] % 2 != 0) {
                suma += numerito[i];
            }
        }
        System.out.println("Suma de elementos impares: " + suma);
    }

    // 7. Mover el primer elemento a la última posición
    public void primerElementoAlFinal() {
        if (tope <= 1) return;
        int primero = numerito[0];
        for (int i = 0; i < tope - 1; i++) {
            numerito[i] = numerito[i + 1];
        }
        numerito[tope - 1] = primero;
        System.out.println("Primer elemento movido al final.");
    }

    // 8. Mover el primer elemento Par al final del arreglo
    public void primerParAlFinal() {
        int posPar = -1;
        for (int i = 0; i < tope; i++) {
            if (numerito[i] % 2 == 0) {
                posPar = i;
                break;
            }
        }
        if (posPar != -1) {
            int valorPar = numerito[posPar];
            for (int i = posPar; i < tope - 1; i++) {
                numerito[i] = numerito[i + 1];
            }
            numerito[tope - 1] = valorPar;
            System.out.println("Primer número par (" + valorPar + ") movido al final.");
        } else {
            System.out.println("No hay numeros pares en el arreglo.");
        }
    }

    public static void main(String[] args) {
        GestionArreglo app = new GestionArreglo();
        
        // Ejemplo de prueba rápida:
        app.creaArreglo(5);
        app.lectura(); // Ingrese un valor
        app.lectura(); // Ingrese un valor
        app.escritura();
        app.menorMayorPromedio();
    }
}