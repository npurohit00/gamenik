---
title: Basic Cameras
layout: tutorial-page.hbs
position: 3
tags: camera
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg
---

## Сущности камеры

Для просмотра сцены, созданной Вами в приложении PlayCanvas используется объект камеры для отображения на экран.

Для того, чтобы запустить Вашу сцену из редактора PlayCanvas Вы должны добавить как минимум одну активную камеру на сцену.

## Создание субъекта камеры

Чтобы создать новую камеру Вы должны добавить [компонент][1] камеры к объекту.

* Выберите корневой объект Вашей сцены в проводнике сущностей
* Создайте новую сущность выбирая *New Entity* из меню *Entity*
* Добавьте компонент выбирая  *New Component* из меню *Component*
* Выберите *Camera* когда Вам будет предложено выбрать, какой тип компонента создать

Как сделать камеру в общем случае: в выпадающем меню выберите *New Entity* -> *New Camera*.
Это эквивалентно созданию новой сущности и добавления компонента камеры к ней.

## Свойства камеры

Как и все компоненты, компонент камеры имеет набор свойств, которые изменяют её поведение.

### `Enabled` (Включено)

Если свойство активировано, то камера будет отрисовывать сцену в свой буфер рендеринга при загрузке сцены. Несколько камер может быть активировано одновременно. Это может быть полезно в ситуациях, когда Вы захотите реализовать режим разделённого экрана или отобразить мини-карту, например. Свойство 'priority ' (приоритет) определяет порядок, в котором активные камеры отображаются.

### `Clear Color Buffer` (очистка буфера цветом)

Если это свойство включено, перед отображением сцены камера будет очищать всё что было в её буфере кадров (а именно предыдущий отрисованный кадр) и заливать всё чистым цветом.

### `Clear Color` (цвет очистки)

Цвет которым будет стираться предыдущий кадр из буфера, если опция 'Clear Color Buffer' активирована.

### `Clear Depth Buffer` (очищать буфер глубины)

Если это свойство включено, перед отображением сцены камера будет очищать всё, что до этого хранилось в буфере глубины. Обычно, эта опция оставляется включённой, но в некоторых случаях, когда Вы не беспокоитесь о порядке глубины при рендеринге сцены, это может дать оптимизацию при отключении. 

### `Projection` (проекция)

Тип проекции определяет, какой тип матрицы проекции будет использоваться для конвертирования 3D сцены в 2D вид кадра страницы.

Перспективная  **perspective** проекция - основной тип для игр. Альтернативно, Вы можете использовать **orthographic** (ортографическую) проекцию, которая отображает сцену без перспективы, что полезно для 2D игр.

### `Field of View` (поле зрения)

Поле зрения камеры определяет, насколько камера может охватить сцену. Измеряется это значение в градусах (&deg;), по умолчанию - 45&deg;. Это значит, что от верхнего до нижнего края вид формируется по дуге 45&deg; от текущей позиции камеры.

![Поле зрения][2]

На рисунке Вы видите, что значение `fov` не зависит от ширины экрана, вид широкого экрана (светло-голубой) имеет то же вертикальное значение, но большее по горизонтали, чем узкий экран (тёмно-голубой).

### `Near Clip` (отсечение вблизи)

Отсечение вблизи - расстояние в метрах от камеры, ближе которого ничего не будет отрисовано.

### `Far Clip` (отсечение вдаль)

Отсечение вдаль - дистанция в метрах, после которого камера не будет ничего отрисовывать.

### `Priority` (приоритет)

Это значение определяет порядок, в котором камера будет отрисована, если активировано несколько камер. Чем меньше цифра, тем выше приоритет и тем раньше будет отображена камера.

### `Viewport` (порт вида)

Порт вида представляет собой прямоугольную область буфера камеры. Есть 4 значения в следующем формате: Bottom Left X, Bottom Left Y, Width, Height. Эти значения - нормализованные координаты, где буфер отображения, независимо от значений считается для координат X и Y в диапазоне 0..1. Таким образом, чтобы ограничить рендеринг камеры снизу левым квадрантом, установите значения 'viewport' в 0, 0, 0.5, 0.5.

[1]: /user-manual/glossary#component
[2]: /images/platform/field_of_view.png

