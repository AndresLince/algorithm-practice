import { EJC7, VillageState } from "./EloquentJavascriptChapter7";

describe('EloquetJavascriptChapter7', () => {
    test('should return a valid response for compareRobots()', () => {
        let averages = EJC7.compareRobots(EJC7.routeRobot, [], EJC7.goalOrientedRobot, []);
        expect(averages).toHaveProperty("average1");
        expect(averages).toHaveProperty("average2");
    })
    test('should return a valid response for compareRobots()', () => {
        let numberOfTurns = EJC7.runRobot(VillageState.random(), EJC7.randomRobot, []);
        expect(isNaN(numberOfTurns)).toBe(false);
        expect(numberOfTurns > 0).toBe(true);
    })
    test('should return a the same state for move("nonExistDestination")', () => {
        let state = VillageState.random();
        let resultState = state.move("nonExistDestination");
        expect(state).toStrictEqual(resultState);
    })
})
