"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[4251],{41668:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return c}});var r=a(87462),n=a(45987),i=(a(35776),a(3905)),s=a(91515);const o=["components"],l={},d=(u="InlineAlert",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var u;const p={_frontmatter:l},m=s.Z;function c(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,i.mdx)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"data-fixture-attribute"},"Data fixture attribute"),(0,i.mdx)("p",null,"Data fixture attributes apply fixtures that implement ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\TestFramework\\Fixture\\DataFixtureInterface")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\TestFramework\\Fixture\\RevertibleDataFixtureInterface"),"."),(0,i.mdx)("p",null,"It takes two more optional parameters alongside the fixture class name. The second parameter is the data that is used to customize the fixture and the third parameter is the alias (ID) of the fixture that is used to retrieve the data returned by the fixture and also as a reference in other fixture parameters."),(0,i.mdx)("p",null,"Use data fixtures to prepare a database for tests. The Integration Testing Framework (ITF) reverts the database to its initial state automatically.\nTo set up a date fixture, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataFixture")," attribute."),(0,i.mdx)("h2",{id:"format"},"Format"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"#[\n    DataFixture(string $type, array $data = [], ?string $as = null, ?string $scope = null, int $count = 1)\n]\n")),(0,i.mdx)("h3",{id:"parameters"},"Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"type"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Name of a class that implements ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\TestFramework\\Fixture\\DataFixtureInterface")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\TestFramework\\Fixture\\RevertibleDataFixtureInterface"),"."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"data"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The optional array of data passed on to the fixture."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"count"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The optional number of entities of the same kind and configuration that this fixture should generate."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"scope"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The optional store view, website, or store group fixture alias from the scope of which the fixture will generate the entity."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"as"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The fixture alias that will be used as a reference to retrieve the data returned by the fixture and also as a reference in other fixtures parameters.")))),(0,i.mdx)("h2",{id:"fixture-usage"},"Fixture Usage"),(0,i.mdx)("h3",{id:"retrieve-fixture-data-in-the-test"},"Retrieve fixture data in the test"),(0,i.mdx)("p",null,"A test can retrieve data that was returned by a Data Fixture using ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\TestFramework\\Fixture\\DataFixtureStorageManager")," and the fixture alias."),(0,i.mdx)("p",null,"The following example shows how to retrieve data that was returned by the fixtures:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class ProductsList extends \\PHPUnit\\Framework\\TestCase\n{\n    #[\n        DataFixture(ProductFixture::class, as: 'product1'),\n        DataFixture(ProductFixture::class, as: 'product2'),\n        DataFixture(ProductFixture::class, as: 'product3')\n    ]\n    public function testGetProductsCount(): void\n    {\n        $fixtures = DataFixtureStorageManager::getStorage();\n        $product1 = $fixtures->get('product1');\n        $product2 = $fixtures->get('product2');\n        $product3 = $fixtures->get('product3');\n    }\n}\n")),(0,i.mdx)("h3",{id:"supply-data-to-data-fixture-as-a-variable"},"Supply data to data fixture as a variable"),(0,i.mdx)("p",null,"It is possible to supply data as a variable from one fixture to another using the fixture alias in one of the following formats:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"$fixtureAlias$")," is a reference to the data that was returned by the fixture with alias ",(0,i.mdx)("inlineCode",{parentName:"li"},"fixtureAlias"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"$fixtureAlias.snake_case_property_name$")," is a reference to the property ",(0,i.mdx)("inlineCode",{parentName:"li"},"snake_case_property_name")," in the data that was returned by the fixture with alias ",(0,i.mdx)("inlineCode",{parentName:"li"},"fixtureAlias"),".")),(0,i.mdx)("p",null,"The following example shows how a fixture can use the data of another fixture:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class QuoteTest extends \\PHPUnit\\Framework\\TestCase\n{\n    #[\n        DataFixture(GuestCartFixture::class, as: 'cart'),\n        DataFixture(SetBillingAddressFixture::class, ['cart_id' => '$cart.id$']),\n    ]\n    public function testCollectTotals(): void\n    {\n    }\n}\n")),(0,i.mdx)("h3",{id:"specifying-the-number-of-instances-of-data-fixture-to-generate"},"Specifying the number of instances of data fixture to generate"),(0,i.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Sometimes, we need to generate several instances of a data fixture with exactly the same configuration.\nFor such cases, we can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"count")," parameter and set its value to the desired number of instances."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class ProductsList extends \\PHPUnit\\Framework\\TestCase\n{\n   #[\n      DataFixture(CategoryFixture::class, ['is_anchor' => 0], 'category1'),\n      DataFixture(CategoryFixture::class, ['parent_id' => '$category1.id$'], 'category2'),\n      DataFixture(ProductFixture::class, ['category_ids' => ['$category1.id$']])\n      DataFixture(ProductFixture::class, ['category_ids' => ['$category2.id$']], count: 2)\n   ]\n   public function testAddCategoryFilter(): void\n   {\n      $fixtures = DataFixtureStorageManager::getStorage();\n      $category1 = $fixtures->get('category1');\n      $category2 = $fixtures->get('category2');\n      $collection = $this->collectionFactory->addCategoryFilter($category2);\n      $this->assertEquals(2, $collection->getSize());\n      $collection = $this->collectionFactory->addCategoryFilter($category1);\n      $this->assertEquals(1, $collection->getSize());\n   }\n}\n")),(0,i.mdx)("p",null,"Or in case where we need to specify an alias:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class ProductsList extends \\PHPUnit\\Framework\\TestCase\n{\n   #[\n      DataFixture(ProductFixture::class, as: 'product', count: 3)\n   ]\n   public function testGetProductsCount(): void\n   {\n      $fixtures = DataFixtureStorageManager::getStorage();\n      $product1 = $fixtures->get('product1');\n      $product2 = $fixtures->get('product2');\n      $product3 = $fixtures->get('product3');\n   }\n}\n")),(0,i.mdx)("p",null,"The generated fixtures will be assigned aliases product1, product2, and product3 (respectively)."),(0,i.mdx)("h3",{id:"specifying-the-store-scope-for-the-data-fixture"},"Specifying the store scope for the data fixture"),(0,i.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"If you need to instruct the system to execute a data fixture in the scope of a specific store view, you can set the ",(0,i.mdx)("inlineCode",{parentName:"p"},"scope")," parameter value to the valid store view, website, or store group identifier."),(0,i.mdx)("p",null,"In the following example, we create a new store with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"store2")," identifier and a product. Then, we create a guest cart under the ",(0,i.mdx)("inlineCode",{parentName:"p"},"store2")," scope and add a created product to it."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class QuoteTest extends \\PHPUnit\\Framework\\TestCase\n{\n    #[\n        DataFixture(StoreFixture::class, as: 'store2'),\n        DataFixture(ProductFixture::class, as: 'p'),\n        DataFixture(GuestCartFixture::class, as: 'cart', scope: 'store2'),\n        DataFixture(AddProductToCartFixture::class, ['cart_id' => '$cart.id$', 'product_id' => '$p.id$', 'qty' => 2]),\n    ]\n    public function testCollectTotals(): void\n    {\n    }\n}\n")),(0,i.mdx)("h3",{id:"test-class-and-test-method-scopes"},"Test class and test method scopes"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"DataFixture")," can be specified for a particular test case (method) or for an entire test class.\nThe basic rules for fixture attributes at different levels are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"DataFixture")," at a test class level makes the framework apply the declared fixtures to each test in the test class.\nWhen the final test is complete, all class-level fixtures are reverted."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"DataFixture")," for a particular test method signals the framework to revert the fixtures declared on a test class level and applies the fixtures declared at a test method level instead.\nWhen the test is complete, the ITF reverts the applied fixtures. Test class level data fixtures are ignored if they are present at the test method level.")),(0,i.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The integration testing framework interacts with a database to revert the applied fixtures."),(0,i.mdx)("h2",{id:"creating-the-fixture"},"Creating the fixture"),(0,i.mdx)("p",null,"Data Fixture is a PHP class that implements ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\TestFramework\\Fixture\\DataFixtureInterface")," or  ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\TestFramework\\Fixture\\RevertibleDataFixtureInterface"),". Its main purpose is to seed the database with the data needed to run a test."),(0,i.mdx)("h3",{id:"principles"},"Principles"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Data Fixture class MUST implement ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\TestFramework\\Fixture\\DataFixtureInterface")," or  ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\TestFramework\\Fixture\\RevertibleDataFixtureInterface")," if the data created by the fixture is revertible. For instance, a fixture that creates an entity (for example, product)."),(0,i.mdx)("li",{parentName:"ol"},"Data Fixture class MUST be placed in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"<ModuleName>/Test/Fixture")," folder of the corresponding module with namespace: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<VendorName>\\<ModuleName>\\Test\\Fixture")," (for example, ",(0,i.mdx)("inlineCode",{parentName:"li"},"Magento\\Catalog\\Test\\Fixture"),")."),(0,i.mdx)("li",{parentName:"ol"},"Data Fixture class SHOULD follow single responsibility principle."),(0,i.mdx)("li",{parentName:"ol"},"Data Fixture class MUST depend only on services from modules that are declared in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"require")," section of its module's composer.json file."),(0,i.mdx)("li",{parentName:"ol"},"Data Fixture MUST NOT depend on another fixture."),(0,i.mdx)("li",{parentName:"ol"},"Data Fixture SHOULD be implemented using service APIs."),(0,i.mdx)("li",{parentName:"ol"},"Data Fixture SHOULD have dynamic default data to allow generating unique fixtures."),(0,i.mdx)("li",{parentName:"ol"},"Data Fixture MUST NOT handle input validation. Such validation should be handled by the service API.")),(0,i.mdx)("h3",{id:"dynamic-default-data"},"Dynamic default data"),(0,i.mdx)("p",null,"In order to generate multiple fixtures of the same type without having to manually configure unique fields, you can use the placeholder ",(0,i.mdx)("inlineCode",{parentName:"p"},"%uniqid%")," in the default value of unique fields and ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\TestFramework\\Fixture\\Data\\ProcessorInterface")," to substitute the placeholder with a unique sequence."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4-develop/app/code/Magento/Catalog/Test/Fixture/Product.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"Magento\\Catalog\\Test\\Fixture\\Product"))," demonstrates the usage of ",(0,i.mdx)("inlineCode",{parentName:"p"},"%uniqid%")," (",(0,i.mdx)("inlineCode",{parentName:"p"},"sku"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"simple-product%uniqid%"),") in the fixture default data."),(0,i.mdx)("p",null,"In the following example, a unique ",(0,i.mdx)("inlineCode",{parentName:"p"},"sku")," is automatically generated for the first fixture (for example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"simple-product61c10b2e86f991"),") and the second fixture (for example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"simple-product61c10b2e86f992"),"). The sequence is random and therefore unpredictable."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class ProductsListTest extends \\PHPUnit\\Framework\\TestCase\n{\n     #[\n        DataFixture(ProductFixture::class),\n        DataFixture(ProductFixture::class)\n     ]\n    public function testGetProductsCount(): void\n    {\n    }\n}\n")),(0,i.mdx)("h3",{id:"decoupling-fixtures"},"Decoupling fixtures"),(0,i.mdx)("p",null,'Fixtures must be written in the way that they only use one API to generate data. For example, the fixture that creates\na product should only invoke the "Create Product" API and return the product created. This fixture should not add any extra\nlogic beyond the "create product" API capabilities, such logic should be implemented in a separate fixture.'),(0,i.mdx)("h3",{id:"examples"},"Examples"),(0,i.mdx)("p",null,"Example 1:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class QuoteTest extends \\PHPUnit\\Framework\\TestCase\n{\n\n    #[\n        DataFixture(ProductFixture::class, as: 'p'),\n        DataFixture(GuestCartFixture::class, as: 'cart'),\n        DataFixture(AddProductToCartFixture::class, ['cart_id' => '$cart.id$', 'product_id' => '$p.id$', 'qty' => 2]),\n        DataFixture(SetBillingAddressFixture::class, ['cart_id' => '$cart.id$']),\n        DataFixture(SetShippingAddressFixture::class, ['cart_id' => '$cart.id$']),\n    ]\n    public function testCollectTotals(): void\n    {\n    }\n}\n")),(0,i.mdx)("p",null,"Example 2:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"class PriceTest extends \\PHPUnit\\Framework\\TestCase\n{\n    #[\n        DataFixture(ProductFixture::class, ['sku' => 'simple1', 'price' => 10], 'p1'),\n        DataFixture(ProductFixture::class, ['sku' => 'simple2', 'price' => 20], 'p2'),\n        DataFixture(ProductFixture::class, ['sku' => 'simple3', 'price' => 30], 'p3'),\n        DataFixture(BundleSelectionFixture::class, ['sku' => '$p1.sku$', 'price' => 10, 'price_type' => 0], 'link1'),\n        DataFixture(BundleSelectionFixture::class, ['sku' => '$p2.sku$', 'price' => 25, 'price_type' => 1], 'link2'),\n        DataFixture(BundleSelectionFixture::class, ['sku' => '$p3.sku$', 'price' => 25, 'price_type' => 0], 'link3'),\n        DataFixture(BundleOptionFixture::class, ['product_links' => ['$link1$', '$link2$', '$link3$']], 'opt1'),\n        DataFixture(\n            BundleProductFixture::class,\n            ['sku' => 'bundle1','price' => 50,'price_type' => 1,'_options' => ['$opt1$']],\n            'bundle1'\n        ),\n    ]\n    public function testBundleWithFixedPrice(): void\n    {\n\n    }\n}\n")),(0,i.mdx)("h3",{id:"fixture-rollback"},"Fixture rollback"),(0,i.mdx)("p",null,"A fixture that contains database transactions only are reverted automatically.\nOtherwise, when a fixture creates files or performs any actions other than a database transaction, provide the corresponding rollback logic, in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"revert")," method of the revertible data fixture. Rollbacks are run after reverting all the fixtures related to database transactions."),(0,i.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"See the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4-develop/app/code/Magento/Catalog/Test/Fixture/Product.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"Magento\\Catalog\\Test\\Fixture\\Product"))," fixture for an example."),(0,i.mdx)("h3",{id:"restrictions"},"Restrictions"),(0,i.mdx)("p",null,"Do not rely on and do not modify an application state from within a fixture. The ",(0,i.mdx)("a",{parentName:"p",href:"../annotations/magento-app-isolation.md"},"application isolation attribute")," can reset the application state at any time."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-integration-attributes-data-fixture-md-82fd8e088ca491577bc2.js.map