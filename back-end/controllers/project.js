"use strict"

var Project = require("../models/project");

var controller = {

    home: function(req, res){
        return res.status(200).send({
            message: "Soy la home"
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: "Soy el metodo o accion test del controlador de project"
        });
    },

    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: "Error al guardar"});

            if(!projectStored) return res.status(404).send({message: "No se ha podido guardar el documento"});

            return res.status(200).send({project: projectStored});
        });

        return res.status(200).send({
            project: project,
            message: "saviendo"
        });
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        Project.findById(projectId, (err, project) => {
            if(err) return res.status(500).send({message: "No se encontro el ID"});

            if(!project) return res.status(404).send({message: "El poyecto no existe"});

            return res.status(200).send({
                project
            })
        })
    },

    getProjects: function(req, res){

        Project.find({}).exec((err, project) => {
            if(err) return res.status(500).send({message: "Error al devolver los datos"});

            if(!project) return res.status(404).send({message: "No hay projectos para mostrar"});

            return res.status(200).send({
                project
            })
        })
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, (err, projectUpdated) =>{
            if(err) return res.status(500).send({message: "Error al actualizar los datos"});

            if(!project) return res.status(404).send({message: "No se ha encontrado el documento a actualizar"});

            return res.status(200).send({
                projectUpdated
            })
        });
    },

    deleteProject: function(req, res){
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectdeleted) =>{
            if(err) return res.status(500).send({message: "Error al borrar los datos"});

            if(!project) return res.status(404).send({message: "No se ha encontrado el documento a borrar"});

            return res.status(200).send({
                projectdeleted
            });
        });
    },

    uploadImage: function(req, res){
        var projectId = req.params.id;
        var fileName = "Imagen no subida...";


        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split("\\");
            var fileName = fileSplit[1];

            Project.findByIdAndUpdate(projectId, {image: fileName}, (err, projectUpdated) => {
                if(err) return res.status(500).send({message: "Error al subir la images"});

                if(!project) return res.status(404).send({message: "El proyecto no existe o no se ha adjuntado la imagen"});

                return res.status(200).send({
                    project: projectUpdated
                });
            });
            return res.status(200).send({
               files: fileName
            });
        };
    }

};

module.exports = controller;