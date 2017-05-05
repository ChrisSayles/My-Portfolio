// function setupTypewriter(t) {
//         var HTML = t.innerHTML;

//         t.innerHTML = "";

//         var cursorPosition = 0,
//             tag = "",
//             writingTag = false,
//             tagOpen = false,
//             typeSpeed = 100,
//         tempTypeSpeed = 0;

//         var type = function() {

//             if (writingTag === true) {
//                 tag += HTML[cursorPosition];
//             }

//             if (HTML[cursorPosition] === "<") {
//                 tempTypeSpeed = 0;
//                 if (tagOpen) {
//                     tagOpen = false;
//                     writingTag = true;
//                 } else {
//                     tag = "";
//                     tagOpen = true;
//                     writingTag = true;
//                     tag += HTML[cursorPosition];
//                 }
//             }
//             if (!writingTag && tagOpen) {
//                 tag.innerHTML += HTML[cursorPosition];
//             }
//             if (!writingTag && !tagOpen) {
//                 if (HTML[cursorPosition] === " ") {
//                     tempTypeSpeed = 0;
//                 }
//                 else {
//                     tempTypeSpeed = (Math.random() * typeSpeed) + 50;
//                 }
//                 t.innerHTML += HTML[cursorPosition];
//             }
//             if (writingTag === true && HTML[cursorPosition] === ">") {
//                 tempTypeSpeed = (Math.random() * typeSpeed) + 50;
//                 writingTag = false;
//                 if (tagOpen) {
//                     var newSpan = document.createElement("span");
//                     t.appendChild(newSpan);
//                     newSpan.innerHTML = tag;
//                     tag = newSpan.firstChild;
//                 }
//             }

//             cursorPosition += 1;
//             if (cursorPosition < HTML.length - 1) {
//                 setTimeout(type, tempTypeSpeed);
//             }

//         };

//         return {
//             type: type
//         };
//     }

//     var typer = document.getElementById('typewriter');

//     typewriter = setupTypewriter(typewriter);

//     typewriter.type();

     //CAROUSEL

     var rotateComplete = function() {
         with(target.style) {
           webkitAnimationName = MozAnimationName = msAnimationName = "";
         }
         target.insertBefore(arr[arr.length-1], arr[0]);
         setTimeout(function(el) {
           with(el.style) {
             webkitAnimationName = MozAnimationName = msAnimationName = "rotator";
           }
         }, 0, target);
       };

       var target = document.getElementById("rotator");
       var arr = target.getElementsByTagName("a");

       target.addEventListener("webkitAnimationEnd", rotateComplete, false);
       target.addEventListener("animationend", rotateComplete, false);
       target.addEventListener("MSAnimationEnd", rotateComplete, false);
