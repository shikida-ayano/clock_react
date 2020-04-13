import path from 'path';

const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');

export default {
  entry: [
    '@babel/polyfill',
    `${src}/index.jsx`,
  ],

  output: {
    path: dist,
    filename: 'bundle.js',
  },

  devServer: {
    historyApiFallback: true,
    contentBase: 'dist',
    inline: true,
    port: 8000,
  },

  // resole path
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // JSX ES2015
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: 'url-loader',
      },
            {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('postcss-nesting'),
                require('postcss-cssnext')({
                  browsers: ['last 3 versions', '> 5%', 'iOS >= 8'],
                  features: {
                    customProperties: {
                      preserve: true,
                    },
                    overflowWrap: {
                      method: 'copy',
                    },
                    nesting: false,
                  },
                }),
                require('css-mqpacker'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('postcss-nesting'),
                require('postcss-cssnext')({
                  browsers: ['last 3 versions', '> 5%', 'iOS >= 8'],
                  features: {
                    customProperties: {
                      preserve: true,
                    },
                    overflowWrap: {
                      method: 'copy',
                    },
                    nesting: false,
                  },
                }),
                require('css-mqpacker'),
              ],
            },
          },
        ],
      },
    ],
  },
};
