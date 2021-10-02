export default function getById(req, res) {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "application-json");
  //   res.end(req.query.id);

  // or

  res.json({ yourId: req.query.id });
}
