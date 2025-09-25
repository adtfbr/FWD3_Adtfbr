
import { index, store, destroy } from "./controller.mjs";
import users from "./data.mjs";

const main = () => {
    store(users);
    index();
    destroy();
    console.log("\nSetelah hapus data terakhir:");
    index();
};

main();

