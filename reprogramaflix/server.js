const app = require("./src/app");
const port = 3030;

app.listen(port, ()=>{
    console.log(`ReprogramaFlix app listening at http://localhost:${port}`);
})