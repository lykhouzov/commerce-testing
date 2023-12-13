"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[2861],{92295:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return c}});var a=n(87462),o=n(45987),r=(n(35776),n(3905)),u=n(91515);const i=["components"],s={},d={_frontmatter:s},l=u.Z;function c(e){let{components:t}=e,n=(0,o.Z)(e,i);return(0,r.mdx)(l,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"extend-tests"},"Extend tests"),(0,r.mdx)("p",null,"Tests can be extended to cover the needs of your extension."),(0,r.mdx)("p",null,"In this example, we add an action group to a new copy of the original test for our extension."),(0,r.mdx)("h2",{id:"starting-test"},"Starting test"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<test name="AdminCreateSimpleProductTest">\n    <annotations>\n        <features value="Catalog"/>\n        <stories value="Create a Simple Product via Admin"/>\n        <title value="Admin should be able to create a Simple Product"/>\n        <description value="Admin should be able to create a Simple Product"/>\n        <severity value="CRITICAL"/>\n        <testCaseId value="MAGETWO-23414"/>\n        <group value="product"/>\n    </annotations>\n    <before>\n        <createData entity="_defaultCategory" stepKey="createPreReqCategory"/>\n    </before>\n    <after>\n        <amOnPage url="admin/admin/auth/logout/" stepKey="amOnLogoutPage"/>\n        <deleteData createDataKey="createPreReqCategory" stepKey="deletePreReqCategory"/>\n    </after>\n\n    <actionGroup ref="AdminLoginActionGroup" stepKey="AdminLoginActionGroup1"/>\n    <actionGroup ref="AdminFillSimpleProductFormActionGroup" stepKey="fillProductFieldsInAdmin">\n        <argument name="category" value="$$createPreReqCategory$$"/>\n        <argument name="simpleProduct" value="_defaultProduct"/>\n    </actionGroup>\n    <actionGroup ref="AssertProductInStorefrontCategoryPage" stepKey="assertProductInStorefront1">\n        <argument name="category" value="$$createPreReqCategory$$"/>\n        <argument name="product" value="_defaultProduct"/>\n    </actionGroup>\n    <actionGroup ref="AssertProductInStorefrontProductPage" stepKey="assertProductInStorefront2">\n        <argument name="product" value="_defaultProduct"/>\n    </actionGroup>\n</test>\n')),(0,r.mdx)("h2",{id:"extend-file"},"Extend file"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<test name="AdminCreateSimpleProductExtensionTest" extends="AdminCreateSimpleProductTest">\n    \x3c!-- Since this is its own test you need the annotations block --\x3e\n    <annotations>\n        <features value="Catalog"/>\n        <stories value="Create a Simple Product via Admin"/> \x3c!-- you should leave this the same since it is part of the same group --\x3e\n        <title value="Admin should be able to create a Simple Product with my extension"/>\n        <description value="Admin should be able to create a Simple Product with my extension via the product grid"/>\n        <severity value="CRITICAL"/>\n        <testCaseId value="Extension/Github Issue Number"/>\n        <group value="product"/>\n    </annotations>\n    \x3c!-- This will be added after the step "fillProductFieldsInAdmin" on line 20 in the above test. --\x3e\n    <actionGroup ref="AddMyExtensionData" stepKey="extensionField" after="fillProductFieldsInAdmin">\n        <argument name="extensionData" value="_myData"/>\n    </actionGroup>\n\n    \x3c!-- This will be added after the step "assertProductInStorefront2" on line 28 in the above test. --\x3e\n    <actionGroup ref="AssertMyExtensionDataExists" stepKey="assertExtensionInformation" after="assertProductInStorefront2">\n        <argument name="extensionData" value="_myData"/>\n    </actionGroup>\n</test>\n')),(0,r.mdx)("h2",{id:"resultant-test"},"Resultant test"),(0,r.mdx)("p",null,"Note that there are now two tests below."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<test name="AdminCreateSimpleProductTest">\n    <annotations>\n        <features value="Catalog"/>\n        <stories value="Create a Simple Product via Admin"/>\n        <title value="Admin should be able to create a Simple Product"/>\n        <description value="Admin should be able to create a Simple Product"/>\n        <severity value="CRITICAL"/>\n        <testCaseId value="MAGETWO-23414"/>\n        <group value="product"/>\n    </annotations>\n    <before>\n        <createData entity="_defaultCategory" stepKey="createPreReqCategory"/>\n    </before>\n    <after>\n        <amOnPage url="admin/admin/auth/logout/" stepKey="amOnLogoutPage"/>\n        <deleteData createDataKey="createPreReqCategory" stepKey="deletePreReqCategory"/>\n    </after>\n\n    <actionGroup ref="AdminLoginActionGroup" stepKey="AdminLoginActionGroup1"/>\n    <actionGroup ref="AdminFillSimpleProductFormActionGroup" stepKey="fillProductFieldsInAdmin">\n        <argument name="category" value="$$createPreReqCategory$$"/>\n        <argument name="simpleProduct" value="_defaultProduct"/>\n    </actionGroup>\n    <actionGroup ref="AssertProductInStorefrontCategoryPage" stepKey="assertProductInStorefront1">\n        <argument name="category" value="$$createPreReqCategory$$"/>\n        <argument name="product" value="_defaultProduct"/>\n    </actionGroup>\n    <actionGroup ref="AssertProductInStorefrontProductPage" stepKey="assertProductInStorefront2">\n        <argument name="product" value="_defaultProduct"/>\n    </actionGroup>\n</test>\n<test name="AdminCreateSimpleProductExtensionTest">\n    <annotations>\n        <features value="Catalog"/>\n        <stories value="Create a Simple Product via Admin"/>\n        <title value="Admin should be able to create a Simple Product with my extension"/>\n        <description value="Admin should be able to create a Simple Product with my extension via the product grid"/>\n        <severity value="CRITICAL"/>\n        <testCaseId value="Extension/Github Issue Number"/>\n        <group value="product"/>\n    </annotations>\n    <before>\n        <createData entity="_defaultCategory" stepKey="createPreReqCategory"/>\n    </before>\n    <after>\n        <amOnPage url="admin/admin/auth/logout/" stepKey="amOnLogoutPage"/>\n        <deleteData createDataKey="createPreReqCategory" stepKey="deletePreReqCategory"/>\n    </after>\n\n    <actionGroup ref="AdminLoginActionGroup" stepKey="AdminLoginActionGroup1"/>\n    <actionGroup ref="AdminFillSimpleProductFormActionGroup" stepKey="fillProductFieldsInAdmin">\n        <argument name="category" value="$$createPreReqCategory$$"/>\n        <argument name="simpleProduct" value="_defaultProduct"/>\n    </actionGroup>\n\n    <actionGroup ref="AddMyExtensionData" stepKey="extensionField">\n        <argument name="extensionData" value="_myData"/>\n    </actionGroup>\n\n    <actionGroup ref="AssertProductInStorefrontCategoryPage" stepKey="assertProductInStorefront1">\n        <argument name="category" value="$$createPreReqCategory$$"/>\n        <argument name="product" value="_defaultProduct"/>\n    </actionGroup>\n    <actionGroup ref="AssertProductInStorefrontProductPage" stepKey="assertProductInStorefront2">\n        <argument name="product" value="_defaultProduct"/>\n    </actionGroup>\n\n    <actionGroup ref="AssertMyExtensionDataExists" stepKey="assertExtensionInformation">\n        <argument name="extensionData" value="_myData"/>\n    </actionGroup>\n</test>\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-merge-points-extend-tests-md-03dcc91d89e9b91badfc.js.map