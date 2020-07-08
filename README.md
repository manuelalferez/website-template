+# Breaking down a simple Website template 
- Markdown
- favicon.ico
- App.css
- App.js
- index.css
- index.js
- README.md
- package.json

## [Markdown](https://www.markdownguide.org/)
- markup language for creating plain text document
- has `.md` or `.markdown` extension.
- can be used for almost everything especially for creating  `website,Documents,notes,bookd,presentations, email messages & technical documentation`.

###Pros
- can be created on any device running any operation system.
- have so many text editor applications that support `Markdown format` 
- easy to switch among `markdown applications` and can read your Markdown files in every `markdown applications`.
- are supported by lots of desktop and web-based applications.
           
###cons
- dont have click buttons to format words and phrase.
- need to know `Markdown syntax`to the text to indicate which word and phrase should be different.
- Depending on the application you use, sometime it is not able to preview the formatted document in real time.


#### Folders

* `.data`: The `.data` file extension is given to the data files that have been created by and used for a variety of different software applications. These files can be used on the Linux, Unix and MAC operating systems. The majority of DATA files are saved in the binary file format.

##favicon.ico
- a small logo found in front of the visited URL
- can be seen in Address Bar, and is used to promote a company, or a trademark 
- user can quickly locate the URL he wants to click in his bookmarked sites.
- here is the futher explination [favicon](https://en.wikipedia.org/wiki/Favicon) 

##Apple touch icon  
- Similar to the Favicon, the Apple Touch Icon or apple-touch-icon.png is a file 
- used for a web page icon on the Apple iPhone, iPod Touch, and iPad. 
- to bookmark web page or adds web page to user home screen

(want to go deeper about `Apple touch icon` [Click Here](https://www.fastcomet.com/blog/what-is-an-apple-touch-icon-and-how-to-add-it) )
 
* `App.js`: Here is application code. Only that you need to understand is that we get the information from `data.md` and convert it with `Markdown` component and then we submit converted in a page.  

* `App.css`: Put here your *CSS* code. Remember this to apply styles: 

  ![](http://i.imgur.com/RvU3pmS.png)

To explain the other files and go into more detail on the internal workings of the application requires more advanced knowledge of React and that is not the purpose of this repository.



## Build steps

1. **Clone** the project

   ```
   git clone https://github.com/manuelalferez/website-template
   ```

2. **Install packages**

   ```
   npm install
   ```

3. **Run** the project

   ```
   npm start
   ```



## Steps to create your website

1. **Modify** `data.md` file with your website information. 
2. **Apply some styles** by modifying the styles in `App.css` file.
3. That's it!, you already have it!



## Themes 

Project on GitHub with a lot of themes [[Link]](https://github.com/mixu/markdown-styles)

[favicon]: https://en.wikipedia.org/wiki/Favicon   
