const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};
const module = {
    id: 1, name: "Learning NodeJS",
    description: "Learning how to create a NodeJS server",
    course: "1"
}
export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
        res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
       res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const {newTitle} = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const {newScore} = req.params;
        assignment.score = Number(newScore);
        res.json(assignment);
    });
    app.get("/lab5/assignment/complete/:newCompleted", (req, res) => {
        const { newCompleted } = req.params;  // Make sure this matches the URL parameter
        assignment.completed = newCompleted === "true";  // Explicit comparison
        res.json(assignment);
    });

    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });
    app.get("/lab5/module/name/:newName", (req, res) => {
        const {newName} = req.params;
        module.name = newName;
        res.json(module);
    });
};