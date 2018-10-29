# Блог 1 Анонимный блог 

## Общие сведения

Мы собираемся написать простую домашнюю страницу с блогом.  Это будет наша первая связь «многие-ко-многим» в контексте программы Sinatra.  Позже мы 
включим аутентификацию пользователя.

Выполните сначала задачу [Sinatra sandbox challenge][sandbox challenge], если вам не нравится движение потока веб-приложения или способы отправки данных на 
сервер.

У нас будут две основные модели: `Entry`s (записи) и `Tag`s (теги). В `Entry` может быть много` тегов` и `Tag` могут быть на многих` Entry`.

## Releases

 ### Release 0: Контроллеры & amp; Маршруты обработки запроса

Подумайте о ваших контроллерах и маршрутах.  Проанализируйте создание трех файлов контроллера:

1.
2.
3.

Контроллер `index` будет иметь только указательный маршрут, отображающий вашу домашнюю страницу.  Все пути, связанные с `Entry`, будут поступать в контроллер `entries`, а все `Tag`-связанные маршруты будут поступать в контроллер` tags`.

Вот такие функции (примерно эквивалентные маршрутам, которые вам понадобятся) должно предлагать ваше приложение:

1. Показать все записи
2. Показать определенную запись (по id)
3. Создать новую запись 
4. Редактировать существующую запись 
5. Удалить существующую запись 
6. Показать все записи с заданным тегом. (как будет выглядеть этот URL-адрес, какой контроллер будет включать этот маршрут?)

 Теги создаются с помощью формы создания `Entry`.

### Release 1: Модели &amp; Валидации 

Создайте все необходимые модели и миграции для поддержки вышеизложенного. У вас должно быть три модели &mdash, что они собой представляют?


Добавьте соответствующие валидации в свои модели. Воспользуйтесь [Rails guide to
ActiveRecord validations][AR validations] (Руководство по Rails для проверки ActiveRecord и валидации AR) в качестве справочной информации.

Например, если в вашей модели `Entry` есть поля `body` и `title`, вы, вероятно, не хотите разрешать сохранение `Entry`, у которой нет полей `body` и `title`, в базе данных. Это означает добавление ограничений `NOT NULL` для миграций и последующих валидаций в вашу модель ActiveRecord:

```
```

У вас, безусловно, будут другие поля и валидации. Какие поля вы хотите, чтобы были у вашей записи в блоге? Автор?

### Release 2: Разработка простых страниц и форм

Создавайте простые страницы и формы для реализации всех вышеперечисленных функций. Необязательно, чтобы оформление было вычурным, но если ваш HTML хорошо структурирован, это упростит оформление стиля позже.

Ваши формы для создания и обновления моделей `Entry` должны позволять вам вводить теги. Вы можете решить, как это работает, хотя с точки зрения пользователя было бы невероятно утомительно создавать теги в другом месте для того, чтобы автор статьи мог их использовать. Однако, если автор записи использует уже существующий тег, вы не захотите создавать новую строку в таблице `tags`, а скорее используете уже существующий тег еще раз.

Одна из идей может заключаться в том, чтобы разрешить им вводить теги следующим образом:

```
```

что создается как:

<>

Все ваши маршруты должны теперь реализовать свои основные функции. Вы должны иметь возможность создавать списковую структуру, показывать, создавать, обновлять и удалять записи. Вы также должны иметь возможность видеть все записи для данного тега по URL-адресу, например

```
```

### Release 3: Случаи ошибки

Используя методы [valid? and invalid?][valid_invalid] и [errors] [errors], убедитесь, что вы корректно обрабатываете свои случаи ошибки. Обработка не обязательно должна быть идеальной, но хорошая обработка случая ошибки означает следующее: 

1. Когда пользователь совершает ошибку или нарушает какое-то правило, об этом приходит сообщение.
2. Пользователю предоставляется возможность исправить ошибку, если это возможно.
3. Пользователю дается максимально возможное руководство по поводу того, что ему/ей необходимо сделать, чтобы исправить ошибку.

### Release 4: Стиль!  Стиль!  Стиль!

Возможно, сначала вы захотите выполнить задачу форматирования [Layout Drill: Proper Typesetting][proper formatting challenge], если вы этого еще не сделали. Но, следуя рекомендациям этой задачи, создайте свой дизайн блога.

Создайте его таким, чтобы вы гордились тем, как выглядит ваш блог.




_________________________________________________________________________________________________________________________



