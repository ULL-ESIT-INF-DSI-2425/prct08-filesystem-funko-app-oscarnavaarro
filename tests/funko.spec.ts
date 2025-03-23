import { describe, test, expect } from "vitest";
import { Funko, FunkoType, FunkoGenre } from "../src/funko";

describe("Funko Class", () => {
  test("debe crear una instancia de Funko con los atributos correctos", () => {
    const funko = new Funko(
      1,
      "Spider-Man",
      "A Spider-Man Funko Pop",
      FunkoType.Pop,
      FunkoGenre.MoviesTV,
      "Marvel",
      123,
      true,
      "Glow in the dark",
      29.99,
    );

    expect(funko.id).toBe(1);
    expect(funko.name).toBe("Spider-Man");
    expect(funko.description).toBe("A Spider-Man Funko Pop");
    expect(funko.type).toBe(FunkoType.Pop);
    expect(funko.genre).toBe(FunkoGenre.MoviesTV);
    expect(funko.franchise).toBe("Marvel");
    expect(funko.number).toBe(123);
    expect(funko.exclusive).toBe(true);
    expect(funko.specialFeatures).toBe("Glow in the dark");
    expect(funko.marketValue).toBe(29.99);
  });

  test("debe permitir crear un Funko con diferentes tipos y géneros", () => {
    const funko = new Funko(
      2,
      "Goku",
      "A Goku Funko Pop",
      FunkoType.VynilGold,
      FunkoGenre.Anime,
      "Dragon Ball",
      456,
      false,
      "Metallic finish",
      49.99,
    );

    expect(funko.type).toBe(FunkoType.VynilGold);
    expect(funko.genre).toBe(FunkoGenre.Anime);
    expect(funko.franchise).toBe("Dragon Ball");
    expect(funko.exclusive).toBe(false);
    expect(funko.specialFeatures).toBe("Metallic finish");
    expect(funko.marketValue).toBe(49.99);
  });
});
