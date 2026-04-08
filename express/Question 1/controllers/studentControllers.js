const pool = require("../db/pool.js");

async function getStudent(req, res) {
  try {
    const sql = "select * from students;";
    const data = await pool.query(sql);
    res.send(data[0]);
  } catch (error) {
    res.send(error);
  }
}

async function postStudent(req, res) {
  console.log(req.body);
  const { student_id, student_name, course_id } = req.body;
  try {
    const sql = "insert into students values(?,?,?)";
    const data = await pool.query(sql, [student_id, student_name, course_id]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}

async function putStudent(req, res) {
  const { student_id, student_name, course_id } = req.body;
  try {
    const sql =
      "update students set student_name=?,course_id=? where student_id=?";
    const data = await pool.query(sql, [student_name, course_id, student_id]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}

async function deleteStudent(req, res) {
  const student_id = req.params.student_id;
  try {
    const sql = "delete from students where student_id=?";
    const data = await pool.query(sql, [student_id]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}
module.exports = { getStudent, postStudent, putStudent, deleteStudent };
