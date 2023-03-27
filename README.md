# Google Maps Coordinate Copier
A Google Chrome extension to copy the coordinates of an embedded Google Map on a website

## What is it?
A Google Chrome extension, primarily written by ChatGPT, to find the coordinates of an embedded Google Map on any website, and allow a user to copy those coordinates to their clipboard.

### Intial prompt to ChatGPT:
> I want to build a Google Chrome extension that works with manifest.json v3. I want the chrome extension to be called Google Maps Coordinate Copier. I want the chrome extension to scan the current webpage, find any links to Google Maps, and then find the latitude and longitude that it links to. When a user clicks the extension's icon in the top right of the browser, I want a popup to appear. 
>
> If there is a Google Maps link on the page, I want there to be 3 lines in that popup:
> 1. In bold I want it to say "Latitude:" and then the latitude found
> 2. In bold I want it to say "Longitude:" and then the longitude found
> 3. I want a button that says "Copy Coordinates", that when clicked copies the coordinates to the user's clipboard. After copying, I want the button text to change to "Copied" and remain changed until the user closes and opens the popup again
>
> If there is no Google Maps link on the page, I want the popup to display error text that says "No Google Maps link found on this page :("

## Why is it that?
I wanted to see how fast ChatGPT was going to put me out of a job, and figured this was a simple, and yet complex enough task to answer that question for myself.

If you are interested in using this repository to answer that quesiton for yourself, you can take a look through the commit history. Every commit message will say if the code included was written by me or ChatGPT (and what version of ChatGPT).
The commit description will include the prompt that I gave to ChatGPT to either get the code it generated, or to give it code that I wrote to update it's current understanding of the extension.
This has the added benefit of allowing you, the reader, to decide if any quality issues that arose are the fault of ChatGPT or because I am a terrible "prompt engineer". 

## Current state?
The extension was submitted to the Chrome Web Store on March 24, 2023, and currently is "Pending review" for publication to the store.

Here is a demo video of it working on [this VRBO page](https://www.vrbo.com/1344061?noDates=true&unitId=1902409):

https://user-images.githubusercontent.com/3345162/227622826-e29cabc9-a139-4c96-afec-5414cbfe935c.mp4

<br />
And a demo of it not working on a Chrome new tab page:
<br />
<br />

https://user-images.githubusercontent.com/3345162/227623306-6f39e3fe-e9d6-4e02-afb5-4f05dfe4da46.mp4

## What was it like working with ChatGPT?

I don't have much experience writing Google Chrome extensions, and ChatGPT definitely helped me blast through all of the setup for it. I would say right now,
that the main issues I ran into with it were:
- When presented with an error, it will often attempt to change to a completely new approach, rather than fix the error. By "small error" I mean:
  - Using syntax that would work with a `manifest_version: 2` extension, but not a `manifest_version: 3` extension
  - Using functions that it did not ask for permissions for in the `manifest.json` file, which brings me to my second takeaway
- It seems to lose track of the files it has presented to you.
  - As I said before it would occasionally try to use functions in `popup.js` or `content.js` that it did not ask for permissions for in `manifest.json`. The
  only way I found to remedy this was to suggest to it that it simply did not have the permissions required.
  - When I was trying to style the extension, it would give me css to add to `styles.css` that styled elements that did not exist in my version
  of `popup.html`, but I was able to remedy this by simply asking for an updated version of `popup.html`.
- It is bad at design
  - If you look through the commit history you will see that I got pretty frustrated with the CSS it was giving me to style the extension and ended up just
  taking over that myself.
  - This could just be because I am a terrible "prompt engineer"
  - This could also be because I have a lot of experience with CSS, and am comparatively new to browser extension development, so I was able to more easily
  identify and remedy issues here then in other parts of the extension.
  
## Main takeaway?

My father has been a Microsoft ERP consultant for as long as I can remember. Any time Microsoft releases a new version, they inevitably automate some process
that consultants are usually hired for. This makes a lot of consultants bitter. "They're going to take away our jobs!", they would cry. My father would reply,
"Did you even like doing that? I didn't have any fun doing that. Now we get to have fun going to find the next thing they'll automate."

ChatGPT was able to handle a lot of things that I didn't know how to do, and didn't particularly want to learn. I still needed to help guide it in the right
direction to get it working. I still got to take over the final design, a process that I enjoy. So, as of now, I think it's just going to make web development
a lot more productive, and a lot more fun.

## Does ChatGPT have anything to add?

Prompt:
> I have uploaded the extension to Github. I am writing the readme now. I have added a description and demo of how the extension works, and some feedback on my experience working with you to build it. I have left room at the end for you to have your own section. Is there anything you would like to say about the extension or your experience building it?

Response:
> As an AI language model, I don't have personal experiences or opinions like humans do. However, I'm glad that I was able to assist you in building your Google Chrome extension. If you have any questions or need any further assistance, feel free to ask.
