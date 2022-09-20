import Game, {GenerateLinesAction, Item} from "./game";

import reducer, {
  buyItem,
  increment,
  generateLines,
  State,
  SelectableStates,
  linesSelector
} from './game';

describe('Game', () => {
  it('should be defined', () => {
    expect(Game).toBeDefined();
  });

  it('should be increment', function () {
    const initialState: State = {
      lines: 0,
      ownedItems: [],
      linesPerSecond: 0
    };

    const state = reducer(initialState, increment());
    expect(state.lines).toEqual(1 );
  });

  it('should generate lines', function () {
    const initialState: State = {
      lines: 5,
      ownedItems: [],
      linesPerSecond: 0
    };

    const payload: GenerateLinesAction['payload'] = {
      lines: 10
    }

    const state = reducer(initialState, generateLines(payload));
    expect(state.lines).toEqual(15);
  });

  it('should buy item', function () {
    const initialState: State = {
      lines: 50,
      ownedItems: [],
      linesPerSecond: 10
    };

    const item:Item = {
      name: 'My item',
      cost: 10,
      multiplier: 2
    }

    const state = reducer(initialState, buyItem({item}));
    expect(state.lines).toEqual(40);
    expect(state.linesPerSecond).toEqual(12);
  });
})