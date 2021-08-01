(self.webpackChunklburdock_github_io=self.webpackChunklburdock_github_io||[]).push([[269],{6081:function(e,t,n){"use strict";var a=n(5318),r=n(862);t.Z=void 0;var l=r(n(7294)),o=(0,a(n(2108)).default)(l.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.Z=o},8912:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return u}});var a=n(2122),r=n(9756),l=n(7294),o=n(3905),s=n(6081),c=n(6266),i=["children"];function d(e){e.children;var t=(0,r.Z)(e,i);return l.createElement(c.Z,t,l.createElement(s.Z,null))}var p=["components"],m={description:"Quick reference",hide_table_of_contents:!0,hide_title:!0,keywords:["jest","expect"],sidebar_position:1,id:"js-test"},k={unversionedId:"js-test",id:"js-test",isDocsHomePage:!1,title:"Jest + React Testing Library",description:"Quick reference",source:"@site/docs/js-test.mdx",sourceDirName:".",slug:"/js-test",permalink:"/docs/js-test",version:"current",sidebarPosition:1,frontMatter:{description:"Quick reference",hide_table_of_contents:!0,hide_title:!0,keywords:["jest","expect"],sidebar_position:1,id:"js-test"},sidebar:"tutorialSidebar"},u=[{value:"Jest",id:"jest",children:[{value:"Matchers",id:"matchers",children:[]},{value:"Mocks",id:"mocks",children:[]},{value:"Mock examples",id:"mock-examples",children:[]}]},{value:"React Test Library (+ Jest)",id:"react-test-library--jest",children:[{value:"Query variants",id:"query-variants",children:[]},{value:"Query types",id:"query-types",children:[]},{value:"Implicit roles",id:"implicit-roles",children:[]}]}],N={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"jest"},"Jest"),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"test-syntax"},"Test syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="foo.test.js"',title:'"foo.test.js"'},'import foo from "./foo";\n\ndescribe("foo", () => {\n  test("works", () => {\n    expect(foo()).toBe("bar");\n  });\n});\n')),(0,o.kt)("h4",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"beforeAll(() => {\n  // Setup\n});\n\nafterAll(() => {\n  // Breakdown\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"beforeEach(() => {\n  // Setup\n});\n\nafterEach(() => {\n  // Breakdown\n});\n")),(0,o.kt)("h4",{id:"focusing-or-skipping-tests"},"Focusing or skipping tests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe.only(\xb7\xb7\xb7)\nfdescribe(...)\n\ntest.only(...)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe.skip(\xb7\xb7\xb7)\nxdescribe(...)\n\ntest.skip(\xb7\xb7\xb7)\nxtest(...)\n"))),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"duplicating-tests"},"Duplicating tests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'test.each([\n  { a: 1, b: 1, expected: 2 },\n  { a: 1, b: 2, expected: 3 },\n  { a: 2, b: 1, expected: 3 },\n])("$a + $b === $expected", ({ a, b, expected }) => {\n  expect(a + b).toBe(expected);\n});\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'test.each`\n  a    | b    | expected\n  ${1} | ${1} | ${2}\n  ${1} | ${2} | ${3}\n  ${2} | ${1} | ${3}\n`("$a + $b === $expected", ({ a, b, expected }) => {\n  expect(a + b).toBe(expected);\n});\n')),(0,o.kt)("h4",{id:"duplicating-test-suites"},"Duplicating test suites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'describe.each([\n  { a: 1, b: 1, expected: 2 },\n  { a: 1, b: 2, expected: 3 },\n  { a: 2, b: 1, expected: 3 },\n])("$a + $b", ({ a, b, expected }) => {\n  test(`to not be greater than ${expected}`, () => {\n    expect(a + b).not.toBeGreaterThan(expected);\n  });\n\n  test(`to not be less than ${expected}`, () => {\n    expect(a + b).not.toBeLessThan(expected);\n  });\n});\n'))))),(0,o.kt)(d,{href:"https://jestjs.io/docs/api",mdxType:"ReferenceLink"}),(0,o.kt)("h3",{id:"matchers"},"Matchers"),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"jest-1"},"jest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(0).toBeFalsy();\nexpect(1).toBeTruthy();\nexpect(NaN).toBeNaN();\nexpect(null).toBeNull();\nexpect("a").toBeDefined();\nexpect(undefined).toBeUndefined();\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"expect(3).toBe(3);\nexpect(0.3).toBeCloseTo(0.3, 5);\nexpect(4).toBeGreaterThan(3);\nexpect(3).toBeGreaterThanOrEqual(3);\nexpect(2).toBeLessThan(3);\nexpect(3).toBeLessThanOrEqual(3);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect("abc").toBe("abc");\nexpect("abc").toContain("b");\nexpect("abc").toMatch(/B/i);\nexpect("abc").toHaveLength(3);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(["a", { b: 1 }]).toEqual(["a", { b: 1 }]);\nexpect(["a", { b: 1 }]).toContain("a");\nexpect(["a", { b: 1 }]).toContainEqual({ b: 1 });\nexpect(["a", { b: 1 }]).toHaveLength(2);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect({ a: 1, b: 2 }).toStrictEqual({ a: 1, b: 2 });\nexpect({ a: 1, b: 2 }).toMatchObject(({ a: 1 });\nexpect({ a: 1, b: 2 }).toHaveProperty("b", 2);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect("a").toBe(expect.any(String));\nexpect("a").toBe(expect.anything());\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"expect(() => {\n  errFunc();\n}).toThrow(/nope/i);\n")),(0,o.kt)(d,{href:"https://jestjs.io/docs/expect",mdxType:"ReferenceLink"})),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"jest-dom"},"jest-dom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"expect(el).toBeChecked();\nexpect(el).toBeDisabled();\nexpect(el).toBeEmptyDOMElement();\nexpect(el).toBeEnabled();\nexpect(el).toBeInTheDocument();\nexpect(el).toBeInvalid();\nexpect(el).toBePartiallyChecked();\nexpect(el).toBeRequired();\nexpect(el).toBeValid();\nexpect(el).toBeVisible();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(el).toContainElement(childEl);\nexpect(el).toContainHTML("<br />");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(el).toHaveAccessibleDescription("Home");\nexpect(el).toHaveAccessibleName("Alt text");\nexpect(el).toHaveAttribute("type", "submit");\nexpect(el).toHaveClass("cls1 cls2");\nexpect(el).toHaveDisplayValue("John");\nexpect(el).toHaveErrorMessage("Nope!");\nexpect(el).toHaveFocus();\nexpect(el).toHaveFormValues({ name: "John" });\nexpect(el).toHaveStyle({ color: "red" });\nexpect(el).toHaveTextContent("Content");\nexpect(el).toHaveValue("John");\n')),(0,o.kt)(d,{href:"https://github.com/testing-library/jest-dom",mdxType:"ReferenceLink"})))),(0,o.kt)("h3",{id:"mocks"},"Mocks"),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mock = jest.fn();\nconst mock = jest.fn(n => n * n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mock = jest\n  .fn()\n  .mockImplementation(n => n * n)\n  .mockImplementationOnce(n => n * n * n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const mock = jest\n  .fn()\n  .mockReturnValue("default")\n  .mockReturnValueOnce("first")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const mock = jest\n  .fn()\n  .mockResolvedValue("default")\n  .mockResolvedValueOnce("first")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const mock = jest\n  .fn()\n  .mockRejectedValue(new Error("default"))\n  .mockRejectedValueOnce(new Error("first"));\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"mock.mockClear()\nmock.mockReset()\nmocn.mockRestore()\n"))),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"mock-specific-matchers"},"Mock-specific matchers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(mock).toHaveBeenCalled();\nexpect(mock).toHaveBeenCalledTimes(3);\nexpect(mock).toHaveBeenCalledWith("a");\nexpect(mock).toHaveBeenNthCalledWith(2, "b");\nexpect(mock).toHaveBeenLastCalledWith("c");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'expect(mock).toHaveReturned();\nexpect(mock).toHaveReturnedTimes(3);\nexpect(mock).toHaveReturnedWith("x");\nexpect(mock).toHaveNthReturnedWith(2, "y");\nexpect(mock).toHaveLastReturnedWith("z");\n'))))),(0,o.kt)(d,{href:"https://jestjs.io/docs/mock-function-api",mdxType:"ReferenceLink"}),(0,o.kt)("h3",{id:"mock-examples"},"Mock examples"),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"default-and-named-function-exports"},"Default and named function exports"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import defaultFoo, { namedFoo } from "./module-to-mock";\nimport { defaultFooConsumer, namedFooConsumer } from ".";\n\njest.mock("./module-to-mock");\n\nafterEach(() => {\n  defaultFoo.mockReset();\n  namedFoo.mockReset();\n});\n\ntest("defaultFooConsumer, () => {\n  defaultFoo.mockReturnValue(true);\n  // Test defaultFooConsumer\n});\n\ntest("namedFooConsumer, () => {\n  namedFoo.mockReturnValue(false);\n  // Test namedFooConsumer\n});\n'))),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"default-class-export"},"Default class export"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import classConsumer from ".";\n\nconst mockFoo = jest.fn();\n\njest.mock("./class-default-export", () => {\n  return jest.fn(() => ({\n    foo: mockFoo,\n  }));\n});\n\nafterEach(() => {\n  mockFoo.mockReset();\n});\n\ntest("classConsumer", () => {\n  mockFoo.mockReturnValue(true);\n  // Test classConsumer\n});\n')),(0,o.kt)("h4",{id:"named-class-export"},"Named class export"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import classConsumer from ".";\n\nconst mockFoo = jest.fn();\n\njest.mock("./class-named-export", () => {\n  return {\n    ClassToMock: jest.fn(() => ({\n      foo: mockFoo,\n    })),\n  };\n});\n\nafterEach(() => {\n  mockFoo.mockReset();\n});\n\ntest("classConsumer", () => {\n  mockFoo.mockReturnValue(true);\n  // Test classConsumer\n});\n'))))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"react-test-library--jest"},"React Test Library (+ Jest)"),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"test-syntax-1"},"Test syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="button.test.jsx"',title:'"button.test.jsx"'},'import React from "react";\nimport { render, screen } from "@testing-library/react";\nimport Button from "./button";\n\ndescribe("Button", () => {\n  test("renders", () => {\n    render(<Button>Okay</Button>);\n    const btn = screen.getByRole("button");\n    expect(btn).toBeInTheDocument();\n  });\n});\n')),(0,o.kt)("h4",{id:"user-event-example"},"User event example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { render, screen } from "@testing-library/react";\nimport userEvent from "@testing-library/user-event";\nimport Button from "./button";\n\ndescribe("Button", () => {\n  test("renders", () => {\n    const onClick = jest.fn();\n    render(<Button onClick={onClick}>Okay</Button>);\n    userEvent.click(screen.getByRole("button"));\n    expect(onClick).toHaveBeenCalled();\n  });\n});\n')),(0,o.kt)(d,{href:"https://testing-library.com/docs/ecosystem-user-event",mdxType:"ReferenceLink"})),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("h4",{id:"async-testing"},"Async testing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import {\n  render,\n  screen,\n  waitFor,\n  waitForElementToBeRemoved,\n} from "@testing-library/react";\n\ntest("renders", () => {\n  render(<Button>Okay</Button>);\n\n  // Preferred: Use `findBy` to wait for the element to appear\n  expect(await screen.findByRole("button")).toBeInTheDocument();\n\n  // `findBy` is equivalent to using `waitFor` with `getBy`\n  await waitFor(() =>\n    expect(screen.getByRole("button")).toBeInTheDocument()\n  );\n\n  // Shorthand for element removal\n  await waitForElementToBeRemoved(screen.getByRole("button"));\n});\n')),(0,o.kt)(d,{href:"https://testing-library.com/docs/dom-testing-library/api-async",mdxType:"ReferenceLink"}),(0,o.kt)("h4",{id:"render-function"},"Render function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const {\n  // DOM node where the component is mounted\n  container,\n\n  // Function to rerender your component with new props\n  rerender,\n\n  // Function that will unmount your rendered component\n  unmount,\n} = render(<Component />, {\n  // Renders component with ReactDOM.hydrate\n  hydrate: true,\n\n  // Component that wraps the component you are testing\n  wrapper: ({ children }) => <Layout>{children}</Layout>,\n});\n")),(0,o.kt)(d,{href:"https://testing-library.com/docs/react-testing-library/api#render",mdxType:"ReferenceLink"})))),(0,o.kt)("h3",{id:"query-variants"},"Query variants"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:"center"},"No Match"),(0,o.kt)("th",{parentName:"tr",align:"center"},"1 Match"),(0,o.kt)("th",{parentName:"tr",align:"center"},"1+ Match"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"getBy")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--danger"},"Error")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Element")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--danger"},"Error"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"getAllBy")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--danger"},"Error")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Element","[ ]")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Element","[ ]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"queryBy")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"null")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Element")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--danger"},"Error"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"queryAllBy")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"[ ]")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Element","[ ]")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Element","[ ]"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"findBy")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--danger"},"Promise<Error",">")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Promise<Element",">")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--danger"},"Promise<Error",">"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"findAllBy")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--danger"},"Promise<Error",">")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Promise<Element","[ ]",">")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("span",{className:"badge badge--success"},"Promise<Element","[ ]",">"))))),(0,o.kt)(d,{href:"https://testing-library.com/docs/queries/about#types-of-queries",mdxType:"ReferenceLink"}),(0,o.kt)("h3",{id:"query-types"},"Query types"),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--4"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Aria role")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"getByRole\ngetAllByRole\nqueryByRole\nqueryAllByRole\nfindByRole\nfindAllByRole\n"))),(0,o.kt)("div",{className:"col col--4"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Label or aria-label text")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"getByLabelText\ngetAllByLabelText\nqueryByLabelText\nqueryAllByLabelText\nfindByLabelText\nfindAllByLabelText\n"))),(0,o.kt)("div",{className:"col col--4"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Input placeholder value")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"getByPlaceholderText\ngetAllByPlaceholderText\nqueryByPlaceholderText\nqueryAllByPlaceholderText\nfindByPlaceholderText\nfindAllByPlaceholderText\n")))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--4"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Element text content")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"getByText\ngetAllByText\nqueryByText\nqueryAllByText\nfindByText\nfindAllByText\n"))),(0,o.kt)("div",{className:"col col--4"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Form element current value")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"getByDisplayValue\ngetAllByDisplayValue\nqueryByDisplayValue\nqueryAllByDisplayValue\nfindByDisplayValue\nfindAllByDisplayValue\n"))),(0,o.kt)("div",{className:"col col--4"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Img alt attribute")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"getByAltText\ngetAllByAltText\nqueryByAltText\nqueryAllByAltText\nfindByAltText\nfindAllByAltText\n")))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--4"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7. Title attribute or svg title tag")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"getByTitle\ngetAllByTitle\nqueryByTitle\nqueryAllByTitle\nfindByTitle\nfindAllByTitle\n"))),(0,o.kt)("div",{className:"col col--4"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8. ",(0,o.kt)("inlineCode",{parentName:"strong"},"data-testid")," attribute")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"getByTestId\ngetAllByTestId\nqueryByTestId\nqueryAllByTestId\nfindByTestId\nfindAllByTestId\n"))),(0,o.kt)("div",{className:"col col--4"}))),(0,o.kt)(d,{href:"https://testing-library.com/docs/queries/about#priority",mdxType:"ReferenceLink"}),(0,o.kt)("h3",{id:"implicit-roles"},"Implicit roles"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"These can be used by any of the role queries."),(0,o.kt)("p",{className:"margin-top--md"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Element"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Role"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<a>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"link"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<article>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"article"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<aside>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"complementary"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<details>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"group"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<h1>")," to ",(0,o.kt)("inlineCode",{parentName:"td"},"<h6>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"heading"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<hr>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"separator"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<img>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"img"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="button">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"button"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="checkbox">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"checkbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="email">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"textbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="image">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"button"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="number">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"spinbutton"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="radio">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"radio"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="range">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"slider"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="reset">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"button"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="search">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"searchbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="submit">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"button"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="tel">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"textbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="text">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"textbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'<input type="url">')),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"textbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<li>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"listitem"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<main>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"main"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<nav>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"navigation"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<ol>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"list"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<option>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"option"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<output>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"status"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<progress>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"progressbar"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<select multiple>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"listbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<select>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"combobox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<textarea>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"textbox"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<ul>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"list")))))),(0,o.kt)(d,{href:"https://www.w3.org/TR/html-aria/#docconformance",mdxType:"ReferenceLink"})))}g.isMDXComponent=!0}}]);