/*
 * @Author: tiger.wang
 * @Date: 2021-08-25 09:04:44
 * @LastEditors: your name
 * @LastEditTime: 2021-08-28 21:27:24
 * @Description: In User Settings Edit
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { modules: false }],
                            '@babel/react'
                        ],
                        sourceType: 'unambiguous'
                    }
                },
            },
            {
                test: /\.ts?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
