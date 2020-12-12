class app
{
	
	public static Main()
	{
		const v = new view.Login(document.body);
		const c = new controller.Login(v);
		c.formLoad();
	}
}