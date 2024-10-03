import { ErrorRepository } from "../ErrorRepository"

const errorRepository = new ErrorRepository();

test("Test ErrorRepository", () => {

    expect(errorRepository.translate(1)).toBe(errorRepository.errors.get(1));
    expect(errorRepository.translate('new')).toBe("Unknown error");
})