// ==UserScript==
// @name         chathe.net emoticon override
// @version      0.54
// @description  Add custom emoticons to chathe.net
// @author       Chameleon
// @include      http*://chathe.net*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  /*
  var style=document.createElement('style');
  style.innerHTML='.sidebar { position:relative; }'+
    '.inputContainer { position:relative; }';
  document.head.appendChild(style);
  */

  document.body.setAttribute('style', 'overflow-x: hidden;');
  var smileyArray = [
    [":P", 'https://i.imgur.com/ImIOyBG.gif'],
    [":D", 'https://ptpimg.me/2rw827.gif'],
    [":tea:", 'https://ptpimg.me/nr8hqi.gif'],
    [":chameleon:", 'https://i.imgur.com/0fly3G3.gif'],
    [":tux:", 'https://i.imgur.com/igqtb0n.gif'],
    [":lmao:", 'https://i.imgur.com/3CQ04FP.gif'],
    [":popcorn:", 'https://i.imgur.com/kjrLlxU.gif'],
    [":sleep:", 'https://i.imgur.com/6Siaaus.gif'],
    [":juggle:", 'https://i.imgur.com/QWXNLqE.gif'],
    [":whisper:", 'https://i.imgur.com/nKvToS2.gif'],
    [":w00t:", 'https://i.imgur.com/wb9W4tX.gif'],
    [":\\", 'https://i.imgur.com/Hyo01MS.gif'],
    [":floating:", 'https://i.imgur.com/JgEeMXH.gif'],
    [":greenstars:", 'https://i.imgur.com/Lb3xDCY.gif'],
    [":giggle:", 'https://i.imgur.com/exDF5SP.gif'],
    [":blowkiss:", 'https://i.imgur.com/sUch0IV.gif'],
    [":wtf:", 'https://i.imgur.com/e6x2Hji.gif'],
    [":bored:", 'https://i.imgur.com/xI6oNlC.gif'],
    [":bye:", 'https://i.imgur.com/sUkDXaU.gif'],
    [":nana:", 'https://i.imgur.com/KmhZGvT.gif'],
    ["O_o", 'https://i.imgur.com/NQhsF95.gif'],
    [":pray:", 'https://i.imgur.com/SGheBPp.gif'],
    [":reading:", 'https://i.imgur.com/QTNwE9m.gif'],
    [":sick:", 'https://i.imgur.com/aD1TkmB.gif'],
    [":sadangel:", 'https://i.imgur.com/RhbAzaU.gif'],
    [":clueless:", 'https://i.imgur.com/mlDHlZ0.gif'],
    [":hug:", 'https://i.imgur.com/ueLGV8H.gif'],
    [":lonely:", 'https://ptpimg.me/u94h5n.gif'],
    [":yawn:", 'https://i.imgur.com/fJEQPfJ.gif'],
    [":rofl:", 'https://i.imgur.com/ouaJnc9.gif'],
    [":windows:", 'https://i.imgur.com/dNuzuUG.gif'],
    [":worship:", 'https://i.imgur.com/JdvGfoP.gif'],
    [":slow:", 'https://i.imgur.com/CFOiNci.gif'],
    [":idea:", 'https://i.imgur.com/pXfZMWI.gif'],
    [":omg:", 'https://i.imgur.com/4gmw6p7.gif'],
    [":shrug:", 'https://i.imgur.com/XqrsIWn.gif'],
    [":crazy:", 'https://i.imgur.com/jY3BSgC.gif'],
    [":ashamed:", 'https://i.imgur.com/vag48ky.gif'],
    [":sleepy:", 'https://i.imgur.com/HyyxxNU.gif'],
    [":nod:", 'https://i.imgur.com/J5hHUEm.gif'],
    [":disbelief:", 'https://i.imgur.com/nBJ0dfc.gif'],
    [":dance:", 'https://i.imgur.com/7JhoRpt.gif'],
    [":boogie:", 'https://i.imgur.com/iY1LHMq.gif'],
    [":mwahaha:", 'https://i.imgur.com/l5xAnl6.gif'],
    ["\^\^;", 'https://i.imgur.com/kLTwGJ8.gif'],
    [":meditation:", 'https://i.imgur.com/1K5BKbz.gif'],
    [":movingon:", 'https://i.imgur.com/K13Ivy5.gif'],
    [":O", 'https://i.imgur.com/JGzmkc0.gif'],
    [":-O", 'https://i.imgur.com/qB5wAXU.gif'],
    [":wave:", 'https://i.imgur.com/OR5qCzd.gif'],
    [":sadpanda:", 'https://i.imgur.com/LxQNjEt.png'],
    [":paddle:", 'https://i.imgur.com/7KypJ36.gif'],
    [":phew:", 'https://i.imgur.com/6IIOT2l.gif'],
    [":phew2:", 'https://i.imgur.com/KVt6UE1.gif'],
    [":ninja:", 'https://i.imgur.com/wtU8uww.gif'],
    [":ninjaglomp:", 'https://i.imgur.com/eLEZHDZ.gif'],
    [":ninjaattack:", 'https://i.imgur.com/1NPDsGq.gif'],
    [":ninjadash:", 'https://i.imgur.com/OKfiUvx.gif'],
    [":ninjavspirate:", 'https://i.imgur.com/ibhiRGE.gif'],
    [":ninjaabduct:", 'https://i.imgur.com/TVgwby2.gif'],
    [":lag:", 'https://i.imgur.com/CrBZ9rz.gif'],
    [":yayyay:", 'https://i.imgur.com/xa20wIO.gif'],
    [":reading2:", 'https://i.imgur.com/74hXb1y.gif'],
    [":omgcat:", 'https://i.imgur.com/Q57xG1M.gif'],
    [":watching:", 'https://i.imgur.com/jBhpFlo.gif'],
    [":kinky_spank:", 'https://i.imgur.com/GcvvO6F.gif'],
    [":headphones:", 'https://i.imgur.com/Tz4HJkn.gif'],
    [":headphones2:", 'https://i.imgur.com/9EqJzo7.gif'],
    [":dfaithyb:", 'https://i.imgur.com/qM5emjZ.gif'],
    [":thumbsup:", 'https://i.imgur.com/yRLCrUr.gif'],
    [":computerrage:", 'https://i.imgur.com/3w2UwyH.gif'],
    [":nod2:", 'https://i.imgur.com/m2IjGqE.gif'],
    [":no:", 'https://i.imgur.com/rn7BhH4.gif'],
    [":hmm:", 'https://i.imgur.com/qG9dNqC.gif'],
    [":rofl2:", 'https://i.imgur.com/f01eCWs.gif'],
    [":seeingstars:", 'https://i.imgur.com/6HrAO1l.gif'],
    [":clap:", 'https://i.imgur.com/N6eqr8a.gif'],
    [":clapping:", 'https://i.imgur.com/NaLK3Jm.gif'],
    [":pirate:", 'https://i.imgur.com/iJTod2k.gif'],
    [":shh:", 'https://i.imgur.com/vwkt4Ln.gif'],
    [":glee2:", 'https://i.imgur.com/sjhEDXX.gif'],
    [":shrug2:", 'https://i.imgur.com/HC3bDbE.gif'],
    [":boom:", 'https://i.imgur.com/86RrXiM.gif'],
    [":machinegun:", 'https://i.imgur.com/5Qobtmc.gif'],
    [":rolleyes:", 'https://i.imgur.com/8fVzutI.gif'],
    ["O_O", 'https://i.imgur.com/Fn1mUIL.gif'],
    [":clown:", 'https://i.imgur.com/io2EUgG.gif'],
    [":lol:", 'https://i.imgur.com/WC1MPn1.gif'],
    [":writing:", 'https://i.imgur.com/WxkiJCA.gif'],
    [":coding:", 'https://i.imgur.com/6WpaioD.gif'],
    [":tighthug:", 'https://i.imgur.com/jOBr693.gif'],
    [":thunder:", 'https://i.imgur.com/ftK1EBw.gif'],
    [":violin:", 'https://i.imgur.com/tKq1a6A.gif'],
    [":timewarp:", 'https://i.imgur.com/ZopAGgl.gif'],
    [":chirp:", 'https://i.imgur.com/06B5SoT.gif'],
    [":help:", 'https://i.imgur.com/cp3onv1.gif'],
    [":phone_rage:", 'https://i.imgur.com/LfB8nQI.gif'],
    [":bird:", 'https://i.imgur.com/LhFoeG1.gif'],
    [":faith:", 'https://i.imgur.com/0vzuXl8.gif'],
    [":cartwheel:", 'https://i.imgur.com/27h4mm7.gif'],
    [":glomp:", 'https://i.imgur.com/R7G0p6e.gif'],
    [":facepalmtree:", 'https://i.imgur.com/3rk8AUc.gif'],
    [":facepalm:", 'https://i.imgur.com/HLC0Vlw.gif'],
    [":sun:", 'https://i.imgur.com/RmsPtiU.gif'],
    [":itardnet:", 'https://i.imgur.com/Uh8GyC0.gif'],
    [":dontignore:", 'https://i.imgur.com/867olBn.gif'],
    [":goldstar:", 'https://i.imgur.com/CwLrdEh.gif'],
    [":highfive:", 'https://i.imgur.com/3bCloDf.gif'],
    [":WAVE:", 'https://i.imgur.com/Mb3r1ky.gif'],
    [":ghost:", 'https://i.imgur.com/Ch1yojH.gif'],
    [":pumpkin_omg:", 'https://i.imgur.com/KCrZxMe.gif'],
    [":halloween_wave:", 'https://i.imgur.com/4ZbTfcc.gif'],
    [":monstermash:", 'https://i.imgur.com/7ekhCqT.gif'],
    [":owlnoid:", 'https://i.imgur.com/VCx9Hz0.gif'],
    [":suspicious:", 'https://i.imgur.com/2kDRNzU.gif'],
    [":glee:", 'https://i.imgur.com/5Fs7axF.gif'],
    ["\\o/", 'https://i.imgur.com/VYtAwg5.gif'],
    [":fingerscrossed:", 'https://i.imgur.com/4HPA0j4.png'],
    [":police:", 'https://i.imgur.com/F8I6uyG.gif'],
    [":hitandrun:", 'https://i.imgur.com/lAsbYr4.gif'],
    [":policecar:", 'https://i.imgur.com/2fSflgJ.png'],
    [":puke:", 'https://i.imgur.com/eVualD9.gif'],
    [":timeflies:", 'https://ptpimg.me/muw015.gif'],
    [":tumbleweed:", 'https://i.imgur.com/bqz5BoM.gif'],
    [":beatingADeadHorse:", 'https://i.imgur.com/GFleK4y.gif'],
    [":omg2:", 'https://i.imgur.com/Sl8r9EZ.gif'],
    [":digging:", 'https://i.imgur.com/OfX4t8K.gif'],
    [":surrender:", 'https://i.imgur.com/BIQYCUn.gif'],
    [":rockOn:", 'https://i.imgur.com/qgCyXir.gif'],
    [":jedi:", 'https://i.imgur.com/NI6oTXP.gif'],
    [":crash:", 'https://i.imgur.com/Bjuk2UU.gif'],
    [":stir:", 'https://i.imgur.com/IRjwWHd.gif'],
    [":poke:", 'https://i.imgur.com/JfWfXzU.gif'],
    [":eyebrow:", 'https://i.imgur.com/bTmawQb.gif'],
    [":hahano:", 'https://i.imgur.com/n8qGRqe.gif'],
    [":sarcasticclap:", 'https://i.imgur.com/TLHMTGz.gif'],
    [":stealthglomp:", 'https://i.imgur.com/DzlOpmF.gif'],
    [">\.<", 'https://ptpimg.me/yl03u7.png'],
    [":deadchat:", 'https://i.imgur.com/7Wxqug8.gif'],
    [":waiting:", 'https://i.imgur.com/fhXTETO.gif'],
    [":sadnod:", 'https://i.imgur.com/pyL94Br.gif'],
    [":vodka:", 'https://i.imgur.com/KxjNQGW.gif'],
    [":monorailcat:", 'https://i.imgur.com/lql9kwr.png'],
    [":monorailtrack:", 'https://i.imgur.com/XYJ5igz.png'],
    [":grouphug:", 'https://ptpimg.me/0sir5y.gif'],
    //["::", ''],
    //["::", ''],
    //["::", ''],
  ];
  smileyArray.sort(sortSmileys);

  var s=document.createElement('style');
  s.innerHTML = '@keyframes animateOut { 0% { left: 0px; } 100% { left: 100%; } }\n';
  s.innerHTML+= '@keyframes animateIn { 0% { left: 100%; transform: scaleX(-1); } 100% { left: 0; transform: scaleX(-1); } }';
  s.innerHTML+= '@keyframes reanimateOut { 0% { left: 0px; transform: scaleX(-1) } 100% { left: 100%; transform: scaleX(-1); } }\n';
  s.innerHTML+= '@keyframes reanimateIn { 0% { left: 100%; } 100% { left: 0; } }\n';
  // Animated text colours
  s.innerHTML+= '@keyframes usernameColor { 0% { filter:saturate(100%) drop-shadow(0px 0px 0px black) hue-rotate(0deg); -webkit-filter:saturate(100%) drop-shadow(0px 0px 0px black) hue-rotate(0deg); } 50% { filter:saturate(200%) drop-shadow(0px 0px 5px black) hue-rotate(-30deg); -webkit-filter:saturate(200%) drop-shadow(0px 0px 1px black) hue-rotate(-30deg); } 100% { filter:saturate(100%) drop-shadow(0px 0px 0px black) hue-rotate(0deg); -webkit-filter(100%) drop-shadow(0px 0px 0px black) hue-rotate(0deg); } }\n';
  s.innerHTML+= '@keyframes rainbow{0%{color: #FF002B;} 33%{color: #882BFF; background: rgba(255, 255, 255, 0.4);} 66%{color: #CBFF00; rgba(0,0,0, 0.4);} 100%{color: #FF002B; background: initial;}}\n';
  document.head.appendChild(s);

  var ob=new MutationObserver(newRoom);
  ob.observe(document.getElementsByClassName('room')[0].parentNode, {attributes:true, childList:true, characterData:true});
  newRoom();

  function newRoom()
  {
    var rooms=document.getElementsByClassName('room');
    for(var i=1; i<rooms.length; i++)
    {
      var room=rooms[i];
      if(room.getAttribute('customSmileys')=='true')
      {
        continue;
      }
      room.setAttribute('customSmileys', 'true');

      room.getElementsByClassName('sidebar')[0].style.position='relative';

      var m=room.getElementsByClassName('m')[0];

      m.addEventListener("keydown", hook.bind(undefined, m, room), false);

      var containerDiv=document.createElement('div');
      //containerDiv.style.position='relative';
      containerDiv.setAttribute('class', 'infobutton');
      var ipC=room.getElementsByClassName('inputContainer')[0];
      ipC.insertBefore(containerDiv, ipC.firstElementChild);
      var a = document.createElement('a');
      a.href = 'javascript:void(0);';
      a.addEventListener('click', showSmileys.bind(undefined, room), false);
      a.title = 'Custom Smileys';
      a.setAttribute('style', 'position: absolute; right: 30px; top:0px; margin-top: 3px; font-size: 21px; color: #454545;');
      a.innerHTML = '☺';
      containerDiv.appendChild(a);

      var ob1=new MutationObserver(usercount.bind(undefined, room, room.id));
      ob1.observe(room.getElementsByClassName('userlist')[0], {attributes: true, childList: true, characterData: true});
      usercount(room, room.id);

      var messages=room.getElementsByClassName("messages")[0];
      var ob=new MutationObserver(animate.bind(undefined, messages));
      ob.observe(messages, {attributes: true, childList: true, characterData: true});
    }
  }

  /*
  var m=document.getElementById('m');
  if(m)
  {
    m.addEventListener("keydown", hook.bind(undefined, m, ''), false);

    var a = document.createElement('a');
    a.href = 'javascript:void(0);';
    a.addEventListener('click', showSmileys.bind(undefined, ''), false);
    a.title = 'Custom Smileys';
    a.setAttribute('style', 'position: absolute; right: 30px; margin-top: 3px; font-size: 21px; color: #454545;');
    a.innerHTML = '☺';
    document.getElementById('inputContainer').appendChild(a);

    var ob1=new MutationObserver(usercount.bind(undefined, document, false, ''));
    ob1.observe(document.getElementById('userlist'), {attributes: true, childList: true, characterData: true});
    usercount(document.body, false, '');

    var ob=new MutationObserver(animate.bind(undefined, document));
    var messages=document.getElementsByClassName("messages");
    if(messages[0].children.length>0 || messages.length===1)
      messages=messages[0];
    else
      messages=messages[1];
    ob.observe(messages, {attributes: true, childList: true, characterData: true});
  }
  if(typeof(roomAdded)!=="undefined")
  {
    window.roomAdded=function(roomname)
    {
      var div=document.getElementById(roomname);
      var m=div.getElementsByClassName('m')[0];
      m.addEventListener("keydown", hook.bind(undefined, m, roomname), false);

      var a = document.createElement('a');
      a.href = 'javascript:void(0);';
      a.addEventListener('click', showSmileys.bind(undefined, roomname), false);
      a.title = 'Custom Smileys';
      a.setAttribute('style', 'position: absolute; right: 30px; margin-top: 3px; font-size: 21px; color: #454545;');
      a.innerHTML = '☺';
      div.getElementsByClassName('inputContainer')[0].appendChild(a);

      var ob1=new MutationObserver(usercount.bind(undefined, div, true, roomname));
      ob1.observe(div.getElementsByClassName('userlist')[0], {attributes: true, childList: true, characterData: true});
      usercount(div, true, roomname);

      var ob=new MutationObserver(animate.bind(undefined, div));
      var messages=div.getElementsByClassName("messages");
      if(messages[0].children.length>0 || messages.length===1)
        messages=messages[0];
      else
        messages=messages[1];
      console.log(messages);
      ob.observe(messages, {attributes: true, childList: true, characterData: true});
    };
  }
  / *else
  {
    window.processMessage=function(message)
    {
      if(message == "/show customSmileys")
      {
        showSmileys();
        return "";
      }
      else if(message == "/show :)")
      {
        showSmileys();
        return "";
      }
      else if(message.indexOf("/share customSmileys") == 0)
      {
        message = "GreaseMonkey script for Custom Smileys for these chats: [url=https://github.com/Nealefelaen/chathenet_extensions/raw/master/chathe.net%20emoticon%20override.user.js]Install link[/url]"+(m.value.split('/share customSmileys')[1]);
        message +="\nOr you can load the script natively on the page with: /use customSmileys\nOnce installed, to display the available smileys use: /show customSmileys";
      }
      for(var i=0; i<smileyArray.length; i++)
      {
        var s = smileyArray[i];
        var r=new RegExp(s[0].replace(/\\/g, "\\\\").replace(/\^/g, "\\^")+"(?!\\[\\/emo)", "g");
        //message = message.replace(r, "[emo="+s[1]+"]"+s[0]+"[/emo]");
        message=nonCodeReplace(r, "[emo="+s[1]+"]"+s[0]+"[/emo]", message);
      }
      return message;
    };
  }*/

  function nonCodeReplace(regex, replacement, message)
  {
    var split=message.split('[code]');
    var text1=split[0].replace(regex, replacement);
    for(var i=1; i<split.length; i++)
    {
      var split2=split[i].split('[/code]');
      text1+='[code]'+split2[0]+'[/code]';
      for(var j=1; j<split2.length; j++)
      {
        text1+=split2[j].replace(regex, replacement);
      }
    }
    return text1;
  }

  function hook(m, room, event)
  {
    if(event.which == 10 || event.which == 13)
    {
      if(m.value == "/show customSmileys")
      {
        showSmileys(room);
        m.value = "";
        return;
      }
      else if(m.value.indexOf("/share customSmileys") == 0)
      {
        m.value = "GreaseMonkey script for Custom Smileys for these chats: [url=https://github.com/Nealefelaen/chathenet_extensions/raw/master/chathe.net%20emoticon%20override.user.js]Install link[/url]"+(m.value.split('/share customSmileys')[1]);
        m.value +="\nOr you can load the script natively on the page with: /use customSmileys\nOnce installed, to display the available smileys use: /show customSmileys";
      }
      for(var i=0; i<smileyArray.length; i++)
      {
        var s = smileyArray[i];
        var r=new RegExp(s[0].replace(/\\/g, "\\\\").replace(/\^/g, "\\^")+"(?!\\[\\/emo)", "g");
        m.value = m.value.replace(r, "[emo="+s[1]+"]"+s[0]+"[/emo]");
      }
    }
  }
  function showSmileys(room)
  {
    var div1=document.getElementById('customSmileyOverlay'+room.id);
    if(div1)
    {
      close(div1);
      return;
    }
    div1=document.createElement('div');
    div1.id = 'customSmileyOverlay'+room.id;
    var h=room.getElementsByClassName('m')[0].clientHeight;
    div1.setAttribute('style', 'position: fixed; top: 0; left: 0; right: 0; margin: auto; max-height: calc(100% - 60px); background: rgba(0, 0, 0, 0.7); overflow-y: scroll; text-align: center;');
    document.body.appendChild(div1);
    var div=document.createElement('div');
    div.setAttribute('style', 'display: flex; flex-wrap: wrap;');
    div1.appendChild(div);

    for(var i=0; i<smileyArray.length; i++)
    {
      var s = smileyArray[i];
      var d = document.createElement('div');
      d.setAttribute('style', 'display: flex; align-items: center; cursor: pointer;');
      div.appendChild(d);
      var span = document.createElement('span');
      span.setAttribute('style', 'display: inline-block; width: 150px; text-align: right; padding-right: 5px;');
      span.innerHTML = s[0];
      d.appendChild(span);
      var ispan = document.createElement('span');
      var img=document.createElement('img');
      ispan.appendChild(img);
      ispan.setAttribute('style', 'display: inline-block; width: 150px; text-align: left;');
      img.src = s[1];
      d.appendChild(ispan);
      d.addEventListener('click', addToM.bind(undefined, s[0]), false);
    }

    div.appendChild(document.createElement('br'));
    div1.appendChild(document.createElement('hr'));

    var commands = document.createElement('div');
    div1.appendChild(commands);
    commands.innerHTML = '/me animate X - Slides the Xth image (from the bottom of the page) off the right side of the page, and back to it\'s original position<br />';
    commands.innerHTML+= '/me reAnimate X - Slides the Xth image (from the bottom of the page) off the right side of the page, and back to it\'s original position, but flips the image first<br />';
    //commands.innerHTML+= '/me asks for the time - shares what time it is for you, and gets other people\'s local time if they have it enabled';
    commands.innerHTML+= '/show customSmileys - Shows this custom smiley overlay. Clicking on a smiley here will add it to the chat input<br />';
    commands.innerHTML+= '/use customSmileys - Use the site hook to load the custom smileys script (doesn\'t require greasemonkey)<br />';
    commands.innerHTML+= '/share customSmileys - Sends a pre-filled message to the chat explaining how to get the custom smileys script<br />';

    div1.appendChild(document.createElement('hr'));

    var a=document.createElement('a');
    //div1.appendChild(a);
    a.href = ('javascript:void(0);');
    a.addEventListener('click', toggle_timeshare.bind(undefined, a), false);
    if(window.localStorage.hackeryTime == "on")
    {
      a.innerHTML = "Time sharing is on";
    }
    else
    {
      a.innerHTML = "Time sharing is off";
    }

    div1.appendChild(document.createElement('br'));

    var a=document.createElement('a');
    div1.appendChild(a);
    a.href = ('javascript:void(0);');
    a.addEventListener('click', toggle_hackery.bind(undefined, a), false);
    if(window.localStorage.shh_hackery == "true")
    {
      a.innerHTML = "Shh, hackery is on";
    }
    else
    {
      a.innerHTML = "Shh, hackery is off";
    }

    div1.appendChild(document.createElement('br'));

    var a=document.createElement('a');
    div1.appendChild(a);
    a.href = ('javascript:void(0);');
    a.addEventListener('click', toggle_usernames.bind(undefined, a), false);
    if(window.localStorage.shh_usernames == "false")
    {
      a.innerHTML = "Custom usernames are off";
    }
    else
    {
      a.innerHTML = "Custom usernames are on";
    }

    div1.appendChild(document.createElement('br'));

    var a=document.createElement('a');
    div1.appendChild(a);
    a.href = ('javascript:void(0);');
    a.addEventListener('click', toggle_sidebar.bind(undefined, a), false);
    if(window.localStorage.shh_sidebar == "false")
    {
      a.innerHTML = "Sidebar is off";
    }
    else
    {
      a.innerHTML = "Sidebar is on";
    }

    div1.appendChild(document.createElement('br'));

    var a=document.createElement('a');
    div1.appendChild(a);
    a.href = 'javascript:void(0);';
    a.innerHTML = '[Close]';
    a.addEventListener('click', close.bind(undefined, div1), false);
  }
  function close(div)
  {
    div.parentNode.removeChild(div);
  }
  /*var ob1=new MutationObserver(usercount);
  ob1.observe(document.getElementById('userlist'), {attributes: true, childList: true, characterData: true});
  usercount();
  var ob=new MutationObserver(animate);
  var messages=document.getElementsByClassName("messages");
  if(messages[0].children.length>0)
    messages=messages[0];
  else
    messages=messages[1];
  ob.observe(messages, {attributes: true, childList: true, characterData: true});
  var s=document.createElement('style');
  s.innerHTML = '@keyframes animateOut { 0% { left: 0px; } 100% { left: 100%; } }\n';
  s.innerHTML+= '@keyframes animateIn { 0% { left: 100%; transform: scaleX(-1); } 100% { left: 0; transform: scaleX(-1); } }';
  s.innerHTML+= '@keyframes reanimateOut { 0% { left: 0px; transform: scaleX(-1) } 100% { left: 100%; transform: scaleX(-1); } }\n';
  s.innerHTML+= '@keyframes reanimateIn { 0% { left: 100%; } 100% { left: 0; } }\n';
  // Animated text colours
  s.innerHTML+= '@keyframes usernameColor { 0% { filter:saturate(100%) drop-shadow(0px 0px 0px black) hue-rotate(0deg); -webkit-filter:saturate(100%) drop-shadow(0px 0px 0px black) hue-rotate(0deg); } 50% { filter:saturate(200%) drop-shadow(0px 0px 5px black) hue-rotate(-30deg); -webkit-filter:saturate(200%) drop-shadow(0px 0px 1px black) hue-rotate(-30deg); } 100% { filter:saturate(100%) drop-shadow(0px 0px 0px black) hue-rotate(0deg); -webkit-filter(100%) drop-shadow(0px 0px 0px black) hue-rotate(0deg); } }\n';
  s.innerHTML+= '@keyframes rainbow{0%{color: #FF002B;} 33%{color: #882BFF; background: rgba(255, 255, 255, 0.4);} 66%{color: #CBFF00; rgba(0,0,0, 0.4);} 100%{color: #FF002B; background: initial;}}\n';
  document.head.appendChild(s);*/

  if(window.localStorage.shh_hackery == "true")
  {
    shh_hackery();
  }
})();

