import * as SQLite from 'expo-sqlite';

const Database = {

    getConnection: () => {
        const db = SQLite.openDatabase('dblocal.db');

        db.transaction((tx) => {
            tx.executeSql('create table if note exists local (email string primary key not null, password string not null)');
        });

        const ExecuteQuery = (sql, params = []) => {

            new Promise((resolve, reject) => {
                db.transaction((trans) => {
                    trans.executeSql(
                        sql,
                        params,
                        (trans, results) => {
                            resolve(results);
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                });
            });

            return ExecuteQuery;
        }
    }
}
export default Database;