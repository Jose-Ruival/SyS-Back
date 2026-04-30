import Docxtemplater from 'docxtemplater';
import Pizzip from 'pizzip';
import fs from 'fs';
import path from 'path';

import { Injectable } from '@nestjs/common';

@Injectable()
export class documentService {
  generateDocument() {
    const content = fs.readFileSync(
      path.resolve('src', 'document', 'templates', 'template_renovacion.docx'),
      'binary',
    );

    const zip = new Pizzip(content);

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Datos momentaneos, los puse mas que nada por que todavia no tengo la parte de la base de datos lista
    doc.render({
      fecha: '01/01/2025',
      apellido: 'García',
      nombre: 'Juan',
      cuño: 'CU-001',
      DNI: '12345678',
      empresaPresentadora: 'Acme S.A.',
      procesoSoldadura: 'SMAW',
      especificacion: 'AWS D1.1',
      fechaDeRenovacion: '01/01/2025',
      fechaOriginal: '01/01/2020',
      fechaAnteriorDesde: '01/01/2022',
      fechaAnteriorHasta: '01/01/2024',
      fechaRenovadaDesde: '01/01/2025',
      fechaRenovadaHasta: '01/01/2027',
      nroRenovacion: 'R-001',
      registroVerificador: 'RV-001',
      nroDeCertificado: 'CERT-001',
      observaciones: 'Sin observaciones',
      nroCertificadoRenovado: 'CERT-002',
      nroCertificadoOriginal: 'CERT-001',
    });

    const buf = doc.getZip().generate({ type: 'nodebuffer' });

    fs.writeFileSync(path.resolve('output', 'finishedDocument.docx'), buf);
  }
}
