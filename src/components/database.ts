const iDB = window.indexedDB;

export default class DataBase {
  public db!: IDBDatabase;

  init(dbName:string, version?:number) {
    const openRequest = iDB.open(dbName, version);
    openRequest.onupgradeneeded = () => {
      const database = openRequest.result;
      const store = database.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
      store.createIndex('name', 'name');
      store.createIndex('surname', 'surname');
      store.createIndex('email', 'email');
      this.db = database;
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;
    };
  }

  write(name:string, surname: string, email: string, score: number) {
    const transaction = this.db.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');
    const result = store.put({
      name, surname, email, score,
    });
    result.onsuccess = () => {
      console.log('complete', result.result);
    };
    result.onerror = () => {
      console.log('error', result.error);
    };
  }

  readAll() {
    const transaction = this.db.transaction('users', 'readonly');
    const store = transaction.objectStore('users');
    const result = store.getAll();
    result.onsuccess = () => {
      console.log(result.result);
    };
  }

  readFiltered() {
    const transaction = this.db.transaction('users', 'readonly');
    const store = transaction.objectStore('users');
    const result = store.index('email').openCursor(null, 'prev');
    const resData: Array<unknown> = [];
    result.onsuccess = () => {
      const cursor = result.result;
      if (cursor) {
        console.log(cursor.value);
        if (cursor.value.email[0] === 'y') {
          resData.push(cursor.value);
        }
        cursor.continue();
      }
    };
    transaction.oncomplete = () => {
      console.log(resData);
    };
  }
}
