import * as dao from "./dao.js";
export default function EnrollmentsRoutes(app) {
    app.post("/api/enrollments", async (req, res) => {
        const {userId, courseId} = req.params;
        const enrollment = dao.enrollUserInCourse(userId, courseId);
        res.json(enrollment);
    });
    app.delete("/api/enrollments/:userID/:courseId", (req, res) => {
        const {userId, courseId} = req.params;
        const status = dao.unenrollUserFromCourse(userId, courseId);
        res.send(status);
    });
    app.get("/api/enrollments/users/:userId", (req, res) => {
        const {userId} = req.params;
        const enrollments = dao.findEnrollmentsForUser(userId);
        res.json(enrollments);
    });
    app.get("/api/enrollments/courses/:courseId", (req, res) => {
        const {courseId} = req.params;
        const enrollments = dao.findEnrollmentsForCourse(courseId);
        res.json(enrollments);
    });
}