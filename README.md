# ja-breadcrumbs
ja-breadcrumbs is an AngularJs's directive to make simples breadcrumbs.

ja-breadcrumbs return a simple  html ul list of links
```html
<ul>
 <li><a href="##">..</a><li>
 <li><a href="##">..</a><li>
 <li><a href="##">..</a><li>
</ul>
```


## Getting started

Add the necessary links for angularJs 1.4 and use your app module on ja-breadcrumbs-v-0-1.js file:
```javascript
/*ja-breadcrumbs-v-0-1.js*/
    angular
    /*use your app module name in the getting */
        .module('app-module-name')
        .directive('breadcrumbs', BreadCrumbs);

    function BreadCrumbs($window) {
        return {
        ....

```

Use the directive as element on you html:
```html
<breadcrumbs text="You are here" crumbs-class="breadcrumb"></breadcrumbs>
```
- You can set a text for breadcrumbs using `text` attribute `text="some text"`.

- You can set a class for breadcrumbs using `crumbs-class` attribute `crumbs-class="breadcrumb-class"`.


