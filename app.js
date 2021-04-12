const Express = require('express');
const app = Express();

app.listen(4001, () => {
    console.log(`[WorkoutLog]: App is listening on 4001.`);
})