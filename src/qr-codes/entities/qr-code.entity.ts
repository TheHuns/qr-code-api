import { ApiProperty } from '@nestjs/swagger';

export class QrCode {
  @ApiProperty()
  dataUrl: string;

  @ApiProperty()
  createdAt: number;

  @ApiProperty()
  isValid: boolean;

  @ApiProperty()
  userId: number;
}
