<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Iniciar sesión</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h2>Iniciar sesión</h2>
            <div>
                <asp:Label ID="lblMensaje" runat="server" ForeColor="Red" Visible="false"></asp:Label>
            </div>
            <div>
                <asp:TextBox ID="txtUsuario" runat="server"></asp:TextBox>
            </div>
            <div>
                <asp:TextBox ID="txtContraseña" runat="server" TextMode="Password"></asp:TextBox>
            </div>
            <div>
                <asp:Button ID="btnLogin" runat="server" Text="Iniciar sesión" OnClick="btnLogin_Click" />
            </div>
        </div>
    </form>
</body>
</html>
