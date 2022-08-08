const {
  getRightRovers,
  getAllRover,
  getRightDoc,
  getRightCaptain,
  getAllEngineer,
  getRightRocket,
} = require('../src/functions');

describe('Экспедиция на Марс', () => {
  describe('Отбор кандидатов', () => {
    let crew;
    beforeEach(() => {
      crew = [
        'Роберт Стивенсон, м, Капитан, 12',
        'Кэтерин Лоу, ж, Врач, 9',
        'Уильям Блейк, м, Бортмеханик, 11',
        'Стив Джонсон, м, Капитан, 23',
        'Клара Томпсон, ж, Врач, 10',
        'Том Браун, м, Врач, 14',
        'Джуди Лестер, ж, Бортмеханик, 16',
      ];
    });
    it('позволяет выбрать самого опытного капитана', () => {
      const bestCaptain = getRightCaptain();
      expect(bestCaptain).toBe(crew[3]);
    });
    it('позволяет выбрать самого опытного врача среди женщин', () => {
      const bestDoctor = getRightDoc();
      expect(bestDoctor).toEqual(crew[4]);
    });
    it('позволяет выбрать всех бортмехаников', () => {
      const allEngineer = getAllEngineer();
      expect(allEngineer).toEqual([crew[2], crew[6]]);
    });
  });
  describe('Отбор оборудования', () => {
    let equipment;
    beforeEach(() => {
      equipment = [
        'Исследователь-2, марсоход, 3',
        'Рейнджер‑4, луноход, 5',
        'Покоритель-3, луноход, 7',
        'Искатель-1, марсоход, 5',
        'Путник-3, марсоход, 8',
      ];
    });
    it('Позволяет отобрать все марсоходы', () => {
      const allRover = getAllRover();
      expect(allRover).toEqual([equipment[0], equipment[3], equipment[4]]);
    });
    it('позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет', () => {
      const rightRovers = getRightRovers();
      expect(rightRovers).toEqual([equipment[3], equipment[4]]);
    });
  });
  describe('Выбор ракеты', () => {
    it('позволяет выбрать ракету с максимальной дальностью полёта', () => {
      const rocket = getRightRocket();
      // eslint-disable-next-line max-len
      expect(rocket[2]).toBe(209456); // под ракетой подразумеваается строка с полным описанием ракеты (например "Колумбия, межзвездная, 1209"), разбитая на массив вида ['Колумбия', 'межзвездная', '1209']
    });
  });
});
