import { KeyboardInputType } from '../types.and.interfaces/types/keyboard.input.type';

export const presetsKeyBoardsSetups: { [key: string]: KeyboardInputType } = {
  ВКонтакте: {
    buttonsCount: 40,
    maxButtonL: 4096,
    urlButtonsAllowed: true,
  },
  WhatsApp: {
    buttonsCount: 10,
    maxButtonL: 20,
    urlButtonsAllowed: false,
  },
  Telegram: {
    buttonsCount: 100,
    maxButtonL: 4096,
    urlButtonsAllowed: false,
  },
  SMS: {
    buttonsCount: 0,
    maxButtonL: 0,
    urlButtonsAllowed: false,
  },
};
