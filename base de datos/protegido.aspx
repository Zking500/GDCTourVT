<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Página protegida</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h1>Bienvenido a la página protegida</h1>
            <div>
                <asp:Button ID="btnCerrarSesion" runat="server" Text="Cerrar sesión" OnClick="btnCerrarSesion_Click" />
            </div>
        </div>
    </form>
</body>
</html>
