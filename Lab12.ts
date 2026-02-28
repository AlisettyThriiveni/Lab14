enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

function printValue(value: Direction | Status): void {
  console.log(value);
}

printValue(Direction.Left);
printValue(Status.SUCCESS);