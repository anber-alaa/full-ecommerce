import * as migration_20251225_151512_initial from './20251225_151512_initial';

export const migrations = [
  {
    up: migration_20251225_151512_initial.up,
    down: migration_20251225_151512_initial.down,
    name: '20251225_151512_initial'
  },
];
