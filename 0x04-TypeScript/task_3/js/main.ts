// ambient namespace
///  <reference path='./crud.d.ts'/>  
import { RowID, RowElement } from "./interface";

import * as CRUD from './crud.js';  ///imports all function

// step1: create a row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}
// step 2: insert the row
const newRowID: RowID = CRUD.insertRow(row);

// step 3: create an update row with age
const updateRow: RowElement = {
    ...row,
    age: 23
}

// step 4: update the row
CRUD.updateRow(newRowID, updateRow)

// step 5: delete the row
CRUD.deleteRow(newRowID)