import { CreateNewPresetUseCase } from '../../use-cases/command.use-cases/create.new.preset.use-case';
import { DeletePresetByIdUseCase } from '../../use-cases/command.use-cases/delete.preset.by.id.use-case';
import { UpdatePresetUseCase } from '../../use-cases/command.use-cases/update.preset.use-case';
import { GetAllPresetsQueryUseCase } from '../../use-cases/query.use-cases/get.all.presets.query.use-case';

export const allUseCasesForPresets = [
  CreateNewPresetUseCase,
  DeletePresetByIdUseCase,
  UpdatePresetUseCase,
  GetAllPresetsQueryUseCase,
];
