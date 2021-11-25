# How-To

### **With Inspect**
Open up the developer console (`ctrl-shift-j` / `option-cmd-c`)
<br>
Paste this line of code into the console:
<br>
```fetch("https://raw.githubusercontent.com/GooseterV/GoogleTrans-Button/main/insert.js").then((res) => res.text().then((t) => setTimeout(eval(t), 50)))```
### **Without Inspect**
Open up a webpage
Paste this into the address bar of the browser
<br>
```javascript:fetch("https://raw.githubusercontent.com/GooseterV/GoogleTrans-Button/main/insert.js").then((res) => res.text().then((t) => setTimeout(eval(t), 50)))```

**Note**: *may not* work on some websites due to blocking fetch requests to external links
If you need to bypass this for whatever reason, use this instead
```
fetch(atob("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0dvb3NldGVyVi9Hb29nbGVUcmFucy1CdXR0b24vbWFpbi9pbnNlcnQuanM=")).then((res) => res.text().then((t) => setTimeout(eval(t), 50)))
```
