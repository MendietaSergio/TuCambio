const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const ListClient = require("../database/models/listClient.js");

const db = require("../database/models");

module.exports = {
  login: (req, res) => {
    res.render("login", {
      title: "Tu cuenta - Logín",
      css: "login.css",
      loginValidation: "loginValidation.js",
    });
  },
  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Usuarios.findOne({
        where: {
          email: req.body.email,
        },
      })
        .then((user) => {
          req.session.user = {
            id: user.id,
            nick: user.nombre,
            email: user.email,
            rol: user.rol,
          };
          return res.redirect("/");
        })
        .catch((error) => {
          res.send(error);
        });
    } else {
      res.render("login", {
        title: "Tu cuenta - Logín",
        css: "login.css",
        errors: errors.mapped(),
        loginValidation: "loginValidation.js",
        old: req.body,
      });
    }
  },
  edit: (req, res) => {
    db.MediosDePagos.findAll()
      .then((medios) => {
        res.render("edit", {
          title: "Editar coeficiente",
          css: "edit.css",
          mediosdepago: medios,
          apiEdit: "apiEdit.js",
        });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  profile: (req, res) => {
    db.Usuarios.findByPk(req.session.user.id).then((user) => {
      res.render("profile", {
        title: "Perfil Administrador",
        css: "profile.css",
        userProfileEdit: "userProfileEdit.js",
        usuario: user,
      });
    });
  },
  processProfileEdit(req, res) {
    //SEGUIR DESDE ACA
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Usuarios.findByPk(req.session.user.id)
        .then((user) => {
          return res.redirect("/");
        })
        .catch((error) => {
          res.send(error);
        });
    } else {
      res.render("profile", {
        title: "Perfil Administrador",
        css: "profile.css",
        userProfileEdit: "userProfileEdit.js",
        errors: errors.mapped(),
      });
    }
  },
  listOrders: async (req, res) => {
    try {
     
      res.render("listOrders", {
        title: "Lista de ordenes",
        css: "listOrders.css",
        viewListClient: "viewListClient.js",
        // listClient: listClient,
        // data: data,
      });
    } catch (error) {
      console.log("error =>> ", error);
    }
  },
  list: async (req, res) => {
    try{
      const listClient = await ListClient.find({});
      res.json(listClient)
    } catch(error){
      console.log("Error=> ",error);
    }
  },
  search: async (req, res) => {
    const {inputSearch} = req.body;
    try{
      const listClient = await ListClient.find({
        $or:[{'nombreCompleto': inputSearch}]
      });
      
      res.json(listClient)
    } catch(error){
      console.log("Error=> ",error);
    }
  },
  update: async (req, res) => {
    const { _id, status } = req.body;
    
    await ListClient.updateOne(
      { _id: _id },
      {
        $set: {
          estado: status,
        },
      }
    );
    res.json({
      message: "Estado cambiado !",
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
};
