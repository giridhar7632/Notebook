import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'

const ResponsiveImage = (props) => <Image alt={props.alt} width={900} height={400} {...props} />
const Heading = {
  H1: ({ children }) => (
    <div className="bg-slate-300 text-xl font-bold text-gray-700">{children}</div>
  ),
  H2: ({ children }) => (
    <div className="bg-slate-300 text-lg font-semibold text-gray-700">{children}</div>
  ),
}

const Text = ({ children }) => <p className="bg-pink-200 font-serif text-gray-800">{children}</p>
const Pre = ({ children }) => <p className="bg-pink-200 text-sm text-gray-800">{children}</p>
const InlineCode = ({ children }) => (
  <p className="bg-pink-200 font-mono text-gray-800">{children}</p>
)

const components = {
  img: ResponsiveImage,
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
  pre: Pre,
  code: InlineCode,
}

export default function Post(props) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  )
}
