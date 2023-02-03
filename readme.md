[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

<h1 align="left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20221110153201"width="60" align="center" />
    Typescript
</h1>


## Objectives

- You'll understand what typescript is and what it does for javascript developers.
- How to use typescript
- How you've unknowingly been using typescript all along (via intellisense)


## Who uses typescript
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" height="50">

**First**, we were surprised by the number of small bugs we found when converting our code.

**Second**, we underestimated how powerful the editor integration is.

TypeScript was such a boon to our stability and sanity that we started using it for all new code within days of starting the conversion.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" height="50">

**38% [...] bugs preventable with TypeScript** according to postmortem analysis.

With TypeScript, engineers can move **faster more safely**.

End-to-end type safety because the types used by the back-end and the front-end share a source of truth.

<img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-768x432.png" height="50">

Using TypeScript is **simple and pleasant** for all Google engineers.

Around eight or nine languages are officially supported and TypeScript is one of them.

---

Who else uses typescript?

![](assets/ts-weekly-downloads.png)


```json
"typescript.validate.enable": false,
"javascript.validate.enable": false,
```

## Adopt TypeScript Gradually

Heres 2 things you can do to adopt typescript gradually.

In a javascript file:
```js
function compact(arr) {
    if (orr.length > 10) 
        return arr.trim(0, 10)
    return arr
}
```
Vscode won't warn you and this code will crash in the browser.

**1. Change the file extension to `.ts`:**
```ts
function compact(arr) {
    if (orr.length > 10) 
        return arr.trim(0, 10)
    return arr
}
```
You'll get an error on line:2 "`Cannot find name 'orr'`"

**2. Next, if you specify that you expect arr to be an array with `: any[]`**
```ts
function compact(arr: any[]) {
    if (arr.length > 10) 
        return arr.trim(0, 10)
    return arr
}
```
You'll get another error telling you: `"Property 'trim' does not exist on type 'any[]'."`

Which brings us to this code snippet.
```ts
function compact(arr: any[]) {
    if (orr.length > 10) 
        return arr.slice(0, 10) // slice
    return arr
}
```

Each of these errors would have been shown in the browser, but that requires you to:
1. Save and then run your code.
2. Actually run the function with the error
3. Read and interpret the error message (which may be the cryptic `"Cannot read properties of undefined (reading 'length')"`)
4. Go back to your editor & find the line in question.

Now imagine you make a bunch of errors. Wouldn't it be easier to have **instant** feedback that you made an oopsie?

For unit-2 I would like to encorage the use of at least Step 1 and optionally Step 2.



> Source for material: [typescriptlang](https://www.typescriptlang.org/)
> 
> Further reading: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html