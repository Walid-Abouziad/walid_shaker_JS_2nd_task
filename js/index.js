// quoteList array

var quoteList = [
    {'quote': 'Some day you will be old enough to start reading fairy tales again.',
    'author': 'C.S. Lewis', 
    },
    {'quote': 'Do what you can, with what you have, where you are.',
    'author': 'Theodore Roosevelt', 
    },
    {'quote': 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'author': 'Winston S. Churchill', 
    },
    {'quote': 'Instead of worrying about what you cannot control, shift your energy to what you can create.',
    'author': 'Roy T. Bennett', 
    },
    {'quote': 'Be yourself; everyone else is already taken.',
    'author': 'Oscar Wilde', 
    },
    {'quote': 'Anyone who has never made a mistake has never tried anything new.',
    'author': 'Albert Einstein', 
    },
    {'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    'author': 'Mahatma Gandhi', 
    },
    {'quote': 'I was brought up to believe that how I saw myself was more important than how others saw me',
    'author': 'Muhammad Anwar el-Sadat', 
    },
    {'quote': 'As per usual, trouble comes in several directions at once.',
    'author': 'Murphy S Law', 
    },
    {'quote': 'Wisdom.... comes not from age, but from education and learning.',
    'author': 'Anton Chekhov', 
    },
];

// function to generate random Quote from array

    function generateQuote(){
        var random = Math.floor(Math.random() * quoteList.length) ;
        var quoteName = quoteList[random].quote ;
        var authorName = quoteList[random].author ;
        document.getElementById("quoteContent").innerHTML= ' " '  + quoteName + ' " ' ;
        document.getElementById("quoteAuthor").innerHTML = "--" + authorName ;
        if(quoteList.length > 1 ){
        quoteList.splice(random,1);
    }else{
        alert("there is no more quote to display, you exceed the number of quote array , waiting my Bonus HAHAHAHAHAHA");
    }
}
