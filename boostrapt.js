var btn = &quot;teaser4&quot;; 
var hide = &quot;debitcar2&quot;; 
var expire = 1; 
var klik = 2; 
$(&#39;#&#39;+btn).click(function(){
    var cookie = readCookie(&quot;hide_me&quot;);
    if(cookie == NaN) {
        cookie = 1;
        createCookie(&#39;hide_me&#39;, cookie, { expires : expire });
    }
    else {
        cookie++;
        createCookie(&#39;hide_me&#39;, cookie, { expires : expire });
    }
});
$(document).ready(function(){
    var cookie = readCookie(&quot;hide_me&quot;);
    if(cookie &gt;= klik)
        $(&#39;#&#39;+hide).remove();
});

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = &quot;; expires=&quot; + date.toGMTString();
    } else {
        expires = &quot;&quot;;
    }
    document.cookie = encodeURIComponent(name) + &quot;=&quot; + encodeURIComponent(value) + expires + &quot;; path=/&quot;;
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + &quot;=&quot;;
    var ca = document.cookie.split(&#39;;&#39;);
    for (var i = 0; i &lt; ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === &#39; &#39;)
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, &quot;&quot;, -1);
}
