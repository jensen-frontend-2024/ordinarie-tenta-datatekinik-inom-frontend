# Frågor till den skriftliga examen.

Tentamen innehåller 38 frågor varav 37 är på G-nivå och 1 är på VG-nivå.

G-frågorna varierar mellan svarsalternativsfrågor och textfrågor där eleverna själva får skriva in svaren. En del svar kan innehålla kod och då får de skriva in det så gott de kan och så tydligt som de kan.

G-delen kan maximalt ge 78 poäng, godkänt bör då vara 60% av 78 poäng. Alltså 47 poäng avrundat.

VG-delen innehåller bara en fråga och kan maximalt ge <antal> poäng varav <antal>avklarade poäng är nivån för VG. Anledningen varför VG-delen endast är en fråga är för att enligt kursplanen så omfattar VG-kravet endast detta:

```
För att få betyget Väl Godkänt (VG) ska den studerande ha genomfört kursen och nått alla
kursmål. Den studerande ska dessutom med säkerhet kunna
• Använda JavaScript och Node.js, eller motsvarande, för att utveckla
program/applikationer/webbplatser som använder en databas
```

<details>
<summary>Innehåll</summary>

- [G-Nivå](#g-nivå)

  - [Kravspec #1](#kravspec-1) - _Förståelse för principerna bakom normalisering av relationsdatabaser._

  - [Kravspec #2](#kravspec-2) - _Kännedom om och förmåga att skapa samt tolka Entity Relationship Diagrams (ERD)._

  - [Kravspec #3](#kravspec-3) - _Förståelse för principerna bakom normalisering av relationsdatabaser._

  - [Kravspec #4](#kravspec-4) - _Kunskap i att använda grundläggande SQL-kommandon för CRUD-operationer (Create, Read, Update, Delete)._

  - [Kravspec #5](#kravspec-5) - _Kännedom om vanliga säkerhetsrisker i databaser, som t.ex. SQL-injection._

  - [Kravspec #6](#kravspec-6) - _Grundläggande kunskap om dataöverföring över nätverk och användning av HTTP-protokollet._

  - [Kravspec #7](#kravspec-7) - _Kännedom om API:er, inklusive vad de är och hur de används._

  - [Kravspec #8](#kravspec-8) - _Förståelse för REST-arkitekturens principer och dess tillämpningar._

  - [Kravspec #9](#kravspec-9) - _Grundläggande färdigheter i att bygga och säkerställa säker databasinteraktion, inklusive autentisering, lösenordshantering och rollbaserad åtkomst._

  - [Kravspec #10](#kravspec-10) - _Förmåga att bygga API:er med hjälp av Node.js och Express.js._

  - [Kravspec #11](#kravspec-11) - _Kunskap i att använda Postman för att testa och interagera med API:er._

- [VG-Nivå](#vg-nivå)
</details>

## G-Nivå

### Kravspec #1

_Grundläggande förståelse för olika databassystem, inklusive relationsdatabaser (SQL) och dokumentdatabaser (NoSQL)._

---

#### 1. Vad kännetecknar en relationsdatabas?. **_( 3 poäng )_**

   <details>
   <summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att nämna att datan lagras i tabeller med rader och kolumner
- 1p för att nämna att varje rad har en primärnyckel
- 1p för att nämna att tabeller kan relatera till andra tabeller med hjälp av främmande nycklar.
</details>

---

#### 2. Nämn minst två stycken relationsdatabaser. Men lista de du kan för bonuspoäng. **_( 2 poäng + bonuspoäng )_**

   <details>
   <summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att ange minst två stycken relationsdatabaser. SQLite **MÅSTE** vara en av dem.
- 1p för varje par _( per två relationsdatabser )_ av nämnda relationsdatabaser. Tex MySQL, PostgresSQL, SQL Server, MariaDB m.m
</details>

---

#### 3. En icke-relationell databas _( NoSQL )_ lagrar inte datan i form av tabeller. Hur lagrar den datan istället? Det finns flera olika typer av lagring och det skiljer sig åt mellan olika NoSQL-system men det räcker om du redogör för en av dem. **_( 1 poäng )_**

   <details>
   <summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att redogöra för ett lagringsätt. Det behöver inte vara en utförlig redogörelse. Exempel på typer är dokumentdatabs, key-value-databas, grafdatabas eller kolumnbaserat databas.
</details>

---

#### 4. Ange en NoSQL-databas som använder sig av det lagringsättet som du redogjorde för i föregående fråga. **_( 1 poäng )_**

   <details>
   <summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att nämna en databas som använder sig av deras tidigare redogörelse. Exempel: MongoDB för dokumentdatabs och Neo4J för grafdatabas.
</details>

---

#### 5. Redogör för vilka typer av relationer det finns mellan tabeller i en relationsdatabas. **_( 4 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att redogöra för en 1-1-relation.
- 1p för att redogöra för en 1-m-relation.
- 1p för att redogöra för en m-m-relation.
- 1p för att förklara att en m-m-relation brukas _( oftast )_ lagras i en korsdatabas.
</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #2

_Kännedom om och förmåga att skapa samt tolka Entity Relationship Diagrams (ERD)._

---

#### 6. Vad står ERD för? **_( 1 poäng )_**

```sql
( ) Entity Relational Design
( ) Enterprise Resource Diagram
( ) Entity Relationship Diagram
( ) Enhanced Relationship Data
```

  <details>
  <summary>Poängbedömning</summary>
  Poäng tilldelas på följande sätt:

- 1p för rätt svar - Entity Relationship Diagram
</details>

---

#### 7. Kan du redogöra för vad en ERD är för något och varför den används? **_( 1 poäng )_**

  <details>
  <summary>Poängbedömning</summary>
  Poäng tilldelas på följande sätt:

- 1p för en duglig förklaring.
</details>

---

#### 8. Redogör hur ett ERD skulle kunna se ut utifrån denna beskrivning: **_( 3 poäng )_**

```
En bilverkstad vill registrera information om sina mekaniker och sina bilar de jobbar på. Varje mekaniker har ett unikt id, ett namn och en ålder. Varje bil har ett reg-nummer, ett bilmärke och en skadebeskrivning. En mekaniker kan vara registrerad på att jobba på flera bilar, men varje bil kan endast jobbas på utav en mekaniker.
```

  <details>
  <summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att redogöra för två tabeller, en för mekaniker och en för bilar. Rätt värde ska vara i rätt tabell.
- 1p för att redogöra för att reg-nummer bör vara primärnyckel i bil-tabellen.
- 1p för att redogöra för en en-till-många-relation mellan mekaniker och biler.
</details>

---

#### 9. Redogör hur ett ERD skulle kunna se ut utifrån denna beskrivning: **_( 4 poäng )_**

```
En djurpark vill hålla reda på sina djur, deras vårdare, och de inhägnader där djuren vistas. Varje djur har ett unikt djur-ID, art, namn, och födelsedatum. Vårdarna har ett vårdar-ID, namn, telefonnummer och expertisområde. Djuren placeras i olika inhägnader beroende på deras art, och varje inhägnad har ett unikt inhägnads-ID, ett namn, och en placering i parken. En vårdare kan vara ansvarig för flera djur, men ett djur har endast en vårdare. Flera djur kan dela samma inhägnad, och en inhägnad kan ha flera djur av olika arter.
```

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för korrekt beskrivning av entiteter och deras attribut.
- 1p för korrekt relation mellan vårdare och djur.
- 1p för korrekt relation mellan djur och inhängnader och dess korstabell.
- 1p för korrekt beskrivning av alla primärnycklar och den främmande nyckel. Primärnyckeln för djur-vårdare-relationen ska även vara sammansatt.
</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #3

_Förståelse för principerna bakom normalisering av relationsdatabaser._

---

#### 10. Vad betyder normalisering av en databas? **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för en tillfredställande beskrivning. Bör i alla fall innehålla att det används för att minska upprepning och redundans.
</details>

---

#### 11. Förklara vad den första normalformen innebär. 1NF. **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för en tillfredställande beskrivning. Att varje kolumn endast innehåller atomiska värden samt att all värden i den kolumnen är av sammat typ.
</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #4

_Kunskap i att använda grundläggande SQL-kommandon för CRUD-operationer (Create, Read, Update, Delete)._

---

#### 12. Skriv en query för att hämta ut alla kolumner från tabellen "students". **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för en korrekt query:

```sql
SELECT * FROM students
```

</details>

---

#### 13. Skriv en query för att hämta ut id, `first_name`, `last_name` från tabellen `students` för studenten med `id`: 15. **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för en korrekt query:

```sql
SELECT id, first_name, last_name FROM students WHERE id = 15
```

</details>

---

#### 14. Se databasstrukturen nedan. Skriv en query för att plocka ut studenten med förnamn "Niklas" och efternamn "Fähnrich" samt vilken kurs han läser. **_( 2 poäng )_**

```
      ┌──────────────┐                ┌────────────────┐
      │  courses     │<───────────────│   students     │
      │──────────────│                │────────────────│
      │ id (PK)      │ 1           *  │ id (PK)        │
      │ name         │                │ first_name     │
      └──────────────┘                │ last_name      │
                                      │ course_id (FK) │
                                      └────────────────┘
```

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för SELECT-delen är korrekt
- 1p för JOIN-delen är korrekt

```sql
SELECT students.id, students.first_name, students.last_name, courses.name
FROM students
JOIN courses ON students.course_id = courses.id
WHERE students.first_name = 'Niklas' AND students.last_name = 'Fähnrich';
```

</details>

---

#### 15. Vilken av följande queries är korrekt för att hämta användarens `user_id`, `first_name`, `last_name` och `age` från tabellen `users` för användare som är äldre än 18, sorterat efter `last_name` i stigande ordning? **_( 1 poäng )_**

```sql
( ) SELECT user_id, first_name, last_name, age FROM users WHERE age > 18 ORDER BY last_name ASC

( ) SELECT FROM users user_id, first_name, last_name, age WHERE age > 18 ORDER BY last_name ASC

( ) SELECT user_id, first_name, last_name, age FROM users WHERE age >= 18 ORDER BY last_name

( ) SELECT user_id, first_name, last_name, age FROM user WHERE age > 18 ORDER BY last_name ASC

( ) SELECT id_user, first_name, last_name, age FROM users WHERE age > 18 ORDER BY last_name ASC
```

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för korrekt alternativ:

```sql
SELECT user_id, first_name, last_name, age FROM users WHERE age > 18 ORDER BY last_name ASC
```

</details>

---

#### 16. Vilken av följande query är korret för att ta bort användare "Niklas Fähnrich" från users-tabellen? Vi antar att en `user` har kolumnerna `first_name` och `last_name` samt att kombinationen av de är unika. _( 1 poäng )_

```sql
( ) DELETE users WHERE first_name = 'Niklas' AND last_name = 'Fähnrich';

( ) DELETE FROM users WHERE first_name = 'Niklas' AND last_name = 'Fähnrich';

( ) DELETE FROM users WHERE first_name = "Niklas" OR last_name = "Fähnrich";

( ) DELETE FROM users WHERE first_name = 'Niklas' AND last_name = Fähnrich;

( ) DELETE FROM users WHERE first_name = 'Niklas' AND last_name LIKE 'Fähnrich';
```

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för korrekt alternativ:

```sql
DELETE FROM users WHERE first_name = 'Niklas' AND last_name = 'Fähnrich';
```

</details>

---

#### 17. Vilket av följande alternativ förklar denna SQL-query? **_( 1 poäng )_**

```sql
DELETE FROM users
```

```
( ) ...tar bort den sista användaren i tabellen "users".
( ) ...tar bort alla användare från tabellen "users".
( ) ...tar bort den första användaren i tabellen "users".
( ) ...tar bort tabellen "users".
```

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för korrekt alternativ:

```sql
tar bort alla användare från tabellen "users".
```

</details>

---

#### 18. Läs in och begrunda detta er-diagram: **_( 2 poäng )_**

```
+---------------------+
|        Users        |
+---------------------+
| PK id               |
|    first_name       |
|    last_name        |
|    occupation       |
|    age              |
+---------------------+
```

Vilken av dessa queries är den konventionellt korrekta för att uppdatera "occupation" till "developer" och "age" till 32 på användare "Niklas Fähnrich" med id: 37?

```sql
( ) UPDATE users SET age = 32, occupation = 'developer' WHERE first_name = 'Niklas' AND last_name = 'Fähnrich'

( ) UPDATE users WHERE id = 37 SET age = 32, occupation = 'developer'

( ) UPDATE users SET age = 32, occupation = 'developer' WHERE id = 37

( ) UPDATE users SET age = 32, occupation = 'developer' WHERE name = 'Niklas Fähnrich';

( ) UPDATE users SET (age, occupation) VALUES (32, "developer") WHERE id = 37
```

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 2p för det konventionellt korrekta alternativet:

```sql
( ) UPDATE users SET age = 32, occupation = 'developer' WHERE id = 37
```

</details>

---

#### 19. Läs in och begrunda detta ER-diagram: **_( 2 poäng )_**

```
+--------------------+
|       cars         |
+--------------------+
| PK   id            |
|      transmission  |
|      year          |
|      model         |
|      make          |
|      color         |
+--------------------+
```

Skriv en query för att lägga till en rad i tabellen "cars". Alla attributen är obligatoriska men värdena på de olika attributen är valfria.

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 2p för att svaret ser ut något i stil med nedanför.
- Endast 1p om queryn innehåller max 1 slarvfel eller liknande annars 0 poäng.

```sql
INSERT INTO cars (transmisson, year, model, make, color)
VALUES ("auto", 2018, "V70", "Volvo", "Metallic")
```

</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #5

_Kännedom om vanliga säkerhetsrisker i databaser, som t.ex. SQL-injection._

#### 20. Vilken av dessa alternativ beskriver begreppet SQL-Injection:

```
( ) SQL-injektion är en attack där en angripare använder SQL för att skicka stora mängder data till databasen för att överbelasta den.

( ) SQL-injektion innebär att en användare kan skicka automatiska SQL-frågor till databasen för att påskynda databehandling.

( ) SQL-injektion är en säkerhetsbrist där en angripare manipulerar en databasfråga genom att injicera skadlig SQL-kod i användarinmatning, vilket kan leda till obehörig åtkomst eller skada på databasen.

( ) SQL-injektion är en metod där en angripare använder SQL för att läsa och ladda ned databasen utan att använda inloggningsuppgifter.
```

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #6

_Grundläggande kunskap om dataöverföring över nätverk och användning av HTTP-protokollet._

---

#### 21. Vad är HTTP, och vilken roll spelar det i webbapplikationer? Bonuspoäng för att skriva ner vad det faktiskt står för. **_( 2 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att svaret ser ut något i stil med nedanför.
- 1p i bonus för vad det står för.

_HTTP står för HyperText Transfer Protocol och är det protokoll som används för att överföra data mellan en klient (t.ex. en webbläsare) och en server. Det är grunden för kommunikation på webben._

</details>

#### 21. Vad har alla statuskoder som början med en 4:a gemensamt? **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att svaret beskriver client-relaterande fel.

</details>

---

#### 22. Vad har alla statuskoder som början med en 2:a gemensamt? **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att svaret beskriver olika typer av framgångsrika requests.

</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #7

_Kännedom om API:er, inklusive vad de är och hur de används._

---

#### 22. Vad står API för, och vad är syftet med ett API? **_( 2 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för "Application Programming Interface.
- 1p för en tillfredsställande syftesbeskrivning. ChatGPT-genererat nedan:

```
API står för "Application Programming Interface". Ett API är ett sätt för olika mjukvarukomponenter att kommunicera med varandra. Det fungerar som en mellanhand som gör det möjligt för program att anropa funktioner och utbyta data utan att behöva känna till de inre detaljerna av hur den andra tjänsten är implementerad.
```

</details>

---

#### 23. Varför är JSON det vanligaste dataformatet som används i ett API? **_( 2 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för "JavaScript Object Notation".
- 1p för en tillfredsställande syftesbeskrivning. ChatGPT-genererat nedan:

```
JSON (JavaScript Object Notation) är lätt att läsa och skriva för människor, och det är också enkelt för datorer att parsa och generera. Dessutom är JSON ett lättviktsformat som är kompatibelt med de flesta programmeringsspråk, vilket gör det till ett idealiskt format för datautbyte i API
```

</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #8

_Förståelse för REST-arkitekturens principer och dess tillämpningar._

---

#### 24. REST är arkitektur för nätvärkskommunikation som är allmän vedertagen av i pincip alla appliaktioner och API:er idag, men vad står det för? **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för "Representational State Transfer".

</details>

---

#### 25. Det finns fem principer i REST, de är: _Statelessness_, _Client-Server Separation_, _Uniform Interface_, _Layered System_ och _Cacheability_. Beskriv den förstnämnda: _Statelessness_. Bonuspoäng för att beskriva de andra. **_( 6 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 2p för en korrekt beskrivning av Statelessness. Chatgpt-genererad beskrivning nedan.
- 1p för varje korrekt beskrivning av de övriga principerna.

```
Statelessness: varje begäran från klienten till servern ska innehålla all information som behövs för att förstå och bearbeta begäran.
```

</details>

---

#### 26. Det finns fyra huvudsakliga metoder man använder i REST: GET, POST, PUT och DELETE. Vad är skillnaden på en POST och en PUT? **_( 2 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för en beskrivning av båda.
- 1p för beskrivning av skillanden.

</details>

---

#### 27 Genom att använda REST tillsammans med HTTP-protokollet så kan vi få tillgång till olika resurser som API:er tillhandahåller. Men vad är en resurs? **_( 3 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

Se chatgpt-genererat svar nedan.

- 1p för en beskrivning av vad det är.
- 1p för att komma med något exempel.
- 1p för att beskriva att de oftast representeras av JSON eller att de identifieras med en URI.

```
En resurs i REST är en dataentitet eller ett objekt som API
hanterar och gör tillgängligt för klienter, t.ex. en användare eller ett blogginlägg. Resurser representeras vanligtvis i JSON-format (eller ibland XML) och identifieras med en URI (Uniform Resource Identifier).
```

</details>

---

#### 28. En URI _( Uniform Resource Identifier )_ är ett generellt begrepp som används för att identifiera en resurs. Givet ett GET-request till denna URI: `https://api.example.com/users/123`. Förklara vilken resurs vi förväntar oss att få tillbaks. **_( 2 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för att resursen är av typ User.
- 1p för att resursen av typen User har ett specifikt id.

</details>

---

#### 29. Antag att vi har samma URI: `https://api.example.com/users/123`, men den här gången gör vi ett PUT-request med en tillhörande body. Förklar vad vi försöker göra då. **_( 2 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för förklaringen innehåller att vi försöker uppdatera en specifik user med ett id.
- 1p för att förklaringen innehåller något exempel på vad bodyn kan innehålla..

</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #9

_Grundläggande färdigheter i att bygga och säkerställa säker databasinteraktion, inklusive autentisering, lösenordshantering och rollbaserad åtkomst._

---

#### 30. Varför är det viktigt att lagra lösenord på ett säkert sätt i en databas, och vad kan användas för att göra detta säkrare? **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för en tillfredställande förklaring.

Chatgpt-genererad:

```
Det är viktigt eftersom oskyddade lösenord kan stjälas. En teknik för att göra lösenord säkrare är att använda “hashing” så att lösenorden inte lagras i klartext.
```

</details>

---

#### 31. Vad innebär autentisering i samband med databasanvändning? **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för en tillfredställande förklaring.

Chatgpt-genererad:

```
Autentisering innebär att verifiera att en användare är den de utger sig för att vara, ofta genom att använda användarnamn och lösenord.
```

</details>

---

#### 32. Vad betyder rollbaserad åtkomst, och varför är det användbart? **_( 1 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 1p för en tillfredställande förklaring.

Chatgpt-genererad:

```
Rollbaserad åtkomst innebär att användare får tillgång baserat på deras roll (t.ex., användare, admin), vilket kan begränsa vilka delar av en databas de kan se eller ändra. Detta gör systemet säkrare genom att begränsa vad varje användare har rätt att göra.
```

</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #10

_Förmåga att bygga API:er med hjälp av Node.js och Express.js._

---

#### 33. Skriv en enkel route i Express.js som svarar med texten `Hello there!` när en användare gör en GET-förfrågan till `/hello`. Är routen beroende av importer ska givetvis dessa inkluderas också. **_( 2 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 2p för en tillfredställande lösning likt den nedan, minuspoäng för missar eller slarvfel.

```js
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello there!");
});
```

</details>

---

#### 34. Skriv en route i Express.js som tar emot en POST-förfrågan på `/users`, och returnerar ett meddelande som inkluderar användarens namn som skickas i förfrågans body. Är routen beroende av importer ska givetvis dessa inkluderas också. **_( 3 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 3p för en tillfredställande lösning likt den nedan, minuspoäng för missar eller slarvfel.

```js
const express = require("express");
const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { name } = req.body;
  res.send(`Välkommen, ${name}!`);
});
```

</details>

---

#### 35. Skriv en middleware-funktion som loggar detaljer om varje förfrågan (metod och URL) och använd sedan denna i en route som svarar mot en GET-request till `/` _( forward slash / startsidan)_ i en Express.js-applikation. Är routen beroende av importer ska givetvis dessa inkluderas också. **_( 4 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 4p för en tillfredställande lösning likt den nedan, minuspoäng för missar eller slarvfel.

```js
const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Startsida");
});
```

</details>

---

#### 36. Skriv en GET-route för `/data` som returnerar följande JSON-svar: `{ "message": "Hello, JSON!" }` **_( 2 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 2p för en tillfredställande lösning likt den nedan, minuspoäng för missar eller slarvfel.

```js
const express = require("express");
const app = express();

app.get("/data", (req, res) => {
  res.json({ message: "Hello, JSON!" });
});
```

</details>

---

#### 37. Skapa en DELETE-route för `/items/:id` i en Express.js-applikation, som returnerar statuskoden 200 om resursen raderas, och 404 om resursen inte hittas. Det finns en två befintliga metoder som ni kan anropa i er applikation. `checkIfIdExists(id) => boolean` och `deleteItemById(id) => void` **_( 5 poäng )_**

<details>
<summary>Poängbedömning</summary>

Poäng tilldelas på följande sätt:

- 5p för en tillfredställande lösning likt den nedan, minuspoäng för missar eller slarvfel.

```js
const express = require("express");
const app = express();

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;

  const idExists = checkIfIdExists(id);

  if (idExists) {
    deleteItemById(id);
    return res.status(200).send(`Resurs med id ${id} raderad`);
  } else {
    return res.status(404).send("Resurs ej hittad");
  }
});
```

</details>

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

### Kravspec #11

_Kunskap i att använda Postman för att testa och interagera med API:er._

Denna examineras inte i tentan. Antagande görs att eleverna behärskar postman på ett grundläggande sätt genom att ha använt Postman kontinuerligt under kursens gång.

---

[Tillbaks till toppen](#förslag-på-frågor-till-den-skriftliga-examen)

## VG-Nivå

1 fråga som kan ge maximalt 15 (?) poäng.

Skriv koden för en Express.js-applikation som hanterar en resurs kallad “Heroes” med hjälp av better-sqlite3. Du behöver inte sätta upp en faktisk databas – fokusera på att skriva koden för att definiera API
endpoints och hur de skulle interagera med en SQLite-databas via better-sqlite3.

Det är alltid svårt att komma ihåg exakt syntax alla gånger, men här har ni en liten ordlist som kanske kan hjälpa er att komma ihåg:

```js
const Database require('better-sqlite3');
const db = new Database('name-of-your-db');

db.prepare();
stmt.get();
stmt.run();
app.get();
app.post();
app.put();
app.delete();
app.use();
app.listen(port => {});
```

### Kravspecifikation:

Följande struktur har databasen:

#### Heroes Table ER-Diagram

| **heroes**              |
| ----------------------- |
| **id** (INTEGER, PK)    |
| **name** (TEXT)         |
| **power** (TEXT)        |
| **city** (TEXT)         |
| **is_active** (BOOLEAN) |

##### Instruktioner

Skriv koden för följande API-endpoints i Express.js, som ska interagera med SQLite-databasen:

- GET /heroes - Hämtar en lista över alla superhjältar. Använd SQL för att läsa från tabellen heroes.

- GET /heroes/
- Hämtar en specifik superhjälte baserat på dess id. Använd SQL för att hämta den specifika raden.

- POST /heroes - Lägger till en ny superhjälte. (Ta emot JSON-objekt med name, power, city, och is_active i request body.) Använd SQL för att skapa en ny rad i tabellen.

- PUT /heroes/
- Uppdaterar informationen för en superhjälte baserat på dess id. Använd SQL för att uppdatera den befintliga raden.

- DELETE /heroes/
- Raderar en superhjälte baserat på dess id. Använd SQL för att ta bort raden från tabellen.

##### Instruktioner

- Skriv Express.js-kod för varje route, där du skapar en SQL-fråga med better-sqlite3 metoder (db.prepare(), stmt.run(), stmt.get(), etc.) för att hantera de fyra vanligaste REST-metoderna: GET, POST, PUT, DELETE.

- Inkludera kod för att initialisera better-sqlite3 och ange att databasen ska ansluta till en fil heroes.db.

- Implementera grundläggande felhantering i varje route, exempelvis för att hantera om en superhjälte med ett visst id inte hittas.
