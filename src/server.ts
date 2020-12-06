import app from "./app";
const host = 3334;

app.listen(host, () => {
  console.log(`Server started on port ${host}!`);
});
