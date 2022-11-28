import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true });

export const renderMarkdown = (content: string) =>
    md
        .render(content)
        .replace(
            /<a([^>]+)>(.+?)<\/a>/gim,
            `<a$1 target="_blank" rel="noopener noreferrer" title="$2" aria-label="$2">$2</a>`,
        );
