enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

type RequestState = "idle" | "loading" | "success" | "error";

function move(direction: Direction): void {
  console.log(direction);
}

function showState(state: RequestState): void {
  console.log(state);
}

move(Direction.Up);
showState("loading");

// Trade-off:
// Enums offer named runtime values.
// Literal unions are lightweight and work naturally with
// string-based JSON APIs. They do not create enum objects.