import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";
import {ValidationError} from "../utils/error";
import {fight} from "../utils/fight";

export const arenaRoute = Router();

arenaRoute
    .get('/fight-form', async (req, res) => {
        const warriors = await WarriorRecord.listAll();

        res.render('arena/fight-form', {
            warriors,
        })  //router i nazwa widoku!!
    })
    .post('/fight', async (req, res) => {
        const {warrior1: warrior1Id, warrior2: warrior2Id} = req.body;

        if (warrior1Id === warrior2Id) {
            throw new ValidationError('Choose two different opponents');
        }
        const warrior1 = await WarriorRecord.getOne(warrior1Id);
        const warrior2 = await WarriorRecord.getOne(warrior2Id);

        if(!warrior1) {
            throw new ValidationError('Opponent 1 not found')
        }

        if(!warrior2) {
            throw new ValidationError('Opponent 2 not found')
        }

        const {log, winner} = fight(warrior1, warrior2);
        console.log(log);

        winner.wins++;
        await winner.update();

        res.render('arena/fight', {
            log,
        })
    }); //post/arena/fight