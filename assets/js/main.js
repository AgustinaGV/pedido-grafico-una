// ── datos de configuración ────────────────────────────────────────────────────

const UNIDADES = [
  { nombre: 'Rectorado',                                          color: '#00467F', sigla: 'REC' },
  { nombre: 'Departamento de Artes Audiovisuales',               color: '#C60751', sigla: 'AA'  },
  { nombre: 'Departamento de Artes Dramáticas',                  color: '#F08B1D', sigla: 'AD'  },
  { nombre: 'Departamento de Folklore',                          color: '#EF3E42', sigla: 'F'   },
  { nombre: 'Departamento de Artes del Movimiento',              color: '#EC0B8D', sigla: 'AM'  },
  { nombre: 'Departamento de Artes Musicales y Sonoras',         color: '#0093D1', sigla: 'MS'  },
  { nombre: 'Departamento de Artes Visuales',                    color: '#00B25A', sigla: 'AV'  },
  { nombre: 'Área Transdepartamental de Crítica de Artes',       color: '#872175', sigla: 'CA'  },
  { nombre: 'Área Transdepartamental de Formación Docente',      color: '#7E8082', sigla: 'FD'  },
  { nombre: 'Área Transdepartamental de Artes Multimediales',    color: '#007C85', sigla: 'MM'  },
  { nombre: 'Museo de la Cárcova',                               color: '#000000', sigla: 'MC'  },
];

const SEDES = [
  { label: 'Rectorado',                                    dir: 'Tte. Juan D. Perón 1710, CABA' },
  { label: 'Museo de la Cárcova',                          dir: 'Av. España 1701, CABA' },
  { label: 'Artes Multimediales',                          dir: 'Viamonte 1832, CABA' },
  { label: 'Artes Visuales',                               dir: 'Av. General Las Heras 1749, CABA' },
  { label: 'Artes Visuales — sede Huergo',                 dir: 'Av. Ingeniero Huergo 1433, CABA' },
  { label: 'Artes Visuales — sede Xul Solar (Tigre)',      dir: 'Solís 1 esq. Newton, Tigre, PBA' },
  { label: 'Formación Docente',                            dir: 'Bolívar 1674, CABA' },
  { label: 'Artes Dramáticas — sede French',               dir: 'French 3614, CABA' },
  { label: 'Artes Dramáticas — sede Perón',                dir: 'Tte. General Juan Domingo Perón 1878, CABA' },
  { label: 'Folklore',                                     dir: 'Av. Independencia 1686, CABA' },
  { label: 'Artes del Movimiento',                         dir: 'Martín Rodriguez 444, CABA' },
  { label: 'Artes Audiovisuales — sede Rocamora',          dir: 'Rocamora 4141, CABA' },
  { label: 'Artes Audiovisuales — sede Salguero',          dir: 'Jerónimo Salguero 60, CABA' },
  { label: 'Crítica de Artes',                             dir: 'Bartolomé Mitre 1869, CABA' },
  { label: 'Música',                                       dir: 'Av. Córdoba 2445, CABA' },
];

const SEDE_DEFAULT = {
  'Rectorado':                                        'Rectorado',
  'Museo de la Cárcova':                              'Museo de la Cárcova',
  'Área Transdepartamental de Artes Multimediales':   'Artes Multimediales',
  'Departamento de Artes Visuales':                   'Artes Visuales',
  'Área Transdepartamental de Formación Docente':     'Formación Docente',
  'Departamento de Artes Dramáticas':                 'Artes Dramáticas — sede French',
  'Departamento de Folklore':                         'Folklore',
  'Departamento de Artes del Movimiento':             'Artes del Movimiento',
  'Departamento de Artes Audiovisuales':              'Artes Audiovisuales — sede Rocamora',
  'Área Transdepartamental de Crítica de Artes':      'Crítica de Artes',
  'Departamento de Artes Musicales y Sonoras':        'Música',
};

const DEPENDENCIAS = {
  'Rectorado': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Secretaría de Desarrollo y Vinculación Institucional',
    'Secretaría de Asuntos Jurídico-Legales',
    'Secretaría de Extensión Cultural y Bienestar Estudiantil',
    'Secretaría de Igualdad, Derechos y Diversidad',
  ],
  'Área Transdepartamental de Artes Multimediales': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Secretaría de Extensión y Bienestar Estudiantil',
  ],
  'Departamento de Artes Dramáticas': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Secretaría de Extensión y Bienestar Estudiantil',
  ],
  'Departamento de Artes Visuales': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Secretaría de Extensión y Bienestar Estudiantil',
  ],
  'Área Transdepartamental de Crítica de Artes': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Prosecretaría de Extensión, Vinculación Institucional y Bienestar Estudiantil',
  ],
  'Área Transdepartamental de Formación Docente': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Prosecretaría de Vinculación Comunitaria y Bienestar Universitario',
  ],
  'Departamento de Folklore': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Secretaría de Desarrollo y Vinculación Institucional',
  ],
  'Departamento de Artes Musicales y Sonoras': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Prosecretaría de Producción y Extensión Académica',
    'Prosecretaría de Vinculación Institucional',
  ],
  'Departamento de Artes del Movimiento': [
    'Secretaría Académica',
    'Secretaría de Investigación y Posgrado',
    'Instituto de Investigación',
    'Secretaría de Extensión y Bienestar Estudiantil',
    'Secretaría Administrativa',
  ],
  'Departamento de Artes Audiovisuales': [
    'Secretaría Académica',
    'Secretaría de Posgrado',
    'Instituto de Investigación en Artes Audiovisuales',
    'Secretaría de Extensión y Bienestar Estudiantil',
  ],
};

const IMAGEN_ESTANDAR = {
  items: [
    'Dimensiones mínimas: 900px',
    'Tienen que ser imágenes de uso libre, propias o cedidas por lxs autorxs',
    'En caso de ser una imagen cedida, indicar los créditos',
    'Nomenclatura: 2025-una-[uuaa]-[nombre-del-contenido]'
  ]
};

