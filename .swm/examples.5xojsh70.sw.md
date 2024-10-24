---
title: examples
---
## title: Shuju editing this .md Examples

# Changes made reflected directly to local site

This page shows some of the special features that come out of the box in Doctave. You can view how this file is constructed by opening the <SwmPath>[docs/examples.md](/docs/examples.md)</SwmPath> file in your `docs` folder.

## Diagrams

Doctave comes with Mermaid.js support, which means you can create intricate diagrams directly in your Markdown files:

```
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

You can read more about Mermaid JS in the [Doctave docs](https://cli.doctave.com/features/mermaid-js) or by going through the Mermaid JS [tutorials](https://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/n00b-syntaxReference.html).

## Syntax highlighting

Syntax highlighting is provided by [Prism](https://prismjs.com/) and Doctave supports most popular languages out of the box.

```
impl Watcher {
    fn notify<S: Into<String>>(&self, path: PathBuf, msg: S) -> bool {
        self.channel.send((path, msg.into())).is_ok()
    }
}
```

You can refer to the Doctave [Markdown reference](https://cli.doctave.com/features/markdown) to see how to use syntax highlighting.

## Search

Doctave automatically indexes all your pages and allows you to search for them without any 3rd party services. You can see the search bar at the top of the page - hit the `s` key, and you can start searching all the content of the site.

Note - the results are keyboard-friendly. Use either the tab key or arrow keys to navigate them.

## Dark mode

You can turn on dark mode by clicking on the button on the left side of the page - the one with the moon icon. Your browser will remember your selection for each Doctave site.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==" repo-name="covidpass"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
