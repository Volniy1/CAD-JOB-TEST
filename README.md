## Start

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

##

Next.js + Typescript, styled-components, scss, mantine,tabler, framer-motion

Hello, this is Arthur, I will explain for my methods of creating this project.

1 - Hosting: I'm using Vercel for deployment — it’s the best solution I know for hosting Next.js applications.

2 - Home Page Design: The homepage is based on the mockup you provided, blended with stylistic elements I found interesting while browsing the web.

3 - UI Library: I chose Mantine for this project since I recently took an interest in it. While I usually prefer building custom components, using Mantine saved time and made development smoother.

4 - Styled Components: I like keeping styles in the same file when they don’t take up too much space. Otherwise, I split them into separate files for better organization.

5 - Global Styles (globals.scss): While not strictly necessary here, I always keep a global SCSS file ready. It’s useful for themes and managing SCSS variables, which I find to be the best choice for scalability.

6 - Responsiveness: I used Mantine’s Grid system to simplify the page layout, reducing the amount of code needed. For text styling, I opted for Styled Components.

7 - Forms: The form structure and functionality rely on Mantine, but I customized certain fields using Styled Components, referencing Mantine’s documentation. I also integrated Framer Motion to enhance the background animation. While the effect is lightweight, users with slower internet might experience a slight delay when loading images.

8 - SEO: The project follows best SEO practices by using proper metadata and semantic HTML tags.

9 - YouTube Embeds: I implemented youtube-lite-embed, which I find to be the most customizable solution. I made a few styling adjustments, such as changing the button style and hiding the cover, because surprises are fun!
