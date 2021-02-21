### Instalação

1 - Clone o projeto

```
git clone <project_url>
```

2 - Entre na pasta do projeto

```
cd <project_folder>
```

3 - Instale as bibliotecas do projeto

```
npm install
```

4 - Instale as dependência do IOS

*certifique-se de está com a versão 1.10.0 do pod instalado na máquina*

```
cd ios && pod install

ou

./resetLibs.sh
```

## Rodar o Projeto

Na raiz do projeto

#### IOS

```
DEV
npm run ios

HMG
npm run ios:hmg

PROD
npm run ios:prod

```

#### Android

```

DEVEL
npm run android

HMG
npm run android:hmg

PROD
npm run android:prod
```

## Gerar o bundle React-Native

#### IOS

```
DEV
npm run bundle:ios

HMG
npm run bundle:ios:hmg

PROD
npm run bundle:ios:prod

```

#### Android

```

DEVEL
npm run bundle:android

HMG
npm run bundle:android:hmg

PROD
npm run bundle:android:prod
```

## Gerar APK (Android)

```
cd android
./gradlew clean
./gradlew assembleRelease
```

*O APK vai está na pasta `android/app/build/outputs/apk/release/app-release.apk`*

## Variáveis de ambiente

Acesse a pasta envs na raiz do projeto e altere os arquivos `.json`

## Escolhas feitas dentro do projeto

 - react-navigation
    - Lib usada para a navegação do projeto
 
 - axios
    - Lib para ser feita as requisições na api
    
 - react-native-modalize
    - Lib para criar a modal
    
 - react-native-portalize
    - Lib para renderizar qualquer coisa em cima do resto, usada para mostrar a modal em cima de tudo
    
 - react-native-vector-icons
    - Lib de icones
    
 - styled-components
    - Lib usada para estilizar os componentes do app

## Teste

Para executar os testes rode
```
npm run test
```

Foram testados dois componentes do App

Obs: Estou estudando testes E2E em react-native, esses foram os meus primeiros testes
