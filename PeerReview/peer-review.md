## P3 Peer Review

+ Reviewer's name: Mamdouh Alharbi
+ Reviwee's name: extra808
+ URL to reviewee's Github repo: *<https://github.com/extra808/e28>*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
*Yes, the error is: The requested URL was not found on this server. It occurs when navigating to an external link and clicking back button*

### Were there any parts of the interface that you found confusing or unclear?
*No*

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
*No*

### Are there any parts of the code that you found interesting or taught you something new?
*Yes, below code*
```javascript
saveOffline: function() {
			localStorage.setItem(this.slug, JSON.stringify(this.post));
			this.offline = true;
		}
```
### Are there any best practices discussed in course material that you feel were not addressed in the code?
*No*

### Do you have any additional comments not covered in the above questions?
*No*