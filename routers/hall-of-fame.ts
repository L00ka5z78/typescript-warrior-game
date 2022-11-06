import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";
import {log} from "util";

export const hallOfFameRoute = Router();

hallOfFameRoute
    .get('/', async (req, res) => {
        const warriors = (
            await WarriorRecord.listTop(10)
        ).map((warrior, index) => {
            return {
                place:index + 1,
                warrior,
            };
    });

        // console.log(warriors);

        res.render('hall-of-fame/list', {
            warriors,
        });    //router i nazwa widoku!!
    });
