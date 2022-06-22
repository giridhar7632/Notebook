import { getSlugs } from '../lib/api'

export default function Home({ posts }: { posts: string[] }) {
	console.log('posts', posts)
	return (
		<>
			<h1 className='font-xl'>Articles</h1>
			{/* <Articles posts={posts} /> */}
		</>
	)
}

export async function getStaticProps() {
	const posts = getSlugs()

	return { props: { posts } }
}