const TIPOS = {
  curso: {
    label: 'Curso / Taller',
    etiqueta: 'CURSOS',
    carrusel: true,
    campos: [
      { id: 'ua', label: 'Unidad Académica', tipo: 'select', req: true, opciones: UNIDADES },
      { id: 'tipo_act', label: 'Tipo de actividad', tipo: 'chips', req: true, opciones: ['Taller','Seminario','Curso','Otro'], otroTexto: true },
      { id: 'modalidad', label: 'Modalidad', tipo: 'chips', req: true, opciones: ['Presencial','A distancia','Sincrónico'] },
      { id: 'titulo', label: 'Título', tipo: 'text', req: true, max: 60, hint: 'Título principal de la pieza. Máx. 60 caracteres.' },
      { id: 'subtitulo', label: 'Subtítulo', tipo: 'text', req: false, max: 80, hint: 'Complementa el título. Máx. 80 caracteres.' },
      { id: 'desarrollo_carrusel', label: 'Desarrollo del texto de carrusel', tipo: 'textarea', req: false, soloCarrusel: true, hint: 'Texto extendido que se distribuirá en las placas del carrusel.' },
      { id: 'docente', label: 'Docente/s', tipo: 'lista', req: true, placeholder: 'Nombre y apellido', hint: 'Un campo por docente.', itemLabel: 'Agregar docente' },
      { id: 'fecha', label: 'Fecha de inicio', tipo: 'datetime', req: false, sinHora: true },
      { id: 'lugar_espacio', label: 'Nombre del aula o espacio', tipo: 'text', req: false, max: 50, hint: 'Ej: Aula Magna, Sala 3, Estudio de grabación. Máx. 50 caracteres.' },
      { id: 'lugar_sede', label: 'Sede', tipo: 'sede', req: false },
      { id: 'imagen', label: 'Imagen', tipo: 'imagen', req: true, specs: IMAGEN_ESTANDAR, usaSigla: true },
    ]
  },
  agenda: {
    label: 'Agenda / Evento',
    etiqueta: 'AGENDA',
    carrusel: true,
    campos: [
      { id: 'ua', label: 'Unidad Académica', tipo: 'select', req: true, opciones: UNIDADES },
      { id: 'titulo', label: 'Título del evento', tipo: 'text', req: true, max: 60, hint: 'Breve y claro. Máx. 60 caracteres.' },
      { id: 'subtitulo', label: 'Subtítulo', tipo: 'text', req: false, max: 85, hint: 'Solo aparece en el desarrollo del evento, no en el listado. Máx. 85 caracteres.' },
      { id: 'desarrollo_carrusel', label: 'Desarrollo del texto de carrusel', tipo: 'textarea', req: false, soloCarrusel: true, hint: 'Texto extendido que se distribuirá en las placas del carrusel.' },
      { id: 'fecha_hora', label: 'Fecha y horario', tipo: 'datetime', req: true, conFin: true },
      { id: 'lugar', label: 'Lugar', tipo: 'sede', req: false },
      { id: 'costo', label: 'Costo', tipo: 'chips', req: true, opciones: ['Actividad gratuita','Actividad arancelada'] },
      { id: 'inscripcion', label: '¿Requiere inscripción previa?', tipo: 'chips', req: true, opciones: ['Sí','No'], detalleEnOpcion: 'Sí', detalleLabel: 'Correo o enlace de inscripción (opcional)', detallePlaceholder: 'Ej: inscripciones@una.edu.ar o link al formulario' },
      { id: 'imagen', label: 'Imagen', tipo: 'imagen', req: true, specs: IMAGEN_ESTANDAR },
    ]
  },
  convocatoria: {
    label: 'Convocatoria',
    etiqueta: 'CONVOCATORIA',
    carrusel: true,
    campos: [
      { id: 'ua', label: 'Unidad Académica', tipo: 'select', req: true, opciones: UNIDADES },
      { id: 'titulo', label: 'Título de la convocatoria', tipo: 'text', req: true, max: 70, hint: 'Máx. 70 caracteres.' },
      { id: 'subtitulo', label: 'Subtítulo', tipo: 'text', req: false, max: 100, hint: 'Máx. 100 caracteres.' },
      { id: 'desarrollo_carrusel', label: 'Desarrollo del texto de carrusel', tipo: 'textarea', req: false, soloCarrusel: true, hint: 'Texto extendido que se distribuirá en las placas del carrusel.' },
      { id: 'destinatarixs', label: 'Destinatarixs', tipo: 'text', req: false, max: 80, hint: 'Ej: Estudiantes de grado, artistas independientes. Máx. 80 caracteres.' },
      { id: 'cierre', label: 'Fecha de cierre', tipo: 'datetime', req: true, sinHora: true },
      { id: 'url', label: 'Contacto', tipo: 'text', req: false, max: 50, hint: 'Máx. 50 caracteres.' },
      { id: 'imagen', label: 'Imagen', tipo: 'imagen', req: true, specs: IMAGEN_ESTANDAR },
    ]
  },
  carrera: {
    label: 'Carreras',
    etiqueta: 'CARRERAS',
    carrusel: true,
    campos: [
      { id: 'ua', label: 'Unidad Académica', tipo: 'select', req: true, opciones: UNIDADES },
      { id: 'nivel', label: 'Nivel', tipo: 'chips', req: true, opciones: ['Pregrado','Diplomatura','Grado','Posgrado'], limpiaAl: ['tipo_nivel'] },
      { id: 'tipo_nivel', label: 'Tipo', tipo: 'chips', req: true, dependeDe: 'nivel', opcionesPorValor: { 'Grado': ['Licenciatura','Profesorado'], 'Posgrado': ['Maestría','Doctorado','Especialización'] } },
      { id: 'modalidad', label: 'Modalidad', tipo: 'chips', req: true, opciones: ['Presencial','A distancia','Mixta','Sincrónica'] },
      { id: 'titulo', label: 'Título', tipo: 'text', req: true, max: 65, hint: 'Máx. 65 caracteres.' },
      { id: 'subtitulo', label: 'Subtítulo', tipo: 'text', req: false, max: 90, hint: 'Máx. 90 caracteres.' },
      { id: 'desarrollo_carrusel', label: 'Desarrollo del texto de carrusel', tipo: 'textarea', req: false, soloCarrusel: true, hint: 'Texto extendido que se distribuirá en las placas del carrusel.' },
      { id: 'periodo_inscripcion', label: 'Período de inscripción', tipo: 'text', req: false, max: 50, hint: 'Ej: Inscripciones abiertas hasta el 30 de marzo. Máx. 50 caracteres.' },
      { id: 'imagen', label: 'Imagen', tipo: 'imagen', req: true, specs: IMAGEN_ESTANDAR, usaSigla: true },
    ]
  },
  anuncio: {
    label: 'Anuncio importante',
    etiqueta: 'INFORMACIÓN IMPORTANTE',
    carrusel: false,
    campos: [
      { id: 'ua', label: 'Unidad Académica', tipo: 'select', req: true, opciones: UNIDADES },
      { id: 'titulo', label: 'Título del anuncio', tipo: 'text', req: true, max: 60, hint: 'Directo e informativo. Máx. 60 caracteres.' },
      { id: 'subtitulo', label: 'Subtítulo', tipo: 'text', req: false, max: 80, hint: 'Máx. 80 caracteres.' },
      { id: 'fecha', label: 'Fecha o período', tipo: 'text', req: false, max: 30, hint: 'Ej: 11 y 12 de junio. Máx. 30 caracteres.' },
      { id: 'imagen', label: 'Imagen', tipo: 'imagen', req: false, specs: IMAGEN_ESTANDAR },
    ]
  },
  efemeride: {
    label: 'Efeméride',
    etiqueta: 'EFEMÉRIDE',
    carrusel: false,
    campos: [
      { id: 'ua', label: 'Unidad Académica', tipo: 'select', req: true, opciones: UNIDADES },
      { id: 'titulo', label: 'Título', tipo: 'text', req: true, max: 60, hint: 'Máx. 60 caracteres.' },
      { id: 'subtitulo', label: 'Subtítulo', tipo: 'text', req: false, max: 100, hint: 'Máx. 100 caracteres.' },
      { id: 'fecha', label: 'Fecha', tipo: 'datetime', req: true, sinHora: true },
      { id: 'imagen', label: 'Imagen', tipo: 'imagen', req: true, specs: IMAGEN_ESTANDAR },
    ]
  },
  noticia: {
    label: 'Noticia',
    etiqueta: 'NOTICIA',
    carrusel: true,
    campos: [
      { id: 'ua', label: 'Unidad Académica', tipo: 'select', req: true, opciones: UNIDADES },
      { id: 'titulo', label: 'Título', tipo: 'text', req: true, max: 70, hint: 'Máx. 70 caracteres.' },
      { id: 'subtitulo', label: 'Subtítulo', tipo: 'text', req: false, max: 100, hint: 'Máx. 100 caracteres.' },
      { id: 'desarrollo_carrusel', label: 'Desarrollo del texto de carrusel', tipo: 'textarea', req: false, soloCarrusel: true, hint: 'Texto extendido que se distribuirá en las placas del carrusel.' },
      { id: 'bajada', label: 'Bajada para la pieza gráfica', tipo: 'textarea', req: false, max: 130, hint: 'Síntesis breve. Máx. 130 caracteres.' },
      { id: 'imagen', label: 'Imagen', tipo: 'imagen', req: true, specs: IMAGEN_ESTANDAR },
    ]
  },
};

