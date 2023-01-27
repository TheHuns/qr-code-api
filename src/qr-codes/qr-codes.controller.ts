import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { QrCodesService } from './qr-codes.service';
import { CreateQrCodeDto } from './dto/create-qr-code.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('qr-codes')
export class QrCodesController {
  constructor(private readonly qrCodesService: QrCodesService) {}

  @ApiCreatedResponse()
  @Post()
  create(@Body() createQrCodeDto: CreateQrCodeDto) {
    return this.qrCodesService.createCode(createQrCodeDto);
  }

  @ApiOkResponse()
  @Get()
  findAll() {
    return this.qrCodesService.findAll();
  }

  @ApiOkResponse()
  @Get('validate-code/:id')
  validateCode(@Param('id', ParseIntPipe) id: number) {
    return this.qrCodesService.validateCode(id);
  }
}
