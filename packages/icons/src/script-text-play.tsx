import { mdiScriptTextPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScriptTextPlay(props: IconComponentProps) {
  return <Icon path={mdiScriptTextPlay} {...props} />;
}

export { mdiScriptTextPlay as path };