// ── estado ────────────────────────────────────────────────────────────────────

let piezas = [];
let contador = 0;
let pedidoIntentado = false;

// ── inicialización ─────────────────────────────────────────────────────────────

function campoTieneError(pieza, campo) {
  if (!campo.req) return false;
  if (campo.tipo === 'imagen' || campo.tipo === 'chips' || campo.tipo === 'sede') return false;
  if (campo.tipo === 'lista') {
    var lista = pieza.valores[campo.id] || [];
    return lista.length === 0 || !lista[0] || !lista[0].nombre || lista[0].nombre.trim() === '';
  }
  if (campo.tipo === 'datetime') {
    var modoVal = pieza.valores[campo.id + '_modo'] || 'unica';
    if (modoVal === 'varias') {
      var v = pieza.valores[campo.id + '_varias'] || [];
      return v.length === 0 || !v[0].d || (!campo.sinHora && !v[0].t);
    }
    return !pieza.valores[campo.id + '_d'] || (!campo.sinHora && !pieza.valores[campo.id + '_t']);
  }
  var val = pieza.valores[campo.id];
  return !val || val.trim() === '';
}

function init() { addPiece(); }

// ── gestión de piezas ─────────────────────────────────────────────────────────

function addPiece(clonar) {
  piezas.forEach(function(p) { p.collapsed = true; });
  const id = ++contador;
  const pieza = {
    id,
    tipo: clonar ? clonar.tipo : null,
    valores: clonar ? Object.assign({}, clonar.valores) : {},
    esCarrusel: clonar ? clonar.esCarrusel : false,
    collapsed: false
  };
  piezas.push(pieza);
  render();
  setTimeout(() => {
    const el = document.getElementById('pieza-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

function toggleCollapse(id) {
  var pieza = piezas.find(function(p) { return p.id === id; });
  if (pieza) { pieza.collapsed = !pieza.collapsed; render(); }
}

function removePiece(id) {
  if (piezas.length === 1) return;
  piezas = piezas.filter(p => p.id !== id);
  render();
}

function duplicarPieza(id) {
  const src = piezas.find(p => p.id === id);
  if (src) addPiece(src);
}

function setTipo(id, tipo) {
  var pieza = piezas.find(function(p) { return p.id === id; });
  if (!pieza) return;
  var uaNombre = pieza.valores.ua;
  var preservar = {
    ua: uaNombre,
    lugar_sede: pieza.valores.lugar_sede || (uaNombre ? SEDE_DEFAULT[uaNombre] : ''),
    lugar_sede_otra: pieza.valores.lugar_sede_otra,
    _conjunta: pieza.valores._conjunta,
    _uas_conjuntas: pieza.valores._uas_conjuntas,
    _dependencia: pieza.valores._dependencia,
    _externa: pieza.valores._externa,
    _instituciones_externas: pieza.valores._instituciones_externas,
    _logo_ok: pieza.valores._logo_ok,
  };
  pieza.tipo = tipo;
  pieza.valores = preservar;
  pieza.esCarrusel = false;
  render();
}

function setValor(id, campo, valor) {
  const pieza = piezas.find(p => p.id === id);
  if (pieza) pieza.valores[campo] = valor;
}

function toggleCarrusel(id) {
  const pieza = piezas.find(p => p.id === id);
  if (pieza) {
    pieza.esCarrusel = !pieza.esCarrusel;
    render();
  }
}

// ── render ────────────────────────────────────────────────────────────────────

function render() {
  const lista = document.getElementById('piecesList');
  lista.innerHTML = '';
  piezas.forEach((pieza, idx) => lista.appendChild(tarjetaPieza(pieza, idx)));
  if (pedidoIntentado) {
    var hayErrores = piezas.some(function(pieza) {
      if (!pieza.tipo) return true;
      var config = TIPOS[pieza.tipo];
      return config.campos.some(function(campo) { return campoTieneError(pieza, campo); }) || !pieza.valores.deadline;
    });
    var btn = document.getElementById('btn-generar');
    if (btn) btn.disabled = hayErrores;
  }
}

function tarjetaPieza(pieza, idx) {
  const config = pieza.tipo ? TIPOS[pieza.tipo] : null;
  const card = document.createElement('div');
  card.className = 'piece-card';
  card.id = 'pieza-' + pieza.id;

  const titulo = config ? 'Pieza ' + (idx + 1) + ' · ' + config.label : 'Pieza ' + (idx + 1);
  const indicador = pieza.collapsed ? '▶' : '▼';

  card.innerHTML =
    '<div class="piece-card-header">' +
      '<h3 style="cursor:pointer;user-select:none" onclick="toggleCollapse(' + pieza.id + ')">' + indicador + ' ' + titulo + '</h3>' +
      '<div class="card-actions">' +
        (piezas.length > 1 ? '<button class="btn-danger" onclick="removePiece(' + pieza.id + ')">Eliminar</button>' : '') +
        '<button class="btn-small" onclick="duplicarPieza(' + pieza.id + ')">Duplicar</button>' +
      '</div>' +
    '</div>' +
    (!pieza.collapsed
      ? '<div class="piece-card-body">' +
          renderUAyColaboracion(pieza) +
          '<hr class="divider">' +
          '<div class="section-label">Tipo de pieza</div>' +
          '<div class="type-selector">' +
            Object.entries(TIPOS).map(function(entry) {
              return '<button class="type-btn' + (pieza.tipo === entry[0] ? ' active' : '') +
                '" onclick="setTipo(' + pieza.id + ', \'' + entry[0] + '\')">' + entry[1].label + '</button>';
            }).join('') +
          '</div>' +
          (config ? renderCampos(pieza, config) : '') +
        '</div>'
      : '');

  return card;
}

function renderUAyColaboracion(pieza) {
  var campoUA = {
    id: 'ua', label: 'Unidad Académica', tipo: 'select', req: true, opciones: UNIDADES
  };
  var uaVal = pieza.valores.ua || '';
  var depOpciones = DEPENDENCIAS[uaVal] || null;
  var depHtml = '';
  if (depOpciones) {
    var depVal = pieza.valores._dependencia || '';
    depHtml =
      '<div class="field">' +
        '<label>Secretaría / Dependencia</label>' +
        '<select onchange="setValor(' + pieza.id + ', \'_dependencia\', this.value)">' +
          '<option value="">— Seleccioná (opcional) —</option>' +
          depOpciones.map(function(op) {
            return '<option' + (depVal === op ? ' selected' : '') + ' value="' + esc(op) + '">' + op + '</option>';
          }).join('') +
        '</select>' +
      '</div>';
  }
  return (
    '<div class="fields" style="margin-bottom:0">' + renderCampo(pieza, campoUA) + depHtml + '</div>' +
    renderColaboracion(pieza)
  );
}

function renderCampos(pieza, config) {
  var html = '';

  if (config.carrusel) {
    var fmtId = 'fmt-' + pieza.id;
    html +=
      '<div style="display:flex;align-items:center;gap:12px;margin:18px 0 4px;">' +
        '<span style="font-size:13px;font-weight:600;color:' + (!pieza.esCarrusel ? 'var(--text)' : 'var(--muted)') + '">Placa simple</span>' +
        '<label class="toggle-switch">' +
          '<input type="checkbox" id="' + fmtId + '"' + (pieza.esCarrusel ? ' checked' : '') + ' onchange="toggleCarrusel(' + pieza.id + ')">' +
          '<span class="toggle-track"></span>' +
        '</label>' +
        '<span style="font-size:13px;font-weight:600;color:' + (pieza.esCarrusel ? 'var(--text)' : 'var(--muted)') + '">Carrusel</span>' +
        (pieza.esCarrusel ? '<span style="font-size:12px;color:var(--muted)">El contenido extenso se distribuirá en varias placas.</span>' : '') +
      '</div>';
  }

  html += '<div class="fields" style="margin-top:14px;">';
  config.campos.forEach(function(campo) {
    if (campo.id === 'ua') return;
    if (campo.soloCarrusel && !pieza.esCarrusel) return;
    html += renderCampo(pieza, campo);
  });
  html += '</div>';

  html +=
    '<hr class="divider">' +
    '<div class="fields">' +
      '<div class="field">' +
        '<label>Observaciones para diseño</label>' +
        '<div class="hint">Referencias de color, estilo, piezas anteriores que les gustaron, etc. (opcional)</div>' +
        '<textarea oninput="setValor(' + pieza.id + ', \'obs\', this.value)" placeholder="Ej: usar paleta fría, seguir el estilo de la campaña anterior de posgrado...">' +
          esc(pieza.valores.obs || '') +
        '</textarea>' +
      '</div>' +
      '<div class="field' + (pedidoIntentado && !pieza.valores.deadline ? ' has-error' : '') + '" id="field-' + pieza.id + '-deadline">' +
        '<label>Fecha límite del pedido <span class="required-mark">*</span></label>' +
        '<div class="hint">¿Para cuándo necesitás las piezas?</div>' +
        (function() {
          var hoy = new Date();
          var minDL = hoy.toISOString().slice(0, 10);
          var maxDL = new Date(); maxDL.setFullYear(maxDL.getFullYear() + 1);
          var maxDLStr = maxDL.toISOString().slice(0, 10);
          return '<input type="date" value="' + esc(pieza.valores.deadline || '') + '" min="' + minDL + '" max="' + maxDLStr + '" onclick="try{this.showPicker();}catch(e){}" oninput="setValor(' + pieza.id + ', \'deadline\', this.value)">';
        })() +
        '<div class="field-error">Indicá la fecha límite.</div>' +
      '</div>' +
    '</div>';

  return html;
}

function renderCampo(pieza, campo) {
  var val = pieza.valores[campo.id] || '';
  var req = campo.req ? '<span class="required-mark">*</span>' : '';
  var fid = 'field-' + pieza.id + '-' + campo.id;
  var cid = 'counter-' + pieza.id + '-' + campo.id;
  var errorClass = (pedidoIntentado && campoTieneError(pieza, campo)) ? ' has-error' : '';

  if (campo.tipo === 'lista') {
    var lista = pieza.valores[campo.id] || [{ nombre: '' }];
    var listaHtml = lista.map(function(item, i) {
      return (
        '<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">' +
          '<input type="text" style="flex:1" value="' + esc(item.nombre || '') + '" ' +
            'placeholder="' + esc(campo.placeholder || '') + '" ' +
            'oninput="setListaItem(' + pieza.id + ', \'' + campo.id + '\', ' + i + ', this.value)">' +
          (lista.length > 1
            ? '<button class="btn-danger" onclick="removeListaItem(' + pieza.id + ', \'' + campo.id + '\', ' + i + ')">×</button>'
            : '') +
        '</div>'
      );
    }).join('');
    return (
      '<div class="field' + errorClass + '" id="' + fid + '">' +
        '<label>' + campo.label + ' ' + req + '</label>' +
        (campo.hint ? '<div class="hint">' + campo.hint + '</div>' : '') +
        listaHtml +
        '<button class="btn-small" style="margin-top:2px" onclick="addListaItem(' + pieza.id + ', \'' + campo.id + '\')">+ ' + esc(campo.itemLabel || 'Agregar') + '</button>' +
        '<div class="field-error">Agregá al menos uno/a.</div>' +
      '</div>'
    );
  }

  if (campo.tipo === 'sede') {
    var sedeVal = pieza.valores.lugar_sede || '';
    var otraDir = pieza.valores.lugar_sede_otra || '';
    var esOtra = sedeVal === 'Otra';
    return (
      '<div class="field' + errorClass + '" id="' + fid + '">' +
        '<label>' + campo.label + ' ' + req + '</label>' +
        '<select onchange="setSede(' + pieza.id + ', this.value)">' +
          '<option value="">— Seleccioná sede —</option>' +
          SEDES.map(function(s) {
            return '<option' + (sedeVal === s.label ? ' selected' : '') + ' value="' + esc(s.label) + '">' + s.label + ' — ' + s.dir + '</option>';
          }).join('') +
          '<option' + (esOtra ? ' selected' : '') + ' value="Otra">Otra</option>' +
        '</select>' +
        (esOtra
          ? '<input type="text" style="margin-top:6px" value="' + esc(otraDir) + '" ' +
              'placeholder="Ingresá la dirección completa" ' +
              'oninput="setValor(' + pieza.id + ', \'lugar_sede_otra\', this.value)">'
          : '') +
      '</div>'
    );
  }

  if (campo.tipo === 'imagen') {
    var uaObj = UNIDADES.find(function(u) { return u.nombre === (pieza.valores.ua || ''); });
    var sigla = uaObj ? uaObj.sigla.toLowerCase() : '[sigla-uuaa]';
    var items = campo.specs.items.map(function(s) {
      return '<li>' + s.replace('[uuaa]', sigla) + '</li>';
    }).join('');
    return (
      '<div class="field">' +
        '<label>' + campo.label + ' ' + req + '</label>' +
        '<div class="imagen-spec">' +
          '<strong>Especificaciones</strong>' +
          '<ul>' + items + '</ul>' +
        '</div>' +
        '<div style="font-size:12px;color:var(--muted);margin-top:8px;font-style:italic">La imagen se adjunta al mail cuando se envía el pedido al área de Contenidos y Diseño. En caso de no contar con una imagen, enviar referencias para que podamos hacer una propuesta orientada a los requisitos.</div>' +
      '</div>'
    );
  }

  if (campo.tipo === 'datetime') {
    var modo = pieza.valores[campo.id + '_modo'] || 'unica';
    var esVarias = modo === 'varias';

    var toggleFecha =
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">' +
        '<span style="font-size:12px;font-weight:600;color:' + (!esVarias ? 'var(--text)' : 'var(--muted)') + '">Fecha única</span>' +
        '<label class="toggle-switch">' +
          '<input type="checkbox"' + (esVarias ? ' checked' : '') + ' onchange="toggleFechaModo(' + pieza.id + ', \'' + campo.id + '\')">' +
          '<span class="toggle-track"></span>' +
        '</label>' +
        '<span style="font-size:12px;font-weight:600;color:' + (esVarias ? 'var(--text)' : 'var(--muted)') + '">Varias fechas</span>' +
      '</div>';

    var contenido = '';
    if (!esVarias) {
      var dVal = pieza.valores[campo.id + '_d'] || '';
      var tVal = pieza.valores[campo.id + '_t'] || '';
      var finVal = pieza.valores[campo.id + '_fin'] || '';
      contenido = renderFechaFila(pieza.id, campo.id, dVal, tVal, finVal, campo.conFin, null, campo.sinHora);
    } else {
      var varias = pieza.valores[campo.id + '_varias'] || [{ d: '', t: '', fin: '' }];
      contenido = varias.map(function(item, idx) {
        return (
          '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:8px;">' +
            '<div style="flex:1">' +
              renderFechaFila(pieza.id, campo.id, item.d || '', item.t || '', item.fin || '', campo.conFin, idx, campo.sinHora) +
            '</div>' +
            (varias.length > 1
              ? '<button class="btn-danger" style="margin-top:22px;flex-shrink:0" onclick="removeFechaVaria(' + pieza.id + ', \'' + campo.id + '\', ' + idx + ')">×</button>'
              : '') +
          '</div>'
        );
      }).join('') +
      '<button class="btn-small" style="margin-top:4px" onclick="addFechaVaria(' + pieza.id + ', \'' + campo.id + '\')">+ Agregar fecha</button>';
    }

    return (
      '<div class="field' + errorClass + '" id="' + fid + '">' +
        '<label>' + campo.label + ' ' + req + '</label>' +
        toggleFecha +
        contenido +
        '<div class="field-error">Indicá al menos la fecha y hora de inicio.</div>' +
      '</div>'
    );
  }

  if (campo.tipo === 'chips') {
    var opcChips = campo.opciones;
    if (campo.dependeDe) {
      var depVal = pieza.valores[campo.dependeDe] || '';
      opcChips = (campo.opcionesPorValor && campo.opcionesPorValor[depVal]) || null;
      if (!opcChips) return '';
    }
    var limpiarStr = '';
    if (campo.limpiaAl) {
      campo.limpiaAl.forEach(function(c) {
        limpiarStr += 'setValor(' + pieza.id + ', \'' + c + '\', \'\');';
      });
    }
    var subInput = '';
    if (campo.otroTexto && val === 'Otro') {
      var otroVal = pieza.valores[campo.id + '_otro'] || '';
      var otroCid = 'counter-' + pieza.id + '-' + campo.id + '_otro';
      var otroLen = otroVal.length;
      subInput = '<input type="text" style="margin-top:8px" value="' + esc(otroVal) + '" ' +
        'maxlength="30" placeholder="Especificá el tipo de actividad" ' +
        'oninput="setValor(' + pieza.id + ', \'' + campo.id + '_otro\', this.value); actualizarContador(\'' + otroCid + '\', this.value.length, 30);">' +
        '<div class="char-counter ' + contadorClass(otroLen, 30) + '" id="' + otroCid + '">' + otroLen + ' / 30</div>';
    } else if (campo.detalleEnOpcion && val === campo.detalleEnOpcion) {
      var detalleVal = pieza.valores[campo.id + '_detalle'] || '';
      subInput =
        '<div style="margin-top:8px;display:flex;flex-direction:column;gap:3px;">' +
          '<span style="font-size:12px;color:var(--muted)">' + campo.detalleLabel + '</span>' +
          '<input type="text" value="' + esc(detalleVal) + '" placeholder="' + esc(campo.detallePlaceholder) + '" ' +
            'oninput="setValor(' + pieza.id + ', \'' + campo.id + '_detalle\', this.value)">' +
        '</div>';
    }
    return (
      '<div class="field">' +
        '<label>' + campo.label + ' ' + req + '</label>' +
        (campo.hint ? '<div class="hint">' + campo.hint + '</div>' : '') +
        '<div class="chip-group">' +
          opcChips.map(function(op) {
            return '<button class="chip' + (val === op ? ' active' : '') +
              '" onclick="' + limpiarStr + 'setValor(' + pieza.id + ', \'' + campo.id + '\', \'' + op.replace(/'/g, "\\'") + '\'); render();">' + op + '</button>';
          }).join('') +
        '</div>' +
        subInput +
      '</div>'
    );
  }

  if (campo.tipo === 'select') {
    var esUA = campo.id === 'ua';
    var uaSeleccionada = esUA ? UNIDADES.find(function(u) { return u.nombre === val; }) : null;
    var colorBar = '';
    if (esUA && uaSeleccionada) {
      colorBar = '<div style="height:4px;background:' + uaSeleccionada.color + ';margin-top:4px;"></div>';
    }
    var opcionesHtml = '<option value="">— Seleccioná —</option>';
    if (esUA) {
      opcionesHtml += UNIDADES.map(function(u) {
        return '<option' + (val === u.nombre ? ' selected' : '') + ' value="' + esc(u.nombre) + '">' + u.nombre + '</option>';
      }).join('');
    } else {
      opcionesHtml += campo.opciones.map(function(op) {
        return '<option' + (val === op ? ' selected' : '') + ' value="' + esc(op) + '">' + op + '</option>';
      }).join('');
    }
    return (
      '<div class="field' + errorClass + '" id="' + fid + '">' +
        '<label>' + campo.label + ' ' + req + '</label>' +
        '<select onchange="setUA(' + pieza.id + ', this.value)">' +
          opcionesHtml +
        '</select>' +
        colorBar +
        '<div class="field-error">Este campo es obligatorio.</div>' +
      '</div>'
    );
  }

  var len = val.length;
  var max = campo.max || 0;
  var cc = max ? contadorClass(len, max) : '';
  var counterHtml = max ? '<div class="char-counter ' + cc + '" id="' + cid + '">' + len + ' / ' + max + '</div>' : '';
  var onInput = 'setValor(' + pieza.id + ', \'' + campo.id + '\', this.value);' +
    (max ? ' actualizarContador(\'' + cid + '\', this.value.length, ' + max + ');' : '');

  if (campo.tipo === 'textarea') {
    return (
      '<div class="field' + errorClass + '" id="' + fid + '">' +
        '<label>' + campo.label + ' ' + req + '</label>' +
        (campo.hint ? '<div class="hint">' + campo.hint + '</div>' : '') +
        '<textarea oninput="' + onInput + '">' + esc(val) + '</textarea>' +
        counterHtml +
        '<div class="field-error">Este campo es obligatorio.</div>' +
      '</div>'
    );
  }

  return (
    '<div class="field' + errorClass + '" id="' + fid + '">' +
      '<label>' + campo.label + ' ' + req + '</label>' +
      (campo.hint ? '<div class="hint">' + campo.hint + '</div>' : '') +
      '<input type="text" value="' + esc(val) + '" oninput="' + onInput + '" placeholder="">' +
      counterHtml +
      '<div class="field-error">Este campo es obligatorio.</div>' +
    '</div>'
  );
}

function renderColaboracion(pieza) {
  var conjunta = pieza.valores._conjunta || false;
  var externa = pieza.valores._externa || false;
  var uasConjuntas = pieza.valores._uas_conjuntas || [];
  var uaPrincipal = pieza.valores.ua || '';

  var chipsConjuntas = '';
  if (conjunta) {
    chipsConjuntas = '<div class="ua-chips-multi">';
    UNIDADES.forEach(function(u) {
      if (u.nombre === uaPrincipal || u.nombre === 'Otra') return;
      var activo = uasConjuntas.indexOf(u.nombre) !== -1;
      chipsConjuntas += '<button class="chip-ua' + (activo ? ' active' : '') +
        '" onclick="toggleUAConjunta(' + pieza.id + ', \'' + u.nombre.replace(/'/g, "\\'") + '\')">' +
        '<span class="ua-dot" style="background:' + u.color + '"></span>' +
        u.nombre + '</button>';
    });
    chipsConjuntas += '</div>';
    if (uasConjuntas.length === 0) {
      chipsConjuntas += '<div style="font-size:12px;color:var(--muted);margin-top:6px">Seleccioná una o más unidades.</div>';
    }
  }

  var camposExterna = '';
  if (externa) {
    var instituciones = pieza.valores._instituciones_externas || [{ nombre: '' }];
    var instHtml = instituciones.map(function(inst, i) {
      return (
        '<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">' +
          '<input type="text" style="flex:1" value="' + esc(inst.nombre || '') + '" ' +
            'placeholder="Ej: Centro Cultural Recoleta" ' +
            'oninput="setInstExterna(' + pieza.id + ', ' + i + ', this.value)">' +
          (instituciones.length > 1
            ? '<button class="btn-danger" onclick="removeInstExterna(' + pieza.id + ', ' + i + ')">×</button>'
            : '') +
        '</div>'
      );
    }).join('');

    camposExterna =
      '<div class="field" style="margin-top:10px">' +
        '<label>Nombre de la institución externa <span class="required-mark">*</span></label>' +
        instHtml +
        '<button class="btn-small" style="margin-top:2px" onclick="addInstExterna(' + pieza.id + ')">+ Agregar institución</button>' +
      '</div>' +
      '<div class="imagen-spec" style="margin-top:8px">' +
        '<strong>Logo de la institución externa</strong>' +
        '<ul>' +
          '<li>Formato: SVG o PNG con fondo transparente</li>' +
          '<li>Resolución mínima: 500 px en el lado más largo</li>' +
          '<li>Nomenclatura: 2025-logo-[nombre-institucion]</li>' +
        '</ul>' +
      '</div>' +
      '<div style="font-size:12px;color:var(--muted);margin-top:8px;font-style:italic">El logo se adjunta al mail cuando se envía el pedido al área de contenidos.</div>';
  }

  return (
    '<hr class="divider">' +
    '<div class="section-label">Colaboración</div>' +
    '<div class="colaboracion-block">' +
      '<div>' +
        '<div class="toggle-row">' +
          '<label class="toggle-switch">' +
            '<input type="checkbox" id="conj-' + pieza.id + '"' + (conjunta ? ' checked' : '') +
              ' onchange="toggleColaboracion(' + pieza.id + ', \'_conjunta\', this.checked)">' +
            '<span class="toggle-track"></span>' +
          '</label>' +
          '<label for="conj-' + pieza.id + '">Actividad conjunta con otra/s unidades académicas de la UNA</label>' +
        '</div>' +
        chipsConjuntas +
      '</div>' +
      '<div>' +
        '<div class="toggle-row">' +
          '<label class="toggle-switch">' +
            '<input type="checkbox" id="ext-' + pieza.id + '"' + (externa ? ' checked' : '') +
              ' onchange="toggleColaboracion(' + pieza.id + ', \'_externa\', this.checked)">' +
            '<span class="toggle-track"></span>' +
          '</label>' +
          '<label for="ext-' + pieza.id + '">Participación de institución externa</label>' +
        '</div>' +
        camposExterna +
      '</div>' +
    '</div>'
  );
}

function setUA(pieceId, uaNombre) {
  setValor(pieceId, 'ua', uaNombre);
  setValor(pieceId, '_dependencia', '');
  var sedeDefault = SEDE_DEFAULT[uaNombre];
  if (sedeDefault) {
    setValor(pieceId, 'lugar_sede', sedeDefault);
    setValor(pieceId, 'lugar_sede_otra', '');
  }
  render();
}

function setSede(pieceId, valor) {
  setValor(pieceId, 'lugar_sede', valor);
  if (valor !== 'Otra') setValor(pieceId, 'lugar_sede_otra', '');
  render();
}

function toggleColaboracion(pieceId, campo, valor) {
  setValor(pieceId, campo, valor);
  if (campo === '_externa' && valor) {
    var pieza = piezas.find(function(p) { return p.id === pieceId; });
    if (pieza && !pieza.valores._instituciones_externas) {
      pieza.valores._instituciones_externas = [{ nombre: '' }];
    }
  }
  render();
}

function toggleUAConjunta(pieceId, uaNombre) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var lista = pieza.valores._uas_conjuntas || [];
  var idx = lista.indexOf(uaNombre);
  if (idx === -1) lista.push(uaNombre);
  else lista.splice(idx, 1);
  pieza.valores._uas_conjuntas = lista;
  render();
}

function addListaItem(pieceId, campoId) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  if (!pieza.valores[campoId]) pieza.valores[campoId] = [];
  pieza.valores[campoId].push({ nombre: '' });
  render();
}

function removeListaItem(pieceId, campoId, idx) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var lista = pieza.valores[campoId] || [];
  lista.splice(idx, 1);
  pieza.valores[campoId] = lista;
  render();
}

function setListaItem(pieceId, campoId, idx, valor) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  if (!pieza.valores[campoId]) pieza.valores[campoId] = [{ nombre: '' }];
  var lista = pieza.valores[campoId];
  if (lista[idx]) lista[idx].nombre = valor;
}

function addInstExterna(pieceId) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var lista = pieza.valores._instituciones_externas || [];
  lista.push({ nombre: '' });
  pieza.valores._instituciones_externas = lista;
  render();
}

function removeInstExterna(pieceId, idx) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var lista = pieza.valores._instituciones_externas || [];
  lista.splice(idx, 1);
  pieza.valores._instituciones_externas = lista;
  render();
}

