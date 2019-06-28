# Docs

It's Reddit, disguised as Google Docs. That's pretty much it.

## Usage

First, there must be a URL parameter for the proxy server such as "?proxy=https://example.com"

Click on the docs logo to bring up a list of r/all. Type in the document name input box the name of the sub you want to load, then open the posts menu again. It'll load the posts you want.

After you click on the post, the comments will load a few seconds later. Click on the bullet point to collapse that comment stack.

Also in the url, you can specify a post or sub to load. For example:
`micahsgilbert.github.io/docs?sub=askreddit` will load r/askreddit by default in the post menu. `micahsgilbert.github.io/docs?post=88qmx2` will load that post.

## Want to develop?

You can if you want, although my code isn't great. Any help would be appreciated.

## What's the `docs` folder?

That's what GitHub pages uses to host the site. It should be the exact same as the `build` folder.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
