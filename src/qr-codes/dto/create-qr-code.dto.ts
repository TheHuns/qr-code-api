import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreateQrCodeDto {
  @ApiProperty()
  dataUrl: string;

  @ApiProperty()
  @IsNumber()
  createdAt: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  @IsBoolean()
  isValid: boolean;
}
