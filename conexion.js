// Función para generar un número aleatorio de 10 dígitos
function generarMatricula() {
    let matricula = '';
    for (let i = 0; i < 10; i++) {
      matricula += Math.floor(Math.random() * 10);
    }
    return matricula;
  }
  
  // Función para generar un ID único no repetido
  function generarID(array) {
    let id;
    do {
      id = Math.floor(Math.random() * 100000); // Genera un ID de 5 dígitos
    } while (array.includes(id));
    return id;
  }
  
  // Función para generar un nombre aleatorio
  function generarNombre() {
    const nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Pedro', 'Ana', 'Diego', 'Sofía', 'Luis', 'Lucía'];
    const apellidos = ['García', 'Martínez', 'Rodríguez', 'Fernández', 'López', 'González', 'Pérez', 'Sánchez', 'Ramírez', 'Torres'];
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio1 = apellidos[Math.floor(Math.random() * apellidos.length)];
    const apellidoAleatorio2 = apellidos[Math.floor(Math.random() * apellidos.length)];
    return `${nombreAleatorio} ${apellidoAleatorio1} ${apellidoAleatorio2}`;
  }
  
  // Función para generar un área aleatoria
  function generarArea() {
    const areas = ['Ingeniería', 'Administración', 'Ciencias', 'Abogados', 'Contaduría', 'Diseño', 'Arquitectura', 'Física', 'Literatura'];
    return areas[Math.floor(Math.random() * areas.length)];
  }
  
  // Función para generar dummy data para alumnos
  function generarAlumnos(cantidad) {
    const alumnos = [];
    const matriculasGeneradas = new Set();
  
    for (let i = 0; i < cantidad; i++) {
      const matricula = generarMatricula();
      const nombre = generarNombre();
      alumnos.push({
        matricula: matricula,
        apellido1: nombre.split(' ')[1],
        apellido2: nombre.split(' ')[2],
        nombres: nombre.split(' ')[0],
        correo: `${nombre.split(' ')[0].toLowerCase()}${matricula.substring(0, 4)}@mail.com`,
        fecha_nacimiento: `${Math.floor(Math.random() * 28) + 1}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * (2002 - 1980)) + 1980}`
      });
    }
    return alumnos;
  }
  
  // Función para generar dummy data para académicos
  function generarAcademicos(cantidad) {
    const academicos = [];
    const idsGenerados = new Set();
  
    for (let i = 0; i < cantidad; i++) {
      const id = generarID([...idsGenerados]);
      idsGenerados.add(id);
      const nombre = generarNombre();
      academicos.push({
        id: id,
        apellido1: nombre.split(' ')[1],
        apellido2: nombre.split(' ')[2],
        nombres: nombre.split(' ')[0],
        area: generarArea()
      });
    }
    return academicos;
  }
  
  // Función para generar dummy data para administrativos
  function generarAdministrativos(cantidad) {
    const administrativos = [];
    const idsGenerados = new Set();
  
    for (let i = 0; i < cantidad; i++) {
      const id = generarID([...idsGenerados]);
      idsGenerados.add(id);
      const nombre = generarNombre();
      administrativos.push({
        id: id,
        apellido1: nombre.split(' ')[1],
        apellido2: nombre.split(' ')[2],
        nombres: nombre.split(' ')[0],
        area: generarArea()
      });
    }
    return administrativos;
  }
  
  // Generar y mostrar dummy data para alumnos, académicos y administrativos
  const cantidadAlumnos = 10;
  const cantidadAcademicos = 10;
  const cantidadAdministrativos = 10;
  
  console.log("Dummy data para alumnos:");
  console.table(generarAlumnos(cantidadAlumnos));
  
  console.log("Dummy data para académicos:");
  console.table(generarAcademicos(cantidadAcademicos));
  
  console.log("Dummy data para administrativos:");
  console.table(generarAdministrativos(cantidadAdministrativos));
  