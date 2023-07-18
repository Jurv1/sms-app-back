import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preset } from '../../infrastructure/presets/preset.entity';
import { PresetKeyboard } from '../../infrastructure/presets/preset.keyboard.entity';
import { PresetInlineKeyboard } from '../../infrastructure/presets/preset.inline-keyboard.entity';
import { PresetsController } from './presets.controller';
import { allUseCasesForPresets } from '../../consts/use-cases/all.use-cases.for.presets';

@Module({
  imports: [
    TypeOrmModule.forFeature([Preset, PresetKeyboard, PresetInlineKeyboard]),
    CqrsModule,
  ],
  controllers: [PresetsController],
  providers: [...allUseCasesForPresets],
})
export class PresetsModule {}
