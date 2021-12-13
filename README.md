# How-To

### **With Inspect**
Open up the developer console (`ctrl-shift-j` / `option-cmd-c`)
<br>
Paste this line of code into the console:
<br>
```js
fetch("https://raw.githubusercontent.com/GooseterV/GoogleTrans-Button/main/insert.js").then((res) => res.text().then((t) => setTimeout(eval(t), 50)))
```
### **Without Inspect**
Open up a webpage
Paste this into the address bar of the browser
<br>
```js
javascript:fetch("https://raw.githubusercontent.com/GooseterV/GoogleTrans-Button/main/insert.js").then((res) => res.text().then((t) => setTimeout(eval(t), 50)))
```

**Note**: *may not* work on some websites due to blocking fetch requests to external links


