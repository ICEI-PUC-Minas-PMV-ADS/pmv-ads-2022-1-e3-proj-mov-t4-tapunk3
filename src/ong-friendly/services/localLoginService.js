import * as SQLite from 'expo-sqlite';
import Database from './db_local';

const DB_Exec = Database.getConnection();

export const getUser = async () => {
    let results = await DB_Exec(`select * from local`);
    return results.rows._array;
}

export const cadUser = async (param) => {
    let results = await DB_Exec(`insert into local(email, password, name, logadouro, , numero, cidade, cep)values(?,?,?,?,?,?,?)`, 
    [param.email, param.password, param.name, param.logadouro, param.numero,param.cidade, param.cep]);
    return results.rowsAffected;
}

export const insertUser = async (param) => {
    let results = await DB_Exec(`insert into local(email, password)values(?,?)`, 
    [param.email], param.password);
    return results.rowsAffected;
}