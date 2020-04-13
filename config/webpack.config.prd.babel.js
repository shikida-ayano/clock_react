import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.config.babel';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const src = path.resolve(__dirname, '../src');

const prdConfig = {
  // plugins
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'clock',
      filename: 'index.html',
      template: `${src}/index.html`,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: { compress: { drop_console: true } },
      }),
    ],
  },
};

export default merge(common, prdConfig);