# Blog 1 Anonymous Blog

## Summary

We're going to write a simple homepage with a blog.  This will be our first
many-to-many relationship inside the context of Sinatra.  Later, we'll
integrate user authentication.

Do the [Sinatra sandbox challenge][sandbox challenge] first if you don't feel
comfortable with the flow of a web application or how forms send data to the
server.

We'll have two core models: `Entry`s and `Tag`s.  A `Entry` can have many `Tag`s
and a `Tag` can be on many `Entry`s.

## Releases

### Release 0: Controllers &amp; Routes

Think about your controllers and routes.  Consider making three controller files:

1. `app/controllers/index.rb`
2. `app/controllers/entries.rb`
3. `app/controllers/tags.rb`

The `index` controller will just have the index route, displaying your
homepage.  All `Entry`-related routes will go in the `entries` controller and all
`Tag`-related routes will go in the `tags` controller.

These are features (roughly equivalent to the routes you'll need) your app should offer:

1. Show all entries
2. Show a particular entry (by id)
3. Create a new entry
4. Edit an existing entry
5. Delete an existing entry
6. Show all entries with a given tag. (what will this URL look like? which controller will include this route?)

Tags will be created via the `Entry`-creation form.

### Release 1: Models &amp; Validations

Create all the necessary models and migrations to support the above.  You
should have three models &mdash; what are they?

Add the appropriate validations to your models.  Read the [Rails guide to
ActiveRecord validations][AR validations] for reference.

For example, if your `Entry` model has `body` and `title` fields, you probably
don't want to permit a `Entry` that has no `body` or `title` to be saved to the
database.  This means adding `NOT NULL` constraints to the migrations and the
following validations to your ActiveRecord model:

```ruby
class Entry < ActiveRecord::Base
  validates :body, :presence => true
  validates :title, :presence => true
end
```

You'll have other fields and validations, to be sure.  What fields do you want your blog entry to have?  Author?

### Release 2: Design Simple Pages and Forms

Design simple pages and forms to implement all the above functionality.  It
doesn't need to be styled well, but if your HTML is well-structured it will
make it easier to style later.

Your forms for creating and updating `Entry` models should allow you to enter
tags.  You can decide how that works, although from a user experience
perspective it would be incredibly tedious to have to create tags elsewhere
before an entry author can use them.  However, if an entry author uses a tag that
already exists, you aren't going to want to create a new row in the `tags`
table, but rather re-use the already-existing tag.

One idea might be to permit them to enter tags like this:

```html
<label for="entry_tags">Tags:</label>
<input id="entry_tags" name="entry[tags]" value="tag1, tag2, some other tag, a fourth tag">
```

which renders as:

<label for="entry_tags">Tags:</label>
<input id="entry_tags" name="entry[tags]" value="tag1, tag2, some other tag, a fourth tag" class="span4">

All your routes should now implement their basic functionality.  You should be
able to list, show, create, update, and delete entries.  You should also be able
to see all entries for a given tag at a url like

```text
http://localhost:9393/tags/apple
```

### Release 3: Error Cases

Using [valid? and invalid?][valid_invalid] and the [errors][errors] methods,
make sure you're handling your error cases gracefully.  It doesn't need to be
perfect, but good error handling means:

1. When a user makes a mistake or breaks some rule, they're informed.
2. The user is presented with an opportunity to correct the mistake, if possible.
3. The user is given as much guidance as possible about what they need to do to fix the error.

### Release 4: Style!  Style!  Style!

You might want to do the [Layout Drill: Proper Typesetting][proper formatting challenge]
first, if you haven't.  But following the guidelines from that
challenge, spruce up your blog design.

Make it something you're proud to look at.

## Resources

* [DBC Sandbox Challenge][sandbox challenge]
* [DBC Proper Typesetting Challenge][proper formatting challenge]
* [Active Record validations][AR validations]
* [Active Record valid? and invalid?][valid_invalid]
* [Active Record errors][errors]


[sandbox challenge]: ../../../sinatra-sandbox-challenge
[proper formatting challenge]: ../../../layout-drill-proper-typesetting-challenge
[AR validations]: http://guides.rubyonrails.org/active_record_callbacks.html
[valid_invalid]: http://guides.rubyonrails.org/active_record_validations.html#valid-questionmark-and-invalid-questionmark
[errors]: http://guides.rubyonrails.org/active_record_validations.html#working-with-validation-errors
