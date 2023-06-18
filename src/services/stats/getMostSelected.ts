import getMostSelectedMock from '../../utils/mocks/getMostSelectedMock.json';

const getMostSelected = (questionId: number): Promise<{ optionsId: number; options: string }> =>
  new Promise<any>((resolve, _reject) => {
    setTimeout(() => {
      const res: { optionsId: number; options: string } = getMostSelectedMock as any;
      resolve(res);
    }, 300);
  });

export default getMostSelected;
