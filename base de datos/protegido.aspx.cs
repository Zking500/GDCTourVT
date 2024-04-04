using System;
using System.Web;

public partial class protegido : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        // Verificar si el usuario ha iniciado sesión
        if (Session["loggedin"] == null || (bool)Session["loggedin"] == false)
        {
            // Si no ha iniciado sesión, redirigirlo a la página de inicio de sesión
            Response.Redirect("login.aspx");
        }
    }

    protected void btnCerrarSesion_Click(object sender, EventArgs e)
    {
        // Cerrar sesión
        Session["loggedin"] = false;
        Response.Redirect("login.aspx");
    }
}

