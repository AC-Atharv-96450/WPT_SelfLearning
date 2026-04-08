const pool = require("../db/pool.js");

async function getCourse(req, res) {
  try {
    const sql = "select * from courses;";
    const data = await pool.query(sql);
    res.send(data[0]);
  } catch (error) {
    res.send(error);
  }
}

async function postCourse(req, res) {
  const { course_id, course_name } = req.body;
  try {
    const sql = "insert into courses values(?,?)";
    const data = await pool.query(sql, [course_id, course_name]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}

async function putCourse(req, res) {
  const { course_id, course_name } = req.body;
  try {
    const sql = "update courses set course_name=? where course_id=?";
    const data = await pool.query(sql, [course_name, course_id]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}

async function deleteCourse(req, res) {
  const course_id = req.params.course_id;
  try {
    const sql = "delete from courses where course_id=?";
    const data = await pool.query(sql, [course_id]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}
module.exports = { getCourse, postCourse, putCourse, deleteCourse };
