const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Jose Sanchez', '0000', 'test@gmail.com', 'College');
    expect(intern.name).toBe('Jose Sanchez');
    expect(intern.id).toBe('0000');
    expect(intern.email).toBe('test@gmail.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('Jose Sanchez', '0000', 'test@gmail.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});

test("gets intern's role", () => {
    const intern = new Intern('Jose Sanchez', '0000', 'test@gmail.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});