import SpanStyle from './Span.module.css'

export default function Span({children}) {
  return (
<span className={SpanStyle.span}>
     {children}
</span>
  )
}