function setInstExterna(pieceId, idx, valor) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var lista = pieza.valores._instituciones_externas || [];
  if (lista[idx]) lista[idx].nombre = valor;
  pieza.valores._instituciones_externas = lista;
}

function renderFechaFila(pieceId, campoId, dVal, tVal, finVal, conFin, variaIdx, sinHora) {
  var setD = variaIdx !== null
    ? 'setFechaVaria(' + pieceId + ', \'' + campoId + '\', ' + variaIdx + ', \'d\', this.value)'
    : 'setValor(' + pieceId + ', \'' + campoId + '_d\', this.value)';
  var setT = variaIdx !== null
    ? 'setFechaVaria(' + pieceId + ', \'' + campoId + '\', ' + variaIdx + ', \'t\', this.value)'
    : 'setValor(' + pieceId + ', \'' + campoId + '_t\', this.value)';
  var setFin = variaIdx !== null
    ? 'setFechaVaria(' + pieceId + ', \'' + campoId + '\', ' + variaIdx + ', \'fin\', this.value)'
    : 'setValor(' + pieceId + ', \'' + campoId + '_fin\', this.value)';

  var horaRow = sinHora ? '' : conFin
    ? '<div style="display:flex;gap:8px;margin-top:6px;">' +
        '<div style="display:flex;flex-direction:column;gap:3px;flex:1">' +
          '<span style="font-size:11px;color:var(--muted)">Inicio <span class="required-mark">*</span></span>' +
          '<input type="time" value="' + esc(tVal) + '" onclick="try{this.showPicker();}catch(e){}" oninput="' + setT + '">' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:3px;flex:1">' +
          '<span style="font-size:11px;color:var(--muted)">Fin (opcional)</span>' +
          '<input type="time" value="' + esc(finVal) + '" onclick="try{this.showPicker();}catch(e){}" oninput="' + setFin + '">' +
        '</div>' +
      '</div>'
    : '<input type="time" style="width:130px;margin-top:6px" value="' + esc(tVal) + '" onclick="try{this.showPicker();}catch(e){}" oninput="' + setT + '">';

  return (
    '<input type="date" style="width:100%" value="' + esc(dVal) + '" onclick="try{this.showPicker();}catch(e){}" oninput="' + setD + '">' +
    horaRow
  );
}

