import { IsString } from 'class-validator';

export class DocumentDto {
  @IsString()
  fecha: string;

  @IsString()
  apellido: string;

  @IsString()
  nombre: string;

  @IsString()
  cuño: string;

  @IsString()
  DNI: string;

  @IsString()
  empresaPresentadora: string;

  @IsString()
  procesoSoldadura: string;

  @IsString()
  especificacion: string;

  @IsString()
  fechaDeRenovacion: string;

  @IsString()
  fechaOriginal: string;

  @IsString()
  fechaAnteriorDesde: string;

  @IsString()
  fechaAnteriorHasta: string;

  @IsString()
  fechaRenovadaDesde: string;

  @IsString()
  fechaRenovadaHasta: string;

  @IsString()
  nroRenovacion: string;

  @IsString()
  registroVerificador: string;

  @IsString()
  nroDeCertificado: string;

  @IsString()
  observaciones: string;

  @IsString()
  nroCertificadoRenovado: string;

  @IsString()
  nroCertificadoOriginal: string;
}
