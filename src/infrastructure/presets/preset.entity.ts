import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PresetEnum } from '../../enums/preset.enum';
import { PresetKeyboard } from './preset.keyboard.entity';
import { PresetInlineKeyboard } from './preset.inline-keyboard.entity';

@Entity()
export class Preset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  messengerName: PresetEnum;

  @Column({ type: 'varchar', length: 4096 })
  messageText: string;

  @OneToOne(() => PresetKeyboard, (presetK) => presetK.preset)
  presetKeyboard: PresetKeyboard;

  @OneToOne(() => PresetInlineKeyboard, (presetIK) => presetIK.preset)
  presetInlineKeyboard: PresetInlineKeyboard;
}
