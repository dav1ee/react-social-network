import { InferActionsType } from '../';

export type ActionsTypes = InferActionsType<typeof actionCreators>;

export const actionCreators = {
  sendMessage: (messageText: string) =>
    ({
      type: 'SEND_MESSAGE',
      payload: messageText,
    } as const),
};
