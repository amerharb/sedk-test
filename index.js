'use strict';

const sedk = require('sedk-postgres');
const { database } = require('./database');

const sql = new sedk.Builder(database);

const TIMES = 100_000
async function test() {
  await sleep(100);
  performance.mark('dummy mark');
  await test_stmt1();
  await test_stmt2();
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test_stmt1() {
  performance.mark('start-sedk');
  for (let i = 0; i < TIMES; i++) {
    const stmt = sql.selectAsteriskFrom(database.s.public.t.Table1).getSQL();
    console.assert(stmt === `SELECT * FROM "Table1";`, `incorrect: ${stmt}`);
    sql.cleanUp();
  }
  performance.mark('end-sedk');
  const measure = performance.measure('Measure SEDK', 'start-sedk', 'end-sedk');
  console.log(measure);
}

async function test_stmt2() {
  performance.mark('start-sedk-eval');
  for (let i = 0; i < TIMES; i++) {
    const stmt = eval('sql.selectAsteriskFrom(database.s.public.t.Table1).getSQL()');
    console.assert(stmt === `SELECT * FROM "Table1";`, `incorrect: ${stmt}`);
    eval(`sql.cleanUp()`);
  }
  performance.mark('end-sedk-eval');
  const measure = performance.measure('Measure SEDK (eval)', 'start-sedk-eval', 'end-sedk-eval');
  console.log(measure);
}


test();