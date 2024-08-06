# :trident: Angular life cycle hooks

. 1 When the angular application starts, it first creates and renders the root component. Then it creates and renders it's children. It forms a tree of components  
. 2 Once angular loads the component, it starts the process of rendering the view. It requires to check the input , evaluate the data bindings and expressions etc.  
. 3 Angular let us know when these events happening using life cycle hooks. For example : 
>**ngOnInit** when angular initialize the component for the first time.  
>**ngOnChanges** this hook being execute when a coponents property change  
>**ngOnDestory** invoke when before destruction of component


## Change detection cycle
 
 Change detecction is the angular mechanism to keeps angular template in sync with the component  
 ```html
<div>Hello {{name}}</div>
 ```

According to the example, the dom will update every time the property "**name**" changes.

Angular run a change detection cycle on every event that may result in a change in dom. During the change detection cycle angular checks every bound property in the template with the component class and if it detects any change it will update dom and during these process angular raises the life cycle hooks during the important stages of change detection mechanism.

. 1 Projected content: Pojected content is that **HTML** content which replaces the <ng-content> directive in child component. Example
>child component:
>```html
><h2>Child component</h2>
><ng-content></ng-content>
>```
>parent component:
>```html
><h1>Parent component</h1>
><app-child>
>   <p>this content injected from parent</p>
></app-child>
>```

. 2 Input bound properties: These are those properties of a component which is decorated with @Input() decorator.
>```typescript
>@Input message: string
>```

## Construction of a component

. Life cycle of a component begins, when component class being created by Angular. First method that gets invoked is class **Constructor**.
>**Constructor** wont considered as life cycle hook by angular but still raise when . Its just a javascript feature like most of the programming languages.  
>During the execution of constructor none of the components input properties are available or udated. Neither its child components  
>are constructed or available.  

## :dart: life cycle hooks


> [!NOTE]  
> Following life cycles are sorted by execution order  


. 1 ngOnchanges  
>Once angular instantiates the class it kick-start the first change detection cycle of the component. And the first one is **ngOnchanges**  
>
>Angular invokes **ngOnchanges** when ever any data bound input propertiy of the component or directive changes.  
>  
>child component
>```typescript  
>@Input() message : string
>```  
>parent component
>```html
><app-child [message]="message">
></app-child>
>```
> In above sample initializing the input properties is the first task that angular carries during the change detection cycle. And if it
> detects any changes in input properties , then it raise the **ngOnChanges** hook. It does so during every change detection cycle.


> [!IMPORTANT]
> this hook will not raise if the change detector doesn't found any input boundaries change.


>So this hook will raise every time a component instantiate and also when ever data input get changes.  

. 2 ngOnInit  
>Angular raise this hook after it creates the component and updates it's input properties.  
>
>This hook is fired only once and immediately after it's creation(during the first change detection)  
>This is a perfect place for adding any initialization logic for the component  
>Here we have access to all components input property. (this hook is suitable for any http request for back-end comunication and reaching 
data)


> [!IMPORTANT]  
> None of the component child or projected contents are available at this hook. Hence any property decorates with **@ViewChilds**, 
**ViewChildren**, **ContentChild**, **ContentChildren** will not be available to use.  


. 3 ngDoCheck  
>The angular inject this hook during every change detection cycle. This hook will raise even no change detected in any of the properties.  
>So for example **ngDoCheck** will run after user clcik on a button which does not change any binding data or property whenever an event 
raises angular has to check if something has changed in **DOM**  
>**ngDoCheck** is also a great method to use when you want to use some code on every change detection cycle.  

. 4 ngAfterConentInit
> **ngAfterContentInit** hook is called after the components projected content has been fully initialized  
>Angular also updates properties decorated with @ContentChild and @ContentChildren before raising this hook. This hook will also raise if 
there is no content to project  
>content of <**ng-content**> is fill at this part of component life cycle

. 5 ngAfterContentChecked
>This hook is called during every change detection cycle after angular finishes checking of component's projected content  
>Angular also updates the properties decorated with the **@ContentChild** and **@ContentChildren** before raising this hook. Angular calls this hook even if there is no projected content in the component.  
>Both  **ngAfterContentChecked** and **ngAfteContentInit** invokes after the external content is initialized checked and updated and both are very similar And by external content we mean projected content. Now only diffrerence between these two hooks is **ngAfterContentChecked** is raised after every change detection cycle while  **ngAfterContentInit** is raised during the first change detection cycle.  
>So **ngAfterConentInit** hook only raise once and it's after the content is initialized completely after that for every changes appear in the content angular will raise **ngAfterContentChecked**

> [!TIP]
> These two hooks **ngAfterContentChecked** and **ngAfterConentInit** are component only hook and aren't applicable on directives


. 6 ngAfterViewInit 
>This hook will is called after the component's View and all it's child views are fully initialized. Angular also updates the properties decorated with the **@ViewChild** and **@ViewChildren** decorators before raising this hook.
>The view here refreres to the component's view template and it's childrens and directives  
>This hook is called during the first change detection cycle where angular initializes the view for the first time.
> At this hook all processes of the component is completed and component is ready to use.  

. 7 ngAfterViewChecked
>this life cycle get's fired after it checks and updates the component's view and child views. This event is fired ater the ngAfterView Init and after that during every change detection cycle.  
>This hook is very similar to **ngAfterViewInit** but **ngAfterViewInit** will raise once and after that any chnange detected for view will raise **ngAfterViewChecked**  

. 8 ngOnDestroy
>for example if we place an **ngIf** on a component, and this **ngIf** then set to false, at that time, **ngIf** will remove that component from the **DOM**. At that time, **ngOnDestroy** will raise
>this hook is a suitable place to do clean up's such as unsubscribe **observable's** detach **event handler's** to avoid memory leakes and this hook is the last life cycle hook of a component or directive.  

 
![hooks-in-sequence](https://github.com/user-attachments/assets/eb93e36c-f491-437b-b502-37c5371de46a)
