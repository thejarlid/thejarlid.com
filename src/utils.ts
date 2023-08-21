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

export async function getAllPostsInDirWithFrontMatter(dir: string) {
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

// export function getSortedWorkData() {
//   // Get file names under /markdown/work
//   const fileNames = fs.readdirSync(workDirectory);
//   const allWorkData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '');

//     // Read markdown file as string
//     const fullPath = path.join(workDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // Sort posts by date
//   return allWorkData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }