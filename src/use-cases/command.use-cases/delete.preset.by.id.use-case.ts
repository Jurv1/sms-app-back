import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Preset } from '../../infrastructure/presets/preset.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

export class DeletePresetByIdCommand {
  constructor(public presetId: number) {}
}

@CommandHandler(DeletePresetByIdCommand)
@Injectable()
export class DeletePresetByIdUseCase
  implements ICommandHandler<DeletePresetByIdCommand>
{
  constructor(
    @InjectRepository(Preset) private readonly presetRepo: Repository<Preset>,
  ) {}

  async execute(command: DeletePresetByIdCommand) {
    const result = await this.presetRepo
      .createQueryBuilder('p')
      .delete()
      .from(Preset)
      .where('id = :id', { id: command.presetId })
      .execute();

    return result.affected === 1;
  }
}