function usercount(div, room)
{
  if(window.localStorage.shh_hackery != "true")
    return;
  var usercount = document.getElementById('usercount'+room);
  if(!usercount)
  {
    usercount = document.createElement('div');
    usercount.id = 'usercount'+room;
    usercount.setAttribute('style', 'position: absolute; left: 13px; top: 8px;');
    div.getElementsByClassName('nav')[0].appendChild(usercount);
  }
  var lis;
  lis=div.getElementsByClassName('userlist')[0].getElementsByTagName('li');
  var count=lis.length;
  usercount.innerHTML = count+' user';
  if(count != 1)
    usercount.innerHTML+='s';

  var users = [];
  for(var i=0; i<lis.length; i++)
  {
    users.push(lis[i].innerHTML);
  }
  var d = document.getElementById('log_div'+room);
  if(users.length == 0)
    return;
  if(!d)
  {
    var d = document.createElement('div');
    d.setAttribute('id', 'log_div'+room);
    var da=new Date();
    var h=da.getHours()+'';
    if(h.length == 1)
      h='0'+h;
    var m=da.getMinutes()+'';
    if(m.length == 1)
      m='0'+m;
    var dateString = h+':'+m+' ';
    d.innerHTML = dateString;
    d.innerHTML += 'Connected';
    var width;
    width = div.getElementsByClassName('sidebar')[0].scrollWidth;
    var offset = Math.round(width/20);
    d.setAttribute('style', 'position: absolute; bottom: 3px; left: '+offset+'px; width: '+(width-(offset*2))+'px; text-align: center;');
    div.getElementsByClassName('sidebar')[0].appendChild(d);
    d.setAttribute('oldUserlist', JSON.stringify(users));
  }
  else
  {
    var oldUserlist=d.getAttribute('oldUserlist');
    d.setAttribute('oldUserlist', JSON.stringify(users));
    if(oldUserlist)
      oldUserlist=JSON.parse(oldUserlist);
    else
      oldUserlist=[];
    var newUser=false;
    for(var i=0; i<users.length; i++)
    {
      var found=false;
      for(var j=0; j<oldUserlist.length; j++)
      {
        if(users[i] == oldUserlist[j])
        {
          found=true;
          break;
        }
      }
      if(!found)
      {
        newUser=users[i];
        break;
      }
    }
    var da=new Date();
    var h=da.getHours()+'';
    if(h.length == 1)
      h='0'+h;
    var m=da.getMinutes()+'';
    if(m.length == 1)
      m='0'+m;
    var dateString = h+':'+m+' ';
    d.innerHTML = dateString;
    if(newUser !== false)
    {
      d.innerHTML += newUser+' joined';
    }
    else
    {
      for(var i=0; i<oldUserlist.length; i++)
      {
        var found=false;
        for(var j=0; j<users.length; j++)
        {
          if(oldUserlist[i] == users[j])
          {
            found=true;
            break;
          }
        }
        if(!found)
        {
          newUser=oldUserlist[i];
          break;
        }
      }
      d.innerHTML += newUser+' left';
    }
  }
}

