# Holiday team1


## [EN](#Workflow) [RU](#Рабочий)

## **Workflow** 

## *PR#1 28/10/21 Evironment and template setup / Alex Kurkov*
Whats's new:
1. Bootstrapped with CRA typescript template
2. Extended eslint with 'airbnb' presets and add new scripts to package.json:
```
npm run lint // lint all js/ts files

npm run lint-fix // lint and auto-fix(if possible) all js/ts files
```
2. Removed template files
3. Add example RTK slice 'user' with 2 actions, created redux-store and add it to project  
4. created `types.ts` file in /src/utils for project TS interfaces & types
5. Add simple routing (created HomePage & NotFoundPage as templates)
6. Now modules can be imported by absolute paths from root `/src`
7. Created HOC (HigherOrderComponent) for futer protected by auth routes

## *PR#2 29/10/21 Create user roles / Alex Kurkov*
Whats's new:
1. created Roles constants with permissions sets in `src/utils/constants.ts`
2. users permission can be checked with helper exported from `src/utils/common.ts`:
```
hasPermission(user: { role: string, ...user }, permission: string) :boolean 
```

## *PR#5 02/11/21 add Storybook / Alex Kurkov*
Whats's new:
1. add sb to projects packages
2. created template *Action button* component with decorated and argumented stories
open storybook in dev-mode by running script  
```
npm run storybook
```
## *PR#8 04/11/21 UsersPage layout / Alex Kurkov*
Whats's new:
1. created UsersPage layout with ant-design <Table> component. [Read UI-kit docs referring to Table here](https://ant.design/components/table/)
2. The data used is at the moment the mock-data from `src/utils/mocks/mock-user-page-table-data.tsx`
3. The page is available at '/users' route

## **Рабочий процесс**

## *PR#1 28/10/21 Начальное разворачивание проекта / Alex Kurkov*
1. проект на React+Redux(RTK)+TS, структура стандартная для такого типа приложений
- весь компилируемый код в /src
- В директории /src/components - компоненты.
- Каждый компонент/страницу оформляем отдельной папкой с отдельным файлом для стилей(если они нужны)
- В /src/pages - страницы (пока есть заготовки под home и 404)
- В /src/services логика работы с Redux-стором, оформленная в соответсвии с адд-оном ReduxToolKit - Люда скидывала ссылку на либу в общем чате
- В /src/utils хелперы, константы, общие типы и интерфейсы TS
- В самой /src необходимые файлы для инициализации стора, index.tsc и т.п.
2. Стор создан и подключен, есть один Redux-слайс User c двумя экшенами (создан в качестве образца для тех, кто не знаком с Redux и RTK)
3. Настроены правила линтинга по пресету airbnb. В package.json отключены три правила линтинга и добавлено два скрипта
```
npm run lint // lint all js/ts files
npm run lint-fix // lint and auto-fix(if possible) all js/ts files 
```
4. Добавлен простой роутинг-заготовка
5. В utils/css-constants.tsx находятся css-константы для переиспользования в styled-components
6. В utils/types.ts  находятся общие типы и интерфейсы TS
7. Импортировать модули можно указывая абсолютный путь от src, например:
```
import { NotFoundPage, HomePage } from 'pages';
import { IUser } from 'utils/types';
```
NB! абсолютные пути работают только для файлов с расширениями .ts .tsx
8. В директориях components и pages есть index.tsx файлы, вся задача которых - реэкспортировать модули для более лаконичной записи импортов в других модулях.