function toggleFechaModo(pieceId, campoId) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var esVarias = (pieza.valores[campoId + '_modo'] || 'unica') === 'varias';
  pieza.valores[campoId + '_modo'] = esVarias ? 'unica' : 'varias';
  if (!esVarias && (!pieza.valores[campoId + '_varias'] || pieza.valores[campoId + '_varias'].length === 0)) {
    pieza.valores[campoId + '_varias'] = [{
      d: pieza.valores[campoId + '_d'] || '',
      t: pieza.valores[campoId + '_t'] || '',
      fin: pieza.valores[campoId + '_fin'] || ''
    }];
  }
  render();
}

function addFechaVaria(pieceId, campoId) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var lista = pieza.valores[campoId + '_varias'] || [];
  lista.push({ d: '', t: '', fin: '' });
  pieza.valores[campoId + '_varias'] = lista;
  render();
}

function removeFechaVaria(pieceId, campoId, idx) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var lista = pieza.valores[campoId + '_varias'] || [];
  lista.splice(idx, 1);
  pieza.valores[campoId + '_varias'] = lista;
  render();
}

function setFechaVaria(pieceId, campoId, idx, key, value) {
  var pieza = piezas.find(function(p) { return p.id === pieceId; });
  if (!pieza) return;
  var lista = pieza.valores[campoId + '_varias'] || [];
  if (lista[idx]) lista[idx][key] = value;
  pieza.valores[campoId + '_varias'] = lista;
}

