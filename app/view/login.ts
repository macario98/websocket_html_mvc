/// <reference path="form.ts" />

namespace view
{
	export class Login extends Form
	{

		constructor(parent?:HTMLElement)
		{
			super(parent)
			this.InitializeComponent();
		}

		protected InitializeComponent(): void 
		{
			this.lblUser = this.createElement("label");
			this.lblPass = this.createElement("label");
			this.txtUser = this.createElement("input");
			this.txtPass = this.createElement("input");
			this.btnLogin = this.createElement("button");
			this.btnRegister = this.createElement("button");
			this.btnSettings = this.createElement("button");
			//set properties
			this.lblUser.setAttribute("for", "txtUser");
			this.lblPass.setAttribute("for", "txtPass");
			this.txtUser.type = "text";
			this.txtUser.id = "txtUser";
			this.txtPass.type = "password";
			this.txtPass.id = "txtPass";
			this.btnLogin.type = "button";
			this.btnRegister.type = "button";
			this.btnSettings.type = "button";
			//set values
			this.lblUser.textContent = "usuario";
			this.lblPass.textContent = "password";
			this.btnLogin.textContent = "login";
			this.btnRegister.textContent = "register";
			this.btnSettings.textContent = "settings"

			this.appendChild(this.lblUser)
			this.appendChild(this.txtUser)
			this.appendChild(this.lblPass)
			this.appendChild(this.txtPass)
			this.appendChild(this.btnLogin)
			this.appendChild(this.btnRegister)
			this.appendChild(this.btnSettings)
		}

		// Variables declaration//GEN-BEGIN:variables
        private lblUser:HTMLLabelElement;
        private lblPass:HTMLLabelElement;
        public txtUser:HTMLInputElement;
        public txtPass:HTMLInputElement;
        public btnLogin:HTMLButtonElement;
        public btnRegister:HTMLButtonElement;
        public btnSettings:HTMLButtonElement;
        // End of variables declaration//GEN-END:variables
	}
}