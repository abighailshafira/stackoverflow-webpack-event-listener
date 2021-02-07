import { Configuration } from "webpack";
import * as path from 'path';

const mainConfig: Configuration = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.join(__dirname, './src/main.ts'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './out/'),
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    }
}

export default [mainConfig]