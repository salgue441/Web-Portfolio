/**
 * @file db.ts
 * @brief Database service
 * @author Carlos Salguero
 * @version 1.0
 * @date 2023-06-29
 *
 * @copyright Copyright (c) - MIT License
 */

import { createPool, Pool } from "mysql"

// Create a connection pool
let pool: Pool

/**
 * @brief
 * Generates the pool connection to the database
 */
export const init = () => {
  try {
    pool = createPool({
      connectionLimit: 10,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    })

    console.log("Database connected")
  } catch (error) {
    console.log(error)
    throw new Error("Error connecting to database")
  }
}

/**
 * @brief
 * Executes SQL queries to the database
 * @param {string} query - provided query
 * @param {string[] | Object} params - provided parameters for the query
 * @return {Promise<T>} - returns a promise with the result of the query
 */
export const execute = <T>(
  query: string,
  params?: string[] | Object
): Promise<T> => {
  try {
    if (!pool) throw new Error("Database not initialized")

    return new Promise<T>((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error)
        else resolve(results)
      })
    })
  } catch (error) {
    console.log(error)
    throw new Error("Error executing query")
  }
}
