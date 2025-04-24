# Personal Academic Website

A modern, dark-mode compatible personal website built with Jekyll and the Minimal Mistakes theme, featuring a neon theme option and smooth transitions.

## Features

- Dark mode with neon theme option
- Smooth page transitions
- Responsive design
- Modern UI with customizable sections
- Easy to maintain and update

## Setup

1. Install Ruby and Jekyll:
   ```bash
   gem install bundler jekyll
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Customization

1. Update `_config.yml` with your personal information
2. Add your content to the `_pages` directory
3. Customize the neon theme colors in `_assets/css/main.scss`
4. Add your images to `_assets/images`

## Pages

- Home
- Research
- CV
- Publications
- Teaching
- AI Projects

## Theme Toggle

The website includes a theme toggle button in the top-right corner that switches between the default Minimal Mistakes theme and the custom neon theme. The theme preference is saved in the browser's local storage.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 