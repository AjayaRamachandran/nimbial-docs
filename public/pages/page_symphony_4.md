# Symphony Help
Welcome to the primary Symphony help page. Here we'll explain how to do every basic action in Symphony.

## The Editor

![Symphony Editor](/assets/blank-editor.png)

The editor is where you'll create your Symphonies. It's a traditional piano roll interface, with a toolbar up top, the keys along the left, and the grid in the center (which scrubs endlessly to the right). We'll go through each section one-by-one.

### The Toolbar
The toolbar is made up of two halves.
#### Left Half
![Toolbar Left](/assets/editor-toolbar-left.png)
- Play/Pause || **Shortcut: SPACE**
    - Plays the music from where the play head is placed, or pauses what is playing.
- Accidentals
    - Changes what accidentals are displayed as - sharp (#) or flat (b).
- Play Head
    - Sets where music is played from. To operate it, you click it once, then click where in the music you want to play from.
- Brush Type || **Shortcuts: SHIFT, CTRL/CMD**
    - Decides what the mouse should do. Click to cycle through, or press Shift to switch to Select, hold Ctrl to temporarily switch to erase.
- Tempo Controls
    - Controls the speed of playback.
- Beat-length Controls
    - Controls how many tiles are in a beat (marked by lighter tiles).

#### Right Half
![Toolbar Right](/assets/editor-toolbar-right.png)
- Measure-length Controls
    - Controls how many beats (marked by lighter tiles) are in a measure (marked by lightest tiles).
- Color Channel || **Shortcut: Num Keys 1-7**
    - Sets the color channel currently being edited/played back. 7 is the universal view, which plays back all channels at once and does not permit editing.
- Instrument Selection
    - Controls how the current channel will sound when played back.
- Key Signature Controls
    - Decides the Key Signature; affects which grid rows are highlighted/dimmed.

## Keyboard Shortcuts

Below is an exhaustive list of Keyboard shortcuts in the Symphony editor.

## Gestures
#### Two-finger Scroll
Moves the view around the workspace, horizontally and vertically. You can also use the scrub bar at the bottom of the window.
#### Clicking on a Tile
Performs the action that is specified in the action type (top right). These include *Brush, Eraser,* and *Select.*
#### Clicking on a Note (leftmost column)
Plays the note for a short duration, without affecting the workspace. Useful for hearing notes and testing melodies.
#### Dragging across Tiles
In *Select*, shows a simple box window that selects all notes that have any parts sitting within the bounds of the selection. If the drag is done on a selected note or notes, dragging will move that selection rather than spawn a selection window.

## Bindings
#### Space
Toggles play / pause.
#### Arrow Keys
Substitute for scrolling. Works in all directions.
#### Ctrl / Cmd
To make it faster to switch action type, *holding Ctrl / Cmd* switches to *Eraser*, and letting go switches to *Brush*. Thus, tapping Ctrl / Cmd is a quick shorthand to return to Brush.
#### Ctrl / Cmd + Z, Ctrl / Cmd + Shift + Z
Undo and redo, respectively.
#### Ctrl / Cmd + S
Saves the file. Does not stop auto-save from regularly occuring.
#### A
Selects all the notes in the currently open channel.
#### Shift
This is a quick shorthand to switch the action type to *Select*. Once in *Select*, holding *Shift* while selecting notes allows for multi-select.
#### Alt + Drag
This is how you can duplicate a section of music. By holding Alt as you drag, a copy of the selected music is created, becoming solidified when you let go at the location where you do so.
#### Hotbar keys 1-7
These are shorthands to switch to the respective music channel, to avoid having to cycle through all 7. To duplicate a section of music into a new channel, Alt + Drag the music section, then press the music channel you want to move it into at the same time.