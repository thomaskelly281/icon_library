import { mdiNotebook } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Notebook(props: IconComponentProps) {
  return <Icon path={mdiNotebook} {...props} />;
}

export { mdiNotebook as path };
