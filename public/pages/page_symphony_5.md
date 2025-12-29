# What format should I convert to?
As of Symphony 1.1, there are 2 different formats you can convert your Symphony files into: MIDI, and MusicXML.

> TL;DR - If you're looking to use the file in a DAW workflow for music production (FL Studio, Ableton, Logic, etc.), choose ***MIDI***. If you're trying to compose or arrange sheet music (MuseScore, Noteflight, Finale), choose ***MusicXML***. Below are the details regarding how Symphony actually handles the conversion process.

---

## MIDI (.mid)
MIDI, or Musical Instrument Digital Interface, is a simple format that essentially just tracks the notes' pitch, time, duration, and velocity. As such, it's used in many DAW applications like FL Studio, Ableton, Logic, etc. Because of its simplicity, you can't encode additional information like the music's time signature or separate the music by color channel or staff.

### Notes regarding MIDI
Many notation programs like MuseScore do actually support MIDI, although because key musical data like bpm-relative tempo and time signature are lost, the resulting files are extremely difficult to work with. Symphony 1.0.2 only supports MIDI conversion, so we recommend upgrading to 1.1 for this reason (and many more).

---

## MusicXML (.musicxml)
MusicXML is the universal standard format for musical notation, and it's supported by virtually all composition / arrangement programs such as MuseScore, Noteflight, Finale, and many more. MusicXML doesn't mesh well with DAW applications, since it focuses more on notation, but it gives very fine control on how composition programs like MuseScore can display the sheet music. Time signature, clef, beat-relative tempo, are built-in to this format.

### Color Channels -> Staffs
By default, Symphony will assign each color channel to its own staff. In the export process, you'll be able to specify the instrument or vocal part of each staff using the existing presets or making your own. The conversion process will automatically assign the correct clef to common part names (e.g. Trombone -> Bass Clef, Soprano (voice) -> Treble Clef)

### Beats, Tempo, and Time Signature
Symphony 1.1 projects have a *beat length* (in tiles) and *measure length* (in beats) stored in the project data by default. In the conversion process, these values, as well as the tempo (in tiles-per-minute or *tpm*) are used to calculate a default tempo (in **bpm**) and time signature. If you keep those fields as 'auto', Symphony will calculate what those values should be so that your music intuitively converts without looking or sounding different from how it does within Symphony. However, if you would like to change them, you can manually set these fields. Changing these fields in the convert modal will not modify the data within the Symphony file, it is only used for the conversion process.