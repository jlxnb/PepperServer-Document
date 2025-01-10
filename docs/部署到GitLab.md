---
sidebar_position: 3
---

在gitlab那边导入这个仓库,或者你把这个仓库下载下来,传gitlab上

.gitlab-ci.yml 驿站帮你写好了awa

然后把 docusaurus.config.js 里的东西改下

:::tip

在GitLab那一侧的仓库改

:::

找到这一段

```
  title: 'Wiki-Template',
  tagline: 'Docusaurus 插件文档模板',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://postyizhan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Wiki-Template/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'postyizhan', // Usually your GitHub org/user name.
  projectName: 'Wiki-Template', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
};
```

postyizhan 改成你自己的 `username/groupname`

`github.io` 改成 `gitlab.io`

`Wiki-Template` 改成 `username/groupname`

`baseUrl` 改成 `/`

`projectName` 改成 `username/groupname` 而不是 你这个文档仓库的名字

``

比如我的是改成这样

```
  title: 'Wiki-Template',
  tagline: 'Docusaurus 插件文档模板',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yizhan.gitlab.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'postyizhan', // Usually your GitHub org/user name.
  projectName: 'yizhan', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
```
