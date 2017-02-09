import './scss/main.scss';

if (process.env.NODE_ENV === 'production') {
  console.log('hello from production');
} else {
  console.log('hello from dev');
  if (module.hot) {
    module.hot.accept();
  }
}
