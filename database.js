const {
  Database,
  Schema,
  Table,
  BooleanColumn,
  NumberColumn,
  TextColumn,
  DateColumn,
} = require('sedk-postgres');

const database = new Database({
  version: 1,
  schemas: {
    public: new Schema({
      name: 'public',
      tables: {
        Table1: new Table({
          name: 'Table1',
          columns: {
            col1: new TextColumn({ name: 'col1' }),
            col2: new TextColumn({ name: 'col2' }),
            col3: new TextColumn({ name: 'col3' }),
            col4: new NumberColumn({ name: 'col4' }),
            col5: new NumberColumn({ name: 'col5' }),
            col6: new NumberColumn({ name: 'col6' }),
            col7: new BooleanColumn({ name: 'col7' }),
            col8: new BooleanColumn({ name: 'col8' }),
            col9: new DateColumn({ name: 'col9' }),
            col10: new DateColumn({ name: 'col10' }),
          },
        }),
        Table2: new Table({
          name: 'Table2',
          columns: {
            col1: new TextColumn({ name: 'col1' }),
            col2: new TextColumn({ name: 'col2' }),
          },
        }),
        Table3: new Table({
          name: 'Table3',
          columns: {
            col1: new TextColumn({ name: 'col1' }),
            col2: new TextColumn({ name: 'col2' }),
          },
        }),
      },
    }),
    schema1: new Schema({
      name: 'schema1',
      tables: {
        Table1: new Table({
          name: 'Table1',
          columns: {
            col1: new TextColumn({ name: 'col1' }),
          },
        }),
        Table2: new Table({
          name: 'Table2',
          columns: {
            col1: new TextColumn({ name: 'col1' }),
          },
        }),
      },
    }),
  },
})

exports.database = database;