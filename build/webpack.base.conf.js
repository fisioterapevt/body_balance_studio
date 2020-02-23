const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`); // require - запрос к json файлу
const ImageminPlugin = require(`imagemin-webpack`);

const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);

const PATHS = {
  src: path.join(__dirname, `../src`),
  dist: path.join(__dirname, `../dist`), //можно переименовывать папку
  assets: `assets/` //можно переименовывать папку
}

module.exports = {

  performance: { // снимает ограничение на размер бандла
    hints: false
  },

  externals: {
    paths: PATHS
  },

  entry: {
    app: PATHS.src // при смене app на другое имя соответственно меняется и название файлов app.min.js и app.min.css
  },

  output: {
    filename: `${PATHS.assets}js/[name].min.js`,
    path: PATHS.dist,
    publicPath: `/`

  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: `/node_modules/`
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
         ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`
              }
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].min.css`
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
      inject: true
    }),

    new CopyWebpackPlugin([ // копирует все файлы из папок
      {
        from: `${PATHS.src}/${PATHS.assets}img/jpg/*.jpg`,
        to: `${PATHS.assets}img/jpg`
      },
      {
        from: `${PATHS.src}/${PATHS.assets}img/png/*.png`,
        to: `${PATHS.assets}img/png`
      },
      {
        from: `${PATHS.src}/${PATHS.assets}img/svg/*.svg`,
        to: `${PATHS.assets}img/svg`
      },
      {
        from: `${PATHS.src}/${PATHS.assets}fonts`,
        to: `${PATHS.assets}fonts`
      },
      {
        from: `${PATHS.src}/${PATHS.assets}css`,
        to: `${PATHS.assets}css`
      },
      {
        from: `${PATHS.src}/php`,
        to: ''
      },
      {
        from: `${PATHS.src}/static`,
        to: ''// копирует в корень
      }
    ]),
    new ImageminPlugin({ // обработка изображений
      bail: false, // игнорирует ошибки на поврежденных изображениях
      cash: true,
      name: `${PATHS.assets}img/[folder]/[name].[ext]`,
      imageminOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["mozjpeg", { quality: 70 }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {removeHiddenElems: false},
                {cleanupIDs: false}
                // {removeDoctype: false},
                // {removeComments: false},
                // {removeTitle: false}, // works
                // {convertTransform: false},
                // {removeXMLProcInst: false},
                // {cleanupAttrs: false},
                // {removeEmptyAttrs: false},
                // {removeEmptyContainers: false},
                // {removeUnknownsAndDefaults: false},
              ]
            }
          ]
        ]
      }
    }),
    new CleanWebpackPlugin(), // удаляет папку dist
  ],
};