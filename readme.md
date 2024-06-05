Traccia

> Rifare l'esercizio della to do list visto insieme a lezione. Ogni oggetto dovra' avere almeno due proprietà:

    text, una stringa che indica il testo del todo
    done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1

> Stampare all'interno di una lista HTML un item per ogni todo.
> Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2

> Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3

> Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:

> 1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

> 2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente

Svolgimento:

- inserisco in data() l'array di oggetti della lista
- inserisco nel html il v-for con riferimento all'array oggetti
- in methods scrivo la funzione per eliminare gli elementi della lista al click del pulsante
- in methods scrivo la funzione per inserire punti nella lista attraverso imput testuale e premendo invio
- inserisco i tag button e input nel dom per utilizzare le funzioni create