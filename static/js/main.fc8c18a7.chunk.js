(window["webpackJsonpportfolio-react"]=window["webpackJsonpportfolio-react"]||[]).push([[0],Array(24).concat([function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){e.exports=a(72)},,,,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/3DRepresation.10de8637.PNG"},function(e,t,a){e.exports=a.p+"static/media/Gradient_Details.ac979cb5.PNG"},function(e,t,a){e.exports=a.p+"static/media/ListMenue.cdf26d9d.PNG"},function(e,t,a){e.exports=a.p+"static/media/Navigation.ada5c826.PNG"},function(e,t,a){e.exports=a.p+"static/media/TextAnimation.ec788c20.PNG"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),i=a.n(r),l=a(17),s=a(12),o=a(1),m=a(2),u=a(4),p=a(3),h=a(5),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={styles:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.transformID=setInterval((function(){return e.transform()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.transformID)}},{key:"getRandom",value:function(e,t){return Math.random()*(t-e)+e}},{key:"transform",value:function(){for(var e=[],t=0;t<this.props.chip_count;t++)e.push({top:this.getRandom(0,100)+"%",left:this.getRandom(0,100)+"%",width:this.getRandom(0,this.props.chip_width)+"rem",height:this.getRandom(0,this.props.chip_height)+"rem",transform:"translate(-50%, -50%)rotate("+this.getRandom(0,360)+"deg)"});this.setState({styles:e})}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.chip_count;t++)e.push(c.a.createElement("div",{className:"p-chip_color"+t%4+" l-abusolute_z1",style:this.state.styles[t]}));return e}}]),t}(c.a.Component),f=a(8),b=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a;return c.a.createElement("div",{className:"p-chip_base l-centering",id:"base",style:(t=this.props.wrapper_width,a=this.props.wrapper_height,{width:t,height:a})},c.a.createElement("h1",{className:"c-text_white p-chip_text",style:(e=this.props.text_size,{fontSize:e})},c.a.createElement(f.a,{delay:500},this.props.text)),c.a.createElement(d,{chip_count:this.props.chip_count,chip_width:this.props.chip_width,chip_height:this.props.chip_height}))}}]),t}(c.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"f-background f-background_winered c-scrollsnap_item  l-centering"},c.a.createElement(b,{text:"MyPortfolio",text_size:"5vw",wrapper_width:"80vw",wrapper_height:"50px",chip_count:150,chip_width:5,chip_height:5}))}}]),t}(c.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("li",{className:this.props.className},c.a.createElement(l.b,{to:"/templete/"+this.props.id},c.a.createElement("img",{src:this.props.img_src,alt:this.props.title,className:"c-img"}),c.a.createElement("div",{className:"u-padding"},c.a.createElement("h3",{className:"c-text_white u-marginbottom0"},this.props.title))))}}]),t}(c.a.Component),_=(a(50),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[],t=[{id:"3drepresation",img_src:a(51),title:"3DRepresation"},{id:"gradientdetails",img_src:a(52),title:"GradientDetails"},{id:"creativeboxborder",img_src:a(53),title:"CreativeBoxBorder"},{id:"listitemeffects",img_src:a(54),title:"ListItemEffects"},{id:"textanimation",img_src:a(55),title:"TextAnimation"}];return t.forEach((function(a,n){e.push(c.a.createElement(f.a,{delay:700},c.a.createElement(g,{id:a.id,img_src:a.img_src,title:a.title,className:n!==t.length-1?"p-horizontal_item u-marginleft1":"p-horizontal_item u-marginleft1 u-marginright1"})))})),c.a.createElement("div",{className:"f-background f-background_darkblue c-scrollsnap_item l-46spacing_wrapper"},c.a.createElement("h2",{className:"c-text_white l-46spacing_conteiner4"},c.a.createElement(f.a,{delay:500}," My Work")," "),c.a.createElement("ul",{className:" p-horizontal_list u-padding u-marginleft1 l-46spacing_conteiner6"},e),c.a.createElement("div",{className:"p-progressbar"}))}}]),t}(c.a.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"f-background f-background_green c-scrollsnap_item l-46spacing_wrapper u-marginbottom0"},c.a.createElement("h2",{className:"c-text_white l-46spacing_conteiner4"},c.a.createElement(f.a,null,"Profile")),c.a.createElement("ul",{className:"c-text_white  c-font_size u-marginleft1  l-46spacing_conteiner6 "},c.a.createElement("h3",null,"Skill"),c.a.createElement("li",{className:"u-marginleft1"},c.a.createElement(f.a,{delay:500},"C#")),c.a.createElement("li",{className:"u-marginleft1"},c.a.createElement(f.a,{delay:500},"HTML&CSS")),c.a.createElement("li",{className:"u-marginleft1"},c.a.createElement(f.a,{delay:500},"JavaScript")),c.a.createElement("li",{className:"u-marginleft1"},c.a.createElement(f.a,{delay:500},"React"))),c.a.createElement("ul",{className:"c-text_white  c-font_size u-marginleft1  l-46spacing_conteiner6"},c.a.createElement("h3",null,"Reserch"),c.a.createElement("li",{className:"u-text_indent u-marginleft1"},c.a.createElement(f.a,{delay:700},c.a.createElement("a",{className:"c-text_underline",target:"_blank",href:"https://xd.adobe.com/view/a7434bcf-df04-47a4-778d-d6ce16d5ee1d-d172/?fullscreen"},"11\u6708\u7814\u7a76\u5831\u544a\u4f1a\u30ea\u30f3\u30af")))))}}]),t}(c.a.Component);var O=function(){return c.a.createElement("div",{className:"c-scrollsnap_wrapper"},c.a.createElement(E,null),c.a.createElement(_,null),c.a.createElement(v,null))},j=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"progress-wrapper"},c.a.createElement("div",{className:"progress-bar"},c.a.createElement("div",{className:"side front"},c.a.createElement("div",{className:"bar"})),c.a.createElement("div",{className:"side back"},c.a.createElement("div",{className:"bar"})),c.a.createElement("div",{className:"side top"},c.a.createElement("div",{className:"bar"})),c.a.createElement("div",{className:"side bottom"},c.a.createElement("div",{className:"bar"})),c.a.createElement("div",{className:"side left"})))}}]),t}(c.a.Component)),N=(a(57),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("details",{open:!0},c.a.createElement("summary",{className:"neon"},"summary"),c.a.createElement("p",{className:"neon"},"content1"),c.a.createElement("p",{className:"neon"},"content2"),c.a.createElement("p",{className:"neon"},"content3"),c.a.createElement("p",{className:"neon"},"content4"),c.a.createElement("p",{className:"neon"},"content5"))}}]),t}(c.a.Component)),y=(a(24),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"creativeboxwrapper"},c.a.createElement("div",{className:"creativebox"},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"01"),c.a.createElement("h3",null,"Servive One"),c.a.createElement("p",null,"This is an application for source code of online tutorials youtube channel. here i provide source code of each video's posted on my channel about frontend development language such html5, css3 covering most aspects of web designing."),c.a.createElement("div",null,"Read More"))))}}]),t}(c.a.Component)),w=(a(58),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("ul",{className:"creativelist"},c.a.createElement("li",null,"ListItem1"),c.a.createElement("li",null,"ListItem2"),c.a.createElement("li",null,"ListItem3"),c.a.createElement("li",null,"ListItem4"),c.a.createElement("li",null,"ListItem5"))}}]),t}(c.a.Component)),x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"p-book_flex p-book_rotatex"},c.a.createElement("div",{className:"c-box1 c-box_color_white p-book_rotatey_right"}),c.a.createElement("div",{className:"c-box1 c-box_color_gray p-book_rotatey_left"}))}}]),t}(c.a.Component);function k(e){return"3drepresation"===e.id?c.a.createElement(j,null):"gradientdetails"===e.id?c.a.createElement(N,null):"creativeboxborder"===e.id?c.a.createElement(y,null):"listitemeffects"===e.id?c.a.createElement(w,null):"textanimation"===e.id?c.a.createElement(b,{text:"Text",text_size:"5vw",wrapper_width:"20vw",wrapper_height:"5vh",chip_count:50,chip_width:5,chip_height:5}):"book"===e.id?c.a.createElement(x,null):c.a.createElement("div",null)}var C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"f-background f-background_purple l-centering"},c.a.createElement(k,{id:this.props.match.params.id}))}}]),t}(c.a.Component);a(59),a(60),a(61),a(62),a(63),a(64),a(65),a(66),a(67),a(68),a(69),a(70),a(71);function I(){return c.a.createElement(l.a,{basename:"/webtempletes"},c.a.createElement(f.b,null),c.a.createElement(s.a,{exact:!0,path:"/",component:O}),c.a.createElement(s.a,{path:"/templete/:id",component:C}))}i.a.render(c.a.createElement(I,null),document.getElementById("root"));t.default=I}]),[[39,1,2]]]);
//# sourceMappingURL=main.fc8c18a7.chunk.js.map