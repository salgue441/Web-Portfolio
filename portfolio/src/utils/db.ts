/**
 * @file db.ts
 * @brief Database service
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */
import { createPool, Pool, PoolConfig, PoolConnection } from "mariadb"

let pool: Pool

/**
 * @brief
 * Creates a connection pool to the database
 * @throws Error if the connection to the database fails
 */
export const init = async () => {
  try {
    pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      connectionLimit: 10,
      port: Number(process.env.DB_PORT),
    })
  } catch (error) {
    console.log("Error connecting to database " + error)
    throw new Error("Error connecting to database " + error)
  }
}

/**
 * @brief
 * Executes a query to the database and returns the result
 * @param query SQL query to execute
 * @param params Parameters to pass to the query
 * @returns Result of the query
 * @throws Error if the database is not initialized
 */
export const execute = async <T>(
  query: string,
  params?: (string | number)[] | Record<string, any>
): Promise<T> => {
  try {
    if (!pool) throw new Error("Database not initialized")

    const connection: PoolConnection = await pool.getConnection()
    const result = await connection.query(query, params)
    connection.release()

    return result
  } catch (error) {
    console.log("Error executing query " + error)
    throw new Error("Error executing query " + error)
  }
}
