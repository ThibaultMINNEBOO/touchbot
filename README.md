# TouchBot - Discord Multipurpose bot

This is the source code of `TouchBot`, a Discord bot which is destinated for users and servers.

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)

## Prerequisites

* [NodeJS](https://nodejs.org/en/download/) - JavaScript runtime
* [Yarn](https://yarnpkg.com/) - Package manager for JavaScript
* [Docker](https://docs.docker.com/get-docker/) - Containerization platform

## Installation

1. Clone the repository

```shell
git clone https://github.com/ThibaultMINNEBOO/touchbot.git
cd touchbot/
```

2. Install dependencies

```shell
yarn install
```

3. Configure your environment variables into `.env` file

4. Apply migrations from Prisma

```shell
npx prisma generate
npx prisma migrate dev
```

3. Usage

This project will evolve in the future. You can participate by sending issues and pull requests.

4. Licence

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details