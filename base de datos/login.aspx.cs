protected void btnLogin_Click(object sender, EventArgs e)
{
    // Aquí deberías verificar las credenciales con la base de datos
    // Supongamos que las credenciales son correctas y establecemos una sesión de prueba
    bool credencialesCorrectas = false; // Variable para verificar si las credenciales son correctas

    // Verificar las credenciales (esto es solo un ejemplo)
    if (txtUsuario.Text == "usuario" && txtContraseña.Text == "contraseña")
    {
        credencialesCorrectas = true;
    }

    if (credencialesCorrectas)
    {
        // Si las credenciales son correctas, establecer la sesión y redirigir a la página protegida
        Session["loggedin"] = true;
        Response.Redirect("protegido.aspx");
    }
    else
    {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        lblMensaje.Text = "Usuario o contraseña incorrectos";
        lblMensaje.Visible = true;
    }
}
