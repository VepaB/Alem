const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // Используйте 'production' для финальной сборки
  entry: {
    main: './js/main.js',
    about: './js/about.js',
    contact: './js/contact.js',
    login: './js/login.js',
    order: './js/order.js',
    profile: './js/profile.js',
    header: './js/header.js', // Общий скрипт для хедера
    slider: './js/slider.js', // Скрипт для слайдера
  },
  output: {
    filename: '[name].bundle.js', // Генерирует JS файлы с именами точек входа
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищает папку dist перед каждой сборкой
  },
  devServer: {
    static: './dist', // Указывает папку для статики
    hot: true, // Включает горячую перезагрузку
    open: true, // Автоматически открывает браузер
    historyApiFallback: {
      rewrites: [
        { from: /^\/main.html$/, to: '/main.html' },
        { from: /^\/$/, to: '/main.html' },
        { from: /^\/pages\/order.html$/, to: '/pages/order.html' },
        { from: /^\/pages\/about.html$/, to: '/pages/about.html' },
        { from: /^\/pages\/contact.html$/, to: '/pages/contact.html' },
        // Страницы услуг (services)
        { from: /^\/pages\/services\/3d-lak.html$/, to: '/pages/services/3d-lak.html' },
        { from: /^\/pages\/services\/akril.html$/, to: '/pages/services/akril.html' },
        { from: /^\/pages\/services\/bumaga.html$/, to: '/pages/services/bumaga.html' },
        { from: /^\/pages\/services\/futbolka.html$/, to: '/pages/services/futbolka.html' },
        { from: /^\/pages\/services\/holst.html$/, to: '/pages/services/holst.html' },
        { from: /^\/pages\/services\/korpmerch.html$/, to: '/pages/services/korpmerch.html' },
        { from: /^\/pages\/services\/lazer.html$/, to: '/pages/services/lazer.html' },
        { from: /^\/pages\/services\/marketplace.html$/, to: '/pages/services/marketplace.html' },
        { from: /^\/pages\/services\/multilist.html$/, to: '/pages/services/multilist.html' },
        { from: /^\/pages\/services\/nakleiki.html$/, to: '/pages/services/nakleiki.html' },
        { from: /^\/pages\/services\/ofset.html$/, to: '/pages/services/ofset.html' },
        { from: /^\/pages\/services\/onelist.html$/, to: '/pages/services/onelist.html' },
        { from: /^\/pages\/services\/paket.html$/, to: '/pages/services/paket.html' },
        { from: /^\/pages\/services\/rollup.html$/, to: '/pages/services/rollup.html' },
        { from: /^\/pages\/services\/shiroko.html$/, to: '/pages/services/shiroko.html' },
        { from: /^\/pages\/services\/suwinir.html$/, to: '/pages/services/suwinir.html' },
        { from: /^\/pages\/services\/vizitki.html$/, to: '/pages/services/vizitki.html' },
        { from: /^\/pages\/services\/wystowka.html$/, to: '/pages/services/wystowka.html' },
      ],
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Для обработки CSS файлов
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i, // Для обработки изображений
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // Главные страницы
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: './main.html', // Главная страница
      chunks: ['main', 'header', 'slider'], // Связывает с main.js и header.js
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/about.html',
      template: './pages/about.html',
      chunks: ['about', 'header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/contact.html',
      template: './pages/contact.html',
      chunks: ['contact', 'header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/login.html',
      template: './pages/login.html',
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/order.html',
      template: './pages/order.html',
      chunks: ['order', 'header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/profile.html',
      template: './pages/profile.html',
      chunks: ['profile', 'header'],
    }),
    // Страницы из папки services
    new HtmlWebpackPlugin({
      filename: 'pages/services/3d-lak.html',
      template: './pages/services/3d-lak.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/akril.html',
      template: './pages/services/akril.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/bumaga.html',
      template: './pages/services/bumaga.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/futbolka.html',
      template: './pages/services/futbolka.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/holst.html',
      template: './pages/services/holst.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/korpmerch.html',
      template: './pages/services/korpmerch.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/lazer.html',
      template: './pages/services/lazer.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/marketplace.html',
      template: './pages/services/marketplace.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/multilist.html',
      template: './pages/services/multilist.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/nakleiki.html',
      template: './pages/services/nakleiki.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/ofset.html',
      template: './pages/services/ofset.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/onelist.html',
      template: './pages/services/onelist.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/paket.html',
      template: './pages/services/paket.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/rollup.html',
      template: './pages/services/rollup.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/shiroko.html',
      template: './pages/services/shiroko.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/suwinir.html',
      template: './pages/services/suwinir.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/vizitki.html',
      template: './pages/services/vizitki.html',
      chunks: ['header'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/services/wystowka.html',
      template: './pages/services/wystowka.html',
      chunks: ['header'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Создаёт отдельный CSS файл для каждой страницы
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'css', to: 'css' }, // Копирует всю папку css в dist/css
        { from: 'assets/images', to: 'assets/images' }, // Копирует всю папку assets/images в dist/images
      ],
    }),
  ],
};