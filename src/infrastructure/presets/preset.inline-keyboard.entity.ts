import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Preset } from './preset.entity';

@Entity()
export class PresetInlineKeyboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  buttonsNumber: number;

  @Column({ type: 'integer' })
  maximumButtonLength: number;

  @Column({ type: 'bool' })
  urlButtonsAllowed: boolean;

  @OneToOne(() => Preset, (preset) => preset.presetInlineKeyboard, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  preset: Preset;
}
