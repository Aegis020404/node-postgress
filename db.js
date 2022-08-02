import Pool from 'pg-pool'

const pool = new Pool({
    user: "postgres",
    password: 'ewqrty',
    host: 'localhost',
    port: 5432,
    database: 'node_postgres'
})

export default pool