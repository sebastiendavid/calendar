import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import pkg from './package.json';
import webpack from 'webpack';

const prod = process.env.NODE_ENV === 'production';
const dev = !prod;
const versions = Object.assign({}, pkg.devDependencies, pkg.dependencies);

Object.keys(versions).forEach((key) => {
  versions[key] = versions[key].replace('^', '').replace('~', '');
});

module.exports = {
  entry: ['./src/dev.js', './src/index.js'].filter((p) => dev || p.indexOf('dev') === -1),
  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      calendar: path.resolve('./src')
    }
  },
  externals: prod ? {
    moment: 'moment',
    immutable: 'Immutable',
    react: 'React',
    'react-dom': 'ReactDOM'
  } : null,
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /(node_modules|target)/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|build)/,
        loader: 'babel',
        query: pkg.babel
      }
    ]
  },
  postcss: () => [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${prod ? 'production' : 'development'}"`
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      filename: 'index.html',
      title: 'Calendar',
      favicon: 'src/assets/favicon.png',
      hash: prod,
      chunksSortMode: 'none',
      vendors: [
        `//cdnjs.cloudflare.com/ajax/libs/moment.js/${versions.moment}/moment-with-locales.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/react/${versions.react}/react.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/react/${versions['react-dom']}/react-dom.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/redux/${versions.redux}/redux.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/react-redux/${versions['react-redux']}/react-redux.min.js`,
        `//cdnjs.cloudflare.com/ajax/libs/immutable/${versions.immutable}/immutable.min.js`
      ].filter(() => prod).map((url) => `<script src="${url}"></script>`).join('\n  '),
      devTools: dev ? '<div id="$$DevTools"></div>' : '',
      minify: prod ? {
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeCDATASectionsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseInlineTagWhitespace: true,
        preserveLineBreaks: false,
        collapseBooleanAttributes: true,
        removeTagWhitespace: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        preventAttributesEscaping: false,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true,
        removeEmptyElements: false
      } : false
    })
  ].concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: { except: [] }
    })
  ].filter(() => prod))
};
