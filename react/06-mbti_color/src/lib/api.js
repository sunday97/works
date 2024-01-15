import mockItems from "../mock.json";

const mock = mockItems;
const LIMITS = 10;

export function getMockItems(lastItemNum) {
  if (lastItemNum === mock.length) return;

  lastItemNum = lastItemNum ? lastItemNum : 0;

  const nextItemNum = lastItemNum + LIMITS;
  return { data: mock.slice(lastItemNum, nextItemNum), nextItemNum };
}
