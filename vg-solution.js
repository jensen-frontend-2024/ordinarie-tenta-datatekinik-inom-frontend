// Lösningsförslaget nedan hade givit en provatagare full pott på VG-frågan (15 poäng). Som ni ser så är den väldigt fokuserad på just felhantering och det är det för att det är bland det viktigaste när det kommer till ett API och dess uppbyggnad. Ett API får helt enkelt aldrig krascha, det skulle innebära extremt dålig användarupplevelse och skulle kunna orska skada på datan som behandlas. Även vissa importer, responses belönas också med poäng.

const express = require("express");
const Database = require("better-sqlite3");
const db = new Database("heroes.db");
const app = express();

app.use(express.json()); // 1 POINT => For this one line including all the imports and declarations above

app.get("/heroes", (req, res) => {
  const users = db.prepare("SELECT * FROM heroes").all();

  if (users.length === 0)
    return res.status(404).json({ message: "The heroes are gone" }); // 1 POINT

  return res.json(users);
});

app.get("/heroes/:id", (req, res) => {
  if (!Number(req.params.id))
    return res.status(400).json({ message: "Id must be a number" }); // 1 POINT

  const user = db
    .prepare("SELECT * FROM heroes WHERE id = ?")
    .get(req.params.id); 

  if (!user)
    return res.status(404).json({
      message: `The Here with id ${req.params.id} doesn't exists in this universe`, // 1 POINT
    });

  return res.json(user);
});

app.post("/heroes", (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({ message: "Body is missing" }); // 1 POINT

  if (
    !req.body.name ||
    !req.body.power ||
    !req.body.city ||
    !req.body.is_active
  )
    return res
      .status(400)
      .json({ message: "Body is missing one or more necessary properties" }); // 1 POINT

  db.prepare(
    "INSERT INTO heroes (name, power, city, is_active) VALUES (?, ?, ?, ?)"
  ).run([req.body.name, req.body.power, req.body.city, req.body.isActive]); // 1 POINT

  return res.status(201).json({
    message: `The new Hero ${req.body.name} has entered the world successfully`, // 1 POINT (200 is fine as well)
  });
});

app.put("/heroes/:id", (req, res) => {
  if (!Number(req.params.id))
    return res.status(400).json({ message: "Id must be a number" }); // 1 POINT

  if (
    !req.body.name ||
    !req.body.power ||
    !req.body.city ||
    !req.body.is_active
  )
    return res
      .status(400)
      .json({ message: "Body is missing one or more necessary properties" }); // 1 POINT

  const hero = db
    .prepare("SELECT * FROM heroes WHERE id = ?")
    .get([req.params.id]);

  if (!hero)
    return res.status(404).json({
      message: `The Hero with id ${req.params.id} doesn't exists in this universe`, // 1 POINT
    });

  db.prepare(
    "UPDATE heroes SET name = ?, power = ?, city = ?, is_active = ?"
  ).run([req.body.name, req.body.power, req.body.city, req.body.isActive]);

  return res.json({
    message: `The Hero ${req.body.name} has been upgraded succesfully`, // 1 POINT
  });
});

app.delete("/heroes/:id", (req, res) => {
  if (!Number(req.params.id))
    return res.status(400).json({ message: "Id must be a number" }); // 1 POINT

  const hero = db
    .prepare("SELECT * FROM heroes WHERE id = ?")
    .get([req.params.id]);

  if (!hero)
    return res.status(404).json({
      message: `The Hero with id ${req.params.id} doesn't exists in this universe`, // 1 POINT
    });

  db.prepare("DELETE FROM heroes WHERE id = ?").run([req.params.id]);
});

app.listen(3000, () => {
  console.log("App is listening on port 3000"); // 1 POINT
});
