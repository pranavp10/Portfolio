import Icon from "@/components/icon/icon";
import NumberList from "@/components/numberList";
import IconTitleCard from "../gears/iconsTitleCars";
import Kbd from "@/components/kbd";
import Window from "@/components/window";
import Code from "@/components/code";

const Page = () => (
  <main className="max-w-2xl w-full m-auto mb-36">
    <header className="mt-16">
      <h1 className="text-xl">VS Code Setup</h1>
      <p className="mt-3 text-primary-white-300 text-pretty font-mono text-sm">
        The VS Code settings I use every day for coding.
      </p>
      <div className="pt-14">
        <h2 className="mb-3">Step 1</h2>
        <IconTitleCard
          icon={
            <Icon
              name="box"
              className={iconClassName}
              gradientName="gradient"
            />
          }
          title="Download necessary files"
        />
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="flex flex-col gap-2">
            <a
              href="/download/operator-mono.zip"
              download
              className="flex items-center justify-center gap-2 text-primary-white-300 px-4 rounded-lg py-2 font-medium border border-primary-white-50 text-center hover:bg-primary-white-50 font-mono hover:text-primary-white group transition duration-300 ease-in-out"
            >
              operator-mono.zip{" "}
              <svg
                width="12"
                className="w-2 h-2 group-hover:scale-125 block"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <NumberList>
              <p className="text-primary-white-300 text-pretty font-mono text-sm">
                Unzip the font&apos;s file
              </p>
              <p className="text-primary-white-300 text-pretty font-mono text-sm">
                Select all the fonts, right click, and click to Install
              </p>
            </NumberList>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="/download/vsc-extensions.txt"
              download
              className="flex items-center justify-center gap-2 text-primary-white-300 px-4 rounded-lg py-2 font-medium border border-primary-white-50 text-center hover:bg-primary-white-50 font-mono hover:text-primary-white group transition duration-300 ease-in-out"
            >
              vsc-extensions.txt{" "}
              <svg
                width="12"
                className="w-2 h-2 group-hover:scale-125 block"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <NumberList>
              <p className="text-primary-white-300 text-pretty font-mono text-sm ">
                Place this file in{` `}
                <b>downloads</b>
              </p>
              <p className="text-primary-white-300 text-pretty font-mono text-sm">
                Open the vscode in{` `}
                <b>downloads directory</b>
              </p>
              <div className="text-primary-white-300 text-pretty font-mono text-sm">
                Install{` `}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=aslamanver.vsc-export"
                  target="_blank"
                  className="decoration-zinc-400 decoration-2 transition-all flex gap-2 items-center hover:text-highlight"
                  rel="noreferrer"
                >
                  VSC Export & Import
                  <svg
                    width="12"
                    className="w-2 h-2 group-hover:scale-125 block"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                {` `} extension in vs code.
              </div>
            </NumberList>
          </div>
        </div>
        <div className="pt-14">
          <h2 className="mb-3">Step 2</h2>
          <IconTitleCard
            icon={
              <Icon
                name="box"
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title="Installing all the extensions"
          />
          <div className="ml-[6.5px]">
            <NumberList>
              <div className="flex gap-2 flex-col">
                <p className="text-primary-white-300 text-pretty font-mono text-sm">
                  Open Prompt by press the{" "}
                  <b className="text-primary-white">cmd</b> +{" "}
                  <b className="text-primary-white">shift</b> +{" "}
                  <b className="text-primary-white">p</b> key
                  <br />
                </p>
                <div>
                  <Kbd text="⌘" />
                  {` `}+{` `}
                  <Kbd text="⇧" />
                  {` `}+{` `}
                  <Kbd text="P" />
                </div>
              </div>
              <div>
                <p className="text-primary-white-300 text-pretty font-mono text-sm">
                  Enter the text in prompt and press <Kbd text="Enter ⏎" />
                </p>
                <div className="mt-3">
                  <Window title="Prompt.txt" textToCopy="VSC Export & Import">
                    <p className="text-primary-white-300 text-pretty font-mono text-sm">
                      VSC Export & Import
                    </p>
                  </Window>
                </div>
              </div>
              <p className="text-primary-white-300 text-pretty font-mono text-sm">
                All extension will start to install
              </p>
            </NumberList>
          </div>
        </div>
        <div className="pt-14">
          <h2 className="mb-3">Step 3</h2>
          <IconTitleCard
            icon={
              <Icon
                name="coding"
                className={iconClassName}
                gradientName="gradient"
              />
            }
            title="VS Code Settings"
          />
          <div className="ml-[6.5px]">
            <NumberList>
              <div className="flex gap-2 flex-col">
                <p className="text-primary-white-300 text-pretty font-mono text-sm">
                  Open Prompt by press the{" "}
                  <b className="text-primary-white">cmd</b> +{" "}
                  <b className="text-primary-white">shift</b> +{" "}
                  <b className="text-primary-white">p</b> key
                  <br />
                </p>
                <div>
                  <Kbd text="⌘" />
                  {` `}+{` `}
                  <Kbd text="⇧" />
                  {` `}+{` `}
                  <Kbd text="P" />
                </div>
              </div>
              <div>
                <p className="text-primary-white-300 text-pretty font-mono text-sm">
                  Enter the text in prompt and press <Kbd text="Enter ⏎" />
                </p>
                <div className="mt-3">
                  <Window
                    title="Prompt.txt"
                    textToCopy="Preferences: Open Settings (JSON)"
                  >
                    <p className="text-primary-white-300 text-pretty font-mono text-sm">
                      Preferences: Open Settings (JSON)
                    </p>
                  </Window>
                </div>
              </div>
              <div>
                <p className="text-primary-white-300 text-pretty font-mono text-sm">
                  Copy the settings.json from the below window
                </p>
                <div className="mt-3">
                  <Code
                    code={settingsJSON}
                    language="json"
                    title="settings.json"
                  />
                </div>
              </div>

              <p className="text-primary-white-300 text-pretty font-mono text-sm">
                Past the code in the settings.json file in vs code
              </p>
              <p className="text-primary-white-300 text-pretty font-mono text-sm">
                Save the <b>setting.json</b> file{`  `}
                <Kbd text="⌘" /> + <Kbd text="s" />
                {`  `}
                and restart the vscode.
              </p>
              <p className="text-primary-white-300 text-pretty font-mono text-sm">
                Done! 🚀
              </p>
            </NumberList>
          </div>
        </div>
      </div>
    </header>
  </main>
);

const iconClassName = `border border-primary-white-50 w-9 h-9 p-2 bg-primary-white-50 rounded-md`;

export default Page;

const settingsJSON = `{
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
  },
  "[python]": {
    "editor.formatOnType": true,
    "editor.defaultFormatter": "ms-python.autopep8",
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
  },
  "auto-rename-tag.activationOnLanguage": ["*"],
  "blockman.n01LineHeight": 0,
  "cSpell.language": "en,en-US,en-GB",
  "cSpell.languageSettings": [],
  "cSpell.userWords": [],
  "diffEditor.wordWrap": "on",
  "editor.accessibilitySupport": "off",
  "editor.bracketPairColorization.enabled": true,
  "editor.cursorBlinking": "solid",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 5,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.detectIndentation": true,
  "editor.fontFamily":
    "Operator Mono,'Fira Code', Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 17,
  "editor.fontWeight": "400",
  "editor.formatOnPaste": true,
  "editor.guides.bracketPairs": false,
  "editor.guides.indentation": false,
  "editor.inlayHints.enabled": "on",
  "editor.inlineSuggest.enabled": true,
  "editor.insertSpaces": true,
  "editor.largeFileOptimizations": false,
  "editor.letterSpacing": 0.5,
  "editor.lineHeight": 25,
  "editor.linkedEditing": true,
  "editor.quickSuggestions": {
    comments: false,
    other: true,
    strings: true,
  },
  "editor.renderLineHighlight": "line",
  "editor.renderWhitespace": "all",
  "editor.stickyScroll.enabled": true,
  "editor.suggestSelection": "first",
  "editor.tabSize": 1,
  "editor.wordWrap": "on",
  "emmet.triggerExpansionOnTab": true,
  "errorLens.excludeBySource": [
    "ts(2304)",
    "eslint(@typescript-eslint/no-unused-vars)",
    "ts(2339)",
  ],
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.ignoreRebaseWarning": true,
  "git.openRepositoryInParentFolders": "always",
  "git.suggestSmartCommit": false,
  "github.copilot.enable": {
    "*": true,
    plaintext: false,
    markdown: false,
    scminput: false,
    properties: true,
    yaml: true,
  },
  "gitlens.advanced.messages": {
    suppressLineUncommittedWarning: true,
  },
  "gitlens.gitCommands.closeOnFocusOut": true,
  "importCost.showCalculatingDecoration": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "json.schemas": [],
  "liveServer.settings.donotShowInfoMsg": true,
  "liveshare.allowGuestDebugControl": true,
  "liveshare.allowGuestTaskControl": true,
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.env.osx": {
    FIG_NEW_SESSION: "1",
  },
  "terminal.integrated.fontFamily": "Operator Mono",
  "typescript.inlayHints.parameterNames.enabled": "all",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "vsicons.dontShowNewVersionMessage": true,
  "vsintellicode.modify.editor.suggestSelection":
    "automaticallyOverrodeDefaultValue",
  "workbench.colorCustomizations": {
    "editor.lineHighlightBackground": "#1073cf2d",
    "editor.lineHighlightBorder": "#9fced11f",
  },
  "workbench.colorTheme": "Winter is Coming (Dark Blue)",
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.productIconTheme": "fluent-icons",
  "workbench.settings.enableNaturalLanguageSearch": false,
  "workbench.sideBar.location": "right",
  "workbench.startupEditor": "newUntitledFile",
  "editor.formatOnSave": true,
  "console-ninja.featureSet": "Pro",
  "[svg]": {
    "editor.defaultFormatter": "jock.svg",
  },
};`;