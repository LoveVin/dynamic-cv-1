let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/*你好，我是一名前端新人,
接下来我要开始加样式了，
我要加的样式是*/
body{
    color: red;
}
/*
首先我要添加一个div
然后给其加上边框
*/
#div1{
    border: 1px solid red;
    height: 200px;
    width: 200px;
}
/*
接下来请注意看
我要将这个div变成一个八卦图
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦图是阴阳形成的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
是不是还差点什么
Let's go!
*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left:50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;
//string = string.replace(/\n/g, '<br>');
string2 = '';
let n = 0;

let step = ()=>{
    setTimeout(()=>{
        if(string[n] === '\n'){
            //判断是不是回车，如果是回车就改成html认识的回车
            string2 += '<br>';
        }
        else if(string[n] === ' '){
            //如果是空格，则改成html的空格
            string2 += "&nbsp";
        }
        else{
            //如果不是回车，就直接添加进去
            string2 += string[n];
        }
        //demo.innerHTML = string.substring(0,n);
        //string2 += (string[n] === '\n' ? "<br>" : string[n]);
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n+1);
        window.scrollTo(0,999999);
        html.scrollTo(0,999999);
        if(n < string.length - 1){
            n += 1;
            step();
        }
    },10);
};

step();

    
    



