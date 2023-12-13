"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[4526],{67703:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return u}});var a=n(87462),i=n(45987),o=(n(35776),n(3905)),l=n(91515);const r=["components"],s={},m=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var d;const c={_frontmatter:s},p=l.Z;function u(e){let{components:t}=e,n=(0,i.Z)(e,r);return(0,o.mdx)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"custom-helpers"},"Custom Helpers"),(0,o.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Due to complexity, you should only write new custom helpers as a last resort, after trying to implement your test using built-in actions."),(0,o.mdx)("p",null,"Custom Helpers allow test writers to write custom test actions to solve advanced requirements beyond what the Functional Testing Framework offers out of the box."),(0,o.mdx)("p",null,"In version 3.0.0, the following test actions were removed:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<executeInSelenium>")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<performOn>"))),(0,o.mdx)("p",null,"These actions were removed because they allowed custom PHP code to be written inline inside of XML files. This code was difficult to read. It had no proper syntax highlighting and no linting. It was difficult to maintain, troubleshoot, and modify."),(0,o.mdx)("p",null,"However, sometimes custom logic beyond what the Functional Testing Framework offers is necessary so we have provided an alternative solution: the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<helper>")," action."),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("p",null,"Custom helpers are implemented in PHP files that must be placed in this directory:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"<ModuleName>/Test/Mftf/Helper\n")),(0,o.mdx)("p",null,"This custom helper selects text on the page with this approach:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Move to a very specific X,Y starting position."),(0,o.mdx)("li",{parentName:"ol"},"Click and hold the mouse button down."),(0,o.mdx)("li",{parentName:"ol"},"Move to another specific X,Y position."),(0,o.mdx)("li",{parentName:"ol"},"Release the mouse button.")),(0,o.mdx)("p",null,"This functionality is used to select text on the page and cannot be accomplished using built-in test actions."),(0,o.mdx)("h3",{id:"php-file"},"PHP file"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\PageBuilder\\Test\\Mftf\\Helper;\n\nuse Magento\\FunctionalTestingFramework\\Helper\\Helper;\n\n/**\n * Class SelectText provides an ability to select needed text.\n */\nclass SelectText extends Helper\n{\n    /**\n     * Select needed text.\n     *\n     * @param string $context\n     * @param int $startX\n     * @param int $startY\n     * @param int $endX\n     * @param int $endY\n     * @return void\n     */\n    public function selectText(string $context, int $startX, int $startY, int $endX, int $endY)\n    {\n        try {\n            /** @var \\Magento\\FunctionalTestingFramework\\Module\\MagentoWebDriver $webDriver */\n            $webDriver = $this->getModule('\\Magento\\FunctionalTestingFramework\\Module\\MagentoWebDriver');\n\n            $contextElement = $webDriver->webDriver->findElement(\\Facebook\\WebDriver\\WebDriverBy::xpath($context));\n            $actions = new \\Facebook\\WebDriver\\Interactions\\WebDriverActions($webDriver->webDriver);\n            $actions->moveToElement($contextElement, $startX, $startY)\n                ->clickAndHold()\n                ->moveToElement($contextElement, $endX, $endY)\n                ->release()\n                ->perform();\n        } catch (\\Exception $e) {\n            $this->fail($e->getMessage());\n        }\n    }\n}\n")),(0,o.mdx)("h3",{id:"notes-about-this-php-file"},"Notes about this PHP file"),(0,o.mdx)("p",null,"The following details are important about the above file:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"namespace")," must match the file location: ",(0,o.mdx)("inlineCode",{parentName:"li"},"namespace Magento\\PageBuilder\\Test\\Mftf\\Helper;")),(0,o.mdx)("li",{parentName:"ol"},"The class must ",(0,o.mdx)("inlineCode",{parentName:"li"},"extends Helper")," and have the corresponding ",(0,o.mdx)("inlineCode",{parentName:"li"},"use")," statement to match."),(0,o.mdx)("li",{parentName:"ol"},"You may access the WebDriver object via ",(0,o.mdx)("inlineCode",{parentName:"li"},"$this->getModule('\\Magento\\FunctionalTestingFramework\\Module\\MagentoWebDriver')"),"."),(0,o.mdx)("li",{parentName:"ol"},"You may implement multiple related methods within the same class."),(0,o.mdx)("li",{parentName:"ol"},"Specify the correct function argument types to match the type of values you want to pass in. In this case, we specified ",(0,o.mdx)("inlineCode",{parentName:"li"},"string $context, int $startX, int $startY, int $endX, int $endY"),". In the XML we will match these types.")),(0,o.mdx)("p",null,"You should follow the same patterns in any custom helpers that you write yourself, but you may implement any logic or iteration that you need to solve for your use case."),(0,o.mdx)("h3",{id:"referencing-in-a-test"},"Referencing in a test"),(0,o.mdx)("p",null,"Once you have implemented something like the above PHP file, reference it in a test:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<helper class="\\Magento\\PageBuilder\\Test\\Mftf\\Helper\\SelectText" method="selectText" stepKey="selectHeadingTextInTinyMCE">\n    <argument name="context">//div[contains(@class, \'inline-wysiwyg\')]//h2</argument>\n    <argument name="startX">{{TinyMCEPartialHeadingSelection.startX}}</argument>\n    <argument name="startY">{{TinyMCEPartialHeadingSelection.startY}}</argument>\n    <argument name="endX">{{TinyMCEPartialHeadingSelection.endX}}</argument>\n    <argument name="endY">{{TinyMCEPartialHeadingSelection.endY}}</argument>\n</helper>\n')),(0,o.mdx)("h3",{id:"notes-about-the-xml"},"Notes about the XML"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Specify an argument value for every argument that matches our PHP implementation. This allows us to pass other test data to the Custom Helper."),(0,o.mdx)("li",{parentName:"ol"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"class")," attribute matches the namespace specified in the PHP file."),(0,o.mdx)("li",{parentName:"ol"},"Specify the method from the class via the ",(0,o.mdx)("inlineCode",{parentName:"li"},"method")," attribute."),(0,o.mdx)("li",{parentName:"ol"},"If the function has a return value, it will be assigned to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"stepKey")," variable. In this case, ",(0,o.mdx)("inlineCode",{parentName:"li"},"$selectHeadingTextInTinyMCE")," holds the return value."),(0,o.mdx)("li",{parentName:"ol"},"The types of argument values must match the PHP implementation's expected types.")),(0,o.mdx)("h2",{id:"key-takeaways"},"Key takeaways"),(0,o.mdx)("p",null,"Custom helpers allow you to solve complex use cases such as conditional logic, iteration, or complex WebDriver usage."),(0,o.mdx)("p",null,"With access to the WebDriver object, you have a lot of flexibility available to you. See the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/Codeception/module-webdriver/blob/master/src/Codeception/Module/WebDriver.php"},"Codeception WebDriver")," for technical details and functionality available for use."),(0,o.mdx)("p",null,"A custom helper is written in a PHP file and then referenced in test XML, like other actions."),(0,o.mdx)("p",null,"You should only use these as a last resort after trying to implement your test using built-in actions."),(0,o.mdx)("h2",{id:"references"},"References"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/Codeception/module-webdriver/blob/master/src/Codeception/Module/WebDriver.php"},"Codeception WebDriver source code")," - Reference for using the WebDriver Object"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-custom-helpers-md-4fd55b7bbdd55674cdd7.js.map