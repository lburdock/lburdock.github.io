(self.webpackChunklburdock_github_io=self.webpackChunklburdock_github_io||[]).push([[575],{7952:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i=["components"],s={},o={unversionedId:"test",id:"test",isDocsHomePage:!1,title:"Testing @ Fiveable",description:"As a team, we are aiming to achieve full test coverage for components and functions written in new code",source:"@site/docs/test.md",sourceDirName:".",slug:"/test",permalink:"/docs/test",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jest + React Testing Library",permalink:"/docs/js-test"}},c=[{value:"Testing Checklist For Your PRs:",id:"testing-checklist-for-your-prs",children:[]},{value:"When to test",id:"when-to-test",children:[{value:"Add tests if you:",id:"add-tests-if-you",children:[]},{value:"Don&#39;t add tests if you:",id:"dont-add-tests-if-you",children:[]},{value:"If you get stuck on a test for more than 30 minutes, reach out for help!",id:"if-you-get-stuck-on-a-test-for-more-than-30-minutes-reach-out-for-help",children:[]}]},{value:"Jest",id:"jest",children:[{value:"Basic Syntax",id:"basic-syntax",children:[]},{value:"Jest Matchers",id:"jest-matchers",children:[]}]},{value:"React Testing Library",id:"react-testing-library",children:[{value:"Basic Syntax",id:"basic-syntax-1",children:[]},{value:"Query variants",id:"query-variants",children:[]},{value:"Query types",id:"query-types",children:[]},{value:"jest-dom Matcher",id:"jest-dom-matcher",children:[]}]}],d={toc:c};function p(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As a team, we are aiming to achieve full test coverage for components and functions written in new code"),(0,r.kt)("h2",{id:"testing-checklist-for-your-prs"},"Testing Checklist For Your PRs:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tests are readable and maintainable."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test names (describe, it) are concise, explicit, and descriptive."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Avoid using logic within tests."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Don't test multiple concerns in the same test, split them into separate tests."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write tests for all logic paths in a function AND edge cases."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test the behavior, not the internal implementation."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use a mock to simulate/stub complex class structure, methods, or async functions.")),(0,r.kt)("h2",{id:"when-to-test"},"When to test"),(0,r.kt)("h3",{id:"add-tests-if-you"},"Add tests if you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new jsx component"),(0,r.kt)("li",{parentName:"ul"},"Refactor an existing component"),(0,r.kt)("li",{parentName:"ul"},"Create a new function"),(0,r.kt)("li",{parentName:"ul"},"Update an existing util function")),(0,r.kt)("h3",{id:"dont-add-tests-if-you"},"Don't add tests if you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are making a small update to an existing component"),(0,r.kt)("li",{parentName:"ul"},"Have already spent over hour writing tests")),(0,r.kt)("h3",{id:"if-you-get-stuck-on-a-test-for-more-than-30-minutes-reach-out-for-help"},"If you get stuck on a test for more than 30 minutes, reach out for help!"),(0,r.kt)("h1",{id:"testing-cheatsheet"},"Testing Cheatsheet"),(0,r.kt)("h2",{id:"jest"},"Jest"),(0,r.kt)("h3",{id:"basic-syntax"},"Basic Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import foo from "./foo";\n\ndescribe("foo", () => {\n  test("works", () => {\n    expect(foo()).toBe("bar");\n  });\n});\n')),(0,r.kt)("h3",{id:"jest-matchers"},"Jest Matchers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'expect(0).toBeFalsy();\nexpect(1).toBeTruthy();\nexpect(NaN).toBeNaN();\nexpect(null).toBeNull();\nexpect("a").toBeDefined();\nexpect(undefined).toBeUndefined();\n\nexpect(3).toBe(3);\nexpect(0.3).toBeCloseTo(0.3, 5);\nexpect(4).toBeGreaterThan(3);\nexpect(3).toBeGreaterThanOrEqual(3);\nexpect(2).toBeLessThan(3);\nexpect(3).toBeLessThanOrEqual(3);\n\nexpect("abc").toBe("abc");\nexpect("abc").toContain("b");\nexpect("abc").toMatch(/B/i);\nexpect("abc").toHaveLength(3);\n\nexpect(["a", { b: 1 }]).toEqual(["a", { b: 1 }]);\nexpect(["a", { b: 1 }]).toContain("a");\nexpect(["a", { b: 1 }]).toContainEqual({ b: 1 });\nexpect(["a", { b: 1 }]).toHaveLength(2);\n\nexpect({ a: 1, b: 2 }).toStrictEqual({ a: 1, b: 2 });\nexpect({ a: 1, b: 2 }).toMatchObject(({ a: 1 });\nexpect({ a: 1, b: 2 }).toHaveProperty("b", 2);\n\nexpect("a").toBe(expect.any(String));\nexpect("a").toBe(expect.anything());\n\nexpect(() => {\n  errFunc();\n}).toThrow(/nope/i);\n')),(0,r.kt)("h2",{id:"react-testing-library"},"React Testing Library"),(0,r.kt)("h3",{id:"basic-syntax-1"},"Basic Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport { render, screen } from "@fiveable-test-utils";\nimport Button from "./Button";\n\ndescribe("Button", () => {\n  test("renders", () => {\n    render(<Button>Okay</Button>);\n    const btn = screen.getByRole("button");\n    expect(btn).toBeInTheDocument();\n  });\n});\n')),(0,r.kt)("h3",{id:"query-variants"},"Query variants"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:"center"},"No Match"),(0,r.kt)("th",{parentName:"tr",align:"center"},"1 Match"),(0,r.kt)("th",{parentName:"tr",align:"center"},"1+ Match"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"getBy")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Error")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Element")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"getAllBy")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Error")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Element[]")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Element[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"queryBy")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Element")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"queryAllBy")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Element[]")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Element[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"findBy")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Error>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Element>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Error>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"findAllBy")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Error>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Element[]>")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Element[]]>"))))),(0,r.kt)("h3",{id:"query-types"},"Query types"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ByRole: aria role"),(0,r.kt)("pre",null,"getByRole getAllByRole queryByRole queryAllByRole findByRole findAllByRole")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ByLabelText: label or aria-label text"),(0,r.kt)("pre",null,"getByLabelText getAllByLabelText queryByLabelText queryAllByLabelText findByLabelText findAllByLabelText")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ByPlaceholderText: input placeholder value"),(0,r.kt)("pre",null,"getByPlaceholderText getAllByPlaceholderText queryByPlaceholderText queryAllByPlaceholderText findByPlaceholderText findAllByPlaceholderText")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ByText: element text content"),(0,r.kt)("pre",null,"getByText getAllByText queryByText queryAllByText findByText findAllByText")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ByDisplayValue: form element current value"),(0,r.kt)("pre",null,"getByDisplayValue getAllByDisplayValue queryByDisplayValue queryAllByDisplayValue findByDisplayValue findAllByDisplayValue")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ByLabelText: img alt attribute"),(0,r.kt)("pre",null,"getByAltText getAllByAltText queryByAltText queryAllByAltText findByAltText findAllByAltText")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ByTitle: title attribute or svg title tag"),(0,r.kt)("pre",null,"getByTitle getAllByTitle queryByTitle queryAllByTitle findByTitle findAllByTitle")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ByTestId: data-testid attribute"),(0,r.kt)("pre",null,"getByTestId getAllByTestId queryByTestId queryAllByTestId findByTestId findAllByTestId")),(0,r.kt)("h3",{id:"jest-dom-matcher"},"jest-dom Matcher"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'expect(el).toBeChecked();\nexpect(el).toBeDisabled();\nexpect(el).toBeEmptyDOMElement();\nexpect(el).toBeEnabled();\nexpect(el).toBeInTheDocument();\nexpect(el).toBeInvalid();\nexpect(el).toBePartiallyChecked();\nexpect(el).toBeRequired();\nexpect(el).toBeValid();\nexpect(el).toBeVisible();\n\nexpect(el).toContainElement(childEl);\nexpect(el).toContainHTML("<br />");\n\nexpect(el).toHaveAccessibleDescription("Home");\nexpect(el).toHaveAccessibleName("Alt text");\nexpect(el).toHaveAttribute("type", "submit");\nexpect(el).toHaveClass("cls1 cls2");\nexpect(el).toHaveDisplayValue("me@me.com");\nexpect(el).toHaveErrorMessage("Nope!");\nexpect(el).toHaveFocus();\nexpect(el).toHaveFormValues({ email: "me@me.com" });\nexpect(el).toHaveStyle({ color: "red" });\nexpect(el).toHaveTextContent("Example");\nexpect(el).toHaveValue("me@me.com");\n')),(0,r.kt)("h1",{id:"mocks"},"Mocks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TODO: Add mock examples")),(0,r.kt)("h1",{id:"videos"},"Videos"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TODO: Add testing workshop videos")),(0,r.kt)("h1",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/api"},"Jest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro"},"React testing library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/testing-library/jest-dom"},"React testing library - jest dom")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/ecosystem-user-event"},"React testing library - user event")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kentcdodds.com/blog/common-mistakes-with-react-testing-library"},"Common mistakes with React Testing Library"))))}p.isMDXComponent=!0}}]);