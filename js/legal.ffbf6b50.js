(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["legal"],{"0e54":function(e,t,n){(function(t){(function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:m,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:m,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:m,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function s(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||w.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=c(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=c(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=c(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=c(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=c(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag",n._tag).getRegex(),n.blockquote=c(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=y({},n),n.gfm=y({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=c(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=y({},n.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=y({},n.normal,{html:c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),s.rules=n,s.lex=function(e,t){var n=new s(t);return n.lex(e)},s.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},s.prototype.token=function(e,t){var s,r,o,i,a,l,u,h,c,p,d,g,f,m,y,w;e=e.replace(/^ +$/gm,"");while(e)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:k(o,"\n")});else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(t&&(o=this.rules.nptable.exec(e))&&(l={type:"table",header:b(o[1].replace(/^ *| *\| *$/g,"")),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3]?o[3].replace(/\n$/,"").split("\n"):[]},l.header.length===l.align.length)){for(e=e.substring(o[0].length),d=0;d<l.align.length;d++)/^ *-+: *$/.test(l.align[d])?l.align[d]="right":/^ *:-+: *$/.test(l.align[d])?l.align[d]="center":/^ *:-+ *$/.test(l.align[d])?l.align[d]="left":l.align[d]=null;for(d=0;d<l.cells.length;d++)l.cells[d]=b(l.cells[d],l.header.length);this.tokens.push(l)}else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),i=o[2],m=i.length>1,u={type:"list_start",ordered:m,start:m?+i:"",loose:!1},this.tokens.push(u),o=o[0].match(this.rules.item),h=[],s=!1,f=o.length,d=0;d<f;d++)l=o[d],p=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(p-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+p+"}","gm"),"")),this.options.smartLists&&d!==f-1&&(a=n.bullet.exec(o[d+1])[0],i===a||i.length>1&&a.length>1||(e=o.slice(d+1).join("\n")+e,d=f-1)),r=s||/\n\n(?!\s*$)/.test(l),d!==f-1&&(s="\n"===l.charAt(l.length-1),r||(r=s)),r&&(u.loose=!0),y=/^\[[ xX]\] /.test(l),w=void 0,y&&(w=" "!==l[1],l=l.replace(/^\[[ xX]\] +/,"")),c={type:"list_item_start",task:y,checked:w,loose:r},h.push(c),this.tokens.push(c),this.token(l,!1),this.tokens.push({type:"list_item_end"});if(u.loose)for(f=h.length,d=0;d<f;d++)h[d].loose=!0;this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]});else if(t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),o[3]&&(o[3]=o[3].substring(1,o[3].length-1)),g=o[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[g]||(this.tokens.links[g]={href:o[2],title:o[3]});else if(t&&(o=this.rules.table.exec(e))&&(l={type:"table",header:b(o[1].replace(/^ *| *\| *$/g,"")),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3]?o[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]},l.header.length===l.align.length)){for(e=e.substring(o[0].length),d=0;d<l.align.length;d++)/^ *-+: *$/.test(l.align[d])?l.align[d]="right":/^ *:-+: *$/.test(l.align[d])?l.align[d]="center":/^ *:-+ *$/.test(l.align[d])?l.align[d]="left":l.align[d]=null;for(d=0;d<l.cells.length;d++)l.cells[d]=b(l.cells[d].replace(/^ *\| *| *\| *$/g,""),l.header.length);this.tokens.push(l)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var r={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:m,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\s.])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\s.])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:m,text:/^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function o(e,t){if(this.options=t||w.defaults,this.links=e,this.rules=r.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.options.breaks?this.rules=r.breaks:this.rules=r.gfm)}function i(e){this.options=e||w.defaults}function a(){}function l(e){this.tokens=[],this.token=null,this.options=e||w.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}function u(e,t){if(t){if(u.escapeTest.test(e))return e.replace(u.escapeReplace,function(e){return u.replacements[e]})}else if(u.escapeTestNoEncode.test(e))return e.replace(u.escapeReplaceNoEncode,function(e){return u.replacements[e]});return e}function h(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function c(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=n.source||n,n=n.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function p(e,t,n){if(e){try{var s=decodeURIComponent(h(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(r){return null}if(0===s.indexOf("javascript:")||0===s.indexOf("vbscript:")||0===s.indexOf("data:"))return null}t&&!f.test(n)&&(n=d(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(r){return null}return n}function d(e,t){return g[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?g[" "+e]=e+"/":g[" "+e]=k(e,"/",!0)),e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}r._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,r._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,r._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,r.autolink=c(r.autolink).replace("scheme",r._scheme).replace("email",r._email).getRegex(),r._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,r.tag=c(r.tag).replace("comment",n._comment).replace("attribute",r._attribute).getRegex(),r._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,r._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/,r._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,r.link=c(r.link).replace("label",r._label).replace("href",r._href).replace("title",r._title).getRegex(),r.reflink=c(r.reflink).replace("label",r._label).getRegex(),r.normal=y({},r),r.pedantic=y({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",r._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",r._label).getRegex()}),r.gfm=y({},r.normal,{escape:c(r.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:c(r.text).replace("]|","~]|").replace("|$","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").getRegex()}),r.gfm.url=c(r.gfm.url).replace("email",r.gfm._extended_email).getRegex(),r.breaks=y({},r.gfm,{br:c(r.br).replace("{2,}","*").getRegex(),text:c(r.gfm.text).replace("{2,}","*").getRegex()}),o.rules=r,o.output=function(e,t,n){var s=new o(t,n);return s.output(e)},o.prototype.output=function(e){var t,n,s,r,i,a,l="";while(e)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),l+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=u(this.mangle(i[1])),s="mailto:"+n):(n=u(i[1]),s=n),l+=this.renderer.link(s,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(this.inRawBlock=!1),e=e.substring(i[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):u(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,s=i[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s),t?(s=t[1],r=t[3]):r=""):r=i[3]?i[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(i,{href:o.escapes(s),title:o.escapes(r)}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){l+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),l+=this.renderer.strong(this.output(i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),l+=this.renderer.em(this.output(i[6]||i[5]||i[4]||i[3]||i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),l+=this.renderer.codespan(u(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),l+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),l+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.inRawBlock?l+=this.renderer.text(i[0]):l+=this.renderer.text(u(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===i[2])n=u(i[0]),s="mailto:"+n;else{do{a=i[0],i[0]=this.rules._backpedal.exec(i[0])[0]}while(a!==i[0]);n=u(i[0]),s="www."===i[1]?"http://"+n:n}e=e.substring(i[0].length),l+=this.renderer.link(s,null,n)}return l},o.escapes=function(e){return e?e.replace(o.rules._escapes,"$1"):e},o.prototype.outputLink=function(e,t){var n=t.href,s=t.title?u(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,u(e[1]))},o.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},o.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",s=e.length,r=0;r<s;r++)t=e.charCodeAt(r),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},i.prototype.code=function(e,t,n){if(this.options.highlight){var s=this.options.highlight(e,t);null!=s&&s!==e&&(n=!0,e=s)}return t?'<pre><code class="'+this.options.langPrefix+u(t,!0)+'">'+(n?e:u(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:u(e,!0))+"</code></pre>"},i.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},i.prototype.html=function(e){return e},i.prototype.heading=function(e,t,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},i.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},i.prototype.list=function(e,t,n){var s=t?"ol":"ul",r=t&&1!==n?' start="'+n+'"':"";return"<"+s+r+">\n"+e+"</"+s+">\n"},i.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},i.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},i.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},i.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},i.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},i.prototype.tablecell=function(e,t){var n=t.header?"th":"td",s=t.align?"<"+n+' align="'+t.align+'">':"<"+n+">";return s+e+"</"+n+">\n"},i.prototype.strong=function(e){return"<strong>"+e+"</strong>"},i.prototype.em=function(e){return"<em>"+e+"</em>"},i.prototype.codespan=function(e){return"<code>"+e+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(e){return"<del>"+e+"</del>"},i.prototype.link=function(e,t,n){if(e=p(this.options.sanitize,this.options.baseUrl,e),null===e)return n;var s='<a href="'+u(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s},i.prototype.image=function(e,t,n){if(e=p(this.options.sanitize,this.options.baseUrl,e),null===e)return n;var s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s},i.prototype.text=function(e){return e},a.prototype.strong=a.prototype.em=a.prototype.codespan=a.prototype.del=a.prototype.text=function(e){return e},a.prototype.link=a.prototype.image=function(e,t,n){return""+n},a.prototype.br=function(){return""},l.parse=function(e,t){var n=new l(t);return n.parse(e)},l.prototype.parse=function(e){this.inline=new o(e.links,this.options),this.inlineText=new o(e.links,y({},this.options,{renderer:new a})),this.tokens=e.reverse();var t="";while(this.next())t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){var e=this.token.text;while("text"===this.peek().type)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,h(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,s,r="",o="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(r+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",s=0;s<t.length;s++)n+=this.renderer.tablecell(this.inline.output(t[s]),{header:!1,align:this.token.align[s]});o+=this.renderer.tablerow(n)}return this.renderer.table(r,o);case"blockquote_start":o="";while("blockquote_end"!==this.next().type)o+=this.tok();return this.renderer.blockquote(o);case"list_start":o="";var i=this.token.ordered,a=this.token.start;while("list_end"!==this.next().type)o+=this.tok();return this.renderer.list(o,i,a);case"list_item_start":o="";var l=this.token.loose;this.token.task&&(o+=this.renderer.checkbox(this.token.checked));while("list_item_end"!==this.next().type)o+=l||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(o);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},u.escapeTest=/[&<>"']/,u.escapeReplace=/[&<>"']/g,u.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,u.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var g={},f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(){}function y(e){for(var t,n,s=1;s<arguments.length;s++)for(n in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function b(e,t){var n=e.replace(/\|/g,function(e,t,n){var s=!1,r=t;while(--r>=0&&"\\"===n[r])s=!s;return s?"|":" |"}),s=n.split(/ \|/),r=0;if(s.length>t)s.splice(t);else while(s.length<t)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(/\\\|/g,"|");return s}function k(e,t,n){if(0===e.length)return"";var s=0;while(s<e.length){var r=e.charAt(e.length-s-1);if(r!==t||n){if(r===t||!n)break;s++}else s++}return e.substr(0,e.length-s)}function w(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"===typeof t){n||(n=t,t=null),t=y({},w.defaults,t||{});var r,o,i=t.highlight,a=0;try{r=s.lex(e,t)}catch(c){return n(c)}o=r.length;var h=function(e){if(e)return t.highlight=i,n(e);var s;try{s=l.parse(r,t)}catch(c){e=c}return t.highlight=i,e?n(e):n(null,s)};if(!i||i.length<3)return h();if(delete t.highlight,!o)return h();for(;a<r.length;a++)(function(e){"code"!==e.type?--o||h():i(e.text,e.lang,function(t,n){return t?h(t):null==n||n===e.text?--o||h():(e.text=n,e.escaped=!0,void(--o||h()))})})(r[a])}else try{return t&&(t=y({},w.defaults,t)),l.parse(s.lex(e,t),t)}catch(c){if(c.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||w.defaults).silent)return"<p>An error occurred:</p><pre>"+u(c.message+"",!0)+"</pre>";throw c}}m.exec=m,w.options=w.setOptions=function(e){return y(w.defaults,e),w},w.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new i,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},w.defaults=w.getDefaults(),w.Parser=l,w.parser=l.parse,w.Renderer=i,w.TextRenderer=a,w.Lexer=s,w.lexer=s.lex,w.InlineLexer=o,w.inlineLexer=o.output,w.parse=w,e.exports=w})(this||"undefined"!==typeof window&&window)}).call(this,n("c8ba"))},"34f1":function(e,t,n){"use strict";var s=n("c05d"),r=n.n(s);r.a},3618:function(e,t){e.exports="- [How can I report any abuse or offensive content?](#/legal/acceptable-use-policy/#how-can-i-report-any-abuse-or-offensive-content-)\n\n## Welcome to Q Solution LLC’s Acceptable Use Policy\n\n1. Hi, we’re Q Solutions LLC and welcome to our acceptable use policy. This policy sets out what you can and cannot use our sites and products for.\n\n2. When we say **’we’**, **’us’** or **’Q Solutions’** it’s because that’s who we are and we own and run the **Cornerstone.js Market**. If we say ’policy’ we’re talking about this acceptable use policy. If we say ’user terms’ we’re talking about the rules for using any of the Q Solutions products and services. Take the time to read this policy because it forms a part of the user terms for each of the Q Solutions products. By using any of our sites, you agree to this policy. If you do not agree to this policy we won’t take it personally, but please do not use Q Solutions.\n\n## So what’s not acceptable use?\n\n3. It’s **NOT OKAY** to use Q Solutions or any of our sites, services or products to submit, post, build, host or otherwise make available any content that may contain, provide access to (eg, through links to third party websites) or promote any of the following content:\n\n    - **Adult content:** This includes images or videos that contain nudity or sexual activity, or any commercial activity linked to making money from adult content such as escort agencies.\n    - **Exploitation of children:** This includes images or videos depicting children in a way that encourages or promotes attraction towards children.\n    - **Hate speech:** This includes content that supports or condones violence or discrimination against individuals based on race, ethnicity, religion, disability, age, gender, nationality, sexual orientation or gender identity.\n    - **Incitement of violence:** This includes content that threatens, or that is intended to incite, violence against an individual or group of individuals.\n    - **Harassment:** This includes any form of harassment or bullying against an individual or group of individuals.\n    - **Defamation:** This includes any untruthful comments about a person that has the tendency to lower their estimation in the eyes of others.\n    - **Copyright and third party intellectual property:** Using the Q Solutions sites, products or services in violation of the copyright or other intellectual property rights of others is NOT cool, and is illegal, so please don’t do that. For more information report intellectual property infringement please see the [Q Solutions Marketour Content Policy](https://todo).\n    - **Offensive content:** This includes content that would cause offence to a reasonable person, including content that is posted for shock value.\n    - **Fraudulent, misleading or deceptive conduct:** This includes making statements about your own products or services that are not accurate or impersonating others. You must also not use a false email address or misrepresent your affiliation with others. You must not use information gathered from or through the Q Solutions sites, service or products in a way that may confuse or mislead consumers (for example, automatically gathering information to set up a site that looks like one of our sites). You must also not use a false email address or misrepresent your affiliation with others.\n\n4. It’s also **NOT OKAY** to use Q Solutions or any of our sites, services or products to submit, post, build, host or otherwise make available any content that may contain, provide access to (eg, through links to third party websites) or promote any of the following activities:\n\n    - **Supply of regulated goods and services:** This includes the supply of weapons, gambling or adult escort services.\n    - **Illegal activities:** This seems like a no brainer but using Q Solutions, products or services for any dangerous or illegal content or other purposes is NOT acceptable. You should always ensure you’re aware and comply with any applicable laws in USA or other jurisdictions you are located in or doing business in.\n    - **Illegal activities which cause harm to Q Solutions products or services or brand or others:** Unacceptable content or links which might cause harm to the Q Solutions products or services or brand or others is definitely NOT OKAY with us. This includes pirated software, programs or archives that provide the functionality to gain unauthorised access to other systems or networks of any kind, Warez sites, files or web pages that contain viruses, trojans, malware or other applications designed to access a user’s equipment or information with illegal intentions and/or without the knowledge of the user. You must not modify, reproduce, display, publish, distribute, copy, transmit, perform, license, create derivative works from, transfer, or sell or re-sell any information, content, software, or item obtained from or through Q Solutions sites, services or products, other than in accordance with these terms or the license for the item.\n\n5. Q Solutions is founded on the idea of community and like any functioning and healthy community, some things are not allowed and are NOT OKAY. It’s NOT OKAY to:\n\n    - attempt to gain unauthorised access to computer systems or content through the Q Solutions sites, service or products\n    - attempt to contact other members through the Q Solutions sites, services or use any information gained from the Q Solutions sites or services with the intention to make a private arrangement that would otherwise be made using the Q Solutions sites, services or products;\n    - enter any arrangements that are not consistent with, or are intended to apply in addition to, these terms or the Author Terms;\n    - use information gathered from or through the Q Solutions sites, service or products in a way that may confuse or mislead consumers (for example, automatically gathering information to set up a site that looks like one of our sites);\n    - attempt to or actually interrupt, negatively impact or alter the Q Solutions sites, service or products operation in any way.\n\n## How can I report any abuse or offensive content?\n\n6. **Reporting abuse:** Please report suspected policy violations to us using the ’Report Abuse’ by emailing us at [danny.ri.brown+report.abuse@gmail.com](mailto:danny.ri.brown+report.abuse@gmail.com).\n\n## What action might we take if we find a buyer or customer has used our sites, products or services in breach of this policy?\n\n7. We will try and ensure fair outcomes for any content or use we deem as NOT acceptable. If you’re not sure whether your content or intended use of our services is acceptable then please contact us to discuss.\n\n8. If you have breached this acceptable use policy then we may, in our absolute discretion and without notice:\n    - request that you immediately remove the content which we view is NOT acceptable;\n    - immediately suspend or terminate any accounts you have with any of the Q Solutions businesses;\n    - immediately stop providing you with the services;\n    - in serious cases such as those involving the abuse of children, or other illegal activity, report you to the appropriate authorities.\n\n## How can you contact us?\n\n9. If you have any questions about this policy, please contact us at Report Abuse in writing at 7951 Corsham CT, Dublin, OH 43016 or [danny.ri.brown+report.abuse@gmail.com](mailto:danny.ri.brown+report.abuse@gmail.com).\n\n10. We’re really glad you made it to the end of the acceptable use policy, because knowing this stuff is the best way to understand how you can use Q Solutions' sites, products and services.\n\nVersion 1 - Effective date: December 2018."},"3a99":function(e,t){e.exports="- [Welcome to Cornerstone.js Market](https://todo)\n- [How browsing and membership works](https://todo)\n- [How buying items works](https://todo)\n- [Becoming an author](https://todo)\n- [Intellectual property](https://todo)\n- [Our use of your information](https://todo)\n- [Playing fair](https://todo)\n- [Linking; apps made by others](https://todo)\n- [Legal housekeeping](https://todo)\n- [Definitions](https://todo)\n\n## Welcome to Cornerstone.js Market\n\n1. Hi, we’re Q Solutions and welcome! We’re happy to have you here and we hope you enjoy your stay. When we say **‘we’** , **‘us’** or **‘Q Solutions’** it’s because that’s who we are and we own and run the **Cornerstone.js Market** site.\n\n2. Q Solution's digital marketplace helps people around the world get creative and earn online. When you create an account and accept these terms you become a **member** of our community. You will have a Cornerstone.js Market account that will allow you to buy and sell items like the ones found on the Cornerstone.js Market site and make other related transactions.\n\n3. The Cornerstone.js Market site is a platform that allows members to buy and sell licenses to use digital items like Cornerstone.js tools, image loaders, metadata providers, software code, plugins, learning materials and much, much more. On Cornerstone.js Market, buyers and authors (sellers) transact with each other directly and we provide the platform to allow the transactions to happen. Any transactions are logged on your member’s statement, which records the payments made by you to authors via Cornerstone.js Market (as a **buyer**) and by buyers via Cornerstone.js Market to you (as an **author**).\n\n4. The items on Cornerstone.js Market are owned by the authors, not by us. The items on Cornerstone.js Market are uploaded at the direction of the author. We provide the platform services; we do not take ownership of the items.\n\n5. During your time with us you agree to follow the ground rules outlined in these terms so please read and understand them. If you don’t accept the terms then we’ll be sad, but you will need to leave because your presence on and use of the Cornerstone.js Market site is conditional on your acceptance to be bound by these terms and the [Acceptable Use Policy](/#/legal/acceptable-use-policy\") whether you become a member or not.\n\n"},"42e4":function(e,t){e.exports="## Welcome to Q Solution LLC's Privacy Policy\n\n"},4610:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"licenses"},[n("h1",[e._v("This is a licenses page")])])}],o=n("2877"),i={},a=Object(o["a"])(i,s,r,!1,null,null,null);a.options.__file="Licenses.vue";t["default"]=a.exports},"47d4":function(e,t,n){},"519a":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"context-header"},[n("div",{staticClass:"generic-content-container"},[n("nav",{staticClass:"breadcrumbs"},[n("RouterLink",{attrs:{to:"/"}},[e._v("Home")]),n("RouterLink",{attrs:{to:"/legal/market"}},[e._v("Legal")])],1),n("h1",[e._v(e._s(e.title))])])]),n("main",[n("div",{staticClass:"generic-content-container"},[n("div",{staticClass:"left-sidebar"},[n("ul",{staticClass:"sidebar-tabs"},[e._m(0),n("li",[n("RouterLink",{attrs:{to:"/legal/market"}},[e._v("Cornerstone.js Market Terms")])],1),n("li",[n("RouterLink",{attrs:{to:"/legal/author"}},[e._v("Author Terms")])],1),n("li",[n("RouterLink",{attrs:{to:"/legal/acceptable-use-policy"}},[e._v("Acceptable Use Policy")])],1),n("li",[n("RouterLink",{attrs:{to:"/legal/privacy-policy"}},[e._v("Privacy Policy")])],1)])]),n("div",{staticClass:"main-content"},[n("div",{staticClass:"box box-header"},[n("h4",{staticStyle:{margin:"0"}},[e._v(e._s(e.title))])]),n("MarkdownRenderer",{staticClass:"box box-content",attrs:{markdown:e.markdown}})],1)])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("h4",[e._v("Legal")])])}],o=(n("cadf"),n("551c"),n("097d"),n("3a99")),i=n.n(o),a=n("63f2"),l=n.n(a),u=n("3618"),h=n.n(u),c=n("42e4"),p=n.n(c),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"marked-container",domProps:{innerHTML:e._s(e.markdownAsHtml)}})},g=[],f=n("0e54"),m=n.n(f),y={props:{markdown:{type:String,default:""}},computed:{markdownAsHtml:function(){return m()(this.markdown)}}},b=y,k=(n("34f1"),n("2877")),w=Object(k["a"])(b,d,g,!1,null,null,null);w.options.__file="MarkdownRenderer.vue";var v=w.exports,x={props:{content:{type:String,default:"market"}},components:{MarkdownRenderer:v},computed:{markdown:function(){switch(this.content){case"author":return l.a;case"privacy-policy":return p.a;case"acceptable-use-policy":return h.a;default:return i.a}},title:function(){switch(this.content){case"author":return"Author Terms";case"privacy-policy":return"Privacy Policy";case"acceptable-use-policy":return"Acceptable Use Policy";default:return"Cornerstone.js Market Terms"}}}},_=x,S=(n("7309"),Object(k["a"])(_,s,r,!1,null,"0a066fa4",null));S.options.__file="Legal.vue";t["default"]=S.exports},"63f2":function(e,t){e.exports="- Welcome\n- Becoming an Author\n- How selling your items works\n- How do payments of earnings work\n- Author house-keeping\n- Special Arrangements\n- Definitions\n- Go forth and author!\n\n## Welcome\n\n1. Hi, we’re Q Solutions LLC. We’ve met before over at Cornerstone.js Market Terms. It’s good to meet you again and we’re really glad you’re keen on becoming an author with us.\n\n2. Imagine creating what you want, when you want, from the comfort of your own home, making passive income whether you’re working or not. Some of our authors sell stock in their free time as a hobby, some do it to get their name out there, and some are able to make it their full time profession.\n\n3. Becoming an author is easy and if you’ve reached this point then you’re already a member and you’ve accepted our [Cornerstone.js Market Terms](https://todo). These additional terms for authors (**‘Author Terms’**) are an extra part of the Cornerstone.js Market Terms that apply specifically to authors on the Cornerstone.js Market. You’ll need to agree to them before you can become an author. These govern the relationships, rights and obligations of authors to us and buyers using Cornerstone.js Market. You agree to put your items on Envato Market and make them available to buyers on the basis stated in the Envato Market Terms and these Author Terms.\n\n> As an author on the Envato Market you have responsibilities to us and buyers of your items. Please take the time to review these Author Terms carefully.\n\n4. When we say **‘you’** in these Author Terms we are referring to you, the author whose details are listed as the Cornerstone.js Market account holder. All other words defined or explained in the Cornerstone.js Market Terms have the same meaning here. If there’s any inconsistency between what we say in these Author Terms and what is in the Cornerstone.js Market Terms, what we say in these Author Terms prevails.\n\n5. Read on for details about your author responsibilities, the process of selling your items on the Cornerstone.js Market and how you can earn money with us.\n\n"},7309:function(e,t,n){"use strict";var s=n("47d4"),r=n.n(s);r.a},8908:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"help-author"},[n("h1",[e._v("This is a help-author page")])])}],o=n("2877"),i={},a=Object(o["a"])(i,s,r,!1,null,null,null);a.options.__file="HelpAuthor.vue";t["default"]=a.exports},c05d:function(e,t,n){},c3ef:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"help"},[n("h1",[e._v("This is a help page")])])}],o=n("2877"),i={},a=Object(o["a"])(i,s,r,!1,null,null,null);a.options.__file="Help.vue";t["default"]=a.exports},fa05:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sitemap"},[n("h1",[e._v("This is a sitemap page")])])}],o=n("2877"),i={},a=Object(o["a"])(i,s,r,!1,null,null,null);a.options.__file="Sitemap.vue";t["default"]=a.exports}}]);
//# sourceMappingURL=legal.ffbf6b50.js.map