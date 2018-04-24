// ==UserScript==
// @name         chathe.net emoticon override
// @version      0.33
// @description  Add custom emoticons to chathe.net
// @author       Chameleon
// @include      http*://chathe.net*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.body.setAttribute('style', 'overflow-x: hidden;');
  var smileyArray = [
    [":P", 'https://static.passthepopcorn.me/static/common/smileys/tongue.gif'],
    [":D", 'http://www.pimped-pixels.net/forum/public/style_emoticons/default/th_mw_grin.gif'],
    [":tea:", 'https://ptpimg.me/nr8hqi.gif'],
    [":chameleon:", 'http://www.allmystery.de/i/t659323_ChamC3A4leon.gif'],
    [":tux:", 'https://e.deviantart.net/emoticons/t/tux.gif'],
    [":lmao:", 'https://e.deviantart.net/emoticons/l/lmao.gif'],
    [":popcorn:", 'https://e.deviantart.net/emoticons/p/popcorn2.gif'],
    [":sleep:", 'https://e.deviantart.net/emoticons/s/sleep.gif'],
    [":juggle:", 'https://e.deviantart.net/emoticons/j/juggling.gif'],
    [":whisper:", 'https://e.deviantart.net/emoticons/w/whisper2.gif'],
    [":w00t:", 'https://e.deviantart.net/emoticons/w/w00t.gif'],
    [":\\", 'https://e.deviantart.net/emoticons/h/hmm2.gif'],
    [":floating:", 'https://e.deviantart.net/emoticons/f/floating.gif'],
    [":greenstars:", 'https://i.imgur.com/Lb3xDCY.gif'],
    [":giggle:", 'https://e.deviantart.net/emoticons/g/giggle.gif'],
    [":blowkiss:", 'https://e.deviantart.net/emoticons/b/blowkiss.gif'],
    [":wtf:", 'https://e.deviantart.net/emoticons/w/wtf2.gif'],
    [":bored:", 'https://e.deviantart.net/emoticons/b/bored.gif'],
    [":bye:", 'https://e.deviantart.net/emoticons/b/bye.gif'],
    [":nana:", 'https://e.deviantart.net/emoticons/n/nanana.gif'],
    ["O_o", 'https://e.deviantart.net/emoticons/w/weirdface2.gif'],
    [":pray:", 'https://e.deviantart.net/emoticons/p/prayer.gif'],
    [":reading:", 'https://e.deviantart.net/emoticons/r/read.gif'],
    [":sick:", 'https://e.deviantart.net/emoticons/s/sick2.gif'],
    [":sadangel:", 'https://e.deviantart.net/emoticons/s/sadangel.gif'],
    [":clueless:", 'https://e.deviantart.net/emoticons/c/clueless.gif'],
    [":hug:", 'https://e.deviantart.net/emoticons/h/hug.gif'],
    [":lonely:", 'https://e.deviantart.net/emoticons/l/lonely2.gif'],
    [":yawn:", 'https://e.deviantart.net/emoticons/y/yawn2.gif'],
    [":rofl:", 'https://e.deviantart.net/emoticons/r/rofl.gif'],
    [":windows:", 'https://e.deviantart.net/emoticons/w/windows.gif'],
    [":worship:", 'https://e.deviantart.net/emoticons/w/worships.gif'],
    [":slow:", 'https://e.deviantart.net/emoticons/i/imslow.gif'],
    [":idea:", 'https://e.deviantart.net/emoticons/i/idea.gif'],
    [":omg:", 'https://e.deviantart.net/emoticons/o/omg.gif'],
    [":shrug:", 'https://e.deviantart.net/emoticons/s/shrug2.gif'],
    [":crazy:", 'https://e.deviantart.net/emoticons/c/crazy.gif'],
    [":ashamed:", 'https://e.deviantart.net/emoticons/a/ashamed2.gif'],
    [":sleepy:", 'https://e.deviantart.net/emoticons/s/sleepy.gif'],
    [":nod:", 'https://e.deviantart.net/emoticons/n/nod.gif'],
    [":disbelief:", 'https://e.deviantart.net/emoticons/d/disbelief.gif'],
    [":dance:", 'https://e.deviantart.net/emoticons/d/dance.gif'],
    [":boogie:", 'https://e.deviantart.net/emoticons/b/boogie.gif'],
    [":mwahaha:", 'https://e.deviantart.net/emoticons/m/mwahaha.gif'],
    ["\^\^;", 'https://e.deviantart.net/emoticons/a/animesweat.gif'],
    [":meditation:", 'https://e.deviantart.net/emoticons/m/meditate.gif'],
    [":movingon:", 'https://e.deviantart.net/emoticons/m/movingon.gif'],
    [":O", 'https://i.imgur.com/JGzmkc0.gif'],
    [":-O", 'http://e.deviantart.net/emoticons/e/eek.gif'],
    [":wave:", 'https://i.imgur.com/OR5qCzd.gif'],
    [":sadpanda:", 'http://digital-impulse.com/wp-includes/images/smilies/digicons-SadPanda.png'],
    [":paddle:", 'https://static.passthepopcorn.me/static/common/smileys/paddle.gif'],
    [":phew:", 'http://i.imgur.com/6IIOT2l.gif'],
    [":phew2:", 'http://i.imgur.com/KVt6UE1.gif'],
    [":ninja:", 'https://e.deviantart.net/emoticons/n/ninja.gif'],
    [":ninjaglomp:", 'https://orig05.deviantart.net/0467/f/2009/012/0/4/ninja_glomp_by_cookiemagik.gif'],
    [":ninjaattack:", 'https://orig00.deviantart.net/8beb/f/2010/335/0/8/ninja_attack_by_wisekidk-d340e8s.gif'],
    [":ninjadash:", 'https://orig07.deviantart.net/dde3/f/2008/218/f/7/silent_ninja_run_of_awesomness_by_cookiemagik.gif'],
    [":ninjavspirate:", 'https://orig03.deviantart.net/0839/f/2009/127/6/0/ninja_vs_pirate_by_cookiemagik.gif'],
    [":ninjaabduct:", 'https://img15.deviantart.net/8060/i/2005/339/4/3/ninja_abduction_by_12a.gif'],
    [":lag:", 'https://orig05.deviantart.net/035b/f/2007/331/7/1/_lag__by_link3kokiri.gif'],
    [":yayyay:", 'https://orig01.deviantart.net/7c7c/f/2010/162/c/6/_rainbowbummiesparade__by_meninasuitcase.gif'],
    [":reading2:", 'https://orig08.deviantart.net/db3e/f/2011/268/c/c/reading_by_pjuk-d4as71e.gif'],
    [":omgcat:", 'https://orig14.deviantart.net/3f64/f/2015/038/5/f/kit_cat___la_by_princessekitcat-d8h0ihs.gif'],
    [":watching:", 'https://orig00.deviantart.net/a3ac/f/2009/080/1/c/_teevee__revamp_by_madb0y.gif'],
    [":kinky_spank:", 'https://img11.deviantart.net/7f0d/i/2005/347/b/6/kinky_spank_by_theemerald.gif'],
    [":headphones:", 'https://orig09.deviantart.net/6226/f/2012/165/9/8/jammin___by_animanga409-d52s57b.gif'],
    [":headphones2:", 'https://orig04.deviantart.net/e58f/f/2011/278/0/3/_groove__by_cubicinsanity-d4bxyiq.gif'],
    [":dfaithyb:", 'https://img08.deviantart.net/b83e/i/2004/080/8/5/big_headphones.gif'],
    [":thumbsup:", 'https://i.imgur.com/yRLCrUr.gif'],
    [":computerrage:", 'https://i.imgur.com/3w2UwyH.gif'],
    [":nod2:", 'https://i.imgur.com/m2IjGqE.gif'],
    [":no:", 'https://i.imgur.com/rn7BhH4.gif'],
    [":hmm:", 'https://i.imgur.com/qG9dNqC.gif'],
    [":rofl2:", 'https://i.imgur.com/f01eCWs.gif'],
    [":seeingstars:", 'https://i.imgur.com/6HrAO1l.gif'],
    [":clap:", 'https://orig00.deviantart.net/0a94/f/2009/172/b/e/clap_remake_1b_by_nillemotes.gif'],
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
    [":writing:", 'https://orig10.deviantart.net/2b4c/f/2007/060/d/9/writing_emoticon_by_eburt.gif'],
    [":coding:", 'https://orig13.deviantart.net/b2ec/f/2009/207/7/7/code_monkey_by_mirz123.gif'],
    [":tighthug:", 'https://e.deviantart.net/emoticons/t/tighthug.gif'],
    [":thunder:", 'https://img11.deviantart.net/c8d1/i/2006/024/1/b/_thunder__by_mrichston.gif'],
    [":violin:", 'https://img05.deviantart.net/58d2/i/2005/140/c/a/_violin__by_clairebearer.gif'],
    [":timewarp:", 'https://orig01.deviantart.net/0669/f/2009/277/8/3/time_warp___mkii_by_kawaii_demonic_thing.gif'],
    [":chirp:", 'https://img00.deviantart.net/44d0/i/2005/295/e/4/_chirp__by_neek_zique.gif'],
    [":help:", 'https://orig06.deviantart.net/4a0b/f/2007/314/9/a/_help__by_jeriko_x.gif'],
    [":phone_rage:", 'https://orig13.deviantart.net/adb1/f/2010/211/e/c/phone_rage_by_iatsath.gif'],
    [":bird:", 'https://img11.deviantart.net/7579/i/2006/313/d/7/_bluejay__by_the_pixelsmith.gif'],
    [":faith:", 'https://i.imgur.com/0vzuXl8.gif'],
    [":cartwheel:", 'https://orig07.deviantart.net/7854/f/2009/365/f/9/cartwheel_by_zakarranda.gif'],
    [":glomp:", 'https://e.deviantart.net/emoticons/g/glomp.gif'],
    [":facepalmtree:", 'https://orig12.deviantart.net/c184/f/2008/234/9/5/_facepalmextreme__by_screaminggerbil.gif'],
    [":facepalm:", 'https://orig09.deviantart.net/c64d/f/2007/283/9/7/_facepalm__by_chimpantalones.gif'],
    [":sun:", 'https://orig07.deviantart.net/0cf1/f/2016/247/6/c/sun_by_wizard_kgalm-dagi0wu.gif'],
    [":itardnet:", 'https://orig06.deviantart.net/45b2/f/2008/247/8/b/_intardnet__by_leoleonardo.gif'],
    [":dontignore:", 'https://orig00.deviantart.net/b720/f/2010/169/9/0/90b6855b6faa464969453a6b2957d736.gif'],
    [":goldstar:", 'https://orig06.deviantart.net/688a/f/2010/039/9/d/_goldstar__by_blissfullysarcastic.gif'],
    [":highfive:", 'https://orig15.deviantart.net/30ee/f/2006/334/6/2/_highfive__remake_by_arrioch.gif'],
    [":WAVE:", 'https://orig15.deviantart.net/1c91/f/2009/279/8/5/furious_wave_by_nillemotes.gif'],
    [":ghost:", 'https://img02.deviantart.net/2c93/i/2006/296/e/4/_ghost_by_sml_e.gif'],
    [":pumpkin_omg:", 'https://orig08.deviantart.net/20c6/f/2010/293/0/f/pumpkin_la_by_snowshi-d315psk.gif'],
    [":halloween_wave:", 'https://orig15.deviantart.net/03ab/f/2011/283/1/4/october_emtc_entry_by_otohime0394-d4ce255.gif'],
    [":monstermash:", 'https://orig04.deviantart.net/2184/f/2011/303/b/8/monster_mash_by_mirz123-d4egehi.gif'],
    [":owlnoid:", 'https://orig13.deviantart.net/4299/f/2014/053/3/d/3d1a858312d2ae72bc1342244103cb38-d1l8bbz.gif'],
    [":suspicious:", 'https://img03.deviantart.net/21c5/i/2006/008/a/d/_suspicious_by_sml_e.gif'],
    [":glee:", 'https://orig09.deviantart.net/a7f9/f/2008/276/e/6/_squee__by_synfull.gif'],
    ["\\o/", 'https://orig08.deviantart.net/8b49/f/2011/146/d/6/yay_by_sml_e-d2hje6p.gif'],
    [":fingerscrossed:", 'https://i.imgur.com/4HPA0j4.png'],
    [":police:", 'https://orig00.deviantart.net/60b7/f/2011/124/f/4/policeman_emote_by_mirz123-d3fk1qs.png'],
    [":hitandrun:", 'https://orig00.deviantart.net/ca85/f/2009/058/0/d/onashii___hit_and_run_by_emoticiety.gif'],
    [":policecar:", 'https://chathe.net/images/emoji/oncoming_police_car.png'],
    [":puke:", 'https://orig00.deviantart.net/445b/f/2009/178/e/0/puking_emoticon_by_sheep0creator.gif'],
    [":timeflies:", 'https://ptpimg.me/muw015.gif'],
    [":tumbleweed:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/tumble.gif'],
    [":beatingADeadHorse:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/horse.gif'],
    [":omg2:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/jawdrop.gif'],
    [":digging:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/dig.gif'],
    [":surrender:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/flag.gif'],
    [":rockOn:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/rockon.gif'],
    [":jedi:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/jedi.gif'],
    [":crash:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/bike.gif'],
    [":stir:", 'https://www.est1892.co.uk/forums/images/smilies/liverpool/stir.gif'],
    [":poke:", 'https://img00.deviantart.net/4628/i/2005/235/9/0/__the___omg_poke_by_dutchie17.gif'],
    [":eyebrow:", 'https://img00.deviantart.net/efc7/i/2005/201/f/e/the_eyebrow_by_brokenboulevard.gif'],
    [":hahano:", 'https://e.deviantart.net/emoticons/s/sarcasm.gif'],
    [":sarcasticclap:", 'https://e.deviantart.net/emoticons/s/sarcasticclap.gif'],
    [":stealthglomp:", 'https://orig00.deviantart.net/7a66/f/2008/284/5/f/_stealthglomp__by_synfull.gif'],
    [">.<", 'https://ptpimg.me/yl03u7.png'],
    [":deadchat:", 'https://orig00.deviantart.net/dadd/f/2007/096/4/8/_deadchat__by_taimotive.gif'],
    [":waiting:", 'https://orig00.deviantart.net/8b63/f/2009/177/1/a/_waiting__by_caeser1993.gif'],
    [":sadnod:", 'https://img00.deviantart.net/7cf1/i/2004/247/9/0/sad_nod_emote.gif'],
    [":vodka:", 'https://orig00.deviantart.net/31a1/f/2012/032/d/0/d0659fbb8f85883fbf8cc523f6fa5bd7-d2h7ith.gif'],
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
  /*else
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
    var div1=document.getElementById('customSmileyOverlay'+room);
    if(div1)
    {
      close(div1);
      return;
    }
    div1=document.createElement('div');
    div1.id = 'customSmileyOverlay';
    var h=document.getElementById('m');
    if(h)
      h=h.clientHeight;
    else
      h=document.getElementById(room).getElementsByClassName('m')[0].clientHeight;
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

function usercount(div, multi, room)
{
  if(window.localStorage.shh_hackery != "true")
    return;
  var usercount = document.getElementById('usercount'+room);
  if(!usercount)
  {
    usercount = document.createElement('div');
    usercount.id = 'usercount'+room;
    usercount.setAttribute('style', 'position: absolute; left: 13px; top: 8px;');
    if(!multi)
      document.getElementById('nav').appendChild(usercount);
    else
      div.getElementsByClassName('nav')[0].appendChild(usercount);
  }
  var lis;
  if(!multi)
    lis=document.getElementById('userlist').getElementsByTagName('li');
  else
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
    if(!multi)
      width = document.getElementById('sidebar').scrollWidth;
    else
      width = div.getElementsByClassName('sidebar')[0].scrollWidth;
    var offset = Math.round(width/20);
    d.setAttribute('style', 'position: absolute; bottom: 3px; left: '+offset+'px; width: '+(width-(offset*2))+'px; text-align: center;');
    if(!multi)
      document.getElementById('sidebar').appendChild(d);
    else
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
  document.getElementById('m').value += add;
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
  }
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
