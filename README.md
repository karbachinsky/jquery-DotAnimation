# jquery-DotAnimation
Popular 3 dot animation lightweight plugin for JQuery

Watch demo on JSFiddle

##HOWTO

Add HTML:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="/js/jquery.dotanimation.min.js"></script>

<div class="element">Loading</div>
```

Add JS:
```javascript
$(function() {
    // Animation will start at once
    var $el = $('.element');
    
    $el.dotAnimation();

    $el.trigger('stopDotAnimation');
    
    // start again
    $el.trigger('startDotAnimation');
});
```

Also you can specify additional params: 
   - speed (default: 400)
   - dotElement (default: '.')
   - numDots (default: 3)


Full example:
```javascript
$(function() {
    $el.dotAnimation({
        speed: 500,
        dotElement: '>',
        numDots: 5
    });
});
`
