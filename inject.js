c

o

n

s

o

l

e

.

l

o

g

(

c

o

n

f

i

g

u

r

e

)




/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

С

О

Д

Е

Р

Ж

И

М

О

Г

О

 

С

Т

Р

А

Н

И

Ц

Ы




a

s

y

n

c

 

f

u

n

c

t

i

o

n

 

g

e

t

_

p

a

g

e

(

u

r

l

)

 

{




 

 

r

e

t

u

r

n

 

f

e

t

c

h

(

u

r

l

)




 

 

 

 

 

 

.

t

h

e

n

(

d

a

t

a

 

=

>

 

{

r

e

t

u

r

n

 

d

a

t

a

.

t

e

x

t

(

)

}

)




 

 

 

 

 

 

.

c

a

t

c

h

(

e

r

r

o

r

 

=

>

 

c

o

n

s

o

l

e

.

e

r

r

o

r

(

'

E

r

r

o

r

 

f

e

t

c

h

i

n

g

 

d

a

t

a

:

'

,

 

e

r

r

o

r

)

)

;




}




/

/

 

К

Л

А

С

С

 

И

Н

Т

Е

Р

Ф

Е

Й

С

А

,

 

С

А

М

Ы

Й

 

Л

А

Й

Т

О

В

Ы

Й

 

К

Л

А

С

С




/

/

 

П

Р

О

С

Т

О

Р

 

Д

Л

Я

 

Ф

А

Н

Т

И

А

З

И

И




c

l

a

s

s

 

I

n

t

e

r

f

a

c

e

 

{







 

 

 

 

a

s

y

n

c

 

r

u

n

(

h

t

m

l

)

 

{







 

 

 

 

 

 

 

 

/

/

 

С

О

Д

Е

Р

Ж

И

М

О

Е

 

С

Т

Р

А

Н

И

Ц

Ы

 

Д

Л

Я

 

Р

Е

Д

А

К

Т

И

Р

О

В

А

Н

И

Я




 

 

 

 

 

 

 

 

t

h

i

s

.

h

t

m

l

 

=

 

h

t

m

l







 

 

 

 

 

 

 

 

/

/

 

Ц

В

Е

Т

А

 

П

Р

И

Л

О

Ж

Е

Н

И

Я




 

 

 

 

 

 

 

 

c

o

n

s

t

 

t

e

x

t

_

c

o

l

o

r

 

=

 

"

#

6

1

6

1

6

1

"




 

 

 

 

 

 

 

 

c

o

n

s

t

 

b

a

c

k

g

r

o

u

n

d

_

c

o

l

o

r

 

=

 

"

w

h

i

t

e

"




 

 

 

 

 

 

 

 

c

o

n

s

t

 

b

o

r

d

e

r

_

c

o

l

o

r

 

=

 

"

#

b

3

b

1

b

1

"




 

 

 

 

 

 

 

 

c

o

n

s

t

 

b

o

r

d

e

r

_

s

e

c

o

n

d

_

c

o

l

o

r

 

=

 

"

#

0

0

8

8

c

c

"







 

 

 

 

 

 

 

 

/

/

 

С

Т

И

Л

И

 

П

Р

И

Л

О

Ж

Е

Н

И

Я




 

 

 

 

 

 

 

 

c

o

n

s

t

 

s

t

y

l

e

s

 

=

 

{




 

 

 

 

 

 

 

 

 

 

 

 

a

p

p

w

r

a

p

p

e

r

:

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

h

e

i

g

h

t

:

 

"

8

v

h

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

w

i

d

t

h

:

 

"

a

u

t

o

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

r

i

g

h

t

:

 

"

0

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

b

o

t

t

o

m

:

 

"

3

v

h

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

p

o

s

i

t

i

o

n

:

 

"

f

i

x

e

d

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

z

I

n

d

e

x

:

 

"

1

0

0

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

d

i

s

p

l

a

y

:

 

"

f

l

e

x

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

g

r

i

d

T

e

m

p

l

a

t

e

C

o

l

u

m

n

s

:

 

"

r

e

p

e

a

t

(

8

,

 

2

0

v

h

)

"




 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

,




 

 

 

 

 

 

 

 

 

 

 

 

s

p

a

n

s

:

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

p

o

s

i

t

i

o

n

:

 

"

r

e

l

a

t

i

v

e

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

h

e

i

g

h

t

:

 

"

1

0

0

%

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

w

i

d

t

h

:

 

"

7

v

w

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

d

i

s

p

l

a

y

:

 

"

f

l

e

x

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

j

u

s

t

i

f

y

C

o

n

t

e

n

t

:

 

"

c

e

n

t

e

r

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

a

l

i

g

n

I

t

e

m

s

:

 

"

c

e

n

t

e

r

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

f

l

e

x

D

i

r

e

c

t

i

o

n

:

 

"

c

o

l

u

m

n

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

l

o

r

:

 

t

e

x

t

_

c

o

l

o

r

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

b

a

c

k

g

r

o

u

n

d

:

 

b

a

c

k

g

r

o

u

n

d

_

c

o

l

o

r

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

b

o

r

d

e

r

:

 

"

s

o

l

i

d

 

1

p

x

"

 

+

 

b

o

r

d

e

r

_

c

o

l

o

r

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

p

a

d

d

i

n

g

I

n

l

i

n

e

:

 

"

1

v

h

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

f

o

n

t

S

i

z

e

:

 

"

1

.

5

c

q

h

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

i

n

e

H

e

i

g

h

t

:

 

"

2

c

q

h

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

f

o

n

t

W

e

i

g

h

t

:

 

"

1

0

0

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

f

o

n

t

F

a

m

i

l

y

:

 

"

V

e

r

d

a

n

a

,

 

R

o

b

o

t

o

,

 

'

O

p

e

n

 

S

a

n

s

'

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

u

r

s

o

r

:

 

"

p

o

i

n

t

e

r

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

u

s

e

r

S

e

l

e

c

t

:

 

"

n

o

n

e

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

e

x

t

A

l

i

g

n

:

 

"

c

e

n

t

e

r

"




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

 

 

/

/

 

С

О

З

Д

А

Н

И

Е

 

С

К

Е

Л

Е

Т

А

 

П

Р

И

Л

О

Ж

Е

Н

И

Я




 

 

 

 

 

 

 

 

 

 

l

e

t

 

w

r

a

p

p

e

r

 

=

 

d

o

c

u

m

e

n

t

.

c

r

e

a

t

e

E

l

e

m

e

n

t

(

"

d

i

v

"

)




 

 

 

 

 

 

 

 

 

 

w

r

a

p

p

e

r

.

c

l

a

s

s

L

i

s

t

.

a

d

d

(

"

w

r

a

p

p

e

r

"

)




 

 

 

 

 

 

 

 

 

 

O

b

j

e

c

t

.

a

s

s

i

g

n

(

w

r

a

p

p

e

r

.

s

t

y

l

e

,

 

s

t

y

l

e

s

[

"

a

p

p

w

r

a

p

p

e

r

"

]

)







 

 

 

 

 

 

 

 

 

 

/

/

 

Н

А

С

Т

Р

О

Й

К

И

 

К

Н

О

П

О

К

 

П

Р

И

Л

О

Ж

Е

Н

И

Я




 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

b

s

t

 

=

 

{




 

 

 

 

 

 

 

 

 

 

 

 

"

a

p

p

_

i

c

o

n

"

:

 

[

`

ฅ

^

•

⩊

•

^

ฅ

`

,

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

f

o

n

t

W

e

i

g

h

t

:

 

"

1

0

0

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

f

o

n

t

S

i

z

e

:

 

"

1

3

p

x

"

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

r

a

n

s

i

t

i

o

n

:

 

"

t

r

a

n

s

f

o

r

m

 

0

.

1

s

 

e

a

s

e

-

i

n

-

o

u

t

,

 

c

o

l

o

r

 

0

.

2

s

 

e

a

s

e

-

i

n

-

o

u

t

"




 

 

 

 

 

 

 

 

 

 

 

 

}

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

a

p

p

_

c

o

p

y

_

b

u

t

t

o

n

"

:

 

[

"

К

о

п

и

р

о

в

а

т

ь

<

/

b

r

>

A

l

t

+

S

"

,

 

 

{

}

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

a

p

p

_

s

b

p

"

:

 

[

"

С

б

п

<

/

b

r

>

A

l

t

+

A

"

,

 

{

}

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

a

p

p

_

d

o

p

"

:

 

[

"

Д

о

п

р

о

д

а

ж

а

<

/

b

r

>

A

l

t

+

W

"

,

 

{

}

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

a

p

p

_

d

c

"

:

 

[

"

Д

к

<

/

b

r

>

A

l

t

+

Q

"

,

 

{

}

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

a

p

p

_

n

o

_

c

l

i

e

n

t

"

:

 

[

"

Н

е

 

к

л

и

е

н

т

"

,

 

{

}

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

a

p

p

_

c

u

t

"

:

 

[

"

У

б

р

а

т

ь

 

к

о

п

е

й

к

и

"

,

 

{

}

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

a

p

p

_

t

e

l

e

g

r

a

m

"

:

 

[

"

Н

о

в

о

с

т

и

"

,

 

{

}

]




 

 

 

 

 

 

 

 

 

 

}

 

/

/

 

"

a

p

p

_

e

r

r

o

r

"

:

 

[

"

О

т

ч

е

т

 

о

б

 

о

ш

и

б

к

е

"

,

 

{

}

]







 

 

 

 

 

 

 

 

 

 

l

e

t

 

b

u

t

t

o

n

s

_

l

i

s

t

 

=

 

{

}







 

 

 

 

 

 

 

 

 

 

/

/

 

П

О

О

Ч

Е

Р

Е

Д

Н

А

Я

 

П

О

Д

Г

Р

У

З

К

А

 

К

Н

О

П

О

К




 

 

 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

b

t

n

 

i

n

 

b

s

t

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

l

s

 

=

 

b

t

n




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

i

n

n

e

r

 

=

 

b

s

t

[

b

t

n

]

[

0

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

s

t

y

l

e

 

=

 

b

s

t

[

b

t

n

]

[

1

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

e

l

e

m

 

=

 

d

o

c

u

m

e

n

t

.

c

r

e

a

t

e

E

l

e

m

e

n

t

(

"

s

p

a

n

"

)




 

 

 

 

 

 

 

 

 

 

 

 

e

l

e

m

.

c

l

a

s

s

L

i

s

t

.

a

d

d

(

c

l

s

)




 

 

 

 

 

 

 

 

 

 

 

 

e

l

e

m

.

i

n

n

e

r

H

T

M

L

 

+

=

 

i

n

n

e

r




 

 

 

 

 

 

 

 

 

 

 

 

O

b

j

e

c

t

.

a

s

s

i

g

n

(

e

l

e

m

.

s

t

y

l

e

,

 

O

b

j

e

c

t

.

a

s

s

i

g

n

(

{

}

,

 

s

t

y

l

e

s

[

"

s

p

a

n

s

"

]

,

 

s

t

y

l

e

)

)




 

 

 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

c

l

s

]

 

=

 

e

l

e

m

 

 

 

 




 

 

 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

 

 

/

/

 

С

П

И

С

К

И

 

П

Р

И

Л

О

Ж

Е

Н

И

Я

 

С

 

Р

А

З

Н

Ы

М

 

Ф

У

Н

К

Ц

И

О

Н

А

Л

О

М




 

 

 

 

 

 

 

 

 

 

l

e

t

 

m

a

s

s

 

=

 

[

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

d

c

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

s

b

p

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

d

o

p

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

c

u

t

"

]

]




 

 

 

 

 

 

 

 

 

 

l

e

t

 

a

l

l

 

=

 

[




 

 

 

 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

i

c

o

n

"

]

,

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

c

o

p

y

_

b

u

t

t

o

n

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

d

o

p

"

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

s

b

p

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

d

c

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

c

u

t

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

n

o

_

c

l

i

e

n

t

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

t

e

l

e

g

r

a

m

"

]




 

 

 

 

 

 

 

 

 

 

]

 

 







 

 

 

 

 

 

 

 

 

 

l

e

t

 

d

i

s

p

_

e

l

 

=

 

[




 

 

 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

c

o

p

y

_

b

u

t

t

o

n

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

d

o

p

"

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

s

b

p

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

d

c

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

c

u

t

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

n

o

_

c

l

i

e

n

t

"

]

,

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

t

e

l

e

g

r

a

m

"

]




 

 

 

 

 

 

 

 

 

]

 

 







 

 

 

 

 

 

 

 

 

 

/

/

 

Д

О

Б

А

В

Л

Е

Н

И

Я

 

Ф

У

Н

К

Ц

И

О

Н

А

Л

А

 

К

Н

О

П

К

А

М




 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

i

c

o

n

"

]

.

c

l

a

s

s

L

i

s

t

.

a

d

d

(

"

o

p

e

n

"

)







 

 

 

 

 

 

 

 

 

 

f

u

n

c

t

i

o

n

 

t

o

g

g

l

e

_

e

l

e

m

e

n

t

s

(

i

s

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

i

s

)

 

{

d

i

s

p

_

e

l

.

f

o

r

E

a

c

h

(

(

e

l

)

 

=

>

 

{

e

l

.

s

t

y

l

e

.

d

i

s

p

l

a

y

 

=

 

"

f

l

e

x

"

}

)

}

 




 

 

 

 

 

 

 

 

 

 

 

 

e

l

s

e

 

{

d

i

s

p

_

e

l

.

f

o

r

E

a

c

h

(

(

e

l

)

 

=

>

 

{

e

l

.

s

t

y

l

e

.

d

i

s

p

l

a

y

 

=

 

"

n

o

n

e

"

}

)

}




 

 

 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

i

c

o

n

"

]

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

"

c

l

i

c

k

"

,

 

(

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

i

c

o

n

"

]

.

c

l

a

s

s

L

i

s

t

.

t

o

g

g

l

e

(

"

o

p

e

n

"

)




 

 

 

 

 

 

 

 

 

 

 

 

t

o

g

g

l

e

_

e

l

e

m

e

n

t

s

(

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

i

c

o

n

"

]

.

c

l

a

s

s

L

i

s

t

.

c

o

n

t

a

i

n

s

(

"

o

p

e

n

"

)

)




 

 

 

 

 

 

 

 

 

 

}

)










 

 

 

 

 

 

 

 

 

 

a

l

l

[

0

]

.

s

t

y

l

e

.

b

o

r

d

e

r

T

o

p

L

e

f

t

R

a

d

i

u

s

 

 

 

 

=

 

"

2

0

p

x

"




 

 

 

 

 

 

 

 

 

 

a

l

l

[

0

]

.

s

t

y

l

e

.

b

o

r

d

e

r

B

o

t

t

o

m

L

e

f

t

R

a

d

i

u

s

 

=

 

"

2

0

p

x

"




 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

m

a

s

s

.

f

o

r

E

a

c

h

(

(

e

)

 

=

>

 

{

e

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

"

c

l

i

c

k

"

,

 

(

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

T

o

g

g

l

e

C

h

e

c

k

(

e

,

 

[

b

o

r

d

e

r

_

c

o

l

o

r

,

 

b

o

r

d

e

r

_

s

e

c

o

n

d

_

c

o

l

o

r

]

)




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

!

t

h

i

s

.

c

h

e

c

k

(

e

)

)

 

e

.

s

t

y

l

e

.

b

o

r

d

e

r

B

o

t

t

o

m

 

=

 

"

s

o

l

i

d

 

3

p

x

 

"

 

+

 

b

o

r

d

e

r

_

s

e

c

o

n

d

_

c

o

l

o

r




 

 

 

 

 

 

 

 

 

 

}

)

}

)

;




 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

[

[

"

m

o

u

s

e

o

v

e

r

"

,

 

b

o

r

d

e

r

_

s

e

c

o

n

d

_

c

o

l

o

r

,

 

b

o

r

d

e

r

_

s

e

c

o

n

d

_

c

o

l

o

r

]

,




 

 

 

 

 

 

 

 

 

 

 

[

"

m

o

u

s

e

o

u

t

"

,

 

 

b

o

r

d

e

r

_

c

o

l

o

r

,

 

 

 

 

 

 

 

 

t

e

x

t

_

c

o

l

o

r

]

]

.

f

o

r

E

a

c

h

(

e

l

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

m

a

s

s

.

f

o

r

E

a

c

h

(

(

e

)

 

=

>

 

{

e

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

e

l

[

0

]

,

 

(

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

!

t

h

i

s

.

c

h

e

c

k

(

e

)

)

 

e

.

s

t

y

l

e

.

b

o

r

d

e

r

B

o

t

t

o

m

 

=

 

"

s

o

l

i

d

 

3

p

x

 

"

 

+

 

e

l

[

1

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

e

.

s

t

y

l

e

.

c

o

l

o

r

 

=

 

e

l

[

2

]




 

 

 

 

 

 

 

 

 

 

 

 

}

)

}

)

;




 

 

 

 

 

 

 

 

 

 

}

)




 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

a

l

l

.

f

o

r

E

a

c

h

(

e

 

=

>

 

{

w

r

a

p

p

e

r

.

a

p

p

e

n

d

C

h

i

l

d

(

e

)

}

)

;







 

 

 

 

 

 

 

 

 

 

d

o

c

u

m

e

n

t

.

b

o

d

y

.

a

p

p

e

n

d

C

h

i

l

d

(

w

r

a

p

p

e

r

)




 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

w

r

a

p

p

e

r

 

=

 

w

r

a

p

p

e

r







 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

t

e

l

e

g

r

a

m

"

]

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

"

c

l

i

c

k

"

,

 

(

)

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

w

i

n

d

o

w

.

o

p

e

n

(

'

h

t

t

p

s

:

/

/

t

.

m

e

/

+

W

B

v

4

W

S

i

e

L

m

w

w

M

j

Z

i

'

)

;




 

 

 

 

 

 

 

 

 

 

}

)




 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

l

e

t

 

s

e

c

o

n

d

_

m

a

s

s

 

=

 

[

"

a

p

p

_

c

o

p

y

_

b

u

t

t

o

n

"

,

 

"

a

p

p

_

t

e

l

e

g

r

a

m

"

,

 

"

a

p

p

_

n

o

_

c

l

i

e

n

t

"

]

.

m

a

p

(

i

 

=

>

 

{

r

e

t

u

r

n

 

b

u

t

t

o

n

s

_

l

i

s

t

[

i

]

}

)




 

 

 

 

 

 

 

 

 

 

l

e

t

 

m

o

v

e

 

=

 

[

[

"

m

o

u

s

e

o

v

e

r

"

,

 

b

o

r

d

e

r

_

s

e

c

o

n

d

_

c

o

l

o

r

]

,

 

[

"

m

o

u

s

e

o

u

t

"

,

 

 

t

e

x

t

_

c

o

l

o

r

]

]




 

 

 

 

 

 

 

 

 

 

m

o

v

e

.

f

o

r

E

a

c

h

(

e

l

 

=

>

 

{

s

e

c

o

n

d

_

m

a

s

s

.

f

o

r

E

a

c

h

(

(

e

)

 

=

>

 

{

e

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

e

l

[

0

]

,

 

(

)

 

=

>

 

{

e

.

s

t

y

l

e

.

c

o

l

o

r

 

=

 

e

l

[

1

]

}

)

}

)

;

}

)







 

 

 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

[




 

 

 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

c

o

p

y

_

b

u

t

t

o

n

"

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

[

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

s

b

p

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

d

c

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

d

o

p

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

c

u

t

"

]

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

i

c

o

n

"

]

,

 

b

u

t

t

o

n

s

_

l

i

s

t

[

"

a

p

p

_

n

o

_

c

l

i

e

n

t

"

]




 

 

 

 

 

 

 

 

 

 

]




 

 

 

 

}







 

 

 

 

r

e

m

o

v

e

(

)

 

{

t

h

i

s

.

w

r

a

p

p

e

r

.

r

e

m

o

v

e

(

)

}







 

 

 

 

/

/

 

В

К

Л

Ю

Ч

Е

Н

И

Е

 

-

 

О

Т

К

Л

Ю

Ч

Е

Н

И

Е

 

К

Л

А

С

С

А

 




 

 

 

 

T

o

g

g

l

e

C

h

e

c

k

(

e

l

,

 

c

o

l

o

r

s

,

 

c

l

s

=

"

c

h

e

c

k

e

d

"

)

 

{




 

 

 

 

 

 

 

 

c

o

n

s

o

l

e

.

c

l

e

a

r

(

)




 

 

 

 

 

 

 

 

e

l

.

c

l

a

s

s

L

i

s

t

.

t

o

g

g

l

e

(

c

l

s

)




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

c

h

e

c

k

(

e

l

)

)

 

{

e

l

.

s

t

y

l

e

.

b

o

r

d

e

r

B

o

t

t

o

m

 

=

 

"

s

o

l

i

d

 

4

p

x

"

 

+

 

c

o

l

o

r

s

[

1

]

}

 




 

 

 

 

 

 

 

 

e

l

s

e

 

{

e

l

.

s

t

y

l

e

.

b

o

r

d

e

r

B

o

t

t

o

m

 

=

 

"

s

o

l

i

d

 

4

p

x

"

 

+

 

c

o

l

o

r

s

[

0

]

}




 

 

 

 

}







 

 

 

 

/

/

 

П

Р

О

В

Е

Р

К

А

 

К

Л

А

С

С

А




 

 

 

 

c

h

e

c

k

(

e

l

,

 

c

l

s

=

"

c

h

e

c

k

e

d

"

)

 

{

r

e

t

u

r

n

 

(

e

l

.

c

l

a

s

s

L

i

s

t

.

c

o

n

t

a

i

n

s

(

c

l

s

)

)

}




}







c

l

a

s

s

 

n

o

_

c

l

i

e

n

t

 

