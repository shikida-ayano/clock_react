import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.config.babel';

const src = path.resolve(__dirname, '../src');

const devConfig = {
  // plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'clock',
      template: `${src}/index.html`,
    }),
  ],
};

export default merge(common, devConfig);
