import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Preset } from './preset.entity';

@Entity()
export class PresetKeyboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  buttonsCount: number;

  @Column({ type: 'integer' })
  maxButtonLength: number;

  @Column({ type: 'bool' })
  urlButtonsAllowed: boolean;

  @OneToOne(() => Preset, (preset) => preset.presetKeyboard, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  preset: Preset;
}
