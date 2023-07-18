import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { PresetEnum } from '../enums/preset.enum';
import { Transform } from 'class-transformer';

export class PresetInputDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(PresetEnum)
  company: PresetEnum;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value?.trim())
  @Length(1, 4096)
  text: string;
}
