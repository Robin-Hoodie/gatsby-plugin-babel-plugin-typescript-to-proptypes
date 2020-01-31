exports.onCreateBabelConfig = ({stage, actions: {setBabelPlugin}}, options) => {
  if (options.disable) return;
  if (stage === "develop") { //Gatsby calls `onCreateBabelConfig` on every stage for both `gatsby build` and `gatsby develop` so we only need one
    delete options.disable; // Don/t pass this to original plugin in case a "disable" option is introduced
    setBabelPlugin({
      name: require.resolve("babel-plugin-typescript-to-proptypes"),
      options
    });
  }
};
