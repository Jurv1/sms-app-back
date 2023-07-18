import { IsNotEmpty, IsString } from 'class-validator';

export class PresetUpdateDto {
  @IsNotEmpty()
  @IsString()
  message: string;
}
