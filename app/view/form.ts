namespace view
{
	export abstract class Form
	{

        protected parentElement:HTMLDivElement;

		constructor(parent?:HTMLElement)
		{
            this.parentElement = this.createElement("div");
            parent?.appendChild(this.parentElement);
        }

        protected abstract InitializeComponent():void;

		protected createElement<T extends keyof HTMLElementTagNameMap>(tag:T):HTMLElementTagNameMap[T] 
		{
            return document.createElement(tag)
        }

		protected getElement(selector: string):HTMLElement
		{
            return <HTMLElement>document.querySelector(selector);
        }

		protected appendChild(element:HTMLElement)
		{
            this.parentElement.appendChild(element);
        }
    }
}