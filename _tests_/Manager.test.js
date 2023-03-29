const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Jane Doe', '5678', 'jane@gmail.com', 'A123');
    
    expect(manager.name).toBe('Jane Doe');
    expect(manager.id).toBe('5678');
    expect(manager.email).toBe('jane@gmail.com');
    expect(manager.office).toBe('A123');
});

test("gets employee's role", () => {
    const manager = new Manager('John Smith', '1234', 'jane@gmail.com', 'A123');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});