function toggle_timeshare(a)
{
  if(a.innerHTML.indexOf('on') != -1)
  {
    window.localStorage.hackeryTime = "false";
    a.innerHTML = "Time sharing is off";
  }
  else
  {
    window.localStorage.hackeryTime = "on";
    shh_hackery();
    a.innerHTML = 'Time sharing is on';
  }
}
function toggle_usernames(a)
{
  if(a.innerHTML.indexOf('on') != -1)
  {
    window.localStorage.shh_usernames = "false";
    a.innerHTML = "Custom usernames are off";
  }
  else
  {
    window.localStorage.shh_usernames = "true";
    shh_hackery();
    a.innerHTML = 'Custom usernames are on';
  }
}
function toggle_sidebar(a)
{
  if(a.innerHTML.indexOf('on') != -1)
  {
    window.localStorage.shh_sidebar = "false";
    a.innerHTML = "Sidebar is off";
    shh_hackery();
  }
  else
  {
    window.localStorage.shh_sidebar = "true";
    shh_hackery();
    a.innerHTML = 'Sidebar is on';
  }
}
function toggle_hackery(a)
{
  if(a.innerHTML.indexOf('on') != -1)
  {
    window.localStorage.shh_hackery = "false";
    a.innerHTML = "Shh, hackery is off (though you have to refresh the page to stop it's affects)";
  }
  else
  {
    window.localStorage.shh_hackery = "true";
    shh_hackery();
    a.innerHTML = 'Shh, hackery is on';
  }
}

