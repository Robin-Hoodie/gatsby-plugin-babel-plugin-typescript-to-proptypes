## Description

As the name suggests, this plugin is a pretty basic wrapper around [babel-plugin-typescript-to-proptypes](https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes).  

## Dependencies

- Node (tested on `v13.6.0`, though most earlier versions should work too)
- [babel-plugin-typescript-to-proptypes](https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes) needs to be installed when using this plugin.

## How to install

To get started, install this plugin and `babel-plugin-typescript-to-proptypes` by running

`npm i gatsby-plugin-babel-plugin-typescript-to-proptypes babel-plugin-typescript-to-proptypes` or  
`yarn add gatsby-plugin-babel-plugin-typescript-to-proptypes babel-plugin-typescript-to-proptypes`

We need to install both as `babel-plugin-typescript-to-proptypes` is a peer dependency of this plugin.

## Available options

All the options of `babel-plugin-typescript-to-proptypes` and will be passed through.  
Please see [the docs of that plugin](https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes) on the available options.  

The additional `disable` option has been added for convenience sake, which will disable this plugin from running altogether.

## When do I use this plugin?

Use this plugin if you want `propTypes` to be added to your components based on your type definitions.  
If you're not using Gatsby with Typescript, this plugin is not for you.    
Again, more to be found on that in [the docs on babel-plugin-typescript-to-proptypes](https://www.npmjs.com/package/babel-plugin-typescript-to-proptypes)

## Example usage

```
//gatsby-config.js
{
    resolve: "gatsby-plugin-babel-plugin-typescript-to-proptypes",
    options: {
        ... Any options from `babel-plugin-typescript-to-proptypes` you want to provide
    }
}
```

You might want to set the `disable` option depending on the environment you're running gatsby in, as most people don't need `propTypes` in production builds.  
Gatsby will set the env variable `NODE_ENV` to `development` or `production` for the `gatsby develop` and `gatsby build` commands respectively,
which means a good way to configure the `disable` option would be as follows:

```
//gatsby-config.js
{
    resolve: "gatsby-plugin-babel-plugin-typescript-to-proptypes",
    options: {
        disable: process.env.NODE_ENV === "production",
        ... //Any other options you want to provide
    }
}
```

## Do I really need a plugin for a plugin?

No, if you'd rather have control over adding `babel-plugin-typescript-to-proptypes` yourself, you could also implement things yourself in `gatsby-node.js`.
In that case you don't need this plugin.  
This plugin was made because it was needed for a personal project, but I thought I'd provide the functionality to other people who went looking for the same thing as me.

E.g.

```
exports.onCreateBabelConfig = ({stage, actions: {setBabelPlugin}}, options) => {
  if (stage === "develop") { //Gatsby calls `onCreateBabelConfig` on every stage for both `gatsby build` and `gatsby develop` so we only need one stage
    setBabelPlugin({
      name: require.resolve("babel-plugin-typescript-to-proptypes"),
      options
    });
  }
};
```

See [the Gatsby Node API docs](https://www.gatsbyjs.org/docs/node-apis/) for more info.

## How to develop locally

- Clone this plugin
- That's it, this plugin has no dependencies apart from having node installed on your system

## Contributing

Please file an issue in this repo and/or open a PR if you'd like to contribute
