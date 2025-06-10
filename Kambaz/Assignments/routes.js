import * as assignmentsDao from "./dao.js";

export default function AssignmentsRoutes(app) {
    app.post("/api/courses/:courseId/assignments", (req, res) => {
        const {courseId} = req.params;
        const assignment = {
            ...req.body,
            course: courseId,
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });
    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const {courseId} = req.params;
        const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    });
    app.put("/api/courses/:courseId/assignments/:assignmentId", async (req, res) => {
        const {assignmentId} = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });
    app.delete("/api/courses/:courseId/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
        // if (success) {
        //     res.sendStatus(204);
        // } else {
        //     res.status(404).send("Assignment not found");
        // }
    });
    app.get("/api/courses/:courseId/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignment = await assignmentsDao.findAssignmentById(assignmentId);
        if (assignment) {
            res.json(assignment);
        } else {
            res.status(404).send("Assignment not found");
        }
    });
}