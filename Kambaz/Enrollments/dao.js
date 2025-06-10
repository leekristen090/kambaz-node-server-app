import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
// export function enrollUserInCourse(userId, courseId) {
//     const {enrollments} = Database;
//     enrollments.push({_id: uuidv4(), user: userId, course: courseId});
// }
export function enrollUserInCourse(userId, courseId) {
    const {enrollments} = Database;
    const newEnrollment = {_id: uuidv4(), user: userId, course: courseId};
    enrollments.push(newEnrollment);
    return newEnrollment;
}
export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    const initialLength = enrollments.length;
    Database.enrollments = enrollments.filter(
        e => !(e.user === userId && e.course === courseId)
    );
    return initialLength !== Database.enrollments.length;
}
export function findEnrollmentsForUser(userId) {
    return Database.enrollments.filter(e => e.user === userId);
}
export function findEnrollmentsForCourse(courseId) {
    return Database.enrollments.filter(e => e.course === courseId);
}