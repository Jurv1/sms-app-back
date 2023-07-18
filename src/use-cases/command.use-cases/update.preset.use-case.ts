import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Preset } from '../../infrastructure/presets/preset.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

export class UpdatePresetCommand {
  constructor(public message: string, public messengerId: number) {}
}

@CommandHandler(UpdatePresetCommand)
@Injectable()
export class UpdatePresetUseCase
  implements ICommandHandler<UpdatePresetCommand>
{
  constructor(
    @InjectRepository(Preset) private readonly presetRepo: Repository<Preset>,
  ) {}

  async execute(command: UpdatePresetCommand): Promise<boolean> {
    const updated = await this.presetRepo
      .createQueryBuilder('p')
      .update(Preset)
      .set({ messageText: command.message })
      .where('p.id = :id', { id: command.messengerId })
      .execute();

    return updated.affected === 1;
  }
}
