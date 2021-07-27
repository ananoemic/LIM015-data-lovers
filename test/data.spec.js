import {filterData} from '../src/data';

describe("filtrar data por directores",() =>{
  it("filterData es una función", ()=>{
    expect(typeof filterData).toBe("function");
  });
});