function shh_hackery()
{
  var ss=[document.getElementById('sidebar')];
  var ms=[document.getElementById('messagescroll')];
  if(!ss[0])
  {
    ss=document.getElementsByClassName('sidebar');
  }
  if(!ms[0])
  {
    ms=document.getElementsByClassName('messagescroll');
  }
  if(window.localStorage.shh_sidebar==="false")
  {
    for(var i=0; i<ss.length; i++)
    {
      var s=ss[i];
      s.setAttribute('style', 'display:none;');
    }
    for(var i=0; i<ms.length; i++)
    {
      var m=ms[i];
      m.setAttribute('style', 'width: 100% !important;');
    }
  }
  else
  {
    for(var i=0; i<ss.length; i++)
    {
      var s=ss[i];
      s.setAttribute('style', '');
    }
    for(var i=0; i<ms.length; i++)
    {
      var m=ms[i];
      m.setAttribute('style', '');
    }
  }
  // add a highlight for 5 seconds to changed users in the user list
  // .. didn't really work
  /*var userlist = document.getElementById('userlist');
  var observer = new MutationObserver(userlistChanged.bind(undefined, userlist));
  var config = {characterData: true, subtree: true};
  observer.observe(userlist, config);
  //userlist.addEventListener('change', userlistChanged.bind(undefined, userlist), false);
  */

  // show the console.log debugging on the page, at the bottom of the userlist
  // .. armistice broke this, so do it another way
  /*
  var d = document.getElementById('log_div');
  if(!d)
  {
    var d = document.createElement('div');
    d.setAttribute('id', 'log_div');
    d.innerHTML = 'shh, hackery';
    var width = document.getElementById('sidebar').scrollWidth;
    var offset = Math.round(width/20);
    d.setAttribute('style', 'position: absolute; bottom: 3px; left: '+offset+'px; width: '+(width-(offset*2))+'px; text-align: center;');
    document.getElementById('sidebar').appendChild(d);
    var script = document.createElement('script');
    script.innerHTML = 'var old = console.log;';
    script.innerHTML+= 'var log_div = document.getElementById("log_div");';
    script.innerHTML+= 'console.log = function(message) { var d=new Date(); var h=d.getHours()+""; if(h.length == 1) { h="0"+h; } var m=d.getMinutes()+""; if(m.length == 1) { m="0"+m; } log_div.innerHTML = h+\':\'+m+\' - \'+message; /*old(message);* / }';
    document.body.appendChild(script);
  }
*/
}

