import { EJC7 } from "./EloquentJavascriptChapter7";

describe('EloquetJavascriptChapter7', () => {
    test('should return a valid response for compareRobots()', () => {
        let averages = EJC7.compareRobots(EJC7.routeRobot, [], EJC7.goalOrientedRobot, []);
        expect(averages).toHaveProperty("average1");
        expect(averages).toHaveProperty("average2");
    })
})