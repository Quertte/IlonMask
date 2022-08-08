const fs = require('fs');
const path = require('path');


function getCandidates() {
  const fileName = 'crew.txt';
  const filePath = path.resolve(__dirname, fileName);
  const str = fs.readFileSync(filePath, 'utf-8');
  return str.split('\n');
}

function getEquipments() {
  const fileName = 'equipment.txt';
  const filePath = path.resolve(__dirname, fileName);
  const str = fs.readFileSync(filePath, 'utf-8');
  return str.split('\n');
}

function getRockets() {
  const fileName = 'rockets.txt';
  const filePath = path.resolve(__dirname, fileName);
  const str = fs.readFileSync(filePath, 'utf-8');
  const arr = str.split('\n');
  return arr.slice(1);
}

function getRightCaptain() {
  const result = getCandidates().filter((elem) => elem.includes('Капитан'));
  const res = [];
  result.forEach((elem) => {
    const obj = {
      exp: elem.slice(-2),
      data: elem,
    };
    res.push(obj);
  });
  res.sort((elem, elem1) => elem1.exp - elem.exp);
  return res[0].data;
}

function getRightDoc() {
  const result = [];
  getCandidates().forEach((elem) => {
    if (elem.includes('ж, Врач')) {
      const obj = {
        exp: elem.slice(-2),
        data: elem,
      };
      result.push(obj);
    }
  });
  result.sort((elem, elem1) => elem1.exp - elem.exp);
  return result[0].data;
}

function getAllEngineer() {
  return getCandidates().filter(elem => elem.includes('Бортмеханик'));
}

function getAllRover() {
  return getEquipments().filter(elem => elem.includes('марсоход'));
}

function getRightRovers() {
  const result = getEquipments().filter(elem => elem.includes('марсоход'));
  const arr = result.filter(elem => +elem.slice(-1) > 3);
  return arr;
}

function getRightRocket() {
  const array = getRockets();
  const arr = [];
  array.forEach(elem => {
    const timeArr = elem.split(', ');
    const obj = {
      speed: timeArr.at(-1),
      data: elem.split(', '),
    };
    arr.push(obj);
  });
  arr.sort((elem, elem1) => elem1.data[2] - elem.data[2]);
  arr[0].data[2] = +arr[0].data[2];
  return arr[0].data;
}

console.log(getRightRocket());

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
