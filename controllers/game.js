const express = require('express')
const app = express()

function gameForm(req, res){
    res.render('game',{
        locals:{
            message:'Guess a number between 0 - 10'
        }
    })
    req.session.randomNumber = (Math.floor(Math.random()* 10));
    req.session.save()
};

function gameLogic(req,res){
    console.log(req.session.randomNumber)

    if (Number(req.body.answer) === req.session.randomNumber){
        res.redirect('/congrats')
    }else{
        res.render('game', {
            locals:{
                message: "Try again F00L"
            }
        })
    }
}

module.exports = { gameForm, gameLogic}