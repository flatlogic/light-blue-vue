import DOMPurify from 'dompurify'

export function sanitizeHtml(html: string | undefined | null): string {
  if (!html) return ''
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'a', 'b', 'i', 'em', 'strong', 'p', 'br', 'ul', 'ol', 'li',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'small',
      'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'blockquote', 'code', 'pre', 'hr', 'sup', 'sub',
    ],
    ALLOWED_ATTR: [
      'href', 'target', 'rel', 'class', 'id', 'style',
      'src', 'alt', 'width', 'height', 'title',
    ],
  })
}

export function useSafeHtml() {
  return {
    sanitize: sanitizeHtml,
  }
}
