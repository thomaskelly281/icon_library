import { mdiScriptTextKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScriptTextKey(props: IconComponentProps) {
  return <Icon path={mdiScriptTextKey} {...props} />;
}

export { mdiScriptTextKey as path };
