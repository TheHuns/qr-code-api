import { Injectable } from '@nestjs/common';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';
import { ValidateCodeResponse } from './dto/validate-code-response.dto';
import { QrCode } from './entities/qr-code.entity';
const FIVE_MINUTES_MILLISECONDS = 300000;
@Injectable()
export class QrCodesService {
  private codes: QrCode[] = [];

  createCode(createQrCodeDto: CreateQrCodeDto) {
    const updatedCodes = this.codes.map((code: QrCode) => ({
      ...code,
      isValid: false,
    }));

    this.codes = [...updatedCodes, createQrCodeDto];
    return createQrCodeDto;
  }

  findAll(): QrCode[] {
    return this.codes;
  }
  validateCode(id: number): ValidateCodeResponse {
    const code = this.codes.find((code) => code.createdAt === id);
    if (
      !code ||
      !code.isValid ||
      code.createdAt + FIVE_MINUTES_MILLISECONDS < Date.now()
    )
      return {
        hasError: true,
        errorMessage: 'Code not found or expired',
        userId: null,
      };
    return { hasError: false, userId: code.userId, errorMessage: '' };
  }
}
