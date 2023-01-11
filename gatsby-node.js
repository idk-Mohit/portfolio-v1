exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" ||
        stage === "develop-html" ||
        stage === "develop") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /offending-module/,
                        use: loaders.null(),
                    },
                    {
                        test: /xterm|xterm-addon-fit/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}
