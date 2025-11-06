declare module 'react-native-sqlcipher-storage' {
  export interface SQLCipherOpenDatabaseOptions {
    name: string
    key?: string
    location?: 'default' | 'Library' | 'Documents'
    createFromLocation?: string | number
  }

  export interface SQLCipherDatabase {
    executeSql(
      statement: string,
      params?: any[],
      success?: (
        resultSet: { rows: { length: number; item: (i: number) => any } }
      ) => void,
      error?: (err: any) => void
    ): void
    close(): void
    transaction(
      callback: (tx: any) => void,
      error?: (err: any) => void,
      success?: () => void
    ): void
    changePassword?(newKey: string): void
  }

  export interface SQLCipher {
    enablePromise(enable: boolean): void
    openDatabase(
      options: SQLCipherOpenDatabaseOptions
    ): Promise<SQLCipherDatabase>
  }

  const SQLCipher: SQLCipher
  export default SQLCipher
}
