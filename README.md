Micro.JS
====================

Micro.JS is a little thing I made in some spare time from an idea. Basically, it's a framework for extreme script compression, something especially useful for large, complex scripts.

At only 6039 bytes after minification, it's pretty easy to load. How well can it compress things?
I took jQuery as an example.
Before applying Micro.JS compression, it was 86,643 bytes after minification. After Micro.JS, it was an impressive 45,470 bytes.

As a disclaimer, Micro.JS in its current form is **NOT** production-ready.

It current uses an inefficient decompressor I made at the last minute, and it has a noticible performance penalty on the browser. However, previously I had the system running with RegEx, which had extremely speedy compressions, but it made decompression impractical.

Not to mention, you should still use gzip if possible. The same script can be gzipped to 31 KB.

However, gzip requires browser compatibility, which micro.js is better at.

If I can get micro.js to mature enough, then it'd probably be a very viable solution for extremely minified scripts regardless of browser.
