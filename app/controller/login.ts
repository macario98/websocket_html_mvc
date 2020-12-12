namespace controller
{
	export class Login
	{
		VLogin:view.Login;

		constructor(vLogin:view.Login)
		{
			this.VLogin = vLogin;	
		}

		public formLoad()
		{
			this.VLogin.btnLogin.addEventListener("click", this.click_btnLogin.bind(this));
		}

		public click_btnLogin(ev:MouseEvent) {
			console.log("login");
		}
	}
}