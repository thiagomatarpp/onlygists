import { marked } from 'marked'

export function useMarkdown() {
  const render = (markdownText: string) => {
    marked.parse(markdownText)
  }
  return { render }
}