{




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

a

r

g

s

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

a

r

g

s

 

=

 

a

r

g

s




 

 

 

 

 

 

 

 

t

h

i

s

.

c

f

g

 

=

 

a

r

g

s

[

"

c

o

n

f

i

g

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

t

a

b

l

e

 

=

 

a

r

g

s

[

"

t

a

b

l

e

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

s

h

o

p

 

=

 

t

h

i

s

.

t

a

b

l

e

[

0

]

[

"

s

h

o

p

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

d

a

y

 

=

 

t

h

i

s

.

c

f

g

[

"

p

o

i

n

t

s

"

]

[

t

h

i

s

.

s

h

o

p

]







 

 

 

 

}







 

 

 

 

a

s

y

n

c

 

c

o

n

n

e

c

t

(

b

u

t

t

o

n

)

 

{




 

 

 

 

 

 

 

 

b

u

t

t

o

n

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

"

c

l

i

c

k

"

,

 

a

s

y

n

c

 

(

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

a

w

a

i

t

 

t

h

i

s

.

f

u

(

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

"

c

o

n

f

i

g

"

:

 

 

 

t

h

i

s

.

a

r

g

s

[

"

c

o

n

f

i

g

"

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

"

t

a

b

l

e

"

:

 

 

 

 

t

h

i

s

.

a

r

g

s

[

"

t

a

b

l

e

"

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

"

d

a

y

"

:

 

 

 

 

 

 

t

h

i

s

.

a

r

g

s

[

"

c

o

n

f

i

g

"

]

[

"

p

o

i

n

t

s

"

]

[

t

h

i

s

.

a

r

g

s

[

"

t

a

b

l

e

"

]

[

0

]

[

"

s

h

o

p

"

]

]




 

 

 

 

 

 

 

 

 

 

 

 

}

)




 

 

 

 

 

 

 

 

}

)




 

 

 

 

}







 

 

 

 

f

o

r

m

a

t

_

u

v

(

t

a

b

l

e

)

 

{

 

r

e

t

u

r

n

 

t

a

b

l

e

.

m

a

p

(

(

e

)

 

=

>

 

(

(

e

 

=

=

 

-

1

)

 

?

 

"

"

 

:

 

e

)

)

.

j

o

i

n

(

"

\

t

"

)

 

}







 

 

 

 

a

s

y

n

c

 

f

u

(

a

r

g

s

)

 

{







 

 

 

 

 

 

 

 

l

e

t

 

c

f

g

 

 

 

 

 

=

 

a

r

g

s

[

"

c

o

n

f

i

g

"

]




 

 

 

 

 

 

 

 

l

e

t

 

t

a

b

l

e

 

 

 

=

 

a

r

g

s

[

"

t

a

b

l

e

"

]




 

 

 

 

 

 

 

 

l

e

t

 

d

a

y

 

 

 

 

 

=

 

a

r

g

s

[

"

d

a

y

"

]







 

 

 

 

 

 

 

 

l

e

t

 

p

r

o

b

l

e

m

 

=

 

p

r

o

m

p

t

(

"

Ч

т

о

 

с

л

у

ч

и

л

о

с

ь

?

"

)

;







 

 

 

 

 

 

 

 

i

f

 

(

p

r

o

b

l

e

m

)

 

{







 

 

 

 

 

 

 

 

 

 

 

 

p

r

o

b

l

e

m

 

=

 

p

r

o

b

l

e

m

.

r

e

p

l

a

c

e

(

/

[

\

r

\

n

\

t

]

+

/

g

,

 

"

 

"

)

.

r

e

p

l

a

c

e

(

"

 

 

"

,

 

"

 

"

)







 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

v

p

 

=

 

A

r

r

a

y

(

c

f

g

[

"

m

a

i

n

"

]

[

"

s

i

z

e

"

]

)

.

f

i

l

l

(

-

1

)




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

d

e

f

 

=

 

c

f

g

[

"

d

e

f

a

u

l

t

"

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

p

t

 

=

 

c

f

g

[

"

p

a

s

s

i

v

e

_

t

e

m

p

l

a

t

e

"

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

t

e

m

p

 

=

 

"

d

e

f

a

u

l

t

"




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

t

m

 

=

 

a

w

a

i

t

 

t

h

i

s

.

g

e

t

_

n

o

w

(

)







 

 

 

 

 

 

 

 

 

 

 

 

v

p

[

p

t

[

"

c

o

m

m

e

n

t

s

"

]

]

 

=

 

"

Н

е

к

л

и

е

н

т

,

 

"

 

+

 

p

r

o

b

l

e

m







 

 

 

 

 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

i

=

0

;

 

i

<

t

e

m

p

.

l

e

n

g

t

h

;

 

i

+

+

)

 

{

i

f

 

(

t

e

m

p

[

i

]

 

=

=

 

f

a

l

s

e

)

 

{

t

e

m

p

[

i

]

 

=

 

A

r

r

a

y

(

d

e

f

[

2

]

[

i

]

)

.

f

i

l

l

(

-

1

)

}

}




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

 

=

=

 

"

d

e

f

a

u

l

t

"

)

 

 

{

t

e

m

p

 

=

 

A

r

r

a

y

(

d

e

f

[

2

]

[

0

]

)

.

f

i

l

l

(

t

r

u

e

)

}

 

 




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

0

]

 

&

 

!

d

a

y

 

&

 

t

m

[

0

]

)

 

{

v

p

[

d

e

f

[

1

]

[

"

s

h

i

f

t

"

]

]

=

"

д

"

}

 

e

l

s

e

 

{

v

p

[

d

e

f

[

1

]

[

"

s

h

i

f

t

"

]

]

=

"

н

"

}




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

0

]

 

&

 

d

a

y

)

 

{

v

p

[

d

e

f

[

1

]

[

"

s

h

i

f

t

"

]

]

=

"

д

"

}







 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

d

e

f

[

0

]

[

"

d

a

t

e

"

]

)

 

{

v

p

[

d

e

f

[

1

]

[

"

d

a

t

e

"

]

]

 

=

 

t

m

[

1

]

}

 

/

/

 

д

а

т

а

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

d

e

f

[

0

]

[

"

t

i

m

e

"

]

)

 

{

v

p

[

d

e

f

[

1

]

[

"

t

i

m

e

"

]

]

 

=

 

t

m

[

2

]

}

 

/

/

 

в

р

е

м

я

 




 

 

 

 

 

 

 

 

 

 

 

 

v

p

[

p

t

[

"

n

o

_

c

l

i

e

n

t

"

]

]

 

=

 

0







 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

s

e

l

l

e

r

 

=

 

t

a

b

l

e

[

0

]

[

"

s

e

l

l

e

r

"

]

.

t

r

i

m

(

)

.

s

p

l

i

t

(

"

 

"

)

.

f

i

l

t

e

r

(

(

e

)

 

=

>

 

e

 

!

=

 

"

-

.

"

)

.

j

o

i

n

(

"

 

"

)

.

r

e

p

l

a

c

e

(

/

\

s

+

/

g

,

 

'

 

'

)

.

t

r

i

m

(

)




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

s

e

l

l

e

r

_

h

a

s

h

 

=

 

b

t

o

a

(

u

n

e

s

c

a

p

e

(

e

n

c

o

d

e

U

R

I

C

o

m

p

o

n

e

n

t

(

s

e

l

l

e

r

)

)

)







 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

O

b

j

e

c

t

.

k

e

y

s

(

(

c

f

g

[

"

e

n

a

m

e

s

"

]

)

)

.

i

n

c

l

u

d

e

s

(

s

e

l

l

e

r

_

h

a

s

h

)

)

 

s

e

l

l

e

r

 

=

 

d

e

c

o

d

e

U

R

I

C

o

m

p

o

n

e

n

t

(

e

s

c

a

p

e

(

a

t

o

b

(

c

f

g

[

"

e

n

a

m

e

s

"

]

[

s

e

l

l

e

r

_

h

a

s

h

]

)

)

)




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

d

e

f

[

0

]

[

"

n

a

m

e

"

]

)

 

{

v

p

[

d

e

f

[

1

]

[

"

n

a

m

e

"

]

]

 

=

 

s

e

l

l

e

r

}

 

/

/

 

и

м

я

 

п

р

о

д

а

в

ц

а







 

 

 

 

 

 

 

 

 

 

 

 

n

a

v

i

g

a

t

o

r

.

c

l

i

p

b

o

a

r

d

.

w

r

i

t

e

T

e

x

t

(

t

h

i

s

.

f

o

r

m

a

t

_

u

v

(

v

p

)

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

.

t

h

e

n

(

(

)

 

=

>

 

{

a

l

e

r

t

(

`

У

с

п

е

ш

н

о

 

с

к

о

п

и

р

о

в

а

н

о

!

 

(

Н

е

 

к

л

и

е

н

т

)

`

)

}

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

.

c

a

t

c

h

(

e

r

r

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

o

l

e

.

d

e

b

u

g

(

"

О

ш

и

б

к

а

"

,

 

e

r

r

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

n

a

v

i

g

a

t

o

r

.

c

l

i

p

b

o

a

r

d

.

w

r

i

t

e

T

e

x

t

(

t

h

i

s

.

f

o

r

m

a

t

_

u

v

(

v

p

)

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

.

t

h

e

n

(

(

)

 

=

>

 

{

a

l

e

r

t

(

`

У

с

п

е

ш

н

о

 

с

к

о

п

и

р

о

в

а

н

о

!

 

(

Н

е

 

к

л

и

е

н

т

)

`

)

;

}

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

.

c

a

t

c

h

(

e

r

r

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

o

l

e

.

d

e

b

u

g

(

"

О

ш

и

б

к

а

"

,

 

e

r

r

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

)

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

)

;

 




 

 

 

 

 

 

 

 

}

 




 

 

 

 

}







 

 

 

 

a

s

y

n

c

 

g

e

t

_

n

o

w

(

)

 

{







 

 

 

 

 

 

 

 

f

u

n

c

t

i

o

n

 

t

w

o

(

n

u

m

b

e

r

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

 

=

 

n

u

m

b

e

r

.

t

o

S

t

r

i

n

g

(

)

.

s

p

l

i

t

(

"

"

)




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

n

.

l

e

n

g

t

h

 

=

=

 

1

)

 

{

r

e

t

u

r

n

 

"

0

"

+

n

[

0

]

}

 

e

l

s

e

 

{

r

e

t

u

r

n

 

n

u

m

b

e

r

.

t

o

S

t

r

i

n

g

(

)

}




 

 

 

 

 

 

 

 

}













 

 

 

 

 

 

 

 

l

e

t

 

n

o

w

 

=

 

n

e

w

 

D

a

t

e

(

)

;







 

 

 

 

 

 

 

 

l

e

t

 

t

i

m

e

_

o

b

j

 

=

 

[




 

 

 

 

 

 

 

 

 

 

 

 

`

$

{

t

w

o

(

n

o

w

.

g

e

t

D

a

t

e

(

)

)

}

.

$

{

t

w

o

(

n

o

w

.

g

e

t

M

o

n

t

h

(

)

+

1

)

}

.

$

{

n

o

w

.

g

e

t

F

u

l

l

Y

e

a

r

(

)

}

`

,

 




 

 

 

 

 

 

 

 

 

 

 

 

`

$

{

n

o

w

.

g

e

t

H

o

u

r

s

(

)

}

:

$

{

t

w

o

(

n

o

w

.

g

e

t

M

i

n

u

t

e

s

(

)

)

}

:

$

{

t

w

o

(

n

o

w

.

g

e

t

S

e

c

o

n

d

s

(

)

)

}

`




 

 

 

 

 

 

 

 

]







 

 

 

 

 

 

 

 

l

e

t

 

d

a

t

e

t

i

m

e

 

=

 

n

e

w

 

V

p

T

i

m

e

(

)




 

 

 

 

 

 

 

 

d

a

t

e

t

i

m

e

 

=

 

a

w

a

i

t

 

d

a

t

e

t

i

m

e

.

r

u

n

(

t

i

m

e

_

o

b

j

)







 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

d

a

t

e

t

i

m

e




 

 

 

 

}




}




c

l

a

s

s

 

V

p

T

i

m

e

 

{







 

 

 

 

a

s

y

n

c

 

r

u

n

(

t

i

m

e

_

o

b

j

=

f

a

l

s

e

,

 

i

n

t

e

r

v

a

l

=

[

1

0

,

 

2

2

]

)

 

{







 

 

 

 

 

 

 

 

t

h

i

s

.

d

a

t

e

t

i

m

e

_

l

i

s

t

 

=

 

 

 

t

i

m

e

_

o

b

j




 

 

 

 

 

 

 

 

t

h

i

s

.

s

t

a

r

t

 

=

 

 

 

 

 

 

 

 

i

n

t

e

r

v

a

l

[

0

]




 

 

 

 

 

 

 

 

t

h

i

s

.

e

n

d

 

=

 

 

 

 

 

 

 

 

 

 

i

n

t

e

r

v

a

l

[

1

]







 

 

 

 

 

 

 

 

t

h

i

s

.

d

a

t

e

 

=

 

t

h

i

s

.

d

a

t

e

t

i

m

e

_

l

i

s

t

[

0

]

.

s

p

l

i

t

(

"

.

"

)




 

 

 

 

 

 

 

 

t

h

i

s

.

t

i

m

e

 

=

 

t

h

i

s

.

d

a

t

e

t

i

m

e

_

l

i

s

t

[

1

]

.

s

p

l

i

t

(

"

:

"

)







 

 

 

 

 

 

 

 

t

h

i

s

.

o

b

j

e

c

t

 

=

 

n

e

w

 

D

a

t

e

(

`

$

{

t

h

i

s

.

d

a

t

e

[

1

]

}

.

$

{

t

h

i

s

.

d

a

t

e

[

0

]

}

.

$

{

t

h

i

s

.

d

a

t

e

[

2

]

}

`

)







 

 

 

 

 

 

 

 

t

h

i

s

.

s

e

c

_

t

i

m

e

 

 

 

=

 

 

 

t

h

i

s

.

t

i

m

e

[

0

]

*

6

0

*

6

0

 

+

 

t

h

i

s

.

t

i

m

e

[

1

]

*

6

0

 

+

 

t

h

i

s

.

t

i

m

e

[

2

]

*

1




 

 

 

 

 

 

 

 

t

h

i

s

.

s

e

c

_

e

n

d

 

 

 

 

=

 

 

 

6

0

*

6

0

*

t

h

i

s

.

e

n

d

 




 

 

 

 

 

 

 

 

t

h

i

s

.

s

e

c

_

s

t

a

r

t

 

 

=

 

 

 

6

0

*

6

0

*

t

h

i

s

.

s

t

a

r

t




 

 

 

 

 

 

 

 

t

h

i

s

.

d

a

y

_

t

i

m

e

 

 

 

=

 

 

 

2

4

*

6

0

*

6

0




 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

_

o

f

_

s

h

i

f

t

 

=

 

-

1

 

/

/

 

п

р

о

в

е

р

о

ч

н

о

е

 

ч

и

с

л

о




 

 

 

 

 

 

 

 

t

h

i

s

.

g

e

t

T

y

p

e

S

h

i

f

t

(

)







 

 

 

 

 

 

 

 

t

h

i

s

.

y

e

a

r

 

 

 

 

=

 

 

t

h

i

s

.

o

b

j

e

c

t

.

g

e

t

F

u

l

l

Y

e

a

r

(

)




 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

t

h

 

 

 

=

 

 

t

h

i

s

.

o

b

j

e

c

t

.

g

e

t

M

o

n

t

h

(

)

+

1




 

 

 

 

 

 

 

 

t

h

i

s

.

d

a

y

 

 

 

 

 

=

 

 

t

h

i

s

.

o

b

j

e

c

t

.

g

e

t

D

a

t

e

(

)







 

 

 

 

 

 

 

 

t

h

i

s

.

t

i

m

e

_

t

o

_

s

e

n

d

 

=

 

t

h

i

s

.

g

e

t

T

i

m

e

(

)




 

 

 

 

 

 

 

 

t

h

i

s

.

d

a

t

e

_

t

o

_

s

e

n

d

 

=

 

`

$

{

t

h

i

s

.

t

w

o

(

t

h

i

s

.

d

a

y

)

}

.

$

{

t

h

i

s

.

t

w

o

(

t

h

i

s

.

m

o

n

t

h

)

}

.

$

{

t

h

i

s

.

y

e

a

r

}

`




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

[

t

h

i

s

.

t

y

p

e

_

o

f

_

s

h

i

f

t

,

 

t

h

i

s

.

d

a

t

e

_

t

o

_

s

e

n

d

,

 

t

h

i

s

.

t

i

m

e

_

t

o

_

s

e

n

d

]




 

 

 

 

}







 

 

 

 

t

w

o

(

n

u

m

b

e

r

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

n

 

=

 

n

u

m

b

e

r

.

t

o

S

t

r

i

n

g

(

)

.

s

p

l

i

t

(

"

"

)




 

 

 

 

 

 

 

 

i

f

 

(

n

.

l

e

n

g

t

h

 

=

=

 

1

)

 

{

r

e

t

u

r

n

 

"

0

"

+

n

[

0

]

}

 

e

l

s

e

 

{

r

e

t

u

r

n

 

n

u

m

b

e

r

.

t

o

S

t

r

i

n

g

(

)

}




 

 

 

 

}







 

 

 

 

g

e

t

T

y

p

e

S

h

i

f

t

(

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

f

i

r

s

t

_

n

i

g

h

t

_

p

a

r

t

 

=

 

!

!

(

(

t

h

i

s

.

s

e

c

_

t

i

m

e

 

>

 

t

h

i

s

.

s

e

c

_

e

n

d

)

 

&

 

(

t

h

i

s

.

s

e

c

_

t

i

m

e

 

>

 

t

h

i

s

.

s

e

c

_

s

t

a

r

t

)

)




 

 

 

 

 

 

 

 

l

e

t

 

s

e

c

o

n

d

_

n

i

g

h

t

_

p

a

r

t

 

=

 

!

!

(

(

t

h

i

s

.

s

e

c

_

t

i

m

e

 

<

 

t

h

i

s

.

s

e

c

_

e

n

d

)

 

&

 

(

t

h

i

s

.

s

e

c

_

t

i

m

e

 

<

 

t

h

i

s

.

s

e

c

_

s

t

a

r

t

)

)

 




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

f

i

r

s

t

_

n

i

g

h

t

_

p

a

r

t

 

|

|

 

s

e

c

o

n

d

_

n

i

g

h

t

_

p

a

r

t

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

н

о

ч

н

а

я

 

с

м

е

н

а

 

в

р

о

д

е

 

н

е

 

п

о

н

я

т

н

о

 

з

а

ч

е

м

 

з

д

е

с

ь

 

э

т

а

 

ф

у

н

к

ц

и

я




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

_

o

f

_

s

h

i

f

t

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

н

о

 

м

ы

 

д

е

л

а

е

м

 

д

а

т

у

 

н

а

 

1

 

д

е

н

ь

 

м

е

н

ь

ш

е

 

т

а

к

 

к

а

к

 

э

т

о

 

в

с

е

 

е

щ

е

 

т

в

о

я

 

с

м

е

н

а

 

б

р

а

т




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

s

e

c

o

n

d

_

n

i

g

h

t

_

p

a

r

t

)

 

{

t

h

i

s

.

o

b

j

e

c

t

.

s

e

t

D

a

t

e

(

t

h

i

s

.

o

b

j

e

c

t

.

g

e

t

D

a

t

e

(

)

 

-

 

1

)

 

}




 

 

 

 




 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

i

f

 

(

(

t

h

i

s

.

s

e

c

_

t

i

m

e

 

<

 

t

h

i

s

.

s

e

c

_

e

n

d

)

 

&

 

(

t

h

i

s

.

s

e

c

_

t

i

m

e

 

>

=

 

t

h

i

s

.

s

e

c

_

s

t

a

r

t

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

_

o

f

_

s

h

i

f

t

 

=

 

t

r

u

e

 

/

/

 

д

н

е

в

н

а

я

 

с

м

е

н

а

 

р

а

д

у

й

с

я

 

п

р

о

ц

е

н

т

у

 

к

а

к

 

и

 

т

в

о

й

 

п

и

с

ю

н

)




 

 

 

 

 

 

 

 

}




 

 

 

 

}







 

 

 

 

g

e

t

T

i

m

e

(

)

 

{




 

 

 

 

 

 

 

 

 

/

/

 

п

р

о

в

е

р

к

а

 

н

а

 

р

а

з

м

е

р

 

ч

и

с

л

а




 

 

 

 

 

 

 

 

i

f

 

(

(

t

h

i

s

.

t

i

m

e

[

0

]

.

l

e

n

g

t

h

 

!

=

 

1

)

 

&

 

(

t

h

i

s

.

t

i

m

e

[

0

]

[

0

]

 

=

=

 

"

0

"

)

)

 

{

t

h

i

s

.

t

i

m

e

[

0

]

 

=

 

N

u

m

b

e

r

(

t

i

m

e

[

0

]

[

1

]

)

}




 

 

 

 

 

 

 

 

e

l

s

e

 

i

f

 

(

t

h

i

s

.

t

i

m

e

[

0

]

.

l

e

n

g

t

h

 

=

=

 

1

)

 

{

t

h

i

s

.

t

i

m

e

[

0

]

 

=

 

N

u

m

b

e

r

(

t

h

i

s

.

t

i

m

e

[

0

]

[

0

]

)

}




 

 

 

 

 

 

 

 

e

l

s

e

 

{

t

h

i

s

.

t

i

m

e

[

0

]

 

=

 

N

u

m

b

e

r

(

t

h

i

s

.

t

i

m

e

[

0

]

)

}




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

t

i

m

e

[

1

]

[

0

]

 

=

=

 

"

0

"

)

 

{

t

h

i

s

.

t

i

m

e

[

1

]

 

=

 

N

u

m

b

e

r

(

t

h

i

s

.

t

i

m

e

[

1

]

[

1

]

)

}




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

t

i

m

e

[

2

]

[

0

]

 

=

=

 

"

0

"

)

 

{

t

h

i

s

.

t

i

m

e

[

2

]

 

=

 

N

u

m

b

e

r

(

t

h

i

s

.

t

i

m

e

[

2

]

[

1

]

)

}







 

 

 

 

 

 

 

 

/

/

 

и

т

о

г

о

в

о

е

 

ф

о

р

м

а

т

и

р

о

в

а

н

и

е




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

`

$

{

t

h

i

s

.

t

w

o

(

t

h

i

s

.

t

i

m

e

[

0

]

)

}

:

$

{

t

h

i

s

.

t

w

o

(

t

h

i

s

.

t

i

m

e

[

1

]

)

}

`

 

 

 




 

 

 

 

}




}




c

l

a

s

s

 

T

y

p

e

 

{







 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

h

t

m

l

,

 

c

o

n

f

i

g

,

 

t

e

m

p

,

 

b

a

c

k

)

 

{







 

 

 

 

 

 

 

 

t

h

i

s

.

h

t

m

l

 

 

 

 

 

 

 

=

 

h

t

m

l




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

n

f

i

g

 

 

 

 

 

=

 

c

o

n

f

i

g




 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

 

 

 

 

 

 

 

=

 

t

e

m

p




 

 

 

 

 

 

 

 

t

h

i

s

.

c

l

u

v

 

 

 

 

 

 

 

=

 

{

}




 

 

 

 

 

 

 

 

t

h

i

s

.

b

a

c

k

 

 

 

 

 

 

 

=

 

b

a

c

k







 

 

 

 

 

 

 

 

t

h

i

s

.

v

a

r

s

 

=

 

{

t

r

a

f

f

i

c

:

 

[

1

9

,

 

t

r

u

e

]

,

 

r

e

a

s

o

n

s

:

 

[

2

0

,

 

t

r

u

e

]

,

 

c

o

m

m

e

n

t

:

 

[

2

1

,

 

t

r

u

e

]

,

 

s

h

o

p

:

 

[

1

,

 

t

r

u

e

]

,

 

r

e

t

u

r

n

_

l

i

n

k

:

 

[

1

7

,

 

f

a

l

s

e

]

}




 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

v

 

i

n

 

t

h

i

s

.

v

a

r

s

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

t

e

m

p

 

=

 

t

h

i

s

.

v

a

r

s

[

v

]




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

a

r

s

[

v

]

 

=

 

t

h

i

s

.

h

t

m

l

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

`

#

d

e

t

a

i

l

-

v

i

e

w

 

t

r

:

n

t

h

-

c

h

i

l

d

(

$

{

(

t

e

m

p

[

1

]

)

?

`

$

{

t

e

m

p

[

0

]

}

)

 

t

d

`

:

`

$

{

t

e

m

p

[

0

]

}

)

 

t

d

 

a

`

}

`

)




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

a

r

s

[

v

]

 

=

 

(

t

e

m

p

[

1

]

)

 

?

 

t

h

i

s

.

v

a

r

s

[

v

]

.

i

n

n

e

r

T

e

x

t

.

t

r

i

m

(

)

:

 

(

t

h

i

s

.

v

a

r

s

[

v

]

 

=

=

 

n

u

l

l

)

 

?

 

f

a

l

s

e

:

 

t

h

i

s

.

v

a

r

s

[

v

]

.

g

e

t

A

t

t

r

i

b

u

t

e

(

"

h

r

e

f

"

)




 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

 

=

 

t

h

i

s

.

g

e

t

_

t

y

p

e

(

)




 

 

 

 

}







 

 

 

 

o

n

e

_

c

h

e

c

k

(

n

a

m

e

)

 

{







 

 

 

 

 

 

 

 

l

e

t

 

i

t

e

m

_

t

a

b

l

e

 

=

 

t

h

i

s

.

h

t

m

l

.

q

u

e

r

y

S

e

l

e

c

t

o

r

A

l

l

(

"

#

r

e

c

e

i

p

t

-

i

t

e

m

s

 

.

i

t

e

m

s

.

t

a

b

l

e

 

t

b

o

d

y

 

t

r

"

)




 

 

 

 

 

 

 

 

l

e

t

 

i

t

e

m

_

t

a

b

l

e

_

s

i

z

e

 

=

 

i

t

e

m

_

t

a

b

l

e

.

l

e

n

g

t

h




 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

i

f

 

(

i

t

e

m

_

t

a

b

l

e

_

s

i

z

e

 

=

=

 

1

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

i

t

e

m

_

n

a

m

e

 

=

 

i

t

e

m

_

t

a

b

l

e

[

0

]

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

"

t

d

:

n

t

h

-

c

h

i

l

d

(

2

)

"

)

.

i

n

n

e

r

T

e

x

t




 

 

 

 

 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

(

i

t

e

m

_

n

a

m

e

 

=

=

=

 

n

a

m

e

)




 

 

 

 

 

 

 

 

}

 

r

e

t

u

r

n

 

f

a

l

s

