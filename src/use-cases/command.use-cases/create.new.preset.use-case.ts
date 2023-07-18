import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PresetInputDto } from '../../dto/preset.input.dto';
import { presetsKeyBoardsSetups } from '../../consts/keyboard-default';
import { presetsInlineKeyBoardsSetups } from '../../consts/inline-keyboard-default';
import { Preset } from '../../infrastructure/presets/preset.entity';
import { PresetInlineKeyboard } from '../../infrastructure/presets/preset.inline-keyboard.entity';
import { PresetKeyboard } from '../../infrastructure/presets/preset.keyboard.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

export class CreateNewPresetCommand {
  constructor(public presetInput: PresetInputDto) {}
}

@CommandHandler(CreateNewPresetCommand)
@Injectable()
export class CreateNewPresetUseCase
  implements ICommandHandler<CreateNewPresetCommand>
{
  constructor(
    @InjectRepository(Preset) private readonly presetRepo: Repository<Preset>,
    @InjectRepository(PresetKeyboard)
    private readonly keyboardRepo: Repository<PresetKeyboard>,
    @InjectRepository(PresetInlineKeyboard)
    private readonly inlineRepo: Repository<PresetInlineKeyboard>,
  ) {}

  async execute(command: CreateNewPresetCommand) {
    const messengerName = command.presetInput.company;

    const keyboardPreset = presetsKeyBoardsSetups[messengerName];
    const inlineKeyboardPreset = presetsInlineKeyBoardsSetups[messengerName];

    const preset = new Preset();
    preset.messengerName = command.presetInput.company;
    preset.messageText = command.presetInput.text;
    const createdPreset: Preset = await this.presetRepo.save(preset);

    const presetInline = new PresetInlineKeyboard();
    presetInline.preset = createdPreset;
    presetInline.buttonsNumber = inlineKeyboardPreset.buttonsNumber;
    presetInline.maximumButtonLength = inlineKeyboardPreset.maxButtonL;
    presetInline.urlButtonsAllowed = inlineKeyboardPreset.urlButtonsAllowed;
    await this.inlineRepo.save(presetInline);

    const presetKeyboard = new PresetKeyboard();
    presetKeyboard.preset = createdPreset;
    presetKeyboard.buttonsCount = keyboardPreset.buttonsCount;
    presetKeyboard.maxButtonLength = keyboardPreset.maxButtonL;
    presetKeyboard.urlButtonsAllowed = keyboardPreset.urlButtonsAllowed;
    await this.keyboardRepo.save(presetKeyboard);

    return preset;
  }
}
