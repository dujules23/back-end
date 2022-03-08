const request = require("supertest")
const server = require("./server")

describe('endpoints', () => {
  describe("[GET] /api/ping", () => {
    it("responds with a 200", async () => {
      const res = await request(server).get("/api/ping")
      expect(res.status).toBe(200)
    })
  })
  describe("[GET] /api/posts ", () => {
    it("responds with a 200", async () => {
      const res = await request(server).get("/api/posts")
    })
  })
})