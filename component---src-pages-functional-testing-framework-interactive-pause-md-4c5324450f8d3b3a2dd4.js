"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[7423],{23405:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return c}});var a=t(87462),o=t(45987),i=(t(35776),t(3905)),d=t(91515);const r=["components"],m={},l=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var s;const p={_frontmatter:m},u=d.Z;function c(e){let{components:n}=e,t=(0,o.Z)(e,r);return(0,i.mdx)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"interactive-pause"},"Interactive pause"),(0,i.mdx)("p",null,"It can be difficut to write a successful test on the first attempt. You will need to try different commands, with different arguments, before you find the correct path."),(0,i.mdx)("p",null,"Since Codeception 3.0, you can pause execution in any point and enter an interactive shell where you will be able to try commands in action."),(0,i.mdx)("p",null,"Now this ",(0,i.mdx)("inlineCode",{parentName:"p"},"Interactive Pause")," feature is available in MFTF. All you need to do is to set ",(0,i.mdx)("inlineCode",{parentName:"p"},"ENABLE_PAUSE")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},".env"),"."),(0,i.mdx)("p",null,"Check ",(0,i.mdx)("a",{parentName:"p",href:"https://codeception.com/docs/02-GettingStarted#Interactive-Pause"},"pause on codeception.com")," for documentation and a video to see ",(0,i.mdx)("inlineCode",{parentName:"p"},"Interactive Pause")," in action."),(0,i.mdx)("p",null,"In short, when a test gets to ",(0,i.mdx)("inlineCode",{parentName:"p"},"$I->pause()")," step, it stops and shows a console where you can try all available commands with auto-completion, stash commands, save screenshots, etc."),(0,i.mdx)("h2",{id:"how-to-configure-interactive-pause"},"How to Configure Interactive Pause"),(0,i.mdx)("p",null,"To be able to use Interactive console you need to install ",(0,i.mdx)("inlineCode",{parentName:"p"},"hoa/console")," library by running ",(0,i.mdx)("inlineCode",{parentName:"p"},"composer require hoa/console")," command in your project. This will allow ",(0,i.mdx)("inlineCode",{parentName:"p"},"<pause />")," action to work.\nThe Functional Testing Framework supports ",(0,i.mdx)("inlineCode",{parentName:"p"},"Interactive Pause")," when ",(0,i.mdx)("inlineCode",{parentName:"p"},"ENABLE_PAUSE")," is set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},"<project_root>/dev/tests/acceptance/.env")," file."),(0,i.mdx)("h2",{id:"functional-testing-framework-run-commands"},"Functional Testing Framework run commands"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf run:group\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf run:test\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf run:manifest\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf run:failed\n")),(0,i.mdx)("h3",{id:"use-interactive-pause-during-test-development"},"Use ",(0,i.mdx)("inlineCode",{parentName:"h3"},"Interactive Pause")," during test development"),(0,i.mdx)("p",null,"Here is a typical work flow for this use case:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Set ",(0,i.mdx)("inlineCode",{parentName:"li"},"ENABLE_PAUSE")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"true")," under ",(0,i.mdx)("inlineCode",{parentName:"li"},".env")),(0,i.mdx)("li",{parentName:"ul"},"Add ",(0,i.mdx)("inlineCode",{parentName:"li"},"<pause>")," action in a test where you want to pause execution for debugging"),(0,i.mdx)("li",{parentName:"ul"},"Run test"),(0,i.mdx)("li",{parentName:"ul"},"Execution should pause at ",(0,i.mdx)("inlineCode",{parentName:"li"},"<pause>")," action and invoke interactive console"),(0,i.mdx)("li",{parentName:"ul"},"Try out commands in interactive console"),(0,i.mdx)("li",{parentName:"ul"},"Resume test execution by pressing ",(0,i.mdx)("inlineCode",{parentName:"li"},"ENTER"))),(0,i.mdx)("h3",{id:"use-pause-on-test-failure"},"Use ",(0,i.mdx)("inlineCode",{parentName:"h3"},"Pause")," on test failure"),(0,i.mdx)("p",null,"When ",(0,i.mdx)("inlineCode",{parentName:"p"},"ENABLE_PAUSE")," is set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true"),", the Functional Testing Framework automatically generates ",(0,i.mdx)("inlineCode",{parentName:"p"},"pause()")," action in ",(0,i.mdx)("inlineCode",{parentName:"p"},"_failed()")," hook for tests and in ",(0,i.mdx)("inlineCode",{parentName:"p"},"_failed()")," function in ",(0,i.mdx)("inlineCode",{parentName:"p"},"MagentoWebDriver"),".\nThis allows you to use ",(0,i.mdx)("inlineCode",{parentName:"p"},"pause")," to debug test failure for a long running test. The work flow might look like:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Set ",(0,i.mdx)("inlineCode",{parentName:"li"},"ENABLE_PAUSE")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"true")," under ",(0,i.mdx)("inlineCode",{parentName:"li"},".env")),(0,i.mdx)("li",{parentName:"ul"},"Run test"),(0,i.mdx)("li",{parentName:"ul"},"Execution pauses and invokes interactive console right after test fails"),(0,i.mdx)("li",{parentName:"ul"},"Examine and debug on the spot of failure")),(0,i.mdx)("h2",{id:"functional-testing-framework-codecept-run-command"},"Functional Testing Framework Codecept run command"),(0,i.mdx)("p",null,"You can also use MFTF's wrapper command to run Codeception directly and activate ",(0,i.mdx)("inlineCode",{parentName:"p"},"Interactive Pause")," by passing ",(0,i.mdx)("inlineCode",{parentName:"p"},"--debug")," option.\nYou do not need to set ",(0,i.mdx)("inlineCode",{parentName:"p"},"ENABLE_PAUSE")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true")," for this command if you don't want to pause on test failure."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/mftf codecept:run --debug\n")),(0,i.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,'The Functional Testing Framework command "--debug" option has different meaning than Codeception command "--debug" mode option.'))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-interactive-pause-md-4c5324450f8d3b3a2dd4.js.map