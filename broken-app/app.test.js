const request = require("supertest");
const app = require("./app");
const Test = require("supertest/lib/test");

describe("POST /", () => {
  const devs = { developers: ["joelburton", "elie"] };

  test("Respond with Developers' info", async () => {
    const res = await request(app).post("/").send(devs);
    const parsedBody = JSON.parse(res.text);
    expect(res.statusCode).toBe(200);
    expect(parsedBody).toEqual([
      {
        name: 'Joel Burton',
        bio: 'Open source developer. Former dev at Apple, Planned Parenthood, Zana. Former VP of Ed at Hackbright. Python, JS, design, cats, tea, but not always in that order'
      },
      {
        name: 'Elie Schoppik',
        bio: 'Co-founder + Lead Instructor @rithmschool '
      }
    ]);
  });
});