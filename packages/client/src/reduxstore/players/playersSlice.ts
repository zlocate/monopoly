import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Config } from '../../components/gameSetup/const';
import { IConfig } from '../../components/gameSetup/gameSetup';

const initialState: IConfig[] = [];

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayerAction(state, action: PayloadAction<IConfig>) {
      const name = action.payload[Config.NAME];
      const type = action.payload[Config.TYPE];
      const color = action.payload[Config.COLOR];

      state.push({
        name,
        type,
        color,
      });
    },
  },
});

export const { addPlayerAction } = playersSlice.actions;

export default playersSlice.reducer;
