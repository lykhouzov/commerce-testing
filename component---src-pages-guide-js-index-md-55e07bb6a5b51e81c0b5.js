"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[5177],{40957:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return p}});var a=t(87462),i=t(45987),o=(t(35776),t(3905)),d=t(91515);const l=["components"],s={},m={_frontmatter:s},r=d.Z;function p(e){let{components:n}=e,t=(0,i.Z)(e,l);return(0,o.mdx)(r,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"javascript-unit-testing-with-jasmine"},"JavaScript unit testing with Jasmine"),(0,o.mdx)("p",null,"Commerce uses a custom ",(0,o.mdx)("a",{parentName:"p",href:"https://gruntjs.com/"},"Grunt")," task named ",(0,o.mdx)("inlineCode",{parentName:"p"},"spec")," to run Jasmine tests. The task collects the tests from ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>dev/tests/js/jasmine/tests")," and can be run for all tests, a theme, or a single test."),(0,o.mdx)("h2",{id:"prepare-environment"},"Prepare environment"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Step 1.")," ",(0,o.mdx)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Install Node.js"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Step 2.")," ",(0,o.mdx)("a",{parentName:"p",href:"https://gruntjs.com/getting-started"},"Install grunt-cli"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Step 3.")," In ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>"),", create ",(0,o.mdx)("inlineCode",{parentName:"p"},"Gruntfile.js")," and copy ",(0,o.mdx)("inlineCode",{parentName:"p"},"Gruntfile.js.sample")," into it."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Step 4.")," In ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>"),", create ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," and copy ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json.sample")," into it."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Step 5.")," In ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>"),", install all dependencies:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Step 6.")," In ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>"),", generate static view files that are going to be tested"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:static-content:deploy -f\n")),(0,o.mdx)("p",null,"Note that normally you don't have permissions to ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>/app/code/"),", in fact the generated static view file is being tested."),(0,o.mdx)("p",null,"For CentOS and Ubuntu users:"),(0,o.mdx)("p",null,"If the command fails with the error message:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"/var/www/html/magento2ce/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs: error while loading shared libraries: libfontconfig.so.1: cannot open shared object file: No such file or directory\n")),(0,o.mdx)("p",null,"Install ",(0,o.mdx)("a",{parentName:"p",href:"https://www.freedesktop.org/wiki/Software/fontconfig/"},"fontconfig library"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"CentOS:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"yum install fontconfig\n"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Ubuntu:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"apt-get install fontconfig\n")))),(0,o.mdx)("p",null,"Learn more in ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/cli/static-view/static-view-file-deployment.html"},"Deploy static view files"),"."),(0,o.mdx)("h2",{id:"run-tests"},"Run tests"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Gruntfile.js")," contains the test run task, so you can run ",(0,o.mdx)("strong",{parentName:"p"},"all tests")," using the following command in the application root directory:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"grunt spec:<THEME>\n")),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"grunt spec:backend\n")),(0,o.mdx)("p",null,"or for the frontend area:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"grunt spec:luma\n")),(0,o.mdx)("p",null,"You can also run a single test:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'grunt spec:backend --file="/path/to/the/test.js"\n')),(0,o.mdx)("p",null,"or for the frontend area:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'grunt spec:luma --file="/path/to/the/test.js"\n')),(0,o.mdx)("h2",{id:"write-a-test"},"Write a test"),(0,o.mdx)("p",null,"All tests are distributed through modules stored in ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>/dev/tests/js/jasmine/tests"),". Let's see how to write a test using an example of an existing test:"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/dev/tests/js/jasmine/tests/app/code/Magento/Ui/base/js/grid/columns/actions.test.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"app/code/Magento/Ui/base/js/grid/columns/actions.test.js"))),(0,o.mdx)("p",null,"which tests a JS module:"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"<magento_root_dir>/app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js"))),(0,o.mdx)("p",null,"in its static representations generated in Step 6 previously:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>/pub/static/<area>/<theme>/<localisation>/Magento_Ui/js/columns/actions.js"),"."),(0,o.mdx)("h3",{id:"step-1-create-a-new-file-with-name-filenametestjs-in-an-appropriate-module-directory"},"Step 1. Create a new file with name ",(0,o.mdx)("inlineCode",{parentName:"h3"},"<fileName>.test.js")," in an appropriate module directory."),(0,o.mdx)("p",null,"For convenience, we can reflect the directory structure of a file to test."),(0,o.mdx)("p",null,"A path to JS module that we want to cover with tests: ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js")),(0,o.mdx)("p",null,"A path to a test of the module: ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Ui/base/js/grid/columns/actions.test.js")),(0,o.mdx)("p",null,"In ",(0,o.mdx)("inlineCode",{parentName:"p"},"<magento_root_dir>/dev/tests/js/jasmine/tests")," create the test with appropriate path."),(0,o.mdx)("h3",{id:"step-2-require-a-file-that-you-want-to-test"},"Step 2. Require a file that you want to test."),(0,o.mdx)("p",null,"For our example we need to cover all static view files ending with ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Ui/js/grid/columns/actions"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"define([\n    'Magento_Ui/js/grid/columns/actions'\n], function (Actions) {\n    'use strict';\n\n    //Test code\n    //...\n});\n")),(0,o.mdx)("h3",{id:"step-3-write-your-jasmine-test-code"},"Step 3. Write your Jasmine test code."),(0,o.mdx)("p",null,"A Jasmine test consists of main two parts:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"describe")," blocks"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"it")," blocks")),(0,o.mdx)("p",null,"Both the ",(0,o.mdx)("inlineCode",{parentName:"p"},"describe")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"it")," functions contains two parameters:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"a text string with description of what is going to be done"),(0,o.mdx)("li",{parentName:"ul"},"a function with block of code implementing described action")),(0,o.mdx)("p",null,"In ",(0,o.mdx)("inlineCode",{parentName:"p"},"describe")," you can use ",(0,o.mdx)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"afterEach")," functions performing a preparation of what must be done before and after every ",(0,o.mdx)("inlineCode",{parentName:"p"},"it")," test followed."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"define([\n    'underscore',\n    'Magento_Ui/js/grid/columns/actions'\n], function (_, Actions) {\n    'use strict';\n\n    describe('ui/js/grid/columns/actions', function () {\n        var model,\n            action;\n\n        beforeEach(function () {\n            model = new Actions({\n                index: 'actions',\n                name: 'listing_action',\n                indexField: 'id',\n                dataScope: '',\n                rows: [{\n                    identifier: 'row'\n                }]\n            });\n            action = {\n                index: 'delete',\n                hidden: true,\n                rowIndex: 0,\n                callback: function() {\n                    return true;\n                }\n            };\n        });\n\n        it('Check addAction function', function () {\n            expect(model.addAction('delete', action)).toBe(model);\n        });\n\n        it('Check getAction function', function () {\n            var someAction = _.clone(action);\n\n            someAction.index = 'edit';\n            model.addAction('edit', someAction);\n            expect(model.getAction(0, 'edit')).toEqual(someAction);\n        });\n\n        it('Check getVisibleActions function', function () {\n            var someAction = _.clone(action);\n\n            someAction.hidden = false;\n            someAction.index= 'view';\n            model.addAction('delete', action);\n            model.addAction('view', someAction);\n            expect(model.getVisibleActions('0')).toEqual([someAction]);\n        });\n\n        it('Check updateActions function', function () {\n            expect(model.updateActions()).toEqual(model);\n        });\n\n        it('Check applyAction function', function () {\n            model.addAction('delete', action);\n            expect(model.applyAction('delete', 0)).toEqual(model);\n        });\n\n        it('Check isSingle and isMultiple function', function () {\n            var someAction = _.clone(action);\n\n            action.hidden = false;\n            model.addAction('delete', action);\n            expect(model.isSingle(0)).toBeTruthy();\n            someAction.hidden = false;\n            someAction.index = 'edit';\n            model.addAction('edit', someAction);\n            expect(model.isSingle(0)).toBeFalsy();\n            expect(model.isMultiple(0)).toBeTruthy();\n        });\n\n        it('Check isActionVisible function', function () {\n            expect(model.isActionVisible(action)).toBeFalsy();\n            action.hidden = false;\n            expect(model.isActionVisible(action)).toBeTruthy();\n        });\n    });\n});\n")),(0,o.mdx)("p",null,"This topic doesn't provide Jasmine test writing methodology."),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://jasmine.github.io/edge/introduction.html"},"Learn more about testing with Jasmine.")),(0,o.mdx)("h2",{id:"debug-tests"},"Debug tests"),(0,o.mdx)("p",null,"Jasmine tests can be debugged in a browser using the following steps:"),(0,o.mdx)("p",null,"To keep the webserver running, set ",(0,o.mdx)("inlineCode",{parentName:"p"},"keepalive")," setting to ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")," in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"dev/tests/js/jasmine/spec_runner/settings.json")," file."),(0,o.mdx)("p",null,"Launch the tests with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"grunt spec:luma")," CLI command. Now the webserver should be started and waiting, ",(0,o.mdx)("inlineCode",{parentName:"p"},"_SpecRunner.html")," file should be generated in the project root."),(0,o.mdx)("p",null,"Go to ",(0,o.mdx)("inlineCode",{parentName:"p"},"http://localhost:8000/_SpecRunner.html")," and use the developer console to debug the tests."),(0,o.mdx)("p",null,"The array of the tests can be edited in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"_SpecRunner.html")," file to include only necessary files."),(0,o.mdx)("h2",{id:"known-issues-and-solutions"},"Known issues and solutions"),(0,o.mdx)("h3",{id:"error-cannot-find-module-module"},"Error: Cannot find module '","<","module",">","'"),(0,o.mdx)("h4",{id:"issue"},"Issue:"),(0,o.mdx)("p",null,"An error message appears:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},'Loading "Gruntfile.js" tasks...ERROR\n\n>> Error: Cannot find module \'<module>\'\n\nWarning: Task "spec" not found. Use --force to continue.\n')),(0,o.mdx)("h4",{id:"solution"},"Solution:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Make sure your Node.js version is up-to-date."),(0,o.mdx)("li",{parentName:"ol"},"Remove ",(0,o.mdx)("inlineCode",{parentName:"li"},"package.json"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"Gruntfile.js"),"."),(0,o.mdx)("li",{parentName:"ol"},"Copy ",(0,o.mdx)("inlineCode",{parentName:"li"},"package.json"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"Gruntfile.js")," from ",(0,o.mdx)("inlineCode",{parentName:"li"},"package.json.sample"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"Gruntfile.js.sample"),"."),(0,o.mdx)("li",{parentName:"ol"},"Delete the ",(0,o.mdx)("inlineCode",{parentName:"li"},"node_modules")," directory."),(0,o.mdx)("li",{parentName:"ol"},"Run ",(0,o.mdx)("inlineCode",{parentName:"li"},"npm install")," in your terminal.")),(0,o.mdx)("h3",{id:"warning-cannot-read-property-pid-of-undefined"},"Warning: Cannot read property 'pid' of undefined"),(0,o.mdx)("h4",{id:"issue-1"},"Issue:"),(0,o.mdx)("p",null,"An error message appears:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"Warning: Cannot read property 'pid' of undefined\n\nUse --force to continue. Aborted due to warnings.\n")),(0,o.mdx)("h4",{id:"solution-1"},"Solution:"),(0,o.mdx)("p",null,"Run in your terminal:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"cd <magento_root>/node_modules/grunt-contrib-jasmine\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-js-index-md-55e07bb6a5b51e81c0b5.js.map