e




 

 

 

 

 

 

 

 




 

 

 

 

}







 

 

 

 

c

h

e

c

k

(

a

r

g

)

 

{







 

 

 

 

 

 

 

 

i

f

 

(

a

r

g

[

"

t

y

p

e

"

]

 

=

=

 

1

)

 

{

r

e

t

u

r

n

 

(

O

b

j

e

c

t

.

k

e

y

s

(

a

r

g

[

"

t

e

m

p

l

a

t

e

"

]

[

a

r

g

[

"

p

a

r

t

"

]

]

[

2

]

)

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

v

a

r

s

[

"

t

r

a

f

f

i

c

"

]

)

)

}




 

 

 

 

 

 

 

 

i

f

 

(

a

r

g

[

"

t

y

p

e

"

]

 

=

=

 

2

)

 

{

r

e

t

u

r

n

 

t

h

i

s

.

o

n

e

_

c

h

e

c

k

(

a

r

g

[

"

a

r

g

u

m

e

n

t

"

]

)

}




 

 

 

 

 

 

 

 

i

f

 

(

a

r

g

[

"

t

y

p

e

"

]

 

=

=

 

3

)

 

{

r

e

t

u

r

n

 

(

!

a

r

g

[

"

r

e

t

u

r

n

"

]

)

}







 

 

 

 

}

 







 

 

 

 

g

e

t

_

t

y

p

e

(

)

 

{







 

 

 

 

 

 

 

 

O

b

j

e

c

t

.

k

e

y

s

(

t

h

i

s

.

t

e

m

p

)

.

f

o

r

E

a

c

h

(

e

l

e

m

e

n

t

 

=

>

 

{







 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

f

g

 

=

 

t

h

i

s

.

t

e

m

p

[

e

l

e

m

e

n

t

]

[

1

]




 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

s

e

n

d

 

=

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

"

t

y

p

e

"

:

 

 

 

 

 

 

 

c

f

g

[

0

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

"

a

r

g

u

m

e

n

t

"

:

 

 

 

c

f

g

[

1

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

"

p

a

r

t

"

:

 

 

 

 

 

 

 

e

l

e

m

e

n

t

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

"

t

e

m

p

l

a

t

e

"

:

 

 

 

t

h

i

s

.

t

e

m

p

,




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

"

r

e

t

u

r

n

"

:

 

 

 

 

 

t

h

i

s

.

b

a

c

k




 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 







 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

l

u

v

[

e

l

e

m

e

n

t

]

 

=

 

t

h

i

s

.

c

h

e

c

k

(

s

e

n

d

)







 

 

 

 

 

 

 

 

}

)

;

 

t

h

i

s

.

c

l

u

v

[

"

e

m

p

t

y

"

]

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

l

e

t

 

e

n

t

e

r

 

=

 

t

h

i

s

.

c

o

n

f

i

g

[

"

e

n

t

e

r

"

]

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

v

a

r

s

[

"

t

r

a

f

f

i

c

"

]

)




 

 

 

 

 

 

 

 

l

e

t

 

d

c

 

=

 

f

a

l

s

e







 

 

 

 

 

 

 

 

l

e

t

 

s

e

n

d

 

=

 

[

e

n

t

e

r

,

 

d

c

,

 

t

h

i

s

.

c

o

n

f

i

g

[

"

p

o

i

n

t

s

"

]

[

t

h

i

s

.

v

a

r

s

[

"

s

h

o

p

"

]

]

]







 

 

 

 

 

 

 

 

l

e

t

 

e

n

d

_

r

 

=

 

(

e

l

)

 

=

>

 

{

i

f

 

(

t

h

i

s

.

c

l

u

v

[

e

l

]

)

 

{

r

e

t

u

r

n

 

[

e

l

,

 

s

e

n

d

]

}

 

e

l

s

e

 

r

e

t

u

r

n

 

f

a

l

s

e

}




 

 

 

 

 

 

 

 

l

e

t

 

a

l

l

_

t

e

m

p

s

 

=

 

 

 

 

 

O

b

j

e

c

t

.

k

e

y

s

(

t

h

i

s

.

t

e

m

p

)




 

 

 

 

 

 

 

 

l

e

t

 

n

o

_

b

u

y

e

r

 

 

=

 

 

 

 

 

t

h

i

s

.

c

o

n

f

i

g

[

"

n

o

_

b

u

y

e

r

"

]







 

 

 

 

 

 

 

 

l

e

t

 

r

e

s

u

l

t

 

=

 

f

a

l

s

e







 

 

 

 

 

 

 

 

a

l

l

_

t

e

m

p

s

.

f

i

l

t

e

r

(

x

 

=

>

 

!

n

o

_

b

u

y

e

r

.

i

n

c

l

u

d

e

s

(

x

)

)

.

f

o

r

E

a

c

h

(

x

 

=

>

 

{

l

e

t

 

s

 

=

 

e

n

d

_

r

(

x

)

;

 

i

f

 

(

s

)

 

{

r

e

s

u

l

t

 

=

 

s

}

}

)

;




 

 

 

 

 

 

 

 

n

o

_

b

u

y

e

r

.

f

o

r

E

a

c

h

(

x

 

=

>

 

{

l

e

t

 

s

 

=

 

e

n

d

_

r

(

x

)

;

 

i

f

 

(

s

)

 

{

r

e

s

u

l

t

 

=

 

s

}

}

)

;







 

 

 

 

 

 

 

 

i

f

 

(

!

r

e

s

u

l

t

)

 

{

r

e

s

u

l

t

 

=

 

"

e

m

p

t

y

"

}







 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

r

e

s

u

l

t







 

 

 

 

}




}




/

/

 

К

Л

А

С

С

 

T

A

B

L

E

S

 

П

Р

Е

Д

Н

А

З

Н

А

Ч

Е

Н

 

Д

Л

Я

 

Ф

О

Р

М

И

Р

О

В

А

Н

И

Я

 

М

А

С

С

И

В

А

 

Д

А

Н

Н

Ы

Х

 

И

З

 

Т

А

Б

Л

И

Ц




c

l

a

s

s

 

T

a

b

l

e

s

 

{







 

 

 

 

/

/

 

П

О

Д

Г

О

Т

О

В

К

А

 

П

Е

Р

Е

М

Е

Н

Н

Ы

Х

 

К

 

Э

К

С

П

Л

О

У

Т

А

Ц

И

И




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

s

e

t

t

i

n

g

s

,

 

h

t

m

l

)

 

{







 

 

 

 

 

 

 

 

t

h

i

s

.

c

f

g

 

 

 

=

 

 

 

s

e

t

t

i

n

g

s




 

 

 

 

 

 

 

 

t

h

i

s

.

s

e

l

 

 

 

=

 

 

 

t

h

i

s

.

c

f

g

[

"

s

e

l

e

c

t

o

r

s

"

]

[

"

t

a

b

l

e

s

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

h

t

m

l

 

 

=

 

 

 

h

t

m

l







 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

u

n

t

_

o

f

_

i

t

e

m

s

_

o

n

_

o

n

e

_

p

a

g

e

 

=

 

1

0

 

/

/

 

п

р

е

д

м

е

т

о

в

 

н

а

 

с

т

р

а

н

и

ц

е







 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

u

n

t

_

o

f

_

i

t

e

m

s

 

=

 

1

 

/

/

 

К

О

Л

И

Ч

Е

С

Т

В

О

 

П

Р

Е

Д

М

Е

Т

О

В

 

(

П

О

-

У

М

О

Л

Ч

А

Н

И

Ю

)




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

u

n

t

_

o

f

_

p

a

g

e

s

 

=

 

1

 

/

/

 

К

О

Л

И

Ч

Е

С

Т

В

О

 

С

Т

Р

А

Н

И

Ц

 

 

 

(

П

О

-

У

М

О

Л

Ч

А

Н

И

Ю

)







 

 

 

 

}







 

 

 

 

/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

Т

А

Б

Л

И

Ц

Ы

 

П

О

 

С

Е

Л

Е

К

Т

О

Р

У




 

 

 

 

a

s

y

n

c

 

s

e

t

_

t

a

b

l

e

(

n

a

m

e

,

 

f

i

n

d

a

l

l

=

f

a

l

s

e

)

 

{

 




 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

i

f

 

(

f

i

n

d

a

l

l

)

 

{







 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

О

П

Ы

Т

К

А

 

П

О

Л

У

Ч

Е

Н

И

Я

 

В

С

Е

Х

 

С

Т

Р

А

Н

И

Ц

 

С

 

Т

О

В

А

Р

А

М

И




 

 

 

 

 

 

 

 

 

 

 

 

t

r

y

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

o

u

n

t

 

=

 

a

w

a

i

t

 

t

h

i

s

.

s

e

t

_

t

a

b

l

e

(

"

c

o

u

n

"

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

u

n

t

_

o

f

_

i

t

e

m

s

 

=

 

c

o

u

n

t

.

i

n

n

e

r

H

T

M

L

.

t

r

i

m

(

)

.

s

p

l

i

t

(

"

 

"

)

[

3

]

.

r

e

p

l

a

c

e

(

"

.

"

,

 

'

'

)

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

u

n

t

_

o

f

_

p

a

g

e

s

 

=

 

M

a

t

h

.

c

e

i

l

(

t

h

i

s

.

c

o

u

n

t

_

o

f

_

i

t

e

m

s

 

/

 

t

h

i

s

.

c

o

u

n

t

_

o

f

_

i

t

e

m

s

_

o

n

_

o

n

e

_

p

a

g

e

)




 

 

 

 

 

 

 

 

 

 

 

 

}

 

c

a

t

c

h

 

{

 

t

h

i

s

.

c

o

u

n

t

_

o

f

_

p

a

g

e

s

 

=

 

1

 

}




 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

Е

С

Л

И

 

С

Т

Р

А

Н

И

Ц

 

Б

О

Л

Ь

Ш

Е

 

1

 

С

О

З

Д

А

Е

М

 

Б

У

Ф

Е

Р

 

О

Б

Ъ

Е

Д

Е

Н

Я

Е

М

 

Т

О

В

А

Р

Ы

 

В

 

О

Д

И

Н

 

Э

Л

Е

М

Е

Н

Т

 

И

 

П

Р

О

В

О

Д

И

М

 

П

О

И

С

К

 

П

О

 

С

Е

Л

Е

К

Т

О

Р

У




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

И

Н

А

Ч

Е

 

П

Р

О

С

Т

О

 

П

Р

О

В

О

Д

И

М

 

П

О

И

С

К

 

П

О

 

С

Е

Л

Е

К

Т

О

Р

У




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

c

o

u

n

t

_

o

f

_

p

a

g

e

s

 

>

 

1

)

 

{







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

b

u

f

f

e

r

 

=

 

[

]







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

i

 

=

 

t

h

i

s

.

c

o

u

n

t

_

o

f

_

p

a

g

e

s

;

 

i

 

>

=

 

1

;

 

i

-

-

)

 

{







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

b

i

l

l

_

i

d

 

=

 

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f

.

s

p

l

i

t

(

"

/

"

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

b

i

l

l

_

i

d

 

=

 

b

i

l

l

_

i

d

[

b

i

l

l

_

i

d

.

l

e

n

g

t

h

 

-

 

1

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

u

r

l

 

=

 

`

h

t

t

p

s

:

/

/

t

l

.

m

y

v

i

r

t

u

a

l

p

o

s

.

r

u

/

c

o

n

s

o

l

e

/

s

a

l

e

s

/

v

i

e

w

/

a

j

a

x

/

r

e

c

e

i

p

t

-

i

t

e

m

s

/

i

d

/

$

{

b

i

l

l

_

i

d

}

/

p

a

g

e

/

$

{

i

}

`




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

p

a

g

e

 

=

 

a

w

a

i

t

 

g

e

t

_

p

a

g

e

(

u

r

l

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

t

e

m

p

 

=

 

d

o

c

u

m

e

n

t

.

c

r

e

a

t

e

E

l

e

m

e

n

t

(

"

d

i

v

"

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

e

m

p

.

i

n

n

e

r

H

T

M

L

 

=

 

p

a

g

e




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

b

u

f

f

e

r

.

p

u

s

h

(

t

e

m

p

.

q

u

e

r

y

S

e

l

e

c

t

o

r

A

l

l

(

t

h

i

s

.

s

e

l

[

n

a

m

e

]

)

)

;







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

r

e

s

u

l

t

 

=

 

d

o

c

u

m

e

n

t

.

c

r

e

a

t

e

E

l

e

m

e

n

t

(

"

d

i

v

"

)







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

b

u

f

f

e

r

.

f

o

r

E

a

c

h

(

(

p

a

g

e

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

p

a

g

e

.

f

o

r

E

a

c

h

(

(

e

)

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

r

e

s

u

l

t

.

a

p

p

e

n

d

C

h

i

l

d

(

e

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

)

 







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

r

e

s

u

l

t

.

q

u

e

r

y

S

e

l

e

c

t

o

r

A

l

l

(

"

d

i

v

 

>

 

*

"

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{

r

e

t

u

r

n

 

t

h

i

s

.

h

t

m

l

.

q

u

e

r

y

S

e

l

e

c

t

o

r

A

l

l

(

t

h

i

s

.

s

e

l

[

n

a

m

e

]

)

}




 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{

r

e

t

u

r

n

 

t

h

i

s

.

h

t

m

l

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

t

h

i

s

.

s

e

l

[

n

a

m

e

]

)

}




 

 

 

 

}







 

 

 

 

/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

В

С

Е

Х

 

Т

А

Б

Л

И

Ц

 

П

О

 

С

Е

Л

Е

К

Т

О

Р

У

 

И

 

И

Х

 

С

О

Р

Т

И

Р

О

В

К

А




 

 

 

 

a

s

y

n

c

 

g

e

t

_

a

l

l

(

)

 

{







 

 

 

 

 

 

 

 

t

h

i

s

.

m

b

a

s

e

 

 

=

 

 

t

h

i

s

.

s

e

t

_

t

a

b

l

e

(

"

m

a

i

n

"

)




 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

 

 

=

 

 

t

h

i

s

.

s

e

t

_

t

a

b

l

e

(

"

m

o

n

e

"

)




 

 

 

 

 

 

 

 

t

h

i

s

.

s

a

l

e

s

 

 

=

 

 

t

h

i

s

.

s

e

t

_

t

a

b

l

e

(

"

s

a

l

e

"

)




 

 

 

 

 

 

 

 

t

h

i

s

.

i

t

e

m

s

 

 

=

 

 

t

h

i

s

.

s

e

t

_

t

a

b

l

e

(

"

i

t

e

m

"

,

 

t

r

u

e

)







 

 

 

 

 

 

 

 

l

e

t

 

b

 

 

=

 

n

e

w

 

 

B

a

s

e

(

t

h

i

s

.

m

b

a

s

e

,

 

t

h

i

s

.

c

f

g

)




 

 

 

 

 

 

 

 

l

e

t

 

m

 

 

=

 

n

e

w

 

M

o

n

e

y

(

t

h

i

s

.

m

o

n

e

y

,

 

t

h

i

s

.

c

f

g

)




 

 

 

 

 

 

 

 

l

e

t

 

i

t

 

=

 

n

e

w

 

I

t

e

m

s

(

t

h

i

s

.

i

t

e

m

s

,

 

t

h

i

s

.

c

f

g

)







 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

t

h

i

s

.

C

l

a

s

s

V

a

r

i

a

b

l

e

s

(

[




 

 

 

 

 

 

 

 

 

 

 

 

a

w

a

i

t

 

b

.

r

u

n

(

)

,

 




 

 

 

 

 

 

 

 

 

 

 

 

a

w

a

i

t

 

m

.

r

u

n

(

)

,

 

 




 

 

 

 

 

 

 

 

 

 

 

 

a

w

a

i

t

 

i

t

.

r

u

n

(

)




 

 

 

 

 

 

 

 

]

)




 

 

 

 

}







 

 

 

 

/

/

 

О

Б

Р

А

Б

О

Т

К

А

 

С

Т

Р

О

К

 

В

 

О

Б

Ъ

Е

К

Т

Ы

 

Д

Л

Я

 

Д

А

Л

Ь

Н

Е

Й

Ш

Е

Й

 

Р

А

Б

О

Т

Ы

 

С

 

Н

И

М

И




 

 

 

 

C

l

a

s

s

V

a

r

i

a

b

l

e

s

(

t

a

b

l

e

s

)

 

{







 

 

 

 

 

 

 

 

/

/

 

П

О

Д

М

Е

Н

А

 

С

Т

Р

О

К

И

 

К

О

М

М

Е

Н

Т

А

Р

И

Я

 

-

 

О

Б

Ъ

Е

К

Т

О

М

 

К

О

М

М

Е

Н

Т

А

Р

И

Я




 

 

 

 

 

 

 

 

l

e

t

 

c

o

m

m

e

n

t

 

=

 

n

e

w

 

C

o

m

m

e

n

t

(

{




 

 

 

 

 

 

 

 

 

 

 

 

t

a

b

l

e

:

 

t

a

b

l

e

s

[

0

]

[

"

c

o

m

m

e

n

t

"

]

,

 

c

o

n

f

i

g

:

 

t

h

i

s

.

c

f

g




 

 

 

 

 

 

 

 

}

)

;

 

t

a

b

l

e

s

[

0

]

[

"

c

o

m

m

e

n

t

"

]

 

=

 

c

o

m

m

e

n

t

.

o

b

j

e

c

t







 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

t

a

b

l

e

s




 

 

 

 

}




}



















/

/

 

Б

А

З

О

В

Ы

Й

 

Ш

А

Б

Л

О

Н

 

(

И

М

Е

Н

А

,

 

Д

А

Т

А

 

И

 

Д

Р

У

Г

О

Е

)




c

l

a

s

s

 

B

a

s

e

 

{







 

 

 

 

/

/

 

Н

А

С

Т

Р

О

Й

К

А

 

Н

А

Ч

А

Л

Ь

Н

Ы

Х

 

Н

А

С

Т

Р

О

Е

К




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

h

t

m

l

,

 

s

e

t

t

i

n

g

s

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

t

a

b

l

e

 

=

 

h

t

m

l

;

 

t

h

i

s

.

c

f

g

 

=

 

s

e

t

t

i

n

g

s

;




 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

t

 

=

 

t

h

i

s

.

c

f

g

[

"

d

e

t

a

i

l

s

"

]

;




 

 

 

 

}







 

 

 

 

/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

К

О

Н

К

Р

Е

Т

Н

О

Й

 

И

Н

Ф

О

Р

М

А

Ц

И

И

 

И

З

 

Т

А

Б

Л

И

Ц

Ы

 

П

О

 

С

Е

Л

Е

К

Т

О

Р

У




 

 

 

 

a

s

y

n

c

 

d

e

t

a

i

l

_

t

a

b

l

e

(

n

,

 

t

o

,

 

i

n

n

e

r

=

t

r

u

e

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

t

a

b

l

e

 

=

 

a

w

a

i

t

 

t

h

i

s

.

t

a

b

l

e




 

 

 

 

 

 

 

 

l

e

t

 

b

o

d

y

 

=

 

t

a

b

l

e

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

`

t

r

:

n

t

h

-

c

h

i

l

d

(

$

{

n

}

)

 

$

{

t

o

}

`

)




 

 

 

 

 

 

 

 

i

f

 

(

i

n

n

e

r

)

 

{

r

e

t

u

r

n

 

b

o

d

y

.

i

n

n

e

r

H

T

M

L

}

 

e

l

s

e

 

{

r

e

t

u

r

n

 

b

o

d

y

.

c

l

a

s

s

L

i

s

t

.

c

o

n

t

a

i

n

s

(

"

c

s

s

D

i

s

p

l

a

y

N

o

n

e

"

)

}

 




 

 

 

 

}







 

 

 

 

/

/

 

С

О

Р

Т

И

Р

О

В

К

А

 

П

О

Л

У

Ч

Е

Н

Н

О

Й

 

И

Н

Ф

О

Р

М

А

Ц

И

И




 

 

 

 

a

s

y

n

c

 

s

o

r

t

e

d

(

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

s

e

n

d

 

=

 

{

}







 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

k

e

y

 

i

n

 

t

h

i

s

.

d

e

t

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

s

e

n

d

[

k

e

y

]

 

=

 

a

w

a

i

t

 

t

h

i

s

.

d

e

t

a

i

l

_

t

a

b

l

e

(




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

t

[

k

e

y

]

[

0

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

t

[

k

e

y

]

[

1

]

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

t

[

k

e

y

]

[

2

]




 

 

 

 

 

 

 

 

)

}

;

 

r

e

t

u

r

n

 

s

e

n

d

;




 

 

 

 

}







 

 

 

 

a

s

y

n

c

 

r

u

n

(

)

 

{




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

a

w

a

i

t

 

t

h

i

s

.

s

o

r

t

e

d

(

)




 

 

 

 

}




}







/

/

 

К

Л

А

С

С

 

П

О

Л

У

Ч

Е

Н

И

Я

 

И

Н

Ф

О

Р

М

А

Ц

И

И

 

О

 

Д

Е

Н

Е

Ж

Н

О

Й

 

Ч

А

С

Т

И

 

Ч

Е

К

А




c

l

a

s

s

 

M

o

n

e

y

 

{







 

 

 

 

/

/

 

И

Н

Ф

О

Р

М

А

Ц

И

Я

 

К

О

Т

О

Р

А

Я

 

П

О

С

Т

У

П

А

Е

Т

 

В

 

К

Л

А

С

С




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

h

t

m

l

,

 

s

e

t

t

i

n

g

s

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

t

a

b

l

e

 

 

=

 

h

t

m

l

 




 

 

 

 

 

 

 

 

t

h

i

s

.

c

f

g

 

 

 

 

=

 

s

e

t

t

i

n

g

s




 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

 

 

 

=

 

{

}




 

 

 

 

 

 

 

 

t

h

i

s

.

r

u

n

(

)




 

 

 

 

}







 

 

 

 

/

/

 

П

А

Р

С

И

Т

 

К

А

Ж

Д

Ы

Й

 

Т

И

П

 

О

П

Л

А

Т

Ы




 

 

 

 

a

s

y

n

c

 

g

e

n

e

r

a

t

e

(

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

c

a

s

h

 

 

 

 

=

 

a

w

a

i

t

 

t

h

i

s

.

g

t

a

b

l

e

(

1

)




 

 

 

 

 

 

 

 

l

e

t

 

n

o

_

c

a

s

h

 

=

 

a

w

a

i

t

 

t

h

i

s

.

g

t

a

b

l

e

(

2

)




 

 

 

 

 

 

 

 

l

e

t

 

s

b

p

 

 

 

 

 

=

 

a

w

a

i

t

 

t

h

i

s

.

g

t

a

b

l

e

(

3

)




 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

 

=

 

{

c

a

s

h

:

 

c

a

s

h

,

 

n

o

_

c

a

s

h

:

 

n

o

_

c

a

s

h

,

 

s

b

p

:

 

s

b

p

}




 

 

 

 

}







 

 

 

 

/

/

 

Ф

У

Н

К

Ц

И

Я

 

П

А

Р

С

И

Н

Г

А

 

Т

И

П

А

 

О

П

Л

А

Т

Ы

 

И

З

 

Т

А

Б

Л

И

Ц

Ы




 

 

 

 

a

s

y

n

c

 

g

t

a

b

l

e

(

n

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

t

a

b

l

e

 

=

 

a

w

a

i

t

 

t

h

i

s

.

t

a

b

l

e




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

p

a

r

s

e

F

l

o

a

t

(

t

a

b

l

e

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

`

t

r

:

n

t

h

-

c

h

i

l

d

(

$

{

n

}

)

 

t

d

`

)




 

 

 

 

 

 

 

 

 

 

 

 

.

i

n

n

e

r

H

T

M

L

.

r

e

p

l

a

c

e

(

"

 

"

,

 

"

"

)

.

r

e

p

l

a

c

e

(

"

р

у

б

.

"

,

 

"

"

)

)

.

t

o

F

i

x

e

d

(

2

)




 

 

 

 

}







 

 

 

 

/

/

 

С

Р

А

В

Н

Е

Н

И

Е

 

С

 

Ш

А

Б

Л

О

Н

О

М




 

 

 

 

a

s

y

n

c

 

g

e

t

(

)

 

{




 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

k

e

y

 

i

n

 

t

h

i

s

.

t

e

m

p

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

t

e

m

p

[

k

e

y

]

=

=

"

0

"

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

[

k

e

y

]

=

-

1




 

 

 

 

 

 

 

 

 

 

 

 

}

}

 

r

e

t

u

r

n

 

t

h

i

s

.

t

e

m

p




 

 

 

 

}







 

 

 

 

/

/

 

З

А

П

У

С

К




 

 

 

 

a

s

y

n

c

 

r

u

n

(

)

 

{




 

 

 

 

 

 

 

 

a

w

a

i

t

 

t

h

i

s

.

g

e

n

e

r

a

t

e

(

)




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

a

w

a

i

t

 

t

h

i

s

.

g

e

t

(

)




 

 

 

 

}




}




/

/

 

И

Н

Ф

О

Р

М

А

Ц

И

Я

 

О

 

Т

О

В

А

Р

Е




c

l

a

s

s

 

I

t

e

m

 

{




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

i

s

_

g

o

o

d

 

=

 

 

u

n

d

e

f

i

n

e

d




 

 

 

 

 

 

 

 

t

h

i

s

.

n

a

m

e

 

 

 

 

=

 

 

u

n

d

e

f

i

n

e

d




 

 

 

 

 

 

 

 

t

h

i

s

.

a

r

t

 

 

 

 

 

=

 

 

u

n

d

e

f

i

n

e

d




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

u

n

t

 

 

 

=

 

 

u

n

d

e

f

i

n

e

d




 

 

 

 

}




}







/

/

 

К

Л

А

С

С

 

Н

У

М

Е

Р

О

В

А

Н

И

Я

 

И

 

Н

А

С

Т

Р

О

Й

К

И

 

Т

О

В

А

Р

О

В




c

l

a

s

s

 

I

t

e

m

s

 

{







 

 

 

 

/

/

 

Н

А

Ч

А

Л

Ь

Н

А

Я

 

Н

А

С

Т

Р

О

Й

К

А




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

h

t

m

l

_

l

i

s

t

,

 

s

e

t

t

i

n

g

s

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

i

t

e

m

s

_

l

i

s

t

 

=

 

 

 

h

t

m

l

_

l

i

s

t




 

 

 

 

 

 

 

 

t

h

i

s

.

c

f

g

 

 

 

 

 

 

 

 

=

 

 

 

 

s

e

t

t

i

n

g

s




 

 

 

 

 

 

 

 

t

h

i

s

.

i

t

e

m

s

 

 

 

 

 

 

=

 

 

 

 

 

 

 

 

 

 

[

]




 

 

 

 

}







 

 

 

 

a

s

y

n

c

 

r

u

n

(

)

 

{




 

 

 

 

 

 

 

 

a

w

a

i

t

 

t

h

i

s

.

l

o

o

p

(

)

 




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

t

h

i

s

.

i

t

e

m

s

 




 

 

 

 

}







 

 

 

 

/

/

 

П

Р

О

В

Е

Р

К

А

 

А

Р

Т

И

К

У

Л

А




 

 

 

 

i

s

N

u

m

e

r

i

c

(

n

u

m

)

 

{

r

e

t

u

r

n

 

!

i

s

N

a

N

(

n

u

m

)

}







 

 

 

 

/

/

 

З

А

Л

У

П

И

Р

О

В

А

Н

Н

О

Е

 

П

О

Л

У

Ч

Е

Н

И

Е

 

П

Р

О

Д

А

Н

Н

Х

 

Т

О

В

А

Р

О

В




 

 

 

 

a

s

y

n

c

 

l

o

o

p

(

m

a

x

_

c

o

m

m

e

n

t

_

s

i

z

e

=

2

5

)

 

{







 

 

 

 

 

 

 

 

l

e

t

 

i

t

e

m

s

_

l

i

s

t

 

=

 

a

w

a

i

t

 

t

h

i

s

.

i

t

e

m

s

_

l

i

s

t




 

 

 

 

 

 

 

 

i

t

e

m

s

_

l

i

s

t

.

f

o

r

E

a

c

h

(

(

i

t

e

m

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

o

b

j

 

=

 

n

e

w

 

I

t

e

m

(

)




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

a

l

l

 

=

 

i

t

e

m

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

"

t

d

:

n

t

h

-

c

h

i

l

d

(

2

)

"

)

.

i

n

n

e

r

H

T

M

L

 




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

a

r

t

 

=

 

a

l

l

.

s

l

i

c

e

(

0

,

 

a

l

l

.

i

n

d

e

x

O

f

(

'

 

'

)

)




 

 

 

 

 

 

 

 

 

 

 

 

o

b

j

.

c

o

u

n

t

 

=

 

i

t

e

m

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

"

t

d

:

n

t

h

-

c

h

i

l

d

(

3

)

"

)

.

i

n

n

e

r

H

T

M

L

.

s

p

l

i

t

(

"

.

"

)

[

0

]







 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

i

s

N

u

m

e

r

i

c

(

a

r

t

)

)

 

{







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

b

j

.

n

a

m

e

 

=

 

 

 

 

 

 

 

 

 

 

 

a

l

l

.

s

l

i

c

e

(

a

l

l

.

i

n

d

e

x

O

f

(

'

 

'

)

,

 

a

l

l

.

l

e

n

g

t

h

)

 

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

o

b

j

.

n

a

m

e

.

l

e

n

g

t

h

 

>

 

m

a

x

_

c

o

m

m

e

n

t

_

s

i

z

e

)

 

{

o

b

j

.

n

a

m

e

 

=

 

o

b

j

.

n

a

m

e

.

s

l

i

c

e

(

0

,

 

m

a

x

_

c

o

m

m

e

n

t

_

s

i

z

e

)

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

b

j

.

a

r

t

 

 

 

 

 

=

 

 

 

 

a

r

t




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

b

j

.

i

s

_

g

o

o

d

 

=

 

 

 

t

r

u

e







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

i

t

e

m

s

.

p

u

s

h

(

o

b

j

)







 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

b

j

.

i

s

_

g

o

o

d

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

b

j

.

n

a

m

e

 

 

 

 

=

 

 

 

a

l

l




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

b

j

.

a

r

t

 

 

 

 

 

=

 

 

 

"

0

"

 







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

i

t

e

m

s

.

p

u

s

h

(

o

b

j

)







 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}

)




 

 

 

 

}




}







