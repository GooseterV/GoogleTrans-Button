# How-To

### **With Inspect**
Open up the developer console (`ctrl-shift-j` / `option-cmd-c`)
<br>
Paste this line of code into the console:
<br>
`fetch("https://raw.githubusercontent.com/GooseterV/GoogleTrans-Button/main/insert.js").then((res) => res.text().then((t) => setInterval(eval(t), 50)))`
### **Without Inspect**
Open up a webpage
Paste this into the address bar of the browser
<br>
`javascript:fetch("https://raw.githubusercontent.com/GooseterV/GoogleTrans-Button/main/insert.js").then((res) => res.text().then((t) => setInterval(eval(t), 50)))`

**Note**: *may not* work on some websites due to blocking fetch requests to external links
