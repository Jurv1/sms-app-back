import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Preset } from '../../infrastructure/presets/preset.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

export class GetAllPresetsQueryCommand {}

@QueryHandler(GetAllPresetsQueryCommand)
@Injectable()
export class GetAllPresetsQueryUseCase
  implements IQueryHandler<GetAllPresetsQueryCommand>
{
  constructor(
    @InjectRepository(Preset) private readonly presetRepo: Repository<Preset>,
  ) {}

  async execute() {
    return await this.presetRepo.find({
      relations: {
        presetKeyboard: true,
        presetInlineKeyboard: true,
      },
    });
  }
}