/

/

 

К

Л

А

С

С

 

К

О

М

М

Е

Н

Т

А

Р

И

Я

 

В

С

Я

 

О

Б

Р

А

Б

О

Т

К

А

 

К

О

М

М

Е

Н

Т

А

Р

И

Я

 

Р

А

З

Б

И

Е

Н

И

Е

 

Е

Г

О

 




/

/

 

Н

А

 

П

О

Д

П

У

Н

К

Т

Ы

 

[

О

Б

Н

О

В

Л

Е

Н

О

 

0

9

.

0

1

.

2

0

2

5

]

 

И

С

П

Р

А

В

Л

Е

Н

А

 

О

Ш

И

Б

К

А

 

С

Б

Е

Р

Л

О

Г

И

С

Т

И

К

И




c

l

a

s

s

 

C

o

m

m

e

n

t

 

{







 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

b

a

s

e

)

 

{







 

 

 

 

 

 

 

 

/

/

 

Ф

О

Р

М

А

Т

И

Р

О

В

А

Н

И

Е

 

К

О

М

М

Е

Н

Т

А

Р

И

Я




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

m

m

e

n

t

_

r

a

w

 

=

 

b

a

s

e

[

"

t

a

b

l

e

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

m

m

e

n

t

_

f

o

r

m

a

t

t

e

d

 

=

 

t

h

i

s

.

f

o

r

m

a

t

C

o

m

m

e

n

t

(

)







 

 

 

 

 

 

 

 

/

/

 

О

Б

Р

Е

З

К

А

 

Н

А

С

Т

Р

О

Й

К

И




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

n

f

i

g

 

=

 

b

a

s

e

[

"

c

o

n

f

i

g

"

]

[

"

t

y

p

e

_

s

e

t

t

i

n

g

s

"

]







 

 

 

 

 

 

 

 

/

/

 

П

О

Д

Г

О

Т

О

В

К

А

 

Ш

А

Б

Л

О

Н

О

В




 

 

 

 

 

 

 

 

t

h

i

s

.

m

a

r

k

e

t

_

t

e

m

p

l

a

t

e

 

=

 

t

h

i

s

.

c

o

n

f

i

g

[

"

m

a

r

k

e

t

"

]

[

2

]




 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

b

i

l

e

_

t

e

m

p

l

a

t

e

 

=

 

t

h

i

s

.

c

o

n

f

i

g

[

"

m

o

b

i

l

e

"

]

[

2

]




 

 

 

 

 

 

 

 

t

h

i

s

.

a

l

l

_

t

e

m

p

l

a

t

e

s

 

=

 

O

b

j

e

c

t

.

a

s

s

i

g

n

(

{

}

,

 

t

h

i

s

.

m

a

r

k

e

t

_

t

e

m

p

l

a

t

e

,

 

t

h

i

s

.

m

o

b

i

l

e

_

t

e

m

p

l

a

t

e

)







 

 

 

 

 

 

 

 

t

h

i

s

.

o

b

j

e

c

t

 

=

 

{




 

 

 

 

 

 

 

 

 

 

 

 

c

a

r

r

i

e

r

_

n

u

m

b

e

r

:

 

"

"

,




 

 

 

 

 

 

 

 

 

 

 

 

c

a

r

r

i

e

r

_

t

y

p

e

:

 

 

 

"

"

,




 

 

 

 

 

 

 

 

 

 

 

 

o

t

h

e

r

:

 

 

 

 

 

 

 

 

 

 

"

"




 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

t

h

i

s

.

p

a

r

t

C

o

m

m

e

n

t

(

)







 

 

 

 

}







 

 

 

 

f

o

r

m

a

t

C

o

m

m

e

n

t

(

)

 

{




 

 

 

 

 

 

 

 

 

/

/

 

У

б

и

р

а

е

м

 

л

и

ш

н

и

е

 

п

р

о

б

е

л

ы

,

 

т

а

б

у

л

я

ц

и

ю

 

и

 

д

в

о

е

т

о

ч

и

е




 

 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

t

h

i

s

.

c

o

m

m

e

n

t

_

r

a

w

.

r

e

p

l

a

c

e

(

/

[

\

t

]

+

|

\

s

{

2

,

}

/

g

,

 

'

 

'

)

.

t

r

i

m

(

)

;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

}







 

 

 

 

p

a

r

t

C

o

m

m

e

n

t

(

)

 

{




 

 

 

 




 

 

 

 

 

 

 

 

/

/

 

Р

а

з

д

е

л

я

е

м

 

с

т

р

о

к

у

 

н

а

 

с

л

о

в

а




 

 

 

 

 

 

 

 

t

h

i

s

.

w

o

r

d

s

_

m

a

s

s

i

v

e

 

=

 

t

h

i

s

.

c

o

m

m

e

n

t

_

f

o

r

m

a

t

t

e

d

.

s

p

l

i

t

(

'

 

'

)

;







 

 

 

 

 

 

 

 

l

e

t

 

o

r

d

e

r

N

u

m

b

e

r

 

=

 

[

]

;




 

 

 

 

 

 

 

 

l

e

t

 

c

a

r

r

i

e

r

T

y

p

e

 

=

 

[

]

;




 

 

 

 

 

 

 

 

l

e

t

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

=

 

t

h

i

s

.

c

o

m

m

e

n

t

_

f

o

r

m

a

t

t

e

d

;

 

/

/

 

И

з

н

а

ч

а

л

ь

н

о

 

в

с

я

 

с

т

р

о

к

а

 

-

 

э

т

о

 

к

о

м

м

е

н

т

а

р

и

й







 

 

 

 

 

 

 

 

/

/

 

С

п

и

с

о

к

 

в

о

з

м

о

ж

н

ы

х

 

с

л

у

ж

б

 

д

о

с

т

а

в

к

и




 

 

 

 

 

 

 

 

c

o

n

s

t

 

d

e

l

i

v

e

r

y

S

e

r

v

i

c

e

s

 

=

 

O

b

j

e

c

t

.

k

e

y

s

(

t

h

i

s

.

a

l

l

_

t

e

m

p

l

a

t

e

s

)

.

m

a

p

(

s

e

r

v

i

c

e

 

=

>

 

s

e

r

v

i

c

e

.

t

o

L

o

w

e

r

C

a

s

e

(

)

)

;

 

/

/

 

П

р

и

в

о

д

и

м

 

к

 

н

и

ж

н

е

м

у

 

р

е

г

и

с

т

р

у







 

 

 

 

 

 

 

 

/

/

 

И

щ

е

м

 

т

и

п

 

с

л

у

ж

б

ы

 

д

о

с

т

а

в

к

и

 

и

 

с

о

б

и

р

а

е

м

 

и

х

 

в

 

м

а

с

с

и

в




 

 

 

 

 

 

 

 

f

o

r

 

(

c

o

n

s

t

 

s

e

r

v

i

c

e

 

o

f

 

d

e

l

i

v

e

r

y

S

e

r

v

i

c

e

s

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

s

e

r

v

i

c

e

L

o

w

e

r

 

=

 

s

e

r

v

i

c

e

.

t

o

L

o

w

e

r

C

a

s

e

(

)

;




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

i

n

d

e

x

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

t

o

L

o

w

e

r

C

a

s

e

(

)

.

i

n

d

e

x

O

f

(

s

e

r

v

i

c

e

L

o

w

e

r

)

;







 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

Е

с

л

и

 

с

л

у

ж

б

а

 

д

о

с

т

а

в

к

и

 

н

а

й

д

е

н

а




 

 

 

 

 

 

 

 

 

 

 

 

w

h

i

l

e

 

(

i

n

d

e

x

 

!

=

=

 

-

1

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

a

r

r

i

e

r

T

y

p

e

.

p

u

s

h

(

s

e

r

v

i

c

e

)

;

 

/

/

 

Д

о

б

а

в

л

я

е

м

 

с

л

у

ж

б

у

 

д

о

с

т

а

в

к

и

 

в

 

м

а

с

с

и

в




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

У

д

а

л

я

е

м

 

с

л

у

ж

б

у

 

д

о

с

т

а

в

к

и

 

и

з

 

к

о

м

м

е

н

т

а

р

и

я




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

s

l

i

c

e

(

0

,

 

i

n

d

e

x

)

 

+

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

s

l

i

c

e

(

i

n

d

e

x

 

+

 

s

e

r

v

i

c

e

.

l

e

n

g

t

h

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

И

щ

е

м

 

с

л

е

д

у

ю

щ

у

ю

 

с

л

у

ж

б

у

 

д

о

с

т

а

в

к

и




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

n

d

e

x

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

t

o

L

o

w

e

r

C

a

s

e

(

)

.

i

n

d

e

x

O

f

(

s

e

r

v

i

c

e

L

o

w

e

r

)

;




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

/

/

 

У

д

а

л

я

е

м

 

л

и

ш

н

и

е

 

п

р

о

б

е

л

ы




 

 

 

 

 

 

 

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

r

e

p

l

a

c

e

(

/

\

s

+

/

g

,

 

'

 

'

)

.

t

r

i

m

(

)

;







 

 

 

 

 

 

 

 

/

/

 

Р

а

з

д

е

л

я

е

м

 

о

с

т

а

в

ш

у

ю

с

я

 

с

т

р

о

к

у

 

н

а

 

с

л

о

в

а

 

д

л

я

 

п

о

и

с

к

а

 

н

о

м

е

р

а

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

t

h

i

s

.

w

o

r

d

s

_

m

a

s

s

i

v

e

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

s

p

l

i

t

(

'

 

'

)

;







 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

р

о

в

е

р

я

е

м

 

с

л

о

в

а

 

н

а

 

н

а

л

и

ч

и

е

 

д

в

о

е

т

о

ч

и

я

 

и

 

и

з

в

л

е

к

а

е

м

 

н

о

м

е

р

а




 

 

 

 

 

 

 

 

 

f

o

r

 

(

c

o

n

s

t

 

w

o

r

d

 

o

f

 

t

h

i

s

.

w

o

r

d

s

_

m

a

s

s

i

v

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

р

о

в

е

р

я

е

м

 

н

а

л

и

ч

и

е

 

д

в

о

е

т

о

ч

и

я




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

w

o

r

d

.

i

n

c

l

u

d

e

s

(

'

:

'

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

p

a

r

t

s

 

=

 

w

o

r

d

.

s

p

l

i

t

(

'

:

'

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

p

r

e

f

i

x

 

=

 

p

a

r

t

s

[

0

]

;

 

/

/

 

Ч

а

с

т

ь

 

д

о

 

д

в

о

е

т

о

ч

и

я




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

s

u

f

f

i

x

 

=

 

p

a

r

t

s

[

1

]

;

 

/

/

 

Ч

а

с

т

ь

 

п

о

с

л

е

 

д

в

о

е

т

о

ч

и

я







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

р

о

в

е

р

я

е

м

,

 

е

с

т

ь

 

л

и

 

в

 

ч

а

с

т

и

 

п

о

с

л

е

 

д

в

о

е

т

о

ч

и

я

 

м

и

н

и

м

у

м

 

5

 

ц

и

ф

р




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

/

\

d

{

5

,

}

/

.

t

e

s

t

(

s

u

f

f

i

x

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

r

d

e

r

N

u

m

b

e

r

.

p

u

s

h

(

w

o

r

d

)

;

 

/

/

 

С

о

х

р

а

н

я

е

м

 

ч

а

с

т

ь

 

д

о

 

д

в

о

е

т

о

ч

и

я

 

к

а

к

 

н

о

м

е

р

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

У

д

а

л

я

е

м

 

н

о

м

е

р

 

з

а

к

а

з

а

 

и

з

 

к

о

м

м

е

н

т

а

р

и

я




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

r

e

p

l

a

c

e

(

w

o

r

d

,

 

'

'

)

.

t

r

i

m

(

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

р

о

в

е

р

я

е

м

,

 

с

о

о

т

в

е

т

с

т

в

у

е

т

 

л

и

 

с

л

о

в

о

 

ф

о

р

м

а

т

у

 

н

о

м

е

р

а

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

 

 

 

 

e

l

s

e

 

i

f

 

(

/

^

[

A

-

Z

]

{

1

,

3

}

\

d

{

5

,

}

$

/

.

t

e

s

t

(

w

o

r

d

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

r

d

e

r

N

u

m

b

e

r

.

p

u

s

h

(

w

o

r

d

)

;

 

/

/

 

С

о

х

р

а

н

я

е

м

 

н

о

м

е

р

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

У

д

а

л

я

е

м

 

н

о

м

е

р

 

з

а

к

а

з

а

 

и

з

 

к

о

м

м

е

н

т

а

р

и

я




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

r

e

p

l

a

c

e

(

w

o

r

d

,

 

'

'

)

.

t

r

i

m

(

)

;




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

/

/

 

З

а

т

е

м

 

и

щ

е

м

 

о

б

ы

ч

н

ы

е

 

н

о

м

е

р

а

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

f

o

r

 

(

c

o

n

s

t

 

w

o

r

d

 

o

f

 

t

h

i

s

.

w

o

r

d

s

_

m

a

s

s

i

v

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

р

о

в

е

р

я

е

м

,

 

я

в

л

я

е

т

с

я

 

л

и

 

с

л

о

в

о

 

ч

и

с

л

о

м

 

и

 

д

л

и

н

а

 

б

о

л

ь

ш

е

 

4




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

/

^

\

d

+

$

/

.

t

e

s

t

(

w

o

r

d

)

 

&

&

 

w

o

r

d

.

l

e

n

g

t

h

 

>

 

4

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

o

r

d

e

r

N

u

m

b

e

r

.

p

u

s

h

(

w

o

r

d

)

;

 

/

/

 

С

о

х

р

а

н

я

е

м

 

н

о

м

е

р

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

У

д

а

л

я

е

м

 

н

о

м

е

р

 

з

а

к

а

з

а

 

и

з

 

к

о

м

м

е

н

т

а

р

и

я




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

r

e

p

l

a

c

e

(

w

o

r

d

,

 

'

'

)

.

t

r

i

m

(

)

;




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

/

/

 

У

д

а

л

я

е

м

 

л

и

ш

н

и

е

 

п

р

о

б

е

л

ы

 

п

о

с

л

е

 

у

д

а

л

е

н

и

я

 

н

о

м

е

р

а

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

=

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

.

r

e

p

l

a

c

e

(

/

\

s

+

/

g

,

 

'

 

'

)

.

t

r

i

m

(

)

;




 

 

 

 

 

 

 

 

o

r

d

e

r

N

u

m

b

e

r

 

=

 

o

r

d

e

r

N

u

m

b

e

r

.

m

a

p

(

e

 

=

>

 

e

.

r

e

p

l

a

c

e

(

/

:

/

g

,

 

'

 

'

)

)







 

 

 

 

 

 

 

 

i

f

 

(

o

r

d

e

r

N

u

m

b

e

r

 

 

 

 

 

=

=

 

[

]

)

 

{

o

r

d

e

r

N

u

m

b

e

r

 

 

 

 

 

=

 

f

a

l

s

e

}




 

 

 

 

 

 

 

 

i

f

 

(

c

a

r

r

i

e

r

T

y

p

e

 

 

 

 

 

=

=

 

[

]

)

 

{

c

a

r

r

i

e

r

T

y

p

e

 

 

 

 

 

=

 

f

a

l

s

e

}




 

 

 

 

 

 

 

 

i

f

 

(

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

 

=

=

 

[

]

)

 

{

c

o

u

r

i

e

r

C

o

m

m

e

n

t

 

 

=

 

f

a

l

s

e

}







 

 

 

 

 

 

 

 

t

h

i

s

.

o

b

j

e

c

t

 

=

 

{




 

 

 

 

 

 

 

 

 

 

 

 

f

u

l

l

:

 

t

h

i

s

.

c

o

m

m

e

n

t

_

f

o

r

m

a

t

t

e

d

,




 

 

 

 

 

 

 

 

 

 

 

 

o

r

d

e

r

N

u

m

b

e

r

:

 

o

r

d

e

r

N

u

m

b

e

r

,




 

 

 

 

 

 

 

 

 

 

 

 

c

a

r

r

i

e

r

T

y

p

e

:

 

c

a

r

r

i

e

r

T

y

p

e

,




 

 

 

 

 

 

 

 

 

 

 

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t

:

 

c

o

u

r

i

e

r

C

o

m

m

e

n

t




 

 

 

 

 

 

 

 

}

;

 




 

 

 

 

}




}




f

u

n

c

t

i

o

n

 

r

a

n

g

e

(

s

t

a

r

t

,

 

e

n

d

)

 

{




 

 

 

 

v

a

r

 

r

e

s

u

l

t

 

=

 

[

]

;

 




 

 

 

 

f

o

r

 

(

v

a

r

 

i

 

=

 

s

t

a

r

t

;

 

i

 

<

=

 

e

n

d

;

 

i

+

+

)

 

{

r

e

s

u

l

t

.

p

u

s

h

(

i

)

;

}




 

 

 

 

r

e

t

u

r

n

 

r

e

s

u

l

t

;




}




c

l

a

s

s

 

A

n

a

l

I

s

 

{




 

 

 

 

a

s

y

n

c

 

r

u

n

(

a

r

g

s

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

a

d

y

 

=

 

t

r

u

e




 

 

 

 

 

 

 

 

t

h

i

s

.

h

t

m

l

 

 

 

 

 

 

 

 

 

 

 

 

 

 

=

 

a

r

g

s

[

"

h

t

m

l

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

f

g

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

=

 

a

r

g

s

[

"

c

o

n

f

i

g

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

 

=

 

a

r

g

s

[

"

t

a

b

l

e

s

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

t

r

a

f

f

i

c

 

 

 

 

 

 

 

 

 

 

 

=

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

t

r

a

f

f

i

c

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

 

=

 

t

h

i

s

.

c

f

g

[

"

t

y

p

e

_

s

e

t

t

i

n

g

s

"

]

 




 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

 

 

 

=

 

 

A

r

r

a

y

(

t

h

i

s

.

c

f

g

[

"

m

a

i

n

"

]

[

"

s

i

z

e

"

]

)

.

f

i

l

l

(

-

1

)




 

 

 

 

 

 

 

 

t

h

i

s

.

p

t

 

 

 

=

 

 

t

h

i

s

.

c

f

g

[

"

p

a

s

s

i

v

e

_

t

e

m

p

l

a

t

e

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

f

 

 

=

 

 

t

h

i

s

.

c

f

g

[

"

d

e

f

a

u

l

t

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

s

 

 

 

 

=

 

a

r

g

s

[

"

t

e

m

p

l

a

t

e

s

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

a

l

l

_

l

i

s

t

 

=

 

a

r

g

s

[

"

t

e

m

p

l

a

t

e

s

"

]

[

"

a

l

l

_

l

i

s

t

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

n

y

 

 

 

 

 

=

 

a

r

g

s

[

"

d

e

n

y

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

t

m

 

 

=

 

 

a

r

g

s

[

"

d

a

t

e

t

i

m

e

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

t

s

 

 

=

 

 

{

}




 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

f

u

s

e

_

c

o

u

n

t

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 

O

b

j

e

c

t

.

k

e

y

s

(

t

h

i

s

.

t

e

m

p

)

.

f

o

r

E

a

c

h

(

e

l

e

m

e

n

t

 

=

>

 

{

t

h

i

s

.

t

s

[

"

t

"

 

+

 

e

l

e

m

e

n

t

.

r

e

p

l

a

c

e

(

"

_

"

,

 

"

"

)

]

 

=

 

t

h

i

s

.

t

e

m

p

[

e

l

e

m

e

n

t

]

}

)

;




 

 

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

_

o

b

j

e

c

t

 

=

 

n

e

w

 

T

y

p

e

(

t

h

i

s

.

h

t

m

l

,

 

t

h

i

s

.

c

f

g

,

 

t

h

i

s

.

t

e

m

p

,

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

r

e

t

u

r

n

"

]

)




 

 

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

 

=

 

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

_

o

b

j

e

c

t

.

t

y

p

e




 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]

 

=

=

 

"

r

e

t

u

r

n

"

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

p

a

g

e

 

=

 

a

w

a

i

t

 

t

h

i

s

.

g

e

t

_

r

e

t

u

r

n

_

b

i

l

l

(

)




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

 

=

 

n

e

w

 

T

y

p

e

(

p

a

g

e

,

 

t

h

i

s

.

c

f

g

,

 

t

h

i

s

.

t

e

m

p

,

 

t

r

u

e

)




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

a

r

s

 

=

 

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

.

v

a

r

s




 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

p

y

_

m

a

s

s

i

v

e

 

=

 

[

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

,

 

t

h

i

s

.

v

a

r

s

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

u

r

r

e

n

t

_

t

e

m

p

 

=

 

t

h

i

s

.

t

e

m

p

[

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]

]

[

0

]




 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

i

 

=

 

1

;

 

i

 

<

 

t

h

i

s

.

c

u

r

r

e

n

t

_

t

e

m

p

.

l

e

n

g

t

h

;

 

i

+

+

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

e

 

=

 

t

h

i

s

.

c

u

r

r

e

n

t

_

t

e

m

p

[

i

]




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

e

.

l

e

n

g

t

h

 

=

=

 

1

 

&

 

e

[

0

]

 

=

=

 

f

a

l

s

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

u

r

r

e

n

t

_

t

e

m

p

[

i

]

 

=

 

A

r

r

a

y

(

t

h

i

s

.

d

e

f

[

2

]

[

i

]

)

.

f

i

l

l

(

-

1

)




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

t

h

i

s

.

u

v

_

t

u

r

n

 

=

 

O

b

j

e

c

t

.

k

e

y

s

(

t

h

i

s

.

t

e

m

p

s

[

"

u

v

_

o

f

f

"

]

)

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

t

r

a

f

f

i

c

)

 




 

 

 

 

 

 

 

 

t

h

i

s

.

S

c

a

n

(

t

h

i

s

.

c

u

r

r

e

n

t

_

t

e

m

p

)

 




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

[

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

,

 

t

h

i

s

.

v

p

]




 

 

 

 

}




 

 

 

 

a

s

y

n

c

 

g

e

t

_

r

e

t

u

r

n

_

b

i

l

l

(

u

r

l

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

b

i

l

l

 

=

 

t

h

i

s

.

h

t

m

l

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

"

#

d

e

t

a

i

l

-

v

i

e

w

 

t

r

:

n

t

h

-

c

h

i

l

d

(

1

7

)

 

a

"

)




 

 

 

 

 

 

 

 

l

e

t

 

b

i

l

l

_

u

r

l

 

=

 

b

i

l

l

.

g

e

t

A

t

t

r

i

b

u

t

e

(

"

h

r

e

f

"

)




 

 

 

 

 

 

 

 

l

e

t

 

p

a

g

e

 

=

 

a

w

a

i

t

 

g

e

t

_

p

a

g

e

(

b

i

l

l

_

u

r

l

)




 

 

 

 

 

 

 

 

l

e

t

 

h

t

m

l

 

=

 

d

o

c

u

m

e

n

t

.

c

r

e

a

t

e

E

l

e

m

e

n

t

(

"

d

i

v

"

)




 

 

 

 

 

 

 

 

h

t

m

l

.

i

n

n

e

r

H

T

M

L

 

=

 

p

a

g

e




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

h

t

m

l




 

 

 

 

}

 




 

 

 

 

d

e

f

a

u

l

t

_

g

r

o

u

p

(

t

e

m

p

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

d

a

y

 

 

=

 

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

1

]

[

2

]




 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

i

=

0

;

 

i

<

t

e

m

p

.

l

e

n

g

t

h

;

 

i

+

+

)

 

{

i

f

 

(

t

e

m

p

[

i

]

 

=

=

 

f

a

l

s

e

)

 

{

t

e

m

p

[

i

]

 

=

 

A

r

r

a

y

(

t

h

i

s

.

d

e

f

[

2

]

[

i

]

)

.

f

i

l

l

(

-

1

)

}

}




 

 

 

 

 

 

 

 

i

f

 

(

(

t

e

m

p

.

l

e

n

g

t

h

 

=

=

 

1

)

 

&

 

(

t

e

m

p

[

0

]

 

=

=

 

"

d

e

f

a

u

l

t

"

)

)

 

 

{

t

e

m

p

 

=

 

A

r

r

a

y

(

t

h

i

s

.

d

e

f

[

2

]

[

0

]

)

.

f

i

l

l

(

t

r

u

e

)

}

 

 

 




 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

0

]

 

&

 

!

d

a

y

 

&

 

t

h

i

s

.

t

m

[

0

]

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

d

e

f

[

1

]

[

"

s

h

i

f

t

"

]

]

=

"

д

"

}

 




 

 

 

 

 

 

 

 

e

l

s

e

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

d

e

f

[

1

]

[

"

s

h

i

f

t

"

]

]

=

"

н

"

}




 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

0

]

 

&

 

d

a

y

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

d

e

f

[

1

]

[

"

s

h

i

f

t

"

]

]

=

"

д

"

}




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

d

e

f

[

0

]

[

"

d

a

t

e

"

]

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

d

e

f

[

1

]

[

"

d

a

t

e

"

]

]

 

=

 

t

h

i

s

.

t

m

[

1

]

}

 

/

/

 

д

а

т

а

 

 

 




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

d

e

f

[

0

]

[

"

t

i

m

e

"

]

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

d

e

f

[

1

]

[

"

t

i

m

e

"

]

]

 

=

 

t

h

i

s

.

t

m

[

2

]

}

 

/

/

 

в

р

е

м

я

 




 

 

 

 

 

 

 

 

l

e

t

 

s

e

l

l

e

r

 

=

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

s

e

l

l

e

r

"

]

.

t

r

i

m

(

)

.

s

p

l

i

t

(

"

 

"

)

.

f

i

l

t

e

r

(

(

e

)

 

=

>

 

e

 

!

=

 

"

-

.

"

)

.

j

o

i

n

(

"

 

"

)

.

r

e

p

l

a

c

e

(

/

\

s

+

/

g

,

 

'

 

'

)

.

t

r

i

m

(

)




 

 

 

 

 

 

 

 

l

e

t

 

s

e

l

l

e

r

_

h

a

s

h

 

=

 

b

t

o

a

(

u

n

e

s

c

a

p

e

(

e

n

c

o

d

e

U

R

I

C

o

m

p

o

n

e

n

t

(

s

e

l

l

e

r

)

)

)




 

 

 

 

 

 

 

 

i

f

 

(

O

b

j

e

c

t

.

k

e

y

s

(

(

t

h

i

s

.

c

f

g

[

"

e

n

a

m

e

s

"

]

)

)

.

i

n

c

l

u

d

e

s

(

s

e

l

l

e

r

_

h

a

s

h

)

)

 

s

e

l

l

e

r

 

=

 

d

e

c

o

d

e

U

R

I

C

o

m

p

o

n

e

n

t

(

e

s

c

a

p

e

(

a

t

o

b

(

t

h

i

s

.

c

f

g

[

"

e

n

a

m

e

s

"

]

[

s

e

l

l

e

r

_

h

a

s

h

]

)

)

)




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

d

e

f

[

0

]

[

"

n

a

m

e

"

]

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

d

e

f

[

1

]

[

"

n

a

m

e

"

]

]

 

=

 

s

e

l

l

e

r

}

 

/

/

 

и

м

я

 

п

р

о

д

а

в

ц

а




 

 

 

 

}




 

 

 

 

s

t

a

n

d

a

r

t

(

t

e

m

p

,

 

o

t

e

m

p

)

 

{




 

 

 

 

 

 

 

 

i

f

 

(

!

t

h

i

s

.

u

v

_

t

u

r

n

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

a

l

l

_

l

i

s

t

[

t

h

i

s

.

t

r

a

f

f

i

c

]

]

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

=

 

 

t

e

m

p

[

1

]

}

 

/

/

 

у

в

 

(

5

 

-

 

1

6

)




 

 

 

 

 

 

 

 

i

f

 

(

O

b

j

e

c

t

.

k

e

y

s

(

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

2

]

)

.

i

n

c

l

u

d

e

s

(

"

6

3

6

"

)

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

s

i

x

"

]

]

 

