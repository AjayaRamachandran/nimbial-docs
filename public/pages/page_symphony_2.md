# Get Symphony for macOS

## Step 1 - Download
Go to [symphony.nimbial.com](https://symphony.nimbial.com) and navigate to the **Download** tab.

Press **"Download Symphony for macOS 11+"**

If the platform shown on the button does not match the system you are on, scroll down to **Releases**, and select the latest version for your system.

A .zip file titled **Symphony-vX.X.X-macOS-installer.zip** should begin downloading.

Once the file has finished downloading, unzip the file, preferably in a temporary folder like **Downloads**. Open it once it has been unzipped.

![macOS Unzipped Folder](https://www.dropbox.com/scl/fi/lt9i0s8r4s0myb7ksc48l/macOSUnzippedFolder.png?rlkey=djkh4qr2lajagfilpmporws5k&st=yhvdbayz&raw=1)

Double-click **Symphony-0.0.0-arm64.dmg**. You should be prompted with a momentary setup wizard. If there are any instructions, follow them, then close the installer. (This should usually involve dragging the Symphony icon into the Applications folder)

Symphony is now installed. You can find it as an app via **Spotlight** or in your App Launcher.

## "File is damaged"
On some mac computers, you may get a dialog box like the one below:

![file is damaged photo](https://www.dropbox.com/scl/fi/5us00l9f6dn80arahw3lg/macOSfileIsDamaged.png?rlkey=rcfiwnvqmio1aklrd43d2o7uw&st=8yhjfm8o&raw=1)

**Do not click 'Move to Trash'.**

Instead, press cancel for now. Then, open **Terminal**.

In the terminal, type the following command:
```bash
xattr -cr /Applications/Symphony.app
```
After running, nothing should visually happen -- this means the command ran as intended.

Symphony should now have the permissions necessary to run on your computer. You can run it via App Launcher or Spotlight.