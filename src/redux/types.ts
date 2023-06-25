type ActionGetCards = {
  type: 'GET_CARDS';
  payload: { data: string[] };
};

export type Action = ActionGetCards;
