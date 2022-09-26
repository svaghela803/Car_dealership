

test("Dealership - count()", () => {
    let name = "Test D";
    let maxNumberOfCars = 10;
    let cars = [new Car("", 100, ""), new Car("", 100, "")];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;

    expect(dealership.count()).toBe(2);
})

test("Dealership - add() - success", () => {
    let name = "Test D";
    let maxNumberOfCars = 3;
    let cars = [new Car("", 100, ""), new Car("", 100, "")];

    let dealership = new Dealership(name, maxNumberOfCars);
    dealership.cars = cars;
    expect(dealership.count()).toBe(2);

    dealership.add(new Car("", 100, ""));
    expect(dealership.count()).toBe(3);
})


