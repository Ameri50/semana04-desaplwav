const mainController = {
  home: (req, res) => res.render("home", { title: "Inicio" }),
  about: (req, res) => res.render("about", { title: "Acerca de" }),
  contact: (req, res) => res.render("contact", { title: "Contacto" }),
  services: (req, res) => res.render("services", { title: "Servicios" }),
  contactPost: (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log("Datos del formulario:", { nombre, email, mensaje });
    res.send("Gracias por contactarnos.");
  }
};

module.exports = mainController;
