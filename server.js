const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'localhost',
  host: '127.0.0.1',
  database: 'employee_db',
  password: 'Michael2400!', 
  port: 5432,
});

module.exports = pool;