=

 

 

t

e

m

p

[

2

]

}

 

/

/

 

6

3

6

 

п

р

о

в

е

р

к

а

 

н

а

л

и

ч

и

я




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

u

v

_

t

u

r

n

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

o

r

d

e

r

"

]

]

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

=

 

o

t

e

m

p

[

0

]

}

 

/

/

 

у

ч

е

т

 

з

а

к

а

з

о

в




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

u

v

_

t

u

r

n

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

a

l

l

_

l

i

s

t

[

t

h

i

s

.

t

r

a

f

f

i

c

]

]

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

=

 

o

t

e

m

p

[

0

]

}

 

/

/

 

з

а

к

а

з

ы

 

2

2

-

2

3

 

с

а

м

о

в

ы

в

о

з

 

п

р

и

л

о

ж

е

н

и

е




 

 

 

 

}




 

 

 

 

e

n

t

e

r

_

g

r

o

u

p

(

t

e

m

p

,

 

o

t

e

m

p

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

e

n

t

e

r

"

]

]

 

=

 

t

e

m

p

[

0

]

 

 

/

/

 

в

х

о

д

 




 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

n

c

"

]

]

 

=

 

t

e

m

p

[

3

]

 

 

/

/

 

н

е

 

к

л

и

е

н

т

 




 

 

 

 

 

 

 

 

t

h

i

s

.

s

t

a

n

d

a

r

t

(

t

e

m

p

,

 

o

t

e

m

p

)




 

 

 

 

}




 

 

 

 

/

/

 

Г

Р

У

П

П

А

 

А

Н

А

Л

И

З

А

 

Р

А

Б

О

Т

А

Ю

Щ

А

Я




 

 

 

 

/

/

 

С

 

П

Р

О

Д

А

Н

Н

Ы

М

И

 

Т

О

В

А

Р

А

М

И




 

 

 

 

/

/

 

О

Д

Н

А

 

И

З

 

С

А

М

Ы

Х

 

З

А

Е

Б

И

С

Т

Ы

Х




 

 

 

 

i

t

e

m

s

_

g

r

o

u

p

(

t

e

m

p

)

 

{




 

 

 

 

 

 

 

 

/

/

 

П

О

Л

У

Ч

А

Е

М

 

С

П

И

С

О

К

 

Т

О

В

А

Р

О

В




 

 

 

 

 

 

 

 

l

e

t

 

i

t

e

m

s

 

=

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

2

]




 

 

 

 

 

 

 

 

/

/

 

Е

С

Л

И

 

О

Н

 

Б

О

Л

Ь

Ш

Е

 

Н

У

Л

Я




 

 

 

 

 

 

 

 

i

f

 

(

O

b

j

e

c

t

.

k

e

y

s

(

i

t

e

m

s

)

.

l

e

n

g

t

h

 

>

 

0

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

О

Д

Г

О

Т

В

А

Л

И

В

А

Е

М

 

П

Е

Р

Е

М

Е

Н

Н

Ы

Е




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

d

e

s

c

 

=

 

[

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

a

r

t

s

 

=

 

[

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

o

u

n

t

 

=

 

0




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

К

А

Ж

Д

Ы

Й

 

П

Р

О

Д

А

Н

Н

Ы

Й

 

П

Р

Е

Д

М

Е

Т




 

 

 

 

 

 

 

 

 

 

 

 

i

t

e

m

s

.

f

o

r

E

a

c

h

(

e

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

Р

О

В

Е

Р

Я

Е

М

 

Ш

А

Б

Л

О

Н




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

3

]

 

=

=

 

1

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

Р

О

В

Е

Р

Я

Е

М

 

С

Т

О

П

 

Л

И

С

Т




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

!

(

t

h

i

s

.

c

f

g

[

"

s

t

o

p

"

]

.

i

n

c

l

u

d

e

s

(

e

.

a

r

t

)

)

 

|

|

 

(

e

.

a

r

t

 

=

=

 

0

 

&

 

e

.

n

a

m

e

 

=

=

 

"

К

л

и

е

н

т

с

к

и

й

 

з

а

к

а

з

"

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

d

e

s

c

.

p

u

s

h

(

e

.

n

a

m

e

)

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

e

.

a

r

t

 

!

=

 

0

)

 

{

a

r

t

s

.

p

u

s

h

(

e

.

a

r

t

)

;

}

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

e

.

i

s

_

g

o

o

d

 

|

|

 

e

.

n

a

m

e

 

=

=

 

"

К

л

и

е

н

т

с

к

и

й

 

з

а

к

а

з

"

)

 

{

c

o

u

n

t

+

=

N

u

m

b

e

r

(

e

.

c

o

u

n

t

)

;

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

Е

С

Л

И

 

Ш

А

Б

Л

О

Н

 

Н

Е

 

Д

А

Л

 

Д

О

Б

Р

О




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

i

f

 

(

t

e

m

p

[

3

]

 

=

=

 

-

1

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

d

e

s

c

.

p

u

s

h

(

e

.

n

a

m

e

)

;

 

a

r

t

s

.

p

u

s

h

(

e

.

a

r

t

)

;

 

i

f

 

(

e

.

i

s

_

g

o

o

d

 

|

|

 

e

.

n

a

m

e

 

=

=

 

"

К

л

и

е

н

т

с

к

и

й

 

з

а

к

а

з

"

)

 

{

c

o

u

n

t

+

=

N

u

m

b

e

r

(

e

.

c

o

u

n

t

)

}

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

}

)

;

 




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

О

П

И

С

А

Н

И

Е




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

1

]

 

!

=

 

1

)

 

{

d

e

s

c

 

=

 

[

]

}




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

Р

А

З

Б

И

Р

А

Е

М

 

Р

А

Н

Е

Е

 

Р

А

З

О

Б

Р

А

Н

Н

Ы

Е

 

К

О

М

Е

Н

Т

А

Р

И

И




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

o

b

j

 

=

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

c

o

m

m

e

n

t

"

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

o

m

m

e

n

t

 

=

 

c

o

b

j

[

"

f

u

l

l

"

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

 

=

 

d

o

c

u

m

e

n

t

.

c

r

e

a

t

e

E

l

e

m

e

n

t

(

"

d

i

v

"

)




 

 

 

 

 

 

 

 

 

 

 

 

c

.

i

n

n

e

r

H

T

M

L

 

+

=

 

c

o

m

m

e

n

t




 

 

 

 

 

 

 

 

 

 

 

 

c

o

m

m

e

n

t

 

=

 

c

.

i

n

n

e

r

T

e

x

t




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

Р

О

В

Е

Р

К

А

 

Н

А

 

П

У

С

Т

О

Й

 

К

О

М

М

Е

Н

Т

А

Р

И

Й




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

(

t

e

m

p

[

4

]

 

=

=

 

1

)

 

&

 

!

(

[

"

Н

е

 

з

а

д

а

н

"

,

 

"

"

]

.

i

n

c

l

u

d

e

s

(

c

o

m

m

e

n

t

)

)

)

 

{

d

e

s

c

.

p

u

s

h

(

c

o

m

m

e

n

t

)

}




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

Р

О

В

Е

Р

К

А

 

Н

А

 

М

А

Р

К

Е

Т

П

Л

Е

Й

С




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]

 

=

=

 

"

m

a

r

k

e

t

"

 

|

|

 

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]

 

=

=

 

"

m

o

b

i

l

e

"

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

b

j

[

"

c

o

u

r

i

e

r

C

o

m

m

e

n

t

"

]

 

=

 

c

o

b

j

[

"

c

o

u

r

i

e

r

C

o

m

m

e

n

t

"

]

 

?

 

c

o

b

j

[

"

c

o

u

r

i

e

r

C

o

m

m

e

n

t

"

]

 

:

 

"

"




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

c

o

m

m

e

n

t

s

"

]

]

 

 

 

 

 

=

 

 

c

o

b

j

[

"

c

a

r

r

i

e

r

T

y

p

e

"

]

.

f

i

l

t

e

r

(

i

t

e

m

 

=

>

 

t

y

p

e

o

f

 

i

t

e

m

 

=

=

=

 

'

s

t

r

i

n

g

'

)

.

m

a

p

(

i

t

e

m

 

=

>

 

`

[

$

{

i

t

e

m

}

]

`

)

.

j

o

i

n

(

'

'

)

 

+

 

"

 

"

 

+

 

c

o

b

j

[

"

c

o

u

r

i

e

r

C

o

m

m

e

n

t

"

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

o

r

d

e

r

_

n

u

m

b

e

r

"

]

]

 

=

 

c

o

b

j

[

"

o

r

d

e

r

N

u

m

b

e

r

"

]

.

j

o

i

n

(

"

 

"

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

a

r

t

i

c

l

e

s

"

]

]

 

 

=

 

 

a

r

t

s

.

j

o

i

n

(

"

;

 

 

"

)

 




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

В

 

Л

Ю

Б

О

М

 

Д

Р

У

Г

О

М

 

С

Л

У

Ч

А

Е




 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

c

o

m

m

e

n

t

s

"

]

]

 

 

=

 

 

d

e

s

c

.

j

o

i

n

(

"

,

 

 

"

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

a

r

t

i

c

l

e

s

"

]

]

 

 

=

 

 

a

r

t

s

.

j

o

i

n

(

"

;

 

 

"

)

 




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

К

О

С

Т

Ы

Л

Ь




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

f

u

s

e

_

c

o

u

n

t

 

=

 

t

r

u

e




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

П

О

 

Ш

А

Б

Л

О

Н

У

 

С

М

О

Т

Р

И

М

 

В

Ы

С

Т

А

В

Л

Я

Е

М

 

Л

И

 

П

О

К

У

П

К

И

 

И

Л

И

 

К

О

Л

И

Ч

Е

С

Т

В

О

 

Т

О

В

А

Р

О

В




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

2

]

 

=

=

 

-

1

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

a

r

t

i

c

l

e

s

"

]

]

 

=

 

t

e

m

p

[

2

]

}




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

0

]

 

!

=

 

1

)

 

{

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

=

 

t

e

m

p

[

0

]

;

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

i

t

e

m

s

_

c

o

u

n

t

"

]

]

 

=

 

t

e

m

p

[

0

]

 

}

 




 

 

 

 

 

 

 

 

 

 

 

 

e

l

s

e

 

{

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

c

o

u

n

t

 

>

 

0

)

 

{

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

=

 

1

;

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

i

t

e

m

s

_

c

o

u

n

t

"

]

]

 

=

 

c

o

u

n

t

;

 

t

h

i

s

.

r

e

f

u

s

e

_

c

o

u

n

t

 

=

 

t

r

u

e

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

f

u

s

e

_

c

o

u

n

t

 

=

 

f

a

l

s

e

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

=

 

0

;

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

i

t

e

m

s

_

c

o

u

n

t

"

]

]

 

=

 

0

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

a

l

l

_

l

i

s

t

[

t

h

i

s

.

t

r

a

f

f

i

c

]

]

 

=

 

0

;

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

e

n

t

e

r

"

]

]

 

=

 

0

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}




 

 

 

 

}




 

 

 

 

m

o

n

e

y

_

g

r

o

u

p

(

t

e

m

p

)

 

{

 

 

 

 




 

 

 

 

 

 

 

 

f

u

n

c

t

i

o

n

 

c

d

(

n

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

u

m

 

=

 

n

.

s

p

l

i

t

(

"

.

"

)




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

n

u

m

[

1

]

 

=

=

 

"

0

0

"

)

 

{

r

e

t

u

r

n

 

n

u

m

[

0

]

}

 




 

 

 

 

 

 

 

 

 

 

 

 

e

l

s

e

 

{

 

i

f

 

(

n

u

m

[

1

]

[

1

]

 

=

=

 

"

0

"

)

 

{

n

u

m

[

1

]

 

=

 

n

u

m

[

1

]

[

0

]

}

;

 

r

e

t

u

r

n

 

n

u

m

.

j

o

i

n

(

"

.

"

)

;

 

}




 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

l

e

t

 

m

 

=

 

[

N

u

m

b

e

r

(

c

d

(

(

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

1

]

[

"

c

a

s

h

"

]

)

)

)

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

N

u

m

b

e

r

(

c

d

(

(

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

1

]

[

"

n

o

_

c

a

s

h

"

]

)

)

)

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

N

u

m

b

e

r

(

c

d

(

(

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

1

]

[

"

s

b

p

"

]

)

)

)

]




 

 

 

 

 

 

 

 

l

e

t

 

c

n

c

 

=

 

[

[

m

[

0

]

,

 

m

[

1

]

,

 

m

[

2

]

]

,

 

[

m

[

0

]

,

 

m

[

1

]

 

+

 

m

[

2

]

]

]




 

 

 

 

 

 

 

 

c

n

c

.

f

o

r

E

a

c

h

(

e

 

=

>

 

{

e

.

f

o

r

E

a

c

h

(

e

l

e

m

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

e

l

e

m

 

=

=

 

0

)

 

{

e

l

e

m

 

=

 

-

1

}




 

 

 

 

 

 

 

 

}

)

}

)

;




 

 

 

 

 

 

 

 

f

u

n

c

t

i

o

n

 

i

s

I

n

t

e

g

e

r

(

n

u

m

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

(

n

u

m

 

^

 

0

)

 

=

=

=

 

n

u

m

;




 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

i

 

=

 

0

;

 

i

 

<

 

c

n

c

.

l

e

n

g

t

h

;

 

i

+

+

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

j

 

=

 

0

;

 

j

 

<

 

c

n

c

[

i

]

.

l

e

n

g

t

h

;

 

j

+

+

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

c

n

c

[

i

]

[

j

]

 

=

=

 

0

 

|

|

 

!

t

h

i

s

.

r

e

f

u

s

e

_

c

o

u

n

t

)

 

{

c

n

c

[

i

]

[

j

]

 

=

 

[

"

-

1

"

,

 

"

-

1

"

]

}

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

e

l

s

e

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

!

i

s

I

n

t

e

g

e

r