function userlistChanged(userlist)
{
  var lis = userlist.getElementsByTagName('li');
  for(var i=0; i<lis.length; i++)
  {
    var l=lis[i];
    if(l.getAttribute('existed') != 'yes')
    {
      l.setAttribute('existed', 'yes');
      var s=l.getAttribute('style');
      l.setAttribute('originalStyle', s);
      l.setAttribute('style', s+'text-shadow: #00ff00 0px 0px 6px;');
      window.setTimeout(resetStyles.bind(undefined, userlist), 5000);
    }
  }
}

function resetStyles(userlist)
{
  var lis = userlist.getElementsByTagName('li');
  for(var i=0; i<lis.length; i++)
  {
    var l=lis[i];
    l.setAttribute('existed', 'yes');
    var s=l.getAttribute('originalStyle');
    l.setAttribute('style', s);
  }
}

function sortSmileys(a, b)
{
  if(a[0] < b[0])
    return -1;
  else if(a[0] > b[0])
    return 1;
  return 0;
}

function addToM(add)
{
  document.querySelectorAll('.m:not([disabled])').value += add;
}

function animateUsername(span)
{
  if(span.innerHTML == "&lt;Chameleon&gt;")// || span.innerHTML == "&lt;Crash&gt;" || span.innerHTML == "&lt;armistice&gt;")
  {
    //var color=span.style.color;
    //span.setAttribute('style', 'font-weight: bold; color: '+color+'; animation: 20s usernameColor linear infinite;');
    //span.setAttribute('style', 'font-weight: bold; color: '+color+'; -webkit-filter:saturate(200%) contrast(165%) drop-shadow(0px 0px 7px black);');
    span.innerHTML = "<img style='transform: rotateY(180deg); height: 21px;' title=':chameleon:' src='https://static.chathe.net/img_proxy.php?u=www.allmystery.de%2Fi%2Ft659323_ChamC3A4leon.gif' />";
    //span.innerHTML = "&lt;<span style='animation: rainbow 20s; border-radius: 30px;'>Nana</span>&gt;";
    //var style = span.getAttribute('style');
    //span.setAttribute('style', style+'; color: #A5DEE4; text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 6px #ff4918, 0 0 4px #ff4918, 0 0 12px #ff4918, 0 0 55px #ff4918, 0 0 8px #ff4918;');
  }
  if(window.localStorage.shh_usernames != "false")
  {
    if(span.innerHTML == "&lt;Faith&gt;")
    {
      var style = span.getAttribute('style');
      span.setAttribute('style', style+'; background: rgba(255, 0, 255, 0.3); border-radius: 30px;');
    }
    if(span.innerHTML == "&lt;Inel&gt;")
    {
      var style = span.getAttribute('style');
      span.setAttribute('style', style+'; background: rgba(157, 250, 161, 0.25); border-radius: 30px;');
    }
    if(span.innerHTML == "&lt;hot&gt;")
    {
      //var style = span.getAttribute('style');
      span.setAttribute('style', style+'; text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 6px #ff4918, 0 0 4px #ff4918, 0 0 12px #ff4918, 0 0 55px #ff4918, 0 0 8px #ff4918;');
      //span.innerHTML = "<img style='height: 21px;' src='https://orig09.deviantart.net/d9e2/f/2007/012/c/3/_flame__by_girlflash.gif' />";
      //span.innerHTML = "<img style='height: 21px;' src='https://media.giphy.com/media/oZYBdbW7TnhEQ/giphy.gif' />";
    }
    if(span.innerHTML == "&lt;Piney&gt;")
    {
      span.innerHTML = "<img style='height: 21px;' src='https://ptpimg.me/ozqq79.png' />";
    }
    if(span.innerHTML == "&lt;garbageface&gt;")
    {
      span.innerHTML = "<img style='height: 21px;' src='https://i.imgur.com/tV3h5yN.gif' />";
    }
    if(span.innerHTML == "&lt;Nana&gt;")
    {
      span.innerHTML = "&lt;<span style='animation: rainbow 20s infinite; border-radius: 30px;'>Nana</span>&gt;";
    }
    if(span.innerHTML == "&lt;repairmanman&gt;")
    {
      span.innerHTML='&lt;<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">r</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">e</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">p</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">a</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">i</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">r</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">m</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">a</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">n</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">m</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">a</span>'+
        '<span style="position:relative; top:'+(r(-3,3))+'px; transform:rotate('+r(-20,20)+'deg);">n</span>'+
        '&gt;'
    }
  }
}