function contadorClass(len, max) {
  if (len > max) return 'char-over';
  if (len > max * 0.8) return 'char-warn';
  return 'char-ok';
}

function actualizarContador(id, len, max) {
  var el = document.getElementById(id);
  if (!el) return;
  el.textContent = len + ' / ' + max;
  el.className = 'char-counter ' + contadorClass(len, max);
}

function formatFechaHoraES(fechaISO, horaISO, finISO) {
  var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  var partes = fechaISO ? fechaISO.split('-') : [];
  var fechaStr = '';
  if (partes.length === 3) {
    fechaStr = parseInt(partes[2], 10) + ' de ' + meses[parseInt(partes[1], 10) - 1];
  }
  var horaStr = '';
  if (horaISO && finISO) horaStr = horaISO + ' – ' + finISO + ' h';
  else if (horaISO) horaStr = horaISO + ' h';
  if (fechaStr && horaStr) return fechaStr + ' | ' + horaStr;
  return fechaStr || horaStr;
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── output ────────────────────────────────────────────────────────────────────

function generateOutput() {
  var errores = false;

  piezas.forEach(function(pieza) {
    if (!pieza.tipo) { errores = true; return; }
    var config = TIPOS[pieza.tipo];
    config.campos.forEach(function(campo) {
      if (campoTieneError(pieza, campo)) errores = true;
    });
    if (!pieza.valores.deadline) errores = true;
  });

  if (errores) {
    pedidoIntentado = true;
    piezas.forEach(function(pieza) {
      if (!pieza.collapsed) return;
      if (!pieza.tipo) { pieza.collapsed = false; return; }
      var config = TIPOS[pieza.tipo];
      var tieneError = config.campos.some(function(campo) { return campoTieneError(pieza, campo); }) || !pieza.valores.deadline;
      if (tieneError) pieza.collapsed = false;
    });
    render();
    setTimeout(function() {
      var el = document.querySelector('.field.has-error');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
    return;
  }

  var ahora = new Date();
  var fecha = ahora.toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' });
  var pad = function(n) { return n.toString().padStart(2, '0'); };
  var idFecha = ahora.getFullYear().toString() +
    pad(ahora.getMonth() + 1) + pad(ahora.getDate()) + '_' +
    pad(ahora.getHours()) + pad(ahora.getMinutes());
  var uaKey = sessionStorage.getItem('una_ua');
  var uaInfoGlobal = window.UA_INFO && window.UA_INFO[uaKey];
  var siglaID = uaInfoGlobal ? uaInfoGlobal.sigla : 'UNA';
  var pedidoID = window.pedidoActualID || ('PEDIDO-' + siglaID + '-' + idFecha);
  window.pedidoActualID = pedidoID;

  var sep = '─'.repeat(48);
  var sep2 = '─'.repeat(32);

  var txt = 'PEDIDO DE PIEZAS GRÁFICAS — UNA\n';
  txt += 'ID: ' + pedidoID + '\n';
  txt += 'Fecha del pedido: ' + fecha + '\n';
  txt += sep + '\n\n';

  var advertencias = [];

  piezas.forEach(function(pieza, idx) {
    var config = TIPOS[pieza.tipo];
    txt += 'PIEZA ' + (idx + 1) + ' · ' + config.label.toUpperCase() + '\n';
    txt += sep2 + '\n';
    txt += '<strong>Formato:</strong> ' + (pieza.esCarrusel ? 'Carrusel' : 'Placa simple') + '\n\n';

    config.campos.forEach(function(campo) {
      if (campo.soloCarrusel && !pieza.esCarrusel) return;
      if (campo.tipo === 'imagen') {
        var uaObj2 = UNIDADES.find(function(u) { return u.nombre === (pieza.valores.ua || ''); });
        var sigla2 = uaObj2 ? uaObj2.sigla.toLowerCase() : '[sigla-uuaa]';
        txt += '<strong>' + campo.label + '</strong>\n';
        campo.specs.items.forEach(function(s) {
          txt += '  · ' + s.replace('[uuaa]', sigla2) + '\n';
        });
        txt += '  <strong>Adjuntar al enviar el pedido por mail.</strong>\n';
      } else if (campo.id === 'ua') {
        var val = pieza.valores[campo.id];
        if (val) {
          var uaRef = UNIDADES.find(function(u) { return u.nombre === val; });
          txt += '<strong>Unidad Académica:</strong> ' + esc(val);
          if (uaRef) txt += ' (' + uaRef.sigla + ')';
          txt += '\n';
          if (pieza.valores._dependencia) {
            txt += '<strong>Secretaría / Dependencia:</strong> ' + esc(pieza.valores._dependencia) + '\n';
          }
          var uasConjUA = pieza.valores._uas_conjuntas;
          if (uasConjUA && uasConjUA.length > 0) {
            txt += '<strong>Actividad conjunta con:</strong> ' + uasConjUA.join(', ') + '\n';
          }
          if (pieza.valores._externa) {
            var instsUA = pieza.valores._instituciones_externas || [];
            instsUA.forEach(function(inst) {
              if (inst.nombre) {
                txt += '<strong>Institución externa:</strong> ' + esc(inst.nombre) + '\n';
                txt += '  Logo: adjuntar al enviar el pedido por mail.\n';
              }
            });
          }
        }
      } else if (campo.tipo === 'datetime') {
        var modoOut = pieza.valores[campo.id + '_modo'] || 'unica';
        if (modoOut === 'varias') {
          var variasOut = pieza.valores[campo.id + '_varias'] || [];
          if (variasOut.length > 0) {
            txt += '<strong>' + campo.label + ':</strong>\n';
            variasOut.forEach(function(f) {
              if (f.d || f.t) txt += '  · ' + formatFechaHoraES(f.d, f.t, f.fin) + '\n';
            });
          }
        } else {
          var dv = pieza.valores[campo.id + '_d'];
          var tv = pieza.valores[campo.id + '_t'];
          var finv = pieza.valores[campo.id + '_fin'];
          if (dv || tv) txt += '<strong>' + campo.label + ':</strong> ' + formatFechaHoraES(dv, tv, finv) + '\n';
        }
      } else if (campo.tipo === 'sede') {
        var sedeNombre = pieza.valores.lugar_sede;
        if (sedeNombre) {
          if (sedeNombre === 'Otra') {
            txt += '<strong>' + campo.label + ':</strong> ' + esc(pieza.valores.lugar_sede_otra || 'dirección no especificada') + '\n';
          } else {
            var sedeObj = SEDES.find(function(s) { return s.label === sedeNombre; });
            txt += '<strong>' + campo.label + ':</strong> ' + sedeNombre + (sedeObj ? ' — ' + sedeObj.dir : '') + '\n';
          }
        }
      } else if (campo.tipo === 'lista') {
        var itemsLista = pieza.valores[campo.id] || [];
        var llenos = itemsLista.filter(function(it) { return it.nombre && it.nombre.trim(); });
        if (llenos.length > 0) {
          txt += '<strong>' + campo.label + ':</strong>\n';
          llenos.forEach(function(it) { txt += '  · ' + esc(it.nombre) + '\n'; });
        }
      } else {
        var val = pieza.valores[campo.id];
        if (campo.dependeDe) {
          var depValOut = pieza.valores[campo.dependeDe] || '';
          var opcOut = campo.opcionesPorValor ? campo.opcionesPorValor[depValOut] : null;
          if (!opcOut) return;
        }
        if (val) {
          var valMostrar = esc(val);
          if (campo.otroTexto && val === 'Otro' && pieza.valores[campo.id + '_otro']) {
            valMostrar = 'Otro — ' + esc(pieza.valores[campo.id + '_otro']);
          }
          txt += '<strong>' + campo.label + ':</strong> ' + valMostrar + '\n';
          if (campo.detalleEnOpcion && val === campo.detalleEnOpcion && pieza.valores[campo.id + '_detalle']) {
            txt += '  <strong>' + campo.detalleLabel + ':</strong> ' + esc(pieza.valores[campo.id + '_detalle']) + '\n';
          }
          if (campo.max && val.length > campo.max) {
            txt += '  ⚠ Excede límite: ' + val.length + '/' + campo.max + ' caracteres\n';
            advertencias.push('Pieza ' + (idx + 1) + ' · ' + campo.label + ' (' + val.length + '/' + campo.max + ' chars)');
          }
        }
      }
    });

    if (pieza.valores.obs) txt += '\n<strong>Observaciones:</strong> ' + esc(pieza.valores.obs) + '\n';
    if (pieza.valores.deadline) {
      var dlP = pieza.valores.deadline.split('-');
      var mDL = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
      txt += '<strong>Fecha límite:</strong> ' + parseInt(dlP[2], 10) + ' de ' + mDL[parseInt(dlP[1], 10) - 1] + ' de ' + dlP[0] + '\n';
    }
    txt += '\n';
  });

  txt += sep + '\n';
  txt += '<strong>Total de piezas solicitadas:</strong> ' + piezas.length + '\n';

  if (advertencias.length > 0) {
    txt += '\n⚠ CAMPOS QUE EXCEDEN EL LÍMITE (revisar antes de enviar a diseño):\n';
    advertencias.forEach(function(a) { txt += '  · ' + a + '\n'; });
  }

  document.getElementById('outputText').innerHTML = txt;
  var idEl = document.getElementById('output-id');
  if (idEl) idEl.textContent = pedidoID;
  var sec = document.getElementById('outputSection');
  sec.style.display = 'block';
  sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('btn-generar').disabled = true;
  var btnAgregar = document.querySelector('.actions-bar .btn-primary');
  if (btnAgregar) btnAgregar.disabled = true;
  document.getElementById('piecesList').setAttribute('inert', '');
}

function editarPedido() {
  document.getElementById('outputSection').style.display = 'none';
  document.getElementById('btn-generar').disabled = false;
  var btnAgregar = document.querySelector('.actions-bar .btn-primary');
  if (btnAgregar) btnAgregar.disabled = false;
  document.getElementById('piecesList').removeAttribute('inert');
  document.getElementById('piecesList').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function copyOutput() {
  var txt = document.getElementById('outputText').innerText;
  navigator.clipboard.writeText(txt).then(function() {
    var btn = event.target;
    var original = btn.textContent;
    btn.textContent = 'Copiado';
    setTimeout(function() { btn.textContent = original; }, 2000);
  });
}

// ── arranque ──────────────────────────────────────────────────────────────────
init();