(

c

n

c

[

i

]

[

j

]

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

n

c

[

i

]

[

j

]

 

=

 

[

c

n

c

[

i

]

[

j

]

.

t

o

S

t

r

i

n

g

(

)

.

t

r

i

m

(

)

.

s

p

l

i

t

(

"

.

"

)

.

j

o

i

n

(

"

,

"

)

,

 

M

a

t

h

.

r

o

u

n

d

(

c

n

c

[

i

]

[

j

]

)

.

t

o

S

t

r

i

n

g

(

)

.

t

r

i

m

(

)

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

n

c

[

i

]

[

j

]

 

=

 

[

c

n

c

[

i

]

[

j

]

.

t

o

S

t

r

i

n

g

(

)

.

t

r

i

m

(

)

,

 

c

n

c

[

i

]

[

j

]

.

t

o

S

t

r

i

n

g

(

)

.

t

r

i

m

(

)

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

l

e

t

 

c

a

s

h

_

n

o

c

a

s

h

 

=

 

c

n

c

[

1

]




 

 

 

 

 

 

 

 

l

e

t

 

c

a

s

h

_

n

o

c

a

s

h

_

s

b

p

 

=

 

c

n

c

[

0

]




 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

l

e

t

 

i

f

_

m

o

n

e

y

 

=

 

(

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

p

a

y

"

]

[

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]

]

 

&

&

 

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

r

e

t

u

r

n

"

]

[

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]

]

)




 

 

 

 

 

 

 

 

l

e

t

 

t

_

m

 

=

 

{

}

;

 

l

e

t

 

m

i

 

=

 

f

a

l

s

e

;

 

l

e

t

 

m

m

p

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

 

!

=

 

f

a

l

s

e

)

 

{







 

 

 

 

 

 

 

 

 

 

 

 

m

i

 

 

=

 

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

p

a

y

"

]

[

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

.

t

y

p

e

[

0

]

]

[

0

]




 

 

 

 

 

 

 

 

 

 

 

 

m

m

p

 

=

 

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

r

e

t

u

r

n

"

]

[

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

.

t

y

p

e

[

0

]

]

[

0

]







 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{







 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

i

f

_

m

o

n

e

y

)

 

{







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

m

i

 

 

=

 

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

p

a

y

"

]

[

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]

]

[

0

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

m

m

p

 

=

 

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

r

e

t

u

r

n

"

]

[

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]

]

[

0

]




 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{







 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

m

i

 

 

=

 

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

p

a

y

"

]

[

"

b

u

y

e

r

"

]

[

0

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

m

m

p

 

=

 

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

r

e

t

u

r

n

"

]

[

"

b

u

y

e

r

"

]

[

0

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 




 

 

 

 

 

 

 

 

}







 

 

 

 

 

 

 

 

t

_

m

[

m

m

p

[

0

]

]

 

=

 

[

'

-

1

'

,

 

'

-

1

'

]




 

 

 

 

 

 

 

 

t

_

m

[

m

m

p

[

1

]

]

 

=

 

[

'

-

1

'

,

 

'

-

1

'

]







 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

 

=

 

(

(

t

e

m

p

.

l

e

n

g

t

h

 

=

=

 

1

)

 

&

 

(

t

e

m

p

[

0

]

 

=

=

 

-

1

)

)

 

?

 

 

t

_

m

:

 

f

a

l

s

e







 

 

 

 

 

 

 

 

/

/

 

о

б

ы

ч

н

а

я

 

о

п

л

а

т

а

 




 

 

 

 

 

 

 

 

i

f

 

(

t

e

m

p

[

0

]

 

=

=

=

 

1

 

&

 

!

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

 

=

 

{

}




 

 

 

 

 

 

 

 

 

 

 

 

r

a

n

g

e

(

0

,

 

2

)

.

f

o

r

E

a

c

h

(

i

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

m

i

[

i

]

]

 

=

 

c

a

s

h

_

n

o

c

a

s

h

_

s

b

p

[

0

]

[

i

]

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

[

m

i

[

i

]

]

 

=

 

c

n

c

[

0

]

[

i

]

}




 

 

 

 

 

 

 

 

 

 

 

 

)

;




 

 

 

 

 

 

 

 

/

/

 

о

п

л

а

т

а

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

i

f

 

(

t

e

m

p

[

1

]

 

=

=

=

 

1

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

 

=

 

{

}




 

 

 

 

 

 

 

 

 

 

 

 

r

a

n

g

e

(

0

,

 

1

)

.

f

o

r

E

a

c

h

(

i

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

m

i

[

i

]

]

 

 

 

 

=

 

c

a

s

h

_

n

o

c

a

s

h

[

0

]

[

i

]

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

[

m

i

[

i

]

]

 

 

=

 

c

n

c

[

0

]

[

i

]

;




 

 

 

 

 

 

 

 

 

 

 

 

}

)

;




 

 

 

 

 

 

 

 

/

/

 

в

о

з

в

р

а

т

 

з

а

к

а

з

а




 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

 

!

=

 

f

a

l

s

e

 

&

 

(

t

e

m

p

[

2

]

 

=

=

=

 

1

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

.

t

y

p

e

[

0

]

 

!

=

 

f

a

l

s

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

 

=

 

{

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

.

t

y

p

e

[

0

]

 

=

=

 

"

m

o

b

i

l

e

"

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

r

a

n

g

e

(

0

,

 

1

)

.

f

o

r

E

a

c

h

(

i

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

m

i

[

i

]

]

 

 

 

 

=

 

c

a

s

h

_

n

o

c

a

s

h

[

0

]

[

i

]

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

[

m

i

[

i

]

]

 

 

=

 

c

n

c

[

0

]

[

i

]

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

t

y

p

e

.

t

y

p

e

[

0

]

 

=

=

 

"

b

u

y

e

r

"

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

r

a

n

g

e

(

0

,

 

1

)

.

f

o

r

E

a

c

h

(

i

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

m

m

p

[

i

]

]

 

 

 

 

=

 

c

a

s

h

_

n

o

c

a

s

h

[

0

]

[

i

]

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

[

m

m

p

[

i

]

]

 

 

=

 

c

n

c

[

0

]

[

i

]

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

r

a

n

g

e

(

0

,

 

1

)

.

f

o

r

E

a

c

h

(

i

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

m

m

p

[

i

]

]

 

 

 

 

=

 

c

a

s

h

_

n

o

c

a

s

h

[

0

]

[

i

]

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t

[

m

m

p

[

i

]

]

 

 

=

 

c

n

c

[

0

]

[

i

]

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}

 




 

 

 

 

}




 

 

 

 

S

c

a

n

(

t

e

m

p

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

f

a

u

l

t

_

g

r

o

u

p

(

t

e

m

p

[

0

]

)




 

 

 

 

 

 

 

 

t

h

i

s

.

e

n

t

e

r

_

g

r

o

u

p

(

t

e

m

p

[

1

]

,

 

t

e

m

p

[

2

]

)




 

 

 

 

 

 

 

 

t

h

i

s

.

i

t

e

m

s

_

g

r

o

u

p

(

t

e

m

p

[

3

]

)




 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

_

g

r

o

u

p

(

t

e

m

p

[

4

]

)




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

t

h

i

s

.

v

p




 

 

 

 

}

 




}




c

l

a

s

s

 

C

o

p

y

C

o

n

n

e

c

t

 

{




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

l

o

c

a

t

i

o

n

 

=

 

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f




 

 

 

 

}




 

 

 

 

a

s

y

n

c

 

r

u

n

(

a

r

g

s

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

t

r

a

f

f

i

c

 

 

=

 

a

r

g

s

[

"

t

r

a

f

f

i

c

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

m

m

e

n

t

 

 

=

 

a

r

g

s

[

"

c

o

m

m

e

n

t

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

a

s

o

n

s

 

 

=

 

a

r

g

s

[

"

r

e

a

s

o

n

s

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

a

l

l

_

l

i

s

t

 

=

 

a

r

g

s

[

"

t

e

m

p

l

a

t

e

s

"

]

[

"

a

l

l

_

l

i

s

t

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

h

t

m

l

 

 

 

 

 

=

 

a

r

g

s

[

"

h

t

m

l

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

 

=

 

a

r

g

s

[

"

t

a

b

l

e

s

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

i

n

t

e

r

f

a

c

e

 

 

 

 

 

 

 

 

 

=

 

a

r

g

s

[

"

i

n

t

e

r

f

a

c

e

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

a

n

a

l

i

s

 

 

 

 

 

 

 

 

 

 

 

 

=

 

a

r

g

s

[

"

a

n

a

l

i

s

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

p

t

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

=

 

t

h

i

s

.

a

n

a

l

i

s

.

p

t




 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

 

=

 

t

h

i

s

.

a

n

a

l

i

s

.

m

o

n

e

y

_

o

b

j

e

c

t




 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

t

u

r

n

_

o

b

j

 

=

 

t

h

i

s

.

a

n

a

l

i

s

.

c

o

p

y

_

m

a

s

s

i

v

e




 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

 

=

 

a

r

g

s

[

"

t

e

m

p

l

a

t

e

s

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

 

=

 

t

h

i

s

.

t

e

m

p

[

"

i

c

o

n

s

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

b

u

t

t

o

n

s

 

 

 

 

 

 

 

=

 

t

h

i

s

.

i

n

t

e

r

f

a

c

e




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

p

y

B

u

t

t

o

n

 

 

 

 

=

 

t

h

i

s

.

b

u

t

t

o

n

s

[

0

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

h

e

c

k

s

B

u

t

t

o

n

s

 

=

 

t

h

i

s

.

b

u

t

t

o

n

s

[

1

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

 

 

 

 

=

 

t

h

i

s

.

b

u

t

t

o

n

s

[

2

]




 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

n

y

 

=

 

a

r

g

s

[

"

d

e

n

y

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

k

e

y

_

b

u

f

f

e

r

 

 

 

 

 

=

 

[

]




 

 

 

 

 

 

 

 

t

h

i

s

.

h

o

t

_

k

e

y

s

(

)




 

 

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

 

=

 

t

h

i

s

.

a

n

a

l

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

[

0

]




 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

 

 

 

=

 

t

h

i

s

.

a

n

a

l

i

s

.

v

p




 

 

 

 

 

 

 

 

l

e

t

 

b

i

l

l

_

u

r

l

 

=

 

t

h

i

s

.

a

n

a

l

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

_

o

b

j

e

c

t

.

v

a

r

s

[

"

r

e

t

u

r

n

_

l

i

n

k

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

n

n

e

c

t

_

c

l

i

c

k

(

)




 

 

 

 

 

 

 

 

l

e

t

 

n

e

e

d

 

=

 

t

h

i

s

.

t

e

m

p

[

"

n

e

e

d

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

n

e

e

d

_

t

r

a

f

f

i

c

 

=

 

 

(

!

n

e

e

d

[

"

t

r

a

f

f

i

c

"

]

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

t

y

p

e

)

 

 

&

 

 

t

h

i

s

.

d

e

n

y

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

t

r

a

f

f

i

c

)

)

 




 

 

 

 

 

 

 

 

t

h

i

s

.

n

e

e

d

_

c

o

m

m

e

n

t

 

=

 

 

(

n

e

e

d

[

"

c

o

m

m

e

n

t

"

]

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

t

y

p

e

)

 

 

 

&

 

 

t

h

i

s

.

d

e

n

y

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

c

o

m

m

e

n

t

)

)




 

 

 

 

 

 

 

 

t

h

i

s

.

n

e

e

d

_

o

r

d

e

r

N

u

 

=

 

 

(

n

e

e

d

[

"

o

r

d

e

r

N

u

m

b

e

r

"

]

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

t

y

p

e

)

 

&

 

t

h

i

s

.

c

o

m

m

e

n

t

.

o

r

d

e

r

N

u

m

b

e

r

.

l

e

n

g

t

h

 

<

 

1

)




 

 

 

 

 

 

 

 

t

h

i

s

.

n

e

e

d

_

r

e

a

s

o

n

s

 

=

 

 

(

n

e

e

d

[

"

r

e

a

s

o

n

s

"

]

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

t

y

p

e

)

 

 

 

&

 

 

t

h

i

s

.

d

e

n

y

.

i

n

c

l

u

d

e

s

(

t

h

i

s

.

r

e

a

s

o

n

s

)

)

 




 

 

 

 

 

 

 

 

t

h

i

s

.

n

e

e

d

_

r

e

t

u

r

n

s

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

o

b

j

[

0

]

 

!

=

 

f

a

l

s

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

v

a

r

s

 

=

 

t

h

i

s

.

r

e

t

u

r

n

_

o

b

j

[

0

]

.

v

a

r

s




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

t

r

a

f

f

i

c

 

=

 

v

a

r

s

[

"

t

r

a

f

f

i

c

"

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

o

m

m

e

n

t

 

=

 

v

a

r

s

[

"

c

o

m

m

e

n

t

"

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

r

e

a

s

o

n

s

 

=

 

v

a

r

s

[

"

r

e

a

s

o

n

s

"

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

t

y

p

e

 

=

 

t

h

i

s

.

r

e

t

u

r

n

_

o

b

j

[

0

]

.

t

y

p

e

[

0

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

e

e

d

_

t

r

a

f

f

i

c

 

=

 

 

(

!

n

e

e

d

[

"

t

r

a

f

f

i

c

"

]

.

i

n

c

l

u

d

e

s

(

t

y

p

e

)

 

 

&

 

 

t

h

i

s

.

d

e

n

y

.

i

n

c

l

u

d

e

s

(

t

r

a

f

f

i

c

)

)

 




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

e

e

d

_

c

o

m

m

e

n

t

 

=

 

 

(

n

e

e

d

[

"

c

o

m

m

e

n

t

"

]

.

i

n

c

l

u

d

e

s

(

t

y

p

e

)

 

 

 

&

 

 

t

h

i

s

.

d

e

n

y

.

i

n

c

l

u

d

e

s

(

c

o

m

m

e

n

t

)

)




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

e

e

d

_

o

r

d

e

r

N

u

 

=

 

 

(

n

e

e

d

[

"

o

r

d

e

r

N

u

m

b

e

r

"

]

.

i

n

c

l

u

d

e

s

(

t

y

p

e

)

 

&

 

c

o

m

m

e

n

t

.

o

r

d

e

r

N

u

m

b

e

r

.

l

e

n

g

t

h

 

<

 

1

)




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

e

e

d

_

r

e

a

s

o

n

s

 

=

 

 

(

n

e

e

d

[

"

r

e

a

s

o

n

s

"

]

.

i

n

c

l

u

d

e

s

(

t

y

p

e

)

 

 

 

&

 

 

t

h

i

s

.

d

e

n

y

.

i

n

c

l

u

d

e

s

(

r

e

a

s

o

n

s

)

)

 




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

n

e

e

d

_

r

e

t

u

r

n

s

 

=

 

(

n

e

e

d

_

r

e

a

s

o

n

s

 

|

|

 

n

e

e

d

_

c

o

m

m

e

n

t

 

|

|

 

n

e

e

d

_

o

r

d

e

r

N

u

 

|

|

 

n

e

e

d

_

t

r

a

f

f

i

c

)




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

n

e

e

d

_

r

e

t

u

r

n

s

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

r

e

s

u

l

t

 

=

 

c

o

n

f

i

r

m

(

"

И

с

х

о

д

н

ы

й

 

ч

е

к

 

н

е

 

к

о

р

р

е

к

т

е

н

!

\

n

П

е

р

е

й

т

и

 

к

 

п

р

о

б

л

е

м

н

о

м

у

 

ч

е

к

у

?

"

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

r

e

s

u

l

t

)

 

{

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

r

e

p

l

a

c

e

(

b

i

l

l

_

u

r

l

)

}

 




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

t

h

i

s

.

n

o

t

_

a

l

l

o

w

 

=

 

(

t

h

i

s

.

n

e

e

d

_

r

e

a

s

o

n

s

 

|

|

 

t

h

i

s

.

n

e

e

d

_

c

o

m

m

e

n

t

 

|

|

 

t

h

i

s

.

n

e

e

d

_

o

r

d

e

r

N

u

 

|

|

 

t

h

i

s

.

n

e

e

d

_

t

r

a

f

f

i

c

 

|

|

 

t

h

i

s

.

n

e

e

d

_

r

e

t

u

r

n

s

)




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

n

o

t

_

a

l

l

o

w

)

 

{

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

.

i

n

n

e

r

H

T

M

L

 

=

 

t

h

i

s

.

c

a

t

[

1

]

}

 

e

l

s

e

 

{




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

.

i

n

n

e

r

H

T

M

L

 

=

 

t

h

i

s

.

c

a

t

[

0

]

[

0

]




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

"

m

o

u

s

e

o

v

e

r

"

,

 

(

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

.

i

n

n

e

r

H

T

M

L

 

 

 

 

 

 

 

=

 

 

t

h

i

s

.

c

a

t

[

0

]

[

1

]

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

.

s

t

y

l

e

.

f

o

n

t

S

i

z

e

 

 

=

 

"

1

c

q

h

"

;

 




 

 

 

 

 

 

 

 

 

 

 

 

}

)




 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

"

m

o

u

s

e

o

u

t

"

,

 

(

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

.

i

n

n

e

r

H

T

M

L

 

 

 

 

 

 

 

=

 

 

t

h

i

s

.

c

a

t

[

0

]

[

0

]

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

a

t

_

b

u

t

t

o

n

.

s

t

y

l

e

.

f

o

n

t

S

i

z

e

 

 

=

 

"

2

c

q

h

"

;




 

 

 

 

 

 

 

 

 

 

 

 

}

)




 

 

 

 

 

 

 

 

}

 

t

h

i

s

.

c

h

e

c

k

s

(

f

a

l

s

e

)

;




 

 

 

 

}




 

 

 

 

f

o

r

m

a

t

_

u

v

(

t

a

b

l

e

)

 

{

 

r

e

t

u

r

n

 

t

a

b

l

e

.

m

a

p

(

(

e

)

 

=

>

 

(

(

e

 

=

=

 

-

1

)

 

?

 

"

"

 

:

 

e

)

)

.

j

o

i

n

(

"

\

t

"

)

 

}




 

 

 

 

c

h

e

c

k

e

d

(

b

t

n

)

 

{

r

e

t

u

r

n

 

b

t

n

.

c

l

a

s

s

L

i

s

t

.

c

o

n

t

a

i

n

s

(

"

c

h

e

c

k

e

d

"

)

}




 

 

 

 

c

h

e

c

k

s

(

n

o

_

s

t

a

r

t

 

=

 

t

r

u

e

)

 

{




 

 

 

 

 

 

 

 

/

/

 

c

o

n

s

o

l

e

.

l

o

g

(

t

h

i

s

.

l

o

c

a

t

i

o

n

,

 

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f

)




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

l

o

c

a

t

i

o

n

 

!

=

 

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

r

e

i

n

s

t

a

l

l

C

l

a

s

s

(

)




 

 

 

 

 

 

 

 

}




 

 

 

 

l

e

t

 

t

e

m

p

l

a

t

e

 

=

 

{




 

 

 

 

 

 

 

 

 

 

 

 

"

r

e

t

u

r

n

s

"

:

 

[

"

У

 

в

а

с

 

п

р

о

б

л

е

м

н

ы

й

 

ч

е

к

!

"

,

 

[

1

7

]

,

 

t

h

i

s

.

n

e

e

d

_

r

e

t

u

r

n

s

,

 

f

a

l

s

e

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

t

r

a

f

f

i

c

"

:

 

[

"

В

в

е

д

и

т

е

 

т

р

а

ф

и

к

!

"

,

 

[

1

9

]

,

 

t

h

i

s

.

n

e

e

d

_

t

r

a

f

f

i

c

,

 

f

a

l

s

e

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

o

r

d

e

r

N

u

m

b

e

r

"

:

 

[

"

В

 

к

о

м

м

е

н

т

а

р

и

и

 

н

е

т

 

н

о

м

е

р

а

 

з

а

к

а

з

а

!

"

,

 

[

2

1

]

,

 

t

h

i

s

.

n

e

e

d

_

o

r

d

e

r

N

u

,

 

f

a

l

s

e

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

c

o

m

m

e

n

t

"

:

 

[

{

r

e

t

u

r

n

:

 

"

В

в

е

д

и

т

е

 

к

о

м

м

е

н

т

а

р

и

й

,

 

о

п

и

ш

и

т

е

 

п

р

и

ч

и

н

у

 

в

о

з

в

р

а

т

а

 

ч

е

к

а

!

"

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

m

a

r

k

e

t

:

 

"

В

в

е

д

и

т

е

 

к

о

м

м

е

н

т

а

р

и

й

 

с

 

н

о

м

е

р

о

м

 

з

а

к

а

з

а

!

"

,

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

n

o

_

i

t

e

m

:

 

"

О

п

и

ш

и

т

е

 

н

е

п

о

к

у

п

к

у

 

(

о

б

с

т

о

я

т

е

л

ь

с

т

в

а

,

 

п

р

и

ч

и

н

а

)

"




 

 

 

 

 

 

 

 

 

 

 

 

}

,

 

[

2

1

]

,

 

t

h

i

s

.

n

e

e

d

_

c

o

m

m

e

n

t

,

 

t

r

u

e

]

,




 

 

 

 

 

 

 

 

 

 

 

 

"

r

e

a

s

o

n

s

"

:

 

[

"

В

в

е

д

и

т

е

 

п

р

и

ч

и

н

у

 

н

е

 

п

о

к

у

п

к

и

!

"

,

 

[

2

0

]

,

 

t

h

i

s

.

n

e

e

d

_

r

e

a

s

o

n

s

,

 

f

a

l

s

e

]




 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

i

 

i

n

 

t

e

m

p

l

a

t

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

m

s

g

 

=

 

t

e

m

p

l

a

t

e

[

i

]

[

0

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

u

m

 

=

 

t

e

m

p

l

a

t

e

[

i

]

[

1

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

h

e

 

=

 

t

e

m

p

l

a

t

e

[

i

]

[

2

]




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

t

r

a

 

=

 

t

e

m

p

l

a

t

e

[

i

]

[

3

]




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

c

h

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

r

a

)

 

{

 

m

s

g

 

=

 

m

s

g

[

t

h

i

s

.

t

y

p

e

]

 

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

n

o

_

s

t

a

r

t

)

 

a

l

e

r

t

(

m

s

g

)

;

 

n

u

m

 

=

 

n

u

m

.

m

a

p

(

(

n

)

 

=

>

 

{

r

e

t

u

r

n

 

t

h

i

s

.

h

t

m

l

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

`

.

d

e

t

a

i

l

-

v

i

e

w

.

t

a

b

l

e

 

t

r

:

n

t

h

-

c

h

i

l

d

(

$

{

n

}

)

`

)

}

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

n

u

m

.

m

a

p

(

(

x

)

 

=

>

 

{

[

x

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

"

t

h

"

)

,

 

x

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

"

t

d

"

)

]

.

m

a

p

(

(

e

)

 

=

>

 

{

e

.

s

t

y

l

e

.

b

a

c

k

g

r

o

u

n

d

=

"

#

C

4

4

5

3

6

"

;

 

e

.

s

t

y

l

e

.

c

o

l

o

r

=

"

w

h

i

t

e

"

}

)

}

)




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}

 




 

 

 

 

 

 

 

 

i

f

 

(

!

t

h

i

s

.

n

o

t

_

a

l

l

o

w

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

c

h

e

c

k

e

d

(

t

h

i

s

.

c

h

e

c

k

s

B

u

t

t

o

n

s

[

1

]

)

 

&

 

t

h

i

s

.

t

y

p

e

 

=

=

 

"

b

u

y

e

r

"

)

 

{

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

d

c

"

]

]

 

=

 

1




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

c

h

e

c

k

e

d

(

t

h

i

s

.

c

h

e

c

k

s

B

u

t

t

o

n

s

[

2

]

)

 

&

 

t

h

i

s

.

t

y

p

e

 

=

=

 

"

b

u

y

e

r

"

)

 

{

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

d

c

"

]

]

 

=

 

0




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

d

c

"

]

]

 

=

 

1

 

}




 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

d

c

"

]

]

 

=

 

-

1

}




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

a

n

a

l

i

s

.

r

e

f

u

s

e

_

c

o

u

n

t

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

c

h

e

c

k

e

d

(

t

h

i

s

.

c

h

e

c

k

s

B

u

t

t

o

n

s

[

2

]

)

 

&

 

t

h

i

s

.

t

y

p

e

 

=

=

 

"

b

u

y

e

r

"

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

!

!

(

(

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

e

n

t

e

r

"

]

]

 

=

=

 

1

)

 

&

 

(

t

h

i

s

.

v

p

[

t

h

i

s

.

a

l

l

_

l

i

s

t

[

t

h

i

s

.

t

r

a

f

f

i

c

]

]

 

=

=

 

1

)

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

a

l

l

_

l

i

s

t

[

t

h

i

s

.

t

r

a

f

f

i

c

]

]

 

=

 

0

;

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

e

n

t

e

r

"

]

]

 