function r(first, second)
{
  return (Math.random()*(second-first))+first;
}

function shareTime()
{
  if(window.localStorage.hackeryTime == "on")
  {
    var m=document.getElementById('m');
    var temp=m.value;
    m.value = "/me time is "+(new Date());
    var e = jQuery.Event('keydown');
    e.which=13;
    $('#m').trigger(e);
    //m.value = temp;
  }
}

function animate(div)
{
  var lis=div.getElementsByTagName('li');
  var li=lis[lis.length-1];
  var span=li.getElementsByTagName('span');
  if(span.length > 1)
  {
    animateUsername(span[1]);
  }
  var c=li.getElementsByClassName('command');
  if(c.length > 0)
  {
    var c1=c[0].innerHTML;
    var i=c1.indexOf('animate');
    if(i > 0)
    {
      var animateNum=parseInt(c1.substr(i+8, c1.length));
      aOut(animateNum);
    }
    i=c1.indexOf('reAnimate');
    if(i > 0)
    {
      var animateNum=parseInt(c1.substr(i+10, c1.length));
      areOut(animateNum);
    }
    i=c1.indexOf('asks for the time');
    if(i > 0)
    {
      shareTime();
    }
  }
  var img=li.getElementsByTagName('img');
  if(img.length > 0)
  {
    if(img[0].title == ".. Animate!")
    {
      var im = img[0];
      if(im.getAttribute('alreadyAnimated') == "true")
        return;
      im.parentNode.parentNode.setAttribute('style', 'overflow-x: hidden;');
      im.setAttribute('originalStyle', im.getAttribute('style'));
      im.setAttribute('style', 'animation-delay: 2s; animation-duration: 20s; animation-name: animateOut; position: relative;');
      im.addEventListener('animationend', aIn.bind(undefined, im), false);
    }
    else if(img[0].title == ".. reAnimate!")
    {
      var im = img[0];
      if(im.getAttribute('alreadyAnimated') == "true")
        return;
      im.parentNode.parentNode.setAttribute('style', 'overflow-x: hidden;');
      im.setAttribute('originalStyle', im.getAttribute('style'));
      im.setAttribute('style', 'animation-delay: 2s; animation-duration: 20s; animation-name: reanimateOut; position: relative;');
      im.addEventListener('animationend', areIn.bind(undefined, im), false);
    }
  }
}
function aOut(count)
{
  var im=document.getElementsByTagName('img');
  im=im[im.length-(1+count)];
  im.setAttribute('alreadyAnimated', 'false');
  var oStyle = im.getAttribute('style');
  im.setAttribute('originalStyle', oStyle);
  im.parentNode.parentNode.setAttribute('style', 'overflow-x: hidden;');
  im.setAttribute('style', oStyle+'animation-delay: 2s; animation-duration: 20s; animation-name: animateOut; position: relative;');
  im.addEventListener('animationend', aIn.bind(undefined, im), false);
}
function aIn(im)
{
  if(im.getAttribute('alreadyAnimated') == "true")
    return;
  im.setAttribute('alreadyAnimated', 'true');
  var oStyle = im.getAttribute('originalStyle');
  if(!oStyle)
    oStyle = '';
  im.setAttribute('style', oStyle+'animation-duration: 20s; animation-name: animateIn; position: relative;');
  im.addEventListener('animationend', resetImage.bind(undefined, im), false);
}
function areOut(count)
{
  var im=document.getElementsByTagName('img');
  im=im[im.length-(1+count)];
  im.setAttribute('alreadyAnimated', 'false');
  var oStyle = im.getAttribute('style');
  im.setAttribute('originalStyle', oStyle);
  im.parentNode.parentNode.setAttribute('style', 'overflow-x: hidden;');
  im.setAttribute('style', oStyle+'animation-delay: 2s; animation-duration: 20s; animation-name: reanimateOut; position: relative;');
  im.addEventListener('animationend', areIn.bind(undefined, im), false);
}
function areIn(im)
{
  if(im.getAttribute('alreadyAnimated') == "true")
    return;
  im.setAttribute('alreadyAnimated', 'true');
  var oStyle = im.getAttribute('originalStyle');
  if(!oStyle)
    oStyle = '';
  im.setAttribute('style', oStyle+'animation-duration: 20s; animation-name: reanimateIn; position: relative;');
  im.addEventListener('animationend', resetImage.bind(undefined, im), false);
}
function resetImage(im)
{
  im.setAttribute('style', im.getAttribute('originalStyle'));
}
