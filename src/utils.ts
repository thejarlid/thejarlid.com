import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT_DIR = process.cwd();
export const WORK_DIR = path.join(ROOT_DIR, 'markdown/work');


export async function getFilesInDir(dir: string) {
  return fs.readdirSync(dir, 'utf-8')
}

export async function getPostInDirBySlug(dir: string, slug: string) {
  const source = fs.readFileSync(path.join(dir, `${slug}.md`), 'utf8')

  const { data, content } = matter(source)

  return {
    frontMatter: data,
    markdownBody: content,
  }
}

export async function getFrontMatterForAllPostsInDir(dir: string) {
  const files = fs.readdirSync(dir)

  // @ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(dir, postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        frontMatter: data,
        slug: postSlug.replace('.md', ''),
      },
      ...allPosts,
    ]
  }, [])
}
