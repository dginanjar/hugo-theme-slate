# hugo-theme-slate
Theme for Hugo


## Install

Head to your Hugo project folder, git init and add this theme as submodule.

```
$ cd /path/to/[HUGO PROJECT]
$ git init .
$ git submodule add https://github.com/dginanjar/hugo-theme-slate.git themes/slate
```

Open `config.toml` and set skeleton as your theme.

```
theme = 'slate'
```

For Docker users, you have to identify Vite Server's IP and tell Hugo.

```
[params]
  vite = 'http://172.17.0.2'
```

## Sample Content

There is a `sample-content` folder. All pictures taken from [Lorem Picsum](https://picsum.photos/)

## Development

Open terminal then run Hugo Server.

```
$ hugo server
```

Open another terminal, head to theme folder and run Vite Server.

```
$ cd themes/slate
$ npm install
$ npm run dev
```

Enjoy!