=

 

0

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

d

c

"

]

]

 

!

=

 

-

1

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

d

c

"

]

]

 

=

 

0

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

(

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

!

=

 

-

1

)

 

&

 

(

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

=

=

 

1

)

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

=

 

0

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

i

f

 

(

!

t

h

i

s

.

c

h

e

c

k

e

d

(

t

h

i

s

.

c

h

e

c

k

s

B

u

t

t

o

n

s

[

2

]

)

 

&

 

t

h

i

s

.

t

y

p

e

 

=

=

 

"

b

u

y

e

r

"

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

!

!

(

(

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

e

n

t

e

r

"

]

]

 

=

=

 

0

)

 

&

 

(

t

h

i

s

.

v

p

[

t

h

i

s

.

a

l

l

_

l

i

s

t

[

t

h

i

s

.

t

r

a

f

f

i

c

]

]

 

=

=

 

0

)

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

v

p

[

t

h

i

s

.

a

l

l

_

l

i

s

t

[

t

h

i

s

.

t

r

a

f

f

i

c

]

]

 

=

 

1

;

 

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

e

n

t

e

r

"

]

]

 

=

 

1

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

d

c

"

]

]

 

!

=

 

-

1

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

d

c

"

]

]

 

=

 

1

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

!

=

 

-

1

 

&

 

(

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

=

=

 

0

)

)

 

