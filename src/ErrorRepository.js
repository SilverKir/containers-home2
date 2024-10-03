export class ErrorRepository {

    translate(code) {
        return this.errors.has(code) ? this.errors.get(code) : "Unknown error";
    }

    errors = new Map([
        [1, "Type is not defined!"],
        [2, "Length of the name out of range (2-10)!"],
        [3, "Already in Team"]
    ]);

}