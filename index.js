// -------------------------------------------------------------------------------------------------------------------------------------------- //
// 16 - Son similares?
// Dos arreglos se llaman similares si uno puede obtenerse de otro intercambiando como máximo un par de elementos en uno de los arreglos.
// Dadas dos matrices a y b, compruebe si son similares.

// Ejemplo
// Para a = [1, 2, 3] y b = [1, 2, 3], la salida debe ser
// solución(a, b) = verdadero.

// Las matrices son iguales, no es necesario intercambiar ningún elemento.

// Para a = [1, 2, 3] y b = [2, 1, 3], la salida debe ser
// solución(a, b) = verdadero.

// Podemos obtener b de a intercambiando 2 y 1 en b.

// Para a = [1, 2, 2] y b = [2, 1, 1], la salida debe ser
// solución(a, b) = falso.

// Cualquier intercambio de dos elementos, ya sea en a o en b, no hará que a y b sean iguales.

function areSimilar(arr1, arr2) {
  let differenceCount = 0;
  let differentIndices = [];

  // Compara elementos en las mismas posiciones de arr1 y arr2
  // Complejidad algorítmica: O(n)
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      differenceCount++;
      differentIndices.push(i);
    }
  }

  // Si no hay diferencias, los arrays ya son iguales
  if (differenceCount === 0) {
    return true;
  }
  // Si hay exactamente dos diferencias, verifica si intercambiar los elementos diferentes hace que los arrays sean iguales
  else if (differenceCount === 2) {
    const [firstIndex, secondIndex] = differentIndices;
    return (
      arr1[firstIndex] === arr2[secondIndex] &&
      arr1[secondIndex] === arr2[firstIndex]
    );
  }

  // En todos los demás casos, no es posible hacer que los arrays sean iguales intercambiando exactamente dos elementos
  return false;
}

// Ejemplo de uso
const arrA = [1, 2, 3, 4];
const arrB = [1, 4, 3, 2];

console.log(solution(arrA, arrB)); // Output: true

// -------------------------------------------------------------------------------------------------------------------------------------------- //
