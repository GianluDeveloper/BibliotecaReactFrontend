// Biblioteca
export interface Cliente {
  idCliente: number;
  nome: string;
  cognome: string;
  telefono: string;
}

export interface Dipendente {
  matricola: number;
  nome: string;
  cognome: string;
  telefono: string;
  admin: boolean;
}

export interface Turno {
  idTurni: number;
  idDipendente: number;
  data_inizio: string;
  data_fine: string;
}

export interface Libro {
  idLibro: number;
  numPagine: number;
  anno: number;
  posizione: number;
  titolo: string;
  genere: string;
  autore: string;
  isbn: string;
  casaEditrice: string;
}
export interface RegistroLibri {
  id: number;
  idLibro: number;
  idCliente: number;
  idDipendente: number;
  data_prestito: string;
  data_scadenza: string;
  data_rientro: string;
}

// e-wallet
export interface TipoMovimento {
  idTipoMovimento: number;
  descrizione: string;
}
export interface Movimento {
  id: number;
  iban: number;
  importo: number;
  dataMovimento: string;
  idTipoMovimento: number;
}
export interface ContoCorrente {
  iban: number;
  idCliente: number;
  saldo: number;
  dataCreazione: string;
}
// corsi
export interface Corso {
  idCorso: number;
  nomeCorso: string;
  dataInizio: string;
  dataFine: string;
}
export interface Docente {
  idDocente: number;
  idCorso: number;
  nomeDocente: string;
}

export interface Iscrizione {
  idIscrizione: number;
  idDipendente: number;
  idDocente: number;
  idCorso: number;
}
