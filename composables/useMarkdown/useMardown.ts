import { marked } from 'marked'

export function useMarkdown() {
  const render = (markdownText: string) => {
    return marked.parse(markdownText)
  }
  return { render }
}
