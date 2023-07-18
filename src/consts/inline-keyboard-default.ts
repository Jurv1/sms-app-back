import { InlineKeyboardInputType } from '../types.and.interfaces/types/inline-keyboard.input.type';

export const presetsInlineKeyBoardsSetups: {
  [key: string]: InlineKeyboardInputType;
} = {
  ВКонтакте: {
    buttonsNumber: 10,
    maxButtonL: 128,
    urlButtonsAllowed: true,
  },
  WhatsApp: {
    buttonsNumber: 3,
    maxButtonL: 20,
    urlButtonsAllowed: false,
  },
  Telegram: {
    buttonsNumber: 100,
    maxButtonL: 64,
    urlButtonsAllowed: true,
  },
  SMS: {
    buttonsNumber: 0,
    maxButtonL: 0,
    urlButtonsAllowed: false,
  },
};
