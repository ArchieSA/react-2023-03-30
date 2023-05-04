# react-2023-03-30

# ДЗ

## Как делать

0. Сделать форк этого репозитория в свой аккаунт (только 1 раз в самом начале).

1. Перед выполнением ДЗ сделайте пул мастера этого репозитория себе в форк (чтобы иметь актуальный код);
2. Обновить зависимости `yarn` или `npm i`;
3. Создайте новую ветку от актуального мастера для выполнения ДЗ;
4. Выполните ДЗ в этой ветке;
5. Сделайте Pull Request этой ветки в мастер моего репозитория;
6. Напишите мне в личные сообщения дискорда ссылку на PR.

**Важно! В результате всех этих манипуляций в вашем мастере должны быть только мои комиты, все ваши комиты должны быть в отдельных ветках под каждую домашку.**

Дедлайн – 23:00 по GMT+3 за день до занятия.


## HW1
1. Необходимо отрисовать блюда из меню и отзывы.
2. Реализуем следующие компоненты:
    1. Menu - принимает массив блюд и рисует их список;
    2. Dish - принимает блюда и рисует информацию о нем;
    3. Reviews - принимает массив отзывов и рисует их список;
    4. Review - принимает отзыв и рисует информацию о нем;


            ==> Menu => Dish, Dish, Dish
Restaurant 
            ==> Reviews => Review, Review, Review

## HW2

1. Создать компонент Рейтинг;
2. Принимать он будет максимальный рейтинг(maxRating) и текущий рейтинг(value);
3. Отображает кол-во звезд соответствующие максимальному рейтингу, золотыми отображает текущий рейтинг;
4. Используем в комопненте Review для отображения рейтинга отзыва.

## HW3

1. Добавить в блюдо локальное состояние и хранить там информацию о кол-ве блюда в заказе. При клике на +/- изменяем. Минимальное значение 0, максимальное 5;
2. Доработать компонент Rating таким образом, чтобы его можно было использовать как инпут рейтинга. Пример использования уже есть в компоненте NewReviewForm. При клике на звездочку вызываем коллбек, который передан в onChange и передаем в этот коллбек значение рейтинга. Если функцию в onChange не передали, то просто отображаем value и при клике на звезды ничего не должно происходить.

## HW4

1. Вынести логику выбора текущего ресторана из Home в отдельный кастомный хук.

## HW5

1. Реализовать модули Review, User по аналогии с Restaurant, Dish;
2. По аналогии с Menu отобразить Reviews;
3. В Review отобразите пользователя(нужно сделать компонент и контейнер для него). UserContainer должен принимать userId, который есть в отзыве;
4. Реализовать контейнер для корзины(Cart).

## HW6

1. Перевести все оставшиеся модули на слайсы.
2. Загружать данные о отзывах и пользователях с сервера(используем thunk как в блюдах и ресторанах).

## HW7

1. Переписываем оставшиеся thunk на asyncThunk. В остальные entities добавляем entityAdapter.