{

t

h

i

s

.

v

p

[

t

h

i

s

.

p

t

[

"

b

u

y

s

"

]

]

 

=

 

1

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

O

b

j

e

c

t

.

k

e

y

s

(

t

h

i

s

.

m

o

n

e

y

)

.

l

e

n

g

t

h

 

=

=

 

3

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

u

m

_

o

b

j

e

c

t

 

=

 

{

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

n

u

m

_

o

b

j

e

c

t

[

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

p

a

y

"

]

[

t

h

i

s

.

t

y

p

e

]

[

0

]

[

1

]

]

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

n

u

m

_

o

b

j

e

c

t

[

t

h

i

s

.

p

t

[

"

m

o

n

e

y

"

]

[

"

p

a

y

"

]

[

t

h

i

s

.

t

y

p

e

]

[

0

]

[

2

]

]

 

=

 

t

r

u

e




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

n

u

m

 

=

 

O

b

j

e

c

t

.

k

e

y

s

(

n

u

m

_

o

b

j

e

c

t

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

n

u

m

.

m

a

p

(

e

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

m

o

n

e

y

[

e

]

[

0

]

 

=

=

 

"

-

1

"

 

&

 

t

h

i

s

.

c

h

e

c

k

e

d

(

t

h

i

s

.

c

h

e

c

k

s

B

u

t

t

o

n

s

[

0

]

)

 

=

=

 

n

u

m

_

o

b

j

e

c

t

[

e

]

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

a

n

o

t

h

e

r

 

=

 

n

u

m

[

(

e

 

=

=

 

n

u

m

[

0

]

)

 

?

 

1

:

0

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

[

e

]

 

=

 

t

h

i

s

.

m

o

n

e

y

[

a

n

o

t

h

e

r

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

m

o

n

e

y

[

a

n

o

t

h

e

r

]

 

=

 

[

"

-

1

"

,

 

"

-

1

"

]




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

)




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

h

e

c

k

_

c

u

t

 

=

 

t

h

i

s

.

c

h

e

c

k

e

d

(

t

h

i

s

.

c

h

e

c

k

s

B

u

t

t

o

n

s

[

3

]

)




 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

c

h

e

c

k

_

c

u

t

_

n

u

m

b

e

r

 

 

 

 

=

 

(

c

h

e

c

k

_

c

u

t

 

=

=

 

t

r

u

e

)

 

?

 

1

:

0




 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

o

b

j

[

0

]

 

!

=

 

f

a

l

s

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

 

 

 

 

 

(

t

h

i

s

.

r

e

t

u

r

n

_

o

b

j

[

0

]

.

t

y

p

e

[

0

]

 

=

=

 

"

m

o

b

i

l

e

"

)

 

{

f

o

r

 

(

l

e

t

 

i

 

i

n

 

t

h

i

s

.

m

o

n

e

y

)

 

{

l

e

t

 

i

t

 

=

 

t

h

i

s

.

m

o

n

e

y

[

i

]

[

c

h

e

c

k

_

c

u

t

_

n

u

m

b

e

r

]

;

 

t

h

i

s

.

v

p

[

i

]

 

=

 

(

i

t

 

=

=

 

"

-

1

"

)

 

?

 

"

"

:

"

-

"

 

+

 

i

t

}

}

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

e

l

s

e

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

o

b

j

[

0

]

.

t

y

p

e

[

0

]

 

=

=

 

"

b

u

y

e

r

"

)

 

{

f

o

r

 

(

l

e

t

 

i

 

i

n

 

t

h

i

s

.

m

o

n

e

y

)

 

{

t

h

i

s

.

v

p

[

i

]

 

=

 

t

h

i

s

.

m

o

n

e

y

[

i

]

[

c

h

e

c

k

_

c

u

t

_

n

u

m

b

e

r

]

}

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

e

l

s

e

 

i

f

 

(

t

h

i

s

.

r

e

t

u

r

n

_

o

b

j

[

0

]

.

t

y

p

e

[

0

]

 

=

=

 

"

m

a

r

k

e

t

"

)

 

{

f

o

r

 

(

l

e

t

 

i

 

i

n

 

t

h

i

s

.

m

o

n

e

y

)

 

{

t

h

i

s

.

v

p

[

i

]

 

=

 

"

-

1

"

}

}




 

 

 

 

 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{

 

f

o

r

 

(

l

e

t

 

i

 

i

n

 

t

h

i

s

.

m

o

n

e

y

)

 

{

t

h

i

s

.

v

p

[

i

]

 

=

 

t

h

i

s

.

m

o

n

e

y

[

i

]

[

c

h

e

c

k

_

c

u

t

_

n

u

m

b

e

r

]

}

 

}




 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{

r

e

t

u

r

n

 

[

f

a

l

s

e

,

 

t

h

i

s

.

v

p

]

}

 

r

e

t

u

r

n

 

[

t

r

u

e

,

 

t

h

i

s

.

v

p

]

;




 

 

 

 

}

 




 

 

 

 

k

e

y

(

k

)

 

{

r

e

t

u

r

n

(

t

h

i

s

.

k

e

y

_

b

u

f

f

e

r

.

i

n

c

l

u

d

e

s

(

k

)

)

}




 

 

 

 

c

l

i

p

T

e

x

t

(

m

s

g

,

 

h

o

t

=

f

a

l

s

e

)

 

{




 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

c

h

e

c

k

s

(

t

r

u

e

)

[

0

]

 

=

=

 

t

r

u

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

n

a

v

i

g

a

t

o

r

.

c

l

i

p

b

o

a

r

d

.

w

r

i

t

e

T

e

x

t

(

t

h

i

s

.

f

o

r

m

a

t

_

u

v

(

m

s

g

)

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

.

t

h

e

n

(

(

)

 

=

>

 

{

c

o

n

s

o

l

e

.

l

o

g

(

`

У

с

п

е

ш

н

о

 

с

к

о

п

и

р

о

в

а

н

о

 

в

 

б

у

ф

е

р

 

о

б

м

е

н

а

!

 

(

A

l

t

+

S

)

`

)

}

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

.

c

a

t

c

h

(

e

r

r

 

=

>

 

{

c

o

n

s

o

l

e

.

l

o

g

(

"

О

ш

и

б

к

а

"

,

 

e

r

r

)

}

)

;

 




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

h

o

t

)

 

t

h

i

s

.

k

e

y

_

b

u

f

f

e

r

.

p

o

p

(

"

A

l

t

L

e

f

t

"

)




 

 

 

 

 

 

 

 

}




 

 

 

 

}




 

 

 

 

h

o

t

_

k

e

y

s

(

)

 

{




 

 

 

 

 

 

 

 

d

o

c

u

m

e

n

t

.

o

n

k

e

y

d

o

w

n

 

=

 

(

e

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

!

t

h

i

s

.

k

e

y

_

b

u

f

f

e

r

.

i

n

c

l

u

d

e

s

(

e

.

c

o

d

e

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

k

e

y

_

b

u

f

f

e

r

.

p

u

s

h

(

e

.

c

o

d

e

)




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

d

o

c

u

m

e

n

t

.

o

n

k

e

y

u

p

 

=

 

(

e

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

k

e

y

_

b

u

f

f

e

r

.

i

n

c

l

u

d

e

s

(

e

.

c

o

d

e

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

k

e

y

(

"

A

l

t

L

e

f

t

"

)

 

&

&

 

t

h

i

s

.

k

e

y

(

"

K

e

y

S

"

)

)

 

{

 

t

h

i

s

.

c

l

i

p

T

e

x

t

(

t

h

i

s

.

v

p

,

 

t

r

u

e

)

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

l

e

t

 

t

e

m

p

l

a

t

e

 

=

 

{

"

A

"

:

 

0

,

 

"

Q

"

:

 

1

,

 

"

W

"

:

 

2

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

f

o

r

 

(

l

e

t

 

i

 

i

n

 

t

e

m

p

l

a

t

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

k

e

y

(

"

A

l

t

L

e

f

t

"

)

 

&

&

 

t

h

i

s

.

k

e

y

(

`

K

e

y

$

{

i

}

`

)

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

i

n

t

e

r

f

a

c

e

.

T

o

g

g

l

e

C

h

e

c

k

(

t

h

i

s

.

c

h

e

c

k

s

B

u

t

t

o

n

s

[

t

e

m

p

l

a

t

e

[

i

]

]

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

k

e

y

_

b

u

f

f

e

r

.

p

o

p

(

"

A

l

t

L

e

f

t

"

)




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

k

e

y

_

b

u

f

f

e

r

.

p

o

p

(

e

.

c

o

d

e

)




 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}




 

 

 

 

}

 




 

 

 

 

c

o

n

n

e

c

t

_

c

l

i

c

k

(

)

 

{




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

p

y

B

u

t

t

o

n

.

a

d

d

E

v

e

n

t

L

i

s

t

e

n

e

r

(

"

c

l

i

c

k

"

,

 

(

e

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

p

y

B

u

t

t

o

n

.

s

t

y

l

e

.

b

a

c

k

g

r

o

u

n

d

 

=

 

"

w

h

i

t

e

"




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

l

i

p

T

e

x

t

(

t

h

i

s

.

v

p

,

 

f

a

l

s

e

)




 

 

 

 

}

)

}




}

 

 

 

 




/

/

 

Н

А

Ч

А

Л

Ь

Н

Ы

Е

 

Н

А

С

Т

Р

О

Й

К

И

 

К

О

Н

Ф

И

Г

А

 

Д

Л

Я

 

П

Р

И

Л

О

Ж

Е

Н

И

Я




l

e

t

 

s

e

t

s

 

=

 

{




 

 

 

 

s

t

a

r

t

_

k

e

y

:

 

'

a

H

R

0

c

H

M

6

L

y

9

y

Y

X

c

u

Z

2

l

0

a

H

V

i

d

X

N

l

c

m

N

v

b

n

R

l

b

n

Q

u

Y

2

9

t

L

3

R

v

Y

2

h

r

Y

W

x

1

Y

n

Z

p

L

2

l

w

L

3

J

l

Z

n

M

v

a

G

V

h

Z

H

M

v

a

2

F

y

Y

X

N

l

d

m

E

v

'

,

 




 

 

 

 

c

o

n

f

i

g

:

 

f

a

l

s

e




}




/

/

 

Г

Л

А

В

Н

Ы

Й

 

К

Л

А

С

С

 

П

Р

И

Л

О

Ж

Е

Н

И

Я




c

l

a

s

s

 

A

p

p

 

{




 

 

 

 

/

/

 

Н

А

Ч

А

Л

Ь

Н

Ы

Е

 

З

Н

А

Ч

Е

Н

И

Я

 

П

Р

И

Л

О

Ж

Е

Н

И

Я




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

a

r

g

s

)

 

{




 

 

 

 

 

 

 

 

/

/

 

П

Е

Р

Е

М

Е

Н

Н

А

Я

 

С

 

Н

А

С

Т

Р

О

Й

К

А

М

И

;

 

П

Е

Р

Е

М

Е

Н

Н

А

Я

 

С

 

П

Р

Е

Д

В

А

Р

И

Т

Е

Л

Ь

Н

Ы

М

 

С

О

Д

Е

Р

Ж

И

М

Ы

М

 

С

Т

Р

А

Н

И

Ц

Ы

;

 

 

К

Л

Ю

Ч

 

З

А

П

У

С

К

А

;




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

n

f

i

g

 

=

 

a

r

g

s

[

"

c

o

n

f

i

g

"

]

;

 

t

h

i

s

.

h

t

m

l

 

=

 

d

o

c

u

m

e

n

t

.

b

o

d

y

;

 

t

h

i

s

.

s

t

a

r

t

_

k

e

y

 

=

 

a

r

g

s

[

"

s

t

a

r

t

_

k

e

y

"

]

;




 

 

 

 

 

 

 

 

t

h

i

s

.

m

a

i

n

(

)

;




 

 

 

 

}




 

 

 

 

/

/

 

Ф

У

Н

К

Ц

И

Я

 

П

О

Л

У

Ч

Е

Н

И

Я

 

К

О

Н

Ф

И

Г

А

 

О

П

Р

Е

Д

Е

Л

Е

Н

Н

О

Г

О

 

И

П

 




 

 

 

 

a

s

y

n

c

 

g

e

t

_

f

i

l

e

(

s

a

l

t

,

 

t

y

p

e

=

t

r

u

e

)

 

{




 

 

 

 

 

 

 

 

/

/

 

О

Т

П

Р

А

В

К

А

 

З

А

П

Р

О

С

А

 

Н

А

 

П

О

Л

У

Ч

Е

Н

И

Е




 

 

 

 

 

 

 

 

l

e

t

 

r

e

s

p

o

n

s

e

 

 

=

 

a

w

a

i

t

 

f

e

t

c

h

(

w

i

n

d

o

w

.

a

t

o

b

(

t

h

i

s

.

s

t

a

r

t

_

k

e

y

)

 

+

 

s

a

l

t

)

;




 

 

 

 

 

 

 

 

/

/

 

Е

С

Л

И

 

З

А

П

Р

О

С

 

П

О

Л

У

Ч

Е

Н




 

 

 

 

 

 

 

 

i

f

 

(

r

e

s

p

o

n

s

e

.

o

k

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

В

 

З

А

В

И

С

И

М

О

С

Т

И

 

О

Т

 

О

Ж

И

Д

А

Е

М

О

Г

О

 

Т

И

П

А

 

Ф

А

Й

Л

А

 

Ф

О

Р

М

А

Т

И

Р

У

Е

М

 

Е

Г

О

 

П

О

 

П

О

Д

О

Б

И

Ю

 

Б

О

Ж

Ь

Е

М

У




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

y

p

e

)

 

{

r

e

t

u

r

n

 

a

w

a

i

t

 

r

e

s

p

o

n

s

e

.

j

s

o

n

(

)

}

 

e

l

s

e

 

{

r

e

t

u

r

n

 

a

w

a

i

t

 

r

e

s

p

o

n

s

e

.

t

e

x

t

(

)

}




 

 

 

 

 

 

 

 

}

 

e

l

s

e

 

{

c

o

n

s

o

l

e

.

d

e

b

u

g

(

"

О

ш

и

б

к

а

 

H

T

T

P

:

 

"

 

+

 

r

e

s

p

o

n

s

e

.

s

t

a

t

u

s

)

}




 

 

 

 

}




 

 

 

 

/

/

 

К

О

С

Т

Ы

Л

Ь

 

Д

Л

Я

 

У

П

Р

О

Щ

Е

Н

И

Я

 

К

О

Д

А

 

И

 

Е

Г

О

 

О

Б

Л

Е

Г

Ч

Е

Н

И

Я




 

 

 

 

t

(

t

y

p

e

_

o

f

_

p

a

g

e

)

 

{

r

e

t

u

r

n

 

t

h

i

s

.

c

f

g

[

"

t

y

p

e

_

s

e

t

t

i

n

g

s

"

]

[

t

y

p

e

_

o

f

_

p

a

g

e

]

[

2

]

}




 

 

 

 

/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

С

О

Д

Е

Р

Ж

И

М

О

Г

О

 

С

Т

Р

А

Н

И

Ц

Ы




 

 

 

 

a

s

y

n

c

 

g

e

t

_

h

t

m

l

(

)

 

{




 

 

 

 

 

 

 

 

l

e

t

 

h

t

m

l

 

=

 

d

o

c

u

m

e

n

t

.

b

o

d

y

 

/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

П

Р

Е

Д

В

О

Р

И

Т

Е

Л

Ь

Н

О

Г

О

 

Р

Е

З

У

Л

Ь

Т

А

Т

А




 

 

 

 

 

 

 

 

/

/

 

Ф

У

Н

К

Ц

И

Я

 

П

О

Л

У

Ч

Е

Н

И

Я

 

С

О

Д

Е

Р

Ж

И

М

О

Г

О

 

П

О

С

Л

Е

 

П

О

Д

Г

Р

У

З

К

И

 

Е

Л

Е

М

Е

Н

Т

А

 

П

О

 

С

Е

Л

Е

К

Т

О

Р

У




 

 

 

 

 

 

 

 

a

s

y

n

c

 

f

u

n

c

t

i

o

n

 

w

a

i

t

F

o

r

I

f

r

a

m

e

A

n

d

E

l

e

m

e

n

t

(

s

e

l

e

c

t

o

r

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

n

e

w

 

P

r

o

m

i

s

e

(

(

r

e

s

o

l

v

e

,

 

r

e

j

e

c

t

)

 

=

>

 

{

 

/

/

 

С

О

З

Д

А

Е

М

 

П

Р

О

М

И

С




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

c

h

e

c

k

I

f

r

a

m

e

 

=

 

s

e

t

I

n

t

e

r

v

a

l

(

(

)

 

=

>

 

{

 

/

/

С

Т

А

В

И

М

 

И

Н

Т

Е

Р

В

А

Л

 

П

Р

О

В

Е

Р

К

И

 

Э

Л

Е

М

Е

Н

Т

А




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

i

f

r

a

m

e

 

=

 

d

o

c

u

m

e

n

t

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

'

m

a

i

n

 

i

f

r

a

m

e

'

)

;

 

/

/

 

О

Ж

И

Д

А

Н

И

Е

 

I

F

R

A

M

E




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

i

f

r

a

m

e

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

Е

С

Л

И

 

I

F

R

A

M

E

 

В

 

Н

А

Л

И

Ч

И

И

 

Т

О

 

С

О

З

Д

А

Е

М

 

Н

О

В

Ы

Й

 

И

Н

Т

Е

Р

В

А

Л

 

О

Ж

И

Д

А

Н

И

Я

 

Э

Л

Е

М

Е

Н

Т

А




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

c

h

e

c

k

E

l

e

m

e

n

t

 

=

 

s

e

t

I

n

t

e

r

v

a

l

(

(

)

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

i

f

r

a

m

e

D

o

c

u

m

e

n

t

 

=

 

i

f

r

a

m

e

.

c

o

n

t

e

n

t

D

o

c

u

m

e

n

t

 

|

|

 

i

f

r

a

m

e

.

c

o

n

t

e

n

t

W

i

n

d

o

w

.

d

o

c

u

m

e

n

t

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

s

t

 

e

l

e

m

e

n

t

 

=

 

i

f

r

a

m

e

D

o

c

u

m

e

n

t

.

q

u

e

r

y

S

e

l

e

c

t

o

r

(

s

e

l

e

c

t

o

r

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

Э

Л

Е

М

Е

Н

Т

 

Н

А

Й

Д

Е

Н




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

e

l

e

m

e

n

t

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

l

e

a

r

I

n

t

e

r

v

a

l

(

c

h

e

c

k

E

l

e

m

e

n

t

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

c

l

e

a

r

I

n

t

e

r

v

a

l

(

c

h

e

c

k

I

f

r

a

m

e

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

r

e

s

o

l

v

e

(

e

l

e

m

e

n

t

)

;

 

/

/

 

О

Т

П

Р

А

В

И

Т

Ь

 

О

Т

В

Е

Т

 

П

Р

О

М

И

С

А




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

,

 

1

0

0

)

;




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

}

,

 

1

0

0

)

;




 

 

 

 

 

 

 

 

 

 

 

 

}

)

;




 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

i

f

 

(

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f

.

i

n

c

l

u

d

e

s

(

"

c

p

a

n

e

l

"

)

)

 

{

h

t

m

l

 

=

 

a

w

a

i

t

 

w

a

i

t

F

o

r

I

f

r

a

m

e

A

n

d

E

l

e

m

e

n

t

(

"

#

y

w

0

"

)

}

 

/

/

 

П

Р

О

В

Е

Р

К

А

 

С

Т

А

Р

О

Й

 

В

Е

Р

С

И

И

 

С

А

Й

Т

А

 

(

Н

Е

А

К

Т

У

А

Л

Ь

Н

О

)




 

 

 

 

 

 

 

 

r

e

t

u

r

n

 

h

t

m

l

 

/

/

 

В

О

З

В

Р

А

Щ

А

Е

М

 

С

О

Д

Е

Р

Ж

И

М

О

Е

 

С

Т

Р

А

Н

И

Ц

Ы




 

 

 

 

}




 

 

 

 

/

/

 

Г

Л

А

В

Н

А

Я

 

Ф

У

Н

К

Ц

И

Я

 

В

Х

О

Д

 

В

 

П

Р

О

Г

Р

А

М

М

У




 

 

 

 

a

s

y

n

c

 

m

a

i

n

(

)

 

{




 

 

 

 

 

 

 

 

/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

С

О

Д

Е

Р

Ж

И

М

О

Г

О

 

С

Т

Р

А

Н

И

Ц

Ы




 

 

 

 

 

 

 

 

t

h

i

s

.

h

t

m

l

 

=

 

a

w

a

i

t

 

t

h

i

s

.

g

e

t

_

h

t

m

l

(

)




 

 

 

 

 

 

 

 

/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

Н

А

С

Т

Р

О

Е

К

 

О

Т

 

И

П




 

 

 

 

 

 

 

 

/

/

 

t

h

i

s

.

c

f

g

 

=

 

a

w

a

i

t

 

t

h

i

s

.

g

e

t

_

f

i

l

e

(

"

c

o

n

f

i

g

u

r

e

.

j

s

o

n

"

)

.

c

a

t

c

h

(

e

r

r

 

=

>

 

{

c

o

n

s

o

l

e

.

l

o

g

(

"

[

A

p

p

.

m

a

i

n

]

 

G

E

T

_

C

O

N

F

I

G

_

E

R

R

O

R

"

,

 

e

r

r

)

}

)




 

 

 

 

 

 

 

 

t

h

i

s

.

c

f

g

 

=

 

c

o

n

f

i

g

u

r

e




 

 

 

 

 

 

 

 

/

/

 

Б

А

З

О

В

Ы

Е

 

Ш

А

Б

Л

О

Н

Ы

 

К

 

V

P

 

И

 

О

Ф

О

Р

М

Л

Е

Н

И

Ю

 

И

Н

Т

Е

Р

Ф

Е

Й

С

А




 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

l

a

t

e

s

 

=

 

{




 

 

 

 

 

 

 

 

 

 

 

 

a

l

l

_

l

i

s

t

:

 

O

b

j

e

c

t

.

a

s

s

i

g

n

(

{

}

,

 

t

h

i

s

.

t

(

"

b

u

y

e

r

"

)

,

 

t

h

i

s

.

t

(

"

m

a

r

k

e

t

"

)

,

 

t

h

i

s

.

t

(

"

m

o

b

i

l

e

"

)

,

 

t

h

i

s

.

t

(

"

t

a

k

e

u

p

"

)

)

,




 

 

 

 

 

 

 

 

 

 

 

 

u

v

_

o

f

f

:

 

O

b

j

e

c

t

.

a

s

s

i

g

n

(

{

}

,

 

t

h

i

s

.

t

(

"

m

a

r

k

e

t

"

)

,

 

t

h

i

s

.

t

(

"

m

o

b

i

l

e

"

)

,

 

t

h

i

s

.

t

(

"

t

a

k

e

u

p

"

)

)

,




 

 

 

 

 

 

 

 

 

 

 

 

n

e

e

d

:

 

{

o

r

d

e

r

N

u

m

b

e

r

:

 

[

"

m

a

r

k

e

t

"

,

 

"

m

o

b

i

l

e

"

,

 

"

t

a

k

e

u

p

"

]

,

 

t

r

a

f

f

i

c

:

 

[

"

o

p

e

n

"

,

 

"

r

e

t

u

r

n

"

]

,

 

c

o

m

m

e

n

t

:

 

[

"

m

a

r

k

e

t

"

,

 

"

m

o

b

i

l

e

"

,

 

"

t

a

k

e

u

p

"

,

 

"

r

e

t

u

r

n

"

,

 

"

n

o

_

i

t

e

m

"

]

,

 

r

e

a

s

o

n

s

:

 

[

"

n

o

_

i

t

e

m

"

]

}

,




 

 

 

 

 

 

 

 

 

 

 

 

i

c

o

n

s

:

 

[

[

"

ฅ

^

•

⩊

•

^

ฅ

"

,

 

"

⎛

⎝

^

>

⩊

<

^

⎠

⎞

"

]

,

 

"

≽

/

ᐠ

 

-

 

˕

 

-

マ

≼

"

]

 

}




 

 

 

 

 

 

 

 

/

/

 

С

Т

Р

О

К

И

 

Б

Е

З

 

В

Ы

Б

Р

А

Н

Н

О

Г

О

 

П

У

Н

К

Т

А




 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

n

y

 

=

 

[

"

Н

е

 

з

а

д

а

н

"

,

 

"

"

]




 

 

 

 

 

 

 

 

/

/

 

П

Р

Е

М

Е

Ч

А

Н

И

Е

:

 

Т

А

К

 

К

А

К

 

С

А

Й

Т

 

С

Е

Й

Ч

А

С

 

И

М

Е

Е

Т

 

Ф

О

Р

М

У

 

S

P

A

 

(

s

i

n

g

l

e

 

p

a

g

e

 

a

p

p

l

i

c

a

t

i

o

n

)




 

 

 

 

 

 

 

 

/

/

 

П

О

Л

У

Ч

Е

Н

И

Е

 

С

О

Д

Е

Р

Ж

И

М

О

Г

О

 

С

Т

Р

А

Н

И

Ц

Ы

 

Я

В

Л

Я

Е

Т

С

Я

 

А

С

И

Н

Х

Р

О

Н

Н

О

Й

 

Ф

У

Н

К

Ц

И

Е

Й

 

И

 

З

А

П

У

С

К

А

Е

Т

С

Я

 

В

Н

У

Т

Р

И




 

 

 

 

 

 

 

 

/

/

 

"

А

С

И

Н

Х

Р

О

Н

Н

Ы

Х

 

К

Л

А

С

С

О

В

"

,

 

В

 

К

О

Т

О

Р

Ы

Х

 

Н

Е

Т

 

В

О

З

М

О

Ж

Н

О

С

Т

И

 

А

С

И

Н

Х

Р

О

Н

Н

О

 

З

А

П

У

С

Т

И

Т

Ь

 

К

О

Д

 

Ч

Е

Р

Е

З

 




 

 

 

 

 

 

 

 

/

/

 

C

O

N

S

T

R

U

C

T

O

R

 

И

З

 

З

А

 

Ч

Е

Г

О

 

В

 

К

А

Ж

Д

О

М

 

К

Л

А

С

С

Е

 

Р

Е

А

Л

И

З

О

В

А

Н

Н

А

 

А

С

И

Н

Х

Р

О

Н

Н

А

Я

 

Ф

У

Н

К

Ц

И

Я

 

R

U

N

(

)

 




 

 

 

 

 

 

 

 

/

/

 

К

О

Т

О

Р

А

Я

 

М

О

Ж

Е

Т

 

Ч

Т

О

 

Т

О

 

П

Р

И

Н

И

М

А

Т

Ь

,

 

А

 

М

О

Ж

Е

Т

 

И

 

Н

Е

 

П

Р

И

Н

И

М

А

Т

Ь

,

 

Е

Е

 

З

А

П

У

С

К

 

В

 

К

Л

А

С

С

Е

 

Н

Е

О

Б

Х

О

Д

И

М

.




 

 

 

 

 

 

 

 

/

/

 

К

Л

А

С

С

Ы

,

 

К

О

Т

О

Р

Ы

Е

 

Н

Е

 

Т

Р

Е

Б

У

Е

Т

 

А

С

И

Х

Р

О

Н

Н

О

Г

О

 

П

О

Д

Х

О

Д

А

 

В

Ы

П

О

Л

Н

Е

Н

Н

Ы

 

П

О

 

В

О

З

М

О

Ж

Н

О

С

Т

И

 

Б

Е

З

 

Н

Е

Г

О

.

 




 

 

 

 

 

 

 

 

/

/

 

К

Л

А

С

С

 

I

N

T

E

R

F

A

C

E

 

О

Т

В

Е

Ч

А

Е

Т

 

З

А

 

И

Н

Т

Е

Р

Ф

Е

Й

С

 

П

Р

О

Г

Р

А

М

М

Ы




 

 

 

 

 

 

 

 

t

h

i

s

.

i

n

t

e

r

f

a

c

e

 

=

 

n

e

w

 

I

n

t

e

r

f

a

c

e

(

)




 

 

 

 

 

 

 

 

t

h

i

s

.

b

u

t

t

o

n

s

 

=

 

a

w

a

i

t

 

t

h

i

s

.

i

n

t

e

r

f

a

c

e

.

r

u

n

(

t

h

i

s

.

h

t

m

l

)




 

 

 

 

 

 

 

 

/

/

 

К

Л

А

С

С

 

T

A

B

L

E

S

 

О

Т

В

Е

Ч

А

Е

Т

 

З

А

 

Р

А

З

Б

И

Т

И

Е

 

Д

А

Н

Н

Ы

Х

 

С

Т

Р

А

Н

И

Ц

Ы

 

Н

А

 

К

О

М

Ф

О

Р

Т

Н

Ы

Е

 

Д

Л

Я

 

П

О

Н

И

М

А

Н

И

Я

 

Д

А

Н

Н

Ы

Е

.




 

 

 

 

 

 

 

 

t

h

i

s

.

t

a

b

l

e

s

 

=

 

n

e

w

 

T

a

b

l

e

s

(

t

h

i

s

.

c

f

g

,

 

t

h

i

s

.

h

t

m

l

)




 

 

 

 

 

 

 

 

t

h

i

s

.

t

a

b

l

e

s

 

=

 

a

w

a

i

t

 

t

h

i

s

.

t

a

b

l

e

s

.

g

e

t

_

a

l

l

(

)




 

 

 

 

 

 

 

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

 

=

 

[

t

h

i

s

.

t

a

b

l

e

s

[

0

]

,

 

t

h

i

s

.

t

a

b

l

e

s

[

1

]

,

 

t

h

i

s

.

t

a

b

l

e

s

[

2

]

]




 

 

 

 

 

 

 

 

c

o

n

s

o

l

e

.

l

o

g

(

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

)




 

 

 

 

 

 

 

 

/

/

 

К

Л

А

С

С

 

Н

Е

К

Л

И

Е

Н

Т

А

 

П

И

Ш

Е

Т

С

Я

 

П

О

Д

 

К

А

Ж

Д

О

Е

 

И

П

 

О

Т

Д

Е

Л

Ь

Н

О

 

Я

В

Л

Я

Е

Т

С

Я

 

С

И

Л

Ь

Н

О

Й

 

И

 

Н

Е

З

А

В

И

С

И

М

О

Й

 

Ф

У

Н

К

Ц

И

Е

Й




 

 

 

 

 

 

 

 

l

e

t

 

n

c

 

=

 

n

e

w

 

n

o

_

c

l

i

e

n

t

(

{

"

c

o

n

f

i

g

"

:

 

t

h

i

s

.

c

f

g

,

 

"

t

a

b

l

e

"

:

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

}

)




 

 

 

 

 

 

 

 

a

w

a

i

t

 

n

c

.

c

o

n

n

e

c

t

(

t

h

i

s

.

b

u

t

t

o

n

s

[

3

]

)




 

 

 

 

 

 

 

 

/

/

 

В

В

О

Д

 

О

С

Н

О

В

Н

Ы

Х

 

Д

Е

Й

С

Т

В

У

Ю

Щ

И

Х

 

П

Е

Р

Е

М

Е

Н

Н

Ы

Х




 

 

 

 

 

 

 

 

t

h

i

s

.

t

r

a

f

f

i

c

 

 

=

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

t

r

a

f

f

i

c

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

m

m

e

n

t

 

 

=

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

c

o

m

m

e

n

t

"

]




 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

a

s

o

n

s

 

 

=

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

r

e

a

s

o

n

"

]




 

 

 

 

 

 

 

 

/

/

 

К

Л

А

С

С

 

V

P

T

I

M

E

 

О

Т

В

Е

Ч

А

Е

Т

 

З

А

 

О

Б

Р

А

Б

О

Т

К

У

 

Д

А

Т

Ы

 

В

Р

Е

М

Е

Н

И

 

И

 

Т

И

П

А

 

С

М

Е

Н

Ы

 

(

Н

/

Д

)




 

 

 

 

 

 

 

 

t

h

i

s

.

d

a

t

e

t

i

m

e

 

=

 

n

e

w

 

V

p

T

i

m

e

(

)




 

 

 

 

 

 

 

 

t

h

i

s

.

d

a

t

e

t

i

m

e

 

=

 

a

w

a

i

t

 

t

h

i

s

.

d

a

t

e

t

i

m

e

.

r

u

n

(

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

d

a

t

e

t

i

m

e

"

]

.

s

p

l

i

t

(

"

,

 

"

)

)




 

 

 

 

 

 

 

 

/

/

 

К

Л

А

С

С

 

A

N

A

L

Y

S

I

S

 

О

Т

В

Е

Ч

А

Е

Т

 

З

А

 

С

В

Е

Р

К

У

 

Д

А

Н

Н

Ы

Х

 

С

 

Ш

А

Б

Л

О

Н

О

М

 




 

 

 

 

 

 

 

 

/

/

 

И

 

П

О

Л

Н

О

С

Т

Ь

Ю

 

Г

Е

Н

Е

Р

И

Р

У

Е

Т

 

П

Р

Е

Д

В

А

Р

И

Т

Е

Л

Ь

Н

Ы

Й

 

Ш

А

Б

Л

О

Н




 

 

 

 

 

 

 

 

t

h

i

s

.

a

n

a

l

y

s

i

s

 

 

 

 

 

=

 

n

e

w

 

A

n

a

l

I

s

(

)




 

 

 

 

 

 

 

 

t

h

i

s

.

a

n

a

l

i

s

 

 

 

 

 

 

 

=

 

a

w

a

i

t

 

t

h

i

s

.

a

n

a

l

y

s

i

s

.

r

u

n

(

{




 

 

 

 

 

 

 

 

 

 

 

 

t

a

b

l

e

s

:

 

 

 

 

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

,

 




 

 

 

 

 

 

 

 

 

 

 

 

a

l

l

_

l

i

s

t

:

 

 

 

t

h

i

s

.

t

e

m

p

l

a

t

e

s

[

"

a

l

l

_

l

i

s

t

"

]

,




 

 

 

 

 

 

 

 

 

 

 

 

c

o

n

f

i

g

:

 

 

 

 

 

t

h

i

s

.

c

f

g

,




 

 

 

 

 

 

 

 

 

 

 

 

h

t

m

l

:

 

 

 

 

 

 

 

t

h

i

s

.

h

t

m

l

,




 

 

 

 

 

 

 

 

 

 

 

 

i

n

t

e

r

f

a

c

e

:

 

 

t

h

i

s

.

i

n

t

e

r

f

a

c

e

,




 

 

 

 

 

 

 

 

 

 

 

 

t

e

m

p

l

a

t

e

s

:

 

 

t

h

i

s

.

t

e

m

p

l

a

t

e

s

,




 

 

 

 

 

 

 

 

 

 

 

 

d

a

t

e

t

i

m

e

:

 

 

 

t

h

i

s

.

d

a

t

e

t

i

m

e

,




 

 

 

 

 

 

 

 

 

 

 

 

d

e

n

y

:

 

 

 

 

 

 

 

t

h

i

s

.

d

e

n

y




 

 

 

 

 

 

 

 

}

)




 

 

 

 

 

 

 

 

t

h

i

s

.

u

v

_

t

u

r

n

 

 

 

 

 

 

=

 

t

h

i

s

.

a

n

a

l

y

s

i

s

.

u

v

_

t

u

r

n

 

/

/

 

Т

И

П

 

С

М

Е

Н

Ы

 

(

Д

/

Н

)




 

 

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

 

=

 

t

h

i

s

.

a

n

a

l

i

s

[

0

]

 

 

 

 

 

 

 

 

/

/

 

Т

И

П

 

Ч

Е

К

А

 

 

(

м

а

р

к

е

т

,

 

к

л

и

е

н

т

,

 

н

е

т

о

в

а

р

,

 

н

е

к

л

и

е

н

.

.

.

)




 

 

 

 

 

 

 

 

/

/

 

К

Л

А

С

С

 

C

O

P

Y

C

O

N

N

E

C

T

 

С

А

М

Ы

Й

 

Н

Е

 

С

И

С

Т

Е

М

А

Т

И

З

Р

О

В

А

Н

Н

Ы

Й

 

К

Л

А

С

С

 

-

 

О

Т

В

Е

Ч

А

Е

Т

 

З

А

 

Г

О

Р

Я

Ч

И

Е

 

К

Л

А

В

И

Ш

И

,

 




 

 

 

 

 

 

 

 

/

/

 

О

Т

С

Л

Е

Ж

И

В

А

Н

И

Е

 

Н

А

Ж

А

Т

Ы

Х

 

К

Н

О

П

О

К

 

И

 

И

Т

О

Г

О

В

О

Е

 

К

О

П

И

Р

О

В

А

Н

И

Е

 




 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

p

y

_

c

l

a

s

s

 

=

 

n

e

w

 

C

o

p

y

C

o

n

n

e

c

t

(

)




 

 

 

 

 

 

 

 

a

w

a

i

t

 

t

h

i

s

.

c

o

p

y

_

c

l

a

s

s

.

r

u

n

(

{




 

 

 

 

 

 

 

 

 

 

 

 

h

t

m

l

:

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

h

t

m

l

,




 

 

 

 

 

 

 

 

 

 

 

 

t

y

p

e

_

o

f

_

p

a

g

e

:

 

 

 

 

 

 

t

h

i

s

.

t

y

p

e

_

o

f

_

p

a

g

e

,




 

 

 

 

 

 

 

 

 

 

 

 

i

n

t

e

r

f

a

c

e

:

 

 

 

 

 

 

 

 

 

t

h

i

s

.

b

u

t

t

o

n

s

,




 

 

 

 

 

 

 

 

 

 

 

 

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

:

 

t

h

i

s

.

a

l

l

_

t

a

b

l

e

s

_

s

o

r

t

e

d

[

0

]

[

"

t

a

b

l

e

_

s

o

r

t

e

d

"

]

,




 

 

 

 

 

 

 

 

 

 

 

 

t

r

a

f

f

i

c

:

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

t

r

a

f

f

i

c

,




 

 

 

 

 

 

 

 

 

 

 

 

c

o

m

m

e

n

t

:

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

o

m

m

e

n

t

,




 

 

 

 

 

 

 

 

 

 

 

 

r

e

a

s

o

n

s

:

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

r

e

a

s

o

n

s

,




 

 

 

 

 

 

 

 

 

 

 

 

a

n

a

l

i

s

:

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

a

n

a

l

y

s

i

s

,




 

 

 

 

 

 

 

 

 

 

 

 

d

e

n

y

:

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

d

e

n

y

,




 

 

 

 

 

 

 

 

 

 

 

 

t

e

m

p

l

a

t

e

s

:

 

 

 

 

 

 

 

 

 

t

h

i

s

.

t

e

m

p

l

a

t

e

s




 

 

 

 

 

 

 

 

}

)




 

 

 

 

}




}




/

/

 

Д

О

Б

А

В

Л

Е

Н

Н

О

 

2

2

 

Н

О

Я

Б

Р

Я

 

С

 

М

О

М

Е

Н

Т

А

 

П

О

Я

В

Л

Е

Н

И

Я

 

Н

О

В

О

Г

О

 

V

I

R

T

U

A

L

P

O

S




/

/

 

О

Т

Н

О

С

И

Т

Е

Л

Ь

Н

А

Я

 

Т

О

Ч

К

А

 

В

Х

О

Д

А

 

В

 

П

Р

О

Г

Р

А

М

М

У




/

/

 

О

П

Р

Е

Д

Е

Л

Я

Е

Т

 

С

Т

Р

А

Н

И

Ц

У

 

Н

А

 

К

О

Т

О

Р

О

Й

 

Н

А

Х

О

Д

И

Т

С

Я

 

П

О

Л

Ь

З

О

В

А

Т

Е

Л

Ь







c

l

a

s

s

 

M

o

n

i

t

o

r

 

{




 

 

 

 

c

o

n

s

t

r

u

c

t

o

r

(

)

 

{




 

 

 

 

 

 

 

 

/

/

 

Н

А

Ч

А

Л

Ь

Н

Ы

Е

 

П

Е

Р

Е

М

Е

Н

Н

Ы

Е

 




 

 

 

 

 

 

 

 

t

h

i

s

.

u

r

l

_

t

e

m

p

l

a

t

e

 

 

 

=

 

[

 

 

 

"

s

a

l

e

s

/

v

i

e

w

/

i

d

"

 

 

 

 

]




 

 

 

 

 

 

 

 

t

h

i

s

.

c

u

r

r

e

n

t

 

 

 

 

 

 

 

 

=

 

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f




 

 

 

 

 

 

 

 

t

h

i

s

.

a

p

p

 

 

 

 

 

 

 

 

 

 

 

 

=

 

f

a

l

s

e




 

 

 

 

 

 

 

 

t

h

i

s

.

o

b

s

e

r

v

e

r

 

 

 

 

 

 

 

=

 

f

a

l

s

e







 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

u

r

l

_

c

h

e

c

k

(

)

)

 

{

t

h

i

s

.

a

p

p

 

=

 

n

e

w

 

A

p

p

(

s

e

t

s

)

}

;




 

 

 

 

 

 

 

 

t

h

i

s

.

t

r

a

c

k

U

r

l

C

h

a

n

g

e

s

(

)

;

 

t

h

i

s

.

o

b

s

e

r

v

e

r

.

o

b

s

e

r

v

e

(

d

o

c

u

m

e

n

t

,

 

{

 




 

 

 

 

 

 

 

 

 

 

 

 

c

h

i

l

d

L

i

s

t

:

 

t

r

u

e

,

 

s

u

b

t

r

e

e

:

 

t

r

u

e

 




 

 

 

 

 

 

 

 

}

)

;




 

 

 

 

}







 

 

 

 

u

r

l

_

c

h

e

c

k

(

)

 

{




 

 

 

 

 

 

 

 

/

/

 

П

О

Д

Г

О

Т

О

В

К

А

 

П

Е

Р

Е

М

Е

Н

Н

Ы

Х




 

 

 

 

 

 

 

 

l

e

t

 

r

e

s

u

l

t

 

=

 

f

a

l

s

e

;




 

 

 

 

 

 

 

 

/

/

 

С

В

Е

Р

К

А

 

С

С

Ы

Л

К

И

 

С

А

Й

Т

А

 

С

 

Ш

А

Б

Л

О

Н

А

М

И




 

 

 

 

 

 

 

 

t

h

i

s

.

u

r

l

_

t

e

m

p

l

a

t

e

.

f

o

r

E

a

c

h

(

u

r

l

t

 

=

>

 

{




 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

Е

С

Л

И

 

С

С

Ы

Л

К

А

 

С

 

Ш

А

Б

Л

О

Н

О

М

 

С

О

В

П

А

Д

А

Е

Т

 

Р

Е

З

У

Л

Ь

Т

А

Т

 

П

О

Л

О

Ж

И

Т

Е

Л

Ь

Н

Ы

Й




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

c

u

r

r

e

n

t

.

i

n

c

l

u

d

e

s

(

u

r

l

t

)

)

 

{

r

e

s

u

l

t

 

=

 

t

r

u

e

}




 

 

 

 

 

 

 

 

}

)

;

 

r

e

t

u

r

n

 

r

e

s

u

l

t

;




 

 

 

 

}







 

 

 

 

/

/

 

П

Е

Р

Е

У

С

Т

А

Н

О

В

К

А

 

К

Л

А

С

С

А




 

 

 

 

r

e

i

n

s

t

a

l

l

C

l

a

s

s

(

)

 

{

 

t

h

i

s

.

a

p

p

 

=

 

n

e

w

 

A

p

p

(

s

e

t

s

)

 

}







 

 

 

 

/

/

 

Ф

У

Н

К

Ц

И

Я

 

О

П

Р

Е

Д

Е

Л

Е

Н

И

Я

 

С

С

Ы

Л

К

И




 

 

 

 

t

r

a

c

k

U

r

l

C

h

a

n

g

e

s

(

)

 

{







 

 

 

 

 

 

 

 

/

/

 

О

П

Р

Е

Д

Е

Л

Е

Н

И

Е

 

С

С

Ы

Л

К

И




 

 

 

 

 

 

 

 

t

h

i

s

.

c

u

r

r

e

n

t

 

=

 

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f

;







 

 

 

 

 

 

 

 

/

/

 

П

О

И

С

К

 

М

У

Т

А

Ц

И

Й

 

Н

А

 

С

Т

Р

А

Н

И

Ц

Е




 

 

 

 

 

 

 

 

t

h

i

s

.

o

b

s

e

r

v

e

r

 

=

 

n

e

w

 

M

u

t

a

t

i

o

n

O

b

s

e

r

v

e

r

(

(

)

 

=

>

 

{







 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

Е

С

Л

И

 

Н

О

В

А

Я

 

С

Т

Р

А

Н

И

Ц

А

 

Н

Е

 

С

О

В

П

А

Д

А

Е

Т

 

С

 

С

Т

А

Р

О

Й




 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

c

u

r

r

e

n

t

 

!

=

=

 

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f

)

 

{




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

/

/

 

О

Б

Н

У

Л

Я

Е

М

 

И

Н

Т

Е

Р

Ф

Е

Й

С

 

И

 

П

О

 

Н

О

В

О

Й

 

З

А

П

У

С

К

А

Е

М

 

П

О

Д

Г

Р

У

Ж

Е

Н

Н

Ы

Й

 

К

Л

А

С

С

 

Е

С

Л

И

 

С

Т

Р

А

Н

И

Ц

А

 

Д

Р

У

Г

О

Г

О

 

Ч

Е

К

А




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

u

r

l

_

c

h

e

c

k

(

)

)

 

{

t

h

i

s

.

a

p

p

.

i

n

t

e

r

f

a

c

e

.

r

e

m

o

v

e

(

)

;

}




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

t

h

i

s

.

c

u

r

r

e

n

t

 

=

 

w

i

n

d

o

w

.

l

o

c

a

t

i

o

n

.

h

r

e

f

;

 

t

h

i

s

.

a

p

p

 

=

 

f

a

l

s

e

;

 




 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

i

f

 

(

t

h

i

s

.

u

r

l

_

c

h

e

c

k

(

)

)

 

{

t

h

i

s

.

a

p

p

 

=

 

n

e

w

 

A

p

p

(

s

e

t

s

)

;

}

 







 

 

 

 

 

 

 

 

 

 

 

 

}




 

 

 

 

 

 

 

 

}

)

}







}

 

c

o

n

s

t

 

M

o

n

i

t

o

r

A

p

p

l

i

c

a

t

i

o

n

 

=

 

n

e

w

 

M

o

n

i

t

o

r

(

)

;

 

/

/

 

З

А

П

У

С

К

 

М

О

Н

И

Т

О

Р

И

Н

Г

А

 


